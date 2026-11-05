
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Registro = {
  id: string;
  numero: number;
  hora: string;
};

export default function App() {
  const [contador, setContador] = useState<number>(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevoContador = contador + 1;
    const horaFormateada = new Date().toLocaleTimeString();

    setContador(nuevoContador);

    const nuevoRegistro: Registro = {
      id: Date.now().toString(),
      numero: nuevoContador,
      hora: horaFormateada,
    };

    setRegistros((anteriores) => [nuevoRegistro, ...anteriores]);
  };

  // Reto 1: Restar un like
  const restarLike = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  // Reto 1: Reiniciar el contador
  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };

  // Reto 2: Cambiar el color cuando supera 10 likes
  const colorContador = contador > 10 ? '#e74c3c' : '#3498db';

  return (
    <View style={estilos.body}>
      <View style={estilos.container}>

        <Text style={estilos.h1}>Contador de Likes</Text>

        <Text style={estilos.description}>
          Presiona los botones para aumentar o disminuir tus likes.
        </Text>

        <Text style={[estilos.counterBox, { color: colorContador }]}>
          {contador}
        </Text>

        {contador > 10 && (
          <Text style={estilos.mensaje}>
            ¡Has superado los 10 likes!
          </Text>
        )}

        {/* Botón para aumentar */}
        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
        >
          <Text style={estilos.btnText}>¡Dar Like!</Text>
        </TouchableOpacity>

        {/* Botón para restar */}
        <TouchableOpacity
          style={estilos.btnRestar}
          onPress={restarLike}
        >
          <Text style={estilos.btnText}>Restar Like</Text>
        </TouchableOpacity>

        {/* Botón para reiniciar */}
        <TouchableOpacity
          style={estilos.btnReiniciar}
          onPress={reiniciarContador}
        >
          <Text style={estilos.btnText}>Reiniciar a cero</Text>
        </TouchableOpacity>

        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Like</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[
                  estilos.tr,
                  index % 2 === 0 ? estilos.trEven : null,
                ]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>
                  {item.numero}
                </Text>

                <Text style={[estilos.td, estilos.cellHora]}>
                  {item.hora}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f4f7f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    elevation: 5,
  },
  h1: {
    color: '#2c3e50',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  counterBox: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  mensaje: {
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  btnClick: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  btnRestar: {
    backgroundColor: '#e67e22',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  btnReiniciar: {
    backgroundColor: '#7f8c8d',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableContainer: {
    width: '100%',
    maxHeight: 220,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tableBody: {
    maxHeight: 170,
  },
  tr: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
  trEven: {
    backgroundColor: '#fafafa',
  },
  th: {
    color: '#7f8c8d',
    fontWeight: '600',
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },
  td: {
    color: '#333',
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },
  
  cellNumero: {
    flex: 1,
  },
  cellHora: {
    flex: 1.5,
  },
});

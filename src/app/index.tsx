
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';

export default function Index() {

  const [registros, setRegistros] = useState<
    { numero: number; hora: string }[]
  >([]);

  const manejarClic = () => {
    const nuevoNumero = registros.length + 1;

    const fecha = new Date();

    const hora =
      String(fecha.getHours()).padStart(2, '0') + ':' +
      String(fecha.getMinutes()).padStart(2, '0') + ':' +
      String(fecha.getSeconds()).padStart(2, '0');

    const nuevoRegistro = {
      numero: nuevoNumero,
      hora: hora
    };

    setRegistros((anterior) => [
      nuevoRegistro,
      ...anterior
    ]);
  };

  return (
    <View style={estilos.fondo}>
      <StatusBar barStyle="dark-content" />

      <View style={estilos.contenedor}>

        <Text style={estilos.titulo}>
          Interactividad con el DOM
        </Text>

        <Text style={estilos.descripcion}>
          Haz clic en el botón para aumentar el contador y
          registrar la hora de cada clic.
        </Text>

        <Text style={estilos.contador}>
          {registros.length}
        </Text>

        <TouchableOpacity
          style={estilos.boton}
          onPress={manejarClic}
          activeOpacity={0.8}
        >
          <Text style={estilos.textoBoton}>
            ¡Haz clic aquí!
          </Text>
        </TouchableOpacity>

        <View style={estilos.tabla}>

          <View style={estilos.encabezado}>
            <Text style={estilos.textoEncabezado}>
              Nº Clic
            </Text>

            <Text style={estilos.textoEncabezado}>
              Hora
            </Text>
          </View>

          <ScrollView style={estilos.lista}>
            {registros.map((registro) => (
              <View
                key={registro.numero}
                style={estilos.fila}
              >
                <Text style={estilos.celda}>
                  {registro.numero}
                </Text>

                <Text style={estilos.celda}>
                  {registro.hora}
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

  fondo: {
    flex: 1,
    backgroundColor: '#f4f7f6',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 15
  },

  contenedor: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 400,
    padding: 24,
    paddingTop: 38,
    borderRadius: 13,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.12,
    shadowRadius: 10
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#253b52',
    marginBottom: 15,
    textAlign: 'center'
  },

  descripcion: {
    fontSize: 14,
    color: '#45566b',
    textAlign: 'center',
    marginBottom: 40
  },

  contador: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 40
  },

  boton: {
    backgroundColor: '#28c76f',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginBottom: 20,
    elevation: 3
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  tabla: {
    width: '100%'
  },

  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f7f8f9',
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },

  textoEncabezado: {
    color: '#34495e',
    fontSize: 16,
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'center'
  },

  lista: {
    maxHeight: 250
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },

  celda: {
    color: '#45566b',
    fontSize: 14,
    width: '50%',
    textAlign: 'center'
  }

});

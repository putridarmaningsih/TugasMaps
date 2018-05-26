import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.116371,
          longitude: 115.087887
        },
        title: 'Universitas Pendidikan Ganesha',
        subtitle: 'Jl. Udayana No. 11, Singaraja, Banjar Tegal, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
      {
        key:2,
        latlng: {
          latitude:-8.120593,
          longitude: 115.090627
        },
        title: 'Universitas Panji Sakti',
        subtitle: 'Jl. Bisma No.22, Banjar Tegal, Singaraja, Kabupaten Buleleng, Bali 81125'
      },
      {
        key:3,
        latlng: {
          latitude:-8.118967,
          longitude: 115.099409
        },
        title: 'Sekolah Tinggi Keguruan Ilmu Pendidikan Agama Hindu',
        subtitle: 'Jl. Pulau Timor no.24 Singaraja, Banyuning, Kec. Buleleng, Singaraja, Bali 81113'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.121219,
          longitude: 115.094282
        },
        title: 'Sekolah Tinggi Ilmu Ekonomi Satya Darma',
        subtitle: 'Jl. Yudistira No.11, Kendran, Kec. Buleleng, Kabupaten Buleleng, Bali 81112'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Perguruan Tinggi di Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> @putriii_d </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#C62828',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#C62828',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});


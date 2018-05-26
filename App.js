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
          latitude:-8.142070,
          longitude: 115.096391
        },
        title: 'Universitas Pendidikan Ganesha',
        subtitle: 'Jl. Udayana Undiksa Kampus Tgh'
      },
      {
        key:2,
        latlng: {
          latitude:-8.117259,
          longitude: 115.161429
        },
        title: 'Universitas Panji Sakti',
        subtitle: 'Jl. Bisma 22 Banjar Tegal Buleleng'
      },
      {
        key:3,
        latlng: {
          latitude:-8.163638,
          longitude: 115.106392
        },
        title: 'Sekolah Tinggi Keguruan Ilmu Pendidikan Agama Hindu',
        subtitle: 'Jl. Pulau Timur 24 Wilayah Kec Buleleng Lainnya Buleleng'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.184105,
          longitude: 115.117730
        },
        title: 'Sekolah Tinggi Ilmu Ekonomi Satya Darma',
        subtitle: 'Jl. Pulau Timur 24 Wilayah Kec Buleleng Lainnya Buleleng'
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
           <Text style={styles.textFooter}> putridarmaningsih@gmail.com </Text>
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
    backgroundColor: 'green',
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
    backgroundColor: 'green',
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

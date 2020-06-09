import React, { Component, useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import homeImg from './src/assets/home.png'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>    
        <View style={styles.modalHeader}>
          <TouchableOpacity style={{ ...styles.backButton }} onPress={() => { setModalVisible(!modalVisible); }} >
            <Feather name='arrow-left' size={28} color='#FFF'></Feather>
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <View style={styles.modalContentImg }>
            <Image source={homeImg} />
          </View>
          
          <Text style={styles.modalContentText}>As vezes tudo o que precisamos</Text>
          <Text style={styles.modalContentText}>é conversar com alguém.</Text>

          <View style={styles.modalContentButtons}>
            <TouchableOpacity style={styles.modalContentButton} onPress={() => {Linking.openURL(`tel:190`)}}>
              <Text style={styles.modalContentButtonText}>Ligar para a policia.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalContentButton} onPress={() => {Linking.openURL('content://com.android.contacts/contacts')}}>
              <Text style={styles.modalContentButtonText}>Ligar para um amigo</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalContentText}>Não fique sozinha.</Text>
          <Text style={styles.modalContentText}>Não fique em perigo.</Text>
          <Text style={styles.modalContentText}>Busque formas ajuda.</Text>

        </View>


      </View>

    
    </Modal>


      <TouchableOpacity style={styles.action} onPress={() => {
        setModalVisible(!modalVisible);
      }}>
        <Text style={styles.actionText}>Violência contra a mulher</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row'

  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },



  modalView: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: "#652281",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  modalHeader: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },

  modalContentText: {
    alignItems: "center",

    justifyContent: 'center',

    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },

  modalContentButtons: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },

  modalContentButton: {
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContentButtonText: {
    color: '#000000',
    fontSize: 17,
    textAlign: 'center',
  },

  modalContentImg: {
    paddingBottom: 50
  }

});

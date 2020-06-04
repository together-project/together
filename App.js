import React, { Component, useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert, Image } from 'react-native';
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
        Alert.alert("Modal has been closed.");
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
          
          <Text style={styles.modalContentText}>Sometimes all we need is</Text>
          <Text style={styles.modalContentText}>someone to talk to.</Text>

          <View style={styles.modalContentButtons}>
            <TouchableOpacity style={styles.modalContentButton} onPress={() => {
              setModalVisible(!modalVisible);
            }}>
              <Text style={styles.modalContentButtonText}>Call authorities</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalContentButton} onPress={() => {
              setModalVisible(!modalVisible);
            }}>
              <Text style={styles.modalContentButtonText}>Call a friend</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalContentText}>Don’t stay alone.</Text>
          <Text style={styles.modalContentText}>Don’t stay in danger.</Text>
          <Text style={styles.modalContentText}>Reach out to help.</Text>

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
    alignItems: 'center'
  },

  modalContentButton: {
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContentButtonText: {
    color: '#000000',
    fontSize: 18,
  },

  modalContentImg: {
    paddingBottom: 50
  }

});

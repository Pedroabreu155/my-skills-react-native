import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
})

export const Button = ({ handleAddNewSkill }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddNewSkill}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}
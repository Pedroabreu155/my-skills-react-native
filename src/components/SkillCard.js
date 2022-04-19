import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
});

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}
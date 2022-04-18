import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform, 
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Pedro</Text>
      <TextInput style={styles.input} placeholder="New skill" placeholderTextColor="#555"/>
      <TouchableOpacity>
        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


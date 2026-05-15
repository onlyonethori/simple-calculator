import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Error handling for empty or invalid inputs
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Error: Enter valid numbers');
      return;
    }

    if (operation === '+') setResult((n1 + n2).toString());
    if (operation === '-') setResult((n1 - n2).toString());
    if (operation === '*') setResult((n1 * n2).toString());
    if (operation === '/') {
      if (n2 === 0) {
        setResult('Error: Division by zero');
      } else {
        setResult((n1 / n2).toString());
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>
      
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Enter first number" 
        value={num1} 
        onChangeText={setNum1} 
      />
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Enter second number" 
        value={num2} 
        onChangeText={setNum2} 
      />
      
      <View style={styles.buttonRow}>
        <Button title="  +  " onPress={() => calculate('+')} />
        <Button title="  -  " onPress={() => calculate('-')} />
        <Button title="  * " onPress={() => calculate('*')} />
        <Button title="  /  " onPress={() => calculate('/')} />
      </View>

      <Text style={styles.resultText}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#777', 
    padding: 10, 
    marginBottom: 15, 
    borderRadius: 5,
    fontSize: 18
  },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 20 
  },
  resultText: { 
    fontSize: 22, 
    textAlign: 'center', 
    fontWeight: 'bold',
    color: '#333'
  }
});

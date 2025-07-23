import { useEffect, useState } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native';


export const CounterApp = () => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (count > 0 && message === 'Count cannot be negative') {
      setMessage('');
    }
  }, [count, message])

  const handleIncreaseValue = (value: number): void => {
    if( count > 0 ){
        setMessage('');
    }
    setCount(count + value);
  };

  const handleDecreaseValue = (value: number): void => {
    if (count - value < 0) {
      setMessage('Count cannot be negative');
      return;
    }
    setCount(count - value);
  }

  const handleResetValue = (): void => {
    setCount(0);
    setMessage('');
  }

  return (
    <View style={styles.container}>
        <View style={{ alignItems: 'center', marginBottom: 20, justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Andres Pausin's first react native app</Text>
            <Text style={styles.text}>{count}</Text>
            {message ? <Text style={{ color: 'red' }}>{message}</Text> : null}
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={[styles.button]} onPress={() => handleResetValue()}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
          <Pressable style={[styles.button]} onPress={() => handleDecreaseValue(1)}>
            <Text style={styles.buttonText}>-1</Text>
          </Pressable>
          <Pressable style={[styles.button]} onPress={() => handleIncreaseValue(1)}>
            <Text style={styles.buttonText}>+1</Text>
          </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text : {
        fontSize: 120,
        color: '#333',
        fontWeight: '100'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        width: '90%',
        paddingVertical: 20,
        marginBottom: 20,
        position: 'absolute',
        bottom: 30
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
})

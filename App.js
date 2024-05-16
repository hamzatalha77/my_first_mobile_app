import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>This is my First Mobile App</Text>
      </View>
      <Text style={{ margin: 16, border: '1px solid red' }}>Welcome!</Text>
      <Button title="Tap me!" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    color: 'green',
    width: '100%',
    height: '100%'
  }
})

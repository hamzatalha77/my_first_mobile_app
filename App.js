import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>This is my First Mobile App</Text>
      </View>
      <Text
        style={{ margin: 16, borderWidth: 2, borderColor: 'red', padding: 16 }}
      >
        Welcome!
      </Text>
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

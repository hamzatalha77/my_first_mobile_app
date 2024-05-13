import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-web'

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
  }
})

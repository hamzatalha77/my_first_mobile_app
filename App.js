import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-web'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
})

import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-web'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="type something in this section" />
        <Button title="add something" />
      </View>
      <Text>List of goals</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row'
  }
})

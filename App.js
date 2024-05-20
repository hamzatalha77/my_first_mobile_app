import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return <View style={styles.appContainer}></View>
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

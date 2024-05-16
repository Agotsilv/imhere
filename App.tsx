import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import Toast from 'react-native-toast-message';

// F0309

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Home />
      <Toast />
    </>
  );
}


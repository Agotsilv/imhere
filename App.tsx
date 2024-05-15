import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

// F0309

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Home />
    </>
  );
}


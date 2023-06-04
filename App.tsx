import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FormScreen } from './src/pages/formScreen';
import { ApplicationProvider } from '@ui-kitten/components/theme';
import * as eva from '@eva-design/eva';
import { Routes } from './src/Routes';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
        <ApplicationProvider {...eva} theme={eva.light} >
              <AuthProvider>
                <Routes />
              </AuthProvider>
        </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

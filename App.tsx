import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FormScreen } from './src/pages/formScreen';
import { ApplicationProvider } from '@ui-kitten/components/theme';
import * as eva from '@eva-design/eva';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light} >
      <ScrollView>
        <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 800,
        width: 400
        }}>
          <FormScreen/>
        </View>
      </ScrollView>
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

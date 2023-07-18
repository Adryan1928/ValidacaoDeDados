import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FormScreen } from './src/pages/formScreen';
import { ApplicationProvider } from '@ui-kitten/components/theme';
import * as eva from '@eva-design/eva';
import { Routes } from './src/Routes';
import { AuthProvider } from './src/contexts/auth';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './src/services/queryClient';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App() {
  return (
        <ApplicationProvider {...eva} theme={eva.light} >
          <QueryClientProvider client={queryClient} >
            <AuthProvider>
              <Routes />
            </AuthProvider>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
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

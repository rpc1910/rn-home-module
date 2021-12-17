import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '@rpc_1910/ui';
import { useNavigation } from '@react-navigation/native';

function Screen2() {
  const { navigate, goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Text size={30}>Screen 2</Text>
      <Button
        onPress={() => {
          // @ts-ignore
          navigate('Screen3');
        }}
        style={styles.button}
      >
        Avançar
      </Button>
      <Button onPress={goBack}>Voltar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
  },
});

export default Screen2;

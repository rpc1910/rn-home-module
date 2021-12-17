import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '@rpc_1910/ui';
import { useNavigation } from '@react-navigation/native';

function Screen3() {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Text size={30}>Screen 3</Text>

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
});

export default Screen3;

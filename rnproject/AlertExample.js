import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button, Alert} from 'react-native';

const AlertExample = () => {
  const simpleAlertHandler = () => {
    alert('Hello I am simple Alert');
  };
  const twoOptionHandler = () => {
    Alert.alert(
        'Hello',
        'Im two option alert, Do you want to cancel me?',
        [
            {
                text: 'Yes',
                onPress : () => console.log('Yes Pressed')
            },
            {
                text:'No',
                onPress : ()=> console.log('No Pressed')
            }
        ]
        
    )
  };
  const threeOptionHandler = () => {
    Alert.alert(
        'Hello',
        'Im two option alert, Do you want to cancel me?',
        [
            {
                text: 'Yes',
                onPress : () => console.log('Yes Pressed')
            },
            {
                text:'No',
                onPress : ()=> console.log('No Pressed')
            },
            {
                text:'OK',
                onPress : ()=> console.log('OK Pressed')
            }
        ],
        {cancelable:true}
    )
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button title="Simple Alert" onPress={simpleAlertHandler}></Button>
        <Button title="Alert with two option" onPress={twoOptionHandler}></Button>
        <Button title="Alert with three option" onPress={threeOptionHandler}></Button>
      </View>
    </SafeAreaView>
  );
  export default AlertExample;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

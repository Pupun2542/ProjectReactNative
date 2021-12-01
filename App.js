/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {useState, useCallback} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, SafeAreaView, RefreshControl,TextInput} from  'react-native';

const Wait = (timeout) =>{
  return new Promise(resolve => setTimeout(resolve,timeout));
}

const uselessTextinput =() =>{

  const [text, oncChangeText] = useState("Useless Text: ");
  const[number, onChangeNumber] = useState(null)

  return(
    <SafeAreaView style={styles.container}>
      <TextInput
      style = {styles.Input}
      oncChangeText = {oncChangeText}
      value = {text}
      />
      <TextInput
      style = {styles.Input}
      oncChangeText = {onChangeNumber}
      value = {number}
      placeholder = {"useless placeholder"}
      keyboardType= "numeric"
      />
    </SafeAreaView>
  );

}


const App = () =>{
  const[Refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(()=> {
    setRefreshing(true)
    Wait(2000).then (()=> setRefreshing(false));
  },[]);

  //const [state, setstate] = useState(initialState);
  //const [number,setNumber] = useState(0);
  //const [isRandom,setRandom] = useState(false);
  //const RandomWithoutMemo = Math.random();

  //const RandomNumber = useMemo (() => {
  //  return Math.random();
  //}, [isRandom]);

  return(
    <SafeAreaView style={styles.container}>
     
    </SafeAreaView>
  );
  };
  const styles = StyleSheet.create({
     container: {
     flex: 1,
     },
     scrollView: {
     flex: 1,
     backgroundColor: 'pink',
     alignItems: 'center',
     justifyContent: 'center',
     },
     Input:{
       height: 40,
       margin: 12,
       borderWidth: 1,
       padding: 10,
     }
     });

export default uselessTextinput;

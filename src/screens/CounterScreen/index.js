import React from 'react';
import {ImageBackground, StyleSheet, Text, View ,Image} from 'react-native';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
import CounterButton from '../../components/CounterButton';

const CounterScreen = () => {
    return (
      <View style={styles.steps}>
      
      <ImageBackground source={require('../../../assets/flower.jpeg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}> Walk more! stress less!</Text>
      
    
      <CounterButton />
    </ImageBackground>
      
      </View>
    );
  }

  const styles = StyleSheet.create({
      steps:{
        flex:1,
        justifyContent: 'space-around',
   
      },
      backgroundImage:{
        flex:1
      },
      
      
      text:{
        fontSize:32,
        color:'#8FBC8F',
        
        marginTop:40,
        marginBottom:30,
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle:'normal',
        fontWeight:'bold',
        marginLeft:10,
      },
      button:{
        backgroundColor:'black',
        
      },
      image:{
        flex:50,
        marginTop:0,
        marginLeft:0
      },
  })
  export default CounterScreen;
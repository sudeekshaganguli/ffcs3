import React, { useState } from 'react';
import {Text,Button,StyleSheet} from 'react-native';
const CounterButton=() =>{
  const [count, setCount] = useState(0);
  return (
      <>
      <Button title=" Click here after every 30 minutes of walk" color='white' fontSize= '30' onPress={() => setCount(count + 30)} />
      <Text style={styles.text}>You have walked {count} minutes today!</Text>
      {/* </Button> */}
      </>
  );
}
const styles = StyleSheet.create({
    text:{
        marginTop:0,
        marginBottom:200,
        color:'#5F9EA0',
        fontSize:20,
        fontStyle:'normal',
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40
        
    }
})
export default CounterButton;
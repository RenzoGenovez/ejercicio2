import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    const[text1,settext1]=useState('');
  const[resultado,setresultado]=useState('');
  function Salario(var1:any){
      var sueldobase = parseFloat(var1);
      var descuentos = sueldobase*0.03 + sueldobase*0.04 + sueldobase*0.05;
      var total= sueldobase - descuentos;
      
    var resul="Con los descuentos aplicados su sueldo es de:" + total ;
      setresultado(resul);
    
  }    
 return (
 <View style={styles.container}>
      <Text style={{padding:15, fontSize:24, backgroundColor:'#1f1f14',color:'white', textAlign:'center'}}>
        Calcular sueldo neto de un empleado
      </Text>
      
      <TextInput style={{padding:5,
      height:40,
      borderColor:'#999966',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Ingrese su sueldo base'
      keyboardType='numeric'
      onChangeText={(text1)=>settext1(text1)}
      />
          
<TouchableOpacity
style={{height:60, backgroundColor:'#999966', marginTop:10}}
onPress={()=>{Salario(text1)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Calcular
</Text>
</TouchableOpacity>

<Text style={{fontSize:32}}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
      justifyContent: 'center',
      
    flex: 1,
    backgroundColor: '#b3b3b3',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
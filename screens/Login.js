import React, { Component } from "react";
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon } from "native-base";


import {
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';
import api from '../data/api';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          username : '',
          pass : ''
        
        }
      }
      login = async () => {
        let validarlog = await api.validarLog(this.state.username,this.state.pass)
        if(validarlog.status == 1){
          this.props.navigation.navigate('Principal');
        }
        else
        {
          Alert.alert('Usuario o contraseña invalidos ');
    
        }
      }
        userLogin = () =>{ 
    
          const {username} = this.state;
          const {pass} = this.state;
     
      
          fetch('http://192.168.0.16/iot/data/login.php',{ 
            method: 'post',
            header: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body:JSON.stringify({
              pUsuario: username,
              pPass: pass
              
            })
      
          })
          .then((response) => response.text())
            .then((responseData) =>{
             
              Alert.alert("Bienvenido")
              if(responseData == 1){
                this.props.navigation.navigate('Principal');
              }
              else
              {
                Alert.alert('Usuario o contraseña invalidos ');
          
              }
              
            
            })
            .catch((error)=>{
                console.error(error);
            
            });
            
        }
        
      
     
      render(){
      const navegar = this.props.navigation;
     
        return (
            <>
     <Container>
       
       <Content contentContainerStyle = {styles.Content}>
         <Card>
           <CardItem header>
             <Text style={styles.TextCwnter}>Iniciar sesión</Text>
           </CardItem>
           <CardItem>
             <Body bordered style={styles.Botono}>         
             <Item>
              <Icon type='FontAwesome' name='user'/>
               <Input placeholder='Usuario' 
                   onChangeText= {(username) => this.setState({username})}/>
             </Item>
             <Item last>
             <Icon type='FontAwesome' name='lock'/>
               <Input placeholder='Contraseña' 
                          onChangeText= {(pass) => this.setState({pass})} />
             </Item>
             </Body>
           </CardItem>
           <CardItem footer>
             <Button dark style={styles.Boton} onPress={() => navegar.navigate('Registro')}><Text> Registrate </Text></Button>
             
             <Button dark style={styles.Boton2} onPress={this.userLogin}><Text> Iniciar Sesión </Text></Button>
           </CardItem>
        </Card>
       </Content>
     </Container>
     </>
   );
 }
}

const styles=StyleSheet.create({
 Content:{
   flex: 1,
   justifyContent: 'center',

 },
 TextCwnter:{
   textAlign:'center',
   width:'100%',
 },
 Boton:{
   marginLeft:'20%',
   
 },
 Botono:{
   paddingVertical:'35%',
   

 },
 Boton2:{
   marginRight:'20%',

 },
});
export default Login;
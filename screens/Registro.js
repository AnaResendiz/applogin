import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Input,Item,Icon} from 'native-base';
import {StyleSheet}from 'react-native';
class Registro extends Component {
  
    constructor(props){
      super(props)
      this.state={
        user: '',
        pass: '',
        email: ''
      }
    }
  
    register = () => api.registerData(this.state.user,this.state.pass,this.state.email);
   
    userRegister = () =>{ 
  
      const {user} = this.state;
      const {pass} = this.state;
      const {email} = this.state;
  
      fetch('http://192.168.0.16/iot/data/registrar.php',{ 
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          pUsuario: user,
          pPass: pass,
          pEmail: email
        })
  
      })
      .then((response) => response.text())
        .then((responseData) =>{
         
          Alert.alert("Registro exitoso");
          
        
        })
        .catch((error)=>{
            console.error(error);
        
        });
        
    }
   
    
    render() {
      const navegar = this.props.navigation;
      return (
      <Container>
        <Header />
        <Content contentContainerStyle = {styles.Content}>
          <Card>
            <CardItem header>
              <Text style={styles.TextCwnter}>Crea tu cuenta</Text>
              
            </CardItem>
            <CardItem header>
              <Text style={styles.TextCwnter}>Registrate con una red social</Text>
              
            </CardItem>
               <CardItem footer>
                <Button secundary style={styles.Boton3}><Icon type='Entypo' name='facebook'/></Button>
                <Button info style={styles.Boton2}><Icon type='AntDesign' name='twitter'/></Button>
             </CardItem>
             <Text style={styles.TextCwnter}>O</Text>
            <CardItem>
              <Body bordered style={styles.Botono}>         
              
              <Item>

                <Icon type='AntDesign' name='user'/>
                <Input placeholder='Nombre' onChangeText={(user) => this.setState({user})}/>
                
              </Item>
              <Item>

                <Icon type='FontAwesome' name='lock' onChangeText={(pass)=> this.setState({pass})} secureTextEntry={true}/>
                <Input placeholder='Contraseña' />

                <Icon type='Entypo' name='mail'/>
                <Input placeholder='correo'  onChangeText={(email) => this.setState({email})}/>
              
                
              </Item>
              </Body>
            </CardItem>
            <CardItem footer>
            <Button dark  style={styles.Boton2} onPress={()=>navegar.navigate('Login')} ><Text> Iniciar sesión</Text></Button>
              <Button dark style={styles.Boton} onPress={this.userRegister}><Text> Registrar </Text></Button>
            </CardItem>
         </Card>
        </Content>
      </Container>
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
    marginLeft:'70%',
    
  },
  Botono:{
    paddingVertical:'35%',
    

  },
  Boton2:{
    marginRight:'30%',
  },
  Boton3:{
    marginLeft:'30%',
  },
});  
export default Registro;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Input,Item,Icon} from 'native-base';
import {StyleSheet}from 'react-native';
 class Registro extends Component {
    render() {
    const navegar=this.props.navigation;
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
                <Input placeholder='Nombre'/>
                <Icon type='FontAwesome' name='user'/>
                <Input placeholder='Usuario' />
                
              </Item>
              <Item last>
                <Icon type='Entypo' name='mail'/>
                <Input placeholder='Correo' />
              </Item>
              <Item last>
                <Icon type='Entypo' name='phone'/>
                <Input placeholder='Número de telefono' />
              </Item>
              <Item last>
                <Icon type='FontAwesome' name='lock'/>
                <Input placeholder='Contraseña' />
              </Item>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button dark style={styles.Boton} onPress={() =>navegar.navigate('Login')}><Text> Registrar </Text></Button>
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
    marginLeft:'60%',
    
  },
  Botono:{
    paddingVertical:'20%',
    

  },
  Boton2:{
    marginRight:'30%',
  },
  Boton3:{
    marginLeft:'30%',
  },
});
export default Registro;

import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Input,Item,Icon} from 'native-base';
import {StyleSheet}from 'react-native';

 class Login extends Component {
     constructor(props) {
        super(props);
        this.state = {usuario: '', contra: ''};
      }
    render() {
    const navegar=this.props.navigation;
    return (
      <Container>
        <Header />
        <Content contentContainerStyle = {styles.Content}>
          <Card>
            <CardItem header>
              <Text style={styles.TextCwnter}>Iniciar sesión</Text>
            </CardItem>
            <CardItem>
              <Body bordered style={styles.Botono}>         
              <Item>
               <Icon type='FontAwesome' name='user'/>
                <Input placeholder='Nombre de usuario' value= {this.state.usuario}
                    onChangeText= {(usuario) => this.setState({usuario})}/>
              </Item>
              <Item last>
              <Icon type='FontAwesome' name='lock'/>
                <Input placeholder='Contraseña' value= {this.state.contra}
                          onChangeText= {(contra) => this.setState({contra})} />
              </Item>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button dark style={styles.Boton}><Text> Entrar </Text></Button>
              
              <Button dark style={styles.Boton2} onPress={() => navegar.navigate('Perfil', {contra: this.state.contra, usuario: this.state.usuario})} ><Text> Iniciar Sesión </Text></Button>
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
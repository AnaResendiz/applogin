import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';



class Perfil extends Component {

  render() {
    const navegar = this.props.navigation;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Hola {this.props.route.params.usuario}</Text>
        <Text style={styles.title}>Tu contraseña es {this.props.route.params.contra}</Text>
        <Button
                title='Regresar'
                onPress={() => navegar.navigate('Inicio de sesión')}
              /> 
            
      </View>
    );
  }
}

export default Perfil;

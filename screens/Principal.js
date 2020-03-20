import React, { Component } from 'react';
import { StyleSheet,Switch, ActivityIndicator, FlatList } from 'react-native';
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon } from "native-base";
class Principal extends Component{
    
    constructor(props){
        super(props);
        this.state = { isLoading: true }
    }

    async componentDidMount(){
        try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const responseJson = await response.json();
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {
        });
      }
      catch (error) {
        console.error(error);
      }

      try {
      const response2 = await fetch("https://swapi.co/api/planets/?format=json")
        const responseJson2 = await response2.json();
        this.setState({
          isLoading2: false,
          dataSource2: responseJson2.results,
        }, function () {
        });
      }
      catch (error) {
        console.error(error);
      }
     } // end componentDidMount

     render(){
        const navegar = this.props.navigation;
        if(this.state.showIndicator){
          return(
            <View style={misEstilos.content}>
            <ActivityIndicator size="large" color="#36FF0E"></ActivityIndicator>
            </View>
          );
        }else{
            if(this.isLoading){
                return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator color="#36FF0E"/>
                    <Text>Hola</Text>
                </View>
                );
            }else{
            
          return (
            <>
               <Container>
                <Content padder>
                  <Card>
                    <CardItem header bordered>
                        <Text>Peliculas</Text>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                      <View>
                    <Text>Peliculas</Text>
                            <FlatList 
                            data={this.state.dataSource}
                            renderItem={({item}) => 
                            <Text>{item.title}, {item.releaseYear}</Text>}
                            keyExtractor={({id}, index) => id }
                            />
                    </View>
                      </Body>
                    </CardItem>
                </Card>
                </Content>
              </Container>

              <Container>
                <Content padder>
                  <Card>
                    <CardItem header bordered>
                        <Text>Planetas</Text>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                      <View>
                    <Text>Planetas</Text>
                            <FlatList 
                            data={this.state.dataSource2}
                            renderItem={({item}) => 
          <Text>{item.name}, {' Gravedad: '}{item.gravity},{' Población: '}{item.population}</Text>}
                            keyExtractor={({id}, index) => id }
                            />
                    </View>
                      </Body>
                    </CardItem>
                </Card>
                </Content>
              </Container>
            </>
          );
        }
    }
     }
}

export default Principal;
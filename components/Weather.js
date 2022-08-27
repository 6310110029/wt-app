import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props){

  const [forecastInfo, setForecastInfo] = useState({
        line: '',
        main: '',
        description: '',
        temp: 0})

    useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1b6139f8d9343dbd67dd3c93c90aae2c`)
         .then((response) => response.json())
         .then((json) => {
             setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp
              });
        })
        .catch((error) => {
            console.warn(error);
            });
            }
    }, [props.zipCode])

    
    

    return (
        <View>
           <ImageBackground source={require('../cloud.jpg')} style={styles.backdrop}>
                <View style={styles.highlight}>
                    <Text style={styles.titleText}>Zip code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo}/>
                </View>
            </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",

        //alignItems: "center",
        width: "100%",
        height: "100%"
    },

    highlight: {
        backgroundColor: 'rgba(0, 255, 99, 0.5)',
        width:"70%", 
        height:"50%", 
       // paddingTop: Constants.statusBarHeight, 
        alignItems: 'center'
    },
});
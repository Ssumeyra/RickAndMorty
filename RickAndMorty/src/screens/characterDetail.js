import React, { Component, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { getCharacterDetail} from '../service/api';
import {mainStyles} from '../component/style'


export default CharacterDetailPage=({route,navigation})=> {
    const { itemId } = route.params;
    const [characterDetail, setcharacterDetail] = useState({
       /* "id":"",
        "name":"",
        "status":"",
        "species":"",
        "type": "",
        "gender":"",*/
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let mounted = true;
        async function getCharacterDetailApi() {
            setLoading(true);
            console.log("iddd",itemId)
            let response = await getCharacterDetail(itemId);
            console.log("chardetail",response)
            setcharacterDetail(response)
            setLoading(false);
            navigation.setOptions({title: response.name})
          }
      
          getCharacterDetailApi()
        return () => mounted = false;
      }, [])

        return (
            loading ?
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                 
                <ActivityIndicator color="blue"/>
              
            </View>
            :
            <View style={styles.container}>
                   <Image
       style={{borderRadius:(Dimensions.get("window").width*0.3)*0.2,alignItems:"center"}}
        source={{
            width:Dimensions.get("window").width*0.5,
            height:Dimensions.get("window").width*0.5,
          uri:  characterDetail.image,
        }}
    />
                <Text style={mainStyles.name}>{characterDetail.name}</Text>
                <Text style={mainStyles.air_date}>{characterDetail.species}</Text>
                <Text style={mainStyles.air_date}>{characterDetail.status}</Text>
                <Text style={mainStyles.air_date}>{characterDetail.gender}</Text>
                <Text style={mainStyles.air_date}>{characterDetail.location.name}</Text>
  
       </View>

        )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        margin:20
    },
})
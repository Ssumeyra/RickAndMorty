import React, { Component, useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View,TouchableOpacity, Dimensions } from 'react-native';
import { getEpisode,getCharacterAvatar ,baseUrl} from '../service/api';
import {mainStyles} from '../component/style'

export default EpisodeDetailPage=({route,navigation})=> {
    const { itemId } = route.params;
    const [episodeDetail, setEpisodeDetail] = useState({
        "air_date":"",
        "characters":[],
        "created":"",
        "episode":"",
        "id":"",
        "name":"",
        "url":""
    });
    useEffect(() => {
        let mounted = true;
        async function getEpisodeDetailApi() {
            console.log("iddd",itemId)
            let response = await getEpisode(itemId);
            console.log("dskfnd",response)
            setEpisodeDetail(response)
            navigation.setOptions({title: response.episode})
          }
      
          getEpisodeDetailApi()
        return () => mounted = false;
      }, [])

        return (
            <View style={mainStyles.container}>
                 <Text style={mainStyles.name}>{episodeDetail.name}</Text>
                 <Text style={mainStyles.air_date}>{episodeDetail.air_date}</Text>
               
                { episodeDetail.characters.length>0?
       <FlatList
        data={episodeDetail.characters}
       numColumns={2}
        renderItem={({item}) => 
        <View style={{margin:20,flex:1}}>
        <TouchableOpacity style={mainStyles.touchable} onPress={()=>navigation.navigate("CharacterDetail",{itemId:item.split('/').pop()})}>
       
       <Image
       style={{borderRadius:(Dimensions.get("window").width*0.3)*0.2,alignItems:"center"}}
        source={{
            width:Dimensions.get("window").width*0.3,
            height:Dimensions.get("window").width*0.3,
          uri:  `${baseUrl}character/avatar/${item.split('/').pop()}.jpeg`,
        }}
    />

        </TouchableOpacity>
       </View>
    }
      />:<View></View>}
  
       
            </View>

        )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent:"center",
        alignItems:"center"
    },
})
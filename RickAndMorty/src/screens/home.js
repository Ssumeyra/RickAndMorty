import React, { Component, useEffect, useState } from 'react';
import { Button, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View,TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { getEpisodes } from '../service/api';


export default HomePage=({navigation})=> {
    const [list, setList] = useState([]);
    const [offset, setOffset] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let mounted = true;
      
          getEpisodesApi()
        return () => mounted = false;
      }, [])
      async function getEpisodesApi() {
        setLoading(true);
          let response = await getEpisodes(offset);
          console.log("dskfnd",response)
          setList([...list,...response.results])
          setOffset(offset + 1);
          setLoading(false);
        }
      const renderFooter = () => {
        return (
          //Footer View with Load More button
          <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={getEpisodesApi}
              //On Click of button calling getData function to load more data
              style={styles.loadMoreBtn}>
              <Text style={styles.btnText}>Load More</Text>
              {loading ? (
                <ActivityIndicator color="white" style={{marginLeft: 8}} />
              ) : null}
            </TouchableOpacity>
          </View>
        );
      };
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
        return (
            <View style={styles.container}>
               {/* <Button title="Go to" onPress={() => {
                    console.log("aaa");
                    navigation.navigate("EpisodeDetail");
                    }} >
                
               
                </Button> */}
                  <FlatList
                  ItemSeparatorComponent={ItemSeparatorView}
          ListFooterComponent={renderFooter}
        data={list}
        renderItem={({item}) => 
        <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate("EpisodeDetail",{itemId:item.id})}>
        <View style={{flexDirection:"row"}}>
        
        <View style={{flexDirection:"column"}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.air_date}>{item.air_date}</Text>
        </View>
        </View>
        </TouchableOpacity>
    }
      />
            </View>

        )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
      },
      touchable:{
          margin:10,
          height:Dimensions.get("window").width*0.2
      },
      name:{
          fontSize:18,
          fontWeight:"bold"
      },
      air_date:{
        fontSize:16,
        fontWeight:"500"
      },
      episode:{
          width:100,
          height:100,
          backgroundColor:"grey"
      }
})
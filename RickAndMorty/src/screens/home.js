import React, {  useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getEpisodes } from '../service/api';
import { mainStyles } from '../component/style'


export default HomePage = ({ navigation }) => {
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
    setList([...list, ...response.results])
    setOffset(offset + 1);
    setLoading(false);
  }
  const renderFooter = () => {
    return (
      <View style={mainStyles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getEpisodesApi}
          style={mainStyles.loadMoreBtn}>
          <Text style={mainStyles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };
  const ItemSeparatorView = () => {
    return (
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
    <View style={mainStyles.container}>

      <FlatList
        ItemSeparatorComponent={ItemSeparatorView}
        ListFooterComponent={renderFooter}
        data={list}
        renderItem={({ item }) =>
          <TouchableOpacity style={mainStyles.touchable} onPress={() => navigation.navigate("EpisodeDetail", { itemId: item.id })}>
            <View style={{ flexDirection: "row" }}>

              <View style={{ flexDirection: "column" }}>
                <Text style={mainStyles.name}>{item.name}</Text>
                <Text style={mainStyles.air_date}>{item.air_date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      />
    </View>

  )

}
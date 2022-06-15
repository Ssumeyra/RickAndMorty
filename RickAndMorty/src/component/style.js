const { StyleSheet, Dimensions } = require("react-native");

const mainStyles = StyleSheet.create({
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
export {mainStyles}
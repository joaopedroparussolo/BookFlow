import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'row',
flexWrap: 'wrap',
gap: 30,
backgroundColor: "blue",
},
item1:{
    width: 100,
    height: 100,
    backgroundColor: 'blue',
},
item2:{
    width: 100,
    height: 100,
    backgroundColor: 'purple',
},
item3:{
    width: 100,
    height: 100,
    backgroundColor: 'gray',
},

});
export default styles;
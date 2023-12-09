import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

class Wishlist extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Wishlist</Text>
            </View>
        );
    }
}

export default Wishlist;

const styles = StyleSheet.create({
    container:{
        flex:1, alignItems: 'center', justifyContent: 'center'
    }
});
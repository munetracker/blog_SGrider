import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity 
                style={styles.FontAwesome_style}
                onPress={() => navigation.navigate(
                    'Edit' , { id: navigation.getParam('id') }
                )}>
              <FontAwesome name="pencil-square-o" size={24} />
            </TouchableOpacity>
      ),
    };
}



const styles = StyleSheet.create({
    FontAwesome_style: {
        marginRight: 20
    }
});

export default ShowScreen;



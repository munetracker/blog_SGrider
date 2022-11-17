import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList
                data = {state}
                keyExtractor = {(blogPosts) => blogPosts.id}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('Show', { id:item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={ () => deleteBlogPost(item.id) }>
                                    <Entypo style={styles.icon} name="trash"/>                            
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity 
            style={styles.FontAwesome_style}
            onPress={() => navigation.navigate('Create')}
          >
            <FontAwesome name="plus-circle" size={24} />
          </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    FontAwesome_style: {
        marginRight: 20
    }
});

export default IndexScreen;



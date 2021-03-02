import React from 'react';
import { Pressable, Text, View } from 'react-native';
import style from './style';
const Home = ({ navigation = {} }: IPropsHome) => (
    <View style={style.container}>
        <Pressable
            style={style.btnSongs}
            onPress={() => navigation.navigate('Songs')}>
            <Text>{'Songs'}</Text>
        </Pressable>
    </View>);
export default Home;
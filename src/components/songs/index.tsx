import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { songsData } from '../../config/constants';
import { Card } from './components';
import { useAppContext } from '../../hooks';
import styles from './style';
import { SET_SONGS } from '../../context/flux/types';
const setSongs = (dispatch: any) => {
    dispatch({ type: SET_SONGS, payload: songsData });
}
const Songs = () => {
    const [state, dispatch] = useAppContext();
    console.log('state', state);
    useEffect(() => {
        setSongs(dispatch);
    }, []);
    const { songs = [] } = { ...state };
    return (<View style={styles.container}>
        <Text>
            {'Songs List'}
        </Text>
        <FlatList data={songs}
            renderItem={({ item, index }) =>
                <Card {...item} key={`${index}`} />
            }
            horizontal={false}
            initialNumToRender={1}
            keyExtractor={(_, index) => `${index}`}
        />
    </View>)
}

export default Songs;
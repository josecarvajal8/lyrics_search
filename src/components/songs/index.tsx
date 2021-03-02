import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { songs } from '../../config/constants';
import { Card } from './components';
import styles from './style';
const Songs = () => {

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
import React from 'react';
import { Text, View } from "react-native";
import styles from './style';
const Card = ({ name, author, duration }: ICardProps) => <View style={styles.container}>
    <Text>{name}</Text>
    <Text>{author}</Text>
    <Text>{duration}</Text>
</View>;
export default Card;
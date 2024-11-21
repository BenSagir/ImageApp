import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native';

interface Props {
    url: string;
    title?: string;
}
export const FullImageComp: React.FC<Props> = (props) => {
    const { url, title } = props;


    return (<View style={styles.container}>
        {title && <Text>{title}</Text>}
        <Image source={{ uri: url }} style={styles.img} resizeMode="cover" />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignSelf: 'center',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        height: 800,
    },
    img: {
        width: '100%',
        height: '100%',
    },
})

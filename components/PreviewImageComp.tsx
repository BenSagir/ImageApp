import React from "react";
import { View, Image, StyleSheet } from 'react-native';

interface Props {
    url: string;
}
export const PreviewImageComp: React.FC<Props> = (props) => {
    const { url } = props;


    return (<View style={styles.container}>
        <Image source={{ uri: url }} style={styles.img} resizeMode="cover" />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        alignSelf:'center',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: '48%',
        height: 200,
    },
    img: {
        width: '100%',
        height: '100%',
    },
})
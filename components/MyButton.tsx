
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}
export const MyButton: React.FC<Props> = (props) => {
    const { title, onPress } = props;

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#badcf5',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'center',
    },
})
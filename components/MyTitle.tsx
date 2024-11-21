import React from 'react';
import { Text } from 'react-native';

const MyTitle: React.FC<{ count: number }> = ({ count }) => {
    return (
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
            Total Images: {count}
        </Text>
    )
}
export default MyTitle
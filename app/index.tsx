import { MyButton } from '@/components/MyButton';
import MyTitle from '@/components/MyTitle';
import { PreviewImageComp } from '@/components/PreviewImageComp';
import useImages from '@/hooks/useImages';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Index() {
  const { images, pickImage, takePhoto } = useImages();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Link href="/InfiniteScrollScreen" style={styles.button}>
        Go To Memory Screen
      </Link>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 30 }}>
        <MyButton title={'Pick Image from Gallary'} onPress={pickImage} />
        <MyButton title={'Take Photo with Camera'} onPress={takePhoto} />
      </View>
      <MyTitle count={images.length}/>
      <FlatList
        data={images}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <PreviewImageComp url={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f5baba',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
})
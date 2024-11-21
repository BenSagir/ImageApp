import { FullImageComp } from '@/components/FullImageComp';
import MyTitle from '@/components/MyTitle';
import useLoadMore from '@/hooks/useLoadMore';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const InfiniteScrollScreen = () => {
  const { visibleImages, loadMoreImages } = useLoadMore();

  return (
    <View style={styles.container}>
      <MyTitle count={visibleImages.length} />
      <FlatList
        data={visibleImages}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item, index }) => <FullImageComp title={`Image number: ${1 + index}`} url={item} />}
        onEndReached={loadMoreImages} // Trigger when scrolling near the bottom
        onEndReachedThreshold={0.5}   // Trigger the loading function when 50% from the end
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default InfiniteScrollScreen;

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';

const useImages = () => {
    const [images, setImages] = useState<string[]>([]);
    const [isCameraPermitted, setIsCameraPermitted] = useState<boolean>(false);

    const requestPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to send notifications is required!');
        } else {
            setIsCameraPermitted(true);
        }
    }
    useEffect(() => {
        const loadImages = async () => {
            const storedImages = await AsyncStorage.getItem('images');
            if (storedImages) setImages(JSON.parse(storedImages));
        };
        loadImages();
    }, []);

    const saveImages = async (newImages: string[]) => {
        await AsyncStorage.setItem('images', JSON.stringify(newImages));
        setImages(newImages);
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled && result.assets) {
            const newPath = `${FileSystem.documentDirectory}${Date.now()}.jpg`;
            await FileSystem.moveAsync({ from: result.assets[0].uri, to: newPath });
            saveImages([...images, newPath]);
        }
    };

    const takePhoto = async () => {
        !isCameraPermitted && requestPermission();

        const result = await ImagePicker.launchCameraAsync();
        if (!result.canceled && result.assets) {
            const newPath = `${FileSystem.documentDirectory}${Date.now()}.jpg`;
            await FileSystem.moveAsync({ from: result.assets[0].uri, to: newPath });
            saveImages([...images, newPath]);
        }
    };

    return { images, pickImage, takePhoto, };
}

export default useImages;
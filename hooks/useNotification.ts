import * as Notifications from 'expo-notifications';
import { useEffect } from "react";
const useNotification = () => {

    const requestPermissions = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to send notifications is required!');
        }
    };

    const scheduleNotification = async () => {
        await Notifications.cancelAllScheduledNotificationsAsync(); // Clear any existing notifications
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Hello World!',
                body: 'This is 10 minutes notification.',
            },
            trigger: {
                channelId: 'notifications',
                seconds: 600, // Trigger every 10 minutes
                repeats: true,
            } as Notifications.TimeIntervalTriggerInput,
        });
    };

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    useEffect(() => {
        requestPermissions();
        scheduleNotification();
    }, []);
}

export default useNotification;
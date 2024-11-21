import useNotification from "@/hooks/useNotification";
import { Stack } from "expo-router";

export default function RootLayout() {

  useNotification();

  return <Stack>
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="InfiniteScrollScreen" options={{ title: 'Memory' }} />
  </Stack>;
}

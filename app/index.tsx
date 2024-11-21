import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Link href="/about" style={{ backgroundColor: 'red' }}>
        Go to About screen
      </Link>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

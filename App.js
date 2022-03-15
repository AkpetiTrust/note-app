import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/pages/Home/Home";
import AllNotes from "./app/pages/AllNotes/AllNotes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="AllNotes"
          component={AllNotes}
          options={{ title: "AllNotes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

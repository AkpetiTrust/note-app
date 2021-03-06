import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/pages/Home/Home";
import AllNotes from "./app/pages/AllNotes/AllNotes";
import About from "./app/pages/About/About";
import Note from "./app/pages/Note/Note";
import EditNote from "./app/pages/EditNote/EditNote";
import Categories from "./app/pages/Categories/Categories";
import Todo from "./app/pages/Todo/Todo";
import TodoItem from "./app/pages/TodoItem/TodoItem";

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
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />
        <Stack.Screen
          name="Note"
          component={Note}
          options={{ title: "Note" }}
        />
        <Stack.Screen
          name="EditNote"
          component={EditNote}
          options={{ title: "EditNote" }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="Todo"
          component={Todo}
          options={{ title: "Todo" }}
        />
        <Stack.Screen
          name="TodoItem"
          component={TodoItem}
          options={{ title: "TodoItem" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

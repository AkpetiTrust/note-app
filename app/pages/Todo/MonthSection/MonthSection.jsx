import { View } from "react-native";
import TodoCard from "../TodoCard/TodoCard";
import AppText from "../../../components/AppText/AppText";

function MonthSection({ month, navigation, onChange }) {
  return (
    <View
      style={{
        marginBottom: 15,
      }}
    >
      <AppText
        fontWeight={"700"}
        style={{
          fontSize: 17,
          marginBottom: 15,
        }}
      >
        {month.month}
      </AppText>
      {month.todos.map((todo) => (
        <View key={todo.id}>
          <TodoCard todo={todo} navigation={navigation} onChange={onChange} />
        </View>
      ))}
    </View>
  );
}

export default MonthSection;

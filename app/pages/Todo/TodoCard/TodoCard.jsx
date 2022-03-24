import { View, TouchableOpacity } from "react-native";
import AppText from "../../../components/AppText/AppText";
import CheckBox from "../../../components/CheckBox/CheckBox";

function TodoCard({ todo }) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          position: "relative",
          paddingLeft: 40,
          paddingVertical: 10,
          backgroundColor: "rgba(221, 129, 0, 0.08)",
          marginBottom: 20,
          borderRadius: 8,
          paddingRight: 15,
        }}
      >
        <CheckBox
          style={{
            position: "absolute",
            left: 15,
            top: 13,
            zIndex: 3,
          }}
          defaultValue={todo.done}
        />
        <AppText fontWeight={"700"} style={{ marginBottom: 8, fontSize: 15 }}>
          {todo.title}
        </AppText>
        <AppText style={{ marginBottom: 10 }}>{todo.description}</AppText>
        <AppText fontWeight={"700"} style={{ color: "rgba(24, 24, 24, 0.51)" }}>
          {todo.date}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

export default TodoCard;

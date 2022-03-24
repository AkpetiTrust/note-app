import { View } from "react-native";
import styles from "./styles";

function TodoItem({
  route: {
    params: { todo },
  },
  navigation,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          hitSlop={{ top: 40, left: 40, right: 40, bottom: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AppText fontWeight={"700"} style={{ fontSize: 12 }}>
            CANCEL
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <AppText
            fontWeight={"700"}
            style={{ color: "#33CA7F", fontSize: 12 }}
            hitSlop={{ top: 40, left: 40, right: 40, bottom: 10 }}
          >
            SAVE
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TodoItem;

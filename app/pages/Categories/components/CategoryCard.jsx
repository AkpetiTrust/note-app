import { TouchableOpacity, View } from "react-native";
import Icon from "../assets/Icon";
import AppText from "../../../components/AppText/AppText";

function CategoryCard({ onPress, category }) {
  const opacity = category.name === "Work" ? "0.26" : "0.12";
  const color = `rgba(${category.color.r}, ${category.color.g}, ${category.color.b}, ${opacity})`;

  return (
    <View
      style={{
        width: "50%",
        paddingRight: 12,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={{
          backgroundColor: color,
          padding: 20,
          paddingHorizontal: 7,
          borderRadius: 7,
          flex: 1,
        }}
      >
        <Icon style={{ alignSelf: "center" }} />
        <AppText
          style={{
            textAlign: "center",
            marginVertical: 5,
          }}
          fontWeight={"700"}
        >
          {category.name.toUpperCase()}
        </AppText>
        <AppText
          style={{
            fontSize: 12,
            alignSelf: "center",
          }}
        >
          {category?.description}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

export default CategoryCard;

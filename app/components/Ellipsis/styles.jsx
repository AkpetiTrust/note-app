import { StyleSheet, Platform } from "react-native";

let boxShadow;
if (Platform.OS === "ios") {
  boxShadow = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  };
} else if (Platform.OS === "android") {
  boxShadow = {
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.25)",
  };
}

const styles = StyleSheet.create({
  ellipsis: {
    position: "relative",
  },
  dots: {
    flexDirection: "row",
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(24, 24, 24, 0.7)",
    marginRight: 1,
  },
  options: {
    position: "absolute",
    left: 5,
    top: 15,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 100,
    ...boxShadow,
    zIndex: 10,
  },
});

export default styles;

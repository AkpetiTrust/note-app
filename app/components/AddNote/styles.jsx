import { StyleSheet, StatusBar, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 15,
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "200%",
    zIndex: 5,
    backgroundColor: "#fff",
    elevation: Platform.OS === "android" ? 50 : 0,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 22,
    marginBottom: 40,
    marginTop: 40,
  },
  textarea: {
    width: "100%",
    height: 200,
    padding: 20,
    backgroundColor: "rgba(221, 129, 0, 0.14)",
    borderRadius: 8,
    textAlignVertical: "top",
    paddingTop: 10,
  },
});

export default styles;

import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  inner: {
    paddingHorizontal: 20,
  },
  header: {
    textAlign: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  talk: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  grid: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "stretch",
  },
  back_button: {
    position: "absolute",
    zIndex: 4,
  },
});

export default styles;

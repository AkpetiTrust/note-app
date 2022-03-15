import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
  },

  header: {
    textAlign: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 16,
    textAlign: "center",
  },

  back_button: {
    position: "absolute",
    zIndex: 4,
  },
  search: { width: "80%", marginBottom: 20 },
  info: {
    fontSize: 15,
    color: "background: rgba(24, 24, 24, 0.65)",
    textAlign: "center",
  },
});

export default styles;

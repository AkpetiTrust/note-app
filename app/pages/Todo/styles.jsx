import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  inner: {
    paddingHorizontal: 30,
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
  main: {
    marginTop: 10,
  },
  search: {
    marginTop: 15,
    width: "80%",
    marginBottom: 25,
  },
});

export default styles;

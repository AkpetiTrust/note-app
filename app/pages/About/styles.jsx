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
  image: {
    alignItems: "center",
    marginBottom: 40,
  },
  talk: {
    color: "rgba(24, 24, 24, 0.75)",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.35)",
  },
  link: {
    color: "#0038FF",
  },
  version: {
    paddingTop: 30,
  },
  version_title: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 15,
    marginBottom: 10,
  },
});

export default styles;

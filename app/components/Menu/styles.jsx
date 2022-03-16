import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "200%",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "200%",
    zIndex: 4,
    elevation: 12,
    shadowColor: "#fff",
  },
  inner: {
    backgroundColor: "#fff",
    width: "60%",
    alignSelf: "flex-end",
    height: "100%",
  },
  top: {
    flexBasis: StatusBar.currentHeight + 75,
    paddingBottom: 20,
    paddingTop: StatusBar.currentHeight + 20,
    paddingLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.37)",
  },
  main: {
    paddingLeft: 25,
    paddingTop: 28,
  },
});

export default styles;

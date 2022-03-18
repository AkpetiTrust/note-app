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
    marginBottom: 30,
  },
  back_button: {
    position: "absolute",
    zIndex: 4,
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 35,
  },
  info: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "70%",
    alignItems: "center",
  },
  label: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  labelText: {
    color: "#fff",
    fontSize: 11,
  },
  date: {
    color: "rgba(0,0,0,0.55)",
  },
  lastEdited: {
    marginTop: 40,
  },
});

export default styles;

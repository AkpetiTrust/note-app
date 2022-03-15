import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 20,
  },
  scrollview: {
    padding: 20,
  },
  heading: {
    marginTop: 30,
    marginBottom: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#33CA7F",
    paddingHorizontal: 10,
    marginTop: 13,
    marginBottom: 40,
  },
  illustration_container: {
    marginTop: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  recent: {
    marginTop: 30,
    marginBottom: 50,
  },
  notes_container: {
    marginTop: 20,
  },
});

export default styles;

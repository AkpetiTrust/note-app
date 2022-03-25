import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 15,
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollview: {
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleInput: {
    fontSize: 15,
    marginLeft: 5,
    color: "rgba(24, 24, 24, 0.6)",
  },
  main: {
    marginTop: 20,
    paddingHorizontal: 50,
  },
  top: {
    marginBottom: 40,
  },
  subtasks: {
    marginBottom: 35,
  },
  subtasksContainer: {
    marginTop: 20,
  },
  subtaskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  subtaskInput: {
    marginLeft: 5,
    width: "100%",
  },
  addSubtask: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  addSubtaskText: {
    color: "#1F54A4",
    marginLeft: 7,
  },
  sectionTitle: {
    color: "rgba(24, 24, 24, 0.85)",
    marginBottom: 2,
  },
  circle1: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: "absolute",
    left: -80,
    top: 150,
    backgroundColor: "rgba(64, 123, 255, 0.1)",
  },
  circle2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: "absolute",
    right: -60,
    top: 400,
    backgroundColor: "rgba(64, 123, 255, 0.1)",
  },
});

export default styles;

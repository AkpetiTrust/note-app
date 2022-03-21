import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import moment from "moment";

function useGlobalState() {
  const skeleton = {
    notes: [
      {
        title: "First Note 😁",
        text: "Welcome, thanks for checking out my app, I hope you enjoy it. With this app you can make notes, categorize them, add todo lists, and organize your tasks. Go ahead and create more notes",
        category: "Personal",
        date: {
          short: `${moment().format("MMM")}, ${new Date().getDate()}`,
          long: `${moment().format(
            "MMM"
          )} ${new Date().getDate()}, ${new Date().getFullYear()}`,
        },
        color: {
          r: 31,
          g: 84,
          b: 164,
        },
        id: 1,
        timestamp: Date.now(),
      },
    ],
    categories: [
      {
        name: "Personal",
        color: {
          r: 31,
          g: 84,
          b: 164,
        },
      },
      {
        name: "Academics",
        color: {
          r: 232,
          g: 26,
          b: 26,
        },
      },
      {
        name: "Work",
        color: {
          r: 248,
          g: 141,
          b: 17,
        },
      },
    ],
    todos: null,
  };

  const [global, setGlobal] = useState(JSON.stringify(skeleton));

  useEffect(() => {
    AsyncStorage.getItem("global").then((value) => {
      if (value) setGlobal(value);
      else AsyncStorage.setItem("global", JSON.stringify(skeleton));
    });

    return () => {};
  }, []);

  const updateGlobal = (value) => {
    AsyncStorage.setItem("global", JSON.stringify(value)).then(() => {
      setGlobal(JSON.stringify(value));
    });
  };

  const refreshGlobal = () => {
    AsyncStorage.getItem("global").then((value) => {
      setGlobal(value);
    });
  };

  return [JSON.parse(global), updateGlobal, refreshGlobal];
}

export default useGlobalState;

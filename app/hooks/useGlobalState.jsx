import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useRef } from "react";
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
        name: "Academics",
        color: {
          r: 232,
          g: 26,
          b: 26,
        },
        id: 1,
        description: "Red because e don red",
      },
      {
        name: "Personal",
        color: {
          r: 31,
          g: 84,
          b: 164,
        },
        id: 2,
        description: "Don't open this if you're with my phone!",
      },
      {
        name: "Work",
        color: {
          r: 248,
          g: 141,
          b: 17,
        },
        id: 3,
        description: "Omo",
      },
    ],
    todos: [],
  };

  const [global, setGlobal] = useState(JSON.stringify(skeleton));

  const isMounted = useRef(true);

  useEffect(() => {
    AsyncStorage.getItem("global").then((value) => {
      if (value && isMounted.current) setGlobal(value);
      else if (!value && isMounted.current)
        AsyncStorage.setItem("global", JSON.stringify(skeleton));
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  const updateGlobal = (value) => {
    AsyncStorage.setItem("global", JSON.stringify(value)).then(() => {
      if (isMounted.current) {
        setGlobal(JSON.stringify(value));
      }
    });
  };

  const refreshGlobal = () => {
    AsyncStorage.getItem("global").then((value) => {
      if (isMounted.current) {
        setGlobal(value);
      }
    });
  };

  return [JSON.parse(global), updateGlobal, refreshGlobal];
}

export default useGlobalState;

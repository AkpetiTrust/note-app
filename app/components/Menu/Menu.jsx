import { View, Animated, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { useState, useRef } from "react";
import Home from "./assets/Home";
import About from "./assets/About";
import Categories from "./assets/Categories";
import Notes from "./assets/Notes";
import Todo from "./assets/Todo";
import Link from "./components/Link/Link";
import Toggle from "./components/Toggle/Toggle";
import Logo from "../Logo/Logo";

function Menu({ navigation }) {
  const [links, setLinks] = useState([
    {
      navigation,
      to: "Home",
      text: "HOME",
      icon: <Home />,
    },
    {
      navigation,
      to: "AllNotes",
      text: "NOTES",
      icon: <Notes />,
    },
    {
      navigation,
      to: "Categories",
      text: "CATEGORIES",
      icon: <Categories />,
    },
    {
      navigation,
      to: "Home",
      text: "TODO",
      icon: <Todo />,
    },
    {
      navigation,
      to: "About",
      text: "ABOUT",
      icon: <About />,
    },
  ]);

  const [menuActive, setMenuActive] = useState(false);

  const anim = useRef(new Animated.Value(1000)).current;
  if (menuActive) {
    Animated.timing(anim, {
      toValue: 0,
      duration: 300,
      delay: 0,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(anim, {
      toValue: 1000,
      duration: 300,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }

  const innerRef = useRef(null);

  const handlePress = (e) => {
    const event = e.nativeEvent;
    innerRef.current.measure((fx, fy, width, height, px, py) => {
      if (event.pageX < px) {
        setMenuActive(false);
      }
    });
  };

  return (
    <View style={styles.wrapper}>
      <Toggle
        onPress={() => {
          setMenuActive((prevValue) => !prevValue);
        }}
        active={menuActive}
      />
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View
          style={{
            ...styles.container,
            transform: [{ translateX: anim }],
            backgroundColor: menuActive ? "rgba(0,0,0,0.25)" : null,
          }}
        >
          <View style={styles.inner} ref={innerRef}>
            <View style={styles.top}>
              <Logo />
            </View>
            <View style={styles.main}>
              {links.map((link) => (
                <Link
                  link={link}
                  key={link.text}
                  setMenuActive={setMenuActive}
                />
              ))}
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Menu;

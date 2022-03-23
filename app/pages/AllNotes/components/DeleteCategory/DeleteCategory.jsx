import {
  View,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import AppText from "../../../../components/AppText/AppText";
import useGlobalState from "../../../../hooks/useGlobalState";
import { useRef } from "react";

function DeleteCategory({ active, setActive, category, navigation }) {
  const translateY = useRef(new Animated.Value(1000)).current;
  const inner = useRef();

  if (active) {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(translateY, {
      toValue: 1000,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  const [global, setGlobal, refreshGlobal] = useGlobalState();

  const deleteCategory = () => {
    let newGlobal = { ...global };
    newGlobal.categories = global.categories.filter(
      (item) => item.name !== category
    );
    newGlobal.notes = global.notes.filter((item) => item.category !== category);
    setGlobal(newGlobal);

    navigation.goBack();
  };

  const handlePress = (e) => {
    const event = e.nativeEvent;
    inner.current.measure((fx, fy, width, height, px, py) => {
      if (
        event.pageX < px ||
        event.pageX > px + width ||
        event.pageY < py ||
        event.pageY > py + height
      ) {
        setActive(false);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          alignItems: "center",
          paddingHorizontal: 40,
          zIndex: 20,
          transform: [{ translateY }],
        }}
      >
        <View
          ref={inner}
          style={{
            padding: 30,
            paddingTop: 20,
            marginTop: 200,
            backgroundColor: "#fff",
            borderRadius: 5,
            position: "relative",
          }}
        >
          <AppText
            fontWeight="700"
            style={{
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            DELETE CATEGORY?
          </AppText>
          <AppText style={{ marginBottom: 20 }}>
            Are you sure you want to delete this category and all the notes
            under it? You can’t undo this.
          </AppText>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setActive(false);
              }}
            >
              <AppText
                fontWeight={"700"}
                style={{
                  fontSize: 12,
                  color: "rgba(0,0,0,0.65)",
                  marginRight: 20,
                }}
              >
                CANCEL
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                paddingVertical: 1,
                paddingHorizontal: 10,
                borderRadius: 15,
                backgroundColor: "#E81A1A",
                justifyContent: "center",
              }}
              onPress={deleteCategory}
            >
              <AppText
                fontWeight={"700"}
                style={{
                  fontSize: 9,
                  color: "#fff",
                }}
              >
                DELETE
              </AppText>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
            onPress={() => {
              setActive(false);
            }}
          >
            <Svg
              width={20}
              height={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="m11.175 10 3.583-3.575a.837.837 0 0 0-1.183-1.183L10 8.825 6.425 5.242a.837.837 0 1 0-1.183 1.183L8.825 10l-3.583 3.575a.833.833 0 0 0 0 1.183.833.833 0 0 0 1.183 0L10 11.175l3.575 3.583a.833.833 0 0 0 1.183 0 .832.832 0 0 0 0-1.183L11.175 10Z"
                fill="#000"
                fillOpacity={0.46}
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default DeleteCategory;

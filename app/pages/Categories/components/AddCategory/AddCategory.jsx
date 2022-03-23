import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { useState, useRef, useEffect } from "react";
import CategoryText from "../CategoryText";
import CategoryInput from "../CategoryInput";
import Svg, { Path } from "react-native-svg";
import AppText from "../../../../components/AppText/AppText";
import Colors from "../Colors/Colors";
import useColors from "../../hooks/useColors";

function AddCategory({ active, setActive, save, category }) {
  const [name, setName] = useState(() =>
    category ? category.name : "NEW CATEGORY"
  );
  const [description, setDescription] = useState(() =>
    category ? category.description : ""
  );
  const [categoryColor, setCategoryColor] = useState(() =>
    category ? category.color : {}
  );
  const [
    colors,
    activeColor,
    setActiveColor,
    parseColorObject,
    setColors,
    refresh,
  ] = useColors();

  const inner = useRef(null);

  useEffect(() => {
    setName(() => (category ? category.name : "NEW CATEGORY"));
    setDescription(() => (category ? category.description : ""));
    setCategoryColor(() => (category ? category.color : {}));
  }, [category]);

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
    active && (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "200%",
            zIndex: 14,
            backgroundColor: "rgba(0,0,0,0.25)",
            paddingHorizontal: 20,
          }}
        >
          <View
            ref={inner}
            style={{
              padding: 40,
              marginTop: 200,
              backgroundColor: "#fff",
              borderRadius: 8,
              position: "relative",
              paddingTop: 50,
              paddingBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 10,
                left: 10,
              }}
              onPress={() => {
                setActive(false);
              }}
            >
              <Svg
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="m13.41 12 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L13.41 12Z"
                  fill="#000"
                  fillOpacity={0.46}
                />
              </Svg>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                save(name, description, categoryColor);
              }}
              hitSlop={{ top: 40, left: 40, right: 40, bottom: 10 }}
              style={{
                position: "absolute",
                top: 10,
                right: 20,
              }}
            >
              <AppText
                fontWeight={"700"}
                style={{ color: "#33CA7F", fontSize: 12 }}
              >
                SAVE
              </AppText>
            </TouchableOpacity>

            <View
              style={{
                marginBottom: 20,
              }}
            >
              <CategoryText>CATEGORY NAME:</CategoryText>
              <CategoryInput
                value={name}
                onChange={(e) => {
                  setName(e.nativeEvent.text);
                }}
              />
            </View>
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <CategoryText>CATEGORY DESCRIPTION:</CategoryText>
              <CategoryInput
                value={description}
                onChange={(e) => {
                  setDescription(e.nativeEvent.text);
                }}
              />
            </View>
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <CategoryText>COLOR CODE:</CategoryText>
              <Colors
                setCategoryColor={setCategoryColor}
                defaultColor={category?.color}
                hookItems={[
                  colors,
                  activeColor,
                  setActiveColor,
                  parseColorObject,
                  setColors,
                  refresh,
                ]}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  );
}

export default AddCategory;

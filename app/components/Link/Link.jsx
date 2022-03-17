import AppText from "../AppText/AppText";
import * as Linking from "expo-linking";

function Link(props) {
  const onPress = () => {
    Linking.openURL(props.to);
  };

  const finalProps = { ...props, onPress };

  return <AppText {...finalProps}>{props.children}</AppText>;
}

export default Link;

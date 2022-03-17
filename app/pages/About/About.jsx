import { View, ScrollView } from "react-native";
import AppText from "../../components/AppText/AppText";
import BackButton from "../../components/BackButton/BackButton";
import Illustration from "./assets/Illustration";
import Menu from "../../components/Menu/Menu";
import Link from "../../components/Link/Link";
import { version } from "../../../package.json";
import Footer from "./components/Footer";
import styles from "./styles";

function About({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.inner}>
        <View style={styles.header}>
          <BackButton navigation={navigation} style={styles.back_button} />
          <AppText fontWeight={"700"} style={styles.title}>
            ABOUT
          </AppText>
        </View>
        <View style={styles.main}>
          <View style={styles.image}>
            <Illustration />
          </View>
          <AppText style={styles.talk}>
            Notes is an app built by{" "}
            <Link to="https://trust-akpeti.com" style={styles.link}>
              Akpeti Trust
            </Link>{" "}
            to fix the redundancy of traditional notes apps. It’s a system to
            organize your thoughts and tasks.
          </AppText>
          <View style={styles.version}>
            <AppText style={styles.version_title} fontWeight={"700"}>
              VERSION:
            </AppText>
            <AppText>{version}</AppText>
          </View>
        </View>
        <Footer />
      </ScrollView>
      <Menu navigation={navigation} />
    </View>
  );
}

export default About;

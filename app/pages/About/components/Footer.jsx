import AppText from "../../../components/AppText/AppText";

function Footer() {
  return (
    <AppText
      fontWeight={"700"}
      style={{
        fontSize: 16,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 40,
      }}
    >
      COPYRIGHT © 2022
    </AppText>
  );
}

export default Footer;

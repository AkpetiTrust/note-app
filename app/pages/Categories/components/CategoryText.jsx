import AppText from "../../../components/AppText/AppText";

function CategoryText({ children, style, ...props }) {
  return (
    <AppText style={{ ...style, fontSize: 13, marginBottom: 10 }} {...props}>
      {children}
    </AppText>
  );
}

export default CategoryText;

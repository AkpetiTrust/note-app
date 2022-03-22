import AppInput from "../../../components/AppInput/AppInput";

function CategoryInput({ ...props }) {
  return (
    <AppInput
      fontWeight="400"
      style={{
        backgroundColor: "#F3F3F3",
        borderRadius: 7,
        paddingLeft: 15,
      }}
      {...props}
    />
  );
}

export default CategoryInput;

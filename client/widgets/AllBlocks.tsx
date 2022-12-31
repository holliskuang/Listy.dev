import IndividualBlock from "./IndividualBlock";

export default function AllBlocks(AppProps) {
    console.log(AppProps.data);
  return (
    <>
      {Object.keys(AppProps.data).map((key) => {
       console.log(key);
      })}
    </>
  );
}

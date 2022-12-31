import IndividualBlock from "./IndividualBlock";

export default function AllBlocks(AppProps) {
  const array = Object.entries(AppProps.data);
  console.log(array);

  return (
    <>
      {array.map((block) => (
        <IndividualBlock
          number={parseInt(block[0]) + 1}
          image={block[1].images[0]}
          name={block[1].name}
          link={block[1].external_urls.spotify}
          genres={block[1].genres}
        />
      ))}
    </>
  );
}

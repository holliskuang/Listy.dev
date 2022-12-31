import IndividualBlock from "./IndividualBlock";

export default function AllBlocks(AppProps) {
  const array = Object.entries(AppProps.data);
  console.log(array);
  // Artist List
  if (AppProps.type === "artists") {
    return (
      <>
        {array.map((block) => (
          <IndividualBlock
            number={parseInt(block[0]) + 1}
            image={block[1].images[0].url}
            name={block[1].name}
            link={block[1].external_urls.spotify}
            genres={block[1].genres}
          />
        ))}
      </>
    );

    // Tracks List
  } else
    return (
      <>
        {array.map((block) => (
          <IndividualBlock
            number={parseInt(block[0]) + 1}
            image={block[1].album.images[0].url}
            name={block[1].name}
            link={block[1].external_urls.spotify}
            artists={block[1].artists[0].name}
          />
        ))}
      </>
    );
}

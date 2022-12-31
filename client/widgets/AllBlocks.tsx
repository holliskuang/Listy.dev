import IndividualBlock from "./IndividualBlock";

export default function AllBlocks(AppProps: {
  data: { [s: string]: unknown } | ArrayLike<unknown>;
  type: string;
}) {
  const array = Object.entries(AppProps.data);
  // Artist List
  if (AppProps.type === "artists") {
    return (
      <>
        {array.map((block: any) => (
          <IndividualBlock
                number={parseInt(block[0]) + 1}
                image={block[1].images[0].url}
                name={block[1].name}
                link={block[1].external_urls.spotify}
                genres={block[1].genres}
                type={AppProps.type} artists={undefined}          />
        ))}
      </>
    );

    // Tracks List
  } else
    return (
      <>
        {array.map((block: any) => (
          <IndividualBlock
                number={parseInt(block[0]) + 1}
                image={block[1].album.images[0].url}
                name={block[1].name}
                link={block[1].external_urls.spotify}
                artists={block[1].artists[0].name}
                type={AppProps.type} genres={undefined}          />
        ))}
      </>
    );
}

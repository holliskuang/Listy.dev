import IndividualBlock from "./IndividualBlock";
import CreatePlaylist from "./CreatePlaylist";

export default function AllBlocks(AppProps: {
  data: { [s: string]: unknown } | ArrayLike<unknown>;
  type: string;
}) {
  console.log(AppProps.data);
  const array = Object.entries(AppProps.data);

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
            type={AppProps.type}
            artists={undefined}
          />
        ))}

        <CreatePlaylist type={AppProps.type} data={array} />
      </>
    );

    // Tracks List
  } else if (AppProps.type === "tracks") {
    return (
      <>
        {array.map((block: any) => (
          <IndividualBlock
            number={parseInt(block[0]) + 1}
            image={block[1].album.images[0].url}
            name={block[1].name}
            link={block[1].external_urls.spotify}
            artists={block[1].artists[0].name}
            type={AppProps.type}
            genres={undefined}
          />
        ))}
        <CreatePlaylist type={AppProps.type} data={array} />
      </>
    );
  }
  // recently played
  else if (AppProps.type === "recentlyPlayed") {
    return (
      <>
         {array.map((block: any) => (
          <IndividualBlock
            image={block[1].track.album.images[0].url}
            name={block[1].track.name}
            link={block[1].track.external_urls.spotify}
            artists={block[1].track.artists[0].name}
            type={AppProps.type}
            timeStamp={block[1].played_at}
          />
        ))}
        <CreatePlaylist type={AppProps.type} data={array} />
      </>
    );
  }
  return <></>;
}

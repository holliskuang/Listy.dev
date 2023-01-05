import IndividualBlock from "./IndividualBlock";
import CreatePlaylist from "./CreatePlaylist";

export default function AllBlocks(AppProps: {
  data: { [s: string]: unknown } | ArrayLike<unknown>;
  type: string;
}) {
  const array = Object.entries(AppProps.data);

  async function getRecent() {
   await  fetch(
      `http://localhost:8888/recently_played/?access_token=${localStorage.getItem(
        "access_token"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => console.log(res.json().items))
  }

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
        <button onClick={() => getRecent()}>HELLO!</button>
      </>
    );
  }
  return <></>;
}

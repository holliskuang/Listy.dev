import { useRouter } from "next/router";
import Body from "../components/Body";
import Header from "../components/LandingHeader";

export default function Home() {
  const router = useRouter();

  function spotifyLogIn() {
    router.push(`http://localhost:8888/login`);
  }

  return (
    <div className="indexBody">
      <Header></Header>
      <Body spotifyLogIn={() => spotifyLogIn}></Body>
    </div>
  );
}

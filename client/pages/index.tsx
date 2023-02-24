import { useRouter } from "next/router";
import Body from "../components/Body";
import Header from "../components/LandingHeader";

export default function Home() {
  const router = useRouter();

  function spotifyLogIn() {
    router.push(`https://us-central1-listi-f7e6a.cloudfunctions.net/app/login`);
    
  }

  return (
    <div className="indexBody">
      <Header></Header>
      <Body spotifyLogIn={() => spotifyLogIn}></Body>
    </div>
  );
}

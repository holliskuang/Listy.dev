import { useRouter } from "next/router";
import Body from "../components/Body";
import Header from "../components/Header";




export default function Home() {
  const router = useRouter();

  function spotifyLogIn() {
    router.push(`http://localhost:8888/login`);
  }

  return (
    <div >
      <Header></Header>
      <Body></Body>
     
      <button onClick={spotifyLogIn}>Hello</button>
    </div>
  );
}

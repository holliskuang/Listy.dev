import { useRouter } from "next/router";
import Script from "next/script";
import FunText from "../widgets/FunText";
import Gradient2 from "../components/Gradient2";

export default function Home() {
  const router = useRouter();

  function spotifyLogIn() {
    router.push(`http://localhost:8888/login`);
  }

  return (
    <div>
      <Script src="../widgets/GradientController" />
      <Gradient2 />
      <FunText />
      <button onClick={spotifyLogIn}>Hello</button>
    </div>
  );
}

import FunText from "../widgets/FunText";

export default function Body(props: any) {
  return (
    <main role="main">
      <section className="ui-section-hero">
        <div className="ui-layout-container">
          {/*-- COPYWRITING -*/}
          <div className="ui-layout-column-6 ui-layout-column-center">
            <FunText />
           
            {/*-- CTA -*/}
            <div className="ui-component-cta ui-layout-flex">
              <a
                onClick={props.spotifyLogIn}
                role="link"
                aria-label="#"
                className="ui-component-button ui-component-button-normal ui-component-button-primary"
                color="#1DB954"
              >
                Sign In with Spotify
              </a>
            </div>
          </div>
          {/*-- IMAGE -*/}
        </div>
      </section>
    </main>
  );
}

import FunText from "../widgets/FunText";

export default function Body(props: any) {
  return (
    <main role="main">
      <section className="ui-section-hero">
        <div className="ui-layout-container">
          {/*-- COPYWRITING -*/}
          <div className="ui-layout-column-6 ui-layout-column-center">
            <FunText />
            <div className="imageHolder">
              <img
                src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673052458/old_school_love_2_oeqwd8.png"
                height="250px"
                width="250px"
                className="hvr-grow"
              />
              <img
                src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673052453/old_school_love-4_1_s1aafn.png"
                height="250px"
                width="250px"
                className="hvr-grow"
              />
              <img
                src="
                https://res.cloudinary.com/dd97ovnmi/image/upload/v1673052449/old_school_love-2_1_cjnyno.png"
                height="250px"
                width="250px"
                className="hvr-grow"
              />
              <img
                src="
                https://res.cloudinary.com/dd97ovnmi/image/upload/v1673052443/old_school_love-3_1_kourc1.png"
                height="250px"
                width="250px"
                className="hvr-grow"
              />
            </div>
            <div className="ui-component-cta ui-layout-flex">
              <a
                onClick={props.spotifyLogIn()}
                role="link"
                aria-label="#"
                className="ui-component-button ui-component-button-normal ui-component-button-primary"
                color="#1DB954"
              >
                Sign In with Spotify
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

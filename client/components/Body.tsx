import FunText from "../widgets/FunText";


export default function Body() {
  return (
    <main role="main">
      <section className="ui-section-hero">
        <div className="ui-layout-container">
          {/*-- COPYWRITING -*/}
          <div className="ui-layout-column-6 ui-layout-column-center">
          <FunText />
            <p className="ui-text-intro">
              Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
              incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
            </p>
            {/*-- CTA -*/}
            <div className="ui-component-cta ui-layout-flex">
              <a
                href="#"
                role="link"
                aria-label="#"
                className="ui-component-button ui-component-button-normal ui-component-button-primary"
              >
                Add to Chrome &mdash; It&rsquo;s Free
              </a>
              <p className="ui-text-note">
                <small>Firefox and Safari soon.</small>
              </p>
            </div>
          </div>
          {/*-- IMAGE -*/}
          <img
            src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
            loading="lazy"
            alt="#"
            className="ui-section-hero--image"
          />
        </div>
      </section>
    </main>
  );
}

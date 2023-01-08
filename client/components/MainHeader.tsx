export default function Header(AppProps: any) {
  return (
    <header role="banner" className="ui-section-header-main">
      <div className="ui-layout-container">
        <div className="mainHeaderTopLine">
          <p className="arrowBox">
            <i className="arrow down"></i>
          </p>
          <div className="ui-section-header__layout ui-layout-flex">
            PLAYING FROM YOUR LIBRARY
          </div>
          <p className="dotBox">
            <div className="dots">&#xFE19;</div>
          </p>
        </div>

        <div className="mainHeaderPictureTopTracks">
          <img
            src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673093181/Your_Top_Genre_okndsi.png"
            width="400px"
            height="400px"
          ></img>
        </div>
      </div>
    </header>
  );
}

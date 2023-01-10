export default function Header(AppProps: any) {
  const renderImage = () => {
    if (AppProps.type === "artists") {
      return (
        <img
          src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673093181/Your_Top_Song_1_xmam4z.png"
          width="400px"
          height="400px"
        />
      );
    } else if (AppProps.type === "tracks") {
      return (
        <img
          src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673093181/Your_Top_Genre_okndsi.png"
          width="400px"
          height="400px"
        />
      );
    } else if (AppProps.type === "recentlyPlayed") {
      return (
        <img
          src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673093181/Your_Top_Artist_3_s0139u.png"
          width="400px"
          height="400px"
        />
      );
    }
  };

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

        <div className="threeLines">
          <img src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673171846/output-onlinepngtools_vqtnph.png" />
        </div>
        <div className="pictureAndDoodles">
          <div className="clouds">
            <img src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673171605/pngwing.com_makokv.png" />
          </div>
          <div className="mainHeaderPictureTopTracks">{renderImage()}</div>
          <div className="scribbleLine">
            <img src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673171604/PngItem_642765_vxjz01.png" />
          </div>
        </div>
      </div>
    </header>
  );
}

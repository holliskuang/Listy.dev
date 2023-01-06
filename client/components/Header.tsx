export default function Header() {
  return (
    <header role="banner" className="ui-section-header">
      <div className="ui-layout-container">
        <div className="ui-section-header__layout ui-layout-flex">
          {/*<-- LOGO -->*/}

          <a href="#" role="link" aria-label="#">
            <img src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673004204/letter-l_pcq0m6.png" height="80px" width="80px" loading="lazy"/>
          </a>
          {/*<!-- MENU --> */}
          <a
            href="#"
            role="link"
            aria-label="#"
            className="ui-component-button ui-component-button-small ui-component-button-primary"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </header>
  );
}

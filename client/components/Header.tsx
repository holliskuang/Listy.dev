export default function Header() {
  return (
    <header role="banner" className="ui-section-header">
      <div className="ui-layout-container">
        <div className="ui-section-header__layout ui-layout-flex">
          {/*<-- LOGO -->*/}
          <a href="#" role="link" aria-label="#">
            <svg
              viewBox="0 0 18 18"
              height="18"
              width="18"
              role="img"
              aria-label="#"
            >
              <path
                fill="#353535"
                d="M0 0h4.5v9a4.5 4.5 0 109 0V6H18v3A9 9 0 110 9V0zm18 4.5V0h-4.5v4.5H18z"
              />
            </svg>
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

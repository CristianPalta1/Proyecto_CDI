import { useState } from 'react';
import { BrandingRegion } from './BrandingRegion';
import { BurguerMenu } from './BurguerMenu';

const Header = () => {
  const [openBurguerMenu, setOpenBurguerMenu] = useState(false);
  const handleOpenMenu = () => setOpenBurguerMenu(true);



  return (
    <>
      <header className="header">
        <nav className="navbar justify-content-beetween">
          <div className="container">
            <div className={`burguer-menu ${openBurguerMenu ? "mega__menu" : ""}`}>
              <button
                className="btn-burguer"
                type="button"
                id="btn-burguer"
                onClick={handleOpenMenu}              
              >
                Menu
              </button>
            </div>
            <BrandingRegion adjustWidth={true} />
          </div>
        </nav>
      </header>
      <BurguerMenu
        isOpen={openBurguerMenu}
        onClose={() => setOpenBurguerMenu(false)}
      />
    </>
  );
};

export default Header;

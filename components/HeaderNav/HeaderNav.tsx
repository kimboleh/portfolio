import React, { useEffect } from 'react';
import menus from '../../pages/menus.json';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../LocalizedLink';
import { MenuItem } from '../../src/types';

// import LanguageToggle from '../LanguageToggle';
import './HeaderNav.scss';

/* Define/type props */
interface HeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: string;
  siteTitle?: string;
  links?: MenuItem[];
  button?: React.ReactNode;
}

/** Site Header with Navigation */
export const HeaderNav: React.FC<HeaderNavProps> = ({
  logo = undefined,
  siteTitle = undefined,
  links = menus.main,
  button = undefined,
  ...props
}) => {
  const { t } = useTranslation();
  const className = ['header-nav'].join(' ');

  console.log('HeaderNav links:', links);

  return (
    <div className={className} {...props}>
          <div className="header-nav--site-branding">
            {/* If logo is provided, display it; otherwise, just show the title */}
            <LocalizedLink to="/">
              <img className="site-logo" src={logo} />
            </LocalizedLink>
            <h1 className='site-title'>{siteTitle}</h1>
          </div>
          <div className="header-nav--links">
            <ul className='header-nav--menu'>
              {links.map(link => (
                <li className='menu-link font__nav-accordion--header' key={link.url}>
                  <LocalizedLink to={link.url}>
                    {t(link.title)}
                  </LocalizedLink>
                </li>
              ))}
              </ul>
              {button}
          </div>
    </div>
  );
};

export default HeaderNav;
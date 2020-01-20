import React from 'react';
import style from './style.scss';
import '../../global.css';
const Navigation = ({ links }) => (
  <div id="navigation" className={style.Navigation}>
    <nav>
      <ul>
        {links.map((link, index) =>
          <li key={index}>
            {link.label}
          </li>
        )}
      </ul>
    </nav>
  </div>
);

Navigation.defaultProps = {
  links: [
    { label: 'Home', href: 'http://browse.to.somewhere' },
    { label: 'Movies', href: '/top' },
    { label: 'Top Picks', href: '/top' },
    { label: 'Tv Shows', href: '/top' },
    { label: 'My List', href: '/my-list' },
  ]
}

export default Navigation;

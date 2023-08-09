import React, {ReactElement} from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import { greeting } from '../../portfolio';

type Props = {
  children?: ReactElement
};

function Header(props: Props) {
  return (
    <Headroom>
      <header className="header">
        <a href="https://www.carlosmartos.com" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" aria-label="Menu button" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        {props.children}
      </header>
    </Headroom>
  );
}
export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  page: string,
}

const HeaderLink: React.FC<HeaderProps> = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <Link to={`/${page}`}>{title}</Link>
  );
};

const Header: React.FC = () => {
  return (
    <div className='header'>
      <HeaderLink page='home' />
      <HeaderLink page='gene-editing' />
      <HeaderLink page='diagnostics' />
    </div>
  );
};

export default Header;

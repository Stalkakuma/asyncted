import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Home } from '../../../assets/home.svg';
import './navigationmenu.scss';

export const NavigationMenu = () => {
  const location = useLocation();

  return (
    <nav className='navigation-menu'>
      <li
        className={classNames('navigation-menu__item', {
          'navigation-menu__item--active': location.pathname === '/',
        })}
      >
        <Link className='navigation-menu__button' to='/'>
          <Home className='navigation-menu__svg' />
        </Link>
      </li>
    </nav>
  );
};

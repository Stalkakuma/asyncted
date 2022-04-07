import classNames from 'classnames';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { OptionsMenu } from './OptionsMenu/OptionsMenu';
import './navigation.scss';

export const Navigation = () => {
  return (
    <div className={classNames('navigation')}>
      <div className='navigation__main'>
        <Logo className='navigation__logo' />
      </div>
      <div className='navigation__menu'>
        <NavigationMenu />
      </div>
      <div className='navigation__options'>
        <OptionsMenu />
      </div>
    </div>
  );
};

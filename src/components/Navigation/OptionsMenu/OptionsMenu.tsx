// import { ReactComponent as Mail } from '../../../assets/Mail.svg';
import { Switch } from './Switch/Switch';
import './optionsmenu.scss';

export const OptionsMenu = () => {
  return (
    <ul className='options'>
      <li className='options__item'>{/* <Mail className='options__mail' /> */}</li>
      <li className='options__item'>
        <Switch />
      </li>
    </ul>
  );
};

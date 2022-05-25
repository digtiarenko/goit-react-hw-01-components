import s from './FriendList.module.css';
import PropTypes from 'prop-types';

import defaultpic from './defaultPic.jpg';

function FriendListItem({ key, avatar = defaultpic, name, isOnline }) {
  return (
    <li key={key} className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FriendListItem.defaultProps = {
  avatar: defaultpic,
  isOnline: false,
};

export default FriendListItem;

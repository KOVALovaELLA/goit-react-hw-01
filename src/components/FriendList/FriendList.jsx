import css from "../FriendList/FriendList.module.css";

import { FriendListItem } from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.ulFriend}>
      {friends.map((friend) => (
        <li className={css.liFriend} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

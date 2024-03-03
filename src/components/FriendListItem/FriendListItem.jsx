import css from "../FriendListItem/FriendListItem.module.css";
export const FriendListItem = ({ friend }) => {
  return (
    <>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={css.pItemName}>{friend.name}</p>
      <p className={friend.isOnline ? css.pItemOnline : css.pItemOffline}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

import css from "../Profile/Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.part1Cont}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.TagLocation}>@{tag}</p>
        <p className={css.TagLocation}>{location}</p>
      </div>
      <div>
        <ul className={css.part2Cont}>
          <li className={css.part2li}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={css.part2li}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={css.part2li}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

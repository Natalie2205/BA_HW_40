const UserCard = ({ name, avatarUrl, role }) => {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt='userImg' />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default UserCard;

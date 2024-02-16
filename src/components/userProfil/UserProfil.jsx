import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  const user = {
    id: userId,
    name: 'Selected User',
    email: 'selected.user@example.com',
    photo: 'selected-user.jpg',
  };

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <img src={user.photo} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;

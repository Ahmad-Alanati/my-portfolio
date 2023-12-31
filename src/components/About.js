import React from 'react';
import Myimage from '../assets/images/MyImage.png'

const Profile = () => {
  return (
    <div id="profile">
      <h1>About me</h1>
      <h2>Dedication, perseverance, and efficiency stand as my guiding principles, shaping both my life's endeavors and my approach to overcoming challenges.</h2>
      <img src = {Myimage} alt="my image" className='h-1/5 w-1/5 rounded-full'/>
      <h1>Skills</h1>
    </div>
  );
};

export default Profile;

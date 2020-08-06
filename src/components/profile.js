import React from "react";
import Card from './hoc/card';
import Auth from './hoc/auth';

const Profile = (props) => {
  console.log(props);
  return (
    <>
    <Auth>
    <Card>
        Hello Guys
      </Card>
    </Auth>
    </>
  );
};

export default Profile;

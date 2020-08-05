import React from "react";
import { Link, Redirect } from "react-router-dom";

const Profile = (props) => {
  console.log(props);
  return (
    <>
      <Redirect from="/profile" to="/" />
      <Link
        to={{
          pathname: `${props.match.url}/posts`,
        }}
      >
        go to Posts
      </Link>
    </>
  );
};

export default Profile;

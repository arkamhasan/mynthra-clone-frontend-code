import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="massege">
      <h1 className="msg-title">
        Profile page is under development. <br /> Please check back soon 🙂
      </h1>
      <Link to="/">
        <button className="btn-back">Back to Hoome</button>
      </Link>
    </div>
  );
};

export default Profile;

import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Logout = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="text-3xl text-black text-center">
         Welcome!!!! <br />
        <span className="text-sm font-sans">
        {user && user.email}
        </span>
      </div>
      <div className=" py-4 pl-20
      ">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Logout;

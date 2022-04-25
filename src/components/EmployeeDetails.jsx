// import { nanoid } from "nanoid";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
export const EmployeeDetails = () => {
  const [details, setdetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getdata = () => {
      axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
        setdetails(data.data);
        
      });
    };
    getdata();
  }, [id]);
  return (
    <div className="user_details">
      <img className="user_image" alt="user_img" />
      <h4 className="user_name"> </h4>
      <span className="user_salary">$</span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status"></b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};

import { nanoid } from "nanoid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const getdata = () => {
      axios
        .get("http://localhost:8080/employee")
        .then(function (response) {
          // handle success
          setusers(response.data);
          console.log(response.data, "response data");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    getdata();
  }, []);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {users.map((user) => {
        return (
          <Link to="/employees/:id" data={user.id} key={nanoid(4)}>
            <div className="employee_card">
              <img
                className="employee_image"
                alt="employee_image"
                src={user.image}
              />
              <span className="employee_name">Name: {user.employee_name}</span>
              <span className="employee_title">Title: {user.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

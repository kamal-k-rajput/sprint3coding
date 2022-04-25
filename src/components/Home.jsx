import { useEffect, useState } from "react";
const axios = require("axios").default;

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
  const [data, setdata] = useState([]);
  const [total, settotal] = useState(0);
  const [terminated, setterminated] = useState(0);
  const [promoted, setpromoted] = useState(0);
  const [newemp, setnewemp] = useState(0);

  useEffect(() => {
    const getdata = async () => {
      axios
        .get("http://localhost:8080/employee")
        .then(function (response) {
          // handle success
          setdata(response.data);
          console.log(response.data);
          settotal(response.data.length);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          let t = 0;
          let p = 0;
          let n = 0;
          for (let i = 0; i < data.length; i++) {
            let temp = data[i];
            if (temp.status === "terminated") {
              t++;
            } else if (temp.status === "promoted") {
              p++;
            } else if (temp.status === "new") {
              n++;
            }
          }
          setterminated(t);
          setpromoted(p);
          setnewemp(n);
        });
    };
    getdata();
  }, []);

  return (
    <div>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{total}</span>
        </div>
        <div>
          Total Terminated:{" "}
          <span className="total_terminated">{terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{newemp}</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./style.scss";
function BMI() {
  const [user, setUser] = useState({ age: 0, gender: "M", height: 0, weight: 0 });
  const setUserDetails = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };
  const calculateBMI = (e) => {};
  return (
    <div>
      <div className="bmi_header">
        BMI Calculator [Metric ft'in & kg]
        <div className="row">
          <div className="col">
            <label htmlFor="age">Age</label>
          </div>
          <div className="col">
            <input type="number" name="age" id="age" value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} />
          </div>
        </div>
        {JSON.stringify(user)}
        <div className="row">
          <div className="col">
            <label htmlFor="gender">Gender</label>
          </div>
          <div className="col">
            Male
            <input type="radio" name="gender" id="male" value={user.gender} onChange={(e) => setUser({ ...user, gender: "M" })} />
            Female
            <input type="radio" name="gender" id="female" value={user.gender} onChange={(e) => setUser({ ...user, gender: "F" })} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="height">Height</label>
          </div>
          <div className="col">
            <input type="number" name="height" id="height" value={user.height} onChange={setUserDetails} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="weight">Weight</label>
          </div>
          <div className="col">
            <input type="number" name="weight" id="weight" value={user.weight} onChange={setUserDetails} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input type="button" value="Check" onChange={calculateBMI} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMI;

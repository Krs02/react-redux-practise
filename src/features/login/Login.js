import React, { useEffect, useRef } from "react";
import { useState } from "react";

import "./style.scss";
function Login() {
  const [user, setUser] = useState({ name: "Kishor", telephone: "124567890" });
  const cntVariable = useRef(0);
  const cntDefault = useRef(0);
  const cntFirst = useRef(0);
  useEffect(() => {
    cntVariable.current = cntVariable.current + 1;
    console.log("On Varible change : " + cntVariable.current);
    return () => {};
  }, [user]);
  useEffect(() => {
    cntDefault.current = cntDefault.current + 1;
    console.log("Every Time : ", cntDefault.current);
  });
  useEffect(() => {
    cntFirst.current = cntFirst.current + 1;
    console.log("First time only : " + cntFirst.current);
  }, []);
  const updatePhoneNumber = (event, data) => {
    debugger;
    console.log("abc");
  };
  const updateCity = (e, data) => {
    debugger;
    console.log(e);
  };

  return (
    <div className="login_container">
      <form action="" className="form_container">
        <div className="row">
          <div className="column">
            <label htmlFor="name">Name</label>
          </div>
          <div className="column">
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={user.name}
              value={user.name}
              onChange={(event) => setUser({ ...user, name: event.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="name">PhoneNumber</label>
          </div>
          <div className="telephone">
            <input type="tel" name="telephone" id="telephone" defaultValue={user.telephone} onChange={updatePhoneNumber} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="city">City</label>
          </div>
          <div className="column">
            <input type="text" name="city" id="city" defaultValue={user.city} onChange={('aa') => {updateCity('q')}} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

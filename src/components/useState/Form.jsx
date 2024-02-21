import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1>Log In</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter UserName.."
          name="userName"
          value={formData.userName}
          onChange={handleInputs}
        />
        <input
          type="password"
          placeholder="Enter password.."
          name="password"
          value={formData.password}
          onChange={handleInputs}
        />
        <button className="btn">Login</button>
        <h3>
          UserName :- {formData.userName} and Password :- {formData.password}
        </h3>
      </div>
    </>
  );
}

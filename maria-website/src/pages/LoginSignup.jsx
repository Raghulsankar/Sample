// import React, { useState } from "react";
// import "./LoginSignup.css";

// function LoginSignup() {

//   const [isLogin, setIsLogin] = useState(true);

//   const [formData, setFormData] = useState({
//     username: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       console.log("Login Data:", formData);
//     } else {
//       console.log("Signup Data:", formData);
//     }

//     alert(isLogin ? "Login Successful" : "Signup Successful");

//     setFormData({
//       username: "",
//       password: ""
//     });
//   };

//   return (
//     <div className="auth-container">

//       <div className="auth-box">

//         <h2>{isLogin ? "Login" : "Signup"}</h2>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="text"
//             name="username"
//             placeholder="Enter Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             {isLogin ? "Login" : "Signup"}
//           </button>

//         </form>

//         <p className="sentence">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}

//           <span
//             onClick={() => setIsLogin(!isLogin)}
//             className="switch"
//           >
//             {isLogin ? " Signup" : " Login"}
//           </span>

//         </p>

//       </div>

//     </div>
//   );
// }

// export default LoginSignup;


import React, { useState } from "react";
import "./LoginSignup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginSignup() {

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Login Data:", formData);
    } else {
      console.log("Signup Data:", formData);
    }

    alert(isLogin ? "Login Successful" : "Signup Successful");

    setFormData({
      username: "",
      password: ""
    });
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>{isLogin ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          {/* PASSWORD FIELD */}
          <div className="password-field">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <button type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>

        </form>

        <p className="sentence">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="switch"
          >
            {isLogin ? " Signup" : " Login"}
          </span>

        </p>

      </div>

    </div>
  );
}

export default LoginSignup;
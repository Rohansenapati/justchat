import React from 'react'
import "../style.css"
const Register = () => {
  return (
    <div classname="formContainer">
      <div classname="formWrapper">
        <span className="logo">Just Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <p>You do have an account?Login</p>

      </div>
    </div>
  )
}

export default Register

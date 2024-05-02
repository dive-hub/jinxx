import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    // Implement signup logic
    alert(`Username: ${username}, Email: ${email}`);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleSignUp}>Create Account</button>
      <p>Or continue with Google</p>
      <button>Continue with Google</button>
      <p>Sign up without email</p>
      <button>Sign up without Email</button>
      <p>Already have an account? <a href="./">Login</a></p>
    </div>
  );
}

export default SignUp;
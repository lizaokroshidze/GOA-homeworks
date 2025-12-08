import { useState, useEffect } from "react";

function EmailPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (email.includes("@") && password.length >= 6) {
      console.log("Valid Credentials");
    } else {
      console.log("Invalid email or password");
    }
  }, [email, password]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Email & Password Validation</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}

export default EmailPassword;

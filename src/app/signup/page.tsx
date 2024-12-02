"use client";

import { FormEvent, useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSuccess(true);
        console.log("Signup successful");
      } else {
        const message = await response.text();
        setError(`Signup failed: ${message}`);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Error during signup:", err);
    }
  };

  return (
    <main className="flex justify-center items-center">
      <form onSubmit={handleSignup} className="flex flex-col gap-8 border">
        <h1>Sign Up</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <p style={{ color: "green" }}>
            Signup successful! You can now log in.
          </p>
        )}
        <div className="text-black">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative text-black bg-white">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};

export default SignupPage;

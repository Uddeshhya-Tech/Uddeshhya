import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase"; // Make sure db is exported from firebase.js
import { useNavigate } from "react-router-dom";
import LandingImage from "../../assets/right.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/admin/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Function to check if user exists in Firestore and create if not
  const checkAndCreateUser = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      // If user doesn't exist, create new document with default role
      await setDoc(userRef, {
        email: user.email,
        password: password, // Note: Storing passwords in Firestore is not recommended for security
        role: "superadmin", // Default role
        createdAt: new Date().toISOString()
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await checkAndCreateUser(userCredential.user);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid credentials");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full justify-evenly items-center lg:px-10 mt-10 h-screen overflow-x-hidden">
      {/* Left Section */}
      <div className="w-full lg:w-[50%] lg:px-20 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl text-black font-bold ">
          Admin <span className="text-[#E74646]">Login</span>
        </h1>
        <p className="text-2xl lg:text-3xl mt-2 lg:mt-0">Secure Access</p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="text-white bg-[#E74646] px-4 py-2 w-full font-bold">
            Login
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%] mt-6 lg:mt-0 flex justify-center">
        <img src={LandingImage} alt="Login Illustration" className="p-4 lg:px-10 max-w-full" />
      </div>
    </div>
  );
};

export default Login;
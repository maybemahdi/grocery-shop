"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    try {
      if (
        email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL ||
        password !== process.env.NEXT_PUBLIC_ADMIN_PASS
      ) {
        return toast.error("Invalid Admin Credential");
      }
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        { email, password }
      );

      console.log(data);

      if (data?.success) {
        // Login was successful
        localStorage.setItem("adminToken", data.data.token);
        Cookies.set("adminToken", data.data.token, {
          secure: true, // Ensures cookies are sent over HTTPS
          sameSite: "strict", // Prevents CSRF attacks
          expires: 7, // Token valid for 7 days
        });
        toast.success("Admin Login successful");
        form.reset();
        router.push("/admin");
      } else {
        // Login failed
        toast.error(data?.message || "Failed to log in");
        form.reset();
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred during login. Please try again.");
      form.reset();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AdminLogin), { ssr: false });


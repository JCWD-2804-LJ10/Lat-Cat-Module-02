"use client";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { showSuccessAlert, showErrorAlert } from "@/utils/swal";
import Cookie from "js-cookie";
import { access } from "fs";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data }: any = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      const session = data?.session;
      if (session && session.access_token && session.expires_in) {
        showSuccessAlert("Successfully signed in", "Login successful", () => {
          Cookie.set("token", data.session?.access_token, {
            expires: session?.expires_in,
          });
          router.push("/");
        });
      } else {
        throw new Error("Session missing");
      }
    } catch (error) {
      showErrorAlert("Failed Login", "Failed to login");
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      if (data) {
        showSuccessAlert(
          "Successfully signed in",
          "Success signing in with Google",
          () => {
            router.push("/");
          }
        );
      }
    } catch (error) {
      showErrorAlert("Error signing in", "Error signing in with Google");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        onSubmit={handleLogin || handleLoginWithGoogle}
        className="w-full max-w-sm p-4 bg-white rounded-md shadow-md"
      >
        <h2 className="mb-6 text-2xl text-black font-semibold text-center">
          Login
        </h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Login
        </button>
        <button
          type="submit"
          className="w-full py-2 text-white bg-red-600 hover:bg-blue-700 rounded"
        >
          Login google
        </button>
      </form>
    </main>
  );
};

export default Login;

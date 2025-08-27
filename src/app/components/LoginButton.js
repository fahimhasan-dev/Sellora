"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div>
      <button className="btn text-gray-100 bg-[#f4c340] rounded-xl" onClick={() => signIn()}>Sign in</button>
    </div>
  );
}

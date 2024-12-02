"use client";

import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
  return (
    <div className="flex gap-8">
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Log Out</button>
    </div>
  );
};

import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b text-center">
        20% off on next 5 days from main Layout!
      </div>
      {children}
    </>
  );
}

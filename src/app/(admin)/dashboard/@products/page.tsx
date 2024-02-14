"use client";
import React, { useState } from "react";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const token = process.env.REVALIDATE_TOKEN;
    const res = await fetch(
      `http://localhost:3000/api/revalidate?tag=products&secret=1823801230`,
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };
  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
      <h1>{status}</h1>
      <button
        className="bg-black text-white p-3 m-5"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
};

export default AdminProductPage;

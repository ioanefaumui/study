"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const postData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    fetch("/api/cms", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <form onSubmit={postData}>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        id="email "
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Send data</button>
    </form>
  );
}

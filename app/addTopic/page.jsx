"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [email, setEmail] = useState("");
  const [nowa, setNowa] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !nim || !angkatan || !jurusan || !fakultas || !email || !nowa) {
      alert("Isi semua form");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ 
          nama,
          nim,
          angkatan,
          jurusan,
          fakultas,
          email,
          nowa,
         }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNama(e.target.value)}
        value={nama}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nama"
      />

      <input
        onChange={(e) => setNim(e.target.value)}
        value={nim}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="NIM"
      />

      <input
        onChange={(e) => setAngkatan(e.target.value)}
        value={angkatan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Angkatan"
      />

      <input
        onChange={(e) => setJurusan(e.target.value)}
        value={jurusan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Jurusan"
      />

      <input
        onChange={(e) => setFakultas(e.target.value)}
        value={fakultas}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Fakultas"
      />

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="email"
      />

      <input
        onChange={(e) => setNowa(e.target.value)}
        value={nowa}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="nomer wa"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Buat Data
      </button>
    </form>
  );
}

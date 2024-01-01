"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({
  id,
  nama,
  nim,
  angkatan,
  jurusan,
  fakultas,
  email,
  nowa,
}) {
  const [newNama, setNewNama] = useState(nama);
  const [newNim, setNewNim] = useState(nim);
  const [newAngkatan, setNewAngkatan] = useState(angkatan);
  const [newJurusan, setNewJurusan] = useState(jurusan);
  const [newFakultas, setNewFakultas] = useState(fakultas);
  const [newEmail, setNewEmail] = useState(email);
  const [newNowa, setNewNowa] = useState(nowa);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ 
          newNama, 
          newNim,
          newAngkatan,
          newJurusan,
          newFakultas,
          newEmail,
          newNowa,

        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewNama(e.target.value)}
        value={newNama}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nama"
      />

      <input
        onChange={(e) => setNewNim(e.target.value)}
        value={newNim}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="nim"
      />

      <input
        onChange={(e) => setNewAngkatan(e.target.value)}
        value={newAngkatan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="angkatan"
      />

      <input
        onChange={(e) => setNewJurusan(e.target.value)}
        value={newJurusan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="jurusan"
      />

      <input
        onChange={(e) => setNewFakultas(e.target.value)}
        value={newFakultas}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Fakultas"
      />

      <input
        onChange={(e) => setNewEmail(e.target.value)}
        value={newEmail}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Email"
      />  

      <input
        onChange={(e) => setNewNowa(e.target.value)}
        value={newNowa}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Whatsapp"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Data
      </button>
    </form>
  );
}

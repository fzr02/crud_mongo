import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { nama, nim, angkatan, jurusan, fakultas, email, nowa } = topic;

  return (<EditTopicForm id={id} nama={nama} nim={nim} angkatan={angkatan} jurusan={jurusan} fakultas={fakultas} email={email} nowa={nowa} />
  );
}


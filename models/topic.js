import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    nama: String,
    nim: String,
    angkatan: String,
    jurusan : String,
    fakultas : String,
    email : String,
    nowa : String,    
    
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;

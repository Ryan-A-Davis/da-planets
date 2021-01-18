import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Species = new Schema(
  {
    name: { type: String, required: true },
    planet: { type: ObjectId, ref: "Planet", required: true },
    moon: { type: ObjectId, ref: "Moon" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;
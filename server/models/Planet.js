import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Planet = new Schema(
  {
    name: { type: String, required: true },
    star: { type: ObjectId, ref: "Star", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
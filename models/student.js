import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: String,
  enrolled: Boolean,
})

const Student = mongoose.model('Todo', studentSchema);

export {
  Student
}
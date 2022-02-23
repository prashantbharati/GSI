import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  email: String,
  details: String,
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

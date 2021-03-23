import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  image:{
    type: String,
    required: true,
  },
  cv_url: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
    maxlength: [510],
  },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;

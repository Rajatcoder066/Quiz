const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    name: String,
    feedback:String    
  },
  {
    collection: "UserInfo1",
  }
);
mongoose.model("UserInfo1", UserDetailSchema);

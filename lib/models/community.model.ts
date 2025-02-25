import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  id: { type: 'string', required: true },
  username: { type: 'string', required: true, unique: true },
  name: { type: 'string', required: true },
  image: String,
  bio: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  threads: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Threads'
  }],
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }]
});

const Community = mongoose.models.Community || mongoose.model('Community', communitySchema);

export default Community;
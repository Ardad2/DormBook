const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  dorm: {
    type: String
  },
  major: {
    type: String
  },
  hometown: {
    type: String
  },
  year: {
    type: String,
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  clubs: [
    {
      position: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      campus: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    tiktok: {
      type: String
    },
    twitch: {
      type: String
    },
    discord: {
      type:String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);

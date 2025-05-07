const mongoose = require('mongoose');
const slugify = require('slugify');

const citySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
  description: { type: String, required: true },
  images: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 4;
      },
      message: 'Mỗi thành phố chỉ được phép có tối đa 4 hình ảnh',
    },
  },
  bestTime: { type: String },
  bestDuration: { type: String },
  weather: {
    winter: {
      maxTemp: Number,
      minTemp: Number,
      description: String,
    },
    spring: {
      maxTemp: Number,
      minTemp: Number,
      description: String,
    },
    summer: {
      maxTemp: Number,
      minTemp: Number,
      description: String,
    },
    autumn: {
      maxTemp: Number,
      minTemp: Number,
      description: String,
    },
  },
});

citySchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true });
  }
  next();
});

const City = mongoose.model('city', citySchema);

module.exports = City;

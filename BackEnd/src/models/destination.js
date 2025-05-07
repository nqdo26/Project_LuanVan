const mongoose = require('mongoose');
const slugify = require('slugify'); 

const destinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'type' },
  tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag' }],
  location: String,
  createAt: Date,
  album: {
    highlight: [String],
    space: [String],
    fnb: [String],
    menu: [String],
  },
  statistics: {
    views: Number,
    totalSave: Number,
    totalRate: Number,
    totalReview: Number,
    averageRating: Number,
  },
  detail: {
    highlight: [String],
    culture: [String],
    activities: [String],
    fee: [String],
    amenities: [String],
    services: [String],
    usefulInfo: [String],
    location: String,
  },
  openHour: {
    mon: { open: String, close: String },
    tue: { open: String, close: String },
    wed: { open: String, close: String },
    thu: { open: String, close: String },
    fri: { open: String, close: String },
    sat: { open: String, close: String },
    sun: { open: String, close: String },
  },
  contactInfo: {
    phone: String,
    website: String,
    facebook: String,
    instagram: String,
  },
});

destinationSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true });
  }
  next();
});

const Destination = mongoose.model('destination', destinationSchema);

module.exports = Destination;

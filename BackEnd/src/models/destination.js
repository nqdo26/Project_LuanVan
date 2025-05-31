const mongoose = require('mongoose');
const slugify = require('slugify');

const destinationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true },
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
        description: String,
        highlight: [String],
        services: [String],
        cultureType: [String],
        activities: [String],
        fee: [String],
        usefulInfo: [String],
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
    conmments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
});

destinationSchema.pre('save', function (next) {
    if (!this.slug) {
        this.slug = slugify(this.title, { lower: true });
    }
    next();
});

const Destination = mongoose.model('destination', destinationSchema);

module.exports = Destination;

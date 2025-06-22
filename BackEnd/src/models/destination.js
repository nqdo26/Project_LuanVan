const mongoose = require('mongoose');
const slugify = require('slugify');

const destinationSchema = new mongoose.Schema({
    title: String,
    aiDescription: String,
    slug: String,
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'type' },
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag' }],
    location: {
        address: String,
        city: { type: mongoose.Schema.Types.ObjectId, ref: 'city' },
    },
    album: {
        highlight: [String],
        space: [String],
        fnb: [String],
        menu: [String],
    },
    statistics: {
        views: { type: Number, default: 0 },
        totalSave: { type: Number, default: 0 },
        totalRate: { type: Number, default: 0 },
        averageRating: { type: Number, default: 0 },
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
        allday: Boolean,
    },
    contactInfo: {
        phone: String,
        website: String,
        facebook: String,
        instagram: String,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});

destinationSchema.pre('save', function (next) {
    if (!this.slug) {
        this.slug = slugify(this.title, { lower: true });
    }
    next();
});

const Destination = mongoose.model('destination', destinationSchema);

module.exports = Destination;

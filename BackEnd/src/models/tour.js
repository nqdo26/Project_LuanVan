const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: String,
    slug: { type: String, unique: true },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'city' },
    duratio: {
        startDay: Date,
        endDay: Date,
        numDays: Number,
    },
    itinerary: [
        {
            day: String,
            description: {
                destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'destination' },
                note: String,
                time: String,
            },
            note: {
                title: String,
                content: String,
            },
        },
    ],
});

tourSchema.pre('save', function (next) {
    if (!this.slug) {
        this.slug = slugify(this.title, { lower: true });
    }
    next();
});

const Tour = mongoose.model('tour', tourSchema);

module.exports = Tour;

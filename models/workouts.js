const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutType = new Schema({
    type: { 
        type: String,
        trim: true,
    },
    duration: {
        type: Number,
        trim: true, 
    },
    weight: {
        type: Number,
        trim: true, 
    },
    reps: {
        type: Number,
        trim: true, 
    },
    sets: {
        type: Number,
        trim: true, 
    },    
})

const workoutTypes = mongoose.model("workoutTypes", workoutType)

module.exports = workoutTypes
// Get the mongoose object
import mongoose from 'mongoose';

// Prepare the database in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://0.0.0.0:27017/excercise_db',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

// Define the schema
const excerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: {type: String, required: true}
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const exercises = mongoose.model("exercise", excerciseSchema);

const createExercise = async (name, reps, weight,unit, date) => {
    const exercise = new exercises({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    return exercise.save();
}

const findExercises = async () => {
    const query = exercises.find()
    return query.exec();
}

const replaceExercise = async (_id, name,reps,weight,unit,date) => {
    let numUpdated = 0
    const result = await exercises.findOneAndUpdate({ _id: _id },
        { name: name, reps: reps, weight: weight, unit: unit, date: date });
    if (result == null) {
        return { "Error" : "Not found"}
    }
    else {
        numUpdated ++
    return numUpdated
}}

const deleteById = async (_id) => {
    const result = await exercises.deleteOne({ _id: _id });
    return result.deletedCount;
}

export {createExercise,findExercises,replaceExercise,deleteById}

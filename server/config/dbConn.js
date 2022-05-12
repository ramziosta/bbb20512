const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false, 
            useCreateIndex: true,
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB
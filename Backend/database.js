const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const mongoose = require('mongoose');

module.exports = () => {
  console.log('Connecting to MongoDB with URI:', process.env.MONGO_ATLAS_URL);
  mongoose
    .connect(process.env.MONGO_ATLAS_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('DB connection error:', err));
};

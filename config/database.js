import mongoose from "mongoose";

mongoose.connect(process.env.database_url);

const db = mongoose.connection();

db.on('connected', function() {
  console.log(`Connection Established to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("DB is connected...");
    })
    .catch((err) => {
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data =initData.data.map((obj) => ({
        ...obj, owner: "69bcc3188335f1bc54ca05af"
    }))
    await Listing.insertMany(initData.data);
    console.log("Data is initialized");
};

initDB(); 
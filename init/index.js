require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const { data: initData } = require("./Data.js");
const Listing = require("../Models/listings.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await fetchAndAddCoordinates();
    await initializeDatabase();
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

main();

async function initializeDatabase() {
  try {
    await Listing.deleteMany({});
    if (!initData || initData.length === 0) return;

    const ownerId = "68f32644f8fd09ea89eb3266"; // replace with valid user ID
    const updatedData = initData.map((obj) => ({
      ...obj,
      owner: ownerId,
    }));

    await Listing.insertMany(updatedData);
  } catch (error) {
    console.error(error);
  }
}

async function fetchCoordinates(location) {
  try {
    const response = await geocodingClient
      .forwardGeocode({
        query: location,
        limit: 1,
      })
      .send();

    if (response.body.features && response.body.features.length > 0) {
      return response.body.features[0].geometry;
    } else {
      return { type: "Point", coordinates: [0, 0] };
    }
  } catch (error) {
    return { type: "Point", coordinates: [0, 0] };
  }
}

async function fetchAndAddCoordinates() {
  if (!initData || initData.length === 0) return;

  for (let place of initData) {
    const geometry = await fetchCoordinates(place.location);
    place.geometry = geometry;
  }
}

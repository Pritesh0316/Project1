const express= require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controller/listing.js");

const multer  = require('multer');
const{storage} = require("../cloudConfig.js");
const upload = multer({storage});

// Filter Route
router.get("/filter",wrapAsync(listingController.filter));

// New Route
router.get("/new",isLoggedIn ,listingController.renderNewForm);

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListing));

// Router Route
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn ,upload.single('listing[image]') ,validateListing, wrapAsync(listingController.createListing));

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;

// Index Route
// router.get("/", wrapAsync(listingController.index));

//Create Route
// router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createListing));

// Show Route
// router.get("/:id", wrapAsync(listingController.showListing));

//Update Route
// router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));

// Delete Route
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));
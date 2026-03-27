const Listing = require("../models/listing.js");
const axios = require("axios");

module.exports.index =  async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.filter =  async (req, res) => {
    const {category} = req.query;
    const allListings = await Listing.find({category});
    
    res.render("listings/filter.ejs", {allListings, category});
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.createListing = async(req, res) => {
    const location = req.body.listing.location;
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json", {
            params: {
                q: location,
                key:  process.env.GEOCODE_API_KEY
            }
        });
    if (!response.data.results.length) {
            req.flash("error", "Invalid location");
            return res.redirect("/listings/new");
    }
    const{lat, lng} = response.data.results[0].geometry;

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry = {
        type: "Point",
        coordinates: [lng, lat]
    };
    await newListing.save();
    console.log(newListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
    let{id} = req.params;
    const listing = await Listing.findById(id).populate({ path : "reviews", populate : {path : "author" }}).populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist !");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
};

module.exports.editListing = async (req, res) => {
    let{id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist !");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.updateListing =  async (req, res) => {
    const location = req.body.listing.location;
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json", {
            params: {
                q: location,
                key:  process.env.GEOCODE_API_KEY
            }
        });
    if (!response.data.results.length) {
            req.flash("error", "Invalid location");
            return res.redirect("/listings/new");
    }
    const{lat, lng} = response.data.results[0].geometry;

    let{id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    listing.geometry = {
        type: "Point",
        coordinates: [lng, lat]
    };
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
    };
    await listing.save();
    req.flash("success", "Listing Updated !");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let{id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted !");
    res.redirect("/listings");
};
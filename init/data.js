let sampleListings = [
    {
    title: "Beachside Villa",
    description: "Beautiful villa with ocean views and private beach access.",
    image: {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        filename: "listingimage"
    },
    price: 1800,
    location: "Goa",
    country: "India",
    category: "trending",
    geometry: {
        type: "Point",
        coordinates: [74.1240, 15.2993]
    }    
    },
    {
    title: "Mountain Retreat",
    description: "Peaceful wooden cabin surrounded by the Himalayas.",
    image: {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "listingimage"
    },
    price: 1200,
    location: "Manali",
    country: "India",
    category: "mountain",
    geometry: {
        type: "Point",
        coordinates: [77.18, 32.24]
    }
    },
    {
    title: "Modern City Apartment",
    description: "Stylish apartment located in the center of the city.",
    image: {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "listingimage"
    },
    price: 2200,
    location: "Mumbai",
    country: "India",
    category: "iconic cities",
    geometry: {
        type: "Point",
        coordinates: [72.83, 18.95]
    }
    },
    {
    title: "Desert Luxury Camp",
    description: "Experience luxury camping in the golden desert dunes.",
    image: {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        filename: "listingimage"
    },
    price: 900,
    location: "Jaisalmer",
    country: "India",
    category: "camping",
    geometry: {
        type: "Point",
        coordinates: [70.90, 26.91]
    }
    },
    {
    title: "Lakeview House",
    description: "Serene home overlooking a calm and beautiful lake.",
    image: {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        filename: "listingimage"
    },
    price: 1400,
    location: "Udaipur",
    country: "India",
    category: "amazing pools",
    geometry: {
        type: "Point",
        coordinates: [73.67, 24.52]
    }
    },
    {
    title: "Hilltop Cottage",
    description: "Charming cottage with breathtaking mountain views.",
    image: {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "listingimage"
    },
    price: 1100,
    location: "Shimla",
    country: "India",
    category: "mountain",
    geometry: {
        type: "Point",
        coordinates: [77.17, 31.10]
    }
    },
    {
    title: "Backwater Homestay",
    description: "Relaxing stay near the peaceful Kerala backwaters.",
    image: {
        url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
        filename: "listingimage"
    },
    price: 1000,
    location: "Alleppey",
    country: "India",
    category: "trending",
    geometry: {
        type: "Point",
        coordinates: [76.33, 9.49]
    }
    },
    {
    title: "Luxury Palace Stay",
    description: "Stay in a heritage palace with royal interiors.",
    image: {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        filename: "listingimage"
    },
    price: 3500,
    location: "Jaipur",
    country: "India",
    category: "castles",
    geometry: {
        type: "Point",
        coordinates: [75.79, 26.91]
    }
    },
    {
    title: "Forest Treehouse",
    description: "Unique treehouse experience deep inside the forest.",
    image: {
        url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        filename: "listingimage"
    },
    price: 1300,
    location: "Wayanad",
    country: "India",
    category: "rooms",
    geometry: {
        type: "Point",
        coordinates: [76.07, 11.69]
    }
    },
    {
    title: "Beach Hut",
    description: "Simple and cozy hut located directly on the beach.",
    image: {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        filename: "listingimage"
    },
    price: 800,
    location: "Gokarna",
    country: "India",
    category: "trending",
    geometry: {
        type: "Point",
        coordinates: [74.31, 14.54]
    }
    },
    {
    title: "Urban Loft",
    description: "Trendy loft apartment with modern architecture.",
    image: {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        filename: "listingimage"
    },
    price: 2100,
    location: "Bangalore",
    country: "India",
    category: "iconic cities",
    geometry: {
        type: "Point",
        coordinates: [77.57, 12.96]
    }
    },
    {
    title: "Tea Garden Bungalow",
    description: "Colonial-style bungalow surrounded by tea plantations.",
    image: {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "listingimage"
    },
    price: 1500,
    location: "Darjeeling",
    country: "India",
    category: "farms",
    geometry: {
        type: "Point",
        coordinates: [88.26, 27.04]
    }
    },
    {
    title: "Island Resort Villa",
    description: "Private villa on a tropical island resort.",
    image: {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        filename: "listingimage"
    },
    price: 4000,
    location: "Andaman",
    country: "India",
    category: "trending",
    geometry: {
        type: "Point",
        coordinates: [92.50, 10.74]
    }
    },
    {
    title: "Riverside Cottage",
    description: "Cozy cottage beside a flowing mountain river.",
    image: {
        url: "https://images.unsplash.com/photo-1505692794403-34d4982c8f26",
        filename: "listingimage"
    },
    price: 1200,
    location: "Rishikesh",
    country: "India",
    category: "rooms",
    geometry: {
        type: "Point",
        coordinates: [78.28, 30.11]
    }
    },
    {
    title: "Heritage Haveli",
    description: "Traditional haveli stay with cultural experience.",
    image: {
        url: "https://images.unsplash.com/photo-1560448075-bb485b067938",
        filename: "listingimage"
    },
    price: 1700,
    location: "Jodhpur",
    country: "India",
    category: "castles",
    geometry: {
        type: "Point",
        coordinates: [73.02, 26.23]
    }
    },
    {
    title: "Snow View Chalet",
    description: "Wooden chalet offering stunning snow mountain views.",
    image: {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "listingimage"
    },
    price: 1900,
    location: "Gulmarg",
    country: "India",
    category: "arctic",
    geometry: {
        type: "Point",
        coordinates: [74.38, 34.04]
    }
    },
    {
    title: "Eco Bamboo Hut",
    description: "Eco-friendly bamboo hut surrounded by nature.",
    image: {
        url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2",
        filename: "listingimage"
    },
    price: 700,
    location: "Meghalaya",
    country: "India",
    category: "camping",
    geometry: {
        type: "Point",
        coordinates: [91.36, 25.46]
    }
    },
    {
    title: "Luxury Penthouse",
    description: "Spacious penthouse with skyline views.",
    image: {
        url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        filename: "listingimage"
    },
    price: 4500,
    location: "Delhi",
    country: "India",
    category: "iconic cities",
    geometry: {
        type: "Point",
        coordinates: [77.10, 28.70]
    }
    },
    {
    title: "Cliffside Villa",
    description: "Elegant villa perched on a cliff with sea views.",
    image: {
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        filename: "listingimage"
    },
    price: 2600,
    location: "Varkala",
    country: "India",
    category: "amazing pools",
    geometry: {
        type: "Point",
        coordinates: [76.71, 8.73]
    }
    },
    {
    title: "Countryside Farmhouse",
    description: "Relaxing farmhouse surrounded by green fields.",
    image: {
        url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
        filename: "listingimage"
    },
    price: 950,
    location: "Punjab",
    country: "India",
    category: "farms",
    geometry: {
        type: "Point",
        coordinates: [75.34, 31.14]
    }
    }
];

module.exports = {data: sampleListings};
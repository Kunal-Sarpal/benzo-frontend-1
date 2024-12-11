const products = [
    {
        _id: "1",
        image: [
            "https://m.media-amazon.com/images/I/4181R+nktQS._SY300_SX300_.jpg",
            "https://m.media-amazon.com/images/I/4181R+nktQS._SY300_SX300_.jpg"
        ],
        creatorId: {
            _id: "creator1",
            name: "Jane Doe",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
        },
        itemName: "Stylish Leather Jacket",
        itemDescription: "This high-quality leather jacket is perfect for any season. Its modern design and comfortable fit make it a must-have in your wardrobe.",
        price: 129.99,
        productType: "Clothing",
        hashtags: ["fashion", "leather", "style"],
        stock: 50,
        category: "Apparel",
        itemAnalytical: {
            likes: [
                { userId: "user1", timestamp: "2024-12-01T12:34:56Z" },
                { userId: "user2", timestamp: "2024-12-02T14:21:36Z" }
            ]
        },
        reviews: [
            "review1",
            "review2"
        ],
        comments: [
            "comment1",
            "comment2"
        ],
        createdAt: "2024-12-01T10:00:00Z"
    },
    {
        _id: "2",
        image: [
            "https://m.media-amazon.com/images/I/41S7YMoLy2L._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41S7YMoLy2L._SX300_SY300_QL70_FMwebp_.jpg"
        ],
        creatorId: {
            _id: "creator2",
            name: "John Smith",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
        },
        itemName: "Premium Smartwatch",
        itemDescription: "Stay connected and on top of your fitness with this premium smartwatch. Includes heart rate monitor, GPS, and multiple workout modes.",
        price: 199.99,
        productType: "Electronics",
        hashtags: ["tech", "smartwatch", "fitness"],
        stock: 100,
        category: "Gadgets",
        itemAnalytical: {
            likes: [
                { userId: "user3", timestamp: "2024-12-05T15:30:00Z" },
                { userId: "user4", timestamp: "2024-12-06T16:10:00Z" }
            ]
        },
        reviews: [
            "review3",
            "review4"
        ],
        comments: [
            "comment3",
            "comment4"
        ],
        createdAt: "2024-12-02T12:00:00Z"
    },
    {
        _id: "3",
        image: [
            "https://m.media-amazon.com/images/I/41M-WyJcZdL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41M-WyJcZdL._SX300_SY300_QL70_FMwebp_.jpg"
        ],
        creatorId: {
            _id: "creator3",
            name: "Sarah Lee",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
        },
        itemName: "Wireless Earbuds",
        itemDescription: "Enjoy high-quality sound and a perfect fit with these wireless earbuds. Ideal for running, working out, or just casual listening.",
        price: 89.99,
        productType: "Accessories",
        hashtags: ["audio", "wireless", "music"],
        stock: 75,
        category: "Audio",
        itemAnalytical: {
            likes: [
                { userId: "user5", timestamp: "2024-12-04T11:20:45Z" },
                { userId: "user6", timestamp: "2024-12-06T09:45:30Z" }
            ]
        },
        reviews: [
            "review5",
            "review6"
        ],
        comments: [
            "comment5",
            "comment6"
        ],
        createdAt: "2024-12-03T14:00:00Z"
    },
    {
        _id: "4",
        image: [
            "https://m.media-amazon.com/images/I/41M-WyJcZdL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41M-WyJcZdL._SX300_SY300_QL70_FMwebp_.jpg"
        ],
        creatorId: {
            _id: "creator3",
            name: "Sarah Lee",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
        },
        itemName: "Wireless Earbuds",
        itemDescription: "Enjoy high-quality sound and a perfect fit with these wireless earbuds. Ideal for running, working out, or just casual listening.",
        price: 89.99,
        productType: "Accessories",
        hashtags: ["audio", "wireless", "music"],
        stock: 75,
        category: "Audio",
        itemAnalytical: {
            likes: [
                { userId: "user5", timestamp: "2024-12-04T11:20:45Z" },
                { userId: "user6", timestamp: "2024-12-06T09:45:30Z" }
            ]
        },
        reviews: [
            "review5",
            "review6"
        ],
        comments: [
            "comment5",
            "comment6"
        ],
        createdAt: "2024-12-03T14:00:00Z"
    }
];

export default products;

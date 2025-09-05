// products.js - Centralized product data

const allProducts = [
  // Health & Wellness Products
  {
    id: 1,
    name: "Ayurvedic Wellness Kit",
    category: "health-wellness",
    categoryName: "Health & Wellness",
    price: 4500,
    image: "https://images.unsplash.com/photo-1600830292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Complete Ayurvedic wellness kit with herbal oils and supplements.",
    link: "shop/products/ayurvedic-wellness-kit.html",
    featured: true
  },
  {
    id: 2,
    name: "Essential Oil Set",
    category: "health-wellness",
    categoryName: "Health & Wellness",
    price: 3200,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Collection of pure essential oils for aromatherapy and relaxation.",
    link: "shop/products/essential-oil-set.html",
    featured: false
  },
  {
    id: 3,
    name: "Herbal Tea Collection",
    category: "health-wellness",
    categoryName: "Health & Wellness",
    price: 2800,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Assortment of organic herbal teas for relaxation and wellness.",
    link: "shop/products/herbal-tea-collection.html",
    featured: false
  },
  
  // Electronics Products
  {
    id: 4,
    name: "Gaming Laptop Pro",
    category: "electronics",
    categoryName: "Electronics",
    price: 185000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "High-performance laptop with dedicated graphics for gaming.",
    link: "shop/products/gaming-laptop-pro.html",
    featured: true
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    category: "electronics",
    categoryName: "Electronics",
    price: 8500,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "High-quality wireless earbuds with noise cancellation.",
    link: "shop/products/wireless-earbuds.html",
    featured: false
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "electronics",
    categoryName: "Electronics",
    price: 22000,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Feature-rich smartwatch with health monitoring and notifications.",
    link: "shop/products/smart-watch.html",
    featured: false
  },
  
  // Fashion Products
  {
    id: 7,
    name: "Designer Handbag",
    category: "fashion",
    categoryName: "Fashion",
    price: 12500,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Elegant leather handbag with premium craftsmanship.",
    link: "shop/products/designer-handbag.html",
    featured: true
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "fashion",
    categoryName: "Fashion",
    price: 4200,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Genuine leather wallet with multiple card slots and coin pocket.",
    link: "shop/products/leather-wallet.html",
    featured: false
  },
  {
    id: 9,
    name: "Designer Sunglasses",
    category: "fashion",
    categoryName: "Fashion",
    price: 7500,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Stylish sunglasses with UV protection and premium frames.",
    link: "shop/products/designer-sunglasses.html",
    featured: false
  },
  
  // Home & Kitchen Products
  {
    id: 10,
    name: "Smart Coffee Maker",
    category: "home-kitchen",
    categoryName: "Home & Kitchen",
    price: 28500,
    image: "https://images.unsplash.com/photo-1556911220-bff31c8a2e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "WiFi-enabled coffee maker with programmable brewing options.",
    link: "shop/products/smart-coffee-maker.html",
    featured: true
  },
  {
    id: 11,
    name: "Ceramic Cookware Set",
    category: "home-kitchen",
    categoryName: "Home & Kitchen",
    price: 15000,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Non-stick ceramic cookware set for healthy cooking.",
    link: "shop/products/ceramic-cookware-set.html",
    featured: false
  },
  {
    id: 12,
    name: "Air Purifier",
    category: "home-kitchen",
    categoryName: "Home & Kitchen",
    price: 18500,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "HEPA air purifier with smart sensors for clean air.",
    link: "shop/products/air-purifier.html",
    featured: false
  },
  
  // Sports & Outdoors Products
  {
    id: 13,
    name: "Premium Yoga Mat Set",
    category: "sports-outdoors",
    categoryName: "Sports & Outdoors",
    price: 8750,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Non-slip yoga mat with blocks and straps for complete practice.",
    link: "shop/products/yoga-mat-set.html",
    featured: true
  },
  {
    id: 14,
    name: "Running Shoes",
    category: "sports-outdoors",
    categoryName: "Sports & Outdoors",
    price: 12500,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Lightweight running shoes with extra cushioning for comfort.",
    link: "shop/products/running-shoes.html",
    featured: false
  },
  {
    id: 15,
    name: "Camping Tent",
    category: "sports-outdoors",
    categoryName: "Sports & Outdoors",
    price: 16500,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Waterproof camping tent for 3-4 people with easy setup.",
    link: "shop/products/camping-tent.html",
    featured: false
  },
  
  // Books & Media Products
  {
    id: 16,
    name: "Self-Help Book",
    category: "books-media",
    categoryName: "Books & Media",
    price: 1800,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Inspirational book for personal growth and development.",
    link: "shop/products/self-help-book.html",
    featured: false
  },
  {
    id: 17,
    name: "Meditation Guide",
    category: "books-media",
    categoryName: "Books & Media",
    price: 2200,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Complete guide to meditation techniques for beginners and experts.",
    link: "shop/products/meditation-guide.html",
    featured: false
  },
  
  // Spare Parts Products
  {
    id: 18,
    name: "Premium Smartphone Battery",
    category: "spare-parts",
    categoryName: "Spare Parts",
    price: 3200,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "High-capacity replacement battery for all major smartphone models.",
    link: "shop/products/smartphone-battery.html",
    featured: true
  },
  {
    id: 19,
    name: "Smartphone Screen Protector",
    category: "spare-parts",
    categoryName: "Spare Parts",
    price: 800,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Tempered glass screen protector for all smartphone models.",
    link: "shop/products/smartphone-screen-protector.html",
    featured: false
  },
  {
    id: 20,
    name: "Laptop Charger",
    category: "spare-parts",
    categoryName: "Spare Parts",
    price: 3500,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Universal laptop charger with multiple adapter tips.",
    link: "shop/products/laptop-charger.html",
    featured: false
  }
];

// Function to get products by category
function getProductsByCategory(category) {
  return allProducts.filter(product => product.category === category);
}

// Function to get all products
function getAllProducts() {
  return allProducts;
}

// Function to get featured products
function getFeaturedProducts() {
  return allProducts.filter(product => product.featured);
}

// Function to get category information
function getCategoryInfo() {
  return [
    {
      id: "health-wellness",
      name: "Health & Wellness",
      description: "Natural supplements, herbal remedies, and wellness products for a healthier lifestyle.",
      image: "https://images.unsplash.com/photo-1600830292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "shop/health-wellness.html"
    },
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets, smartphones, laptops, and electronic accessories.",
      image: "https://images.unsplash.com/photo-1498049799966-3c7c3d33fa1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "shop/electronics.html"
    },
    {
      id: "fashion",
      name: "Fashion",
      description: "Trendy clothing, accessories, and footwear for men and women.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "shop/fashion.html"
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      description: "Furniture, kitchen appliances, and home decor items.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c8a2e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "shop/home-kitchen.html"
    },
    {
      id: "sports-outdoors",
      name: "Sports & Outdoors",
      description: "Fitness equipment, outdoor gear, and sports accessories.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "shop/sports-outdoors.html"
    },
    {
      id: "books-media",
      name: "Books & Media",
      description: "Educational books, novels, and media for entertainment and learning.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "shop/books-media.html"
    },
    {
      id: "spare-parts",
      name: "Spare Parts",
      description: "High-quality replacement parts for electronics, vehicles, and home appliances.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "shop/spare-parts.html"
    }
  ];
}
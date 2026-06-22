document.addEventListener('DOMContentLoaded', () => {
  
  // 3D Watch Models List
  const watches = [
    {
      src: 'assets/wristwatch.glb',
      title: 'ZENĒVA CHRONO GOLD',
      subtitle: 'Interactive 3D Preview - Spin to Explore',
      cameraOrbit: '90deg 90deg auto' // Golden watch face faces right in GLB coordinates, so rotate camera to 90deg
    },
    {
      src: 'assets/watch-model-2.glb',
      title: 'ZENĒVA PRESTIGE STEEL',
      subtitle: 'Interactive 3D Preview - Spin to Explore',
      cameraOrbit: '0deg 90deg auto' // Steel watch face faces front by default
    },
    {
      src: 'assets/watch-model-3.glb',
      title: 'ZENĒVA GRAND CHRONOGRAPH',
      subtitle: 'Interactive 3D Preview - Spin to Explore',
      cameraOrbit: '0deg 90deg auto' // Luxury watch face faces front by default
    }
  ];
  let currentWatchIndex = 0;
  
  const viewer = document.getElementById('wristwatch-viewer');
  const badgeTitle = document.getElementById('badgeTitle');
  const badgeSubtitle = document.getElementById('badgeSubtitle');
  const prevBtn = document.getElementById('prevWatchBtn');
  const nextBtn = document.getElementById('nextWatchBtn');

  function updateWatch(index) {
    currentWatchIndex = index;
    const watch = watches[currentWatchIndex];
    
    // Explicitly reset the camera orbit to each watch's custom front-facing angle
    viewer.setAttribute('camera-orbit', watch.cameraOrbit);
    
    viewer.setAttribute('src', watch.src);
    badgeTitle.textContent = watch.title;
    badgeSubtitle.textContent = watch.subtitle;

    // Trigger text slide-up animation
    const modelBadge = document.querySelector('.model-badge');
    if (modelBadge) {
      modelBadge.classList.remove('animate-text');
      void modelBadge.offsetWidth; // Trigger DOM reflow to restart animation
      modelBadge.classList.add('animate-text');
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let index = currentWatchIndex - 1;
      if (index < 0) index = watches.length - 1;
      updateWatch(index);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let index = currentWatchIndex + 1;
      if (index >= watches.length) index = 0;
      updateWatch(index);
    });
  }

  // Transition timer (2.5 seconds) to transition from video to 3D model
  const heroSection = document.querySelector('.hero-section');
  const modelContainer = document.getElementById('modelContainer');
  
  setTimeout(() => {
    // Apply blur and darken overlay to video
    heroSection.classList.add('transitioned');
    
    // Reveal the 3D wristwatch model
    setTimeout(() => {
      modelContainer.classList.remove('hidden');
      modelContainer.classList.add('active');
    }, 400); // Small delay to sync transitions
    
  }, 2500);

  // Scroll Down arrow smooth scrolling
  const scrollBtn = document.querySelector('.scroll-down');
  const categoriesSection = document.getElementById('categories');
  if (scrollBtn && categoriesSection) {
    scrollBtn.addEventListener('click', () => {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.style.display === 'block';
      mobileNav.style.display = isOpen ? 'none' : 'block';
      menuToggle.querySelector('.material-icons').textContent = isOpen ? 'menu' : 'close';
    });
  }

  // Search Modal Toggles
  const searchBtn = document.getElementById('searchBtn');
  const closeSearch = document.getElementById('closeSearch');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.style.display = 'flex';
      searchInput.focus();
    });
  }

  if (closeSearch && searchOverlay) {
    closeSearch.addEventListener('click', () => {
      searchOverlay.style.display = 'none';
    });
  }

  // Close search on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.style.display === 'flex') {
      searchOverlay.style.display = 'none';
    }
  });

  // Mock Shopping Cart Interaction
  let cartCount = 0;
  const cartBtn = document.getElementById('cartBtn');
  const cartCountEl = document.querySelector('.cart-count');

  // Allow clicking on category cards to increment cart counter
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      incrementCart();
    });
  });

  // Add to Cart buttons in 3D product catalog
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering card click
      incrementCart();
    });
  });

  function incrementCart() {
    cartCount++;
    if (cartCountEl) {
      cartCountEl.textContent = `(${cartCount})`;
      cartCountEl.style.transform = 'scale(1.2)';
      cartCountEl.style.transition = 'transform 0.1s ease';
      setTimeout(() => {
        cartCountEl.style.transform = 'scale(1)';
      }, 150);
    }
  }

  // Detailed Catalog Dataset (Sector Collection)
  const catalogProducts = [
    {
      title: "SECTOR COLLECTION 660 - R3253517030",
      ref: "R3253517030",
      price: "100.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €33.34, €33.34, €33.32.",
      monthly: "Monthly payment from €2.40",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch1-large.png", "assets/watch1-small.png", "assets/watch1-side.png", "assets/watch1-back.png", "assets/watch1-lifestyle.png"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 660",
        Style: "Classic",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel",
        Glass: "Mineral glass",
        "Dial color": "Silver",
        "Body shape": "Round",
        "Case size": "41 mm",
        "Bracelet material": "Stainless steel",
        "Water resistance": "5 ATM (50 m)"
      }
    },
    {
      title: "SECTOR COLLECTION 660 - R3253517029",
      ref: "R3253517029",
      price: "100.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €33.34, €33.34, €33.32.",
      monthly: "Monthly payment from €2.40",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none", // Using actual black dial watch assets
      thumbnails: ["assets/watch2-large.png", "assets/watch2-perspective.png", "assets/watch2-side.png", "assets/watch2-back.png", "assets/watch2-lifestyle.png"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 660",
        Style: "Classic",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel",
        Glass: "Mineral glass",
        "Dial color": "Black",
        "Body shape": "Round",
        "Case size": "41 mm",
        "Bracelet material": "Stainless steel",
        "Water resistance": "5 ATM (50 m)"
      }
    },
    {
      title: "SECTOR COLLECTION 660 - R3253517028",
      ref: "R3253517028",
      price: "100.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €33.34, €33.34, €33.32.",
      monthly: "Monthly payment from €2.40",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch3-large.jpg", "assets/watch3-perspective.jpg", "assets/watch3-side.jpg", "assets/watch3-back.jpg", "assets/watch3-lifestyle.jpg"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 660",
        Style: "Classic",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel",
        Glass: "Mineral glass",
        "Dial color": "Blue",
        "Body shape": "Round",
        "Case size": "41 mm",
        "Bracelet material": "Stainless steel",
        "Water resistance": "5 ATM (50 m)"
      }
    },
    {
      title: "SECTOR COLLECTION 660 - R3253517027",
      ref: "R3253517027",
      price: "130.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €43.34, €43.34, €43.32.",
      monthly: "Monthly payment from €3.11",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch4-large.jpg", "assets/watch4-perspective.png", "assets/watch4-side.jpg", "assets/watch4-back.jpg", "assets/watch3-lifestyle.jpg"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 660",
        Style: "Classic",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel",
        Glass: "Mineral glass",
        "Dial color": "Black",
        "Body shape": "Round",
        "Case size": "41 mm",
        "Bracelet material": "Stainless steel",
        "Water resistance": "5 ATM (50 m)"
      }
    },
    {
      title: "SECTOR COLLECTION 230 - R3273661005",
      ref: "R3273661005",
      price: "240.00",
      stock: "In stock (4 Units)",
      installments: "Pay in 3 installments without surcharge: €80.00, €80.00, €80.00.",
      monthly: "Monthly payment from €5.80",
      downpayment: "Minimum down payment 0.00 €",
      filter: "hue-rotate(215deg) brightness(0.9) saturate(1.35) contrast(1.1)", // Chrono Cobalt
      thumbnails: ["assets/watch1-large.png", "assets/watch1-small.png", "assets/watch1-side.png", "assets/watch1-back.png", "assets/watch1-lifestyle.png"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 230",
        Style: "Chrono Sport",
        Mechanism: "Quartz Chronograph",
        "Housing material": "Polished Stainless Steel",
        Glass: "Hardened Mineral glass",
        "Dial color": "Cobalt Blue",
        "Body shape": "Round bezel",
        "Case size": "43 mm",
        "Bracelet material": "Solid Link Stainless steel",
        "Water resistance": "10 ATM (100 m)"
      }
    },
    {
      title: "SECTOR COLLECTION 270 - R3273778002",
      ref: "R3273778002",
      price: "140.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €46.68, €46.66, €46.66.",
      monthly: "Monthly payment from €3.40",
      downpayment: "Minimum down payment 0.00 €",
      filter: "contrast(1.25) brightness(0.95)", // Panda look
      thumbnails: ["assets/watch1-large.png", "assets/watch1-small.png", "assets/watch1-side.png", "assets/watch1-back.png", "assets/watch1-lifestyle.png"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 270",
        Style: "Vintage Chrono",
        Mechanism: "Quartz Chronograph",
        "Housing material": "Stainless steel",
        Glass: "Mineral glass",
        "Dial color": "Silver & Black (Panda)",
        "Body shape": "Round",
        "Case size": "42 mm",
        "Bracelet material": "Stainless steel mesh",
        "Water resistance": "5 ATM (50 m)"
      }
    },
    {
      title: "SECTOR COLLECTION 270 - R3253578026",
      ref: "R3253578026",
      price: "170.00",
      stock: "Last items in stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €56.67, €56.67, €56.66.",
      monthly: "Monthly payment from €4.06",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch7-large.png", "assets/watch7-perspective.png", "assets/watch7-side.png", "assets/watch7-back.png", "assets/watch7-lifestyle.png"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 270",
        Style: "Sports",
        Mechanism: "Quartz chronograph",
        "Housing material": "Stainless steel",
        Glass: "Mineral glass",
        "Dial color": "Black",
        "Body shape": "Round",
        "Case size": "45 mm",
        "Bracelet material": "Stainless steel with PVD coating",
        "Water resistance": "5 ATM (50 m)"
      }
    },
    {
      title: "SECTOR COLLECTION 230 - R3273661009",
      ref: "R3273661009",
      price: "200.00",
      stock: "In stock (6 Units)",
      installments: "Pay in 3 installments without surcharge: €66.68, €66.66, €66.66.",
      monthly: "Monthly payment from €4.80",
      downpayment: "Minimum down payment 0.00 €",
      filter: "brightness(1.05) contrast(0.92)", // White chrono look
      thumbnails: ["assets/watch1-large.png", "assets/watch1-small.png", "assets/watch1-side.png", "assets/watch1-back.png", "assets/watch1-lifestyle.png"],
      specs: {
        Gender: "Men's",
        Collection: "COLLECTION 230",
        Style: "Classic Sport",
        Mechanism: "Quartz Chronograph",
        "Housing material": "Polished Stainless Steel",
        Glass: "Mineral glass",
        "Dial color": "White",
        "Body shape": "Round",
        "Case size": "43 mm",
        "Bracelet material": "Stainless steel links",
        "Water resistance": "10 ATM (100 m)"
      }
    },
    {
      title: "Edox LES BÉMONTS ULTRA SLIM - 27031 357J AID",
      ref: "27031 357J AID",
      price: "487.50",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €162.50, €162.50, €162.50.",
      monthly: "Monthly payment from €11.65",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch9-large.png", "assets/watch9-back.png", "assets/watch9-side.png"],
      specs: {
        Gender: "Men's / Women's",
        Collection: "LES BÉMONTS",
        Style: "Classic",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel with PVD coating",
        Glass: "Sapphire",
        "Dial color": "White",
        "Body shape": "Square",
        "Case size": "33 x 36 mm",
        "Bracelet material": "Stainless steel with PVD coating",
        "Water resistance": "3 ATM (30 m)"
      }
    },
    {
      title: "Tissot LADY ROUND - T052.210.11.037.00",
      ref: "T052.210.11.037.00",
      price: "192.50",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €64.17, €64.17, €64.16.",
      monthly: "Monthly payment from €4.61",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch10-large.png"],
      specs: {
        Gender: "Women's",
        Style: "Classic",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel",
        Glass: "Sapphire",
        "Dial color": "White",
        "Body shape": "Round",
        "Case size": "38 mm",
        "Bracelet material": "Stainless steel",
        "Water resistance": "3 ATM (30 m)"
      }
    },
    {
      title: "Tissot MY T - T032.309.16.037.00",
      ref: "T032.309.16.037.00",
      price: "247.50",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €82.50, €82.50, €82.50.",
      monthly: "Monthly payment from €5.92",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch11-large.png"],
      specs: {
        Gender: "Women's",
        Style: "Classic",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel",
        Glass: "Sapphire",
        "Dial color": "Silver",
        "Body shape": "Square",
        "Case size": "26 x 42 mm",
        "Bracelet material": "Genuine leather",
        "Water resistance": "3 ATM (30 m)"
      }
    },
    {
      title: "Tissot T-TOUCH II - T047.220.46.126.00",
      ref: "T047.220.46.126.00",
      price: "695.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €231.67, €231.67, €231.66.",
      monthly: "Monthly payment from €16.62",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch12-large.png"],
      specs: {
        Gender: "Unisex",
        Collection: "Tissot T-TOUCH",
        Style: "Sports",
        Mechanism: "Quartz with EOL indicator",
        "Housing material": "Titanium",
        Glass: "Touch-sensitive sapphire glass",
        "Dial color": "Mother of pearl",
        Stone: "Brilliant",
        "Body shape": "Round",
        "Case size": "43.3 mm",
        "Bracelet material": "Genuine leather",
        "Water resistance": "10 ATM (100 m)"
      }
    },
    {
      title: "Tissot T-TOUCH II - T047.220.46.116.00",
      ref: "T047.220.46.116.00",
      price: "695.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €231.67, €231.67, €231.66.",
      monthly: "Monthly payment from €16.62",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["assets/watch13-large.png", "assets/watch13-back.png"],
      specs: {
        Gender: "Unisex",
        Style: "Sports",
        Mechanism: "Quartz with EOL indicator",
        "Housing material": "Titanium",
        Glass: "Touch-sensitive sapphire glass",
        "Dial color": "Mother of pearl",
        Stone: "Brilliant",
        "Body shape": "Round",
        "Case size": "43.3 x 42.7 mm",
        "Bracelet material": "Genuine leather",
        "Water resistance": "10 ATM (100 m)"
      }
    },
    {
      title: "Tissot T-WAVE",
      ref: "R3253517130",
      price: "470.00",
      stock: "In stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €156.68, €156.66, €156.66.",
      monthly: "Monthly payment from €11.20",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Collection: "T-WAVE",
        Style: "Elegance / Fashion",
        Mechanism: "Quartz",
        "Housing material": "Stainless steel",
        Glass: "Mineral glass",
        "Dial color": "White Mother of Pearl",
        "Body shape": "Square curved",
        "Case size": "30 mm",
        "Bracelet material": "Burgundy Leather strap",
        "Water resistance": "3 ATM (30 m)"
      }
    },
    {
      title: "Tissot LOVELY SQUARE",
      ref: "R3253517135",
      price: "470.00",
      stock: "In stock (3 Units)",
      installments: "Pay in 3 installments without surcharge: €156.68, €156.66, €156.66.",
      monthly: "Monthly payment from €11.20",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Collection: "LOVELY SQUARE",
        Style: "Jewelry / Retro",
        Mechanism: "Quartz",
        "Housing material": "Rose Gold-plated Steel",
        Glass: "Faceted Mineral glass",
        "Dial color": "Rose Gold",
        "Body shape": "Square 20x20mm",
        "Case size": "20 mm",
        "Bracelet material": "Rose Gold Milanese Mesh",
        "Water resistance": "3 ATM (30 m)"
      }
    },
    {
      title: "Tissot BALLADE 32MM",
      ref: "R3253517140",
      price: "1,000.00",
      stock: "In stock (5 Units)",
      installments: "Pay in 3 installments without surcharge: €333.34, €333.34, €333.32.",
      monthly: "Monthly payment from €24.00",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1639006570490-79c0c53f1080?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Collection: "BALLADE 32MM",
        Style: "Automatic Luxury",
        Mechanism: "Automatic Chronometer (Powermatic 80)",
        "Housing material": "Rose Gold & Steel",
        Glass: "Sapphire glass",
        "Dial color": "White Guilloche",
        "Body shape": "Round",
        "Case size": "32 mm",
        "Bracelet material": "White Leather strap",
        "Water resistance": "5 ATM (50 m)"
      }
    },
    {
      title: "Pierre Lannier ASTORIA",
      ref: "ASTORIA-RING",
      price: "33.75",
      stock: "Last items in stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €11.25, €11.25, €11.25.",
      monthly: "Monthly payment from €0.81",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "ASTORIA",
        Style: "Classic Ring",
        Material: "Gold-plated Sterling Silver",
        Stone: "Crystals",
        "Ring Size": "Adjustable"
      }
    },
    {
      title: "Pierre Lannier RUBYA",
      ref: "RUBYA-RING",
      price: "26.25",
      stock: "Last items in stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €8.75, €8.75, €8.75.",
      monthly: "Monthly payment from €0.63",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "RUBYA",
        Style: "Floral Gold Ring",
        Material: "Gold-plated Sterling Silver",
        Stone: "Crystals",
        "Ring Size": "Adjustable"
      }
    },
    {
      title: "Sokolov Panther",
      ref: "PANTHER-RING",
      price: "47.00",
      stock: "In stock (3 Units)",
      installments: "Pay in 3 installments without surcharge: €15.67, €15.67, €15.66.",
      monthly: "Monthly payment from €1.13",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Sokolov",
        Collection: "Panther Collection",
        Style: "Luxurious Panther Ring",
        Material: "White Gold-plated Silver",
        Stone: "Fianite",
        "Ring Size": "Adjustable"
      }
    },
    {
      title: "Sokolov Kitten",
      ref: "KITTEN-RING",
      price: "23.00",
      stock: "In stock (4 Units)",
      installments: "Pay in 3 installments without surcharge: €7.67, €7.67, €7.66.",
      monthly: "Monthly payment from €0.55",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Children's",
        Brand: "Sokolov",
        Collection: "Kids Jewelry",
        Style: "Playful Cat Silver Ring",
        Material: "925 Sterling Silver, Enamel",
        Stone: "Topaz",
        "Ring Size": "Adjustable"
      }
    },
    {
      title: "Sokolov Bear",
      ref: "BEAR-RING",
      price: "18.00",
      stock: "In stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €6.00, €6.00, €6.00.",
      monthly: "Monthly payment from €0.43",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Children's",
        Brand: "Sokolov",
        Collection: "Kids Jewelry",
        Style: "Red Heart Teddy Ring",
        Material: "925 Sterling Silver, Red Enamel",
        Stone: "Fianite",
        "Ring Size": "Adjustable"
      }
    },
    {
      title: "Sokolov Flower",
      ref: "FLOWER-RING",
      price: "42.00",
      stock: "In stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €14.00, €14.00, €14.00.",
      monthly: "Monthly payment from €1.01",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Sokolov",
        Collection: "Flora Collection",
        Style: "Scarlet Blossom Ring",
        Material: "925 Sterling Silver, Enamel",
        Stone: "None",
        "Ring Size": "Adjustable"
      }
    },
    {
      title: "Pierre Lannier SOLINE",
      ref: "SOLINE-NECKLACE",
      price: "48.75",
      stock: "Last items in stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €16.25, €16.25, €16.25.",
      monthly: "Monthly payment from €1.17",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "SOLINE",
        Style: "Circle Gold Pendant Necklace",
        Material: "Gold-plated Sterling Silver",
        Stone: "None",
        "Chain Length": "45 cm"
      }
    },
    {
      title: "Pierre Lannier LUNELIA",
      ref: "LUNELIA-NECKLACE",
      price: "41.25",
      stock: "In stock (3 Units)",
      installments: "Pay in 3 installments without surcharge: €13.75, €13.75, €13.75.",
      monthly: "Monthly payment from €0.99",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "LUNELIA",
        Style: "Double Chain Silver Necklace",
        Material: "925 Sterling Silver",
        Stone: "Crystals",
        "Chain Length": "40 + 5 cm"
      }
    },
    {
      title: "Pierre Lannier ASTORIA",
      ref: "ASTORIA-NECKLACE",
      price: "48.75",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €16.25, €16.25, €16.25.",
      monthly: "Monthly payment from €1.17",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "ASTORIA",
        Style: "Black Star Gold Necklace",
        Material: "Gold-plated Sterling Silver",
        Stone: "None",
        "Chain Length": "45 cm"
      }
    },
    {
      title: "Pierre Lannier ISALIA (Green)",
      ref: "ISALIA-GREEN",
      price: "26.25",
      stock: "Last items in stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €8.75, €8.75, €8.75.",
      monthly: "Monthly payment from €0.63",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "ISALIA",
        Style: "Green Cord Gold Bracelet",
        Material: "Gold-plated Steel, Fabric Cord",
        Stone: "None",
        "Bracelet Size": "Adjustable"
      }
    },
    {
      title: "Pierre Lannier ISALIA (Blue)",
      ref: "ISALIA-BLUE",
      price: "26.25",
      stock: "In stock (4 Units)",
      installments: "Pay in 3 installments without surcharge: €8.75, €8.75, €8.75.",
      monthly: "Monthly payment from €0.63",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "ISALIA",
        Style: "Blue Cord Gold Bracelet",
        Material: "Gold-plated Steel, Fabric Cord",
        Stone: "None",
        "Bracelet Size": "Adjustable"
      }
    },
    {
      title: "Pierre Lannier ISALIA (Black)",
      ref: "ISALIA-BLACK",
      price: "26.25",
      stock: "In stock (3 Units)",
      installments: "Pay in 3 installments without surcharge: €8.75, €8.75, €8.75.",
      monthly: "Monthly payment from €0.63",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Women's",
        Brand: "Pierre Lannier",
        Collection: "ISALIA",
        Style: "Black Cord Gold Bracelet",
        Material: "Gold-plated Steel, Fabric Cord",
        Stone: "None",
        "Bracelet Size": "Adjustable"
      }
    },
    {
      title: "Rochet MERCURY (Silver)",
      ref: "MERCURY-SILVER",
      price: "72.00",
      stock: "In stock (2 Units)",
      installments: "Pay in 3 installments without surcharge: €24.00, €24.00, €24.00.",
      monthly: "Monthly payment from €1.73",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1620987278429-ab178d6eb547?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Men's",
        Brand: "Rochet",
        Collection: "MERCURY",
        Style: "Silver & White Carbon Cufflinks",
        Material: "Stainless Steel, Carbon fiber",
        Stone: "None"
      }
    },
    {
      title: "Rochet MARINA (Black)",
      ref: "MARINA-BLACK",
      price: "89.00",
      stock: "Last items in stock (1 Unit)",
      installments: "Pay in 3 installments without surcharge: €29.67, €29.67, €29.66.",
      monthly: "Monthly payment from €2.14",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Men's",
        Brand: "Rochet",
        Collection: "MARINA",
        Style: "Stealth Steel & Resin Cufflinks",
        Material: "Black PVD Steel, Resin",
        Stone: "None"
      }
    },
    {
      title: "Rochet MERCURY (Black)",
      ref: "MERCURY-BLACK",
      price: "72.00",
      stock: "In stock (3 Units)",
      installments: "Pay in 3 installments without surcharge: €24.00, €24.00, €24.00.",
      monthly: "Monthly payment from €1.73",
      downpayment: "Minimum down payment 0.00 €",
      filter: "none",
      thumbnails: ["https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=400&q=80"],
      specs: {
        Gender: "Men's",
        Brand: "Rochet",
        Collection: "MERCURY",
        Style: "Silver & Black Carbon Cufflinks",
        Material: "Stainless Steel, Carbon fiber",
        Stone: "None"
      }
    }
  ];

  // Interactive 3D Parallax Tilt Effect for Product Cards
  const cards = document.querySelectorAll('.product-3d-card');
  cards.forEach((card, index) => {
    // Inject the CSS filter to make catalog images match variant colors!
    const img = card.querySelector('.product-watch-img');
    if (img && catalogProducts[index]) {
      img.style.filter = catalogProducts[index].filter;
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });

    // Open detailed modal when card is clicked
    card.addEventListener('click', () => {
      openProductModal(index);
    });
  });

  // Modal Functionality
  const productModal = document.getElementById('productModal');
  const closeModal = document.getElementById('closeModal');
  const modalMainImg = document.getElementById('modalMainImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalRef = document.getElementById('modalRef');
  const modalPrice = document.getElementById('modalPrice');
  const modalStock = document.getElementById('modalStock');
  const modalInstallments = document.getElementById('modalInstallments');
  const modalMonthly = document.getElementById('modalMonthly');
  const modalDownpayment = document.getElementById('modalDownpayment');
  const modalThumbnails = document.getElementById('modalThumbnails');
  const modalSpecsTable = document.getElementById('modalSpecsTable');
  const modalQty = document.getElementById('modalQty');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const modalWishlist = document.getElementById('modalWishlist');
  const modalAddToCart = document.getElementById('modalAddToCart');
  const modalTiltContainer = document.getElementById('modalTiltContainer');

  let currentSelectedProductIndex = 0;

  function openProductModal(index) {
    currentSelectedProductIndex = index;
    const p = catalogProducts[index];

    // Reset Qty to 1
    modalQty.value = 1;

    // Load textual details
    modalTitle.textContent = p.title;
    modalRef.textContent = `Note: ${p.ref}`;
    modalPrice.textContent = `€${p.price}`;
    modalStock.innerHTML = `<span class="material-icons">inventory_2</span> ${p.stock}`;
    modalInstallments.textContent = p.installments;
    modalMonthly.textContent = p.monthly;
    modalDownpayment.textContent = p.downpayment;

    // Apply color filter to main image rendering
    modalMainImg.src = p.thumbnails[0];
    modalMainImg.style.filter = p.filter;

    // Populate thumbnails
    modalThumbnails.innerHTML = "";
    p.thumbnails.forEach((src, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
      // Apply dial filter to the thumbnails if they are watch front designs
      const styleFilter = (idx === 0 || idx === 1) ? p.filter : 'none';
      thumb.innerHTML = `<img src="${src}" style="filter: ${styleFilter}" alt="Thumb ${idx + 1}">`;
      
      thumb.addEventListener('click', () => {
        document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        modalMainImg.src = src;
        modalMainImg.style.filter = styleFilter;
      });
      modalThumbnails.appendChild(thumb);
    });

    // Populate Specs Table
    modalSpecsTable.innerHTML = "";
    for (const [key, value] of Object.entries(p.specs)) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="spec-label">${key}</td>
        <td class="spec-value">${value}</td>
      `;
      modalSpecsTable.appendChild(row);
    }

    // Toggle Wishlist Icon state back to default outline
    modalWishlist.querySelector('.material-icons').textContent = "favorite_border";
    modalWishlist.style.color = "#888";

    // Show modal
    productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      productModal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scroll
    });
  }

  // Close modal on background click
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        productModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Quantity controllers
  if (qtyMinus && modalQty) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(modalQty.value);
      if (val > 1) {
        modalQty.value = val - 1;
      }
    });
  }

  if (qtyPlus && modalQty) {
    qtyPlus.addEventListener('click', () => {
      let val = parseInt(modalQty.value);
      if (val < 10) {
        modalQty.value = val + 1;
      }
    });
  }

  // Wishlist Heart toggle
  if (modalWishlist) {
    modalWishlist.addEventListener('click', () => {
      const icon = modalWishlist.querySelector('.material-icons');
      const isWishlisted = icon.textContent === "favorite";
      icon.textContent = isWishlisted ? "favorite_border" : "favorite";
      modalWishlist.style.color = isWishlisted ? "#888" : "#ff3b30";
    });
  }

  // Add to cart inside modal
  if (modalAddToCart) {
    modalAddToCart.addEventListener('click', () => {
      const qty = parseInt(modalQty.value);
      for (let i = 0; i < qty; i++) {
        incrementCart();
      }
      // Simple visual feedback
      const text = modalAddToCart.innerHTML;
      modalAddToCart.innerHTML = `<span class="material-icons">check</span> Added!`;
      setTimeout(() => {
        modalAddToCart.innerHTML = text;
      }, 1500);
    });
  }

  // 3D Parallax Tilt Effect for modal watch image
  if (modalTiltContainer && modalMainImg) {
    modalTiltContainer.addEventListener('mousemove', (e) => {
      const rect = modalTiltContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -((y - centerY) / centerY) * 15; // 15deg max tilt
      const rotateY = ((x - centerX) / centerX) * 15;
      modalMainImg.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      modalMainImg.style.filter += ` drop-shadow(${-rotateY * 0.8}px ${rotateX * 0.8}px 15px rgba(0, 0, 0, 0.25))`;
    });

    modalTiltContainer.addEventListener('mouseleave', () => {
      modalMainImg.style.transform = 'scale(1) rotateX(0) rotateY(0)';
      modalMainImg.style.filter = catalogProducts[currentSelectedProductIndex].filter;
    });
  }

  // ==========================================================================
  // Jewelry Filter & Sub-Navbar Logic
  // ==========================================================================

  const jewelryNavLinks = document.querySelectorAll('a[href="#jewelry"]:not(.sub-nav-link)');
  const subNavbar = document.getElementById('jewelrySubNavbar');
  const subNavLinks = document.querySelectorAll('.sub-nav-link');
  const jewelryGrid = document.querySelector('.jewelry-grid');
  const jewelryCards = Array.from(document.querySelectorAll('.jewelry-card'));
  const priceSlider = document.getElementById('priceRangeSlider');
  const sliderVal = document.getElementById('sliderVal');
  const sortChoose = document.getElementById('sortChoose');
  const activeCountEl = document.getElementById('activeCount');
  const filterCheckboxes = document.querySelectorAll('.filter-sidebar .filter-checkbox');

  let activeCategory = null;

  const jewelrySection = document.querySelector('.jewelry-section-container');

  // Toggle sub-navbar and jewelry section on clicking Jewelry links
  if (jewelryNavLinks && subNavbar && jewelrySection) {
    jewelryNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const isVisible = subNavbar.classList.contains('active');
        
        if (isVisible) {
          subNavbar.classList.remove('active');
          jewelrySection.style.display = 'none';
        } else {
          subNavbar.classList.add('active');
          jewelrySection.style.display = 'block';
          
          // Close mobile menu if open
          const mobileNav = document.getElementById('mobileNav');
          const menuToggle = document.getElementById('menuToggle');
          if (mobileNav && mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
            if (menuToggle) {
              menuToggle.querySelector('.material-icons').textContent = 'menu';
            }
          }

          // Update grid display
          filterAndSortJewelry();
          
          setTimeout(() => {
            jewelrySection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      });
    });
  }

  // Category filtering from sub-navbar
  if (subNavLinks) {
    subNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const alreadyActive = link.classList.contains('active');
        subNavLinks.forEach(l => l.classList.remove('active'));
        
        if (alreadyActive) {
          activeCategory = null;
        } else {
          link.classList.add('active');
          activeCategory = link.getAttribute('data-category');
        }

        filterAndSortJewelry();
        
        const targetSec = document.getElementById('jewelry');
        if (targetSec && jewelrySection.style.display !== 'none') {
          targetSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  function filterAndSortJewelry() {
    const newProductsOnly = document.querySelector('[data-filter="new-products"]').checked;
    const maxPrice = priceSlider ? parseFloat(priceSlider.value) : 68.00;
    
    if (sliderVal) {
      sliderVal.textContent = `€${maxPrice.toFixed(2)}`;
    }

    const brandCbs = document.querySelectorAll('.brand-cb:checked');
    const selectedBrands = Array.from(brandCbs).map(cb => cb.getAttribute('data-brand'));

    const genderCbs = document.querySelectorAll('.gender-cb:checked');
    const selectedGenders = Array.from(genderCbs).map(cb => cb.getAttribute('data-gender'));

    const stoneCbs = document.querySelectorAll('.stone-cb:checked');
    const selectedStones = Array.from(stoneCbs).map(cb => cb.getAttribute('data-stone'));

    let visibleCards = [];
    
    jewelryCards.forEach(card => {
      const isNew = card.getAttribute('data-new') === 'true';
      const price = parseFloat(card.getAttribute('data-price'));
      const brand = card.getAttribute('data-brand');
      const gender = card.getAttribute('data-gender');
      const stone = card.getAttribute('data-stone');
      const category = card.getAttribute('data-category');

      let matches = true;

      if (activeCategory && category !== activeCategory) matches = false;
      if (newProductsOnly && !isNew) matches = false;
      if (price > maxPrice) matches = false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(brand)) matches = false;
      if (selectedGenders.length > 0 && !selectedGenders.includes(gender)) matches = false;
      if (selectedStones.length > 0 && !selectedStones.includes(stone)) matches = false;

      if (matches) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
      }
    });

    if (sortChoose) {
      const sortVal = sortChoose.value;
      if (sortVal === 'low') {
        visibleCards.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
      } else if (sortVal === 'high') {
        visibleCards.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
      }
    }

    visibleCards.forEach(card => {
      if (jewelryGrid) {
        jewelryGrid.appendChild(card);
      }
    });

    if (activeCountEl) {
      activeCountEl.textContent = visibleCards.length;
    }
  }

  if (priceSlider) {
    priceSlider.addEventListener('input', filterAndSortJewelry);
  }
  if (sortChoose) {
    sortChoose.addEventListener('change', filterAndSortJewelry);
  }
  filterCheckboxes.forEach(cb => {
    cb.addEventListener('change', filterAndSortJewelry);
  });

  // ==========================================================================
  // AI Chatbot Widget Logic
  // ==========================================================================

  const chatbotToggle = document.getElementById('aiChatbotToggle');
  const chatbotWidget = document.getElementById('aiChatbotWidget');
  const closeChatbot = document.getElementById('closeChatbot');
  const chatMessagesContainer = document.getElementById('chatbotMessages');
  const chatTextInput = document.getElementById('chatbotTextInput');
  const chatSendBtn = document.getElementById('chatbotSendBtn');
  const handPhotoUpload = document.getElementById('handPhotoUpload');

  let currentFlowState = 'START';
  let chatbotPreferences = {
    category: '',
    photoUploaded: false,
    gender: '',
    ageGroup: ''
  };

  // Toggle Chatbot Window
  if (chatbotToggle && chatbotWidget) {
    chatbotToggle.addEventListener('click', () => {
      const isActive = chatbotWidget.classList.contains('active');
      if (isActive) {
        chatbotWidget.classList.remove('active');
      } else {
        chatbotWidget.classList.add('active');
        // Initial welcome message if empty
        if (chatMessagesContainer.children.length === 0) {
          triggerWelcomeStep();
        }
      }
    });
  }

  if (closeChatbot && chatbotWidget) {
    closeChatbot.addEventListener('click', () => {
      chatbotWidget.classList.remove('active');
    });
  }

  // Helper: Append Text Chat Message
  function addChatMessage(sender, text, imageSrc = null) {
    const msgElement = document.createElement('div');
    msgElement.className = `chat-msg ${sender}`;
    
    let bubbleHtml = `<div class="chat-bubble">${text}</div>`;
    if (imageSrc) {
      bubbleHtml = `<div class="chat-bubble">
        <img src="${imageSrc}" class="chat-image-preview" alt="Uploaded hand photo">
        <p style="margin-top:8px;font-size:0.8rem;opacity:0.9;">${text}</p>
      </div>`;
    }
    
    msgElement.innerHTML = bubbleHtml;
    chatMessagesContainer.appendChild(msgElement);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  // Helper: Append Quick Reply Options
  function addQuickReplies(options, onSelectCallback) {
    const repliesContainer = document.createElement('div');
    repliesContainer.className = 'quick-replies-container';
    
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        // Remove replies buttons once selected
        repliesContainer.remove();
        onSelectCallback(opt);
      });
      repliesContainer.appendChild(btn);
    });
    
    chatMessagesContainer.appendChild(repliesContainer);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  // Helper: Show "Generating/Analyzing..." Status
  function showGeneratingStatus(messageText) {
    const statusElement = document.createElement('div');
    statusElement.className = 'chat-generating-status';
    statusElement.innerHTML = `<span class="spinner"></span> <span>${messageText}</span>`;
    
    chatMessagesContainer.appendChild(statusElement);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    return statusElement;
  }

  // Chat Conversational Flow Triggers

  function triggerWelcomeStep() {
    currentFlowState = 'START';
    chatbotPreferences = { category: '', photoUploaded: false, gender: '', ageGroup: '' };
    
    addChatMessage('ai', 'Welcome to **ZENĒVA AI Stylist**. I can analyze your wrist/hand and style profile to recommend matching luxury watches or jewelry. First, what kind of product are you looking for?');
    addQuickReplies(['Watches', 'Jewelry'], (selection) => {
      // User replies
      addChatMessage('user', `I am looking for ${selection}.`);
      chatbotPreferences.category = selection;
      triggerPhotoUploadStep();
    });
  }

  function triggerPhotoUploadStep() {
    currentFlowState = 'AWAIT_PHOTO';
    addChatMessage('ai', 'Perfect choice! To help me assess proportions, wrist dimensions, and matching style templates, please upload a picture of your wrist or hand using the camera icon below.');
  }

  // Handle Hand Photo Selection
  if (handPhotoUpload) {
    handPhotoUpload.addEventListener('change', (e) => {
      if (currentFlowState !== 'AWAIT_PHOTO') {
        addChatMessage('ai', 'Please wait until I request a photo, or start the stylist wizard over.');
        return;
      }
      
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          // Display user's image upload
          addChatMessage('user', 'Here is the picture of my hand.', event.target.result);
          chatbotPreferences.photoUploaded = true;
          
          // Simulate computer vision hand analysis
          const loadingStatus = showGeneratingStatus('Analyzing hand shape and skin tone...');
          
          setTimeout(() => {
            loadingStatus.remove();
            addChatMessage('ai', 'Analysis complete! Hand shape matches standard profile. Skin tone assessment: neutral warm.');
            triggerGenderStep();
          }, 2000);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  function triggerGenderStep() {
    currentFlowState = 'AWAIT_GENDER';
    addChatMessage('ai', 'What is your gender or collection preference?');
    addQuickReplies(["Men's", "Women's", 'Unisex'], (selection) => {
      addChatMessage('user', `My preference is ${selection}.`);
      chatbotPreferences.gender = selection;
      triggerAgeStep();
    });
  }

  function triggerAgeStep() {
    currentFlowState = 'AWAIT_AGE';
    addChatMessage('ai', 'Finally, what is your age group?');
    addQuickReplies(['Young Adult', 'Adult', 'Senior'], (selection) => {
      addChatMessage('user', `My age group is ${selection}.`);
      chatbotPreferences.ageGroup = selection;
      triggerRecommendationStep();
    });
  }

  function triggerRecommendationStep() {
    currentFlowState = 'RECOMMEND';
    const matchingStatus = showGeneratingStatus('Matching style profile with active collection...');
    
    setTimeout(() => {
      matchingStatus.remove();
      
      // Look up recommendations from catalogProducts
      let matches = [];
      const isWatches = chatbotPreferences.category === 'Watches';
      const isWomens = chatbotPreferences.gender === "Women's";
      const isMens = chatbotPreferences.gender === "Men's";
      
      if (isWatches) {
        // Watches collection matches
        if (isWomens) {
          // Tissot Lady Round (idx 9), Tissot T-Wave (idx 13), Lovely Square (idx 14)
          matches = [9, 13, 14];
        } else if (isMens) {
          // Edox Les Bemonts (idx 8), Tissot T-Touch Stealth (idx 12), Sector R3253517029 (idx 1)
          matches = [8, 12, 1];
        } else {
          // General unisex
          matches = [0, 8, 9];
        }
      } else {
        // Jewelry collection matches
        if (isWomens) {
          // Soline Necklace (idx 22), Astoria Ring (idx 16), Isalia Bracelet (idx 25)
          matches = [22, 16, 25];
        } else if (isMens) {
          // Rochet Marina Cufflinks (idx 29), Rochet Mercury Cufflinks (idx 28), Sokolov Bear (idx 20)
          matches = [29, 28, 20];
        } else {
          // General jewelry
          matches = [16, 23, 30];
        }
      }
      
      addChatMessage('ai', 'Based on your hand profile, dimensions, and selected preferences, I have selected these exquisite matching pieces:');
      
      // Render product recommendation cards
      const recContainer = document.createElement('div');
      recContainer.className = 'chat-recommendations';
      
      matches.forEach(idx => {
        const prod = catalogProducts[idx];
        if (prod) {
          const card = document.createElement('div');
          card.className = 'chat-product-card';
          card.innerHTML = `
            <img src="${prod.thumbnails[0]}" class="chat-product-img" style="filter: ${prod.filter}" alt="${prod.title}">
            <div class="chat-product-info">
              <span class="chat-product-title">${prod.title}</span>
              <span class="chat-product-price">€${prod.price}</span>
            </div>
          `;
          card.addEventListener('click', () => {
            // Trigger main site modal open
            openProductModal(idx);
          });
          recContainer.appendChild(card);
        }
      });
      
      chatMessagesContainer.appendChild(recContainer);
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
      
      // Start Over Option
      setTimeout(() => {
        addChatMessage('ai', 'Would you like to try matching again with different preferences?');
        addQuickReplies(['Start Over'], () => {
          triggerWelcomeStep();
        });
      }, 1000);
      
    }, 2000);
  }

  // Handle Standard TextInput Sends
  function handleInputSend() {
    const text = chatTextInput.value.trim();
    if (!text) return;
    
    // Append user input
    addChatMessage('user', text);
    chatTextInput.value = '';
    
    // Dynamic answers depending on current flow state
    if (currentFlowState === 'START') {
      if (text.toLowerCase().includes('watch')) {
        chatbotPreferences.category = 'Watches';
        addChatMessage('ai', 'Understood. Let us proceed to wrist layout analysis.');
        triggerPhotoUploadStep();
      } else if (text.toLowerCase().includes('jewel') || text.toLowerCase().includes('ring')) {
        chatbotPreferences.category = 'Jewelry';
        addChatMessage('ai', 'Understood. Let us proceed to hand layout analysis.');
        triggerPhotoUploadStep();
      } else {
        addChatMessage('ai', 'Please select either "Watches" or "Jewelry" as your desired category to proceed.');
      }
    } else if (currentFlowState === 'AWAIT_PHOTO') {
      addChatMessage('ai', 'I need a photo of your wrist or hand to continue. Please click the camera icon to upload.');
    } else if (currentFlowState === 'AWAIT_GENDER') {
      if (text.toLowerCase().includes('women')) chatbotPreferences.gender = "Women's";
      else if (text.toLowerCase().includes('men')) chatbotPreferences.gender = "Men's";
      else chatbotPreferences.gender = "Unisex";
      addChatMessage('ai', `Set preference to ${chatbotPreferences.gender}.`);
      triggerAgeStep();
    } else if (currentFlowState === 'AWAIT_AGE') {
      chatbotPreferences.ageGroup = text;
      triggerRecommendationStep();
    } else {
      addChatMessage('ai', 'My analysis is complete! Click on any recommendation card to explore details, or select "Start Over" to begin again.');
    }
  }

  if (chatTextInput && chatSendBtn) {
    chatSendBtn.addEventListener('click', handleInputSend);
    chatTextInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleInputSend();
      }
    });
  }
});



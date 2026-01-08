// ============================================
// Mock Data for Paw Planet E-commerce
// ============================================

const MOCK_DATA = {
    // Product Categories
    categories: [
        { id: 1, name: 'Grooming', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v6m6-6v6m-9 1h12M9 22v-6m6 6v-6M3 9h18"/></svg>', slug: 'grooming' },
        { id: 2, name: 'Food', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>', slug: 'food' },
        { id: 3, name: 'Accessories', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', slug: 'accessories' },
        { id: 4, name: 'Training', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>', slug: 'training' },
        { id: 5, name: 'Veterinary', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', slug: 'veterinary' },
        { id: 6, name: 'Boarding', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', slug: 'boarding' },
        { id: 7, name: 'Adoption', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>', slug: 'adoption' },
        { id: 8, name: 'Spa', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>', slug: 'spa' },
        { id: 9, name: 'Travel', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>', slug: 'travel' },
        { id: 10, name: 'Medicines', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>', slug: 'medicines' },
        { id: 11, name: 'Toys', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>', slug: 'toys' },
        { id: 12, name: 'Other', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>', slug: 'other' }
    ],

    // Sample Products
    products: [
        {
            id: 1,
            name: 'Premium Dog Food - Chicken & Rice',
            brand: 'Pedigree',
            category: 'food',
            price: 1299,
            originalPrice: 1599,
            discount: 19,
            rating: 4.5,
            reviews: 234,
            inStock: true,
            lowStock: false,
            image: 'https://via.placeholder.com/300x300/1a5f6f/ffffff?text=Dog+Food',
            variants: [
                { id: 1, size: '1kg', price: 499 },
                { id: 2, size: '3kg', price: 1299 },
                { id: 3, size: '10kg', price: 3999 }
            ],
            description: 'Complete nutrition for adult dogs with real chicken and rice',
            suitableFor: 'Adult Dogs (1-7 years)',
            healthBenefits: 'Strong bones, Healthy coat, Better digestion',
            ingredients: 'Chicken, Rice, Vegetables, Vitamins, Minerals'
        },
        {
            id: 2,
            name: 'Cat Litter - Odor Control',
            brand: 'Whiskas',
            category: 'accessories',
            price: 349,
            originalPrice: 499,
            discount: 30,
            rating: 4.2,
            reviews: 156,
            inStock: true,
            lowStock: true,
            image: 'https://via.placeholder.com/300x300/1a5f6f/ffffff?text=Cat+Litter',
            variants: [
                { id: 1, size: '5L', price: 349 },
                { id: 2, size: '10L', price: 649 }
            ],
            description: 'Advanced odor control cat litter with natural ingredients',
            suitableFor: 'All Cats',
            healthBenefits: 'Dust-free, Non-toxic, Biodegradable',
            ingredients: 'Natural clay, Activated charcoal, Baking soda'
        },
        {
            id: 3,
            name: 'Interactive Dog Toy - Rope Ball',
            brand: 'PawPlanet',
            category: 'toys',
            price: 299,
            originalPrice: 399,
            discount: 25,
            rating: 4.8,
            reviews: 89,
            inStock: false,
            lowStock: false,
            image: 'https://via.placeholder.com/300x300/1a5f6f/ffffff?text=Dog+Toy',
            variants: [
                { id: 1, size: 'Small', price: 199 },
                { id: 2, size: 'Medium', price: 299 },
                { id: 3, size: 'Large', price: 399 }
            ],
            description: 'Durable rope ball toy for interactive play and dental health',
            suitableFor: 'All Dogs',
            healthBenefits: 'Dental health, Mental stimulation, Exercise',
            ingredients: 'Cotton rope, Natural rubber'
        },
        {
            id: 4,
            name: 'Pet Shampoo - Sensitive Skin',
            brand: 'PawPlanet',
            category: 'grooming',
            price: 449,
            originalPrice: 599,
            discount: 25,
            rating: 4.6,
            reviews: 178,
            inStock: true,
            lowStock: false,
            image: 'https://via.placeholder.com/300x300/1a5f6f/ffffff?text=Pet+Shampoo',
            variants: [
                { id: 1, size: '200ml', price: 299 },
                { id: 2, size: '500ml', price: 449 }
            ],
            description: 'Gentle shampoo for pets with sensitive skin',
            suitableFor: 'Dogs & Cats',
            healthBenefits: 'Soothes skin, Reduces itching, pH balanced',
            ingredients: 'Aloe vera, Oatmeal, Natural oils'
        },
        {
            id: 5,
            name: 'Automatic Pet Feeder',
            brand: 'PetTech',
            category: 'accessories',
            price: 2999,
            originalPrice: 3999,
            discount: 25,
            rating: 4.4,
            reviews: 92,
            inStock: true,
            lowStock: false,
            image: 'https://via.placeholder.com/300x300/1a5f6f/ffffff?text=Auto+Feeder',
            variants: [],
            description: 'Smart automatic pet feeder with timer and portion control',
            suitableFor: 'Dogs & Cats',
            healthBenefits: 'Scheduled feeding, Portion control, Freshness maintained',
            ingredients: 'N/A'
        },
        {
            id: 6,
            name: 'Cat Scratching Post',
            brand: 'PawPlanet',
            category: 'accessories',
            price: 899,
            originalPrice: 1299,
            discount: 31,
            rating: 4.7,
            reviews: 145,
            inStock: true,
            lowStock: false,
            image: 'https://via.placeholder.com/300x300/1a5f6f/ffffff?text=Scratching+Post',
            variants: [],
            description: 'Sturdy scratching post to keep your cat entertained',
            suitableFor: 'All Cats',
            healthBenefits: 'Nail health, Exercise, Stress relief',
            ingredients: 'Sisal rope, Wood, Plush fabric'
        }
    ],

    // Sample Services
    services: [
        {
            id: 1,
            name: 'Premium Grooming Package',
            type: 'grooming',
            provider: 'PawPlanet Grooming Center',
            rating: 4.8,
            reviews: 456,
            basePrice: 999,
            image: 'https://via.placeholder.com/400x300/1a5f6f/ffffff?text=Grooming',
            durations: [
                { id: 1, duration: '1 hour', price: 999 },
                { id: 2, duration: '2 hours', price: 1499 }
            ],
            description: 'Complete grooming service including bath, haircut, nail trimming, and ear cleaning',
            includes: ['Bath with premium shampoo', 'Haircut & styling', 'Nail trimming', 'Ear cleaning', 'Teeth brushing'],
            requiresVaccination: false,
            cancellationPolicy: 'Free cancellation up to 24 hours before appointment'
        },
        {
            id: 2,
            name: 'Pet Boarding - Luxury Suite',
            type: 'boarding',
            provider: 'PawPlanet Boarding',
            rating: 4.9,
            reviews: 289,
            basePrice: 1500,
            image: 'https://via.placeholder.com/400x300/1a5f6f/ffffff?text=Boarding',
            durations: [
                { id: 1, duration: 'Half day', price: 800 },
                { id: 2, duration: 'Full day', price: 1500 },
                { id: 3, duration: 'Per night', price: 2000 }
            ],
            description: 'Luxury boarding with 24/7 care, play time, and comfortable accommodation',
            includes: ['Climate-controlled room', '3 meals per day', 'Play time', '24/7 supervision', 'Daily updates'],
            requiresVaccination: true,
            vaccinesRequired: ['Rabies', 'DHPP'],
            minAge: 6,
            cancellationPolicy: 'Free cancellation up to 48 hours before check-in'
        },
        {
            id: 3,
            name: 'Veterinary Consultation',
            type: 'veterinary',
            provider: 'Dr. Sharma - Certified Veterinarian',
            rating: 4.9,
            reviews: 567,
            basePrice: 500,
            image: 'https://via.placeholder.com/400x300/1a5f6f/ffffff?text=Vet',
            durations: [
                { id: 1, duration: '30 minutes', price: 500 },
                { id: 2, duration: '1 hour', price: 800 }
            ],
            description: 'Professional veterinary consultation for health checkups and medical advice',
            includes: ['Physical examination', 'Health assessment', 'Medical advice', 'Prescription (if needed)'],
            requiresVaccination: false,
            cancellationPolicy: 'Free cancellation up to 12 hours before appointment'
        },
        {
            id: 4,
            name: 'Dog Training - Basic Obedience',
            type: 'training',
            provider: 'PawPlanet Training Academy',
            rating: 4.7,
            reviews: 234,
            basePrice: 2500,
            image: 'https://via.placeholder.com/400x300/1a5f6f/ffffff?text=Training',
            durations: [
                { id: 1, duration: '1 session (1 hour)', price: 800 },
                { id: 2, duration: '5 sessions package', price: 3500 },
                { id: 3, duration: '10 sessions package', price: 6000 }
            ],
            description: 'Professional dog training for basic commands and behavior correction',
            includes: ['Sit, Stay, Come commands', 'Leash training', 'Socialization', 'Behavior assessment'],
            requiresVaccination: false,
            cancellationPolicy: 'Free cancellation up to 24 hours before session'
        }
    ],

    // User Data (Mock)
    user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        profilePicture: 'https://via.placeholder.com/150/1a5f6f/ffffff?text=JD',
        pets: [
            {
                id: 1,
                name: 'Max',
                type: 'Dog',
                breed: 'Golden Retriever',
                age: 3,
                gender: 'Male',
                image: 'https://via.placeholder.com/150/1a5f6f/ffffff?text=Max',
                profileComplete: 85,
                photos: 3,
                vaccinations: [
                    { name: 'Rabies', date: '2025-06-15', valid: true },
                    { name: 'DHPP', date: '2025-06-15', valid: true }
                ]
            },
            {
                id: 2,
                name: 'Bella',
                type: 'Cat',
                breed: 'Persian',
                age: 2,
                gender: 'Female',
                image: 'https://via.placeholder.com/150/1a5f6f/ffffff?text=Bella',
                profileComplete: 45,
                photos: 1,
                vaccinations: [
                    { name: 'Rabies', date: '2024-12-10', valid: false }
                ]
            }
        ],
        addresses: [
            {
                id: 1,
                type: 'Home',
                flat: 'A-101',
                street: 'MG Road',
                landmark: 'Near City Mall',
                pincode: '400001',
                city: 'Mumbai',
                state: 'Maharashtra',
                phone: '+91 9876543210',
                isDefault: true
            },
            {
                id: 2,
                type: 'Office',
                flat: 'Office 205',
                street: 'BKC',
                landmark: 'Opposite Metro Station',
                pincode: '400051',
                city: 'Mumbai',
                state: 'Maharashtra',
                phone: '+91 9876543210',
                isDefault: false
            }
        ]
    },

    // Orders
    orders: [
        {
            id: 'ORD001',
            date: '2026-01-05',
            items: [
                { productId: 1, quantity: 1, price: 1299 }
            ],
            total: 1299,
            status: 'Delivered',
            deliveryDate: '2026-01-07'
        },
        {
            id: 'ORD002',
            date: '2026-01-03',
            items: [
                { productId: 2, quantity: 2, price: 349 },
                { productId: 4, quantity: 1, price: 449 }
            ],
            total: 1147,
            status: 'In Transit',
            deliveryDate: '2026-01-10'
        }
    ],

    // Bank Offers
    bankOffers: [
        {
            id: 1,
            bank: 'HDFC Bank',
            offer: '10% Instant Discount',
            code: 'HDFC10',
            minAmount: 1000,
            maxDiscount: 500
        },
        {
            id: 2,
            bank: 'ICICI Bank',
            offer: '15% Cashback',
            code: 'ICICI15',
            minAmount: 2000,
            maxDiscount: 750
        },
        {
            id: 3,
            bank: 'SBI Cards',
            offer: '₹200 Off',
            code: 'SBI200',
            minAmount: 1500,
            maxDiscount: 200
        }
    ],

    // Promo Codes
    promoCodes: [
        {
            id: 1,
            code: 'FIRST20',
            description: '20% off on first order',
            discount: 20,
            minAmount: 500,
            maxDiscount: 500
        },
        {
            id: 2,
            code: 'SAVE100',
            description: '₹100 off on orders above ₹999',
            discount: 100,
            minAmount: 999,
            maxDiscount: 100
        }
    ],

    // Locations
    locations: [
        { id: 1, city: 'Mumbai', state: 'Maharashtra', pincodes: ['400001', '400051', '400070'] },
        { id: 2, city: 'Delhi', state: 'Delhi', pincodes: ['110001', '110025', '110092'] },
        { id: 3, city: 'Bangalore', state: 'Karnataka', pincodes: ['560001', '560034', '560103'] },
        { id: 4, city: 'Pune', state: 'Maharashtra', pincodes: ['411001', '411014', '411057'] }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOCK_DATA;
}

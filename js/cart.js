// ============================================
// Cart Management - Paw Planet
// ============================================

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.updateCartBadge();
    }

    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem('pawplanet_cart');
        return saved ? JSON.parse(saved) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('pawplanet_cart', JSON.stringify(this.cart));
        this.updateCartBadge();
    }

    // Add product to cart
    addProduct(product, variantId = null, quantity = 1) {
        const existingIndex = this.cart.findIndex(item =>
            item.type === 'product' &&
            item.id === product.id &&
            item.variantId === variantId
        );

        if (existingIndex > -1) {
            this.cart[existingIndex].quantity += quantity;
        } else {
            this.cart.push({
                type: 'product',
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                image: product.image,
                variantId: variantId,
                variant: variantId ? product.variants.find(v => v.id === variantId) : null,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart();
        this.showToast('Product added to cart!', 'success');
        return true;
    }

    // Add service to cart
    addService(service, durationId, date, time, petId) {
        const duration = service.durations.find(d => d.id === durationId);

        this.cart.push({
            type: 'service',
            id: service.id,
            name: service.name,
            provider: service.provider,
            price: duration.price,
            image: service.image,
            duration: duration.duration,
            durationId: durationId,
            date: date,
            time: time,
            petId: petId,
            quantity: 1,
            addedAt: new Date().toISOString()
        });

        this.saveCart();
        this.showToast('Service added to cart!', 'success');
        return true;
    }

    // Update quantity
    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else {
            this.cart[index].quantity = quantity;
            this.saveCart();
        }
    }

    // Remove item
    removeItem(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.showToast('Item removed from cart', 'info');
    }

    // Clear cart
    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    // Get cart items
    getCart() {
        return this.cart;
    }

    // Get cart count
    getCartCount() {
        return this.cart.reduce((total, item) => total + (item.quantity || 1), 0);
    }

    // Calculate subtotal
    getSubtotal() {
        return this.cart.reduce((total, item) => {
            const price = item.variant ? item.variant.price : item.price;
            return total + (price * (item.quantity || 1));
        }, 0);
    }

    // Calculate discount
    getDiscount(promoCode = null) {
        // Implement promo code logic
        return 0;
    }

    // Calculate delivery charges
    getDeliveryCharges(subtotal) {
        return subtotal >= 599 ? 0 : 50;
    }

    // Calculate tax
    getTax(subtotal) {
        return Math.round(subtotal * 0.18); // 18% GST
    }

    // Calculate total
    getTotal(promoCode = null) {
        const subtotal = this.getSubtotal();
        const discount = this.getDiscount(promoCode);
        const delivery = this.getDeliveryCharges(subtotal);
        const tax = this.getTax(subtotal);
        return subtotal - discount + delivery + tax;
    }

    // Update cart badge
    updateCartBadge() {
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            const count = this.getCartCount();
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Initialize cart manager
const cartManager = new CartManager();

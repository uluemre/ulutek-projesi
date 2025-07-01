export async function fetchProducts() {

    const sampleProducts = [
        {
            id: 1,
            name: 'Modern Ofis Koltuğu',
            price: 1899.90,
            imageUrl: 'https://via.placeholder.com/300x300.png?text=Ofis+Koltuğu',
            category: 'Ofis',
        },
        {
            id: 2,
            name: '4K Ultra HD Smart TV',
            price: 14500.00,
            imageUrl: 'https://via.placeholder.com/300x300.png?text=Smart+TV',
            category: 'TV & Ses',
        },
        {
            id: 3,
            name: 'Kablosuz Gürültü Engelleyici Kulaklık',
            price: 3250.50,
            imageUrl: 'https://via.placeholder.com/300x300.png?text=Kulaklık',
            category: 'TV & Ses',
        },
        {
            id: 4,
            name: 'Mekanik Oyuncu Klavyesi',
            price: 2100.00,
            imageUrl: 'https://via.placeholder.com/300x300.png?text=Klavye',
            category: 'Bilgisayar',
        },
        // Diğer ürünler...
    ];

    return sampleProducts;
}
import { NextResponse } from 'next/server';

// Dışarıdan erişilebilmesi için başına "export" ekliyoruz
export const sampleProducts = [
    {
        _id: "66827d5ab1c4d5e6f7g8h9i0",
        name: "Modern Ofis Koltuğu",
        price: 1899.9,
        imageUrl: "/images/placeholder-koltuk.png",
        category: "Ofis",
        stock: 120,
        brand: "ULUTEK Home"
    },
    {
        _id: "66827d5ab1c4d5e6f7g8h9i1",
        name: "4K Ultra HD Smart TV",
        price: 14500.00,
        imageUrl: "/images/placeholder-tv.png",
        category: "TV & Ses",
        stock: 75,
        brand: "ULUTEK Tech"
    },
    {
        _id: "66827d5ab1c4d5e6f7g8h9i2",
        name: "Kablosuz Oyuncu Kulaklığı",
        price: 3250.50,
        imageUrl: "/images/placeholder-kulaklik.png",
        category: "Aksesuar",
        stock": 250,
    brand": "ULUTEK Gaming"
  }
];

export async function GET() {
    return NextResponse.json(sampleProducts);
}
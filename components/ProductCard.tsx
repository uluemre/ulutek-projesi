// components/ProductCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Bileşenin alacağı propların tiplerini MongoDB'ye uygun hale getirelim
interface Product {
    _id: string; // 'id' yerine '_id' kullanıyoruz ve tipi string
    name: string;
    price: number;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        // Link'i de `product._id` kullanacak şekilde güncelledik
        <Link href={`/product/${product._id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true} // Bu satır görsel hatası için geçici olarak eklenmişti, kalabilir.
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-[#1976D2]">
                    {product.name}
                </h3>
                <p className="text-xl font-bold text-gray-900 mt-2">
                    {product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                </p>
                <button className="w-full mt-4 bg-[#F7941E] text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                    Sepete Ekle
                </button>
            </div>
        </Link>
    );
}
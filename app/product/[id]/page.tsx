import React from 'react';
import Image from 'next/image';
// API dosyasındaki sahte ürünleri doğrudan import ediyoruz
import { sampleProducts } from '@/app/api/products/route';

// Ürün objesinin tipi
interface Product {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    brand: string;
    stock: number;
}

// Bu fonksiyon artık async değil ve fetch yapmıyor.
function getProductById(id: string): Product | null {
    const product = sampleProducts.find(p => p._id === id);
    return product || null;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = getProductById(params.id);

    if (!product) {
        return <div className="text-center py-20">Ürün bulunamadı.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="relative w-full h-96">
                        <Image src={product.imageUrl} alt={product.name} fill style={{ objectFit: 'contain' }} unoptimized={true} />
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                    <p className="text-lg text-gray-500 mb-4">{product.brand}</p>
                    <p className="text-3xl font-light text-blue-600 mb-6">
                        {product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                    </p>
                    <p className="text-gray-700 mb-6">Kategori: <span className="font-semibold">{product.category}</span></p>
                    <p className="text-gray-700 mb-8">Stok Durumu: <span className="font-semibold text-green-600">{product.stock > 0 ? `${product.stock} Adet` : 'Stokta Yok'}</span></p>
                    <button className="w-full bg-[#F7941E] text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition duration-300 text-lg">Sepete Ekle</button>
                </div>
            </div>
        </div>
    );
}
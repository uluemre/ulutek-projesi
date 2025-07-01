// app/product/[id]/page.tsx

import React from 'react';
import Image from 'next/image';

interface Product {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    brand: string;
    stock: number;
}

// Tek bir ürünü ID'sine göre getiren fonksiyon
async function getProductById(id: string): Promise<Product | null> {
    try {
        // Tüm ürünleri çeken API'mize istek atıyoruz
        const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
        if (!res.ok) throw new Error("API'den veri alınamadı");

        const products: Product[] = await res.json();

        // Gelen ürünler dizisi içinde ID'ye göre aradığımız ürünü buluyoruz
        const product = products.find(p => p._id === id);

        return product || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}


// Bu sayfa, URL'den gelen 'id' parametresini alır
export default async function ProductDetailPage({ params }: { params: { id: string } }) {

    const product = await getProductById(params.id);

    // Eğer ürün bulunamazsa bir mesaj gösterelim
    if (!product) {
        return <div className="text-center py-20">Ürün bulunamadı.</div>;
    }

    // Ürün bulunduysa, detaylarını gösterelim
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Ürün Görseli */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="relative w-full h-96">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'contain' }}
                            unoptimized={true}
                        />
                    </div>
                </div>

                {/* Ürün Bilgileri */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                    <p className="text-lg text-gray-500 mb-4">{product.brand}</p>
                    <p className="text-3xl font-light text-blue-600 mb-6">
                        {product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                    </p>
                    <p className="text-gray-700 mb-6">
                        Kategori: <span className="font-semibold">{product.category}</span>
                    </p>
                    <p className="text-gray-700 mb-8">
                        Stok Durumu: <span className="font-semibold text-green-600">{product.stock > 0 ? `${product.stock} Adet` : 'Stokta Yok'}</span>
                    </p>

                    <button className="w-full bg-[#F7941E] text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition duration-300 text-lg">
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </div>
    );
}
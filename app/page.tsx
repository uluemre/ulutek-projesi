// app/page.tsx

import React from 'react';
import ProductCard from '@/components/ProductCard';

// Ürünler için tip tanımı
interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

// Veri çekme fonksiyonu
async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store', // Verilerin her seferinde taze gelmesini sağlar
    });

    if (!res.ok) {
      throw new Error('API verisi alınamadı');
    }
    return res.json();
  } catch (error) {
    console.error("Hata - Veri çekilemedi:", error);
    return []; // Hata durumunda boş dizi döndür
  }
}

// Anasayfa bileşeni
export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="bg-gradient-to-r from-[#0D47A1] to-[#1976D2] text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ULUTEK: Güvenilir Teknoloji, Rakipsiz Fiyatlar</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">İhtiyacınız olan tüm elektronik ürünlerde en iyi fırsatlar sizi bekliyor.</p>
        </div>
      </section>

      <section id="products" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Öne Çıkan Ürünler</h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Gösterilecek ürün bulunamadı.</p>
          )}
        </div>
      </section>
    </main>
  );
}
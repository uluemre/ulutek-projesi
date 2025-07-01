import React from 'react';
export default function CategoryPage({ params }: { params: { slug: string } }) {
    return <div className="p-8 text-center"><h1>Kategori: {params.slug}</h1><p>Bu sayfa yapım aşamasındadır.</p></div>;
}
// app/api/products/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // MongoDB bağlantı modülümüzü import ediyoruz

export async function GET() {
    try {
        // MongoDB'ye bağlanıyoruz
        const client = await clientPromise;
        const db = client.db("ulutek_db"); // Veritabanı adımız

        // "products" koleksiyonundaki tüm ürünleri buluyoruz
        const products = await db
            .collection("products")
            .find({})
            .toArray();

        // Ürünleri JSON olarak döndürüyoruz
        return NextResponse.json(products);

    } catch (e) {
        console.error(e);
        // Hata durumunda 500 kodu ile bir hata mesajı döndürüyoruz
        return NextResponse.json({ error: 'Veritabanına bağlanırken bir hata oluştu.' }, { status: 500 });
    }
}
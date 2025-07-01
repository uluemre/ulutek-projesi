// lib/mongodb.ts

import { MongoClient } from 'mongodb';

// .env.local dosyasındaki MONGODB_URI değişkenini kontrol ediyoruz.
if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// TypeScript'in global tip tanımını genişletiyoruz.
declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
    // Geliştirme modunda (npm run dev), hot-reloading nedeniyle
    // sürekli yeni bağlantı oluşmasını engellemek için
    // global bir değişken kullanıyoruz.
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // Production modunda (canlıya alındığında) global değişken kullanmaya gerek yok.
    // Her şey modül kapsamında çalışır.
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

// Bu promise'i projenin her yerinde import edip kullanacağız.
export default clientPromise;
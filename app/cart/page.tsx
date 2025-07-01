// app/cart/page.tsx
import React from 'react';

export default function CartPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center">Alışveriş Sepetim</h1>
            <p className="text-center mt-4 text-gray-600">
                Sepetiniz şu anda boş.
            </p>
        </div>
    );
}
import React from 'react';
import ProductCard from './ProductCard'; // Import your ProductCard component
import products from './dummyData'; // Import the dummy product data

const ShopPage2 = () => {
    return (
        <div className="w-full border-2 bg-[#FAFAFA] min-h-screen">
            {/* Header Section */}
            <header className=" text-white text-center py-4">
                <h1 className="text-4xl font-bold">Our Products..</h1>
                <p className="mt-2 text-lg">Explore Our Latest Products</p>
            </header>

            {/* Main Content: Product Listing */}
            <div className="container lg:flex lg:justify-center lg:gap-1">
                <div className="grid grid-cols-2  lg:flex lg: ">
                    {products.map((product) => (

                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            
        </div>
    );
};

export default ShopPage2;

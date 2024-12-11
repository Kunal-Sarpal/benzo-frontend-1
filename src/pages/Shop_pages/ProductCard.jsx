import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosHeartEmpty } from "react-icons/io";

const ProductCard = ({ product }) => {
  return (
      <div className="bg-white max-w-xs relative">
      {/* Product Image */}
          <div className=" border border-gray-200 p-4 ">
        <img src={product.image[0]} alt={product.itemName} className="w-full h-64 object-contain" />
        {/* Like and Share Buttons */}
        {/* <div className="absolute top-2 right-2 flex gap-3">
          <AiOutlineHeart className="text-white text-2xl cursor-pointer" />
          <AiOutlineShareAlt className="text-white text-2xl cursor-pointer" />
        </div> */}
      </div>

      {/* Product Info */}
      <div className="p-1 px-2 ">
        {/* Creator Info */}
        <div className="flex items-center gap-2">
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwFv9Ct9xfWMSUuSyaNb3SAbt2_FZ6SDx2JalJ5iT6HzcMcokxKLPlSOYx--9XrKABmU"} alt="creator-avatar" className="w-8  border-zinc-500 h-8 rounded-full" />
          <span className="font-normal text-sm text-gray-700">{product.creatorId.name}</span>
        </div>

        {/* Product Name */}
        <h2 className="text-xl font-bold mt-2 text-gray-800">{product.itemName}</h2>

        {/* Description */}

        {/* Price */}
        <p className="text-lg font-semibold mt-2 text-green-600">${product.price}</p>

        {/* Hashtags */}
        <div className="text-sm text-gray-500 mt-2">
          {product.hashtags?.map((tag, index) => (
              <span key={index} className="mr-2">#{tag}</span>
            ))}
        </div>
            <p className="text-gray-600 text-sm mt-2">{product.itemDescription.slice(0, 17)} ...more</p>

        {/* Likes, Comments, and Add to Cart */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-3">
            <IoIosHeartEmpty size={20}/>
            <AiOutlineComment className="text-gray-600 text-xl cursor-pointer" />
          </div>
          <AiOutlineShoppingCart className="text-gray-600 text-xl cursor-pointer" />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-4">
          <button className="text-green-500   px-2 md:text-sm border-2 border-green-500 py-2 rounded-md  transition absolute top-60 backdrop-blur-sm right-2 w-fit ">Add to Cart</button>
          <button className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 transition">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

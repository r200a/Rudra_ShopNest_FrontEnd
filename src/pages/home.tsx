import { Link } from "react-router-dom"
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { CartItem } from "../types/types";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Skeleton } from "../components/loader";
import { addToCart } from "../redux/reducer/cartReducer";


const Home = () => {
const {data, isLoading, isError} = useLatestProductsQuery("");
  
const dispatch = useDispatch();

  const addToCardHandler =(cartItem: CartItem)=>{
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");
  
  return (
    <div className="home">
      <section>

      </section>


      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          More
        </Link>

      </h1>

      <main>
        {isLoading ? (
          <Skeleton width="80vw" />
          ) : (
          data?.products.map((i)=>(
          <ProductCard
            key={i._id}
            productId={i._id}
            name={i.name}
            price={i.price}
            stock={i.stock}
            handler={addToCardHandler}
            photo={i.photo}  
        />
      )))}
      </main>
    </div>
  );
};

export default Home
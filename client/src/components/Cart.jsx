import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div className="flex justify-center">
        <div className="mb-10">
            <div>
                <h1>Cart</h1>
            </div>
            <CartItem />
        </div>
        </div>
    )

}

export default Cart;
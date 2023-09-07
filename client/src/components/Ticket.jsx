import { useState } from "react";

const Ticket = ({title, desc, price}) => {
  const [quatity, setQuatity] = useState(9);


  // const addToCart = (e) => {

  // }
    console.log("from: ",title);
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="my-10 max-w-xs rounded-xl bg-pink-50 px-6 py-8 text-black">
        <p className="mb-2 text-2xl font-medium">{title}</p>
        <p className="mb-6">
          {desc}
        </p>
        <div className="flex justify-between align-middle">
          <div>KSH: {price}</div>
          <div className="flex gap-3">
            <div className="text-lg	">-</div>
            <div className="text-lg	">{quatity}</div>
            <div>+</div>
          </div>
        </div>
        <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-xl font-medium text-white" onClick={e => addToCart(e)}>
          Add to Cart
        </button>
      </div>
    </div>
    )
}

export default Ticket;
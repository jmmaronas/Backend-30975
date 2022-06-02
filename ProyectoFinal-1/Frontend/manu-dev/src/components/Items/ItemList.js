import Items from "./Item.js";
import ShoppingCart from "../ShoppingCart/ShoppingCart.js";
import { useState } from "react";

export default function ItemList({products}) {
    const [open, setOpen] = useState(false)
    const openCart=()=>setOpen(true)

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <button className="btn bg-blue-500 text-white px-2 rounded-md border-2 border-slate-700" onClick={() => openCart()}>Cart</button>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Items key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <ShoppingCart open={open} setOpen={setOpen} />
        </div>
    )
}
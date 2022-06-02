import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

function Items({ product }) {
    const {addToCart}=useCartContext()
    return (
        <a key={product.id} href={product.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            <button onClick={() => addToCart(product)} className="btn bg-blue-400 px-2 rounded-md text-white">Add</button>
            <Link to={`/products/update/${product.id}`} className="btn bg-blue-400 px-2 rounded-md text-white">Add</Link>
        </a>
    )
}

export default Items
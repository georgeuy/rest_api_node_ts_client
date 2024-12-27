import type { Product } from "../types"
import { formatCurrency } from "../utils"
import { useNavigate } from "react-router-dom"

type ProductDeatilsProps = {
  product: Product
}

export default function ProductDetails({product}: ProductDeatilsProps) {

  const navigate = useNavigate()

  const isAvailable = product.availability

  return (
    <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">
          {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800 ">
          {isAvailable ? 'Disponible' : 'No Disponible'}
        </td>
        <td className="p-3 text-lg text-gray-800 ">
          <div className="flex gap-2 items-center">
            <button 
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg p-2 w-full uppercase font-bold text-xs  text-center"
            >Editar</button>
          </div>
        </td>
    </tr> 
  )
}




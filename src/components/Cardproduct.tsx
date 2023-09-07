import { ProductType } from "@/types/product";
import Link from "next/link";

type Prop = {
  product: ProductType;
};

export function CardProduct({ product }: Prop) {
  function whatsappLinkGenerator(productTitle:string, productPrice:number) {
    const message = `http://api.whatsapp.com/send?l=pt_BR&phone=+${process.env.NEXT_PUBLIC_MYPHONE}&text=Olá jú ! Eu Tenho interesse no produto ${productTitle}, de preço: ${productPrice}. Ainda estar disponível ?`;
    window.location.href = message;
  }

  return (
    <div className='w-[10rem] h-[13rem] md:w-[15rem] md:h-[18rem] flex flex-col  hover:scale-110 transition duration-300 ease-in-out rounded-lg shadow-lg bg-white '>
      <Link
        href={`/Product-detail/${product.id}`}
        className='block h-1/2 md:h-[57%] w-full'
      >
        <img
          className='rounded-t-lg w-full h-full'
          src={product.img_url}
          alt={product.name}
          loading='lazy'
        />
      </Link>
      <div className='py-2 px-3 w-full h-1/2 md:h-[43%] flex flex-col justify-between'>
        <h5 className='w-full h-6 text-center text-gray-700 text-xs md:text-sm font-medium text-ellipsis whitespace-nowrap overflow-hidden    '>
          {product.name}
        </h5>

        <div className='w-full h-6 flex justify-center items-center text-base'>
          <span className=' text-sm text-green-600 whitespace-nowrap'> R$ {product.current_price}</span>
          <span className=' text-sm text-gray-400 line-through ml-3 text-ellipsis whitespace-nowrap overflow-hidden'>
            {' '}
            R$ {product?.old_price}
          </span>
        </div>
        <button
          type='button'
          className='checked:bg-blue-500 w-full flex items-center justify-center py-2 md:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out'
          onClick={()=>whatsappLinkGenerator(product.name, product.current_price)}
        >
          Solicitar
        </button>
      </div>
    </div>
  );
}
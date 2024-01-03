import { ProductType } from "@/types/product";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IModalProp {
    product: ProductType;
    toggleModal: Dispatch<SetStateAction<boolean>>;
}
export default function ModalProduct({ product, toggleModal }: IModalProp) {

    function whatsappLinkGenerator(productTitle: string, productPrice: number) {
        const message = `http://api.whatsapp.com/send?l=pt_BR&phone=+${process.env.NEXT_PUBLIC_MYPHONE}&text=Olá jú ! Eu Tenho interesse no produto ${productTitle}, de preço: ${productPrice}. Ainda estar disponível ?`;
        window.location.href = message;
    }
    return (

        <div className="w-[90%]  max-h-[90vh] z-[100] fixed top-[5%] flex flex-col items-start   bg-white border rounded-md p-0 shadow-lg">
            <button
                onClick={() => toggleModal(prev => !prev)}
                className="w-10 h-10 absolute top-[-10px] right-[-10px]"
            >
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#FF7C34" />
                </svg>

            </button>
            <button
                className="w-full h-[50%] rounded-t-md"
                onClick={() => toggleModal(prev => !prev)}

            >
                <img src={product.img_url} alt={product.name} className="w-full h-full object-cover rounded-t-md" />
            </button>
            <div className="w-full h-1/2 p-2 my-3">
                <h1 className="w-full text-orange-800 text-center font-medium">{product.name}</h1>
                <p className="w-full text-center text-gray-700">{product.stock} em estoque</p>
                <div className="w-full flex justify-center md:justify-start items-center my-3">
                    <p className="text-green-700 text-md font-medium mr-3">{product.current_price} </p>
                    <p className="text-gray-700  text-md line-through ">{product.old_price}</p>
                </div>

                <p className="w-full text-gray-700 text-left">{product.description}</p>
            </div>
            <button
                type='button'
                className='w-full flex items-center justify-center py-4 md:py-2.5 gap-2 bg-green-600 text-white font-bold text-xs leading-tight uppercase rounded-b-md shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out'
                onClick={() => whatsappLinkGenerator(product.name, product.current_price)}
            >
                <svg className="w-6 h-6" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_710_153)">
                        <path d="M7.28312 23.0869L7.73358 23.3047C9.61078 24.3937 11.7131 24.9019 13.8154 24.9019C20.4228 24.9019 25.8288 19.6747 25.8288 13.2859C25.8288 10.2367 24.5523 7.26005 22.2999 5.082C20.0473 2.90396 17.0439 1.6698 13.8154 1.6698C7.20809 1.6698 1.80199 6.89702 1.87712 13.3585C1.87712 15.5364 2.55287 17.6419 3.67908 19.4569L3.97939 19.8925L2.77815 24.176L7.28312 23.0869Z" fill="#00E676" />
                        <path d="M23.5762 3.92042C21.0234 1.37945 17.4945 0 13.8904 0C6.23201 0 0.0751312 6.02582 0.150155 13.3584C0.150155 15.6817 0.825905 17.9324 1.95223 19.9651L0 26.8622L7.2831 25.0471C9.31035 26.1362 11.5628 26.6444 13.8154 26.6444C21.3988 26.6444 27.5557 20.6185 27.5557 13.286C27.5557 9.7285 26.1291 6.38884 23.5763 3.92042H23.5762ZM13.8904 24.3938C11.8632 24.3938 9.83594 23.8857 8.109 22.8693L7.65854 22.6515L3.30373 23.7404L4.42994 19.6023L4.12963 19.1666C0.825905 14.012 2.40269 7.18743 7.80869 3.99296C13.2147 0.798592 20.1975 2.32323 23.5012 7.55046C26.8048 12.7777 25.228 19.5295 19.8221 22.724C18.0951 23.813 15.9928 24.3937 13.8904 24.3937V24.3938ZM20.4978 16.3353L19.6719 15.9723C19.6719 15.9723 18.4706 15.464 17.7198 15.101C17.6446 15.101 17.5696 15.0284 17.4945 15.0284C17.2692 15.0284 17.119 15.101 16.9689 15.1737C16.9689 15.1737 16.8939 15.2462 15.8427 16.4078C15.7675 16.553 15.6174 16.6257 15.4672 16.6257H15.3921C15.3171 16.6257 15.1669 16.553 15.0918 16.4805L14.7163 16.3353C13.8904 15.9723 13.1397 15.5366 12.5389 14.9558C12.3888 14.8106 12.1635 14.6655 12.0133 14.5203C11.4878 14.012 10.9622 13.4312 10.5868 12.7778L10.5117 12.6326C10.4367 12.5599 10.4367 12.4874 10.3615 12.3422C10.3615 12.197 10.3615 12.0518 10.4367 11.9792C10.4367 11.9792 10.737 11.6162 10.9622 11.3984C11.1124 11.2531 11.1874 11.0354 11.3376 10.8902C11.4878 10.6724 11.5629 10.382 11.4878 10.1642C11.4127 9.80115 10.5117 7.84094 10.2865 7.40537C10.1363 7.18754 9.98621 7.11499 9.76092 7.04235H8.93501C8.78475 7.04235 8.6347 7.11499 8.48444 7.11499L8.40931 7.18754C8.25916 7.26018 8.109 7.40537 7.95885 7.47791C7.80869 7.62321 7.73356 7.76829 7.58341 7.91359C7.05781 8.56699 6.7575 9.36558 6.7575 10.1642C6.7575 10.7449 6.90766 11.3258 7.13294 11.834L7.20807 12.0518C7.88382 13.4312 8.78475 14.6655 9.98621 15.7544L10.2865 16.0448C10.5117 16.2626 10.737 16.4078 10.8871 16.6256C12.4639 17.9325 14.2659 18.8762 16.2931 19.3845C16.5184 19.457 16.8187 19.457 17.044 19.5297H17.7948C18.1702 19.5297 18.6207 19.3845 18.9211 19.2393C19.1463 19.0941 19.2964 19.0941 19.4466 18.9489L19.5969 18.8036C19.747 18.6584 19.8972 18.5859 20.0473 18.4407C20.1975 18.2955 20.3476 18.1503 20.4228 18.005C20.5729 17.7146 20.6479 17.3516 20.7231 16.9887V16.4805C20.7231 16.4805 20.6479 16.4078 20.4978 16.3353V16.3353Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_710_153">
                            <rect width="27.5553" height="26.9563" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Solicitar
            </button>
        </div>


    )
}
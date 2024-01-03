import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IModalProp {
    toggleModal: Dispatch<SetStateAction<boolean>>;
}
export default function ModalDetails({ toggleModal }: IModalProp) {

    function whatsappLinkGenerator() {
        const message = `http://api.whatsapp.com/send?l=pt_BR&phone=+${process.env.NEXT_PUBLIC_MYPHONE}&text=Olá jú, tudo bem ?`;
        window.location.href = message;
    }
    return (

        <div className="fixed top-[5%] left-[2%] w-[95%] h-full min-h-[90vh] overflow-y-auto flex flex-col items-start z-[100] bg-white border rounded-md py-4 px-2 shadow-lg">
            <button
                onClick={() => toggleModal(prev => !prev)}
                className="w-10 h-10 absolute top-[-10px] right-[-10px]"
            >
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#FF7C34" />
                </svg>

            </button>


            <div className="flex flex-col justify-center items-start">
                {/* <Image src="./" alt="Revendedora Jú"> */}
                <h3 className="text-xl text-orange-800 text-center font-medium pb-4"> Olá, seja bem-vinda(o) ao meu catalogo digital !</h3>
                <p className="text-md text-center text-black-900 pb-3">Nesse catálogo você encontrará todos os produtos que eu possou para pronta entrega.
                </p>
                <p className=" text-md text-center text-black-900 pb-4">   Se eu não tiver o que você estar procurando entre em contato comigo para conversar,  pelo número: 
                    <button type="button" onClick={() => whatsappLinkGenerator()} className="text-green-700 hover:text-green-500 ml-1"> (74) 98888-0000 </button>.
                </p>


            </div>

            <div>
                <h4 className="text-md font-bold text-left text-black-900 mb-4">Instruções de uso:</h4>

                <ul className=" w-full h-full flex flex-col justify-start items-start  pl-3 list-disc text-black-700">
                    <li className=" mb-4">Clique na categoria desejada para filtrar a  exibição dos produtos.  </li>
                    <li className=" mb-4">Clique nas imagens para ver mais informações sobre os produtos.</li>
                    <li className=" mb-4">Clique no botão Solicitar, para enviar uma mensagem pelo WhatsApp, com as informações do produto para a consultora.</li>
                    <li className=" mb-4">Clique no ícone do WhatsApp na tela para iniciar uma conversar no WhatsApp com a consultora.</li>

                </ul>
            </div>


        </div>


    )
}
'use client'
import { ProductType } from "@/types/product";
import { categoriesList } from "@/util/categories";

interface InavbarProp {
    toggleCategory: (categorySelected: string) => ProductType[];
}
export default function Navbar(props: InavbarProp) {
    return (
        <nav className="w-full min-w-full">
            <ul className="w-full min-w-full overflow-x-auto  flex justify-start items-center py-2 px-2 gap-4">
                {categoriesList.map((item) => (
                    <li key={item} className="font-semibold text-sm text-orange-800 hover:text-orange-600 flex-1 p-2" onClick={() => props.toggleCategory(item)}>{item}</li>
                ))}
            </ul>
        </nav>

    )
}
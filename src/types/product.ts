export type ProductType ={
    id:number;
    name: string;
    category:string;
    img_url: string;
    current_price:number;
    old_price?:number;
    stock:number;
    description:string;
}
interface ISection_titleProp{
    title: string;
}
export default function Section_title(prop:ISection_titleProp){
    return(
        <div className="w-full min-w-full  flex justify-center items-center">
            <div className="w-1/5 h-[2px] bg-orange-800 rounded mt-2"></div>
            <h2 className="text-md text-orange-800 hover:text-orange-700  mx-2">{prop.title}</h2>
            <div className="w-1/5 h-[2px] bg-orange-800 rounded mt-2"></div>
        </div>
    )
}
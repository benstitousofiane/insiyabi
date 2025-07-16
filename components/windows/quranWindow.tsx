interface QuranWindowInterface{
    bottom: number
}

export default function QuranWindow(prop: QuranWindowInterface){
    return (
        <div className="bg-black absolute duration-[1s] rounded-2xl"
        style={{width: "1800px", height: "900px", bottom: `${prop.bottom}%`, left: "50%", transform: "translateX(-50%)"}}></div>
    )
}
import { RefObject } from "react"
import Image from "next/image";
import s1 from "../../public/surahssvg/s1.png"

let surahNumberFormat : (surahNumber: number) => string = (surahNumber) => {
    let surahNumberTextArray = surahNumber.toString().split("")
    
    let resultArray : string[] = []
    
    if (surahNumberTextArray.length == 1){
        resultArray = ["0", "0", ...surahNumberTextArray]
    }
    else if (surahNumberTextArray.length == 2){
        resultArray = ["0", ...surahNumberTextArray]
    }
    else if (surahNumberTextArray.length == 3){
        resultArray = [...surahNumberTextArray]
    }
    
    let result : string = ""
    for (const char of resultArray){
        result += char
    }
    return result
    
}

interface SurahButtonInterface{
    index: number
    actualIndex : number
    ref : RefObject<null>
    onClick? : () => void
    bottom: number
    right: number
}

export default function SurahButton(prop: SurahButtonInterface){
    let SurahStyleArray = {
        1: "bg-[#aa004f] text-[#2d2d2d]",
        2: "bg-[#18b16c] text-[#ffffff]",
        3: "bg-[#f1c900] text-[#ffffff]",
        4: "bg-[#800568] text-[#212121]",
        5: "bg-[#442a2a] text-[#f49c9c]",
        6: "bg-[#844848] text-[#221111]",
        7: "bg-[#292929] text-[#ffd230]",
        8: "bg-[#181818] text-[#adadad]",
        9: "bg-[#2d2d2d] text-[#db9494]",
        10: "bg-[#14234b] text-[#e0deff]",
        11: "bg-[#2c3b23] text-[#75cd63]",
        12: "bg-[#a4abff] text-[#ffffff]",
        13: "bg-[#e0ff2e] text-[#3c3c2c]",
        14: "bg-[#5b3530] text-[#ffffff]",
        15: "bg-[#beb200] text-[#ffffff]",
        16: "bg-[#fcff31] text-[#000000]",
        17: "bg-[#000000] text-[#ffffff]",
        18: "bg-[#162851] text-[#ffffff]",
        19: "bg-[#f5d1ef] text-[#54064d]",
        20: "bg-[#a8a8a8] text-[#3c3c3c]",
        21: "bg-[#222222] text-[#2dff34]",
        22: "bg-[#ffffff] text-[#beb200]",
        23: "bg-[#23264a] text-[#dadfff]",
        24: "bg-[#fff9ab] text-[#969565]",
        25: "bg-[#1e1e1e] text-[#ababab]",
        26: "bg-[#6f6546] text-[#ffffff]",
        27: "bg-[#5c1919] text-[#ffffff]"
    }
    return (
        <div ref={prop.ref} onClick={prop.onClick} className={`bg-[#5c1919] text-[#ffffff] rounded-[15px] absolute w-full h-screen, flex text-center justify-center items-center ${prop.actualIndex == prop.index ? "text-[100px] border-[5px] border-red-500" : "text-[80px] "} `}
        style={{fontFamily: "SurahNames",width: `${prop.actualIndex == prop.index ? 250 + 50 : 250}px`, height: `${prop.actualIndex == prop.index ? 125 + 50 : 125}px`, bottom: `${prop.actualIndex == prop.index ? prop.bottom + 30 : prop.bottom}px`, right: `${prop.right}px`}}>{`surah${surahNumberFormat(prop.index)}`}</div>
    )
}
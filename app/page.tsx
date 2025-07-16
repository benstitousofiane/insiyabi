"use client"
import SurahButton from "@/components/buttons/surahButton";
import QuranWindow from "@/components/windows/quranWindow";
import { ReactNode, useEffect, useState, useRef, RefObject } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function Home() {
  // --- Variables ---
  const [index, setIndex] = useState(1)
  
  const [areSurahButtonsDisplayed, setAreSurahButtonsDisplayed] = useState(true)

  let contextArray : RefObject<null>[] = []
  for (let i = 1; i <= 114; i++){
    contextArray.push(useRef(null))
  }

  const { contextSafe } = useGSAP({})
  // -----------------
  
  useEffect(() => {
    const handleTyping = (e : KeyboardEvent) => keyBoardFunction(e)

    document.addEventListener("keydown", handleTyping)
    return(() => {
      document.removeEventListener("keydown", handleTyping)
    })
  }, [index])

  

  const keyBoardFunction = (e : KeyboardEvent) =>{
    console.log(e.key)
    if (e.key == "a"){
      appear()
    }
    
    if (e.key == "z"){
      dispear()
    }


    if (e.key == "ArrowLeft"){
      if (index < 114){
        setIndex(index => index + 1)
        slideToLeft()
        console.log(index)
      }
    }

    if (e.key == "ArrowRight"){
      if (index > 1){
        setIndex(index => index - 1)
        slideToRight()
      }
    }

  }

  const slideToLeft = contextSafe(() => {
    for (let i = 0; i < 114; i++){
      setTimeout(() => gsap.to(contextArray[i].current, {x : -250 + 270*(index+1) , duration : 0.5, ease: "expo.out"}))
    }
  })

  const slideToRight = contextSafe(() => {
    for (let i = 0; i < 114; i++){
      setTimeout(() => gsap.to(contextArray[i].current, {x : -250 + 270*(index+1) - 550, duration : 0.5, ease: "expo.out"}))
    }
  })
  
  const appear = contextSafe(() => {
    if (index == 1){
      for (let i = index - 1; i < index + 8; i++){
        setTimeout(() => gsap.to(contextArray[i].current, {y : -125, duration : 0.25}), 0 + 100*(Math.abs(index - i - 1)))
        setTimeout(() => gsap.to(contextArray[i].current, {y : 0, duration : 0.25}), 250 + 100*(Math.abs(index - i - 1)))
      }
    } else{
      for (let i = index - 2; i < index + 8; i++){
        setTimeout(() => gsap.to(contextArray[i].current, {y : -125, duration : 0.25}), 0 + 100*(Math.abs(index - i - 1)))
        setTimeout(() => gsap.to(contextArray[i].current, {y : 0, duration : 0.25}), 250 + 100*(Math.abs(index - i - 1)))
      }
    }

    setAreSurahButtonsDisplayed(true)
  })

  const dispear = contextSafe(() => {
    if (index == 1){
      for (let i = index - 1; i < index + 8; i++){
        setTimeout(() => gsap.to(contextArray[i].current, {y : -125, duration : 0.25}), 0 + 100*(Math.abs(index - i - 1)))
        setTimeout(() => gsap.to(contextArray[i].current, {y : 400, duration : 0.25}), 250 + 100*(Math.abs(index - i - 1)))
      }
    } else {
      for (let i = index - 2; i < index + 8; i++){
        setTimeout(() => gsap.to(contextArray[i].current, {y : -125, duration : 0.25}), 0 + 100*(Math.abs(index - i - 1)))
        setTimeout(() => gsap.to(contextArray[i].current, {y : 400, duration : 0.25}), 250 + 100*(Math.abs(index - i - 1)))
      }
    }
    
    setAreSurahButtonsDisplayed(false)
  })
  

  let surahButtons : ReactNode[] = []
  for (let i = 0; i < 114; i++){
    surahButtons.push(<SurahButton
      index={i+1}
      actualIndex={index}
      key={i} bottom={50} 
      right={i + 1 > index ? -200 + 270*(i+1) + 50 : -200 + 270*(i+1)} 
      ref={contextArray[i]} 
      onClick={dispear}/>)
  }

  return (
   <div>
   {/* <button className="bg-black text-white w-40 h-40 absolute top-0 right-[0px]"
   onClick={appear}>A</button> */}

      {surahButtons}
      
      {/* <QuranWindow bottom={quranWindowBottom}/> */}
   </div>
  );
}

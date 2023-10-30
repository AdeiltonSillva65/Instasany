'use client'
import Image from "next/image";

import Mockup from '@/../../public/mockup-main.png'
import Card01 from '@/../../public/image-01.png'
import Card02 from '@/../../public/image-02.png'
import Card03 from '@/../../public/image-03.png'
import Card04 from '@/../../public/image-04.png'
import Card05 from '@/../../public/image-05.png'
import Card06 from '@/../../public/image-06.png'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const  SectionCards = ()=>{

    const mockupRef = useRef(null)
    const titleRef = useRef(null)
    const sectionRef = useRef(null)

    const section = sectionRef.current;

    const Card01Ref = useRef(null)
    const Card02Ref = useRef(null)
    const Card03Ref = useRef(null)
    const Card04Ref = useRef(null)
    const Card05Ref = useRef(null)
    const Card06Ref = useRef(null)

    function animateCards(images:null[], position:number) {
      gsap.fromTo(images, {
        opacity:0,
        x: position
      },{
        opacity:1,
        x:0,
        duration: 0.5,
        stagger: .1,
        scrollTrigger: {
            trigger: section,
            start: 'center center' 
        }
      })  
    }

    useEffect(()=>{
        const mockupPhone = mockupRef.current;
        const title = titleRef.current;
        

        gsap.fromTo(mockupPhone, {
            opacity:0,
            scale: .5
        },{
            opacity:1,
            scale:1,
            duration: 1,
            ease: 'power5.out'
        })

        gsap.fromTo( title, {
            opacity:0,
            y:100
        },{
            opacity:1,
            y:0,
            duration:1,
            scrollTrigger: {
                trigger: section,
                start: '60% center',
                //markers: true marcadores
            }
        } )

        const img01 = Card01Ref.current;
        const img02 = Card02Ref.current;
        const img03 = Card03Ref.current;
        const img04 = Card04Ref.current;
        const img05 = Card05Ref.current;
        const img06 = Card06Ref.current;

        const leftImages = [img01, img02, img03]
        const rightImages = [img04, img05, img06]

        animateCards(leftImages, 50)
        animateCards(rightImages, -50)

    },[]);

    return(
        <>
            <section className="w-full pb-20" ref={sectionRef}>
                <Image
                    src={Mockup}
                    alt="mokup main"
                    className=" sticky mx-auto top-56 z-10 -mt-[32rem] mb-16px opacity-0" ref={mockupRef}
                />

                <h2 className="text-center text-black font-semibold text-7xl mb-56 opacity-0" ref={titleRef}>Faça <span className="text-green-title-card">você</span> mesmo de casa</h2>

                <div className=" relative w-full max-w-area-cards h-area-cards mx-auto">
                    <Image src={Card01} ref={Card01Ref} className="absolute top-8 left-44 opacity-0"  alt="Card 1"/>
                    <Image src={Card02} ref={Card02Ref} className="absolute left-0 bottom-32 opacity-0"  alt="Card 2"/>
                    <Image src={Card03} ref={Card03Ref} className="absolute bottom-0 left-80 opacity-0"  alt="Card 3"/>
                    <Image src={Card04} ref={Card04Ref} className="absolute top-0 right-32 opacity-0" alt="Card 4"/>
                    <Image src={Card05} ref={Card05Ref} className="absolute right-0 bottom-28 opacity-0" alt="Card 5"/>
                    <Image src={Card06} ref={Card06Ref} className="absolute bottom-0 right-80 opacity-0" alt="Card 6"/>
                </div>
            </section>
        </>
    );
}

export default SectionCards;
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

const  SectionCards = ()=>{

    const mockupRef = useRef(null)

    useEffect(()=>{
        const mockupPhone = mockupRef.current;

        gsap.fromTo(mockupPhone, {
            opacity:0,
            scale: .5
        },{
            opacity:1,
            scale:1,
            duration: 1,
            ease: 'power5.out'
        })
    },[]);

    return(
        <>
            <section className="w-full pb-20">
                <Image
                    src={Mockup}
                    alt="mokup main"
                    className=" sticky mx-auto top-56 z-10 -mt-[32rem] mb-16px opacity-0" ref={mockupRef}
                />

                <h2 className="text-center text-black font-semibold text-7xl mb-56">Faça <span className="text-green-title-card">você</span> mesmo de casa</h2>

                <div className=" relative w-full max-w-area-cards h-area-cards mx-auto">
                    <Image className="absolute top-8 left-44" src={Card01} alt="Card 1"/>
                    <Image className="absolute left-0 bottom-32" src={Card02} alt="Card 2"/>
                    <Image className="absolute bottom-0 left-80" src={Card03} alt="Card 3"/>
                    <Image className="absolute top-0 right-32" src={Card04} alt="Card 4"/>
                    <Image className="absolute right-0 bottom-28" src={Card05} alt="Card 5"/>
                    <Image className="absolute bottom-0 right-80" src={Card06} alt="Card 6"/>
                </div>
            </section>
        </>
    );
}

export default SectionCards;
import Image from "next/image"
import GridContainer from "./grid"
import IconFile from '@/../../public/icon-file.svg'


const SectionHero = ()=>{
    return(
        <section className="w-full h-section-hero bg-green-primary border-t border-t-green-border pt-16">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center">
                    <h3 className="text-xlfont-medium text-green-actived mb-4">Novo curso focado em instagram</h3>
                    <h1 className="text-white text-7xl/normal font-semibold mb-8">Destrave as suas habilidades</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button  className="flex items-center justify-center gap-2">
                            <Image
                                src={IconFile}
                                alt="file"
                            />
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>
                        <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
                            Começar agora
                        </button>
                    </div>
                </div>
            </GridContainer>
        </section>      
    );
}
export default SectionHero;
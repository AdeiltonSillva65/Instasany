import { ReactNode } from "react";

import { twMerge } from "tailwind-merge"; 

interface GridContainerProps{
    children: ReactNode
    className?: string; // pega as informaçoes adicionadas 
}

const GridContainer =({children, className}: GridContainerProps)=>{

    const defaultClass = "w-full mx-auto max-w-grid px-3"
    const combinedClass = twMerge(defaultClass, className); {/*mescla os dados*/ }

    return(
        <div className={combinedClass}> {/*botando para funcionar*/ }
            {children}
        </div>
    )
}

export default GridContainer;
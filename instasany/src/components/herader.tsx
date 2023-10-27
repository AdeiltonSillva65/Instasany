import Image from "next/image";
import Link from "next/link";

import LogoImg from '../../public/logo.svg';
import SearchIcon from '../../public/icon-search.svg';
import IconUser from '../../public/icon-user.svg';
import GridContainer from "./grid";

const Header =()=>{
    return (
        <header className="relative w-full h-24 bg-green-primary flex item-center">
            <GridContainer className="flex items-center justify-between">
                <Image 
                    src={LogoImg}
                    alt='logo'
                />
                <div className="flex items-center">
                    <nav>
                        <Link href={"#"}>Inicio</Link>
                        <Link href={"#"}>Benefícios</Link>
                        <Link href={"#"}>Para quem é o curso?</Link>
                        <Link href={"#"}>Preços promocionais</Link>
                        <Link href={"#"}>Sobre nós</Link>
                    </nav>
                </div>
                <div>
                    <button>
                        <Image 
                            src={SearchIcon}
                            alt='search'
                        />
                    </button>
                    <button>
                        <Image 
                            src={IconUser}
                            alt='icon user'
                        />
                        <span>Fazer login</span>
                    </button>
                </div>
            </GridContainer>
        </header>
    );
}

export default Header;
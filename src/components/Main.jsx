import LinesLeft from '../assets/images/lines_left.svg'
import LinesRight from '../assets/images/lines_Rigth.svg'
import Track from './Track'
import Titles from './Titles'
import DecorativeLines from './DecorativeLines'

export default function Main() {

    return (
        <>
            <div className="relative w-full h-[calc(100vh-72px)] grid grid-cols-2 gap-4 px-5 py-10 lg:px-20 overflow-hidden mx-auto">
                <DecorativeLines position="left" image={LinesLeft} alt="linea izquierda" />
                <Titles />
                <Track />
                <DecorativeLines position="right" image={LinesRight} alt="linea derecha" />
            </div>
        </>
    )
}

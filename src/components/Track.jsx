import spain from '../assets/images/spain.svg'

export default function Track() {

    return (
        <div className="col-span-full lg:col-span-1 flex items-end lg:justify-end z-10">
            <div className=" min-h-[120px] flex items-center justify-between w-full h-1/2 2xl:w-2/3 lg:h-44 bg-[#15151F] border-2 border-[#8F59E7] rounded-2xl p-3">

                {/* track titles */}
                <div className='h-full flex flex-col justify-center items-start'>
                    <h2 className='text-white font-formulaWide text-sm md:text-base lg:text-lg'>Spain - Catalunya</h2>
                    <p className='font-formula text-white/70 text-sm md:text-base lg:text-lg'>Barcelona Circuit</p>
                </div>

                {/* track circuit */}
                <div className='h-full flex justify-center items-center border-2 border-[#8F59E7] p-2 rounded-xl'>
                    <img src={spain} alt="spain circuit" className='h-8 lg:h-12 xl:h-16' />
                </div>

            </div>
        </div>
    )
}

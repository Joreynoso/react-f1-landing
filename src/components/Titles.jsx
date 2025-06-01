export default function Titles() {
    return (
        <div className="col-span-full lg:col-span-1 flex flex-col justify-end lg:justify-start lg:mt-20 z-10 gap-4">
            <h1 className="text-2xl lg:text-3xl font-formulaWide text-white">
                Alpine F1 <br /> Rise Higher
            </h1>
            <p className="w-full 2xl:w-3/4 text-base lg:text-lg leading-relaxed font-formula text-white/80">
                After a difficult weekend, the Alpine team is determined to bounce back stronger in the
                upcoming race. The engineers and drivers are working tirelessly to analyze performance data
                and fine-tune the car's setup.
            </p>

            <a href="/" className="bg-[#5301DA] font-formula text-white p-3 rounded-2xl w-72 text-center hover:bg-[#280077] transition-colors duration-300">See all stats</a>
        </div>
    )
}
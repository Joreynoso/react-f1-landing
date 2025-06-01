// components/DecorativeLines.jsx
export default function DecorativeLines({ position, image, alt }) {
    const baseClasses = "absolute";
    let positionClasses = "";

    if (position === "left") {
        positionClasses =
            "bottom-0 left-[-500px] lg:left-[-400px] xl:left-[-200px] 2xl:left-[-80px]";
    } else {
        positionClasses =
            "top-0 right-[-500px] lg:right-[-400px] xl:right-[-200px] 2xl:right-[-80px]";
    }

    return (
        <div className={`${baseClasses} ${positionClasses}`}>
            <img
                src={image}
                alt={alt}
                className="w-[600px] lg:w-[720px]"
            />
        </div>
    );
}

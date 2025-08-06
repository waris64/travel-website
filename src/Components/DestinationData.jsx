import pic1 from '/src/assets/1.jpg'
import pic2 from '/src/assets/2.jpg'
const DestinationData = (props) => {
    return (
        <div className={`flex flex-col ${props.direction} gap-8 md:mt-34 items-center`}>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{props.heading}</h2>
                <p className="text-base md:text-lg text-left  leading-relaxed">
                    {props.text}
                </p>
            </div>
            <div className="flex gap-4 w-full md:w-1/2 " >
                <img
                    src={pic1}
                    alt="Destination 1"
                    className="w-1/2 rounded-xl object-cover  relative md:top-10 top-7 h-[50vh] md:h-[55vh]"
                />
                <img
                    src={pic2}
                    alt="Destination 2"
                    className="w-1/2 rounded-xl object-cover h-[50vh] md:h-[55vh]"
                />
            </div>
        </div>
    )
}
export default DestinationData
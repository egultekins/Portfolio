interface WIconProps {
    image: string;
    titles: string;
    descriptions: string;
}

function SkillsCard({ image, titles, descriptions }: WIconProps) {
    return (
        <div className="workitem flex flex-col gap-4 text-center  items-center px-10 py-16">
            <img src={image} alt="Work" className="w-32 h-32 rounded-lg shadow-lg" />

            <div className="desc flex flex-col gap-2 pt-7 w-full">
                <h4 className=" skill text-3xl font-semibold">{titles}</h4>
                <p className="text-gray-500 text-lg">{descriptions}</p>
            </div>
        </div>
    )
}

export default SkillsCard;

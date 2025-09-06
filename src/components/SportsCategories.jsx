import { Link } from "react-router-dom"

const SportsCategories = ({sportsCategory}) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 w-fit md:w-7/10">
            {
                sportsCategory.map((sport, index) => (
                    <Link
                        to={`/sports/${sport}`}
                        key={index}
                        className='flex flex-col justify-center items-center text-floralWhite font-jaro bg-blackOlive rounded-lg p-3 w-35 text-xl gap-3 lg:gap-4 cursor-pointer hover:bg-blackOlive/80 hover:scale-[1.03] ease-in-out duration-250'
                    >
                        <img src={`/Sports Icons/${sport}.svg`} alt="" color="" />
                        <p className='uppercase'>{sport}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default SportsCategories
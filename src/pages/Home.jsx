import { Link } from 'react-router-dom'

const Home = () => {
  const sportsCategory = [
    'football', 'basketball', 'skateboard', 'table-tennis', 'volleyball', 'cricket'
  ]
  return (
    <div className='flex flex-col scrollbar justify-center items-center py-10'>
      <p className='font-jaro text-floralWhite text-3xl lg:text-5xl mb-15 lg:mb-20'>Choose your Sports</p>

      <div className="flex flex-wrap justify-center gap-3 lg:gap-4 w-fit md:w-7/10">
        {
          sportsCategory.map((sport, index) => (
            <Link
              to={`/sport/${sport}`}
              key={index}
              className='flex flex-col justify-center items-center text-floralWhite font-jaro bg-blackOlive rounded-lg p-3 w-35 text-xl gap-3 lg:gap-4 cursor-pointer hover:bg-blackOlive/80 hover:scale-[1.03] ease-in-out duration-250'
            >
              <img src={`/Sports Icons/${sport}.svg`} alt="" />
              <p className='uppercase'>{sport}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
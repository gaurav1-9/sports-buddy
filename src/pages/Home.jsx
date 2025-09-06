import SportsCategories from "../components/SportsCategories"

const Home = () => {
  const sportsCategory = [
    'football', 'basketball', 'skateboard', 'table-tennis', 'volleyball', 'cricket'
  ]
  return (
    <div className='flex flex-col scrollbar justify-center items-center py-10'>
      <p className='font-jaro text-floralWhite text-3xl lg:text-5xl mb-15 lg:mb-20'>Choose your Sports</p>

      <SportsCategories sportsCategory={sportsCategory} />
    </div>
  )
}

export default Home
import { useParams } from "react-router-dom"

const SportEvents = () => {
    const { sportsCategory } = useParams()
    return (
        <div className='flex flex-col lg:flex-row scrollbar px-6 lg:px-[100px] py-10'>
            <div className="bg-red-500 lg:w-3/5 h-screen"></div>
            
            <div className="bg-yellow-700 lg:w-2/5 h-screen"></div>
        </div>
    )
}

export default SportEvents
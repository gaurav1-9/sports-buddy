import { useParams } from "react-router-dom"
import EventLists from "../components/EventLists"

const SportEvents = () => {
    const { sportsCategory } = useParams()
    const events = [
        {
            name: "Evening Football Match",
            location: 'Tezpur University',
            date: 'Sept 06, 2025',
            time: '05:30pm',
            peopleReq: 11,
            peopleJoinded: 3,
            userEmail: 'gauravkrdas19@gmail.com'
        },
        {
            name: "16km Marathon",
            location: 'Tezpur University',
            date: 'Sept 08, 2025',
            time: '05:30am',
            peopleJoinded: 5,
            userEmail: 'gauravkrdas19@gmail.com'
        }
    ]

    const joinEvent = (e) => {
        console.log(e)
    }
    return (
        <div className='flex flex-col lg:flex-row scrollbar px-6 lg:px-[100px] pt-10 pb-3'>
            <div className="lg:w-3/5">
                <p className="font-jaro text-floralWhite text-3xl lg:text-5xl mb-8">
                    <span className="capitalize">{sportsCategory}</span> events
                </p>

                <EventLists events={events} joinEvent={joinEvent}/>
            </div>

            <div className="bg-yellow-700 lg:w-2/5"></div>
        </div>
    )
}

export default SportEvents
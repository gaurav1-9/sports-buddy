import { useParams } from "react-router-dom"
import EventLists from "../components/EventLists"
import PersonalEventDetails from "../components/PersonalEventDetails"
import { IoAddCircle } from "react-icons/io5";

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
    const joinedEvents = [
        {
            name: "Evening Football Match",
            location: 'Tezpur University',
            date: 'Sept 06, 2025',
            time: '05:30pm',
            userEmail: 'gauravkrdas19@gmail.com'
        },

    ]

    const joinEvent = (e) => {
        console.log(e)
    }
    const addEvent = () => {
        console.log("Add new event")
    }

    return (
        <div className='flex flex-col lg:flex-row scrollbar px-6 lg:px-[100px] pt-0 pb-3'>
            <div className="lg:w-3/5">
                <p className="sticky top-15 lg:top-22 pt-7 pb-5 z-5 bg-eerieBlack font-jaro text-floralWhite text-3xl lg:text-5xl">
                    <span className="capitalize">{sportsCategory}</span> events
                </p>

                <EventLists events={events} joinEvent={joinEvent} />
            </div>

            <div className="mt-5 lg:fixed top-19 z-30 right-24 lg:w-2/6 lg:h-screen">
                <div className="lg:mt-8 flex flex-col w-full lg:h-8/11 gap-3 py-2.5">

                    <div className={`max-h-60 lg:h-1/2 bg-blackOlive w-full px-3 rounded-md overflow-y-scroll scrollbar`}>
                        <p className={`sticky top-0 z-10 font-jaro bg-blackOlive pt-3 pb-2 text-floralWhite text-xl lg:text-2xl`}>
                            Joined Events
                        </p>
                        <PersonalEventDetails
                            joinedEvents={joinedEvents}
                            secondaryBg='bg-timberWolf'
                            secondaryText='text-eerieBlack'
                        />
                    </div>

                    <div className={`max-h-60 lg:h-1/2 bg-flame w-full px-3 rounded-md overflow-y-scroll scrollbar-dark`}>
                        <p className={`sticky top-0 z-10 font-jaro bg-flame pt-3 pb-2 text-eerieBlack text-xl lg:text-2xl`}>
                            Your Events
                        </p>
                        <PersonalEventDetails
                            joinedEvents={joinedEvents}
                            secondaryBg='bg-eerieBlack'
                            secondaryText='text-floralWhite'
                        />
                        <div
                            className="flex justify-center items-center gap-1 px-3 cursor-pointer group mb-3"
                            title="Add new event"
                            onClick={addEvent}
                        >
                            <div className="flex-grow h-1 bg-eerieBlack group-hover:bg-eerieBlack/80 rounded-full"></div>
                            <IoAddCircle className="text-5xl text-eerieBlack group-hover:text-eerieBlack/90" />
                            <div className="flex-grow h-1 bg-eerieBlack group-hover:bg-eerieBlack/80 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportEvents
import { MdPeopleAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const EventLists = ({ events, joinEvent }) => {
    return (
        <div className="w-full lg:pr-3 flex flex-col gap-2">
            {
                events.map((event, index) => (
                    <div
                        key={index}
                        className="relative rounded-md bg-blackOlive text-floralWhite font-josefinSans p-3"
                    >
                        <p className="font-jaro text-xl lg:text-3xl">{event.name}</p>
                        <p className="text-base lg:text-lg leading-4 lg:leading-6">{event.userEmail}</p>

                        <div className="flex flex-col lg:flex-row justify-between w-8/10 mt-5 text-lg lg:text-xl">
                            <div className="flex justify-start gap-2">
                                <FaCalendarAlt />
                                <p>{event.date} | {event.time}</p>
                            </div>
                            <div className="flex justify-start gap-2">
                                <FaLocationDot />
                                <p>{event.location}</p>
                            </div>
                        </div>

                        <div className="flex justify-start gap-2 text-lg lg:text-xl lg:mt-2 mb-10">
                            <MdPeopleAlt className="mt-0.5" />
                            {
                                (event.peopleReq !== undefined)
                                    ? <p>
                                        {(event.peopleJoinded < 10) ? `0${event.peopleJoinded}` : event.peopleJoinded} out of {(event.peopleReq < 10) ? `0${event.peopleReq}` : event.peopleReq} people joined
                                    </p>
                                    : <p>
                                        {(event.peopleJoinded < 10) ? `0${event.peopleJoinded}` : event.peopleJoinded} people joined
                                    </p>
                            }
                        </div>

                        <button
                            className="absolute bottom-2 lg:bottom-3 right-3 bg-flame rounded-md px-6 py-2 font-bold"
                            onClick={() => joinEvent(event)}
                        >
                            JOIN
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default EventLists
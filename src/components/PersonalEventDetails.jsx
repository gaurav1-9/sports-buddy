import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const PersonalEventDetails = ({ events, secondaryBg, secondaryText }) => {
    return (

        <div className="mb-3 w-full flex flex-col gap-2">
            {
                events.map((event, index) => (
                    <div
                        key={index}
                        className={`relative rounded-md ${secondaryBg} ${secondaryText} font-josefinSans p-2`}
                    >
                        <p className="font-jaro text-base lg:text-2xl">{event.name}</p>
                        <p className="text-base lg:text-lg leading-4 lg:leading-6">{event.userEmail}</p>

                        <div className="flex flex-col mt-2 text-base">
                            <div className="flex justify-start gap-2">
                                <FaCalendarAlt />
                                <p>{event.date} | {event.time}</p>
                            </div>
                            <div className="flex justify-start gap-2">
                                <FaLocationDot />
                                <p>{event.location}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PersonalEventDetails
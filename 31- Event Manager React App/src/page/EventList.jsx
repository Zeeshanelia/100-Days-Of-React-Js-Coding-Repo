import EventCard from '../component/EventCard';
import EventData from "../utils/EventData";
import Navigation from '../component/Navigation';


const EventList = () => {

    const renderEventData = () => {
        return EventData.map(
            ({ id, heading, date, loaction, image, disription }) => (
                <EventCard
                    key={id}     // REQUIRED by React
                    id={id}
                    heading={heading}
                    date={date}
                    loaction={loaction}
                    image={image}
                    disription={disription}
                />
            )
        );
    };


    return (
        <>
            <Navigation />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 p-1'>



                {EventData.length > 0
                    ?
                    renderEventData()
                    :
                    <h1 className="text-black">No Event Available</h1>
                }

            </div>
        </>
    );
};

export default EventList;

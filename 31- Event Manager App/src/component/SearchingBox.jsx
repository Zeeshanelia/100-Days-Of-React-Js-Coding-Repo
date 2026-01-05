import EventCard from "../component/EventCard";
import EventData from "../utils/EventData";

const SearchingBox = ({ monthYear }) => {
    const { month, year } = monthYear;

    const filterEvent = month && year
        ? EventData.filter(event => {
            const [eventYear, eventMonthNumber] = event.date.split("-").map(Number);
            const eventMonth = [
                "Jan","Feb","Mar","Apr","May","Jun",
                "Jul","Aug","Sep","Oct","Nov","Dec"
            ][eventMonthNumber - 1];

            return eventMonth === month && eventYear === Number(year);
        })
        : [];

    const renderedEvents = filterEvent.map(({ id, heading, date, location, disription, image }) => (
        <EventCard key={id} event={{ id, heading, date, location, disription, image }} />
    ));

    return (
        <div className="mt-6">
            {month && year && (
                <p className="mb-4 text-center bg-pink-100 text-pink-800 font-medium py-2 rounded-lg w-60 mx-auto">
                    Searching For: {month} {year}
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderedEvents.length > 0 ? (
                    renderedEvents
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        {month && year
                            ? "No events found for the selected month and year."
                            : "Select month and year to see events."}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SearchingBox;

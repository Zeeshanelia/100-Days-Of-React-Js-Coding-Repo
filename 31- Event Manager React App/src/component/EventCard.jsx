const EventCard = ({ event }) => {
  // Guard: prevent crash if event is undefined
  if (!event) return null;

  const { id, heading, date, location, disription, image } = event;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 overflow-hidden border border-gray-200">
      
      {/* Image */}
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={heading}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Event Details */}
      <div className="p-4 flex flex-col space-y-2">
        {/* ID Badge */}
        <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full w-max">
          Event ID: {id}
        </span>

        {/* Heading */}
        <h3 className="text-lg font-bold text-gray-800">{heading}</h3>

        {/* Date and Location */}
        <p className="text-gray-600 text-sm">
          <strong>Date:</strong> {date}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Location:</strong> {location}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-1 line-clamp-3">
          {disription}
        </p>
      </div>

      {/* Optional: Button / Link */}
      <div className="p-4 pt-0">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;

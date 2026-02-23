
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Event Details</h2>
      <p>Event ID: {id}</p>

      <button
        onClick={() => navigate(`/event-details/${id}`)}
        className="bg-blue-500 text-white px-4 py-1 rounded " >
        detail This Event
      </button>
    </div>
  );
};

export default EventDetails;

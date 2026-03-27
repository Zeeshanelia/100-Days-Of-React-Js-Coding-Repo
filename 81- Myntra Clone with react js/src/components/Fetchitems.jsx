import { useSelector, useDispatch } from "react-redux";

const ItemsList = () => {
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch({ type: "items/removeItem", payload: id });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">🛍️ My Items</h2>

      <div className="row">
        {items.length === 0 ? (
          <p className="text-center text-muted">No items available</p>
        ) : (
          items.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex justify-content-between align-items-center">

                  <h5 className="card-title mb-0">{item.name}</h5>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    ❌
                  </button>

                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsList;
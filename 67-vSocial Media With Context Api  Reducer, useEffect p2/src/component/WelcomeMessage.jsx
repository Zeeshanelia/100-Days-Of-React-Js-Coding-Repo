const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="text-center p-5 shadow rounded bg-white">
        <h1 className="mb-4 text-muted">There are no posts</h1>
        <p className="text-secondary mb-4">Click the button below to load posts from the server.</p>

        <button
          type="button"
          onClick={onGetPostsClick}
          className="btn btn-primary btn-lg px-5">
          <i className="bi bi-cloud-download me-2"></i>
          Get Posts From Server
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
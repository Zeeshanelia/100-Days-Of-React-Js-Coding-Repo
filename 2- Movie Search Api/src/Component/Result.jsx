export const Result = ({ movie }) => {
    return (
        <div className="w-full grid grid-cols-5 gap-2 mt-2">
            {(Array.isArray(movie) ? movie : []).map((item, index) => (
                <Box 
                    key={item.imdbID || item.id || index}
                    item={item}
                />
            ))}
        </div>
    );
};

const Box = ({ item }) => {
    const placeholder = "https://via.placeholder.com/300x450?text=No+Image";

    const poster = item?.Poster 
        ? item.Poster !== "N/A" ? item.Poster : placeholder 
        : item?.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}` 
        : placeholder;

    const title = item?.Title || item?.title || "No Title";

    const year = item?.Year || (item?.release_date ? item.release_date.split('-')[0] : "N/A");

    return (
        <div className="shadow-md border mb-8">
            <img
                className="w-full max-h-[220px]"
                src={poster}
                alt={title}
            />
            <div className="flex justify-between px-2 py-1">
                <span>{title}</span>
                <span>{year}</span>
            </div>
        </div>
    );
};

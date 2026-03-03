

const getPages = (current, total) => {
    const pages = [];

    // Case 1: Very few pages → show all
    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
        return pages;
    }

    // Case 2: Many pages → show ellipsis logic
    // Always show page 1
    pages.push(1);

    if (current <= 3) {
        // Near the beginning
        pages.push(2, 3, 4, "...", total);
    }
    else if (current >= total - 2) {
        // Near the end
        pages.push("...", total - 3, total - 2, total - 1, total);
    }
    else {
        // In the middle
        pages.push("...", current - 1, current, current + 1, "...", total);
    }

    return pages;
};

const Pagination = ({ handlePage, page, dynamicPage }) => {




    return (
        <>
            <div className="mt-6 space-x-4 ">
                <button disabled={page === 1} onClick={() => handlePage(page - 1)}
                    className={`${page === 1 ? "bg-red-300" : 'bg-red-600'}
                 px-3 rounded-full w-22 py-2 font-semibold cursor-pointer`}>Previous</button>

                {getPages(page, dynamicPage).map((item, index) => {
                    return (
                        <span key={index}
                            onClick={() => typeof item === "number" && handlePage(item)}
                            className={`cursor-pointer  ${item === page ? "font-bold text-green-500" : ""}`}>
                            {item}
                        </span>
                    )
                })}



                <button disabled={page === dynamicPage} onClick={() => handlePage(page + 1)}
                    className={`${page === dynamicPage ? "bg-red-300" : 'bg-red-600'}

                px-3 rounded-full w-22 py-2 font-semibold cursor-pointer`}> Next </button>

            </div>
        </>
    );
};

export default Pagination;

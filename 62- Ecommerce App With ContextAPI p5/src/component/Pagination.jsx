

const Pagination = ({ handlePage, page }) => {

    return (
        <>
            <div className="mt-6 space-x-10 ">
                <button disabled={page === 1}
                className={`${page === 1 ? "bg-red-300" : 'bg-red-600'}
                 px-3 rounded-full w-22 py-2 font-semibold cursor-pointer`}>Previous</button>

                12

                <button disabled={page === 1}
                className={`${page === 1 ? "bg-red-300" : 'bg-red-600'}
                px-3 rounded-full w-22 py-2 font-semibold cursor-pointer`}> Next </button>

            </div>
        </>
    );
};

export default Pagination;

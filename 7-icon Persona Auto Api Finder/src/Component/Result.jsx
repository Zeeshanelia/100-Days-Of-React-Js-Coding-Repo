
export const Result = ({ movie }) => {

    return (<>
        <div className="w-full grid grid-cols-4 gap-2 mt-2">
            {
                movie.map(
                    (item, index) => (
                        <div key={index}>   <Box />  </div>
                    )
                )
            }


        </div>
    </>)
}

const Box = () => {
    return (<>
        <div className="shadow-md min-h-[200px] border mb-8">
            <img className="w-full " src="https://picsum.photos/200/200?random=2">
          
            </img>
              <div className="flex justify-between">
                <span>  Title </span>

                <span>  Rating </span>
            </div>
        </div>

    </>)
} 
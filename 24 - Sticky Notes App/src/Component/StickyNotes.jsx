import { useState } from "react";

export const StickyNotes = ({ id, text, onUpdatesNote, onDelete }) => {
    const [toggle, seToggle] = useState(false);
    const [newText, setNewText] = useState(text);

    const savedButton = () => {
        onUpdatesNote(id, newText)
        seToggle(false)
    }

    return (<>
        <div className="m-10 flex gap-4 rounded flex">

            {
                toggle ? (
                    <div className="flex flex-col bg-gray-400 rounded shadow-lg shadow-red-400">
                        <textarea value={newText}
                            onChange={(e) => setNewText(e.target.value)} className="bg-white h-26 w-32 rounded">
                        </textarea>

                        <button onClick={savedButton} className="font-semibold hover:bg-blue-400 rounded"> <i className="ri-heart-add-2-fill text-xl mr-1"> </i>
                            Save
                        </button>
                    </div>
                ) : (
                    <div className=" min-w-36 h-26  relative bg-gray-400 rounded-lg shadow-lg shadow-red-400">
                        <p className="absolute top-1 left-1 right-1 bg-black/60 text-white font-semibold text-xs p-1 rounded backdrop-blur-sm">

                            {text}
                        </p>

                        <div className="absolute bottom-0 left-9 right-2 flex gap-10">
                            <button onClick={() => seToggle(true)} className=" font-semibold">
                                <i className="ri-edit-2-fill hover:scale-150 transition-transform duration-300 inline-block"></i>
                            </button>
                            <button onClick={onDelete}
                                className=" font-semibold">
                                <i className="ri-delete-bin-3-fill hover:scale-150 transition-transform duration-300 inline-block"></i>
                            </button>
                        </div>
                    </div>)
            }


        </div>
    </>)
}

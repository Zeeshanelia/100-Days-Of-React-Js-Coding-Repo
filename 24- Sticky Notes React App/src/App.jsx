import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { StickyNotes } from "./Component/StickyNotes"

function App() {
  const [addNote, setAddNote] = useState([]);
 
  const notes = () => {
    setAddNote([...addNote, { id: Date.now() , text: "Start typing here, This is Sticky Note "
    }])
    console.log(addNote)
  }

  const upadatesNote = (id , newText) => {
    setAddNote((previousNotes)=> previousNotes.map((note) =>(
      note.id === id ? {...note , text: newText} : note )))
  }

  const deleteBtn = (id) => {
    // setAddNote(addNote.filter((note)=> note.id !==id ))
    setAddNote(prev => prev.filter(note => note.id !== id));

    
    }

  return (
    <>
      <div className="py-2 bg-gradient-to-b from-black via-pink-800 to-yellow-600 min-h-screen">

        <p className="flex justify-center gap-2 py-1 text-xl font-bold text-white border mx-auto w-46 bg-gradient-to-l from-red-300 via-pink-800 to-yellow-300   rounded-xl shadow-white">
          <i onClick={notes} className='ri-add-line text-white text-xl bg-slate-800 rounded-xl h-6 w-6 text-center hover:bg-black'> </i> Sticky Notes
        </p>


        <div className='flex flex-col justify-center gap-4'>
          <div className='flex flex-wrap' >

            {
              addNote.map((note)=>(
                   <StickyNotes key={note.id} id={note.id} text={note.text} 
                   onUpdatesNote={upadatesNote} 
                   onDelete={()=>deleteBtn(note.id)} />
              ))
            }
          </div>
        </div>

      </div>
    </>
  );
}

export default App;

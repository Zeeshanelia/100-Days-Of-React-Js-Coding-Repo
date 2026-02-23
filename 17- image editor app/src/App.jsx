import { useState } from 'react';
import 'animate.css';
// import './App.css';
import 'remixicon/fonts/remixicon.css';
import { ReactPhotoEditor } from 'react-photo-editor';

function App() {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const selectPhoto = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput?.click();
  };

  const onFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    // Do NOT open the modal immediately – wait for user to click "Edit"
  };

  const openEditor = () => {
    if (file) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSaved = (editedImage) => {
    // editedImage is a Blob
    const url = URL.createObjectURL(editedImage);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'edited-image.png';
    anchor.click();
    URL.revokeObjectURL(url);

    handleClose(); // Close modal after saving
  };

  return (
    <div className="py-8 bg-gradient-to-b from-pink-500 via-slate-300 to-black min-h-screen text-white">
      {/* Hidden File Input */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        hidden
      />

      {/* Upload Box */}
      <div
        onClick={selectPhoto}
        className="
          bg-white text-slate-900
          w-full sm:w-10/12 md:w-7/12 lg:w-5/12
          mx-auto h-[250px]
          flex flex-col items-center justify-center
          border-4 border-dashed border-slate-400
          rounded-2xl cursor-pointer
          transition-all duration-300
          hover:border-slate-600 shadow-xl
          animate__animated animate__bounceIn
        "
      >
        <div className="w-32 h-32 flex items-center justify-center mb-4">
          <i className="ri-upload-cloud-2-fill text-6xl"></i>
        </div>

      <div className="text-2xl font-bold">
          <h1 >Click to Upload image here...</h1>
      </div>
     
      </div>

      {/* Show selected image preview and Edit button */}
      {file && !open && (
        <div className="mt-8 text-center">
          <img
            src={URL.createObjectURL(file)}
            alt="Selected"
            className="mx-auto max-w-full h-auto max-h-96 rounded-lg shadow-xl"
          />
          <button
            onClick={openEditor}
            className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition"
          >
            Open Editor
          </button>
        </div>
      )}

   
      <ReactPhotoEditor className="fixed inset-0 z-50"
        open={open}
        onClose={handleClose}
        file={file}
        onSaveImage={onSaved}
        downloadOnSave={false} // We handle download manually
        closeOnClickOutside={false}
        maxCanvasHeight="30rem"  
        canvasHeight="400px" 
        maxCanvasWidth="36rem"    
      />
    </div>
  );
}

export default App;
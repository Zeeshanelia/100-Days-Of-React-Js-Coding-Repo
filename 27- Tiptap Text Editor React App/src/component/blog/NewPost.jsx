import { useState } from 'react'
import TipTap from '../TipTap'

const NewPost = () => {
    const [dataHtml, setDataHtml] = useState('')

    const handleSaveEditor = (html) => {
        setDataHtml(html)
        console.log("Data from Editor:", html)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-5">
                    TipTap Rich Text Editor Integration
                </h1>

                {/* Pass callback to TipTap */}
                <TipTap onClickSaveEditor={handleSaveEditor} />




                <div className="max-w-3xl mx-auto ">

                    {dataHtml && 
                    (
                        <div className="mt-4 p-4 border rounded bg-gray-50">

                            <h2 className="text-xl text-center font-semibold bg-gray-300 mx-auto w-36 rounded">Saved Content :</h2>

                            <div dangerouslySetInnerHTML={{ __html: dataHtml }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewPost

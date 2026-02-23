import 'remixicon/fonts/remixicon.css'
import { Toaster } from "react-hot-toast";
import {MainLayout} from "./Component/MainLayout"


export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-700 to-purple-800 flex flex-col">

      <MainLayout/>
        <Toaster />
    </div>
  );
};





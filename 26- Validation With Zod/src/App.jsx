import { useState } from 'react'
import "animate.css";
import {  z } from 'zod';

function App() {
  const [formData, setFormData] = useState({ email: "" , password : "" })
  const [errors, setErrors] = useState({});


  const loginSchema = z.object({
    email : z.string()
    .min(1 , { message : "email is required"}).email({ message : "invalid email address"}),


   password: z.string().min(6, { message: "Password must be at least 6 characters" })


  })  

  // const onchangeHandle  = (e) =>{
  //   const name = e.target.name
  //   const val  = e.target.value
  //   setFormData({
  //     ...formData ,
  //     [name] : val,
  //     setErrors({ ...errors, 
  //       [name]: "" });
  //   })
  // }

  const onchangeHandle = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setErrors({ ...errors, [name]: "" });
};




  const onsubmitHandler = (e) => {
  e.preventDefault();

  const result = loginSchema.safeParse(formData);

  if (!result.success) {
    const newErrors = result.error.flatten().fieldErrors;
    setErrors({
      email: newErrors.email?.[0] || "",
      password: newErrors.password?.[0] || "",
    });
    return;
  } else {
    setErrors({});
    console.log("Form submitted successfully:", formData);
  }
};




  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center">

        <div className=" max-w-3xl bg-white mx-auto text-center  rounded-lg shadow-lg p-5 space-y-2 animate__animated animate__bounce">

          <h1 className="text-3xl font-bold text-black"> validation with Zod !</h1>

          <form onSubmit={onsubmitHandler} className='max-w-xl mx-auto bg-gradient-to-b from-green-200 to-red-200 border bg-white text-black mb-5 p-5 rounded-lg shadow-lg space-y-5'>


            <input type="email" name="email" value={formData.email} onChange={onchangeHandle} className='w-96 border p-2 rounded-lg' placeholder='enter id' />
            
            <div>
            {errors.email &&  (<span className="text-red-700 text-sm">{errors.email}</span> )}
            </div>
          

            <input type="password" name="password" value={formData.password} onChange={onchangeHandle} className='w-96 border p-2 rounded-lg' placeholder='********' />
            

            <button type="submit" className="mt-5 px-4 py-2 bg-blue-500 w-96 font-semibold rounded-lg shadow-md hover:bg-gray-500">
              log-in
            </button>
            <div>
               {errors.password && 
             (<span className="text-red-700 text-sm">{errors.password}</span>)}
            </div>
          </form>

        </div>
      </div>

    </>
  )
}

export default App




 
 
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // =============================== State to store error messages

//   const [errors, setErrors] = useState({});

//   // =============================== Handle input change

//   const onchangeHandle = (e) => {
//     const { name, value } = e.target;

//     // Update form data
//     setFormData({
//       ...formData,     // keep previous values
//       [name]: value,   // update only the current field
//     });

//     // Clear error message when user starts typing
//     setErrors({
//       ...errors,       // keep other errors
//       [name]: "",      // remove error for this field
//     });
//   };

//   // =============================== Form submit handler
  
//   const onsubmitHandler = (e) => {
//     e.preventDefault(); // stop page refresh

//     // Run validation before submit
//     if (validate()) {
//       console.log("Form is valid:", formData);
//       // Here you can send data to API
//     }
//   };

//   // =============================== Validation logic
 
//   const validate = () => {
//     const newErrors = {};

//     // ---- Email validation ----
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is not valid";
//     }

//     // ---- Password validation ----
//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     // Save errors in state
//     setErrors(newErrors);

//     // If no errors, form is valid
//     return Object.keys(newErrors).length === 0;
//   };

 
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">

//         <div className="max-w-3xl bg-white rounded-lg shadow-lg animate__animated animate__bounce p-5">

//           <h1 className="text-3xl font-bold text-black text-center mb-5">
//             Form Validation (No Library)
//           </h1>

//           <form
//             onSubmit={onsubmitHandler}
//             className="max-w-md mx-auto space-y-5"
//           >

//             {/* Email Input */}
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={onchangeHandle}
//               placeholder="Enter email"
//               className="w-full border p-2 rounded-lg"
//             />

//             {/* Email Error */}
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email}</p>
//             )}

//             {/* Password Input */}
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={onchangeHandle}
//               placeholder="Enter password"
//               className="w-full border p-2 rounded-lg"
//             />

//             {/* Password Error */}
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password}</p>
//             )}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-500"
//             >
//               Log In
//             </button>

//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

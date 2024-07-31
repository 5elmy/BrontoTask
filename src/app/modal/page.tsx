"use client"
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const NativeModal: React.FC = ({users}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

 

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    user_name: Yup.string().required('User name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
    job_title: Yup.string().required('Job title is required'),
  });

  const addUser = useFormik({
    initialValues: {
      name: "",
      user_name: "",
      email: "",
      age: 0,
      country: 0,
      gender: "Male",
      job_title: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      values.country = 1;
      console.log(values);

      await axios.post(`https://dv2.brontosolutions.com:8000/assignment/userprofiles/create/`, values)
        .then(res => {
          console.log(res);
          users();
        })
        .catch(err => {
          console.log(err);
        });
    }
  });

  return (
    <>
      <div className="flex justify-end items-center py-5 px-4 md:px-6 lg:px-8 ">
        <button
          className="p-2 rounded-md flex gap-2 bg-[#001F56] text-white text-sm md:text-base"
          onClick={openModal}
        >
          <FaPlus className="text-lg md:text-xl" />
          New User
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md sm:max-w-lg   p-4 sm:p-6 lg:p-8 bg-white rounded shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-left mb-4">Add a new employee</h2>
            <p className="text-base text-left text-gray-600 mb-6">
              It will take a couple of minutes.
              <br />Change profile settings and confirm with SMS code
            </p>
            <h2 className="text-lg font-bold text-left text-gray-800 mb-4">
              Your personal data
            </h2>
            <form onSubmit={addUser.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  onChange={addUser.handleChange}
                  onBlur={addUser.handleBlur}
                  value={addUser.values.name}
                  className="rounded-md border border-gray-300 px-3 py-2 w-full"
                />
                {addUser.errors.name && addUser.touched.name ? (
                  <div className="text-red-500 text-xs mt-1">{addUser.errors.name}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">User name</label>
                <input
                  id="user_name"
                  name="user_name"
                  onChange={addUser.handleChange}
                  onBlur={addUser.handleBlur}
                  value={addUser.values.user_name}
                  className="rounded-md border border-gray-300 px-3 py-2 w-full"
                />
                {addUser.errors.user_name && addUser.touched.user_name ? (
                  <div className="text-red-500 text-xs mt-1">{addUser.errors.user_name}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  onChange={addUser.handleChange}
                  onBlur={addUser.handleBlur}
                  value={addUser.values.email}
                  className="rounded-md border border-gray-300 px-3 py-2 w-full"
                />
                {addUser.errors.email && addUser.touched.email ? (
                  <div className="text-red-500 text-xs mt-1">{addUser.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  onChange={addUser.handleChange}
                  onBlur={addUser.handleBlur}
                  value={addUser.values.age}
                  className="rounded-md border border-gray-300 px-3 py-2 w-full"
                />
                {addUser.errors.age && addUser.touched.age ? (
                  <div className="text-red-500 text-xs mt-1">{addUser.errors.age}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  id="country"
                  value="Egypt"
                  className="rounded-md border border-gray-300 px-3 py-2 w-full"
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label htmlFor="job_title" className="block text-sm font-medium text-gray-700 mb-1">Job title</label>
                <input
                  id="job_title"
                  name="job_title"
                  onChange={addUser.handleChange}
                  onBlur={addUser.handleBlur}
                  value={addUser.values.job_title}
                  className="rounded-md border border-gray-300 px-3 py-2 w-full"
                />
                {addUser.errors.job_title && addUser.touched.job_title ? (
                  <div className="text-red-500 text-xs mt-1">{addUser.errors.job_title}</div>
                ) : null}
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4">
                <button
                  className="px-4 py-2 font-semibold text-[#001F56] border border-[#001F56] rounded hover:bg-[#001F56] hover:text-white"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-[#001F56] rounded hover:bg-[#001F56] focus:outline-none"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NativeModal;





 export const DeleteModel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getAllUser = async () => {
    await axios.get(`https://dv2.brontosolutions.com:8000/assignment/userprofiles/`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

 
  
  return (
    <>
      <div className="flex justify-end items-center py-5 px-4 md:px-6 lg:px-8">
        <button
          className="p-2 rounded-md flex gap-2 bg-[#001F56] text-white text-sm md:text-base"
          onClick={openModal}
        >
          <FaPlus className="text-lg md:text-xl" />
          New User
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-4 sm:p-6 lg:p-8 bg-white rounded shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className='w-full'>
              <h2 className="text-2xl font-bold text-left mb-4">Add a new employee</h2>
              <p className="text-base text-left text-gray-600 mb-6">
                It will take a couple of minutes.
                <br />Change profile settings and confirm with SMS code
              </p>
              <h2 className="text-lg font-bold text-left text-gray-800 mb-4">
                Your personal data
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



// "use client"
// import axios from 'axios';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';

// const NativeModal: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   const getAllUser = async () => {
//     await axios.get(`${process.env.BASEURL}/userprofiles/`)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   const addUser = useFormik({
//     initialValues: {
//       name: "",
//       user_name: "",
//       age: 0,
//       country: 0,
//       gender: "Male",
//       job_title: ""
//     },
//     onSubmit: async (values) => {
//       values.country = 1;
//       console.log(values);

//       await axios.post(`${process.env.BASEURL}/userprofiles/create/`, values)
//         .then(res => {
//           console.log(res);
//           getAllUser();
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   });

//   return (
//     <>
//       <div className="flex justify-end items-center py-5">
//         <button
//           className="p-3 rounded-[8px] flex items-center gap-[8px] bg-[#001F56] text-white"
//           onClick={openModal}
          
//         >
//           <FaPlus />
//           New User
//         </button>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//           <div className="relative w-full max-w-lg p-8 bg-white rounded shadow-lg">
//             <button
//               className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <h2 className="font-[Helvetica] font-[700] leading-[31.2px] text-left text-[24px]">Add a new employee</h2>
//             <p className="font-[Helvetica] text-[16px] pt-[4px] pb-[24px] font-[400] leading-[20.8px] text-left text-[#575F6E]">
//               It will take a couple of minutes.
//               <br />Change profile settings and confirm with SMS code
//             </p>
//             <h2 className="text-[#242731] font-[Helvetica] font-[700] text-[16px] leading-[24px]">
//               Your personal data
//             </h2>
//             <form onSubmit={addUser.handleSubmit}>
//               <p className="font-[Helvetica] font-[400] text-[13px] leading-[18px] pt-[24px] pb-[8px]">User name</p>
//               <input
//                 id="name"
//                 name="name"
//                 onChange={addUser.handleChange}
//                 onBlur={addUser.handleBlur}
//                 className="rounded-[4px] border-solid border-2 border-[#D4D4D4] px-4 py-2 mb-4 w-full"
//               />
//               <p className="font-[Helvetica] font-[400] text-[13px] leading-[18px] pt-[24px] pb-[8px]">User name</p>
//               <input
//                 id="user_name"
//                 name="user_name"
//                 onChange={addUser.handleChange}
//                 onBlur={addUser.handleBlur}
//                 className="rounded-[4px] border-solid border-2 border-[#D4D4D4] px-4 py-2 mb-4 w-full"
//               />
//               <p className="font-[Helvetica] font-[400] text-[13px] leading-[18px] pt-[24px] pb-[8px]">Email</p>
//               <input
//                 id="email"
//                 name="email"
//                 onChange={addUser.handleChange}
//                 onBlur={addUser.handleBlur}
//                 className="rounded-[4px] border-solid border-2 border-[#D4D4D4] px-4 py-2 mb-4 w-full"
//               />
//               <p className="font-[Helvetica] font-[400] text-[13px] leading-[18px] pt-[24px] pb-[8px]">Age</p>
//               <input
//                 id="age"
//                 name="age"
//                 onChange={addUser.handleChange}
//                 onBlur={addUser.handleBlur}
//                 className="rounded-[4px] border-solid border-2 border-[#D4D4D4] px-4 py-2 mb-4 w-full"
//               />
//               <p className="font-[Helvetica] font-[400] text-[13px] leading-[18px] pt-[24px] pb-[8px]">Country</p>
//               <input
//                 id="country"
//                 value="Egypt"
//                 className="rounded-[4px] border-solid border-2 border-[#D4D4D4] px-4 py-2 mb-4 w-full"
//               />
//               <p className="font-[Helvetica] font-[400] text-[13px] leading-[18px] pt-[24px] pb-[8px]">Job title</p>
//               <input
//                 id="job_title"
//                 name="job_title"
//                 onChange={addUser.handleChange}
//                 onBlur={addUser.handleBlur}
//                 className="rounded-[4px] border-solid border-2 border-[#D4D4D4] px-4 py-2 mb-4 w-full"
//               />
//               <div className="flex justify-end gap-4 mt-4">
//                 <button
//                   className="px-4 py-2 font-semibold text-[#001F56] border border-[#001F56] rounded hover:bg-[#001F56] hover:text-white"
//                   onClick={closeModal}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 font-semibold text-white bg-[#001F56] rounded hover:bg-[#001F56] focus:outline-none"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NativeModal;

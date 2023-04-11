import React from 'react'
import { useForm } from 'react-hook-form'


const SingUp = () => {
    const {getValues, register, handleSubmit, formState:{errors}, reset} = useForm()
    const onSub = (data)=>{
        console.log(data);
    }

    const regexAlphabet = /^[a-zA-Z0-9@.]+$/;
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+`\-=[\]{};':"\\|,.<>/?]).+$/;




  return (
    <div className="h-screen bg-gradient-to-br from-pink-300 to-indigo-700 flex justify-center items-center w-full">
  <form onSubmit={handleSubmit(onSub)}>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <div >
          <label className="block mb-1 text-gray-600 font-semibold">Username <span className='text-red-600'>*</span></label>
          <input {...register(
            'username', 
            {
                required:{
                    value: true, 
                    message: "usrename required!!"
                },
                maxLength:{
                    value:20,
                    message: "user name max length is 20 char!"
                },
                minLength:{
                    value:5,
                    message: "user name required min 5 char!"
                },
                pattern:{
                    value: regexAlphabet,
                    message: "username Can only contain upper and lower case letters, numbers, @ and . !"
                }

            }
            )
          } type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
          {errors.username && <p className='text-red-600'>{errors.username.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-gray-600 font-semibold">Email <span className='text-red-600'>*</span></label>
          <input {...register(
            'email', 
            {
                required:{
                    value: true, 
                    message: "email required!!"
                },
                maxLength:{
                    value:25,
                    message: "email max length is 25 char!"
                },
                minLength:{
                    value:6,
                    message: "email required min 6 char!"
                },
                pattern:{
                    value: regexEmail,
                    message: "email Can only contain letters & numbers, and must contain @ and . !"
                }

            }
            )
          }
          type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
          {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-gray-600 font-semibold">Password <span className='text-red-600'>*</span></label>
          <input {...register(
            'password', 
            {
                required:{
                    value: true, 
                    message: "password required!!"
                },
                maxLength:{
                    value:25,
                    message: "password max length is 25 char!"
                },
                minLength:{
                    value:6,
                    message: "password required min 6 char!"
                },
                pattern:{
                    value: regexPassword,
                    message: "password *must* contain: 1 upper case, 1 lower case, 1 number, and 1 special character ! "
                }

            }
            )
          }
          
          type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
          {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-gray-600 font-semibold">Confirm Password <span className='text-red-600'>*</span></label>
          <input {...register(
            'conPassword', 
            {
                required:{
                    value: true, 
                    message: "conPassword required!!"
                },
                validate:{
                    value:(val)=> getValues('password') == val ||'password not match!'

                }

            }
            )
          } 
          
          type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
          {errors.conPassword && <p className='text-red-600'>{errors.conPassword.message}</p>}
        </div>
      </div>
      <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
      <button  className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Reset</button>
    </div>
  </form>
</div>
  )
}

export default SingUp
import React from 'react';
const FormSingUp = () => {
    return(
        <div>
            <form>
                <p className=" font-bold  text-2xl text-center mt-6 mb-10">Sign Up</p>
                <div className="mb-6">
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 ml-40 " placeholder=" Email" required/>
                </div>
                <div className="mb-6">
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 ml-40 " placeholder=" Password" required/>
                </div>
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 ml-40 mb-0">
                    <select>
                        <option selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <p className="text-center text-[#868688]">I agree to all term, privacy policy and fees</p>
                </div>
                <div className=" font-bold text-sm bg-[#CBBAA2] text-center mt-6  border-gray-300 text-gray-900 rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 ml-40">
                    Sing Up
                </div>
                <div className="text-center mt-1">
                    <span className="text-[#868688]">Alreay have account ?</span><span className="text-primary"> Sign In</span>
                </div>
            </form>
        </div>
    )
}
export default FormSingUp;
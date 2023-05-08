import React from 'react';

const FormSingIn = () => {
    return(
        <div>
            <form>
                <p className=" font-bold  text-2xl text-center mt-6 mb-10">Sign In</p>
                <div className="mb-6">
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 ml-40 " placeholder=" Email" required/>
                </div>
                <div className="mb-6">
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 ml-40 " placeholder=" Password" required/>
                </div>
                <div className="text-center">
                    <span className="mr-20">
                        <input type="checkbox"/> Remember me
                    </span>
                    <span className="text-[#CBBAA2]">
                        Forgot Password ?
                    </span>
                </div>
                <div className=" font-bold text-sm bg-[#CBBAA2] text-center mt-6  border-gray-300 text-gray-900 rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 ml-40">
                    Sing In
                </div>
                <div className="text-center mt-1">
                    <span className="text-[#868688]">Don't have account ?</span><span className="text-[#CBBAA2]"> Sign Up</span>
                </div>
            </form>
        </div>
    )
}
export default FormSingIn;
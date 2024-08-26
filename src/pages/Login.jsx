import { Fragment } from "react";

const Login = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="shadow-md border p-5 rounded-md">
                    <h1 className="text-2xl font-semibold pt-5 pb-5">Login</h1>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-slate-700 my-4">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="block border border-slate-300 rounded-md outline-none p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-slate-700 my-4">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="block border border-slate-300 rounded-md outline-none p-2" />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="py-2 px-3 border bg-blue-500 text-white rounded-sm">Login</button>
                    </div>
                    <p className="text-slate-700 text-sm">Don't have an account? <a href="#" className="underline">register now</a></p>
                </div>
            </div>
        </>
    )
}

export default Login;
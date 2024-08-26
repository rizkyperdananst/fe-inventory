import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="col-span-1 h-full bg-slate-50 p-2">
                    <h1 className="text-xl text-slate-500">Menu</h1>
                    <ul className="p-2 my-2 text-white bg-blue-500 rounded-xl">
                        <li><Link to="/admin/dashboard" className="text-sm">Dashboard</Link></li>
                    </ul>
                    <ul className="p-2 my-2 text-black rounded-md">
                        <li><Link to="/admin/categories" className="text-sm">Category</Link></li>
                    </ul>
                    <ul className="p-2 my-2 text-black rounded-md">
                        <li><a href="#" className="text-sm">Goods</a></li>
                    </ul>
                    <ul className="p-2 my-2 text-black rounded-md">
                        <li><a href="#" className="text-sm">Supplier</a></li>
                    </ul>
                    <ul className="p-2 my-2 text-black rounded-md">
                        <li><a href="#" className="text-sm">Supplier Goods</a></li>
                    </ul>
                    <ul className="p-2 my-2 text-black rounded-md">
                        <li><a href="#" className="text-sm">Trasaction</a></li>
                    </ul>
                    <h1 className="text-xl text-slate-500">Setting</h1>
                    <ul className="p-2 my-2 text-black rounded-md">
                        <li><a href="#" className="text-sm">Profile</a></li>
                    </ul>
                    <ul className="p-2 my-2 text-black rounded-md">
                        <li><a href="#" className="text-sm">Logout</a></li>
                    </ul>
                </div>
        </>
    )
}

export default Sidebar;
import { Helmet } from "react-helmet";
import Footer from "../components/common/Footer";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Admin | Dashboard Admin</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Header />
            <aside className="grid grid-cols-5 gap-4 p-3 rounded-md">
                <Sidebar />
                <main className="col-span-4">
                    <p>Dashboard</p>
                </main>
            </aside>
            <Footer />
        </>
    )
}

export default Dashboard;
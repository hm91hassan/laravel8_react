import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";

const Master = () =>{
    return (
        <div className="app">
            <div className="content">
                <Topbar />
                <Sidebar />
            </div>
        </div>
    );
}

export default Master;

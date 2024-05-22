import { FaUser } from "react-icons/fa";
import States from "../../../Components/Shared/States/States";

const UserDashboard = () => {
    return (
        <div className="flex flex-col gap-3 m-3">
            {/* head */}
            <div className="flex gap-4 border">
                <States title={"USERS"} percent={"20"} state={'100'} linkTitle={'All users'} link={'/dashboard/users'} icon={<FaUser></FaUser>}  ></States>
                <States title={"USERS"} percent={"20"} state={'100'} linkTitle={'All users'} link={'/dashboard/users'} icon={<FaUser></FaUser>}  ></States>
                <States title={"USERS"} percent={"20"} state={'100'} linkTitle={'All users'} link={'/dashboard/users'} icon={<FaUser></FaUser>}  ></States>
                <States title={"USERS"} percent={"20"} state={'100'} linkTitle={'All users'} link={'/dashboard/users'} icon={<FaUser></FaUser>}  ></States>
            </div>

            {/* chart */}
            <div className="flex h-[400px] gap-4">
                <div className="w-4/12">
                    <div className="bg-white p-3 h-full shadow-pink-400 rounded-lg shadow-lg">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <h2>Total Revenue</h2>
                                <p>:</p>
                            </div>

                            <p>Total seals Today</p>
                            <h2 className="text-5xl">$ 450</h2>
                            <div className="flex">
                                <div className="flex-1">
                                    <p>Target</p>
                                    <p>20 k</p>
                                </div>
                                <div className="flex-1">
                                    <p>Last Week</p>
                                    <p>20 k</p>
                                </div>
                                <div className="flex-1">
                                    <p>Last Month</p>
                                    <p>20 k</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="w-8/12">
                    <div className="bg-white p-3 h-full shadow-pink-400 rounded-lg shadow-lg">
                     make a chart

                    </div>
                </div>

            </div>
            <div></div>
        </div>
    );
};

export default UserDashboard;
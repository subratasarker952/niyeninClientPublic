import { Link } from "react-router-dom";

const States = (props) => {
    const { title, percent, state, linkTitle, link, icon }=props
    return (
        <div className="flex flex-col flex-1 p-3 gap-3 rounded-lg shadow-pink-400 bg-white shadow-lg">
            <div className="flex justify-between">
                <h2 className="text-xl">{title}</h2>
                <h2 className="text-xl">{percent} %</h2>
            </div>
            <h2 className="text-4xl text-left">{state}</h2>
            <div className="flex justify-between">
                <Link to={link}>{linkTitle}</Link>
                <h2 className="text-xl">{icon}</h2>
            </div>
        </div>
    );
};

export default States;
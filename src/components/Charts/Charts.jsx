import State from "../State/State";
import Trend from "../Trend/Trend";

const Charts = () => {
    return (
        <div className="w-full flex justify-between items-center gap-8">
            <State />
            <Trend />
        </div>
    );
};

export default Charts;

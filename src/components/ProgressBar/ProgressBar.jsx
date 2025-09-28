const ProgressBar = ({ value, max, label }) => {
    const percent = Math.min((value / max) * 100, 100);

    return (
        <div className="flex flex-col gap-1">
            <span>
                {value} {label}
            </span>
            <div className="w-full h-2 bg-[#f8f6fb] overflow-hidden rounded-2xl">
                <div
                    className="h-full bg-[#5f3196]"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;

const CustomChartLabel = ({ viewBox, data }) => {
    const { cx, cy } = viewBox;

    const total = data.reduce((sum, entry) => sum + entry.value, 0);

    return (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
            <tspan x={cx - 48} dy={-8} fontSize={40} fontWeight="bold">
                {total}
            </tspan>
            <tspan
                x={cx - 48}
                dy={25}
                fontSize={12}
                fontWeight="normal"
                fill="#495057"
            >
                Total number
            </tspan>
        </text>
    );
};

export default CustomChartLabel;

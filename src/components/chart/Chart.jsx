import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className="">
			<h3 className="mb-2.5 font-semibold text-xl">{title || 'Analytics'}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="month" stroke="#5550bd" />
					<Line type="monotype" dataKey="activeUser"/>
					<Tooltip />
					{
						grid
							? (
								<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
							)
							: null
					}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;

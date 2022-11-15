import "./chart.css"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart m-5 p-5">
      <h3>{title || "Analytics"}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#5550bd" />
          <Line type="monotype" dataKey="activeUser"/>
          <Tooltip />
          {
            grid ? (
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            ) : null
          }
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;

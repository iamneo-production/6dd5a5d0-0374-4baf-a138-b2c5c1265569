import { LineChart,ResponsiveContainer,Legend,Tooltip,Line,XAxis,YAxis,CartesianGrid} from "recharts";

const LineActivity = ({ data }) => {

    // let obj ={
    //     "ONLINE" : 0,
    //     "POC":0,
    //     "INTERNATIONAL":0,
    //     "ATM":0,
    //     "TAPnPAY":0
    // };

    // const labels = Object.keys(obj);

    // const amounts = Object.values(obj);

  return (
    <div >
      <h1 className="text-heading text-xl font-semibold p-10">Suspicious Activity</h1>

      <ResponsiveContainer  aspect={3}>
        <LineChart data={data} margin={{ right: 50}}>
          <CartesianGrid />

          <XAxis dataKey="type" className="font-semibold" interval={"preserveStartEnd"} />

          <YAxis></YAxis>

          <Legend />

          <Tooltip />

          <Line dataKey="done" stroke="orange" activeDot={{ r: 8 }} />

          <Line dataKey="suspicious" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineActivity;

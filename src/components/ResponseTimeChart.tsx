import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "< 1min", count: 450 },
  { time: "1-5min", count: 300 },
  { time: "5-15min", count: 200 },
  { time: "15-30min", count: 100 },
  { time: "> 30min", count: 50 },
];

const ResponseTimeChart = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Response Time Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#25D366" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseTimeChart;
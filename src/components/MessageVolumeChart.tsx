import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Mon", messages: 120 },
  { date: "Tue", messages: 150 },
  { date: "Wed", messages: 180 },
  { date: "Thu", messages: 140 },
  { date: "Fri", messages: 200 },
  { date: "Sat", messages: 160 },
  { date: "Sun", messages: 130 },
];

const MessageVolumeChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Message Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="messages"
                stroke="#25D366"
                fill="#DCF8C6"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageVolumeChart;
import { MessageCircle, Clock, Users, Zap } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import MessageVolumeChart from "@/components/MessageVolumeChart";
import ResponseTimeChart from "@/components/ResponseTimeChart";
import TopicsChart from "@/components/TopicsChart";
import TimeFilter from "@/components/TimeFilter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">WhatsApp Bot Analytics</h1>
          <TimeFilter />
        </div>

        <div className="mb-8 grid grid-cols-4 gap-4">
          <MetricCard
            title="Total Messages"
            value="1,234"
            icon={<MessageCircle className="h-4 w-4 text-whatsapp-primary" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Avg. Response Time"
            value="2.5 min"
            icon={<Clock className="h-4 w-4 text-whatsapp-primary" />}
            trend={{ value: 8, isPositive: false }}
          />
          <MetricCard
            title="Active Users"
            value="892"
            icon={<Users className="h-4 w-4 text-whatsapp-primary" />}
            trend={{ value: 5, isPositive: true }}
          />
          <MetricCard
            title="Success Rate"
            value="95%"
            icon={<Zap className="h-4 w-4 text-whatsapp-primary" />}
            trend={{ value: 2, isPositive: true }}
          />
        </div>

        <div className="mb-8">
          <MessageVolumeChart />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <ResponseTimeChart />
          <TopicsChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
import {
  ActivityIcon,
  CheckCircleIcon,
  ClockIcon,
  SendIcon,
  Share2Icon,
  TrendingUpIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  dummyAccountsData,
  dummyActivityData,
  dummyPostsData,
} from "../assets/assets";

const Dashboard = () => {
  const [stats, setStats] = useState({
    scheduled: 0,
    published: 0,
    connectedAccounts: 0,
  });

  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [postsRes, accountsRes, activityRes] = [
          { data: dummyPostsData },
          { data: dummyAccountsData },
          { data: dummyActivityData },
        ];

        const posts = postsRes.data;

        setStats({
          scheduled: posts.filter(
            (p: any) => p.status === "scheduled"
          ).length,

          published: posts.filter(
            (p: any) => p.status === "published"
          ).length,

          connectedAccounts: accountsRes.data.filter(
            (a: any) => a.status === "connected"
          ).length,
        });

        setActivities(activityRes.data);
      } catch (error: any) {
        console.error(
          "Error fetching dashboard data",
          error
        );
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      label: "Scheduled Posts",
      value: stats.scheduled,
      icon: ClockIcon,
      trend: "+2 today",
    },
    {
      label: "Published Posts",
      value: stats.published,
      icon: CheckCircleIcon,
      trend: "All time",
    },
    {
      label: "Connected Accounts",
      value: stats.connectedAccounts,
      icon: Share2Icon,
      trend: "Active",
    },
  ];

  return (
    <div className="space-y-8 font-inter">

      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Good morning!
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-accent/40 hover:bg-zinc-900"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <Icon className="size-5 text-lime-accent" />
                </div>

                <div className="flex items-center gap-1 rounded-full border border-lime-accent/15 bg-lime-accent/5 px-2.5 py-1 text-xs text-lime-accent">
                  <TrendingUpIcon className="size-3" />
                  {card.trend}
                </div>
              </div>

              <div className="text-3xl font-semibold tabular-nums text-white">
                {card.value}
              </div>

              <p className="mt-1 text-sm text-zinc-500">
                {card.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Activity Feed */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <ActivityIcon className="size-5 text-lime-accent" />

            <h2 className="font-medium text-white">
              Recent Activity
            </h2>
          </div>

          <span className="text-sm text-zinc-600">
            {activities.length} events
          </span>
        </div>

        {/* Empty State */}
        {activities.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16">
            <div className="mb-3 flex size-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
              <ActivityIcon className="size-6 text-zinc-600" />
            </div>

            <p className="text-zinc-400">
              No activity yet
            </p>

            <p className="mt-1 text-center text-sm text-zinc-600">
              Connect accounts and schedule posts to see events here.
            </p>
          </div>
        ) : (

          /* Activity List */
          <div className="divide-y divide-zinc-800">
            {activities.map((activity) => (
              <div
                key={activity._id}
                className="flex items-start gap-4 px-6 py-4 transition-colors hover:bg-zinc-900/60"
              >
                {/* Activity Icon */}
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <SendIcon className="size-4 text-lime-accent" />
                </div>

                {/* Activity Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between gap-2">

                    <span className="rounded-full border border-lime-accent/15 bg-lime-accent/5 px-2 py-0.5 text-xs text-lime-accent">
                      Published
                    </span>

                    <span className="shrink-0 text-xs text-zinc-600">
                      {new Date(
                        activity.createdAt
                      ).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
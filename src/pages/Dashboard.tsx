import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  AlertCircle, 
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Total Complaints", value: "12,547", change: "+8%", icon: AlertCircle, color: "text-destructive" },
    { label: "Resolved", value: "10,892", change: "+12%", icon: CheckCircle, color: "text-success" },
    { label: "In Progress", value: "1,234", change: "-5%", icon: Clock, color: "text-primary" },
    { label: "Avg Response", value: "2.3 hrs", change: "-15%", icon: TrendingUp, color: "text-accent" },
  ];

  const recentComplaints = [
    { id: "CMP-001234", category: "Power Outage", location: "Satellite, AHD", priority: "High", status: "In Progress" },
    { id: "CMP-001233", category: "Voltage Issue", location: "Vastral, AHD", priority: "Medium", status: "Assigned" },
    { id: "CMP-001232", category: "Damaged Pole", location: "Gota, AHD", priority: "High", status: "Resolved" },
    { id: "CMP-001231", category: "Meter Problem", location: "Chandkheda, AHD", priority: "Low", status: "Verified" },
  ];

  const topIssues = [
    { type: "Power Outage", count: 342, percentage: 27 },
    { type: "Voltage Fluctuation", count: 289, percentage: 23 },
    { type: "Damaged Infrastructure", count: 198, percentage: 16 },
    { type: "Billing Issues", count: 156, percentage: 12 },
    { type: "Others", count: 280, percentage: 22 },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Real-time insights and complaint trends across Gujarat
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-card ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <Badge variant={stat.change.startsWith('+') ? 'default' : 'secondary'}>
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Complaints */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-elevated animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Recent Complaints
                </CardTitle>
                <CardDescription>Latest submissions across the network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentComplaints.map((complaint, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm font-semibold text-foreground">{complaint.id}</span>
                          <Badge variant={complaint.priority === 'High' ? 'destructive' : complaint.priority === 'Medium' ? 'default' : 'secondary'}>
                            {complaint.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-foreground">{complaint.category}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {complaint.location}
                        </p>
                      </div>
                      <Badge variant="outline">{complaint.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Heatmap Placeholder */}
            <Card className="shadow-elevated animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-success" />
                  Complaint Heatmap
                </CardTitle>
                <CardDescription>Geographic distribution of issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Interactive map with complaint clusters
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Google Maps integration ready
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Issues */}
          <div className="space-y-6">
            <Card className="shadow-elevated animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Top Issues
                </CardTitle>
                <CardDescription>Most reported problems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topIssues.map((issue, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{issue.type}</span>
                        <span className="text-sm text-muted-foreground">{issue.count}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-hero h-2 rounded-full transition-all"
                          style={{ width: `${issue.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Card */}
            <Card className="shadow-elevated bg-gradient-hero text-primary-foreground animate-fade-in">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">System Performance</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="opacity-90">Uptime</span>
                    <span className="font-bold">99.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Response Rate</span>
                    <span className="font-bold">97.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Satisfaction</span>
                    <span className="font-bold">4.6/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

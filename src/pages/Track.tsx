import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle2, Clock, AlertCircle, MapPin } from "lucide-react";

const Track = () => {
  const [ticketId, setTicketId] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticketId.trim()) {
      setShowResults(true);
    }
  };

  // Mock ticket data
  const ticketData = {
    id: "CMP-2024-001234",
    status: "In Progress",
    category: "Power Outage",
    priority: "High",
    submittedDate: "2024-12-20 10:30 AM",
    estimatedResolution: "2024-12-21 02:00 PM",
    location: "Satellite, Ahmedabad",
    description: "Complete power outage in Block A, affecting 50+ households",
    timeline: [
      {
        status: "Submitted",
        date: "2024-12-20 10:30 AM",
        description: "Complaint registered successfully",
        icon: CheckCircle2,
        color: "text-success",
      },
      {
        status: "Verified",
        date: "2024-12-20 11:15 AM",
        description: "Complaint verified by regional team",
        icon: CheckCircle2,
        color: "text-success",
      },
      {
        status: "Team Assigned",
        date: "2024-12-20 12:00 PM",
        description: "Field team assigned and dispatched",
        icon: Clock,
        color: "text-primary",
      },
      {
        status: "In Progress",
        date: "2024-12-20 01:30 PM",
        description: "Repair work underway at site",
        icon: Clock,
        color: "text-primary",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Track Your Ticket</h1>
          <p className="text-lg text-muted-foreground">
            Enter your ticket ID to view real-time status updates
          </p>
        </div>

        {/* Search Card */}
        <Card className="shadow-elevated mb-8 animate-slide-up">
          <CardHeader>
            <CardTitle>Enter Ticket ID</CardTitle>
            <CardDescription>
              Your ticket ID was sent via SMS and email when you submitted your complaint
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="flex-1">
                <Input
                  placeholder="e.g., CMP-2024-001234"
                  value={ticketId}
                  onChange={(e) => setTicketId(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button type="submit" size="lg">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 animate-fade-in">
            {/* Ticket Overview */}
            <Card className="shadow-elevated">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{ticketData.id}</CardTitle>
                    <CardDescription className="text-base">{ticketData.description}</CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary"
                  >
                    {ticketData.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Category</p>
                      <p className="font-medium text-foreground">{ticketData.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Priority</p>
                      <Badge variant="destructive">{ticketData.priority}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium text-foreground flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {ticketData.location}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Submitted</p>
                      <p className="font-medium text-foreground">{ticketData.submittedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Estimated Resolution</p>
                      <p className="font-medium text-success">{ticketData.estimatedResolution}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Progress Timeline</CardTitle>
                <CardDescription>Real-time updates on your complaint resolution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {ticketData.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        {index < ticketData.timeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-semibold text-foreground">{item.status}</h3>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-muted/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Need Help?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• You will receive SMS/email notifications at each stage</li>
                  <li>• For urgent issues, call our 24/7 helpline: 1912</li>
                  <li>• Average resolution time: 2-48 hours based on priority</li>
                  <li>• You can submit feedback after issue resolution</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;

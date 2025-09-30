import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle, 
  Lightbulb, 
  TrendingUp, 
  MapPin, 
  CheckCircle, 
  Clock,
  Users,
  BarChart3
} from "lucide-react";

const Home = () => {
  const stats = [
    { label: "Total Complaints", value: "12,547", icon: AlertCircle, color: "text-destructive" },
    { label: "Resolved Issues", value: "10,892", icon: CheckCircle, color: "text-success" },
    { label: "Active Suggestions", value: "234", icon: Lightbulb, color: "text-accent" },
    { label: "Avg Response Time", value: "2.3 hrs", icon: Clock, color: "text-primary" },
  ];

  const features = [
    {
      title: "Report Issues",
      description: "Submit complaints with photos, location, and detailed description. Track resolution in real-time.",
      icon: AlertCircle,
      link: "/complaints",
      color: "bg-destructive/10 text-destructive",
    },
    {
      title: "Share Ideas",
      description: "Suggest improvements for the power distribution network. Community votes on best ideas.",
      icon: Lightbulb,
      link: "/suggestions",
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Track Progress",
      description: "Monitor your complaint status with ticket ID. Get real-time updates via SMS and email.",
      icon: TrendingUp,
      link: "/track",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "View Analytics",
      description: "Explore complaint heatmaps, trends, and insights. Data-driven decision making for better service.",
      icon: BarChart3,
      link: "/dashboard",
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="bg-secondary text-secondary-foreground mb-4">
              Gujarat Urja Vikas Nigam Limited
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Voice Powers Better Electricity
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              A transparent platform to report issues, suggest improvements, and track resolutions across Gujarat's power distribution network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/complaints">
                <Button size="lg" variant="secondary" className="shadow-elevated">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  File a Complaint
                </Button>
              </Link>
              <Link to="/suggestions">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Submit Suggestion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="animate-slide-up shadow-card hover:shadow-elevated transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-card ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How PowerConnect Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive system designed for transparency, efficiency, and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={feature.link}>
                    <Button variant="ghost" className="group-hover:text-primary transition-colors">
                      Get Started →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-primary-foreground shadow-elevated">
            <CardContent className="p-12 text-center">
              <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Join Thousands of Active Citizens</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Be part of Gujarat's digital transformation in power distribution. Your feedback helps us serve you better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/complaints">
                  <Button size="lg" variant="secondary">
                    Report an Issue
                  </Button>
                </Link>
                <Link to="/track">
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white">
                    Track Your Ticket
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

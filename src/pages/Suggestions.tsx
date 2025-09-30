import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Lightbulb, ThumbsUp, MessageSquare, TrendingUp, Clock } from "lucide-react";

const Suggestions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Suggestion submitted successfully!", {
        description: "Community voting opens in 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const popularSuggestions = [
    {
      id: 1,
      title: "Install Solar Panels on Transformers",
      description: "Utilize transformer tops for solar panels to generate renewable energy and reduce load",
      author: "Raj Patel",
      votes: 342,
      comments: 28,
      status: "Under Review",
      daysLeft: 3,
    },
    {
      id: 2,
      title: "SMS Alerts for Planned Maintenance",
      description: "Send advance notifications about scheduled power cuts to help residents plan better",
      author: "Priya Shah",
      votes: 298,
      comments: 45,
      status: "Voting Open",
      daysLeft: 7,
    },
    {
      id: 3,
      title: "QR Codes on Electric Poles",
      description: "Add QR codes to poles for easy complaint reporting with auto-location capture",
      author: "Amit Desai",
      votes: 267,
      comments: 32,
      status: "In Progress",
      daysLeft: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Community Suggestions</h1>
          <p className="text-lg text-muted-foreground">
            Share your ideas to improve Gujarat's power distribution network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submit Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-elevated sticky top-24 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  Submit Suggestion
                </CardTitle>
                <CardDescription>Your idea could change the system!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" placeholder="Full name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Suggestion Title *</Label>
                    <Input id="title" placeholder="Brief, descriptive title" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Explain your idea in detail..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="e.g., Infrastructure, Technology" />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Suggestion"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    Suggestions are reviewed within 24 hours. Public voting opens for 5-10 days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Popular Suggestions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Trending Suggestions</h2>
              <Button variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>

            {popularSuggestions.map((suggestion, index) => (
              <Card
                key={suggestion.id}
                className="hover:shadow-elevated transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{suggestion.title}</CardTitle>
                      <CardDescription>{suggestion.description}</CardDescription>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="secondary">by {suggestion.author}</Badge>
                        <Badge
                          variant={
                            suggestion.status === "In Progress"
                              ? "default"
                              : suggestion.status === "Voting Open"
                              ? "outline"
                              : "secondary"
                          }
                        >
                          {suggestion.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 bg-muted rounded-lg p-3 min-w-[80px]">
                      <ThumbsUp className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-foreground">{suggestion.votes}</span>
                      <span className="text-xs text-muted-foreground">votes</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {suggestion.comments} comments
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {suggestion.daysLeft} days left
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Vote
                      </Button>
                      <Button size="sm" variant="ghost">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Info Card */}
            <Card className="bg-gradient-accent text-accent-foreground shadow-elevated">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  How Community Voting Works
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Submit your innovative idea for power distribution improvement</li>
                  <li>• Suggestions are reviewed by GUVNL team within 24 hours</li>
                  <li>• Approved suggestions open for public voting (5-10 days)</li>
                  <li>• Top-voted ideas are prioritized for implementation</li>
                  <li>• Contributors receive recognition and updates on progress</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;

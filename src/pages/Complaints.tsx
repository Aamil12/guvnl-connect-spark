import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Upload, AlertCircle, CheckCircle2 } from "lucide-react";

const Complaints = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          toast.success("Location captured successfully");
        },
        (error) => {
          toast.error("Unable to get location. Please enable location services.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Complaint submitted successfully! Ticket ID: #CMP-2024-001234", {
        description: "You will receive updates via SMS and email.",
      });
      (e.target as HTMLFormElement).reset();
      setLocation(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">File a Complaint</h1>
          <p className="text-lg text-muted-foreground">
            Report power distribution issues with detailed information for quick resolution
          </p>
        </div>

        <Card className="shadow-elevated animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              Complaint Details
            </CardTitle>
            <CardDescription>
              Fill in all required fields. Attach photos/videos if available.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>

              {/* Complaint Information */}
              <div className="space-y-2">
                <Label htmlFor="category">Complaint Category *</Label>
                <Select required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="power-outage">Power Outage</SelectItem>
                    <SelectItem value="voltage-fluctuation">Voltage Fluctuation</SelectItem>
                    <SelectItem value="damaged-pole">Damaged Pole</SelectItem>
                    <SelectItem value="broken-wire">Broken Wire</SelectItem>
                    <SelectItem value="transformer-issue">Transformer Issue</SelectItem>
                    <SelectItem value="meter-problem">Meter Problem</SelectItem>
                    <SelectItem value="billing-issue">Billing Issue</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level *</Label>
                <Select required>
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High - Immediate Safety Risk</SelectItem>
                    <SelectItem value="medium">Medium - Significant Disruption</SelectItem>
                    <SelectItem value="low">Low - Minor Issue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Complaint Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the issue in detail..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label>Location *</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder={location ? `${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}` : "Click to capture GPS location"}
                    value={location ? `${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}` : ""}
                    readOnly
                    required
                  />
                  <Button type="button" onClick={getLocation} variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Location
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enable location services for accurate complaint mapping
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="House/Building name, Street, Area" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="City" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input id="district" placeholder="District" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" placeholder="XXXXXX" />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="media">Upload Photos/Videos (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
                  <Input
                    id="media"
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    className="hidden"
                  />
                  <Label htmlFor="media" className="cursor-pointer">
                    <span className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </span>
                    <br />
                    <span className="text-xs text-muted-foreground">
                      Max file size: 10MB per file
                    </span>
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Submit Complaint
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" size="lg">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Information Card */}
        <Card className="mt-6 bg-muted/50 border-primary/20 animate-fade-in">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              What happens next?
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You'll receive a unique Ticket ID via SMS and email</li>
              <li>• Our team will verify and prioritize your complaint</li>
              <li>• You can track progress in real-time using your Ticket ID</li>
              <li>• You'll be notified at each stage of resolution</li>
              <li>• Typical resolution time: 2-48 hours based on priority</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Complaints;

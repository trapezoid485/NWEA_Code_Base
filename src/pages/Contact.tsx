import React, { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [ngoContactConsent, setNgoContactConsent] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [truthfulnessConfirmed, setTruthfulnessConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message encrypted and sent",
      description: "We'll respond securely as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-whistleblower-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="w-full max-w-3xl mx-auto">
          <Alert className="mb-8 border-whistleblower-accent/30 bg-whistleblower-accent/15 p-6 text-base">
            <AlertDescription className="text-base font-medium">
              <p className="text-xl font-semibold mb-3 text-whistleblower-accent">Secure Contact</p>
              <p>Need assistance? Send us an end-to-end encrypted message through this form.</p>
              <p className="mt-3 font-bold">All messages are end-to-end encrypted. We never store your personal information without your consent.</p>
            </AlertDescription>
          </Alert>

          <Card className="border-whistleblower-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-whistleblower-accent text-black font-semibold">
                  <Lock className="h-4 w-4" />
                </div>
                <CardTitle className="text-xl">
                  Contact Form
                </CardTitle>
              </div>
              <CardDescription className="mt-2 text-muted-foreground">
                All messages are end-to-end encrypted for your security
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-whistleblower-accent" />
                      <Label htmlFor="email" className="text-sm font-bold">
                        Email Address (Optional)
                      </Label>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                            <Info className="h-4 w-4 text-whistleblower-accent" />
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="font-medium">Anonymous Email Options</h4>
                            <p className="text-sm text-muted-foreground">To maintain anonymity, consider using temporary email services like ProtonMail. You can create a new email account specifically for this report.</p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-whistleblower-muted border-whistleblower-border focus:border-whistleblower-accent"
                    />
                    <p className="text-xs text-muted-foreground">
                      Providing an email allows us to contact you for follow-up questions or updates. For privacy, consider using an anonymous email service.
                    </p>
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Brief description of your inquiry"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="bg-whistleblower-muted border-whistleblower-border focus:border-whistleblower-accent"
                    />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your issue or question. Do not include sensitive personal information unless necessary."
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="min-h-[200px] text-foreground bg-background border-whistleblower-border"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="ngo-contact" 
                      checked={ngoContactConsent} 
                      onCheckedChange={checked => setNgoContactConsent(checked === true)} 
                      className="data-[state=checked]:bg-whistleblower-accent data-[state=checked]:border-whistleblower-accent" 
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label htmlFor="ngo-contact" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#8E8D8A]">
                        I agree to be contacted by the NGO via the provided email address (Optional)
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Check this box if you consent to being contacted by our partner NGO for additional support or follow-up regarding your case.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox 
                      id="consent" 
                      checked={consentChecked} 
                      onCheckedChange={checked => setConsentChecked(checked === true)} 
                      className="data-[state=checked]:bg-whistleblower-accent data-[state=checked]:border-whistleblower-accent" 
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label htmlFor="consent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#8E8D8A]">
                        I consent to the processing of my personal data
                      </label>
                      <p className="text-xs text-muted-foreground">
                        By submitting this report, I consent to the processing of my personal data in accordance with the <Link to="/privacy-policy" className="text-whistleblower-accent hover:underline">Privacy Policy</Link>. I understand that my data will be processed only as necessary for investigating my report.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox 
                      id="truthfulness" 
                      checked={truthfulnessConfirmed} 
                      onCheckedChange={checked => setTruthfulnessConfirmed(checked === true)} 
                      className="data-[state=checked]:bg-whistleblower-accent data-[state=checked]:border-whistleblower-accent" 
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label htmlFor="truthfulness" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#8E8D8A]">
                        I confirm that the information and documentation provided in this report is truthful and honest
                      </label>
                      <p className="text-xs text-muted-foreground">
                        I understand that there may be labor and criminal consequences if I <span className="font-bold">intentionally</span> submit false or misleading information.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    <span>End-to-end encryption applied automatically upon submission</span>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={!message.trim() || !subject.trim() || !consentChecked || !truthfulnessConfirmed}
                    className="bg-whistleblower-accent text-white hover:bg-whistleblower-hover"
                  >
                    Send Encrypted Message
                  </Button>
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-whistleblower-border pt-4 text-sm text-muted-foreground">
                <div>
                  Secure communication channel for support and inquiries
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

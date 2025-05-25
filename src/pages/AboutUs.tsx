import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Users, Shield, Globe } from "lucide-react";
const AboutUs = () => {
  return <div className="min-h-screen flex flex-col bg-whistleblower-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          <Alert className="mb-8 border-whistleblower-accent/30 bg-whistleblower-accent/15 p-6 text-base">
            <AlertDescription className="text-base font-medium">
              <p className="text-xl font-semibold mb-3 text-whistleblower-accent">About Our Organization</p>
              <p>Learn more about our mission to protect whistleblowers and you fundamental rights in an effort promote transparency.</p>
            </AlertDescription>
          </Alert>

          <div className="grid gap-8">
            <Card className="border-whistleblower-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-whistleblower-accent text-black font-semibold">
                    <Users className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-muted-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </CardContent>
            </Card>

            <Card className="border-whistleblower-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-whistleblower-accent text-black font-semibold">
                    <Shield className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-xl">Our Values</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Confidentiality</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula rutrum ex, in imperdiet dolor auctor vel.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Integrity</h3>
                    <p className="text-muted-foreground">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Transparency</h3>
                    <p className="text-muted-foreground">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-whistleblower-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-whistleblower-accent text-black font-semibold">
                    <Globe className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-xl">Our Impact</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <p className="text-muted-foreground mb-4">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <p className="text-muted-foreground">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default AboutUs;
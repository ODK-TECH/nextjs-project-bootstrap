"use client";

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const { strings } = useLanguage();

  const features = [
    {
      title: strings.digitalPayments,
      description: "Secure mobile money integration and contactless payment solutions for safer transactions.",
      icon: "💳"
    },
    {
      title: strings.onlineMarketplace,
      description: "Connect with customers and suppliers through our digital marketplace platform.",
      icon: "🛒"
    },
    {
      title: strings.microloans,
      description: "Access quick microloans and financial support to keep your business running.",
      icon: "💰"
    },
    {
      title: strings.businessTraining,
      description: "Learn crisis management and business recovery strategies from experts.",
      icon: "📚"
    },
    {
      title: strings.deliveryCoordination,
      description: "Coordinate deliveries and logistics to reach customers safely.",
      icon: "🚚"
    },
    {
      title: "Offline Support",
      description: "Access essential features even with limited internet connectivity.",
      icon: "📱"
    }
  ];

  const incomeSourcesSupported = [
    strings.smallScaleFarming,
    strings.pettyTrading,
    strings.personalServices,
    strings.transportation,
    strings.retail
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {strings.heroTitle}
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            {strings.heroSubtitle}
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {strings.heroDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/dashboard">
                {strings.getStarted}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/training">
                {strings.learnMore}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Income Sources Supported */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12">
            Supporting Nigeria's Key Income Sources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {incomeSourcesSupported.map((source, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">
                    {['🌾', '🏪', '👥', '🚗', '🛍️'][index]}
                  </div>
                  <h4 className="font-semibold text-lg">{source}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-4">
            Digital Solutions for Business Recovery
          </h3>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Comprehensive tools designed to address the top COVID-19 business challenges facing Nigerian entrepreneurs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Addressed */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-8">
            Addressing Key COVID-19 Business Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { challenge: strings.lossOfCustomers, solution: "Customer connection tools" },
              { challenge: strings.movementRestrictions, solution: "Digital service delivery" },
              { challenge: strings.supplyChainDisruptions, solution: "Alternative supplier networks" },
              { challenge: strings.lackOfCapital, solution: "Microloan access" },
              { challenge: strings.marketClosures, solution: "Online marketplace" }
            ].map((item, index) => (
              <Card key={index} className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">
                    {item.challenge}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium">
                    ✓ {item.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Recover and Grow Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Nigerian entrepreneurs who are building resilient businesses with our digital tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/dashboard">
                Access Dashboard
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/marketplace">
                Explore Marketplace
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

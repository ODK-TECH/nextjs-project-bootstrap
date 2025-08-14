"use client";

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageSelector';
import { IncomeSourceCard } from '@/components/IncomeSourceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Challenge {
  id: string;
  name: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
}

export default function DashboardPage() {
  const { strings } = useLanguage();
  const [selectedChallenge, setSelectedChallenge] = useState<{
    challengeId: string;
    incomeSource: string;
  } | null>(null);

  const handleChallengeClick = (challengeId: string, incomeSource: string) => {
    setSelectedChallenge({ challengeId, incomeSource });
    toast.success(`Opening tools for ${challengeId} in ${incomeSource}`);
  };

  const incomeSourcesData = [
    {
      title: strings.smallScaleFarming,
      description: "Agricultural activities including crop cultivation, livestock, and poultry farming.",
      icon: "🌾",
      challenges: [
        {
          id: "customer-loss-farming",
          name: strings.lossOfCustomers,
          severity: "high" as const,
          description: "Reduced demand for agricultural products due to market disruptions and restaurant closures."
        },
        {
          id: "movement-restrictions-farming", 
          name: strings.movementRestrictions,
          severity: "high" as const,
          description: "Limited access to farms and difficulty transporting goods to markets."
        },
        {
          id: "supply-chain-farming",
          name: strings.supplyChainDisruptions,
          severity: "medium" as const,
          description: "Shortage of seeds, fertilizers, and farming equipment due to supply chain issues."
        },
        {
          id: "capital-farming",
          name: strings.lackOfCapital,
          severity: "high" as const,
          description: "Reduced income affecting ability to purchase farming inputs for next season."
        }
      ]
    },
    {
      title: strings.pettyTrading,
      description: "Small-scale retail and wholesale trading activities in local markets.",
      icon: "🏪",
      challenges: [
        {
          id: "customer-loss-trading",
          name: strings.lossOfCustomers,
          severity: "high" as const,
          description: "Decreased foot traffic and reduced purchasing power of customers."
        },
        {
          id: "market-closures-trading",
          name: strings.marketClosures,
          severity: "high" as const,
          description: "Temporary or permanent closure of local markets and trading centers."
        },
        {
          id: "supply-chain-trading",
          name: strings.supplyChainDisruptions,
          severity: "medium" as const,
          description: "Difficulty sourcing goods from suppliers and wholesalers."
        },
        {
          id: "capital-trading",
          name: strings.lackOfCapital,
          severity: "medium" as const,
          description: "Reduced cash flow affecting ability to restock inventory."
        }
      ]
    },
    {
      title: strings.personalServices,
      description: "Individual service providers including hairdressing, tailoring, and repairs.",
      icon: "👥",
      challenges: [
        {
          id: "customer-loss-services",
          name: strings.lossOfCustomers,
          severity: "high" as const,
          description: "Clients avoiding close-contact services due to health concerns."
        },
        {
          id: "movement-restrictions-services",
          name: strings.movementRestrictions,
          severity: "medium" as const,
          description: "Limited mobility affecting ability to reach clients or operate from fixed locations."
        },
        {
          id: "capital-services",
          name: strings.lackOfCapital,
          severity: "medium" as const,
          description: "Reduced income affecting ability to maintain equipment and supplies."
        }
      ]
    },
    {
      title: strings.transportation,
      description: "Commercial transportation services including taxis, buses, and delivery services.",
      icon: "🚗",
      challenges: [
        {
          id: "customer-loss-transport",
          name: strings.lossOfCustomers,
          severity: "high" as const,
          description: "Reduced travel demand due to lockdowns and remote work arrangements."
        },
        {
          id: "movement-restrictions-transport",
          name: strings.movementRestrictions,
          severity: "high" as const,
          description: "Government restrictions on movement and transportation services."
        },
        {
          id: "capital-transport",
          name: strings.lackOfCapital,
          severity: "high" as const,
          description: "Difficulty maintaining vehicles and paying for fuel with reduced income."
        }
      ]
    },
    {
      title: strings.retail,
      description: "Retail businesses including shops, boutiques, and small commercial establishments.",
      icon: "🛍️",
      challenges: [
        {
          id: "customer-loss-retail",
          name: strings.lossOfCustomers,
          severity: "high" as const,
          description: "Reduced consumer spending and shift to online shopping."
        },
        {
          id: "market-closures-retail",
          name: strings.marketClosures,
          severity: "medium" as const,
          description: "Forced closure of non-essential retail businesses during lockdowns."
        },
        {
          id: "supply-chain-retail",
          name: strings.supplyChainDisruptions,
          severity: "medium" as const,
          description: "Delays in receiving inventory from suppliers and manufacturers."
        },
        {
          id: "capital-retail",
          name: strings.lackOfCapital,
          severity: "high" as const,
          description: "Cash flow problems affecting ability to pay rent and restock inventory."
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Apply for Microloan",
      description: "Quick access to emergency funding",
      action: "financial",
      icon: "💰"
    },
    {
      title: "Find New Customers",
      description: "Connect with buyers in your area",
      action: "marketplace", 
      icon: "🤝"
    },
    {
      title: "Learn Digital Skills",
      description: "Free training on digital business tools",
      action: "training",
      icon: "📚"
    },
    {
      title: "Set Up Digital Payments",
      description: "Accept mobile money and card payments",
      action: "financial",
      icon: "💳"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{strings.dashboard}</h1>
        <p className="text-xl text-muted-foreground">
          Access tools and resources tailored to your business challenges
        </p>
      </div>

      {/* Alert for COVID-19 Support */}
      <Alert className="mb-8 border-primary">
        <AlertDescription className="text-base">
          <strong>COVID-19 Business Support:</strong> Get immediate help with the most common challenges facing Nigerian businesses. 
          Select your income source below to access targeted solutions.
        </AlertDescription>
      </Alert>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{action.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Income Sources Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Your Business Sector</h2>
        <p className="text-muted-foreground mb-8">
          Select your primary income source to access challenge-specific tools and resources.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {incomeSourcesData.map((source, index) => (
            <IncomeSourceCard
              key={index}
              title={source.title}
              description={source.description}
              icon={source.icon}
              challenges={source.challenges}
              onChallengeClick={handleChallengeClick}
            />
          ))}
        </div>
      </div>

      {/* Selected Challenge Details */}
      {selectedChallenge && (
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Challenge Solution Tools</CardTitle>
              <CardDescription>
                Addressing {selectedChallenge.challengeId} in {selectedChallenge.incomeSource}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto p-4 flex flex-col items-start">
                  <span className="font-semibold mb-1">Digital Solutions</span>
                  <span className="text-sm opacity-90">Online tools and platforms</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <span className="font-semibold mb-1">Financial Support</span>
                  <span className="text-sm opacity-90">Loans and grants</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <span className="font-semibold mb-1">Training Resources</span>
                  <span className="text-sm opacity-90">Skills and knowledge</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Support Information */}
      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Need Additional Support?</h3>
          <p className="text-muted-foreground mb-4">
            Our support team is available to help you navigate these tools and find the best solutions for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline">Contact Support</Button>
            <Button variant="outline">Join Community Forum</Button>
            <Button variant="outline">Schedule Consultation</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

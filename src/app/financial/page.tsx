"use client";

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';

export default function FinancialPage() {
  const { strings } = useLanguage();

  const handleApply = (solutionTitle: string) => {
    toast.success(`Application started for ${solutionTitle}`);
  };

  const financialSolutions = [
    {
      id: 'covid-relief-loan',
      title: 'COVID-19 Business Relief Loan',
      description: 'Emergency funding for businesses affected by COVID-19 restrictions.',
      provider: 'Nigerian Development Bank',
      maxAmount: '₦500,000',
      interestRate: '5% per annum',
      processingTime: '3-5 business days',
      category: 'Microloan'
    },
    {
      id: 'quick-cash-loan',
      title: 'Quick Cash Microloan',
      description: 'Fast access to working capital for immediate business needs.',
      provider: 'Microfinance Partners',
      maxAmount: '₦200,000',
      interestRate: '8% per annum',
      processingTime: '24-48 hours',
      category: 'Microloan'
    },
    {
      id: 'women-business-grant',
      title: 'Women in Business Grant',
      description: 'Non-repayable grants for women-owned small businesses.',
      provider: 'Federal Ministry of Women Affairs',
      maxAmount: '₦100,000',
      interestRate: 'No interest (Grant)',
      processingTime: '2-3 weeks',
      category: 'Grant'
    },
    {
      id: 'digital-payment-setup',
      title: 'Digital Payment Integration',
      description: 'Set up mobile money and card payment systems for your business.',
      provider: 'Payment Solutions Ltd',
      maxAmount: 'Free setup',
      interestRate: '1.5% transaction fee',
      processingTime: 'Same day',
      category: 'Payment'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{strings.financial}</h1>
        <p className="text-xl text-muted-foreground">
          Access microloans, grants, and digital payment solutions to support your business
        </p>
      </div>

      <Alert className="mb-8 border-primary">
        <AlertDescription className="text-base">
          <strong>COVID-19 Financial Support Available:</strong> Special relief programs and reduced interest rates 
          are available for businesses affected by the pandemic.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {financialSolutions.map((solution) => (
          <Card key={solution.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {solution.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {solution.processingTime}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {solution.description}
              </CardDescription>
              
              <div className="space-y-3 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Max Amount:</span>
                    <div className="text-primary font-semibold">{solution.maxAmount}</div>
                  </div>
                  <div>
                    <span className="font-medium">Rate:</span>
                    <div className="text-muted-foreground">{solution.interestRate}</div>
                  </div>
                </div>
                
                <div>
                  <span className="font-medium text-sm">Provider:</span>
                  <div className="text-sm text-muted-foreground">{solution.provider}</div>
                </div>
              </div>
              
              <Button 
                className="w-full"
                onClick={() => handleApply(solution.title)}
              >
                {strings.applyNow}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Financial Management Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <span className="font-semibold mb-1">Budget Planning</span>
              <span className="text-sm opacity-90">Learn to manage business finances</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <span className="font-semibold mb-1">Credit Building</span>
              <span className="text-sm opacity-90">Improve your credit score</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <span className="font-semibold mb-1">Investment Tips</span>
              <span className="text-sm opacity-90">Grow your business profits</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

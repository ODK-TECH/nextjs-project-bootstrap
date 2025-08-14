"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from './LanguageSelector';

interface Challenge {
  id: string;
  name: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
}

interface IncomeSourceCardProps {
  title: string;
  description: string;
  icon: string;
  challenges: Challenge[];
  onChallengeClick: (challengeId: string, incomeSource: string) => void;
}

export function IncomeSourceCard({ 
  title, 
  description, 
  icon, 
  challenges, 
  onChallengeClick 
}: IncomeSourceCardProps) {
  const { strings } = useLanguage();

  const getSeverityColor = (severity: Challenge['severity']) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getSeverityText = (severity: Challenge['severity']) => {
    switch (severity) {
      case 'high': return 'High Impact';
      case 'medium': return 'Medium Impact';
      case 'low': return 'Low Impact';
      default: return 'Unknown';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{icon}</span>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-base mt-1">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Current Challenges
          </h4>
          <div className="space-y-3">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h5 className="font-medium text-sm leading-tight">{challenge.name}</h5>
                  <Badge variant={getSeverityColor(challenge.severity)} className="text-xs">
                    {getSeverityText(challenge.severity)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {challenge.description}
                </p>
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={() => onChallengeClick(challenge.id, title)}
                >
                  Address Challenge
                </Button>
              </div>
            ))}
          </div>
          <div className="pt-2 border-t">
            <Button variant="outline" className="w-full">
              {strings.viewDetails}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

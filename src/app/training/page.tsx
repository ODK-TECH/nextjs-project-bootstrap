"use client";

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

interface TrainingResource {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'video' | 'guide' | 'webinar';
  completed?: boolean;
}

export default function TrainingPage() {
  const { strings } = useLanguage();
  const [completedTrainings, setCompletedTrainings] = useState<string[]>([]);

  const handleStartTraining = (trainingId: string, title: string) => {
    toast.success(`Starting training: ${title}`);
    if (!completedTrainings.includes(trainingId)) {
      setCompletedTrainings([...completedTrainings, trainingId]);
    }
  };

  const trainingResources: TrainingResource[] = [
    {
      id: 'covid-business-recovery',
      title: 'COVID-19 Business Recovery Strategies',
      description: 'Learn proven strategies to recover and rebuild your business after COVID-19 disruptions.',
      category: 'Crisis Management',
      duration: '45 minutes',
      level: 'Beginner',
      type: 'video'
    },
    {
      id: 'digital-marketing-basics',
      title: 'Digital Marketing for Small Businesses',
      description: 'Master social media marketing, online advertising, and customer engagement techniques.',
      category: 'Marketing',
      duration: '60 minutes',
      level: 'Beginner',
      type: 'video'
    },
    {
      id: 'financial-management',
      title: 'Financial Management & Budgeting',
      description: 'Learn to manage cash flow, create budgets, and make informed financial decisions.',
      category: 'Finance',
      duration: '30 minutes',
      level: 'Intermediate',
      type: 'guide'
    },
    {
      id: 'supply-chain-resilience',
      title: 'Building Resilient Supply Chains',
      description: 'Strategies to diversify suppliers and create backup plans for supply disruptions.',
      category: 'Operations',
      duration: '40 minutes',
      level: 'Intermediate',
      type: 'video'
    },
    {
      id: 'customer-retention',
      title: 'Customer Retention During Crisis',
      description: 'Techniques to maintain customer relationships and loyalty during difficult times.',
      category: 'Customer Service',
      duration: '35 minutes',
      level: 'Beginner',
      type: 'webinar'
    },
    {
      id: 'digital-payments-setup',
      title: 'Setting Up Digital Payment Systems',
      description: 'Step-by-step guide to accepting mobile money, card payments, and online transfers.',
      category: 'Technology',
      duration: '25 minutes',
      level: 'Beginner',
      type: 'guide'
    },
    {
      id: 'farming-modern-techniques',
      title: 'Modern Farming Techniques',
      description: 'Improve crop yields and reduce costs with modern agricultural practices.',
      category: 'Agriculture',
      duration: '50 minutes',
      level: 'Intermediate',
      type: 'video'
    },
    {
      id: 'online-selling-platforms',
      title: 'Selling on Online Platforms',
      description: 'Learn to sell your products on Jumia, Konga, and social media platforms.',
      category: 'E-commerce',
      duration: '40 minutes',
      level: 'Beginner',
      type: 'video'
    }
  ];

  const categories = [...new Set(trainingResources.map(r => r.category))];
  
  const getTypeIcon = (type: TrainingResource['type']) => {
    switch (type) {
      case 'video': return '🎥';
      case 'guide': return '📖';
      case 'webinar': return '🎤';
      default: return '📚';
    }
  };

  const getLevelColor = (level: TrainingResource['level']) => {
    switch (level) {
      case 'Beginner': return 'secondary';
      case 'Intermediate': return 'default';
      case 'Advanced': return 'destructive';
      default: return 'outline';
    }
  };

  const TrainingCard = ({ resource }: { resource: TrainingResource }) => {
    const isCompleted = completedTrainings.includes(resource.id);
    
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getTypeIcon(resource.type)}</span>
              <div>
                <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={getLevelColor(resource.level)} className="text-xs">
                    {resource.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {resource.duration}
                  </Badge>
                  {isCompleted && (
                    <Badge variant="secondary" className="text-xs">
                      ✓ Completed
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-4 leading-relaxed">
            {resource.description}
          </CardDescription>
          
          <div className="mb-4">
            <span className="text-sm font-medium">Category: </span>
            <span className="text-sm text-muted-foreground">{resource.category}</span>
          </div>
          
          <Button 
            className="w-full"
            variant={isCompleted ? "outline" : "default"}
            onClick={() => handleStartTraining(resource.id, resource.title)}
          >
            {isCompleted ? "Review Training" : "Start Training"}
          </Button>
        </CardContent>
      </Card>
    );
  };

  const progressPercentage = (completedTrainings.length / trainingResources.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{strings.training}</h1>
        <p className="text-xl text-muted-foreground">
          Build resilience with business recovery tips, crisis management guides, and sector-specific training
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Your Learning Progress</h3>
            <span className="text-sm text-muted-foreground">
              {completedTrainings.length} of {trainingResources.length} completed
            </span>
          </div>
          <Progress value={progressPercentage} className="mb-2" />
          <p className="text-sm text-muted-foreground">
            {Math.round(progressPercentage)}% complete
          </p>
        </CardContent>
      </Card>

      {/* Quick Start Recommendations */}
      <Card className="mb-8 border-primary">
        <CardHeader>
          <CardTitle>🚀 Recommended for COVID-19 Recovery</CardTitle>
          <CardDescription>
            Start with these essential trainings to quickly adapt your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <span className="font-semibold mb-1">🎥 Business Recovery</span>
              <span className="text-sm opacity-90">Essential strategies first</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <span className="font-semibold mb-1">💳 Digital Payments</span>
              <span className="text-sm opacity-90">Accept online payments</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <span className="font-semibold mb-1">📱 Digital Marketing</span>
              <span className="text-sm opacity-90">Reach more customers</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Training Categories */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Crisis Management">Crisis</TabsTrigger>
          <TabsTrigger value="Marketing">Marketing</TabsTrigger>
          <TabsTrigger value="Finance">Finance</TabsTrigger>
          <TabsTrigger value="Technology">Tech</TabsTrigger>
          <TabsTrigger value="Agriculture">Farming</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingResources.map(resource => (
              <TrainingCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingResources
                .filter(resource => resource.category === category)
                .map(resource => (
                  <TrainingCard key={resource.id} resource={resource} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Support Resources */}
      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Additional Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <span className="text-2xl mb-2">👥</span>
              <span className="font-semibold mb-1">Community Forum</span>
              <span className="text-sm opacity-90">Connect with peers</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <span className="text-2xl mb-2">📞</span>
              <span className="font-semibold mb-1">Expert Consultation</span>
              <span className="text-sm opacity-90">One-on-one guidance</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <span className="text-2xl mb-2">📋</span>
              <span className="font-semibold mb-1">Business Templates</span>
              <span className="text-sm opacity-90">Ready-to-use tools</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <span className="text-2xl mb-2">📈</span>
              <span className="font-semibold mb-1">Progress Tracking</span>
              <span className="text-sm opacity-90">Monitor your growth</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

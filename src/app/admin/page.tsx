"use client";

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

interface BusinessData {
  id: string;
  businessName: string;
  sector: string;
  location: string;
  challenges: string[];
  supportReceived: string[];
  status: 'Active' | 'At Risk' | 'Recovering' | 'Closed';
  lastUpdate: string;
}

interface SupportProgram {
  id: string;
  name: string;
  type: 'Financial' | 'Training' | 'Market Access' | 'Digital Tools';
  budget: string;
  beneficiaries: number;
  status: 'Active' | 'Planned' | 'Completed';
}

export default function AdminPage() {
  const { strings } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30days');

  const handleDeployAid = (programId: string, programName: string) => {
    toast.success(`Deploying aid program: ${programName}`);
  };

  const businessData: BusinessData[] = [
    {
      id: 'b1',
      businessName: 'Kaduna Fresh Farms',
      sector: 'Small-Scale Farming',
      location: 'Kaduna',
      challenges: ['Supply Chain Disruptions', 'Loss of Customers'],
      supportReceived: ['Microloan', 'Digital Marketing Training'],
      status: 'Recovering',
      lastUpdate: '2024-01-15'
    },
    {
      id: 'b2',
      businessName: 'Lagos Fashion Hub',
      sector: 'Personal Services',
      location: 'Lagos',
      challenges: ['Movement Restrictions', 'Lack of Capital'],
      supportReceived: ['Digital Payment Setup'],
      status: 'At Risk',
      lastUpdate: '2024-01-14'
    },
    {
      id: 'b3',
      businessName: 'Abuja Transport Co.',
      sector: 'Transportation',
      location: 'Abuja',
      challenges: ['Loss of Customers', 'Movement Restrictions'],
      supportReceived: ['COVID Relief Loan', 'Business Recovery Training'],
      status: 'Active',
      lastUpdate: '2024-01-16'
    }
  ];

  const supportPrograms: SupportProgram[] = [
    {
      id: 'p1',
      name: 'COVID-19 Emergency Relief Fund',
      type: 'Financial',
      budget: '₦50,000,000',
      beneficiaries: 1250,
      status: 'Active'
    },
    {
      id: 'p2',
      name: 'Digital Skills Training Initiative',
      type: 'Training',
      budget: '₦15,000,000',
      beneficiaries: 800,
      status: 'Active'
    },
    {
      id: 'p3',
      name: 'Online Marketplace Integration',
      type: 'Market Access',
      budget: '₦8,000,000',
      beneficiaries: 450,
      status: 'Planned'
    },
    {
      id: 'p4',
      name: 'Mobile Payment Adoption Program',
      type: 'Digital Tools',
      budget: '₦12,000,000',
      beneficiaries: 600,
      status: 'Active'
    }
  ];

  const regions = ['all', 'Lagos', 'Abuja', 'Kano', 'Kaduna', 'Port Harcourt', 'Ibadan'];
  const sectors = ['all', 'Small-Scale Farming', 'Petty Trading', 'Personal Services', 'Transportation', 'Retail'];

  const getStatusColor = (status: BusinessData['status']) => {
    switch (status) {
      case 'Active': return 'secondary';
      case 'Recovering': return 'default';
      case 'At Risk': return 'destructive';
      case 'Closed': return 'outline';
      default: return 'outline';
    }
  };

  const getProgramStatusColor = (status: SupportProgram['status']) => {
    switch (status) {
      case 'Active': return 'secondary';
      case 'Planned': return 'outline';
      case 'Completed': return 'default';
      default: return 'outline';
    }
  };

  const filteredBusinesses = businessData.filter(business => {
    const matchesRegion = selectedRegion === 'all' || business.location === selectedRegion;
    const matchesSector = selectedSector === 'all' || business.sector === selectedSector;
    return matchesRegion && matchesSector;
  });

  const challengeStats = {
    'Loss of Customers': 45,
    'Movement Restrictions': 38,
    'Supply Chain Disruptions': 32,
    'Lack of Capital': 41,
    'Market Closures': 28
  };

  const sectorStats = {
    'Small-Scale Farming': 35,
    'Petty Trading': 28,
    'Personal Services': 22,
    'Transportation': 18,
    'Retail': 25
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Government/NGO Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Monitor business challenges and deploy targeted aid across Nigeria
        </p>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Businesses</p>
                <p className="text-3xl font-bold">2,847</p>
              </div>
              <div className="text-3xl">🏢</div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">At Risk</p>
                <p className="text-3xl font-bold text-destructive">486</p>
              </div>
              <div className="text-3xl">⚠️</div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">-8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Aid Deployed</p>
                <p className="text-3xl font-bold">₦85M</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">This quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Beneficiaries</p>
                <p className="text-3xl font-bold">3,100</p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Across all programs</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Region</Label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>
                      {region === 'all' ? 'All Regions' : region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Sector</Label>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map(sector => (
                    <SelectItem key={sector} value={sector}>
                      {sector === 'all' ? 'All Sectors' : sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Timeframe</Label>
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="1year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="challenges" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="challenges">Challenge Analysis</TabsTrigger>
          <TabsTrigger value="businesses">Business Monitoring</TabsTrigger>
          <TabsTrigger value="programs">Support Programs</TabsTrigger>
          <TabsTrigger value="deployment">Aid Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Challenges by Frequency</CardTitle>
                <CardDescription>Most reported challenges across all sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(challengeStats).map(([challenge, percentage]) => (
                    <div key={challenge}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{challenge}</span>
                        <span>{percentage}%</span>
                      </div>
                      <Progress value={percentage} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sector Impact Distribution</CardTitle>
                <CardDescription>Businesses affected by sector</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(sectorStats).map(([sector, percentage]) => (
                    <div key={sector}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{sector}</span>
                        <span>{percentage}%</span>
                      </div>
                      <Progress value={percentage} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="businesses" className="mt-6">
          <div className="space-y-4">
            {filteredBusinesses.map(business => (
              <Card key={business.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{business.businessName}</h3>
                      <p className="text-muted-foreground">{business.sector} • {business.location}</p>
                    </div>
                    <Badge variant={getStatusColor(business.status)}>
                      {business.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Current Challenges</h4>
                      <div className="flex flex-wrap gap-2">
                        {business.challenges.map(challenge => (
                          <Badge key={challenge} variant="destructive" className="text-xs">
                            {challenge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Support Received</h4>
                      <div className="flex flex-wrap gap-2">
                        {business.supportReceived.map(support => (
                          <Badge key={support} variant="secondary" className="text-xs">
                            {support}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <span className="text-sm text-muted-foreground">
                      Last updated: {business.lastUpdate}
                    </span>
                    <Button size="sm">Deploy Additional Aid</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="programs" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {supportPrograms.map(program => (
              <Card key={program.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <CardDescription>{program.type}</CardDescription>
                    </div>
                    <Badge variant={getProgramStatusColor(program.status)}>
                      {program.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Budget:</span>
                      <span className="text-sm">{program.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Beneficiaries:</span>
                      <span className="text-sm">{program.beneficiaries.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4"
                    onClick={() => handleDeployAid(program.id, program.name)}
                  >
                    Manage Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deployment" className="mt-6">
          <Alert className="mb-6">
            <AlertDescription>
              <strong>Emergency Deployment:</strong> Use this section to quickly deploy targeted aid to businesses 
              facing critical challenges. All deployments are logged and tracked.
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Aid Deployment</CardTitle>
                <CardDescription>Deploy immediate assistance to affected businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex flex-col">
                      <span className="text-2xl mb-1">💰</span>
                      <span className="text-sm">Emergency Loans</span>
                    </Button>
                    <Button className="h-20 flex flex-col">
                      <span className="text-2xl mb-1">📚</span>
                      <span className="text-sm">Training Programs</span>
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex flex-col">
                      <span className="text-2xl mb-1">🛒</span>
                      <span className="text-sm">Market Access</span>
                    </Button>
                    <Button className="h-20 flex flex-col">
                      <span className="text-2xl mb-1">💳</span>
                      <span className="text-sm">Digital Tools</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Deployments</CardTitle>
                <CardDescription>Latest aid deployments and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium text-sm">Emergency Relief - Lagos</p>
                      <p className="text-xs text-muted-foreground">₦2.5M to 50 businesses</p>
                    </div>
                    <Badge variant="secondary">Deployed</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium text-sm">Digital Training - Kano</p>
                      <p className="text-xs text-muted-foreground">120 participants</p>
                    </div>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium text-sm">Market Access - Abuja</p>
                      <p className="text-xs text-muted-foreground">30 businesses connected</p>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

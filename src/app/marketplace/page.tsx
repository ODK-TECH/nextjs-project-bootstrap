"use client";

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface MarketplaceListing {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  contact: string;
  type: 'product' | 'service' | 'buyer-request';
  price?: string;
  urgent?: boolean;
}

export default function MarketplacePage() {
  const { strings } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleConnect = (listing: MarketplaceListing) => {
    toast.success(`Connecting you with ${listing.title}`);
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'agriculture', label: 'Agriculture & Farming' },
    { value: 'food', label: 'Food & Beverages' },
    { value: 'services', label: 'Personal Services' },
    { value: 'transport', label: 'Transportation' },
    { value: 'retail', label: 'Retail & Trading' }
  ];

  const sampleListings: MarketplaceListing[] = [
    {
      id: '1',
      title: 'Fresh Tomatoes - Bulk Supply',
      description: 'High-quality tomatoes from our farm in Kaduna. Available for bulk purchase.',
      category: 'agriculture',
      location: 'Kaduna',
      contact: 'WhatsApp: +234 801 234 5678',
      type: 'product',
      price: '₦15,000 per basket',
      urgent: true
    },
    {
      id: '2',
      title: 'Mobile Tailoring Services',
      description: 'Professional tailoring services. I come to your location with my sewing machine.',
      category: 'services',
      location: 'Lagos',
      contact: 'Call: +234 802 345 6789',
      type: 'service'
    },
    {
      id: '3',
      title: 'Looking for Food Supplier',
      description: 'Restaurant seeking consistent supplier for vegetables and rice.',
      category: 'food',
      location: 'Abuja',
      contact: 'Email: restaurant@example.com',
      type: 'buyer-request',
      urgent: true
    }
  ];

  const filteredListings = sampleListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || listing.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{strings.marketplace}</h1>
        <p className="text-xl text-muted-foreground">
          Connect with suppliers, customers, and service providers across Nigeria
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Search</label>
              <Input
                placeholder="Search products and services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredListings.map(listing => (
          <Card key={listing.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg">{listing.title}</CardTitle>
                {listing.urgent && (
                  <Badge variant="destructive" className="text-xs">
                    Urgent
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {categories.find(c => c.value === listing.category)?.label}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {listing.location}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {listing.description}
              </CardDescription>
              
              {listing.price && (
                <div className="mb-3">
                  <span className="text-primary font-semibold">{listing.price}</span>
                </div>
              )}
              
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">{listing.contact}</span>
              </div>
              
              <Button 
                className="w-full"
                onClick={() => handleConnect(listing)}
              >
                {strings.connect}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to List Your Products or Services?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of Nigerian businesses connecting through our marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              List a Product
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Offer a Service
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

const mockBuddies = [
  { name: 'Sameer Khan', preparingFor: ['JEE Advanced', 'BITSAT'], avatar: '/avatars/04.png' },
  { name: 'Anika Reddy', preparingFor: ['NEET', 'AIIMS'], avatar: '/avatars/05.png' },
  { name: 'Vikram Singh', preparingFor: ['JEE Advanced'], avatar: '/avatars/06.png' },
];

export function StudyBuddyFinder() {
  const [exam, setExam] = useState('');
  const [results, setResults] = useState<typeof mockBuddies>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!exam) return;
    setIsSearching(true);
    setTimeout(() => {
      setResults(mockBuddies.filter(b => b.preparingFor.some(e => e.toLowerCase().includes(exam))));
      setIsSearching(false);
    }, 1000);
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Users className="text-primary" />
          Study Buddy Finder
        </CardTitle>
        <CardDescription>
          Connect with peers preparing for the same entrance exams.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Select onValueChange={setExam}>
            <SelectTrigger className="w-full sm:w-[240px]">
              <SelectValue placeholder="Select an exam" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jee">JEE Advanced</SelectItem>
              <SelectItem value="neet">NEET</SelectItem>
              <SelectItem value="bitsat">BITSAT</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch} disabled={isSearching || !exam} className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" />
            {isSearching ? 'Finding...' : 'Find Buddies'}
          </Button>
        </div>

        {results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in-50">
            {results.map((buddy) => (
              <Card key={buddy.name} className="p-4 text-center bg-muted/50">
                <Avatar className="mx-auto h-20 w-20 mb-2">
                  <AvatarImage src={buddy.avatar} alt={buddy.name} />
                  <AvatarFallback>{buddy.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-bold">{buddy.name}</p>
                <div className="flex gap-1 justify-center flex-wrap mt-2">
                    {buddy.preparingFor.map(e => <Badge key={e} variant="secondary">{e}</Badge>)}
                </div>
                <Button variant="outline" size="sm" className="mt-4">Connect</Button>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

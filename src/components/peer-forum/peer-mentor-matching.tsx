"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Search, UserCheck } from 'lucide-react';

const mockMentors = [
  { name: 'Arjun Verma', year: '2nd Year', field: 'Computer Science', university: 'IIT Bombay', avatar: '/avatars/01.png' },
  { name: 'Priya Sharma', year: '3rd Year', field: 'Mechanical Engineering', university: 'IIT Delhi', avatar: '/avatars/02.png' },
  { name: 'Rohan Joshi', year: '1st Year', field: 'Electrical Engineering', university: 'IIT Madras', avatar: '/avatars/03.png' },
];

export function PeerMentorMatching() {
  const [field, setField] = useState('');
  const [results, setResults] = useState<typeof mockMentors>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!field) return;
    setIsSearching(true);
    setTimeout(() => {
      setResults(mockMentors);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <UserCheck className="text-primary" />
          Peer Mentor Matching
        </CardTitle>
        <CardDescription>
          Find a college student 1-3 years senior who took a similar academic path.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Select onValueChange={setField}>
            <SelectTrigger className="w-full sm:w-[240px]">
              <SelectValue placeholder="Select a field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="mech">Mechanical Engineering</SelectItem>
              <SelectItem value="elec">Electrical Engineering</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch} disabled={isSearching || !field} className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" />
            {isSearching ? 'Searching...' : 'Find Mentors'}
          </Button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4 animate-in fade-in-50">
            <h3 className="font-semibold">Matching Mentors:</h3>
            {results.map((mentor) => (
              <Card key={mentor.name} className="p-4 flex justify-between items-center bg-muted/50">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{mentor.name}</p>
                    <p className="text-sm text-muted-foreground">{`${mentor.year}, ${mentor.field}`}</p>
                    <p className="text-xs text-muted-foreground/80">{mentor.university}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Connect <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

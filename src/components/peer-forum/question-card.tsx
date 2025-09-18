"use client";

import type { ForumQuestion, ForumAnswer as ForumAnswerType } from '@/lib/forum-data';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { ArrowBigUp, MessageSquare, CornerDownRight, Flag } from 'lucide-react';
import { formatDistanceToNowStrict } from 'date-fns';
import Link from 'next/link';
import { ForumAnswer } from './forum-answer';
import { Textarea } from '../ui/textarea';
import { Separator } from '../ui/separator';

export function QuestionCard({ question }: { question: ForumQuestion }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Link href={`/peer-to-peer-forum/question/${question.id}`} className="block">
            <CardTitle className="text-xl font-bold hover:text-primary transition-colors">{question.text}</CardTitle>
          </Link>
          <Button variant="ghost" size="icon" className="flex-shrink-0">
            <Flag className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={question.author.avatarUrl} />
            <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{question.isAnonymous ? 'Anonymous' : question.author.name}</span>
          <span>•</span>
          <span>{formatDistanceToNowStrict(question.timestamp)} ago</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" onClick={() => setShowAnswers(!showAnswers)}>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>{question.answers.length} {question.answers.length === 1 ? 'Answer' : 'Answers'}</span>
          </Button>
        </div>
      </CardContent>
      {showAnswers && (
        <div className="px-6 pb-6">
          <Separator className="my-4" />
          <div className="space-y-4">
            {question.answers.map(answer => (
              <ForumAnswer key={answer.id} answer={answer} />
            ))}
            
            <div className="flex items-start gap-4 pt-4">
              <Avatar className="h-8 w-8">
                {/* Replace with current user avatar */}
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="w-full space-y-2">
                <Textarea placeholder="Write your answer..." className="text-sm" />
                <div className="flex justify-end">
                  <Button size="sm">Post Answer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
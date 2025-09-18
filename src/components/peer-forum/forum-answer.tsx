"use client";

import type { ForumAnswer as ForumAnswerType } from '@/lib/forum-data';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { ArrowBigUp, CornerDownRight } from 'lucide-react';
import { formatDistanceToNowStrict } from 'date-fns';
import { cn } from '@/lib/utils';
import { Textarea } from '../ui/textarea';

export function ForumAnswer({ answer }: { answer: ForumAnswerType }) {
  const [upvoted, setUpvoted] = useState(false);
  const [replying, setReplying] = useState(false);

  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src={answer.author.avatarUrl} />
        <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">{answer.author.name}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{formatDistanceToNowStrict(answer.timestamp)} ago</span>
        </div>
        <p className="text-sm text-foreground/90 mt-1">{answer.text}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="ghost" size="sm" onClick={() => setUpvoted(!upvoted)} className="flex items-center gap-1 px-2 h-7">
            <ArrowBigUp className={cn("h-4 w-4", upvoted && "fill-primary text-primary")} />
            <span className="text-xs">{answer.upvotes + (upvoted ? 1 : 0)}</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setReplying(!replying)} className="flex items-center gap-1 px-2 h-7">
            <CornerDownRight className="h-4 w-4" />
            <span className="text-xs">Reply</span>
          </Button>
        </div>
        
        {replying && (
           <div className="flex items-start gap-4 pt-4">
              <Avatar className="h-6 w-6">
                {/* Replace with current user avatar */}
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="w-full space-y-2">
                <Textarea placeholder={`Replying to ${answer.author.name}...`} className="text-sm" />
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost" onClick={() => setReplying(false)}>Cancel</Button>
                  <Button size="sm">Post Reply</Button>
                </div>
              </div>
            </div>
        )}

        {answer.replies && answer.replies.length > 0 && (
          <div className="mt-4 space-y-4 pl-8 border-l border-primary/20">
            {answer.replies.map(reply => (
              <ForumAnswer key={reply.id} answer={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
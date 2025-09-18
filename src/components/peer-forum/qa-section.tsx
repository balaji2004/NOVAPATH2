
"use client";

import { useState } from 'react';
import { forumQuestions, forumTags } from '@/lib/forum-data';
import { Button } from '../ui/button';
import { PlusCircle, Tag, X } from 'lucide-react';
import { QuestionCard } from './question-card';
import { QAPlatform } from './qa-platform';
import { AnimatePresence, motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

export function QASection() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredQuestions = selectedTags.length > 0
    ? forumQuestions.filter(q => selectedTags.every(tag => q.tags.includes(tag)))
    : forumQuestions;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold font-headline holographic-text">Q&A Forum</h2>
        <Button onClick={() => setShowQuestionForm(!showQuestionForm)}>
          <PlusCircle className="mr-2 h-5 w-5" />
          {showQuestionForm ? 'Close' : 'Ask a Question'}
        </Button>
      </div>
      
      <AnimatePresence>
        {showQuestionForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mb-8 overflow-hidden"
          >
            <QAPlatform />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mb-8 p-4 rounded-lg glass-card">
          <div className='flex items-center gap-2 mb-3'>
            <Tag className='h-5 w-5 text-primary' />
            <h3 className="font-semibold text-lg">Filter by Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {forumTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'secondary'}
                onClick={() => toggleTag(tag)}
                className="cursor-pointer transition-all"
              >
                {tag}
                {selectedTags.includes(tag) && <X className="ml-2 h-3 w-3" />}
              </Badge>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <Button variant="ghost" size="sm" className="mt-3 text-xs" onClick={() => setSelectedTags([])}>Clear Filters</Button>
          )}
      </div>

      <div className="space-y-6">
        {filteredQuestions
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
          .map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        {filteredQuestions.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
                <p className="font-semibold">No questions found for the selected tags.</p>
                <p className="text-sm">Try removing some filters to see more results.</p>
            </div>
        )}
      </div>
    </div>
  );
}

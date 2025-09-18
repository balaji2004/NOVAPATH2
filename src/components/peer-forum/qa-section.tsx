"use client";

import { useState } from 'react';
import { forumQuestions } from '@/lib/forum-data';
import { Button } from '../ui/button';
import { PlusCircle } from 'lucide-react';
import { QuestionCard } from './question-card';
import { QAPlatform } from './qa-platform';
import { AnimatePresence, motion } from 'framer-motion';

export function QASection() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);

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
      
      <div className="space-y-6">
        {forumQuestions
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
          .map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
      </div>
    </div>
  );
}
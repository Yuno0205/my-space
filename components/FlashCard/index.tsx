'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Settings,
  List,
} from 'lucide-react';

export default function Component() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  // Sample flashcard data
  const flashcards = [
    { front: 'What is the capital of France?', back: 'Paris' },
    { front: "Who wrote 'Romeo and Juliet'?", back: 'William Shakespeare' },
    { front: 'What is the chemical symbol for gold?', back: 'Au' },
  ];

  const flipCard = () => setIsFlipped(!isFlipped);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard(
      (prev) => (prev - 1 + flashcards.length) % flashcards.length
    );
    setIsFlipped(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Flashcards</h2>
        <ul className="space-y-2">
          {flashcards.map((card, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              {card.front}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Study Set</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Flashcard */}
        <Card
          className="flex-1 flex items-center justify-center cursor-pointer"
          onClick={flipCard}
        >
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold">
              {isFlipped
                ? flashcards[currentCard].back
                : flashcards[currentCard].front}
            </div>
          </CardContent>
        </Card>

        {/* Navigation controls */}
        <div className="flex justify-between items-center mt-4">
          <Button onClick={prevCard} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {currentCard + 1} / {flashcards.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentCard(0)}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={nextCard} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress bar */}
        <Progress
          value={((currentCard + 1) / flashcards.length) * 100}
          className="mt-4"
        />
      </div>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, X } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import { askAi } from '@/app/chat/actions';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      <Send />
    </Button>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const [state, formAction] = useFormState(askAi, { response: '' });

  useEffect(() => {
    if (state.response) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: state.response },
      ]);
    }
  }, [state]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleFormSubmit = (formData: FormData) => {
    const userInput = formData.get('message') as string;
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: userInput }]);
    formAction(formData);
    formRef.current?.reset();
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="w-8 h-8" />
        <span className="sr-only">Open Chat</span>
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 h-[28rem] flex flex-col shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-xl">Study Hub Assistant</CardTitle>
          <CardDescription>Ask me anything!</CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-4 pr-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex gap-3 text-sm',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full bg-primary text-primary-foreground items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </span>
                )}
                <div
                  className={cn(
                    'rounded-lg px-3 py-2',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  {message.content}
                </div>
                 {message.role === 'user' && (
                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full bg-muted items-center justify-center">
                    <User className="h-5 w-5" />
                  </span>
                )}
              </div>
            ))}
            {useFormStatus().pending && (
               <div className="flex gap-3 text-sm justify-start">
                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full bg-primary text-primary-foreground items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </span>
                   <div className="rounded-lg px-3 py-2 bg-muted">...</div>
               </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          ref={formRef}
          action={handleFormSubmit}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            name="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
          />
          <SubmitButton />
        </form>
      </CardFooter>
    </Card>
  );
}

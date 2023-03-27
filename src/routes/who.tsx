import React from 'react'
import { ScrollArea } from '../components/ui/scrollarea';

const Whow = () => {
  return (
    <ScrollArea>
      <main className="flex-col gap-5  select-none h-full w-full flex justify-center px-10 items-center text-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/justlogo.svg" className="w-28" alt="" />
          <h1 className="text-4xl">We are</h1>
          <img src="/name.png" alt="" />
        </div>
        <p className="px-20">
          Our society is a shadowy and exclusive collective of individuals who
          reject mediocrity and strive for excellence in all aspects of their
          lives. We operate outside the bounds of society, using our skills and
          talents to achieve our goals without drawing unwanted attention. If
          you're ready to take control of your life and achieve your wildest
          aspirations, join us and become a part of something truly
          extraordinary
        </p>
      </main>
    </ScrollArea>
  );
}

export default Whow




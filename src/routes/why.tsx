import React from 'react'
import { ScrollArea } from '../components/ui/scrollarea';

const Why = () => {
  return (    <ScrollArea>

    <main className="flex-col gap-5  select-none h-full w-full flex justify-center px-10 items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <img src="/justlogo.svg" className="w-28" alt="" />
        <h1 className="text-4xl">Why ?</h1>
      </div>
      <p className="px-20 text-xs">
        we believe that excellence is not just a goal, but a way of life.
        <div>
          We understand that success is not guaranteed, and that it requires
          hard work, dedication, and a willingness to push beyond our limits.
        </div>
        <div>
          We also recognize that our country may not have the same resources or
          opportunities as other nations, which could hold us back and prevent
          us from reaching our full potential.
        </div>
        <div>
          However, we refuse to accept this as an excuse for mediocrity. We
          believe that through hard work and determination, we can overcome any
          obstacle and achieve greatness. We reject the idea that we are
          powerless, and instead, we take ownership of our future by working
          tirelessly to make our country the best in the world.
        </div>
        <div>
          Our commitment to excellence is rooted in the belief that we have a
          responsibility to ourselves, our communities, and our country.
        </div>
        <div>
          We believe that by achieving excellence in all areas of our lives, we
          can set an example for others to follow and contribute to the growth
          and development of our nation.
        </div>
        <div>
          In short, we do what we do because we refuse to settle for anything
          less than excellence. We recognize that the road ahead may be
          challenging, but we embrace the journey and remain steadfast in our
          commitment to making our country the best it can be.
        </div>
      </p>
    </main>    </ScrollArea>

  );
}

export default Why
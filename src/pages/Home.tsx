import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutMe } from '../components/sections/AboutMe';
import { TechStack } from '../components/sections/TechStack';
import { Projects } from '../components/sections/Projects';
import { Career } from '../components/sections/Career';

export const Home = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Career />
    </main>
  );
};

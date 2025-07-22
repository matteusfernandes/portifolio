'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TypewriterText } from '@/components/TypewriterText';
import { AnimatedElement } from '@/components/AnimatedElement';

export default function Home() {
  return (
    <div className="page-layout bg-gradient-main text-white font-mono relative overflow-hidden">
      <Navigation />

      <main className="main-container-layout flex-1">
        <div className="w-full h-full">
          {/* Greeting */}
          <div className="mb-8">
            <TypewriterText 
              text="Olá mundo..."
              speed={80}
              className="text-light-gray text-lg mb-4"
            />

            {/* Main heading */}
            <AnimatedElement animation="slide-in-left" delay={1000} as="h1" className="name-typography text-white mb-6">
              <div>Matteus</div>
              <div className="second-line">Fernandes</div>
            </AnimatedElement>

            {/* Subtitle */}
            <h2 className="subtitle-typography text-purple mb-8 flex items-center">
              <span className="text-purple mr-2">{'>'}</span>
              <TypewriterText 
                text="Desenvolvedor Full Stack"
                speed={60}
                delay={2000}
                showCursor={false}
              />
            </h2>
          </div>

          {/* Tech stack comment */}
          <AnimatedElement animation="fade-in-up" delay={2000}>
            <div className="mb-6">
              <p className="tech-stack-typography text-light-gray">
                <TypewriterText 
                  text="// Full Stack | Node.js | React |"
                  speed={40}
                  delay={3000}
                  showCursor={false}
                />
                <br />
                <TypewriterText 
                  text="Javascript | Express | MongoDB | SQL"
                  speed={40}
                  delay={4500}
                  showCursor={false}
                />
              </p>
            </div>
          </AnimatedElement>

          {/* Code snippet */}
          <AnimatedElement animation="fade-in-up" delay={2500}>
            <div className="inline-block code-snippet-container">
              <p className="code-snippet-typography">
                <span className="text-purple">const</span>{' '}
                <span className="text-aqua-green">githubLink</span>{' '}
                <span className="text-light-gray">=</span>{' '}
                <span className="text-soft-pink">
                  <TypewriterText 
                    text='"https://github.com/matteusfernandes"'
                    speed={30}
                    delay={6000}
                    showCursor={false}
                  />
                </span>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </main>

      <Footer />
    </div>
  );
}

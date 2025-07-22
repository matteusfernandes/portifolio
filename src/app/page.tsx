import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="page-layout bg-gradient-main text-white font-mono relative overflow-hidden">
      <Navigation />

      <main className="main-container-layout flex-1">
        <div className="w-full h-full">
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-light-gray text-lg mb-4">Olá mundo...</p>

            {/* Main heading */}
            <h1 className="name-typography text-white mb-6">
              <div>Matteus</div>
              <div className="second-line">Fernandes</div>
            </h1>

            {/* Subtitle */}
            <h2 className="subtitle-typography text-purple mb-8 flex items-center">
              <span className="text-purple mr-2">{'>'}</span>
              Desenvolvedor Full Stack
            </h2>
          </div>

          {/* Tech stack comment */}
          <div className="mb-6">
            <p className="tech-stack-typography text-light-gray">
              {'// Full Stack | Node.js | React |'}
              <br />
              Javascript | Express | MongoDB | SQL
            </p>
          </div>

          {/* Code snippet */}
          <div className="inline-block">
            <p className="code-snippet-typography">
              <span className="text-purple">const</span>{' '}
              <span className="text-aqua-green">githubLink</span>{' '}
              <span className="text-light-gray">=</span>{' '}
              <span className="text-soft-pink">
                &quot;https://github.com/matteusfernandes&quot;
              </span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

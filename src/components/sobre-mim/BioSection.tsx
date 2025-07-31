import { AnimatedElement } from '@/components/AnimatedElement';
import { TypewriterText } from '@/components/TypewriterText';
import { CodeCommentBlock } from '@/components/CodeCommentBlock';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: React.ReactNode;
  children?: FileItem[];
}

export const BioSection: FileItem[] = [
  {
    id: 'pessoal',
    name: '_bio',
    type: 'folder',
    children: [
      {
        id: 'bio',
        name: 'bio.txt',
        type: 'file',
        content: (
          <AnimatedElement delay={0.1} animation="fade-in-up">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  <TypewriterText text="Sobre mim" speed={100} />
                </h1>
                <div className="text-light-gray">
                  <TypewriterText 
                    text="// Desenvolvedor Full Stack apaixonado por tecnologia" 
                    speed={50} 
                    delay={1000}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Informações Pessoais`}</h3>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>👋 Olá! Sou Matteus Fernandes</p>
                  <p>🎂 Idade: 34 anos</p>
                  <p>📍 Localização: Guanambi - Bahia - Brasil</p>
                  <p>💼 Função: Desenvolvedor Full Stack</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Sobre`}</h3>
                <CodeCommentBlock 
                  content={`Como Desenvolvedor Fullstack, busco constantemente desenvolver minha carreira sob a supervisão e o estímulo de empresas comprometidas com a inovação. Minha formação em desenvolvimento web Full Stack pela Trybe (2021-2022) me capacitou com habilidades sólidas em front-end, incluindo HTML, CSS, Javascript e React, e back-end, dominando Node.js, Express, Python, MongoDB e SQL.\n
                  Ao longo da minha experiência profissional como autônomo, fui responsável pelo desenvolvimento e manutenção de projetos cruciais. Por exemplo, no "Shaping The Future - Albert Sabin", implementei soluções tecnológicas personalizadas focadas na organização de projetos escolares, otimizando funcionalidades e garantindo uma experiência eficiente para os usuários por três anos consecutivos\n
                  Minhas experiências anteriores em liderança, como Presidente do Rotaract Club de Guanambi e Presidente da OAB Jovem (OAB-Guanambi), me proporcionaram noções valiosas de liderança e trabalho em equipe, que busco aprimorar continuamente. Estou pronto para aplicar minha formação no desenvolvimento de soluções críticas e contribuir para equipes inovadoras.`}
                  startLine={1}
                />
              </div>
            </div>
          </AnimatedElement>
        )
      }
    ]
  }
];
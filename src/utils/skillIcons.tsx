import React from 'react';

export interface SkillIcon {
  icon: React.ReactElement;
  color: string;
}

export const getSkillIcon = (skill: string): SkillIcon => {
  const skillIcons: Record<string, SkillIcon> = {
    'React': {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001Z"></path></svg>,
      color: 'bg-cyan-500'
    },
    'Redux': {
      icon: <span className="text-white font-bold text-lg">R</span>,
      color: 'bg-purple-600'
    },
    'JavaScript': {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="black"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>,
      color: 'bg-yellow-500'
    },
    'CSS': {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>,
      color: 'bg-blue-600'
    },
    'Node.js': {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"></path></svg>,
      color: 'bg-green-600'
    },
    'Express': {
      icon: <span className="text-white font-bold text-lg">E</span>,
      color: 'bg-gray-700'
    },
    'MySQL': {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153z"></path></svg>,
      color: 'bg-blue-800'
    },
    'Hooks': {
      icon: <span className="text-white font-bold text-lg">H</span>,
      color: 'bg-cyan-600'
    },
    'Context API': {
      icon: <span className="text-white font-bold text-lg">C</span>,
      color: 'bg-orange-600'
    },
    'Class Components': {
      icon: <span className="text-white font-bold text-lg">CC</span>,
      color: 'bg-indigo-600'
    },
    'File System': {
      icon: <span className="text-white font-bold text-lg">FS</span>,
      color: 'bg-yellow-700'
    }
  };

  return skillIcons[skill] || { 
    icon: <span className="text-white font-bold text-lg">{skill[0]}</span>, 
    color: 'bg-gray-600' 
  };
};

export const extractCategoriesFromProjects = (projects: Array<{ category: string }>): string[] => {
  return ['all', ...new Set(projects.map(p => p.category.split(' - ')[0]))];
};

export const extractTechnologiesFromProjects = (projects: Array<{ skills: string[] }>): string[] => {
  return ['all', ...new Set(projects.flatMap(p => p.skills))];
};

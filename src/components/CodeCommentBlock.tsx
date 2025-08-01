'use client';

interface CodeCommentBlockProps {
  content: string;
  startLine?: number;
}

export const CodeCommentBlock: React.FC<CodeCommentBlockProps> = ({ content, startLine = 1 }) => {
  const wrapText = (text: string, maxLength: number = 60): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        if (currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          lines.push(word);
        }
      }
    });
    
    if (currentLine) {
      lines.push(currentLine);
    }
    
    return lines;
  };

  const paragraphs = content.split('\n\n').filter(p => p.trim());
  const allLines: string[] = ['/**'];
  
  paragraphs.forEach((paragraph, paragraphIndex) => {
    const wrappedLines = wrapText(paragraph.trim());
    wrappedLines.forEach(line => {
      allLines.push(` * ${line}`);
    });
    
    // Adiciona linha em branco entre parágrafos (exceto no último)
    if (paragraphIndex < paragraphs.length - 1) {
      allLines.push(' *');
    }
  });
  
  allLines.push(' */');
  
  return (
    <div className="text-gray-500 text-sm font-mono flex">
      {/* Numeração das linhas */}
      <div className="text-gray-600 text-right pr-4 select-none">
        {allLines.map((_, index) => (
          <div key={index}>{startLine + index}</div>
        ))}
      </div>
      {/* Conteúdo do comentário */}
      <div className="flex-1">
        {allLines.map((line, index) => (
          <div key={index}>
            <span className="text-gray-500">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
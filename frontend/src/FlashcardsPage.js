import React, { useEffect } from 'react';

const FlashcardsPage = () => {
  useEffect(() => {
    // Load the flashcard HTML content
    const loadFlashcards = async () => {
      try {
        const response = await fetch('/icelandic-flashcards.html');
        const htmlContent = await response.text();
        
        // Extract the body content and scripts
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        
        // Get the flashcard container content
        const flashcardContainer = doc.querySelector('#lw-flashcards');
        const styles = doc.querySelector('style');
        const scripts = doc.querySelector('script');
        
        if (styles) {
          document.head.appendChild(styles);
        }
        
        if (flashcardContainer) {
          const container = document.getElementById('flashcard-root');
          if (container) {
            container.innerHTML = flashcardContainer.outerHTML;
          }
        }
        
        if (scripts) {
          const scriptElement = document.createElement('script');
          scriptElement.textContent = scripts.textContent;
          document.body.appendChild(scriptElement);
        }
      } catch (error) {
        console.error('Failed to load flashcards:', error);
      }
    };
    
    loadFlashcards();
  }, []);

  return (
    <div id="flashcard-root" style={{ width: '100%', height: '100vh' }}>
      <div>Loading flashcards...</div>
    </div>
  );
};

export default FlashcardsPage;
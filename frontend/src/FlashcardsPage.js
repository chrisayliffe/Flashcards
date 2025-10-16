import React from 'react';

const FlashcardsPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe 
        src="/icelandic-flashcards.html"
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          margin: 0,
          padding: 0
        }}
        title="Icelandic Flashcards"
      />
    </div>
  );
};

export default FlashcardsPage;
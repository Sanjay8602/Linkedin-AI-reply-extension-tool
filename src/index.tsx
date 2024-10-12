import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from './components/modal';
import './index.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  return (
    <div>
      {isModalOpen && textareaRef.current && (
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} textarea={textareaRef.current} />
      )}
      <div className="fixed bottom-4 right-4">
        <button onClick={showModal} className="p-2 bg-blue-500 text-white rounded-full">
          AI
        </button>
      </div>
      <textarea ref={textareaRef} className="w-full p-4 mt-4 border" placeholder="Type here..." />
    </div>
  );
};

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from './components/modal';
import './index.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  return (
    <div>
      {isModalOpen && <Modal onClose={hideModal} />}
      <div className="fixed bottom-4 right-4">
        <button onClick={showModal} className="p-2 bg-blue-500 text-white rounded-full">
          AI
        </button>
      </div>
    </div>
  );
};

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);

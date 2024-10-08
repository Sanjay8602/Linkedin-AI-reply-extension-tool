import React, { useState } from 'react';

const Modal = ({ onClose }: { onClose: () => void }) => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const generateResponse = () => {
    setResponse('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">AI Response Generator</h2>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter your command"
        />
        <button onClick={generateResponse} className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate
        </button>
        <div className="mt-4">
          {response && (
            <>
              <p className="bg-gray-100 p-2 rounded">{response}</p>
              <button
                onClick={() => navigator.clipboard.writeText(response)}
                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              >
                Insert
              </button>
            </>
          )}
        </div>
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-red-500">
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;

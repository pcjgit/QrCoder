import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
  const [text, setText] = useState('https://reactjs.org/');

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to generate QR code"
        />
      </div>
      <div className="qr-container">
        {text ? (
          <QRCodeSVG value={text} size={256} />
        ) : (
          <p>Please enter some text</p>
        )}
      </div>
    </div>
  );
}

export default App;

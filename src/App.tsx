import { useState, useDeferredValue, useMemo } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
  const [text, setText] = useState('https://reactjs.org/');
  const deferredText = useDeferredValue(text);

  const qrCode = useMemo(() => {
    return deferredText ? (
      <QRCodeSVG value={deferredText} size={256} />
    ) : (
      <p>Please enter some text</p>
    );
  }, [deferredText]);

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
        {qrCode}
      </div>
    </div>
  );
}

export default App;

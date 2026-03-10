import { useState } from "react";
import { decodeMorse } from "./morse";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [warning, setWarning] = useState<string | null>(null);

  const handleDecode = () => {
    const result = decodeMorse(input);
    setOutput(result.output);
    setWarning(result.warning);
    if (result.warning) console.warn(result.warning);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setWarning(null);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Morse Code Decoder</h1>

      <label>Morse Input</label>
      <textarea
        id="morse-input"
        rows={6}
        style={{ width: "100%", fontSize: "1rem", marginTop: "0.5rem" }}
        placeholder="Paste Morse code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={handleDecode}
          style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}
        >
          Decode
        </button>
        <button
          onClick={handleClear}
          style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}
        >
          Clear
        </button>
      </div>

      {warning && <p style={{ color: "red", marginTop: "1rem" }}>{warning}</p>}

      <label style={{ marginTop: "1rem", display: "block" }}>
        Decoded Output
      </label>
      <textarea
        id="decoded-output"
        rows={4}
        value={output}
        style={{
          width: "100%",
          fontSize: "1rem",
          marginTop: "0.5rem",
          background: "#f9f9f9",
          border: "1px solid #ccc",
          whiteSpace: "pre-wrap",
          color: "black",
        }}
      />
    </div>
  );
}

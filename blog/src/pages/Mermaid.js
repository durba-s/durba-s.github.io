// Mermaid.js
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({ code }) {
  const ref = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, securityLevel: "loose" });
    mermaid.run({ nodes: [ref.current] });
  }, [code]);

  return <pre className="mermaid" ref={ref}>{code}</pre>;
}

"use client";
import { useState } from "react";


export default function TranslateDemo() {
  const [text, setText] = useState("Welcome to our tour site!");
  const [loading, setLoading] = useState(false);
  const [out, setOut] = useState<Record<string, string> | null>(null);

  async function run() {
    // setLoading(true);
    // try {
    //   const data = await translateClient(text, ["ar", "fr", "ur"], "en");
    //   setOut(data);
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <div className="space-y-3">
      <textarea
        className="w-full p-2 border rounded"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={run}
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Translating…" : "Translate"}
      </button>

      <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">
        {out ? JSON.stringify(out, null, 2) : "No result yet"}
      </pre>
    </div>
  );
}

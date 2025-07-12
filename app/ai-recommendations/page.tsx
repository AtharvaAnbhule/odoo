"use client";

import React, { useState } from "react";

export default function AIRecommendationsPage() {
  const [colorResult, setColorResult] = useState("");
  const [compatResponse, setCompatResponse] = useState("");
  const [imageURL, setImageURL] = useState("");

  const analyzeColor = (file: File) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < imageData.length; i += 4 * 100) { // Sample every 100th pixel
          r += imageData[i];
          g += imageData[i + 1];
          b += imageData[i + 2];
          count++;
        }

        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);

        const hex = rgbToHex(r, g, b);
        const tone = getToneCategory(r, g, b);

        const suggestion =
          tone === "cool"
            ? "🎨 Cool tone detected. Try pairing with white, beige, or grey bottoms."
            : "🎨 Warm tone detected. Try pairing with brown, maroon, or olive pieces.";

        setColorResult(`Detected Color: #${hex}. ${suggestion}`);
      };
    };
    reader.readAsDataURL(file);
  };

  const rgbToHex = (r: number, g: number, b: number) =>
    [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

  const getToneCategory = (r: number, g: number, b: number) =>
    (r + g + b) / 3 > 128 ? "cool" : "warm";

  const checkCompatibility = (input: string) => {
    const text = input.toLowerCase();
    let response = "🤖 Hmm, not sure. Try asking about color combinations.";

    if (text.includes("red") && text.includes("blue"))
      response = "✅ Red tops go well with blue denim jeans!";
    else if (text.includes("black") && text.includes("white"))
      response = "✅ Classic combo! Black and white always match.";
    else if (text.includes("yellow") && text.includes("green"))
      response =
        "⚠️ Be careful! Yellow and green can clash unless muted shades.";
    else if (text.includes("blue") && text.includes("grey"))
      response = "✅ Cool combo! Blue and grey pair nicely.";
    else if (text.includes("brown") && text.includes("maroon"))
      response = "✅ Warm and earthy tones—great match!";

    setCompatResponse(response);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">👗 AI Recommendations</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.length) {
            analyzeColor(e.target.files[0]);
            setImageURL(URL.createObjectURL(e.target.files[0]));
          }
        }}
        className="mb-3"
      />
      {imageURL && (
        <img src={imageURL} alt="Uploaded" className="w-32 h-auto mb-2" />
      )}
      {colorResult && <p className="mb-4">{colorResult}</p>}

      <input
        type="text"
        placeholder="Ask: Does red go with blue?"
        className="border p-2 w-full mb-2"
        onKeyDown={(e) => {
          if (e.key === "Enter") checkCompatibility((e.target as any).value);
        }}
      />
      {compatResponse && <p className="mt-2">{compatResponse}</p>}
    </div>
  );
}

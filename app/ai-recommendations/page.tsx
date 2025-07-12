"use client";

import React, { useState } from "react";

export default function AIRecommendationsPage() {
  const [colorResult, setColorResult] = useState("");
  const [compatResponse, setCompatResponse] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeColorWithCohere = async (file: File) => {
    setLoading(true);
    try {
      // First get the dominant color (you'll need to keep your existing color analysis code)
      const dominantColor = await getDominantColor(file);

      // Then ask Cohere for fashion advice based on that color
      const response = await fetch("https://api.cohere.ai/v1/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_COHERE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "command",
          message: `Give fashion advice for clothing with color ${dominantColor.hex}. 
          Suggest 2-3 color combinations, suitable occasions, and current trends. 
          Keep response concise under 100 words.`,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      setColorResult(`Color: #${dominantColor.hex}\n${data.text}`);
    } catch (error) {
      console.error("Cohere error:", error);
      setColorResult("Error analyzing color. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getDominantColor = (
    file: File
  ): Promise<{ hex: string; tone: string }> => {
    return new Promise((resolve) => {
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
          const imageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          ).data;

          let r = 0,
            g = 0,
            b = 0,
            count = 0;
          for (let i = 0; i < imageData.length; i += 4 * 100) {
            r += imageData[i];
            g += imageData[i + 1];
            b += imageData[i + 2];
            count++;
          }

          r = Math.floor(r / count);
          g = Math.floor(g / count);
          b = Math.floor(b / count);

          resolve({
            hex: [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join(""),
            tone: (r + g + b) / 3 > 128 ? "cool" : "warm",
          });
        };
      };
      reader.readAsDataURL(file);
    });
  };

  const checkCompatibilityWithCohere = async (input: string) => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("https://api.cohere.ai/v1/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_COHERE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "command",
          message: `As a fashion expert, answer this question: ${input}
          - Give specific color combination advice
          - Mention current trends
          - Keep response under 50 words
          - Format with emojis`,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      setCompatResponse(data.text);
    } catch (error) {
      console.error("Cohere error:", error);
      setCompatResponse("Error getting fashion advice. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">
        👗 AI Fashion Assistant (Cohere)
      </h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Upload Clothing Item
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.length) {
              analyzeColorWithCohere(e.target.files[0]);
              setImageURL(URL.createObjectURL(e.target.files[0]));
            }
          }}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-green-50 file:text-green-700
            hover:file:bg-green-100"
          disabled={loading}
        />
        {imageURL && (
          <img
            src={imageURL}
            alt="Uploaded"
            className="mt-2 w-32 h-auto rounded border"
          />
        )}
      </div>

      {colorResult && (
        <div className="mb-4 p-3 bg-gray-50 rounded">
          <pre className="text-sm whitespace-pre-wrap">{colorResult}</pre>
        </div>
      )}

      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">
          Ask Color Advice
        </label>
        <input
          type="text"
          placeholder="e.g., 'Does red go with blue?'"
          className="border p-2 w-full rounded"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              checkCompatibilityWithCohere(
                (e.target as HTMLInputElement).value
              );
            }
          }}
          disabled={loading}
        />
      </div>

      {compatResponse && (
        <div className="p-3 bg-blue-50 rounded">
          <p className="text-sm">{compatResponse}</p>
        </div>
      )}

      {loading && (
        <div className="mt-2 text-sm text-gray-500">Analyzing...</div>
      )}
    </div>
  );
}

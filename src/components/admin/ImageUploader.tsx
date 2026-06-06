"use client";

import { useState, useRef } from "react";
import { X, Upload, Loader2 } from "lucide-react";

interface Props {
  value: string[];
  onChange: (urls: string[]) => void;
}

export default function ImageUploader({ value, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFiles(files: FileList) {
    setUploading(true);
    const uploaded: string[] = [];

    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) uploaded.push(data.url);
    }

    onChange([...value, ...uploaded]);
    setUploading(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  }

  function removeImage(url: string) {
    onChange(value.filter((u) => u !== url));
  }

  function moveLeft(index: number) {
    if (index === 0) return;
    const next = [...value];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    onChange(next);
  }

  function moveRight(index: number) {
    if (index === value.length - 1) return;
    const next = [...value];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    onChange(next);
  }

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={`border-2 border-dashed rounded cursor-pointer flex flex-col items-center justify-center py-8 transition-colors ${
          dragOver ? "border-gold bg-gold/5" : "border-gray-200 hover:border-tan"
        }`}
      >
        {uploading ? (
          <Loader2 size={24} className="animate-spin text-tan mb-2" />
        ) : (
          <Upload size={24} className="text-tan mb-2" />
        )}
        <p className="text-xs font-ui text-tan">
          {uploading ? "Uploading…" : "Click or drag images here"}
        </p>
        <p className="text-[10px] text-gray-400 mt-1">PNG, JPG, WEBP — multiple allowed</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && uploadFiles(e.target.files)}
        />
      </div>

      {/* Previews */}
      {value.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {value.map((url, i) => (
            <div key={url} className="relative group">
              <img
                src={url}
                alt=""
                className="w-full aspect-square object-cover rounded border border-gray-100"
              />

              {/* Badge for first image */}
              {i === 0 && (
                <span className="absolute top-1 left-1 bg-gold text-void text-[9px] font-ui px-1.5 py-0.5 rounded">
                  Main
                </span>
              )}

              {/* Controls */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center gap-1">
                <button
                  type="button"
                  onClick={() => moveLeft(i)}
                  disabled={i === 0}
                  className="w-6 h-6 bg-white/80 text-ink rounded text-xs disabled:opacity-30 hover:bg-white"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => removeImage(url)}
                  className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600"
                >
                  <X size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => moveRight(i)}
                  disabled={i === value.length - 1}
                  className="w-6 h-6 bg-white/80 text-ink rounded text-xs disabled:opacity-30 hover:bg-white"
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function AddToCart() {
  const [addToCart, setAddToCart] = useState(0);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <button
          className="flex items-center justify-center rounded-md w-6 h-6 bg-slate-600 hover:bg-slate-700"
          onClick={() =>
            setAddToCart((prevValue) => {
              const newValue = prevValue - 1;
              if (newValue < 0) {
                return 0;
              }
              return newValue;
            })
          }
        >
          -
        </button>
        <button
          className="flex items-center justify-center rounded-md w-6 h-6 bg-slate-600 hover:bg-slate-700"
          onClick={() => setAddToCart(addToCart + 1)}
        >
          +
        </button>
      </div>
      <span>{addToCart}</span>
    </div>
  );
}

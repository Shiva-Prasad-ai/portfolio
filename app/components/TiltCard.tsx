"use client";

import { useState } from "react";

export default function TiltCard({ children }: { children: React.ReactNode }) {
    const [style, setStyle] = useState({});

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;

        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });
    };

    const reset = () => {
        setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
    };

    return (
        <div
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={style}
            className="transition-transform duration-200"
        >
            {children}
        </div>
    );
}
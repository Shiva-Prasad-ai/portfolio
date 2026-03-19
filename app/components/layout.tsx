"use client";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <html lang="en">
            <body>

                {/* Cursor Glow */}
                <div
                    className="fixed w-64 h-64 bg-blue-500/20 blur-3xl rounded-full pointer-events-none z-0"
                    style={{
                        left: pos.x - 128,
                        top: pos.y - 128,
                    }}
                />

                <div className="relative z-10">
                    {children}
                </div>

            </body>
        </html>
    );
}
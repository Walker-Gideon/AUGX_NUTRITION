import { useState, useEffect } from "react";

/**
 * useTypewriter
 *
 * A hook that animates text with a type → pause → erase → repeat loop.
 *
 * @param {string}  text        - The full text to animate.
 * @param {number}  typeSpeed   - Ms per character while typing.   Default: 80
 * @param {number}  eraseSpeed  - Ms per character while erasing.  Default: 40
 * @param {number}  pauseAfter  - Ms to pause once fully typed.    Default: 1800
 *
 * @returns {{ displayed: string, isDone: boolean }}
 *   displayed – the current visible slice of text
 *   isDone    – true only when the full text is currently shown (useful for showing icons / cursors)
 */
export function useTypewriter({
    text,
    typeSpeed = 80,
    eraseSpeed = 40,
    pauseAfter = 1800,
}) {
    const [displayed, setDisplayed] = useState("");
    const [phase, setPhase] = useState("typing"); // "typing" | "erasing"

    useEffect(() => {
        let timeout;

        if (phase === "typing") {
            if (displayed.length < text.length) {
                timeout = setTimeout(() => {
                    setDisplayed(text.slice(0, displayed.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setPhase("erasing"), pauseAfter);
            }
        } else if (phase === "erasing") {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(text.slice(0, displayed.length - 1));
                }, eraseSpeed);
            } else {
                setPhase("typing");
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, phase, text, typeSpeed, eraseSpeed, pauseAfter]);

    return { displayed, isDone: displayed === text };
}

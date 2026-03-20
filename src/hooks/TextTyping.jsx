import { useTypewriter } from "/src/hooks/useTypewriter";

export function TextTyping({ text, speed = 100 }) {
    const { displayed } = useTypewriter({
        text,
        typeSpeed: speed,
        eraseSpeed: speed,
        pauseAfter: Infinity, // type-once: never erase
    });

    return <span>{displayed}</span>;
}
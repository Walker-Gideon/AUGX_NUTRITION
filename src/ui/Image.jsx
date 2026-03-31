import { useState } from "react";

export default function Image({ source, alternate, classname }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <img 
            src={source} 
            alt={alternate} 
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`${classname} transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
        />
    );
}
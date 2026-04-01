import { useState } from "react";

export default function Image({ source, alternate, classname, priority = false }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <img 
            src={source} 
            alt={alternate} 
            loading={priority ? "eager" : "lazy"}
            fetchpriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`${classname} ${!priority && 'transition-opacity duration-1000 ease-in-out'} ${isLoaded || priority ? 'opacity-100' : 'opacity-0'}`} 
        />
    );
}
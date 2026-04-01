import { useState } from "react";

export default function Image({ source, alternate, classname, priority = false, width, height }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <img 
            src={source} 
            alt={alternate} 
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            className={`${classname} ${!priority && 'transition-all duration-1000 ease-in-out'} ${isLoaded || priority ? 'opacity-100' : 'opacity-0'}`} 
        />
    );
}
export default function Button({ children, classname, primary, padding, onclick, type, disabled, ariaLabel }) {
    const focusClass = "outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded";

    if (primary) {
        return <button aria-label={ariaLabel} disabled={disabled} onClick={onclick} className={`${focusClass} border rounded-full cursor-pointer text-xs font-headlines group transition-all uppercase font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed ${classname} ${padding ? `${padding}` : `py-3 middle:py-3.5 middle:px-6 px-4`}`}>{children}</button>;
    }

    if (type) {
        return <button aria-label={ariaLabel} disabled={disabled} type="submit" className={`${focusClass} disabled:opacity-50 disabled:cursor-not-allowed ${classname}`}>{children}</button>;
    }

    // Default
    return <button aria-label={ariaLabel} disabled={disabled} onClick={onclick} className={`${focusClass} cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${classname}`}>{children}</button>;
}   
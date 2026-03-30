export default function Button({ children, classname, primary, padding, onclick, type, disabled }) {
    if (primary) {
        return <button disabled={disabled} onClick={onclick} className={`border rounded-full cursor-pointer text-xs font-headlines group transition-all uppercase font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed ${classname} ${padding ? `${padding}` : `py-3 middle:py-3.5 middle:px-6 px-4`}`}>{children}</button>;
    }

    if (type) {
        return <button disabled={disabled} type="submit" className={`disabled:opacity-50 disabled:cursor-not-allowed ${classname}`}>{children}</button>;
    }

    // Default
    return <button disabled={disabled} onClick={onclick} className={`cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${classname}`}>{children}</button>;
}   
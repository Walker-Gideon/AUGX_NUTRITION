export default function Button({ children, classname, primary, padding, onclick, type }) {
    if (primary) {
        return <button onClick={onclick} className={`border rounded-full cursor-pointer text-xs font-headlines group transition-all uppercase font-semibold whitespace-nowrap ${classname} ${padding ? `${padding}` : `py-3 middle:py-3.5 middle:px-6 px-4`}`}>{children}</button>;
    }

    if (type) {
        return <button type="submit" className={classname}>{children}</button>;
    }

    // Default
    return <button onClick={onclick} className={`cursor-pointer ${classname}`}>{children}</button>;
}   
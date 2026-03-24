export default function Button({ children, classname, primary, padding, onclick, type }) {
    if (primary) {
        return <button onClick={onclick} className={`border border-white rounded-full cursor-pointer text-xs font-headlines group bg-white shadow-xl/30 hover:shadow-xl/40 transition-all uppercase font-semibold whitespace-nowrap ${classname} ${padding ? `${padding}` : `py-3 middle:py-3.5 middle:px-6 px-4`}`}>{children}</button>;
    }

    if (type) {
        return <button type="submit" className={classname}>{children}</button>;
    }

    // Default
    return <button onClick={onclick} className={classname}>{children}</button>;
}   
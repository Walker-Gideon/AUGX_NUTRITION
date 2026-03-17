export default function Button({ children, classname, primary, padding, onclick }) {
    if (primary) {
        return <button onClick={onclick} className={`border border-white rounded-full cursor-pointer text-xs medium:text-sm font-headlines group bg-white shadow-xl/30 hover:shadow-xl/40 transition-all uppercase font-semibold whitespace-nowrap ${classname} ${padding ? `${padding}` : `py-3 lg:px-6 px-4`}`}>{children}</button>;
    }

    // Default
    return <button onClick={onclick} className={classname}>{children}</button>;
}   
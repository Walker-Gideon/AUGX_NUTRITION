export default function Button({ children, classname, primary, padding }) {
    if (primary) {
        return <button className={`border border-white rounded-full cursor-pointer text-sm font-headlines group bg-white shadow-xl/30 hover:shadow-xl/40 transition-all ${classname} ${padding ? `${padding}` : `py-3 px-6`}`}>{children}</button>;
    }

    // Default
    return <button className={classname}>{children}</button>;
}   
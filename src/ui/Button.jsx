export default function Button({ children, classname, primary, padding, onclick }) {
    if (primary) {
        return <button onClick={onclick} className={`border border-white rounded-full cursor-pointer medium:text-sm font-headlines group bg-white shadow-xl/30 hover:shadow-xl/40 transition-all ${classname} ${padding ? `${padding}` : `py-3 px-6`}`}>{children}</button>;
    }

    // Default
    return <button onClick={onclick} className={classname}>{children}</button>;
}   
export default function Button({ children, classname, primary }) {
    if (primary) {
        return <button className={`border py-3 px-6 rounded-full cursor-pointer text-sm font-headlines group ${classname}`}>{children}</button>;
    }

    // Default
    return <button className={classname}>{children}</button>;
}   
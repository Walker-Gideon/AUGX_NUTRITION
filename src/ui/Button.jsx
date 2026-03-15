export default function Button({ children, classname, primary }) {
    if (primary) {
        return <button className={`border py-2 px-6 rounded-full cursor-pointer text-sm ${classname}`}>{children}</button>;
    }

    // Default
    return <button className={classname}>{children}</button>;
}   
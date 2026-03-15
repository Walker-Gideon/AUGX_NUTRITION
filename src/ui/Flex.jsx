export default function Flex({ children, classname, jsText, cText }) {
    if (jsText) {
        return <div className={`flex items-${cText} justify-${jsText} ${classname}`}>{children}</div>;
    }

    // Default
    return <div className={`flex ${classname}`}>{children}</div>;
}
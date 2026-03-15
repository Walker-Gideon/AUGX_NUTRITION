export default function HeaderTexts({ children, classname, secondary }) {
    if (secondary) {
        return <h2 className={classname}>{children}</h2>;
    }

    // Default
    return <h1 className={classname}>{children}</h1>;
}
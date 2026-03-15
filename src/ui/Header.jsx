export default function Header({ children, classname, main, jstext }) {
    if (main) {
        return (
            <header className={`flex items-center justify-${jstext} ${classname}`}>{children}</header>
        );
    }

    // Default
    return <header className={classname}>{children}</header>;
}
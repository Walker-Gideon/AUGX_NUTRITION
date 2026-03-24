export function UnorderedList({ children, classname }) {
    return <ul className={classname}>{children}</ul>;
}

export function ListItem({ children, classname }) {
    return <li className={classname}>{children}</li>;
}
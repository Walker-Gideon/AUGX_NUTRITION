export default function Flex({ children, classname }) {
    return <div className={`flex ${classname}`}>{children}</div>;
}
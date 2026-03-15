export default function Image({ source, alternate, classname }) {
    return <img src={source} alt={alternate} className={classname} />;
}
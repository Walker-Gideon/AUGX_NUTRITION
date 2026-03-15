export default function Container({ children, classname }) {
  return <div className={classname}>{children}</div>;
}
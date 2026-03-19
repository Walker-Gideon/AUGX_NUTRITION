export default function Container({ children, classname, section }) {
  if (section) {
    return <div id={section} className={classname}>{children}</div>;
  }

  return <div className={classname}>{children}</div>;
}
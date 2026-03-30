export default function FooterUi({ children, classname }) {
    return <footer id="footer" className={`bg-secondary text-white py-12 md:py-16 ${classname}`}>{children}</footer>;
}
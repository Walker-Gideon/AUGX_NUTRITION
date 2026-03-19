export default function HeaderTexts({ children, classname, secondary, type }) {
    const defaultStyling = {
        subHeading: "text-base medium:text-lg text-quaternary font-text", // w-full py-4 px-4 medium:px-16 middle:px-0 mb-6
    };

    if (secondary) {
        return <h2 className={`${defaultStyling[type]} ${classname}`}>{children}</h2>;
    }

    // Default
    return <h1 className={classname}>{children}</h1>;
}
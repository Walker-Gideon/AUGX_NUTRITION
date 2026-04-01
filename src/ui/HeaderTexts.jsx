export default function HeaderTexts({ children, classname, secondary, isH1, type }) {
    const defaultStyling = {
        subHeading: "text-base medium:text-lg text-quaternary font-text",
    };

    const style = type && defaultStyling[type] ? defaultStyling[type] : "";
    const finalClass = `${style} ${classname || ""}`.trim();

    if (isH1) {
        return <h1 className={finalClass}>{children}</h1>;
    }

    if (secondary) {
        return <h3 className={finalClass}>{children}</h3>;
    }

    // Default
    return <h2 className={finalClass}>{children}</h2>;
}
import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function BenefitsDisplay({ benefit, colSpan }) {
    return (
        <Group classname={`relative border border-border w-full h-56 p-4 flex flex-col justify-end overflow-hidden bg-quaternary ${colSpan}`}>
            {/* Image here */}
            <Group classname={"z-10 relative text-white"}>
                <HeaderTexts classname={"font-semibold md:text-lg font-headlines"}>{benefit.title}</HeaderTexts>
                <Paragraph classname={"text-white/90 text-sm font-text"}>{benefit.description}</Paragraph>
            </Group>
        </Group>
    );
}
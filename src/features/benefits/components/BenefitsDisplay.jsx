import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function BenefitsDisplay({ benefit, colSpan }) {
    return (
        <Group classname={`relative border border-border w-full h-56 p-4 flex flex-col justify-end overflow-hidden bg-quinary ${colSpan}`}>
            {/* Image here */}
            <div className="z-10 relative">
                <HeaderTexts>{benefit.title}</HeaderTexts>
                <Paragraph>{benefit.description}</Paragraph>
            </div>
        </Group>
    );
}
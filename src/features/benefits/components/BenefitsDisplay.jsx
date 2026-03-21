import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function BenefitsDisplay({ benefit, colSpan }) {
    return (
        <Group classname={`${colSpan}`}>
            {/* Image here */}
            <Group classname={"border border-border w-full h-56"}></Group>
            <Group classname={"hidden"}>
                <HeaderTexts>{benefit.title}</HeaderTexts>
                <Paragraph>{benefit.description}</Paragraph>
            </Group>
        </Group>
    );
}
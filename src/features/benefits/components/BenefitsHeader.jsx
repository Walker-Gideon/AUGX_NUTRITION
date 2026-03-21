import Group from "/src/ui/Group";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function BenefitsHeader() {
    return (
        <Group classname={"text-left space-y-3 mb-16 lg:mb-20"}>
            <HeaderTexts classname={"text-4xl medium:text-5xl font-headlines font-bold text-foreground"}>
                Why Choose AUGX?
            </HeaderTexts>
            <HeaderTexts secondary={true} type="subHeading" classname={""}>
                Premium supplements designed to support your fitness journey
            </HeaderTexts>
        </Group>
    );
}
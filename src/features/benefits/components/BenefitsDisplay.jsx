import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function BenefitsDisplay({ benefit, colSpan }) {
    return (
        <Group classname={`relative group border border-border w-full h-56 p-4 flex flex-col justify-end overflow-hidden cursor-pointer ${colSpan}`}>
            <img 
                src={benefit.image} 
                alt={benefit.title} 
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[5]" />

            <Group classname={"z-10 relative text-white"}>
                <HeaderTexts classname={"font-semibold md:text-lg font-headlines"}>{benefit.title}</HeaderTexts>
                <Paragraph classname={"text-white/90 text-sm font-text"}>{benefit.description}</Paragraph>
            </Group>
        </Group>
    );
}
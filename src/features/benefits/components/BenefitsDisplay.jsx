import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function BenefitsDisplay({ benefit }) {
    return (
        <Group classname={""}>
            {/* Image here */}
            <Group></Group>
            <Group>
                <HeaderTexts>{benefit.title}</HeaderTexts>
                <Paragraph>{benefit.description}</Paragraph>
            </Group>
        </Group>
    );
}

/*
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        */
import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";
import { handleOrder } from "/src/helpers/helpers";

export default function ProductCard({ product }) {
  return (
      <Card classname="" type="cards">
        <Group>
          {/* Product Icon || Image */}
          {/* <div className="text-6xl mb-6">{product.icon}</div> */}
          <div className="w-full h-56 bg-border" />
        </Group>

        <Group classname={"p-6"}>
          <HeaderTexts secondary={true} classname={"text-2xl font-semibold text-headlines"}>
            {product.name}
          </HeaderTexts>
          <Paragraph classname={"text-sm text-quaternary font-text mb-4"}>
            {product.description}
          </Paragraph>

          <ul className="space-y-2 mb-8">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-foreground text-sm">
                <Span classname={"text-primary font-bold"}>✓</Span>
                {feature}
              </li>
            ))}
          </ul>

          <Group classname="space-y-4">
            <Paragraph classname={"text-3xl font-bold text-primary"}>
              {product.price}
            </Paragraph>
            <Button
              onclick={() => handleOrder(product.name)}
              classname={"w-full py-3 px-6 bg-primary hover:bg-primary/90 text-sm text-white rounded-full cursor-pointer transition-all"}
            >
              {product.cta}
            </Button>
          </Group>
        </Group>
      </Card>
  );
}
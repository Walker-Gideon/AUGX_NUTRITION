import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

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
          <Paragraph classname={"text-sm text-quaternary font-text mb-3"}>
            {product.description}
          </Paragraph>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-foreground">
                <span className="text-primary font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Price and CTA */}
          <Group classname="space-y-4">
            <Paragraph classname={"text-3xl font-bold text-primary"}>
              {product.price}
            </Paragraph>
            <Button classname={"w-full bg-primary text-primary-foreground hover:bg-primary/90"}>
              Add to Cart
            </Button>
          </Group>
        </Group>
      </Card>
  );
}
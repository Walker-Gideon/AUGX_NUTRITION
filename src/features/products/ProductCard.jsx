import Group from "/src/ui/Group";
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

        <Group classname={"p-8"}>
          <HeaderTexts secondary={true} classname={"text-2xl font-bold text-headlines mb-1"}>
            {product.name}
          </HeaderTexts>
          <Paragraph classname={"text-sm text-quaternary font-text mb-4"}>
            {product.description}
          </Paragraph>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-foreground">
                <span className="text-primary font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Price and CTA */}
          <Group classname="space-y-4">
            <p className="text-3xl font-bold text-primary">
              {product.price}
            </p>
            {/* <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Add to Cart
            </Button> */}
          </Group>
        </Group>
      </Card>
  );
}
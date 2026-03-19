import Group from "/src/ui/Group";
import Card from "/src/components/Card";

export default function ProductCard({ product }) {
  return (
      <Card classname="" type="cards">
        <Group>
          {/* Product Icon || Image */}
          {/* <div className="text-6xl mb-6">{product.icon}</div> */}
          <div className="w-full h-64 bg-border" />
        </Group>
        <Group classname={"p-8 lg:p-10"}>
          {/* Product Info */}
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>

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
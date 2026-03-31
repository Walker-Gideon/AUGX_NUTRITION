import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";
import { handleOrder } from "/src/helpers/helpers";

export default function ProductCard({ product }) {
  return (
      <Card classname="group overflow-hidden" type="cards">
        <Group classname="w-full h-80 bg-secondary flex items-center justify-center relative overflow-hidden p-4">
          {/* Red Spotlight Gradient Layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_70%)] opacity-40 z-0" />
          
          {/* Product Image with floating hover effect */}
          <img 
              src={product.image} 
              alt={product.name} 
              className={`object-contain z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4 ${product.imgClass || "h-[85%] w-auto"}`}
          />
          
          {/* Subtle Contact Shadow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-black/20 blur-xl rounded-[100%] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
import { CiDeliveryTruck } from "react-icons/ci";

import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import products from "/src/data/productsData";
import ProductCard from "./components/ProductCard";
import ProductHeader from "./components/ProductHeader";

export default function Products() {
  return (
    <Container section="products" classname={"h-full w-full px-4 md:px-10 lg:px-16 py-20 lg:py-32 bg-background"}>
      <Group classname={"max-w-7xl mx-auto px-4 md:px-6 lg:px-8"}>
        <ProductHeader />
        <Group classname={"max-w-sm md:max-w-3xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Group>
      </Group>

       {/* Additional Info */} 
        <Group classname={"mt-16 lg:mt-20 bg-primary/10 rounded-2xl p-8 lg:p-12 text-center"}>
          <Paragraph classname={"flex items-center justify-center gap-2 text-foreground mb-2"}>
            <Span classname={"font-semibold"}>Free Delivery Available</Span> on orders <CiDeliveryTruck size={20} />
          </Paragraph>
          <Paragraph classname={"text-quaternary"}>
            Fast, discreet shipping to your doorstep
          </Paragraph>
        </Group>
    </Container>
  );
}
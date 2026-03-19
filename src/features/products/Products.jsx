import Group from "/src/ui/Group";
import ProductCard from "./ProductCard";
import Container from "/src/ui/Container";
import ProductHeader from "./ProductHeader";

export default function Products() {
  return (
    <Container section="products" classname={"h-full w-full py-20 lg:py-32 bg-white"}>
      <Group classname={"max-w-7xl mx-auto px-4 md:px-6 lg:px-8"}>
        {/* Header */}
        <ProductHeader />

        {/* Product Grid */}
        <Group>
          <ProductCard />
        </Group>
      </Group>
    </Container>
  );
}
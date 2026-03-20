import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import products from "/src/data/productsData";
import ProductCard from "./components/ProductCard";
import ProductHeader from "./components/ProductHeader";

export default function Products() {
  return (
    <Container section="products" classname={"h-full w-full py-20 lg:py-32 bg-background"}>
      <Group classname={"max-w-7xl mx-auto px-4 md:px-6 lg:px-8"}>
        <ProductHeader />
        <Group classname={"max-w-sm md:max-w-3xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Group>
      </Group>
    </Container>
  );
}
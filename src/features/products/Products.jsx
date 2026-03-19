import Group from "/src/ui/Group";
import ProductCard from "./ProductCard";
import Container from "/src/ui/Container";
import ProductHeader from "./ProductHeader";

const products = [
  {
    id: 1,
    name: 'Serious Mass',
    description: 'High-calorie formula designed for serious muscle gain',
    features: [
      'Protein + Carbs blend',
      'Fast muscle growth',
      'High calorie content',
      'Chocolate flavor'
    ],
    price: '$49.99',
    icon: '🏋️'
  },
  {
    id: 2,
    name: 'Serious Gainz',
    description: 'Strength support formula for peak athletic performance',
    features: [
      'Strength boost',
      'Recovery support',
      'Performance enhancement',
      'Vanilla flavor'
    ],
    price: '$54.99',
    icon: '⚡'
  }
]

export default function Products() {
  return (
    <Container section="products" classname={"h-full w-full py-20 lg:py-32 bg-background"}>
      <Group classname={"max-w-7xl mx-auto px-4 md:px-6 lg:px-8"}>
        <ProductHeader />
        <Group classname={"max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Group>
      </Group>
    </Container>
  );
}
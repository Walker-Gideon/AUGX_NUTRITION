import qualityNutrients01 from "/src/assets/ingredient01.jpg";
import recovery01 from "/src/assets/recovery01.jpg";
import lifeStyle01 from "/src/assets/lifeStyle01.jpg";
import performance01 from "/src/assets/performance01.jpg";

const benefits = [
  {
    id: 1,
    title: 'High-Quality Ingredients',
    description: 'Made with carefully selected ingredients to support performance and results.',
    image: qualityNutrients01,
    colSpan: "col-span-2 middle:col-span-3"
  },
  {
    id: 2,
    title: 'Muscle Growth & Recovery',
    description: 'Supports muscle development and helps your body recover after intense workouts.',
    image: recovery01,
    colSpan: "col-span-1 middle:col-span-2"
  },
  {
    id: 3,
    title: 'Built for Active Lifestyles',
    description: 'Designed for athletes, gym-goers, and anyone serious about fitness.',
    image: lifeStyle01,
    colSpan: "col-span-1 middle:col-span-2"
  },
  {
    id: 4,
    title: 'Performance You Can Trust',
    description: 'Consistent quality designed to help you train harder and perform better.',
    image: performance01,
    colSpan: "col-span-2 middle:col-span-3"
  }
];

export default benefits;
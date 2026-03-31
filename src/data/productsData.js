import mass01 from "/src/assets/mass01.png";
import gainz01 from "/src/assets/gainz01.png";


const products = [
  {
    id: 1,
    name: 'Serious Mass',
    image: mass01,
    description: 'High-calorie formula designed to support muscle gain and weight increase.',
    features: [
      'High protein & carbohydrate blend',
      'Supports mass and size gain',
      'Ideal for bulking phases',
      'Great for hard gainers'
    ],
    cta: 'Order Now',
    imgClass: 'h-[100%] w-auto'
  },
  {
    id: 2,
    name: 'Serious Gainz',
    image: gainz01,
    description: 'Advanced formula to support strength, recovery, and athletic performance.',
    features: [
      'Supports strength and endurance',
      'Helps muscle recovery',
      'Enhances workout performance',
      'Suitable for active athletes'
    ],
    cta: 'Order Now',
    imgClass: 'w-[60%] h-[62%]'
  }
];

export default products;

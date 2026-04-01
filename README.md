# AUGX Nutrition

Fuel Your Body. Elevate Your Training.

Welcome to the **AUGX Nutrition** official e-commerce landing page. This project is a premium, high-performance web application built to showcase and sell athlete-focused nutritional supplements, featuring dynamic 3D-like animations, strict accessibility standards, and a direct-to-consumer WhatsApp ordering system.

## 🚀 Live Performance & Engineering
This application was engineered with a strict adherence to Google's Lighthouse auditing standards, achieving **100/100 across Performance, Accessibility, Best Practices, and SEO** on desktop environments. 

### Key Optimizations:
- **LCP Prioritization:** Critical assets like the Hero image are explicitly preloaded utilizing React 18's `fetchPriority="high"`.
- **Code Splitting & Lazy Loading:** Non-critical sections (Benefits, Testimonials, Products, Footer) are dynamically imported using `React.lazy()` to shrink the initial JavaScript payload.
- **Main-Thread Efficiency:** CSS `content-visibility: auto` is deployed on heavy DOM sections, permitting the browser to defer rendering off-screen elements.
- **Flawless Accessibility:** Deep ARIA-label implementations, robust semantic HTML structures (H1-H3), and external custom `focus-visible` UI rings ensure total compliance for screen readers and keyboard navigation.

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (`motion/react`) for fluid, layout-driven UI interactions.
- **Scroll Spy & Navigation:** `react-scroll`
- **Form Handling:** Formspree (`@formspree/react`)
- **Icons:** React Icons (`react-icons/lu`)
- **Routing:** React Router DOM v7

## ✨ Key Features
- **Glassmorphism UI:** Modern, translucent navigation headers and frosted-glass cards.
- **Interactive Product Models:** Studio-lit product displays utilizing hover-based 3D scaling and shadow effects.
- **Custom Toast Notifications:** Responsive, animated success/error banners securely linked to the Formspree newsletter integration.
- **WhatsApp Direct Ordering:** A seamless, one-click checkout system that pre-fills WhatsApp message templates directly to the sales team with the customer's desired product.

## 📦 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd AUGX
   ```

2. **Install dependencies:**
   Make sure you are using Node.js.
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

4. **Build for Production:**
   To test the highly-optimized production build:
   ```bash
   npm run build
   npm run preview
   ```

## 🤝 Contributing
All code merges must maintain the strict Lighthouse performance thresholds. Ensure `npm run build` evaluates cleanly, and verify there are no hidden Cumulative Layout Shifts (CLS) before committing UI alterations.

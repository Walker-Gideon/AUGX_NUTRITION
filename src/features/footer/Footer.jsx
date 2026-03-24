import Group from "/src/ui/Group";
import FooterUi from "/src/ui/FooterUi";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "Benefits", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
  ];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const styling = {
    header: "font-headlines font-bold mb-4",
    paragraph: "text-white/70 text-base medium:text-sm",
    list: "space-y-2 text-sm",
    listItem: "hover:text-primary transition-colors",
    input: "px-4 py-2 rounded-l-lg text-black w-full",
    button: "bg-primary px-4 rounded-r-lg hover:bg-primary/90 transition-colors",
  }

  return (
    <FooterUi>
      <Group classname={"md:max-w-7xl md:mx-auto px-4 md:px-10 lg:px-16"}>
        <Group classname={"grid medium:grid-cols-2 md:grid-cols-3 large:grid-cols-4 gap-8"}>
          {/* Brand */}
          <Group classname={"md:col-span-1"}>
            <HeaderTexts classname={`text-2xl ${styling.header}`}>AUGX</HeaderTexts>
            <Paragraph classname={"text-white/70 text-base medium:text-sm"}>
              Fuel Your Body. Elevate Your Training.
            </Paragraph>
          </Group>

          {/* Quick Links */}
          <Group>
            <HeaderTexts classname={`${styling.header}`}>Quick Links</HeaderTexts>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </Group>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-sm text-white/70 mb-4">
              Get exclusive offers and product updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-black w-full"
              />
              <button className="bg-primary px-4 rounded-r-lg hover:bg-primary/90 transition-colors">
                →
              </button>
            </div>
          </div>
        </Group>

        {/* Bottom */}
        <Group classname={"border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"}>
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            © {currentYear} AUGX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </Group>
      </Group>
    </FooterUi>
  );
}
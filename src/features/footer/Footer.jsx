import { LuInstagram, LuArrowRight } from "react-icons/lu";

import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import FooterUi from "/src/ui/FooterUi";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";
import { UnorderedList, ListItem } from "/src/ui/List";

import quickLinks from "/src/data/footerData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const styling = {
    header: "font-headlines font-bold mb-4",
    paragraph: "text-white/70 text-base medium:text-sm",
    list: "space-y-2 text-sm text-white/70",
    listItem: "cursor-pointer hover:text-primary transition-colors",
    input: "px-4 py-2 rounded-l-lg text-black w-full",
    button: "bg-primary px-4 rounded-r-lg hover:bg-primary/90 transition-colors",
  }

  return (
    <FooterUi>
      <Group classname={"md:max-w-7xl md:mx-auto px-4 md:px-10 lg:px-16"}>
        <Group classname={"grid medium:grid-cols-2 md:grid-cols-3 large:grid-cols-4 gap-8"}>
          {/* Brand */}
          <Group classname={"md:col-span-1"}>
            <HeaderTexts classname={`text-2xl uppercase ${styling.header}`}>AUGX</HeaderTexts>
            <Paragraph classname={"text-white/70 text-base medium:text-sm"}>
              Fuel Your Body. Elevate Your Training.
            </Paragraph>
          </Group>

          {/* Quick Links */}
          <Group>
            <HeaderTexts classname={`${styling.header}`}>Quick Links</HeaderTexts>
            <UnorderedList classname={styling.list}>
              {quickLinks.map((link) => (
                <ListItem key={link.to}>
                  <Button to={link.to} classname={styling.listItem}>
                    {link.name}
                  </Button>
                </ListItem>
              ))}
            </UnorderedList>
          </Group>

          {/* Support */}
          <Group>
            <HeaderTexts classname={`${styling.header}`}>Support</HeaderTexts>
            <Group classname={"text-sm"}>
              {/* How should I handle this? */}
              <Button classname={`text-white/70 mb-2 ${styling.listItem}`}>
                Contact Us
              </Button>
              <Paragraph classname={styling.paragraph}>
                Connect with us
              </Paragraph>
              <a href="#" className={`border border-white w-12 h-12 flex items-center justify-center p-3 rounded-full bg-white text-black mt-4 ${styling.listItem}`}>
                <LuInstagram size={25} />
              </a>
            </Group>
          </Group>

          {/* Newsletter */}
          <Group classname={"md:col-span-2 large:col-span-1"}>
            <HeaderTexts classname={`${styling.header}`}>Stay Updated</HeaderTexts>
            <Paragraph classname={styling.paragraph}>
              Get exclusive offers and product updates.
            </Paragraph>
            <form className={"flex mt-8 h-11"}>
              <input
                type="email"
                placeholder="Your email"
                className={"border border-r-0 border-white bg-transparent px-4 h-full rounded-l-lg text-sm text-white w-full placeholder:text-white/70 placeholder:text-xs outline-none"}
              />
              <Button type={true} classname={"bg-primary px-5 h-full rounded-r-lg cursor-pointer hover:bg-primary/90 transition-colors flex items-center justify-center"}>
                <LuArrowRight size={18} />
              </Button>
            </form>
          </Group>
        </Group>

        {/* Bottom */}
        <Group classname={"border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center"}>
          <Paragraph classname={"text-sm text-white/50 mb-4 md:mb-0"}>
            © {currentYear} AUGX. All rights reserved.
          </Paragraph>
        </Group>
      </Group>
    </FooterUi>
  );
}
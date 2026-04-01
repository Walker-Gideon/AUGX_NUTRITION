import { Link } from "react-scroll";
import { useForm } from '@formspree/react';
import { useState, useEffect } from "react";
import { LuInstagram, LuArrowRight } from "react-icons/lu";

import Image from "/src/ui/Image";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import FooterUi from "/src/ui/FooterUi";
import Paragraph from "/src/ui/Paragraph";
import Toast from "/src/components/Toast";
import HeaderTexts from "/src/ui/HeaderTexts";
import { UnorderedList, ListItem } from "/src/ui/List";

import logo from "/src/assets/logo000.png";
import quickLinks from "/src/data/footerData";
import { handleOrder } from "/src/helpers/helpers";

export default function Footer() {
  const [state, handleSubmit] = useForm("mojpdbnn");
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  useEffect(() => {
    // Handle Success
    if (state.succeeded) {
      setToast({ 
        visible: true, 
        message: "Thanks for signing up! We'll keep you updated.", 
        type: "success" 
      });
      const timer = setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 5000);
      return () => clearTimeout(timer);
    }

    // Handle Error (Trigger if not submitting, not succeeded, and has errors)
    if (!state.submitting && !state.succeeded && state.errors) {
      // Formspree errors can be an array or a single object depending on the version
      const errorMsg = Array.isArray(state.errors) 
        ? (state.errors[0]?.message || "Invalid email. Please try again.")
        : "Something went wrong. Please check your email.";
      
      setToast({ 
        visible: true, 
        message: errorMsg, 
        type: "error" 
      });
      
      const timer = setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, state.errors, state.submitting]);

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
            <Group classname={"bg-white w-fit p-1 mb-4"}>
              <Image source={logo} alternate="AUGX Logo" classname="h-15 medium:h-20 w-auto object-contain" />
            </Group>
            <Paragraph classname={"text-white/70 text-base medium:text-sm"}>
              Fuel Your Body. Elevate Your Training.
            </Paragraph>
          </Group>

          {/* Quick Links */}
          <Group>
            <HeaderTexts classname={`${styling.header}`}>Quick Links</HeaderTexts>
            <UnorderedList classname={styling.list}>
              {quickLinks.map((link) => (
                <ListItem key={link.link}>
                  <Link
                    to={link.link}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-100}
                    className={styling.listItem}
                  >
                    {link.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Group>

          {/* Support */}
          <Group>
            <HeaderTexts classname={`${styling.header}`}>Support</HeaderTexts>
            <Group classname={"text-sm"}>
              <Button onclick={() => handleOrder(null)} classname={`text-white/70 mb-2 ${styling.listItem}`}>
                Contact Us
              </Button>
              <Paragraph classname={styling.paragraph}>
                Connect with us
              </Paragraph>
              <a 
                href="https://www.instagram.com/augx_nutrition/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`border border-white w-12 h-12 flex items-center justify-center p-3 rounded-full bg-white text-black mt-4 hover:scale-110 active:scale-95 transition-all duration-300 ${styling.listItem}`}>
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
            <Group classname="mt-8 flex flex-col gap-2">
              <form key={state.succeeded ? "success" : "initial"} onSubmit={handleSubmit} className={"flex h-11"}>
                <input
                  name="email" 
                  id="email" 
                  type="email"
                  placeholder="Your email"
                  className={"border border-r-0 border-white bg-transparent px-4 h-full rounded-l-lg text-sm text-white w-full placeholder:text-white/70 placeholder:text-xs outline-none"}
                />
                <Button disabled={state.submitting} type={true} classname={"bg-primary px-5 h-full rounded-r-lg cursor-pointer hover:bg-primary/90 transition-colors flex items-center justify-center"}>
                  <LuArrowRight size={18} />
                </Button>
              </form>
              <Paragraph classname={"text-white/70 text-xs"}>
                No spam. Only updates and exclusive offers.
              </Paragraph>
            </Group>
          </Group>
        </Group>

        {/* Bottom */}
        <Group classname={"border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center"}>
          <Paragraph classname={"text-sm text-white/50 mb-4 md:mb-0"}>
            © {currentYear} AUGX. All rights reserved.
          </Paragraph>
        </Group>
      </Group>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        isVisible={toast.visible} 
        onClose={() => setToast(prev => ({ ...prev, visible: false }))} 
      />
    </FooterUi>
  );
}
import { useState, useEffect, useRef } from "react";

import Logo from "./Logo";
import Group from "/src/ui/Group";
import Header from "/src/ui/Header";
import HeaderMenu from "./HeaderMenu";
import Navigation from "./Navigation";
import ActionButton from "./ActionButton";

export default function MainHeader() {
    const menuRef = useRef(null);
    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(prev => !prev);
    }

    // Reset menu on resize to large screen using matchMedia (High Performance)
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 900px)");
        const handleMediaQueryChange = (e) => {
            if (e.matches) setOpen(false);
        };
        
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    // Close menu on scroll - Only attach listener when menu is open
    useEffect(() => {
        if (!open) return;

        const handleScroll = () => {
            setOpen(false);
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [open]);


    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Header classname={"h-15 w-full px-4 md:px-10 lg:px-16 top-6 z-50 bg-transparent fixed"}>
            <Group classname={"w-full flex items-center justify-between"}>
                <Logo />
                <Navigation />
                <Group classname={"hidden large:flex"}>
                    <ActionButton />
                </Group>
                <Group classname={"large:hidden z-50 relative"} ref={menuRef}>
                    {/* Menu icon button */}
                    <ActionButton
                        menu={true}
                        state={open}
                        onclick={handleMenu}
                    />
                    <HeaderMenu isOpen={open} setIsOpen={setOpen} />
                </Group>
            </Group>
        </Header>
    );
}
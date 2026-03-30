import { useState } from "react";

import Logo from "./Logo";
import Group from "/src/ui/Group";
import Header from "/src/ui/Header";
import HeaderMenu from "./HeaderMenu";
import Navigation from "./Navigation";
import ActionButton from "./ActionButton";

export default function MainHeader() {
    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(prev => !prev);
    }

    return (
        <Header classname={"h-15 w-full px-4 md:px-10 lg:px-16 top-6 z-50 bg-transparent fixed"}>
            <Group classname={"w-full flex items-center justify-between"}>
                <Logo />
                <Navigation />
                <Group classname={"hidden large:flex"}>
                    <ActionButton />
                </Group>
                <Group classname={"large:hidden z-50 relative"}>
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
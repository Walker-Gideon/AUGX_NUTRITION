import Logo from "./Logo";
import Group from "/src/ui/Group";
import Header from "/src/ui/Header";
import Navigation from "./Navigation";
import ActionButton from "./ActionButton";

export default function MainHeader() {
    return (
        <Header classname={"h-15 w-full px-4 md:px-10 lg:px-16 top-6 z-50 bg-transparent fixed"}>
            <Group classname={"w-full flex items-center justify-between"}>
                <Logo />
                <Navigation />
                <Group classname={"hidden middle:flex"}>
                    <ActionButton />
                </Group>
                <Group classname={"middle:hidden"}>
                    <ActionButton menu={true} />
                </Group>
            </Group>
        </Header>
    );
}
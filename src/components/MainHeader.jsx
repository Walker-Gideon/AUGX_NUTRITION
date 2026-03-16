import Logo from "./Logo";
import Header from "/src/ui/Header";
import Navigation from "./Navigation";
import ActionButton from "./ActionButton";

export default function MainHeader() {
    return (
        <Header main={true} classname={"h-15 w-full lg:px-36 px-4 sticky top-3 z-50 bg-transparent"} jstext={"between"}>
            <Logo />
            {/* <Navigation /> */}
            <ActionButton />
        </Header>
    );
}
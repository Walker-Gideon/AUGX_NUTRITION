import Logo from "./Logo";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Navigation from "./Navigation";

export default function MainHeader() {
    // transparent
    return (
        <Header main={true} classname={"h-15 w-full px-36 sticky top-3 z-50 bg-yellow-500"} jstext={"between"}>
            <Logo />
            <Navigation />
            <Button primary={true}>Order Now</Button>
        </Header>
    );
}
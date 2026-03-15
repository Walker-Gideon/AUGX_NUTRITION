import Logo from "./Logo";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Navigation from "./Navigation";

export default function MainHeader() {
    return (
        <Header main={true} classname={"h-15 w-full px-36 sticky top-0 z-50 transparent"} jstext={"between"}>
            <Logo />
            <Navigation />
            <Button>Order Now</Button>
        </Header>
    );
}
import Header from "/src/ui/Header";

export default function HeroHeader() {
    return <Header main={true} classname={"h-15 w-full px-36 sticky top-0 z-50 transparent"} jstext={"between"}>
        <div>Logo</div>
        <div>Navigation</div>
        <div>Button</div>
    </Header>;
}
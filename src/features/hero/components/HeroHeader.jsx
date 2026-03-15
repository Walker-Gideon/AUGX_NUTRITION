import Header from "/src/ui/Header";

export default function HeroHeader() {
    return <Header main={true} classname={"h-15 w-full bg-yellow-500 px-36"} jstext={"between"}>
        <div>Logo</div>
        <div>Navigation</div>
        <div>Button</div>
    </Header>;
}
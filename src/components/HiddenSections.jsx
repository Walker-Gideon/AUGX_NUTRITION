import { Link } from "react-scroll";

import Group from "/src/ui/Group";

export default function HiddenSections({ setActiveIndex }) {
    return (
        <Group classname={"hidden"}>
            <Link to="hero" spy={true} offset={-80} onSetActive={() => setActiveIndex(null)} />
            <Link to="cta" spy={true} onSetActive={() => setActiveIndex(null)} />
            <Link to="footer" spy={true} onSetActive={() => setActiveIndex(null)} />
        </Group>
    );
}
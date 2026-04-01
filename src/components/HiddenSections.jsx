import { Link } from "react-scroll";

import Group from "/src/ui/Group";

export default function HiddenSections({ setActiveIndex }) {
    return (
        <Group classname={"hidden"}>
            <Link to="hero" href="#hero" spy={true} offset={-80} onSetActive={() => setActiveIndex(null)} />
            <Link to="cta" href="#cta" spy={true} onSetActive={() => setActiveIndex(null)} />
            <Link to="footer" href="#footer" spy={true} onSetActive={() => setActiveIndex(null)} />
        </Group>
    );
}
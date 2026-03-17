export default function Navigation() {
    return (
        <nav className={"hidden middle:flex w-[35%] lg:w-[30%] border border-white rounded-full py-3 px-8 bg-white shadow-xl/20 transition-all group"}>
            <ul className="w-full flex items-center justify-center text-center gap-5">
                <li className="flex-1">Products</li>
                <li className="flex-1">Benefits</li>
                <li className="flex-1 whitespace-nowrap">About Us</li>
            </ul>
        </nav>
    );
}
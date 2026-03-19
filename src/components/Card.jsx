export default function Card({ children, classname, type }) {
    const styling = {
        cards: "bg-background border border-border rounded-xl hover:shadow-lg transition-shadow overflow-hidden",
    }

    return (
        <div className={`${styling[type]} ${classname}`}>
            {children}
        </div>
    );
}
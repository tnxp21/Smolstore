import Link from "next/link";

export default function NotFound() {
    return (
        <div className="page-container">
            <h3>Sorry, the page you requested was not found :(</h3>
            <Link href={"/"}>
                <button>Home</button>
            </Link>
        </div>
    );
}
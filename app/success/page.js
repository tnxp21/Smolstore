import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="page-container">
            <h3>Thank you for your purchase!😽</h3>
            <Link href={"/"}>
                <button>Home&rarr;</button>
            </Link>
        </div>
    );
}
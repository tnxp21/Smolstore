'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Error(props) {
    const { error, reset } = props;

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <h3>Something went wrong!</h3>
            <div>
                <button onClick={() => props.reset()}>Try again</button>
                <Link href={"/"}>
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );
}
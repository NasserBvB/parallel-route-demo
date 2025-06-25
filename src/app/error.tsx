"use client";
import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({
    error,
    reset,
}: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.debug(error)
    }, [error])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <button
                className="text-sm font-medium text-blue-600 hover:underline"
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}

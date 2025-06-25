'use client' // Error boundaries must be Client Components

interface GlobalErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function GlobalError({
    reset,
}: GlobalErrorProps) {
    return (
        // global-error must include html and body tags
        <html>
            <body className="flex justify-center items-center h-screen">
                <h2 className="text-2xl font-bold">Something went wrong!</h2>
                <button className="text-sm font-medium text-blue-600 hover:underline" onClick={() => reset()}>Try again</button>
            </body>
        </html>
    )
}
import Link from "next/link";

export default function Page() {
    return <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Email</h1>
        <p className="text-lg text-center">
            This is a simple email app built with Next.js 15 and Tailwind CSS to demonstrate the new app directory parallel routing features.
        </p>
        <br />
        <p className="text-lg">
            Navigate to one of the pages below to see it in action.
        </p>
        <div
            className="flex flex-row sm:flex-col items-center justify-center gap-4"
        >
            <Link href="/inbox" className="text-sm font-medium text-blue-600 hover:underline">
                Inbox
            </Link>
            <Link href="/sent" className="text-sm font-medium text-blue-600 hover:underline">
                Sent
            </Link>
        </div>
    </div>
}
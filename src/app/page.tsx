import Link from "next/link";

export default function Page() {
    return <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Email</h1>
        <p className="text-lg">
            This is a simple email app built with Next.js 15 and Tailwind CSS to demonstrate the new app directory parallel routing features.
        </p>
        <br />
        <p className="text-lg">
            Check out the <a href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes" className="text-blue-600 hover:underline">docs</a> for more info.
        </p>
        <p className="text-lg">
            See it in actions
        </p>
        <div
            className="flex flex-row md:flex-col items-center justify-center gap-4"
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
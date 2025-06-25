import { Email } from "@/src/app/lib/types/email"

export const EmailDetail = ({ email }: { email: Email }) => {
    return <div className="flex flex-col p-4 h-screen overflow-auto">
        <h2 className="text-2xl font-bold"> {email.name}</h2>
        <p className="text-md opacity-50">{email.email}</p>
        <p>{email.subject}</p>
        <p className="text-sm opacity-50">{email.timestamp}</p>
        <p className="text-sm opacity-50">{email.content}</p>

    </div>
}
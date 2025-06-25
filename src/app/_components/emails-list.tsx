"use client";

import Link from "next/link";
import { useDrawer } from "../layout";

type Email = {
    id: number;
    email: string;
    name: string;
    subject: string;
    content: string;
    timestamp: string;
    read: boolean;
}

export const EmailsList = ({ emails, sent = false }: { emails: Email[], sent?: boolean }) => {
    const { closeDrawer } = useDrawer();

    if (!emails || emails.length === 0) {
        return <div className="p-4">
            <p>No emails</p>
        </div>
    }

    return <div>
        {emails.map((email: Email, index: number) => (
            <Link
                href={`/${sent ? 'sent' : 'inbox'}/${email.id}`}
                key={email.id || index}
                onClick={closeDrawer}
            >
                <div className="px-1 py-4 border-b hover:shadow-md">
                    <div>
                        <h3 className="font-medium">{email.name || 'Unknown Sender'}</h3>
                        <p className="text-sm opacity-50">{email.email}</p>
                        {email.subject && <h4 className="font-medium mt-2 opacity-70">{email.subject}</h4>}
                        <p className="mt-1 opacity-75">{email.content}</p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
}
"use client";

import { EmailsList } from "./emails-list";
import { Email } from "@/src/app/lib/types/email";
type Props = {
    emails: Email[];
    sent?: boolean;
}

export const SidebarEmail = ({ emails, sent }: Props) => {
    return <div className="flex flex-col p-4 h-screen overflow-auto">
        <h1 className="text-4xl font-bold">{sent ? 'Sent' : 'Inbox'}</h1>
        <EmailsList emails={emails} sent={sent} />
    </div>
}
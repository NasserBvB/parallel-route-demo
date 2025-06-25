import { fetchEmails } from "@/src/app/lib/data/fetch-emails";
import { SidebarEmail } from "../../_components/sidebar-email";

export default async function Inbox() {
    const emails = await fetchEmails();
    return <SidebarEmail emails={emails.emails} sent />
}
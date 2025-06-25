import { SidebarEmail } from "@/src/app/_components/sidebar-email";
import { fetchEmails } from "@/src/app/lib/data/fetch-emails";

export default async function Inbox() {
    const emails = await fetchEmails();
    return <SidebarEmail emails={emails.emails} />
}

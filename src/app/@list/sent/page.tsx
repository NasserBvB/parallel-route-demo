import { SidebarEmail } from "../../_components/sidebar-email";
import { fetchEmails } from "../../lib/data/fetch-emails";

export default async function Sent() {
    const emails = await fetchEmails();
    return <SidebarEmail emails={emails.emails} sent />
}

import { EmailDetail } from "@/src/app/_components/email-detail";
import { fetchEmail } from "@/src/app/lib/data/fetch-email";
import { notFound } from "next/navigation";
type Props = {
    params: Promise<{ id: string }>,
}

export default async function Inbox({
    params,
}: Props) {
    const { id } = await params;
    if (!id) {
        return notFound();
    }

    const email = await fetchEmail(id);

    if (!email.email) {
        return notFound();
    }

    return <EmailDetail email={email.email} />
}

import { API_URL } from "@/src/app/lib/constant";

export const fetchEmails = async () => {
    const res = await fetch(`${API_URL}`, { cache: "no-store" });
    return res.json();
}
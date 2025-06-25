import { API_URL } from "@/src/app/lib/constant";

export const fetchEmail = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    return res.json();
}
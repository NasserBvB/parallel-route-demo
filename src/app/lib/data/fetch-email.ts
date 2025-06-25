
export const fetchEmail = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/${id}`, { cache: "no-store" });
    return res.json();
}
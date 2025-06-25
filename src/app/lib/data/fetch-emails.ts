export const fetchEmails = async () => {
    const res = await fetch(`http://localhost:3000/api`, { cache: "no-store" });
    return res.json();
}
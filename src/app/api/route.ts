import { db } from "./db";

export const GET = async () => {
    return new Response(JSON.stringify({
        emails: db.emails
    }), { status: 200 });
};

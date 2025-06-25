import { db } from "../db";

export const GET = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    if (!id) {
        return new Response(JSON.stringify({
            error: 'Email not found'
        }), { status: 404 });
    }

    const emailId = parseInt(id);

    if (!emailId) {
        return new Response(JSON.stringify({
            error: 'Invalid email id'
        }), { status: 400 });
    }

    const email = db.emails[emailId - 1];

    return new Response(JSON.stringify({
        email
    }), { status: 200 });
};

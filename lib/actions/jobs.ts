import { prisma } from "@/lib/prisma";

export async function getJobs() {
    try {
        const data = prisma.job.findMany({
            orderBy: {
                postedAt: "desc"
            }
        });
        return data;
    } catch (err: any) {
        throw new Error(err);
    }
}
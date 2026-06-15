import { prisma } from "@/lib/prisma";

export async function getJobs() {
    try {
        const data = prisma.job.findMany({
            orderBy: {
                postedAt: "desc"
            },
            include: {
                postedBy: true // Include the data of the user who posted the job
            }
        });
        return data;
    } catch (err: any) {
        throw new Error(err);
    }
}
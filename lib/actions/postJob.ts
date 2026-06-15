
'use server';

import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

interface JobData {
  title: string;
  company: string;
  description: string;
  salary?: string;
  location?: string;
  lastDate?: string;
  contactEmail?: string;
  mode?: string;
}

export const postJob = async (jobData: JobData) => {
  try {
    // Get current session to get the user ID
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      throw new Error('You must be logged in to post a job');
    }

    // Validate required fields
    if (!jobData.title || !jobData.company || !jobData.description) {
      throw new Error('Please fill in all required fields');
    }

    // Convert salary to number, handle empty string
    const salaryNumber = jobData.salary ? parseInt(jobData.salary, 10) : null;

    // Build data object with only provided fields
    // location and lastDate will use database defaults if not provided
    const data: any = {
      title: jobData.title.trim(),
      company: jobData.company.trim(),
      description: jobData.description.trim(),
      postedById: session.user.id,
    };

    // Add optional fields only if provided
    if (jobData.salary !== undefined && salaryNumber !== null) {
      data.salary = salaryNumber;
    }

    if (jobData.location && jobData.location.trim()) {
      data.location = jobData.location.trim();
    } else {    
      data.location = "Remote"; // Default to "Remote" if location is not provided
    }

    if (jobData.contactEmail && jobData.contactEmail.trim()) {
      data.contactEmail = jobData.contactEmail.trim();
    }

    if (jobData.mode) {
      data.mode = jobData.mode;
    }

    if (jobData.lastDate) {
      data.lastDate = new Date(jobData.lastDate);
    }
    else {
      data.lastDate = new Date(); // Set to current date if not provided
    }

    // Create job in database using Prisma
    const newJob = await prisma.job.create({
      data,
    });

    return { success: true, jobId: newJob.id };
  } catch (error) {
    console.error('Error posting job:', error);
    throw error;
  }
};
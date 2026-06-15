import { getJobs } from "@/lib/actions/jobs";

export default async function Jobs () {
    const jobs = await getJobs();

    return (
        <div>
            <h1>Jobs</h1>
            <ul className="list-none">
                {jobs.map((job) => (
                    <li key={job.id}>
                        <div>
                            <h2 className="text-lg font-semibold">{job.title}</h2>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="text-gray-600">{job.location}</p>
                            <p className="text-gray-600">{job.salary ? `$${job.salary}` : 'Salary not specified'}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
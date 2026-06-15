'use client';

import { useState } from 'react';
import { postJob } from '@/lib/actions/postJob';

export default function PostJob() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [jobData, setjobData] = useState({
        title: '',
        company: '',
        salary: '',
        description: '',
        location: '',
        lastDate: '',
        contactEmail: '',
        mode: 'Hybrid',
    });

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setjobData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await postJob(jobData);
            window.location.href = '/jobs'; // Redirect to jobs page after successful post
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to post job');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Post a Job</h1>
                    <p className="text-gray-600 mb-8">Fill in the details below to create a new job listing</p>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={jobData.title}
                                onChange={handleDataChange}
                                placeholder="e.g. Senior React Developer"
                                required
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400"
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                            <input
                                type="text"
                                name="company"
                                value={jobData.company}
                                onChange={handleDataChange}
                                placeholder="e.g. Tech Company Inc"
                                required
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={jobData.location}
                                onChange={handleDataChange}
                                placeholder="e.g. New York, NY"
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400"
                            />
                        </div>

                        {/* Mode */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Work Mode</label>
                            <select
                                name="mode"
                                value={jobData.mode}
                                onChange={handleDataChange}
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            >
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="On-site">On-site</option>
                            </select>
                        </div>

                        {/* Salary */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Salary (Optional)</label>
                            <input
                                type="number"
                                name="salary"
                                value={jobData.salary}
                                onChange={handleDataChange}
                                placeholder="e.g. 100000"
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400"
                            />
                        </div>

                        {/* Contact Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Email (Optional)</label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={jobData.contactEmail}
                                onChange={handleDataChange}
                                placeholder="e.g. hr@company.com"
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400"
                            />
                        </div>

                        {/* Last Date */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Application Deadline</label>
                            <input
                                type="date"
                                name="lastDate"
                                value={jobData.lastDate}
                                onChange={handleDataChange}
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Job Description *</label>
                            <textarea
                                name="description"
                                value={jobData.description}
                                onChange={handleDataChange}
                                placeholder="Describe the job responsibilities, requirements, and benefits..."
                                required
                                rows={6}
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none placeholder-gray-400"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Posting...' : 'Post Job'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
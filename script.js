// Sample job data
const jobs = [
    {
        title: 'Warehouse Associate',
        company: 'VisaAbroad Jobs',
        location: 'Chicago, USA',
        type: 'Full-time',
        sponsored: true,
        description: 'Join our warehouse team loading, unloading, and organizing merchandise. No previous experience required.',
        salary: '$18/hourly'
    },
    {
        title: 'Hotel Housekeeper',
        company: 'VisaAbroad Jobs',
        location: 'Vancouver, Canada',
        type: 'Full-time',
        sponsored: true,
        description: 'VisaAbroad Jobs is hiring dedicated housekeepers to maintain our high standards of cleanliness.',
        salary: '$19/hourly'
    },
    {
        title: 'Construction Laborer',
        company: 'BuildRight Construction',
        location: 'Perth, Australia',
        type: 'Full-time',
        sponsored: true,
        description: 'BuildRight Construction is seeking energetic laborers for residential and commercial projects.',
        salary: '$25/hourly'
    }
];

// Function to create job cards
function createJobCard(job) {
    return `
        <div class="job-card">
            <h3>${job.title}</h3>
            <div class="job-meta">
                <span>${job.location}</span>
                <span>${job.type}</span>
                ${job.sponsored ? '<span class="sponsored">✓ Visa Sponsored</span>' : ''}
            </div>
            <p class="job-description">${job.description}</p>
            <div class="salary">${job.salary}</div>
            <button class="apply-btn">Apply Now</button>
        </div>
    `;
}

// Function to render jobs
function renderJobs() {
    const jobsContainer = document.getElementById('jobsContainer');
    jobsContainer.innerHTML = jobs.map(job => createJobCard(job)).join('');
}

// Function to handle job search
function searchJobs() {
    const jobQuery = document.getElementById('jobSearch').value.toLowerCase();
    const locationQuery = document.getElementById('locationSearch').value.toLowerCase();
    
    const filteredJobs = jobs.filter(job => {
        const matchesJob = job.title.toLowerCase().includes(jobQuery);
        const matchesLocation = job.location.toLowerCase().includes(locationQuery);
        return matchesJob && matchesLocation;
    });
    
    const jobsContainer = document.getElementById('jobsContainer');
    jobsContainer.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderJobs();
});
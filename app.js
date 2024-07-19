document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const jobListingsSection = document.querySelector('.job-listings');

    const jobData = [
        {
            "title": "Frontend Developer",
            "company": "Company XYZ",
            "location": "New York, NY",
            "type": "Full-time",
            "salary": "$80,000/year",
            "description": "We are looking for a skilled frontend developer to join our team.",
            "applyLink": "#"
        },
        {
            "title": "Backend Developer",
            "company": "Company ABC",
            "location": "San Francisco, CA",
            "type": "Full-time",
            "salary": "$100,000/year",
            "description": "Seeking an experienced backend developer to work on our server-side applications.",
            "applyLink": "#"
        },
        {
            "title": "Full Stack Developer",
            "company": "Tech Solutions",
            "location": "Remote",
            "type": "Contract",
            "salary": "$60/hour",
            "description": "Looking for a full stack developer with expertise in both frontend and backend technologies.",
            "applyLink": "#"
        },
        {
            "title": "DevOps Engineer",
            "company": "CloudNet",
            "location": "Austin, TX",
            "type": "Full-time",
            "salary": "$95,000/year",
            "description": "Hiring a DevOps engineer to manage our cloud infrastructure.",
            "applyLink": "#"
        },
        {
            "title": "Data Scientist",
            "company": "Data Analytics Inc.",
            "location": "Boston, MA",
            "type": "Part-time",
            "salary": "$50,000/year",
            "description": "Seeking a data scientist to analyze large datasets and provide insights.",
            "applyLink": "#"
        }
    ];

    function displayJobListings(jobs) {
        jobListingsSection.innerHTML = '<h2>Latest Job Listings</h2>';
        jobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job');
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.company} - ${job.location}</p>
                <p>${job.type} - ${job.salary}</p>
                <p>${job.description}</p>
                <a href="${job.applyLink}">Apply Now</a>
            `;
            jobListingsSection.appendChild(jobElement);
        });
    }

    displayJobListings(jobData);

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const keywordInput = searchForm.querySelector('input[type="text"]:nth-child(1)').value.toLowerCase();
        const locationInput = searchForm.querySelector('input[type="text"]:nth-child(2)').value.toLowerCase();

        const filteredJobs = jobData.filter(job => {
            const jobTitle = job.title.toLowerCase();
            const jobLocation = job.location.toLowerCase();
            return jobTitle.includes(keywordInput) && jobLocation.includes(locationInput);
        });

        displayJobListings(filteredJobs);
    });
});

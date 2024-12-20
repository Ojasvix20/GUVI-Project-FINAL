fetch('http://localhost:8080/jobs')
    .then(response => response.json())
    .then(data => {
        const jobListings = document.getElementById('job-listings');
        data.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.className = 'job';
            jobElement.innerHTML = `
                <h2>${job.title}</h2>
                <p>Company: ${job.company}</p>
                <p>Location: ${job.location}</p>
            `;
            jobListings.appendChild(jobElement);
        });
    })
    .catch(error => console.error('Error fetching jobs:', error));

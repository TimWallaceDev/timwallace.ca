function Projects() {

    const handleClick1 = () => {
        // Replace the following line with the desired behavior when the div is clicked
        window.location.href = 'https://humanmagic.ca';
    };
    const handleClick2 = () => {
        // Replace the following line with the desired behavior when the div is clicked
        window.location.href = 'https://shouttheband.com';
    };
    const handleClick3 = () => {
        // Replace the following line with the desired behavior when the div is clicked
        window.location.href = 'http://ourhomeapp.com/';
    };
    return (
        <div id="projects">
            <h3 id="projects-heading">Projects</h3>

            <div id="projects-container" >
                <div class="project" onClick={handleClick1}>
                    <h4 class="project-title">Human Magic</h4>
                    <p class="project-description">A Website for local Toronto band "Human Magic".</p>
                    <img src=""></img>
                </div>

                <div class="project" onClick={handleClick2}>
                    <h4 class="project-title">Shout! The Band</h4>
                    <p class="project-description">A Website for local Toronto band "Shout! The Band".</p>
                    <img src=""></img>
                </div>

                <div class="project" onClick={handleClick3}>
                    <h4 class="project-title">Chores Minder</h4>
                    <p class="project-description">A website for the whole family/roomates to remember their chores! (I didn't make this site).</p>
                    <img src=""></img>
                </div>
            </div>
        </div>
    )
}

export default Projects;
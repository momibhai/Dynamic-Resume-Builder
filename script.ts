document.getElementById("resumeForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const designation = (document.getElementById("designation") as HTMLInputElement).value;
    const profileText = (document.getElementById("profileText") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLTextAreaElement).value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
    const profileFile = (document.getElementById("profile") as HTMLInputElement).files?.[0];
    const profileURL = profileFile ? URL.createObjectURL(profileFile) : '';

    const skillList = skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

    const resumeHTML = `
        <div class="resume">
            <div class="header">
                <div class="photo">
                    ${profileURL ? `<img src="${profileURL}" alt="Profile Photo">` : ''}
                </div>
                <div class="name-title">
                    <h1>${name}</h1>
                    <h2>${designation}</h2>
                </div>
            </div>
            <div class="content">
                <div class="section profile">
                    <h3>PERSONAL PROFILE</h3>
                    <p>${profileText}</p>
                </div>
                <div class="section experience">
                    <h3>WORK EXPERIENCE</h3>
                    <p>${experience}</p>
                </div>
                <div class="section skills">
                    <h3>SKILLS</h3>
                    <ul>${skillList}</ul>
                </div>
                <div class="section education">
                    <h3>EDUCATION</h3>
                    <p>${education}</p>
                </div>
                <div class="section contact">
                    <h3>CONTACT</h3>
                    <p><strong>📞</strong> ${phone}</p>
                    <p><strong>✉️</strong> ${email}</p>
                    <p><strong>🏠</strong> ${address}</p>
                    ${portfolio ? `<p><strong>🌐</strong> <a href="${portfolio}" target="_blank">${portfolio}</a></p>` : ''}
                </div>
            </div>
        </div>
    `;

    const resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        resumeOutput.style.display = "block";
        resumeOutput.innerHTML = resumeHTML;
    }

    

});

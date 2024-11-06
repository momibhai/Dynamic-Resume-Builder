document.getElementById("resumeForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillElement = document.getElementById("skill") as HTMLTextAreaElement;
    const profileElement = document.getElementById("profile") as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement && profileElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;

        const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

        if (profileElement.files && profileElement.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const profileImageSrc = e.target?.result;

                const resumeHTML = `
                    <hr>
                    <h2>Generated Resume</h2>
                    <img src="${profileImageSrc}" alt="Profile Image" style="width: 150px; height: 150px; border-radius: 50%;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <hr>

                    <h3>Education</h3>
                    <p>${education}</p>

                    <h3>Experience</h3>
                    <p>${experience}</p>

                    <h3>Skills</h3>
                    <p>${skill}</p>
                    <hr>
                `;

                if (resumeOutput) {
                    resumeOutput.innerHTML = resumeHTML;
                    resumeOutput.style.display = "block";
                }
            };

            reader.readAsDataURL(profileElement.files[0]); // Convert image to base64 string
        } else {
            alert("Please upload a profile image.");
        }
    } else {
        alert("Please fill all elements.");
    }
});

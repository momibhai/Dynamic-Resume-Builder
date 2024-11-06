var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    var profileElement = document.getElementById("profile");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement && profileElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skill_1 = skillElement.value;
        var resumeOutput_1 = document.getElementById("resumeOutput");
        if (profileElement.files && profileElement.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var profileImageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                var resumeHTML = "\n                    <hr>\n                    <h2>Generated Resume</h2>\n                    <img src=\"".concat(profileImageSrc, "\" alt=\"Profile Image\" style=\"width: 150px; height: 150px; border-radius: 50%;\">\n                    <p><strong>Name:</strong> ").concat(name_1, "</p>\n                    <p><strong>Email:</strong> ").concat(email_1, "</p>\n                    <p><strong>Phone:</strong> ").concat(phone_1, "</p>\n                    <hr>\n\n                    <h3>Education</h3>\n                    <p>").concat(education_1, "</p>\n\n                    <h3>Experience</h3>\n                    <p>").concat(experience_1, "</p>\n\n                    <h3>Skills</h3>\n                    <p>").concat(skill_1, "</p>\n                    <hr>\n                ");
                if (resumeOutput_1) {
                    resumeOutput_1.innerHTML = resumeHTML;
                    resumeOutput_1.style.display = "block";
                }
            };
            reader.readAsDataURL(profileElement.files[0]); // Convert image to base64 string
        }
        else {
            alert("Please upload a profile image.");
        }
    }
    else {
        alert("Please fill all elements.");
    }
});

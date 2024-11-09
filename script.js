var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    var name = document.getElementById("name").value;
    var designation = document.getElementById("designation").value;
    var profileText = document.getElementById("profileText").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var portfolio = document.getElementById("portfolio").value;
    var profileFile = (_a = document.getElementById("profile").files) === null || _a === void 0 ? void 0 : _a[0];
    var profileURL = profileFile ? URL.createObjectURL(profileFile) : '';
    var skillList = skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    var resumeHTML = "\n        <div class=\"resume\">\n            <div class=\"header\">\n                <div class=\"photo\">\n                    ".concat(profileURL ? "<img src=\"".concat(profileURL, "\" alt=\"Profile Photo\">") : '', "\n                </div>\n                <div class=\"name-title\">\n                    <h1>").concat(name, "</h1>\n                    <h2>").concat(designation, "</h2>\n                </div>\n            </div>\n            <div class=\"content\">\n                <div class=\"section profile\">\n                    <h3>PERSONAL PROFILE</h3>\n                    <p>").concat(profileText, "</p>\n                </div>\n                <div class=\"section experience\">\n                    <h3>WORK EXPERIENCE</h3>\n                    <p>").concat(experience, "</p>\n                </div>\n                <div class=\"section skills\">\n                    <h3>SKILLS</h3>\n                    <ul>").concat(skillList, "</ul>\n                </div>\n                <div class=\"section education\">\n                    <h3>EDUCATION</h3>\n                    <p>").concat(education, "</p>\n                </div>\n                <div class=\"section contact\">\n                    <h3>CONTACT</h3>\n                    <p><strong>\uD83D\uDCDE</strong> ").concat(phone, "</p>\n                    <p><strong>\u2709\uFE0F</strong> ").concat(email, "</p>\n                    <p><strong>\uD83C\uDFE0</strong> ").concat(address, "</p>\n                    ").concat(portfolio ? "<p><strong>\uD83C\uDF10</strong> <a href=\"".concat(portfolio, "\" target=\"_blank\">").concat(portfolio, "</a></p>") : '', "\n                </div>\n            </div>\n        </div>\n    ");
    var resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        resumeOutput.style.display = "block";
        resumeOutput.innerHTML = resumeHTML;
    }
});

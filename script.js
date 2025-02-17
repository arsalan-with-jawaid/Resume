document.addEventListener('DOMContentLoaded', function () {
    var toggleSection = function (headerId, contentId) {
        var header = document.getElementById(headerId);
        var content = document.getElementById(contentId);
        header.addEventListener('click', function () {
            var isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
            header.innerHTML = "".concat(header.innerText.split(" ")[0], " ").concat(isVisible ? '&#x25BC;' : '&#x25B2;');
        });
    };
    // Apply toggling
    toggleSection('education-header', 'education-content');
    toggleSection('skills-header', 'skills-list');
    toggleSection('work-header', 'work-list');
});

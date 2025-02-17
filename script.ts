document.addEventListener('DOMContentLoaded', () => {
  const toggleSection = (headerId: string, contentId: string) => {
      const header = document.getElementById(headerId) as HTMLElement;
      const content = document.getElementById(contentId) as HTMLElement;

      header.addEventListener('click', () => {
          const isVisible = content.style.display === 'block';
          content.style.display = isVisible ? 'none' : 'block';
          header.innerHTML = `${header.innerText.split(" ")[0]} ${isVisible ? '&#x25BC;' : '&#x25B2;'}`;
      });
  };

  // Apply toggling
  toggleSection('education-header', 'education-content');
  toggleSection('skills-header', 'skills-list');
  toggleSection('work-header', 'work-list');
});

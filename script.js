document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll('.nav a');

  function showCards(targetId) {
    const cardWrappers = document.querySelectorAll('.card-wrapper');
    cardWrappers.forEach(wrapper => {
      const wrapperId = wrapper.id;
      const shouldDisplay = wrapperId === targetId || targetId === 'allset';
      wrapper.style.display = shouldDisplay ? 'block' : 'none';
    });

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
 
  anchors.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault(); 
      const targetId = event.target.getAttribute('href').substring(1);
      showCards(targetId);
    });
  });

   document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdown');
    const menuIcon = document.querySelector('.menu');
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);


    if (!isClickInsideDropdown && !isClickOnMenuIcon) {
      
      dropdown.style.display = 'none';
    }
  });
});

function menu() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('resize', function () {
  const dropdown = document.getElementById('dropdown');
  
  if (window.innerWidth > 768) {
    dropdown.style.display = 'none';
  }
});



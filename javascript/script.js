document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const sideNav = document.getElementById('side-nav');
  
    menuToggle.addEventListener('click', function() {
      sideNav.classList.add('open'); // Open the sidebar
      setTimeout(() => {
        sideNav.classList.remove('open'); // Automatically close after 30 seconds
      }, 30000); // 30 seconds
    });
  
    closeBtn.addEventListener('click', function() {
      sideNav.classList.remove('open'); // Close the sidebar when the close button is clicked
    });
  });
  
  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('side-nav').classList.toggle('open');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('side-nav').classList.remove('open');
  });
  
  document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      document.body.setAttribute('data-theme', 'dark');
      document.getElementById('dark-mode-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      document.body.setAttribute('data-theme', 'light');
      document.getElementById('dark-mode-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    function typeEffect(element, text, delay = 100) {
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, delay);
        }
      }
      type();
    }
  
    const welcomeText = document.getElementById('welcome-text');
    const introText = document.getElementById('intro-text');
    const welcomeMessage = "Welcome to My Portfolio";
    const introMessage = "Hello, I'm Kedari Saivenkat, a recent graduate. ";

    
    welcomeText.innerHTML = "";
    introText.innerHTML = "";
  
    typeEffect(welcomeText, welcomeMessage);
    setTimeout(() => typeEffect(introText, introMessage), welcomeMessage.length * 100 + 500); // Delay intro text typing
  });
  
 // Get the button
let scrollBtn = document.getElementById("scrollBtn");

// When the user scrolls, show the button and change its symbol
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
    scrollBtn.innerHTML = "v"; // Change symbol to down arrow
  } else {
    scrollBtn.style.display = "block";
    scrollBtn.innerHTML = "^"; // Change symbol to up arrow
  }
}

// When the user clicks on the button, scroll up or down
scrollBtn.addEventListener('click', function() {
  if (scrollBtn.innerHTML === "v") {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll to bottom
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const skillsSection = document.getElementById('skills');
  const skillCircles = document.querySelectorAll('.skill');

  function fillSkillCircles() {
      skillCircles.forEach(skill => {
          const percentage = skill.getAttribute('data-percentage');
          let count = 0;
          const interval = setInterval(() => {
              if (count >= percentage) {
                  clearInterval(interval);
              } else {
                  count++;
                  skill.querySelector('circle').style.strokeDashoffset = 472 - (472 * count / 100);
              }
          }, 30);
      });
  }

  function checkScroll() {
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          fillSkillCircles();
          window.removeEventListener('scroll', checkScroll);
      }
  }

  document.querySelector('a[href="#skills"]').addEventListener('click', function() {
      fillSkillCircles();
  });

  window.addEventListener('scroll', checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineContainers = document.querySelectorAll('.internships .container');

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add 'active' class when containers are in view
  function animateTimeline() {
    timelineContainers.forEach(container => {
      if (isInViewport(container)) {
        container.classList.add('active');
      }
    });
  }

  // Check the position of elements on scroll
  window.addEventListener('scroll', animateTimeline);

  // Initial check in case some containers are already in view
  animateTimeline();
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

        // Display a prompt message
    alert('Thank you for your message! We will get back to you shortly.');

        // Optionally, you can reset the form after submission
    this.reset();
    });




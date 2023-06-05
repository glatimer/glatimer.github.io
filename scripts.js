// Append the navbar to the top of each page

// Create a function to generate the navbar HTML
function buildNavbar() {
  return `
    <a id="logo-button" href="index.html">
        <img
        class="GL"
        src="../images/logo.png"
        alt="Genevieve's initials in her own handwriting.  White lettering with dusty blue background."
        />
    </a>
    <h1>Genevieve Latimer</h1>
    <nav>
      <ul class="nav-list">
        <li class="nav-button">
          <a class="nav-click" href="index.html">Home</a>
        </li>
        <li class="nav-button">
          <a class="nav-click" href="about-me.html">About Me</a>
        </li>
        <li class="nav-button">
          <a class="nav-click" href="experience.html">Experience</a>
        </li>
        <li class="nav-button">
          <a class="nav-click" href="contact-info.html">Contact</a>
        </li>
      </ul>
    </nav>
  `;
}

// Append the navbar HTML to the header element
function appendNavbar() {
  const header = document.querySelector("header");
  const navbarHTML = buildNavbar();
  header.innerHTML = navbarHTML;
}

// Call the appendNavbar function when the DOM is loaded
document.addEventListener("DOMContentLoaded", appendNavbar);

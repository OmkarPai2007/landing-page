

// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email.");
    }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navItems.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});
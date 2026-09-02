
/* =====================================================
   AADHI WEDMARK
   PROFESSIONAL WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


// Open / Close mobile menu
if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

    });

}


// Close mobile menu when link is clicked
if (mobileMenu) {

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

        });

    });

}


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.getElementById("header");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =====================================================
   WHATSAPP CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


// Check if form exists
if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* ===============================
               GET FORM VALUES
            =============================== */

            const name =
                document.getElementById("name")?.value.trim() || "";

            const phone =
                document.getElementById("phone")?.value.trim() || "";

            const date =
                document.getElementById("date")?.value || "";

            const location =
                document.getElementById("location")?.value.trim() || "";

            const message =
                document.getElementById("message")?.value.trim() || "";


            /* ===============================
               VALIDATION
            =============================== */

            if (name === "") {

                alert("Please enter your name.");

                return;

            }


            if (phone === "") {

                alert("Please enter your phone number.");

                return;

            }


            /* ===============================
               YOUR WHATSAPP NUMBER
            =============================== */

            /*
                IMPORTANT:

                Replace this number with
                your real WhatsApp number.

                Example:

                919381071699

                Do NOT use:
                +91
                spaces
                brackets
                hyphens
            */

            const whatsappNumber =
                "919381071699";


            /* ===============================
               WHATSAPP MESSAGE
            =============================== */

            const whatsappText =

                `Hello Aadhi Wedmark!

I would like to enquire about your wedding photography services.

Name: ${name}

Phone: ${phone}

Wedding Date: ${date || "Not specified"}

Location: ${location || "Not specified"}

Message: ${message || "No additional details"}

Thank you.`;


            /* ===============================
               ENCODE MESSAGE
            =============================== */

            const encodedMessage =
                encodeURIComponent(whatsappText);


            /* ===============================
               WHATSAPP URL
            =============================== */

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


            /* ===============================
               OPEN WHATSAPP
            =============================== */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =====================================================
   HERO VIDEO
===================================================== */

const heroVideo =
    document.querySelector(".hero-video");


if (heroVideo) {

    heroVideo.play()
        .then(function () {

            console.log(
                "Hero video started successfully."
            );

        })
        .catch(function () {

            console.log(
                "Video autoplay was blocked by browser."
            );

        });

}


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

}


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElements =
    document.querySelectorAll(
        ".current-year"
    );


yearElements.forEach(
    function (element) {

        element.textContent =
            new Date().getFullYear();

    }
);


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "Aadhi Wedmark website loaded successfully."
);


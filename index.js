document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const cursor = document.querySelector(".custom-cursor");
    // Move Cursor
    window.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        gsap.to(cursor, {
            x: clientX,
            y: clientY,
            duration: 0.1,
            ease: "power2.out",
        });
    });

    // Hover Effects for Sections
    const sections = document.querySelectorAll(
        ".hero_section, .speaker_section, .schedule_section, .booking"
    );
    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: 80,
                height: 80,
                duration: 0.3,
            });
        });

        section.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: 40,
                height: 40,
                duration: 0.3,
            });
        });
    });

    // Hover Effects for Cards
    const cards = document.querySelectorAll(".cards .card, .schedule_cards .schedule_card");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: 100,
                height: 100,
                backgroundColor: "rgb(71, 61, 198)", // Change cursor color on card hover
                duration: 0.3,
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: 40,
                height: 40,
                backgroundColor: "white", // Reset cursor color
                duration: 0.3,
            });
        });
    });

    // Existing Animations (from your original code)
    const container = document.querySelector(".center_container");
    const textTop = document.querySelector(".center_content_top");
    const textBottom = document.querySelector(".center_content_bottom");
    const navbar = document.querySelector(".navbar");
    const items = document.querySelector(".items");
    const menuIcon = document.querySelector(".menu-icon");
    const navItems = document.querySelectorAll(".items ul li");
    const speakerHeading = document.querySelector(".speaker_section h1");
    const speakerCards = document.querySelectorAll(".cards .card");
    const bookYourSpotButton = document.querySelector(".first_button");

    if (container && textTop && textBottom) {
        const maxMoveTop = container.offsetWidth - textTop.offsetWidth;
        const maxMoveBottom = container.offsetWidth - textBottom.offsetWidth;

        gsap.fromTo(
            textTop,
            { x: -maxMoveTop },
            { x: 0, duration: 2, ease: "bounce.out" }
        );
        gsap.fromTo(
            textBottom,
            { x: maxMoveBottom },
            { x: 0, duration: 2.5, ease: "bounce.out" }
        );

    }
    if (container && bookYourSpotButton) {
        const maxMovebookYourSpotButton = container.offsetWidth - bookYourSpotButton.offsetWidth;

        gsap.fromTo(
            bookYourSpotButton,
            { x: maxMovebookYourSpotButton },
            { x: 0, duration: 2.5, ease: "bounce.out" }
        )
    }

    if (navbar && items) {
        gsap.fromTo(
            navItems,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, stagger: 0.3, ease: "bounce.out" }
        );

        menuIcon.addEventListener("click", () => {
            items.classList.toggle("active");

            if (window.innerWidth <= 768) {
                gsap.fromTo(
                    navItems,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
                );
            }
        });
    }

    if (speakerHeading) {
        gsap.fromTo(
            speakerHeading,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: speakerHeading,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                },
            }
        );
    }

    if (speakerCards.length > 0) {
        gsap.fromTo(
            speakerCards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".speaker_section",
                    start: "top 75%",
                    end: "top 10%",
                    scrub: 1,
                },
            }
        );
    }

    // Schedule Section Animations
    const scheduleCards = document.querySelectorAll(".schedule_card");
    scheduleCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: "top 80%", // Animation starts when the card is 80% in view
                end: "top 20%", // Animation ends when the card is 20% in view
                toggleActions: "play none none reverse", // Play on enter, reverse on leave
            },
        });
    });

    // Booking Section Animations
    const bookingContent = document.querySelector(".booking_content");
    const bookingVideo = document.querySelector(".booking .video");

    gsap.from(bookingContent, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
            trigger: bookingContent,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
        },
    });

    gsap.from(bookingVideo, {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
            trigger: bookingVideo,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
        },
    });

    // Marketing Section Animations
    const marketingColumns = document.querySelectorAll(".grid-col");
    marketingColumns.forEach((column, index) => {
        gsap.from(column, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.2, // Staggered delay for each column
            scrollTrigger: {
                trigger: column,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
            },
        });
    });
});
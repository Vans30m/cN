// GSAP Animation for Header
gsap.to("header", {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Changes header background color
    height: "80px", // Shrinks the header height
    duration: 0.5,
    scrollTrigger: {
        trigger: "header", // Target the header for triggering animation
        scroller: "body", // Scroll container (default is body)
        start: "top -10%", // Animation starts when the top is scrolled past -10% of viewport
        end: "top -11%", // Animation ends when scrolled slightly further
        scrub: 1 // Smooth scrub animation
    }
});

// GSAP Animation for Body Background and Text Color
gsap.to("body", {
    backgroundColor: "#111", // Dark background
    color: "#fff", // White text color
    scrollTrigger: {
        trigger: "body", // Target the body element
        scroller: "body", // Scroll container
        start: "top -30%", // Animation starts earlier in the scroll
        end: "top -60%", // Animation ends further down
        scrub: 2 // Smooth scrub animation
    }
});

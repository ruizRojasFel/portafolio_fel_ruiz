// =====================================
// DYNAMIC TYPING EFFECT
// =====================================

// Create typewriter effect for hero section subtitle
const typed = new Typed('#typed-text', {
    strings: [                  // Array of strings to cycle through
        'Desarrollo de Software',
        'Desarrollo Móvil',
        'Desarrollo Web'
    ],
    typeSpeed: 80,              // Typing speed in milliseconds per character
    backSpeed: 60,              // Backspacing speed in milliseconds per character
    backDelay: 2000,            // Delay before starting to backspace (2 seconds)
    loop: true,                 // Continuously loop through strings
    showCursor: true,           // Display blinking cursor
    cursorChar: '|'             // Custom cursor character
});

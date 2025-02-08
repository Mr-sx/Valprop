const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const hoverMessage = document.getElementById('hoverMessage');
const loveSong = document.getElementById('loveSong');
const duckImage = document.getElementById('duckImage');
const owl = document.getElementById('owl');

noButton.addEventListener('mouseover', () => {
    hoverMessage.style.display = 'block'; // Show hover message
});

noButton.addEventListener('mouseout', () => {
    hoverMessage.style.display = 'none'; // Hide hover message
});

noButton.addEventListener('click', () => {
    duckImage.classList.add('cry'); // Add crying animation
    const randomX = Math.random() * (window.innerWidth - 100); // Random X position
    const randomY = Math.random() * (window.innerHeight - 100); // Random Y position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
    alert("I Love you more Pookie");
    loveSong.play(); // Play the

const yesButton =

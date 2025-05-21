document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const animateBtn = document.getElementById('animateBtn');
  const animatedBox = document.getElementById('animatedBox');
  const colorSelect = document.getElementById('colorSelect');
  
  // Animation types
  const animations = ['bounce', 'spin', 'pulse'];
  let currentAnimation = 0;
  
  // Load saved preferences
  function loadPreferences() {
    const savedColor = localStorage.getItem('boxColor');
    const savedAnimation = localStorage.getItem('boxAnimation');
    
    if (savedColor) {
      animatedBox.style.backgroundColor = savedColor;
      colorSelect.value = savedColor;
    }
    
    if (savedAnimation) {
      animatedBox.classList.add(savedAnimation);
    }
  }
  
  // Save preferences to localStorage
  function savePreferences(color, animation) {
    localStorage.setItem('boxColor', color);
    localStorage.setItem('boxAnimation', animation);
  }
  
  // Handle animation trigger
  function triggerAnimation() {
    // Remove all animation classes first
    animations.forEach(anim => animatedBox.classList.remove(anim));
    
    // Get next animation in sequence
    const nextAnimation = animations[currentAnimation % animations.length];
    animatedBox.classList.add(nextAnimation);
    
    // Save the animation preference
    savePreferences(colorSelect.value, nextAnimation);
    
    currentAnimation++;
  }
  
  // Handle color change
  function handleColorChange() {
    animatedBox.style.backgroundColor = colorSelect.value;
    savePreferences(colorSelect.value, animations[currentAnimation % animations.length]);
  }
  
  // Event Listeners
  animateBtn.addEventListener('click', triggerAnimation);
  colorSelect.addEventListener('change', handleColorChange);
  
  // Initialize
  loadPreferences();
});
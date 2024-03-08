// Thêm sự kiện tự động thay đổi
window.onload = function() {
  var autoChangeText = document.getElementById("autoChangeText");

  autoChangeText.addEventListener("animationiteration", function() {
    autoChangeText.style.animation = 'none';
    void autoChangeText.offsetWidth; // Trigger a reflow
    autoChangeText.style.animation = null;
  });

  setTimeout(function() {
      autoChangeText.classList.add("show-message");
    }, 2000);
};
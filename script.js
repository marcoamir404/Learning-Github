 const toggleButton = document.getElementById('toggleButton');
 const toggleContent = document.getElementById('toggleContent');
 
 toggleButton.addEventListener('click', function() {
//    // Check current display style and toggle it
//    if (toggleContent.style.display === 'none') {
//      toggleContent.style.display = 'block';
//    } else {
//      toggleContent.style.display = 'none';
//    }
        document.getElementById("toggleContent").innerHTML = "My First JavaScript";
 });
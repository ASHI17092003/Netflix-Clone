// // Toggle the dropdown visibility when the button is clicked
// function toggleDropdown() {
//     const dropdown = document.getElementById('languageDropdown');
//     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.lang-btn') && !event.target.matches('.arrow-icon')) {
//         const dropdowns = document.getElementsByClassName('dropdown-content');
//         for (let i = 0; i < dropdowns.length; i++) {
//             const openDropdown = dropdowns[i];
//             if (openDropdown.style.display === 'block') {
//                 openDropdown.style.display = 'none';
//             }
//         }
//     }
// }
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isActive = element.classList.toggle('active');
    content.style.display = isActive ? 'block' : 'none';
    // Toggle the plus sign rotation based on the active state
    const plusSign = element.querySelector('.plus-sign');
    plusSign.style.transform = isActive ? 'rotate(45deg)' : 'rotate(0deg)';
}
// Function to toggle the dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

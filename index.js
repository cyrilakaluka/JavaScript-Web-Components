import "./components/styled-table/styled-table.js";
import "./components/progress-bar/progress-bar.js";
import "./components/counter/counter.js";
import "./components/icon-button/icon-button.js";
import "./components/search-bar/search-bar.js";

// Styled Table
// const userTable = document.getElementById('user-table');
// userTable.data = [
//     ["8831", 'dcode', 'Australia'],
//     ["6605", "red.square", "United States"]
// ];

// // Progress Bar
// function loopWithPause(increment, pause, callback) {
//     let i = 0;

//     function loop() {
//         if (i <= 100) {
//             callback(i);
//             i += increment;
//             setTimeout(loop, pause);
//         }
//         else {
//             callback(100);
//         }
//     }

//     loop();
// }

// const progressBar = document.getElementById('progress-bar');
// progressBar.progress = 0;
// loopWithPause(3, 1000, (percent) => {
//     progressBar.progress = percent;
// });

// SearchBar
// const search = document.getElementById('search');
// search.addEventListener('search-input', (e) => {
//   console.log('Search:', e.detail);
// });
// search.addEventListener('perform-search', (e) => {
//   console.log('Perform Search:', e.detail);
// });
// search.addEventListener('clear-search', () => {
//   console.log('Clear Search');
// });
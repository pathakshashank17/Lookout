// var keyword = 'cheeky wombat', on = true;

// chrome.runtime.onMessage.addListener(({ searchFor, isOn }) => {
//     keyword = searchFor;
//     on = isOn;
//     alert(keyword, on);
//     return true;
// });

// const findKeyword = () => {
//     if (on) {
//         console.log("Content script running");
//         var captions = document.querySelectorAll(".CNusmb");
//         captions.forEach((caption) => {
//             var captionText = caption.innerHTML;
//             var words = captionText.split(' ');
//             words.forEach((word) => {
//                 if (word === keyword) {
//                     alert(`Quick! Someone said '${searchFor}'.`);
//                 }
//             });
//         });
//     }
// }

// setInterval(findKeyword, 1000);
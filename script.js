'use strict';

/// Images 
const pictures = document.querySelectorAll('.pictures');
const imageTag = document.querySelectorAll('.image-tag');

const skip = document.querySelector('.skip');
const restart = document.querySelector('.restart');

const numOfDecks = document.querySelector('.num-of-decks');

const rounds = document.querySelector('.rounds');


// pictures.forEach(pic => {
//     pic.addEventListener('click', () => {
//         console.log('uche')
//         // pic.style.display = 'none';
//     })
// });

const dog = './images/image-removebg-preview (5).png';
const cat = './images/image-removebg-preview (6).png';
const pig = './images/image-removebg-preview (7).png';
const questionMark = './images/image-removebg-preview (8).png';

const imagesArray = [dog, cat, pig];

// const randomNum = Math.floor(Math.random() * 13);

const wonTheGame = document.querySelectorAll('.won-the-game');
const playAgain = document.querySelector('.play-again');

const score = document.querySelector('.score');

const wonOrLost = document.querySelector('.won-or-lost');





/// When page loads 
function pageLoaded() {
    console.log('started');
    numOfDecks.textContent = 12;
    imageTag.forEach(img => {
        img.src = '';
        img.src = questionMark;
    })
    imgOpenedArr = []
    catArr = [];
    // console.log(catArr);
    rounds.textContent = 1;
    score.textContent = 0;
    cards();
}




let imgOpenedArr = [];
let catArr = [];
function cards() {
    // const dogArr = [];
    // const pigArr = [];
    // const outOfCards = [];
    imageTag.forEach(img => {
        let test = true;

        img.addEventListener('click', () => {
            if (test) {
                const imagesArrayRandomNum = Math.floor(Math.random() * imagesArray.length);
                // console.log(Math.floor(Math.random() * imagesArray.length));
                numOfDecks.textContent -= 1;
                img.src = imagesArray[imagesArrayRandomNum];
                // // console.log(img);
                // img.removeEventListener



                // if (imagesArray[imagesArrayRandomNum] === dog) {
                //     if (dogArr.length < 3) {
                //         dogArr.push(img.src);
                //         console.log(dogArr.length);
                //     } else if (dogArr.length >= 3) {
                //         console.log('You won');
                //         // When the game is won
                //         wonTheGame.forEach(wtg => {
                //             wtg.style.zIndex = '1';
                //         })
                //     }
                // }
                if (imagesArray[imagesArrayRandomNum] === cat) {
                    if (catArr.length < 3) {
                        catArr.push(img.src);
                        console.log(catArr.length);
                        /// Score area
                        score.textContent = Number(score.textContent) + 25;
                    } else if (catArr.length >= 3) {
                        setTimeout(wonPopUp, 500);
                    }
                }
                // else if (imagesArray[imagesArrayRandomNum] === pig) {
                //     if (pigArr.length < 3) {
                //         pigArr.push(img.src);
                //         console.log(pigArr.length);
                //     } else if (pigArr.length >= 3) {
                //         console.log('You won');
                //         // When the game is won
                //         wonTheGame.forEach(wtg => {
                //             wtg.style.zIndex = '1';
                //         })
                //     }
                // }

                imgOpenedArr.push(imagesArray[imagesArrayRandomNum]);
                // console.log(imgOpenedArr);
                if (imgOpenedArr.length === 5) {
                    setTimeout(lostPopUp, 500);
                }
            } else {
                console.log('cuhe');
                // pageLoaded()
            }

            test = false;
        });



    });

    // if ()


}




function lostPopUp() {
    wonTheGame.forEach(wtg => {
        wtg.style.zIndex = '1';
        wonOrLost.textContent = 'You lost the game';
    })
    playAgain.textContent = 'Play again';
}

function wonPopUp() {
    console.log('You won the game');
    // When the game is won
    wonTheGame.forEach(wtg => {
        wtg.style.zIndex = '1';
    })
    playAgain.textContent = 'Next round';
}


/// When Skip is clicked 
skip.addEventListener('click', () => {
    pageLoaded()
    // cards();
    rounds.textContent++
})


/// When restart is clicked 
restart.addEventListener('click', () => {
    pageLoaded()
})


// When play again button is clicked 
function clickedPlayAgain() {
    wonTheGame.forEach(wtg => {
        wtg.style.zIndex = '-1';
    })
    pageLoaded()
    rounds.textContent++

    // cards();
    // if (!(imgOpenedArr.length === 5)) {
    //     console.log('iinieen');
    // } else if (imgOpenedArr.length === 5) {
    //     pageLoaded()
    //     console.log('oooooo');
    // }
}





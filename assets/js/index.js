const output_h4 = document.querySelector('#output h4')
const qoute = document.querySelector('h4 #qoute');
const inputEntry = document.querySelector('#entry input[type=text]');
const submitEntry = document.querySelector('#entry input[type=button]');
const img = document.querySelector('.img img');
const genButton = document.querySelector('#output button')
const qouteArray = ["Believe everyone's dangerous, believe nobody's more dangerous"];
const imageArr = ['Collapss_building.jpg', 'design.jpg', 'google-free-wifi.jpg', 'Google-wifi.jpg', 'Google.jpg',
                 'MOST-SEARCH-2018.jpg','SmallLaughing.jpg', 'studio-homepage-hero.jpg', 'TECH-TEAM.jpg', 'VP-QOUTE.jpg'];
/**
 * @description generate a random numbers
 * @function genRandomNum
 * @param {*} arrLen Qoute/images - array lenght
 * @returns {Number} whole-number
 */
function genRandomNum (arrLen, nums = 0) {
    const num = arrLen.length - 1 + nums;
    const numGen = Math.floor(Math.random() * num)
    return numGen
}

/**
 * @description generate a random numbers
 * @function render
 * @param {*} qouteArr
 * @param {*} imgArr
 * @requires img tagName
 * @requires qoute tagName
 * @returns {void} render
 */
function render(qouteArr, imgArr) {
    const num = genRandomNum(imgArr);
    // inline styling
    if (window.innerHeight > 400) {
        output_h4.style.color = num === 5 || num === 1 ? 'gold' : 'white';
        output_h4.style.top = num === 8 ? 12 + '%' : num === 1 ? 46 + '%' : num === 4 ? 15 + '%' :
            num === 7 ? 45 + '%' : num === 6 ? 12 + '%' : 40 + '%';
        const style = {
            marginBottom: '3vh'
        }
    }
    // end inline styline

    img.src = `/assets/imgs/${imgArr[num]}`;
    img.alt = imgArr[num].replace('.jpg', '');

    const numQ = genRandomNum(qouteArr, 1)
    qoute.innerHTML = qouteArr[numQ];
}

genButton.addEventListener('click', function (event) {
    render(qouteArray, imageArr)
})

submitEntry.addEventListener('click', function (event) {
    const str = inputEntry.value;
    if (str === '') {
        return
    }
    qouteArray.push(str);
    return inputEntry.value = '';
})

inputEntry.addEventListener('keydown', function (event) {
    const str = event.target.value;
    if (event.keyCode === 13) {
        if (str === '') {
            return
        }
        qouteArray.push(str);
        return event.target.value = '';
    }
})
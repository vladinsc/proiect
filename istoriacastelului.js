document.addEventListener("DOMContentLoaded", () => { 
    const bcamera1 = document.getElementById('camera1');
    const bcamera2 = document.getElementById('camera2');
    const bcamera3 = document.getElementById('camera3');
    const bcamera4 = document.getElementById('camera4');
    const camera1Display = document.getElementById('camera1Cnt');
    const camera2Display = document.getElementById('camera2Cnt');
    const camera3Display = document.getElementById('camera3Cnt');
    const camera4Display = document.getElementById('camera4Cnt');
    const x = document.getElementById('boxcontainer');
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    function culoareRandom(){
        return Math.floor(Math.random() * 255);
    }
    bcamera1.addEventListener('click' , () => {
            count1++;
            camera1Display.textContent = count1;
            x.style.backgroundColor = 'rgba('+ culoareRandom() + ',' + culoareRandom() + ',' + culoareRandom() + '\)'
    });
    bcamera2.addEventListener('click' , () => {
        count2++;
        camera2Display.textContent = count2;
        x.style.backgroundColor = 'rgba('+ culoareRandom() + ',' + culoareRandom() + ',' + culoareRandom() + '\)'
});
bcamera3.addEventListener('click' , () => {
    count3++;
    camera3Display.textContent = count3;
    x.style.backgroundColor = 'rgba('+ culoareRandom() + ',' + culoareRandom() + ',' + culoareRandom() + '\)'
});
bcamera4.addEventListener('click' , () => {
count4++;
camera4Display.textContent = count4;
x.style.backgroundColor = 'rgba('+ culoareRandom() + ',' + culoareRandom() + ',' + culoareRandom() + '\)'
});



})
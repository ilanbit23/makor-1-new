var txt1 = `יוצא לאור בcity <br/>
עורך ראשי firstName \xa0 reporterFamilyName`

var txt2 = `נבחרת ישראל
בhobby
העפילה לשלב
הגמר שייערך
בעוד שנה
<span>עמוד 5</span>`

var txt3 = `משרד התחבורה
הודיע כי מעתה
בשעות הבוקר
המוקדמות,var txt1 = `יוצא לאור בcity <br/>
עורך ראשי firstName \xa0 reporterFamilyName`

var txt2 = `נבחרת ישראל
בhobby
העפילה לשלב
הגמר שייערך
בעוד שנה
<span>עמוד 5</span>`

var txt3 = `משרד התחבורה
הודיע כי מעתה
בשעות הבוקר
המוקדמות,
כל הרמזורים
יהיו בצבע
favoriteColor מעושן | <span>עמוד 7</span>`

var txt4 = `בניסוי שהתקיים
בחודש האחרון
במרכז החלל
הישראלי הצליחה
ישראל לשגר
חללית לvacation |
<span>עמוד 2</span>`

var txt5 = `בקידוחים שנערכו השבוע באזור lastPlace,
 התגלה מצבור של drink בהיקף
המוערך בכ- age מיליון חביות | 
<span>עמוד 18</span>`

var txt6 = `משטרת ישראל החליטה כי מעתה תושבים 
 ששם משפחתם מתחיל באות lastLetter' לא יקבלו
 שיחות טלפון מקבר רחל | 
 <span>עמוד 24</span>`

function generate(event) {
    event.preventDefault();
    replaceTxt('firstName');
    replaceTxt('age');
    replaceTxt('city');
    replaceTxt('reporterFamilyName');
    replaceTxt('hobby');
    replaceTxt('vacation');
    replaceTxt('lastPlace');
    replaceTxt('drink');
    replaceTxt('favoriteColor');
    replaceTxt('lastLetter');

    document.querySelector('.txt1').innerHTML = txt1;
    document.querySelector('.txt2').innerHTML = txt2;
    document.querySelector('.txt3').innerHTML = txt3;
    document.querySelector('.txt4').innerHTML = txt4;
    document.querySelector('.txt5').innerHTML = txt5;
    document.querySelector('.txt6').innerHTML = txt6;

    document.getElementById("bg").remove();
    document.querySelector('.html-background').style.background = 'none';
    var output = document.getElementById("output");
    var news = document.querySelector(".news");
    output.style.display = 'block';
    news.style.letterSpacing = '0.2px';
    document.querySelector('.social').style.display = 'none';
    document.querySelector('.logo').style.display = 'none';
    window.scrollTo(-640, 0);
    html2canvas(document.querySelector(".output"), {
        scale: 1,
    }).then(canvas => {
        document.querySelector('.canvas-container').appendChild(canvas);
        canvas.style.display = "none";
        document.querySelector('.social').style.display = 'flex';
        document.querySelector('.logo').style.display = 'block';
    });

}

function replaceTxt(prop) {
    const el = document.querySelector(`input[name=${prop}]`)
    const val = el.value;
    txt1 = txt1.replace(new RegExp(`${prop}`, 'g'), val)
    txt2 = txt2.replace(new RegExp(`${prop}`, 'g'), val)
    txt3 = txt3.replace(new RegExp(`${prop}`, 'g'), val)
    txt4 = txt4.replace(new RegExp(`${prop}`, 'g'), val)
    txt5 = txt5.replace(new RegExp(`${prop}`, 'g'), val)
    txt6 = txt6.replace(new RegExp(`${prop}`, 'g'), val)
}

function downloadImg(elLink) {
    const elCanvas = document.querySelector('canvas');
    var imgContent = elCanvas.toDataURL('image/jpeg', 1.0);
    elLink.href = imgContent;
}
כל הרמזורים
יהיו בצבע
favoriteColor מעושן | <span>עמוד 7</span>`

var txt4 = `בניסוי שהתקיים
בחודש האחרון
במרכז החלל
הישראלי הצליחה
ישראל לשגר
חללית לvacation |
<span>עמוד 2</span>`

var txt5 = `בקידוחים שנערכו השבוע באזור lastPlace,
 התגלה מצבור של drink בהיקף
המוערך בכ- age מיליון חביות | 
<span>עמוד 18</span>`

var txt6 = `משטרת ישראל החליטה כי מעתה תושבים 
 ששם משפחתם מתחיל באות lastLetter' לא יקבלו
 שיחות טלפון מקבר רחל | 
 <span>עמוד 24</span>`

function generate(event) {
    event.preventDefault();
    replaceTxt('firstName');
    replaceTxt('age');
    replaceTxt('city');
    replaceTxt('reporterFamilyName');
    replaceTxt('hobby');
    replaceTxt('vacation');
    replaceTxt('lastPlace');
    replaceTxt('drink');
    replaceTxt('favoriteColor');
    replaceTxt('lastLetter');

    document.querySelector('.txt1').innerHTML = txt1;
    document.querySelector('.txt2').innerHTML = txt2;
    document.querySelector('.txt3').innerHTML = txt3;
    document.querySelector('.txt4').innerHTML = txt4;
    document.querySelector('.txt5').innerHTML = txt5;
    document.querySelector('.txt6').innerHTML = txt6;

    document.getElementById("bg").remove();
    document.querySelector('.html-background').style.background = 'none';
    var output = document.getElementById("output");
    var news = document.querySelector(".news");
    output.style.display = 'block';
    news.style.letterSpacing = '0.2px';
    document.querySelector('.social').style.display = 'none';
    document.querySelector('.logo').style.display = 'none';
    window.scrollTo(-550, 0);
    html2canvas(document.querySelector(".output"), {
        scale: 1,
    }).then(canvas => {
        document.querySelector('.canvas-container').appendChild(canvas);
        canvas.style.display = "none";
        document.querySelector('.social').style.display = 'flex';
        document.querySelector('.logo').style.display = 'block';
    });

}

function replaceTxt(prop) {
    const el = document.querySelector(`input[name=${prop}]`)
    const val = el.value;
    txt1 = txt1.replace(new RegExp(`${prop}`, 'g'), val)
    txt2 = txt2.replace(new RegExp(`${prop}`, 'g'), val)
    txt3 = txt3.replace(new RegExp(`${prop}`, 'g'), val)
    txt4 = txt4.replace(new RegExp(`${prop}`, 'g'), val)
    txt5 = txt5.replace(new RegExp(`${prop}`, 'g'), val)
    txt6 = txt6.replace(new RegExp(`${prop}`, 'g'), val)
}

function downloadImg(elLink) {
    const elCanvas = document.querySelector('canvas');
    var imgContent = elCanvas.toDataURL('image/jpeg', 1.0);
    elLink.href = imgContent;
}

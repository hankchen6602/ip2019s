/*

*/


function start(e) {
    var name=[
        {
            char :'陳',
            big5 :'B3AF',
            cns :'1-5D73',
            unicode:'9673'
        },
        {
            char :'昶',
            big5 :'CEEB',
            cns :'2-2A6C',
            unicode:'6636'
        },
        {
            char :'宇',
            big5 :'A674',
            cns :'1-4775',
            unicode:'5B87'
        }
    ];

    var ele = document.getElementById('div1');

    for(var i= 0 ; i < 3 ; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }

}
/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );

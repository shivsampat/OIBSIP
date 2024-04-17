document.addEventListener('DOMContentLoaded',function(){
    let historyDIV=document.querySelector('.history');
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let history="";
    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            handleButtonClick(button.innerText);
        });
    });
function handleButtonClick(value)
{
    if(value=== 'C'){
        clearALL();
    }
    else if(value==='DEL'){
        deleteLastChar();
    }
    else if(value ==='='){
        evaluteExpression();
    }
    else{
        appendToScreen(value);
    }
}

function clearALL(){
    screen.textContent="";
    history="";
    updateHistory();

}

function deleteLastChar(){
    let currentText=screen.textContent;
    screen.textContent=currentText.slice(0,-1);
}

function appendToScreen(value){
      screen.textContent+=value;
}
function evaluteExpression(){
    try{
        let expression=screen.textContent;
        let result=eval(expression);
        result=parseFloat(result.toFixed(5));
        history=expression+'='+result;
        screen.textContent=result;
        updateHistory();
    }
    catch(error){
        screen.textContent='Error';

    }
}
function updateHistory(){
    historyDIV.textContent=history;

}
});

    


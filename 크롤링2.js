var x = new XMLHttpRequest();
// 네? xml 인증오류때문에 안된다구요? 크롬스토어 Allow-Control-Allow-Origin 이거 까셈ㅋ


x.open("GET","http://school.gyo6.net/gbsw/203678/food");

x.send();

function test(){
    
    if(x.readyState == '4'){
    console.log('complete road');

    let i;
    var el = document.createElement('Element')
    el.innerHTML = x.responseText;
    
    for(i=0;i<el.querySelectorAll('p.menu').length;i++) {
    document.writeln(el.querySelectorAll('p.menu')[i].innerText+'<br>');
    }
    clearInterval(timer);
}
else{
    console.log('loading');

}
}
let timer = setInterval(test,100);


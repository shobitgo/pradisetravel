// let text=document.getElementById('text');
let uu=document.getElementById('uu');
let pp=document.getElementById('pp');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // text.style.marginTop = value *3.5 +'px';
    pp.style.marginTop=value *.4+'px';
    uu.style.marginTop=value *.3 +'px';
    ml.style.marginLeft=value *-.2 +'px';
    mr.style.marginLeft=value *.2 +'px';
    // r7.style.marginLeft=value *-1 +'px';
    // r6.style.marginTop=value *1.5 +'px';
})

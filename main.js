'use strict'

{
     // FAQ
    const dts =document.querySelectorAll('dt');

    dts.forEach(dt => {
        dt.addEventListener('click',()=>{
            dt.parentNode.classList.toggle('open');

            dts.forEach(el =>{
                if (dt !== el){
                    el.parentNode.classList.remove('open');
                }
            });
        });
    }); 

    // トップ画像切り替え

    function process(){
        document.getElementById('target').textContent = '＼ はごたえパリッ ／';
        document.getElementById('target').classList.add('commentR');
        document.getElementById('trigger').classList.add('hide');
        document.getElementById('shadow').classList.add('show');
    }

    document.getElementById('trigger').addEventListener('click', process);

    function processume(){
        document.getElementById('target-umetext').textContent = '＼ すっぱおいしい ／';
        document.getElementById('target-umetext').classList.add('commentU');
        document.getElementById('trigger-ume').classList.add('hide-ume');
        document.getElementById('shadow-ume').classList.add('show-ume');
    }

    document.getElementById('trigger-ume').addEventListener('click',processume);

    function processalc(){
        document.getElementById('target-alctext').textContent = '＼ 梅ジャムも作れる! ／';
        document.getElementById('target-alctext').classList.add('commentA');
        document.getElementById('trigger-alc').classList.add('hide-alc');
        document.getElementById('shadow-alc').classList.add('show-alc');
    }

    document.getElementById('trigger-alc').addEventListener('click',processalc);

}
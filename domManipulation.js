const images=document.querySelectorAll('img');
for(image of images){
    image.style.height='15%';
    image.style.width='15%';
    image.style.transition='all 2s';
    

}

setInterval(()=>{
    images.forEach((image)=>{
        const y=Math.floor(Math.random()*document.body.clientHeight);
        const x=Math.floor(Math.random()*document.body.clientWidth);
        const degree=Math.floor(Math.random()*360);
        image.style.transform=`translate(${x}px,${y}px) rotate(${degree}deg)`;
    })
},2000);
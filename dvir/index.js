let me = new XMLHttpRequest();

me.open('GET', 'me.json');

me.addEventListener('readystatechange', () => {
    if(me.readyState === XMLHttpRequest.DONE){
        const data = JSON.parse(me.responseText);
        
    }
})
const sounds =['تصفيق','بوو','شهيق','تادا','فوز','خاطئ']

sounds.forEach(sound=> {
    const btn=document.createElement('button')
    btn.classList.add('btn')

    btn.innerText=sound

    btn.addEventListener('click' , ()=> {
        stopSong()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSong() {
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime=0;
    })
}
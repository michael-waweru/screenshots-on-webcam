const screenshotC = document.getElementById('screenshot')
const videoC = document.getElementById('webcam-video')
let imageCapture

const startCam = () => {
    if ( navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
            videoC.srcObject = stream
            imageCapture = new ImageCapture(stream.getVideoTracks()[0])
        }).catch(err => {
            console.log('Ooops! Something went wrong! Try again', err)
        })
    }
}

const takeScreenshot = () => {
    imageCapture.takePhoto().then(capture => {
        const img = document.createElement('img')
        img.src = window.URL.createObjectURL(capture)
        screenshotC.appendChild(img)
    })
}
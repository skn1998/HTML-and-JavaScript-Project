function capture()
{
    let video = document.getElementById('video');
    let canvas = document.getElementById('canvas');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // for drawing the video element on the canvas
    let data = canvas.toDataURL("image/jpg");
    console.log('canvas data: ', data); 

    // Downloading the Base64 string //
    let dl = document.getElementById("dl");
    dl.href = "data:text/plain," + encodeURIComponent(data);
    dl.click();

    // Downloading the Image //
    let di;
    di = document.getElementById("di"); 
    di.href = data; //Image Base64 Goes here
    di.click(); //Downloaded file
}

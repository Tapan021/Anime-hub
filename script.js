document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('videoFile');
    const file = fileInput.files[0];
    if (file) {
        const videoPreview = document.getElementById('videoPreview');
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(file);
        videoElement.controls = true;
        videoPreview.innerHTML = '';
        videoPreview.appendChild(videoElement);
    }
});

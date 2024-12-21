document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('videoFile');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('videoFile', file);

    const response = await fetch('YOUR_CLOUD_STORAGE_UPLOAD_URL', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Video uploaded successfully!');
    } else {
        alert('Failed to upload video.');
    }
});

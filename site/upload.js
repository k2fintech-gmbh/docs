document.getElementById('fileInput').addEventListener('change', function(event) {

    var formData = new FormData();
    formData.append('file', fileInput.files[0]);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://dev.iambig.ai/public/upload', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var uploadStatus = document.getElementById('uploadStatus');
            uploadStatus.innerHTML = 'File uploaded successfully! URL: <a href="' + response.url + '">' + response.url + '</a>';
            var copyButton = document.createElement('button');
            var img = document.createElement('img');
            img.src = response.url;
            img.style.maxWidth = '100%';
            img.style.marginTop = '10px';
            copyButton.innerHTML = 'Copy to Clipboard';
            copyButton.onclick = function() {
                navigator.clipboard.writeText(response.url).then(function() {
                    alert('URL copied to clipboard!');
                }, function(err) {
                    alert('Failed to copy URL: ', err);
                });
            };
            uploadStatus.appendChild(copyButton);
            uploadStatus.appendChild(img);

        } else {
            document.getElementById('uploadStatus').innerHTML = 'File upload failed! URL: ' + xhr.responseText;
        }
    };

    if (fileInput.files.length > 0) {
        xhr.send(formData);
    }
});

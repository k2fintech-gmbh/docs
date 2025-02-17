<head>
	<link
		href="https://releases.transloadit.com/uppy/v3.0.1/uppy.min.css"
		rel="stylesheet"
	/>
</head>
<label for="jwt-input">JWT Token:</label>
<input type="text" id="jwt-input" placeholder="Enter JWT here" style="width: 100%; margin-bottom: 10px;" />
<label for="api-input">Files Server:</label>
<input type="text" id="api-input" placeholder="Enter server Address" style="width: 100%; margin-bottom: 10px;" value="https://dev.files.iambig.ai" />

<button class="upload-button" style="font-size: 30px;
padding: 5px 5px;
border: 2px solid black;
border-radius: 12px; /* Rounded corners */
background-color: white;
cursor: pointer;
transition: all 0.2s ease-in-out;">
	set values
</button>

<div id="drag-drop-area" style="height: 300px"></div>
<div class="for-ProgressBar"></div>
<div class="uploaded-files" style="margin-top: 50px">
	<ol></ol>
</div>

<script type="module">
    import {
        Uppy,
        Tus,
        DragDrop,
        ProgressBar,
    } from "https://releases.transloadit.com/uppy/v3.0.1/uppy.min.mjs";

    const uppy = new Uppy({ debug: true, autoProceed: true });

    let endpoint = "http://localhost:8789/video/directUpload";
    let jwt = {};

    const onUploadSuccess = (el) => (file, response) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = response.uploadURL;
        a.target = "_blank";
        a.appendChild(document.createTextNode(file.name));
        li.appendChild(a);

        document.querySelector(el).appendChild(li);
    };

    uppy.use(DragDrop, { target: "#drag-drop-area" })
        .use(Tus, {
            chunkSize: 150 * 1024 * 1024,
            headers: jwt,
            endpoint: endpoint,
        })
        .use(ProgressBar, {
            target: ".for-ProgressBar",
            hideAfterFinish: false,
        })
        .on("upload-success", onUploadSuccess(".uploaded-files ol"));

    const setBtn = document.querySelector("button.upload-button");
	setBtn.addEventListener("click", () => 
        {
            const jwtValue = document.getElementById("jwt-input").value;
            jwt = jwtValue ? { Authorization: `Bearer ${jwtValue}` } : {};
            const apiValue = document.getElementById("api-input").value;
            endpoint = apiValue ? `${apiValue}/video/directUpload` : "http://localhost:8789/video/directUpload"
            console.log(endpoint)
        });
</script>


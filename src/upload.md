# Upload File

to dev.imabig.ai/public/
<form id="uploadForm" enctype="multipart/form-data">
  <input type="file" name="file" id="fileInput" required>
</form>

<div id="uploadStatus" style="margin-top: 20px;"></div>

<style>
  #uploadForm {
    margin: 20px 0;
  }
  #uploadStatus {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  #uploadStatus a {
    color: #007bff;
    text-decoration: none;
  }
  #uploadStatus button {
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  #uploadStatus img {
    display: block;
    max-width: 100%;
    margin-top: 10px;
  }
  #uploadStatus button:hover {
    background-color: #0056b3;
  }
</style>
<script src="../upload.js"></script>

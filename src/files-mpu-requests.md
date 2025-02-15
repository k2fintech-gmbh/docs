# Files API 

---
## NOTE:
**Files & big files stored in R2**<br/>
**Video & big video files stored in Stream**<br/>

## NOTE:
**Base URL for these APIs:**<br/>
`https://dev.files.iambig.ai`

## NOTE:
**All endpoints (except of getting files & previews) require Authorization**<br/>

---
### Uploading file

<summary><code>POST</code> <code><b>/file</b></code></summary>       

Upload a file as FormData.<br />
For files with size > 10 Mb use multi-part upload
For Video files - use /video endpoints

##### Parameters (FormData)

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | file         | required | blob      | file data              |


##### Responses

> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"url":"https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4"}`             |
> | `400`     | `application/json` | `{"error": "No file uploaded","timestamp": 1737195610743,"status": 400}`       |
> | `500`     | `application/json` | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example cURL

> ```javascript
>  curl -X POST https://dev.files.iambig.ai/file -F "file=@Sample_1mb.mp3" 
> ```    

##### Example Response

> ```json
> {
>   "url": "https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4"
> }
> ``` 

---

### Retrieving file

<summary><code>GET</code> <code><b>/file/{id}</b></code> </summary>

Get file contents or video file link for playback.


##### Parameters

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | id           | required | string    | internal file id       |


##### Responses

> | http code | content-type               | response                                                  |
> |-----------|----------------------------|-----------------------------------------------------------|
> | `200`     | `text/plain;charset=UTF-8` | `https://customer-....cloudflarestream.com/...video.m3u8` |
> | `404`     | `application/json`         | `{"code":"404","message":"File not found"}`               |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4
> ```

##### Example Response

> ```text
> https://customer-....cloudflarestream.com/...video.m3u8
> ```

---

### Delete file

<summary><code>DELETE</code> <code><b>/file/{id}</b></code></summary>

Completely delete file from storage.

##### Parameters

> | name | type     | data type | description                  |
> |------|----------|-----------|------------------------------|
> | id   | required | string    | internal file id             |


##### Responses

> | http code | content-type        | response                                                              |
> |-----------|---------------------|-----------------------------------------------------------------------|
> | `200`     | `application/json`  | `{}`                                                                  |
> | `500`     | `application/json`  | `{"error":"Bad Request","timestamp":1737207795625,"status":500}`      |

##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4
> ```

##### Example Response

> ```json
> {}
> ```

---

## Video

### Uploading video file
<summary><code>POST</code> <code><b>/video/upload</b></code></summary> 
or
<summary><code>POST</code> <code><b>/file</b></code></summary>

Upload a video file as FormData.<br />
For video files with size > 10 Mb use TUS client & /video/directUpload

Set `downloadable` to true so downloadable link can be get for this file.<br />
`Downloadable` option not available on /public endpoint.


##### Parameters (FormData)

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | file         | required | blob      | file data              |
> | downloadable | optional | boolean   | generate download link |


##### Responses

> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"url":"https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4"}`             |
> | `400`     | `application/json` | `{"error": "No file uploaded","timestamp": 1737195610743,"status": 400}`       |
> | `500`     | `application/json` | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example cURL

> ```javascript
>  curl -X POST https://dev.files.iambig.ai/video/upload -F "file=@SampleVideo_1280x720_1mb.mp4" -F "downloadable=true"
> ```    

##### Example Response

> ```json
> {
>   "url": "https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4"
> }
> ``` 

---

### Uploading video file via URL

<summary><code>POST</code> <code><b>/video/uploadByUrl</b></code></summary>

Upload a video file via URL.<br />

Set `downloadable` to true so downloadable link can be get for this file.


##### Parameters (body)

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | url          | required | string    | file link (url)        |
> | downloadable | optional | boolean   | generate download link |


##### Responses

> | http code | content-type        | response                                                                       |
> |-----------|---------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json`  | `{"url":"https://dev.files.iambig.ai/public/zAE2h2mPSKjWwnxw8qxp4"}`           |
> | `400`     | `application/json`  | `{"error": "No file uploaded","timestamp": 1737195610743,"status": 400}`       |
> | `500`     | `application/json`  | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example cURL

> ```javascript
>  curl -X POST https://dev.files.iambig.ai//video/uploadByUrl --data '{"url":"https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_2mb.mp4","downloadable":"true"}'
> ```

##### Example Response

> ```json
> {
>   "url": "https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4"
> }
> ```

---

### Retrieving video file

<summary><code>GET</code> <code><b>/video/{id}</b></code> </summary>
or
<summary><code>GET</code> <code><b>/file/{id}</b></code> </summary>

Get video file link for playback.


##### Parameters

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | id           | required | string    | internal file id       |


##### Responses

> | http code | content-type               | response                                                  |
> |-----------|----------------------------|-----------------------------------------------------------|
> | `200`     | `text/plain;charset=UTF-8` | `https://customer-....cloudflarestream.com/...video.m3u8` |
> | `404`     | `application/json`         | `{"code":"404","message":"File not found"}`               |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" https://dev.files.iambig.ai/video/zAE2h2mPSKjWwnxw8qxp4
> ```

##### Example Response

> ```text
> https://customer-....cloudflarestream.com/...video.m3u8
> ```           

---

### Retrieving video file Metadata

<summary><code>GET</code> <code><b>/video/{id}/metadata</b></code></summary>

Get video file Metadata.

##### Parameters

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | id           | required | string    | internal file id       |


##### Responses

> | http code | content-type        | response                                      |
> |-----------|---------------------|-----------------------------------------------|
> | `200`     | `application/json`  | See ["VideoFileMetadata"](types/video.md)     |
> | `404`     | `application/json`  | `{"code":"404","message":"File not found"}`   |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" https://dev.files.iambig.ai/video/zAE2h2mPSKjWwnxw8qxp4/metadata
> ```

##### Example Response

> ```json
> {
> "uid": "string",
> "thumbnail": "string",
> "thumbnailTimestampPct": 0,
> "readyToStream": true,
> "status": {
>   "state": "string",
>   "pctComplete": "string",
>   "errorReasonCode": "string",
>   "errorReasonText": "string"
>   },
> "meta": {
>   "name": "string"
>   },
> "created": "string",
> "modified": "string",
> "scheduledDeletion": "string",
> "size": 0,
> "preview": "string",
> "uploaded": "string",
> "duration": 0,
> "input": {
>   "width": 0,
>   "height": 0
>   },
> "playback": {
>   "hls": "string",
>   "dash": "string"
>   },
> "publicDetails": {
>   "title": "string",
>   "share_link": "string",
>   "channel_link": "string",
>   "logo": "string"
>   }
> }
> ```

---

### Retrieving Thumbnail link for video file

<summary><code>GET</code> <code><b>/video/{id}/thumbnail?anim=false</b></code></summary>

Get video file Thumbnail.<br />

Pass `anim` query param as true to get animated preview (GIF)


##### Parameters

> | name | type     | data type | description                  |
> |------|----------|-----------|------------------------------|
> | id   | required | string    | internal file id             |
> | anim | optional | boolean   | get animated (GIF) thumbnail |


##### Responses

> | http code | content-type               | response                                                     |
> |-----------|----------------------------|--------------------------------------------------------------|
> | `200`     | `text/plain;charset=UTF-8` | `https://customer-....cloudflarestream.com/...thumbnail.jpg` |
> | `404`     | `application/json`         | `{"code":"404","message":"File not found"}`                  |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" https://dev.files.iambig.ai/video/zAE2h2mPSKjWwnxw8qxp4/thumbnail
> ```

##### Example Response

> ```text
> https://customer-....cloudflarestream.com/...thumbnail.jpg
> ```

---

### Retrieving direct Download link for video file

<summary><code>GET</code> <code><b>/video/{id}/download</b></code></summary> 

Get direct download link for video file.<br />

Link is available only if file was uploaded with `downloadable` option.

##### Parameters

> | name | type     | data type | description                  |
> |------|----------|-----------|------------------------------|
> | id   | required | string    | internal file id             |


##### Responses

> | http code | content-type               | response                                                                            |
> |-----------|----------------------------|-------------------------------------------------------------------------------------|
> | `200`     | `text/plain;charset=UTF-8` | `https://customer-....cloudflarestream.com/downloads/default.mp4`                   |
> | `202`     | `application/json`         | `{"error":"Link is not ready. Processing.","timestamp":1737206374733,"status":202}` |
> | `400`     | `application/json`         | `{"error":"File is not Downloadable","timestamp":1737207459549,"status":400}` |
> | `404`     | `application/json`         | `{"error":"Bad request. File not found","timestamp":1737206414766,"status":404}`    |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" https://dev.files.iambig.ai/video/zAE2h2mPSKjWwnxw8qxp4/download
> ```

##### Example Response

> ```text
> https://customer-....cloudflarestream.com/downloads/default.mp4
> ```

---

### Uploading big video file by means of TUS client

<summary><code>POST</code> <code><b>/video/directUpload</b></code></summary>
<summary><code>OPTIONS</code> <code><b>/video/directUpload</b></code></summary>

This endpoint should be used directly in TUS client.<br/>
**NOTE:** Strip alpha-numeric part from URL received in `Location` header and use it as file ID in other calls.<br />
**NOTE:** Authorization header required.

---

## MPU

### Initiate multi-part file Upload

<summary><code>POST</code> <code><b>/mpu-create</b></code></summary>

To upload file grater than 10 Mb used a multi-part upload scheme.<br/>
This endpoint is used to initiate such upload. Split file in chunks (minimum chunk size is 5 Mb) 
and upload chunks via **/mpu-uploadpart**<br/>
After finishing uploading of all chunks - call **/mpu-complete**<br/>
You can manually abort MPU sequence by calling **/mpu-abort/:id**

##### Parameters (body)

> | name      | type     | data type | description         |
> |-----------|----------|-----------|---------------------|
> | fileName  | required | string    | file name           |
> | fileSize  | required | number    | file size in bytes  |
> | chunkSize | optional | number    | chunk size in bytes |


##### Responses

> | http code | content-type        | response                                                                     |
> |-----------|---------------------|------------------------------------------------------------------------------|
> | `200`     | `application/json`  | `{"id":"zAE2h2mPSKjWwnxw8qxp4"}`                                             |
> | `400`     | `application/json`  | `{"error": "No file uploaded","timestamp": 1737195610743,"status": 400}`     |
> | `401`     | `application/json`  | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`         |
> | `500`     | `application/json`  | `{"error": "Failed to start MPU","timestamp": 1737195610743,"status": 500}`  |

##### Example Request
> ```json
> {
>   "fileName": "bigFile.mp3",
>   "fileSize": 100000000,
>   "chunkSize": 6000000
> }    
> ```

##### Example Response

> ```json
> {
>   "url": "https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4"
> }
> ```

---

### Get info about MPU

<summary><code>GET</code> <code><b>/mpu-getinfo/{id}</b></code></summary>

Information about MPU process and already uploaded part stored in DO 
and can be retrieved via this Endpoint. Just provide `id` received from **/mpu-create**<br/>
Parts from this call may be used in completing MPU.

##### Parameters (path)

> | name         | type     | data type | description |
> |--------------|----------|-----------|-------------|
> | id           | required | string    | file/MPU ID |


##### Responses

> | http code | content-type        | response                                                                       |
> |-----------|---------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json`  | `{}`                                                                           |
> | `401`     | `application/json`  | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json`  | `{"error": "MPU not found","timestamp": 1737195610743,"status": 404}`          |
> | `500`     | `application/json`  | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example Response

> ```json
> {
>     "id": "zAE2h2mPSKjWwnxw8qxp4",
>     "uploadId": "zAE2h2mPSKjWwnxw8qxp4zAE2h2mPSKjWwnxw8qxp4zAE2h2mPSKjWwnxw8qxp4",
>     "parts": [{
>       "partNumber": 1,
>       "etag": "zAE2h2mPSKjWwnxw8qxp4zAE2h2mPSKj"
>     }],
>     "fingerPrint": "zAE2h2mPSKjWwnxw8qxp4zAE2h2mPSKj",
>     "size": 100000000,
>     "chunkSize": 6000000,
>     "createdAt": 17000000000
> }
> ```

---

### Finalize the MPU

<summary><code>POST</code> <code><b>/mpu-complete</b></code></summary>

To Finalize multi-part upload this endpoint must be called.<br/>
Just provide `id` received from **/mpu-create**.<br/>
**Note:** Client can provide `parts` or they can be recovered from DO storage.<br/>
Parts array should be sorted by partNumber.

##### Parameters (body)

> | name  | type     | data type                          | description |
> |-------|----------|------------------------------------|-------------|
> | id    | required | string                             | MPU id      |
> | parts | optional | {partNumber: number, etag: string} | parts info  |


##### Responses

> | http code | content-type        | response                                                                       |
> |-----------|---------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json`  | `{file: "https://dev.files.iambig.ai/fi..."}`                                  |
> | `401`     | `application/json`  | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json`  | `{"error": "MPU not found","timestamp": 1737195610743,"status": 404}`          |
> | `500`     | `application/json`  | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example Request

> ```json
> {
>     "id": "zAE2h2mPSKjWwnxw8qxp4",
>     "parts": [{
>       "partNumber": 1,
>       "etag": "zAE2h2mPSKjWwnxw8qxp4zAE2h2mPSKj"
>     },
>     {
>       "partNumber": 2,
>       "etag": "zAE2h2mPSKjWwnxdfsdfw8qxp4zAE2h2mPSKj"
>     }]
> }
> ```

##### Example Response

> ```json
> {
>     "url": "https://dev.files.iambig.ai/file/zAE2h2mPSKjWwnxw8qxp4"
> }
> ```

---

### Put one part of MPU

<summary><code>PUT</code> <code><b>/mpu-uploadpart</b></code></summary>

Upload a part as FormData.<br /><br />
Append part buffer to a `data` key.<br />
Set `id` key to value received in **/mpu-create** call.<br />
Set `partNumber` key to indicate index of the part.<br />
**NOTE:** Parts numbering starts from `1`

##### Parameters (FormData)

> | name       | type      | data type | description |
> |------------|-----------|-----------|-------------|
> | data       | required  | blob      | file part   |
> | id         | required  | string    | MPU id      |
> | partNumber | required  | number    | part index  |


##### Responses

> | http code | content-type        | response                                                                       |
> |-----------|---------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json`  | `{"partNumber": 2, "etag": "zAE2h2mPSKjWwnxdfsdfw8qxp4zAE2h2mPSKj"}`           |
> | `401`     | `application/json`  | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json`  | `{"error": "MPU not found","timestamp": 1737195610743,"status": 404}`          |
> | `500`     | `application/json`  | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example Response

> ```json
> {
>   "partNumber": "2",
>   "etag": "zAE2h2mPSKjWwnxdfsdfw8qxp4zAE2h2mPSKj"
> }
> ```

---

### Abort MPU file Upload

<summary><code>DELETE</code> <code><b>/mpu-abort/{id}</b></code></summary>

##### Parameters (path)

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | id           | required | string    | MPU id                 |


##### Responses

> | http code | content-type        | response                                                                       |
> |-----------|---------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json`  | `{}`           |
> | `401`     | `application/json`  | `{"error": "Unauthorized","timestamp": 1737195610743,"status": 401}`           |
> | `404`     | `application/json`  | `{"error": "MPU not found","timestamp": 1737195610743,"status": 404}`          |
> | `500`     | `application/json`  | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example Response

> ```json
> {}
> ```

---
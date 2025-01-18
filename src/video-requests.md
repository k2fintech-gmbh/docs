# Video files API (CF Stream)

#### Uploading video file

<summary><code>POST</code> <code><b>/video/upload</b></code></summary> 
<code>Upload a video file as FromData.<br /> 
Set downloadable to true so downloadable link can be get for this file.
</code>

##### Parameters (FromData)

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | file         | required | blob      | file data              |
> | downloadable | optional | boolean   | generate download link |


##### Responses

> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"url":"https://dev.iambig.ai/public/zAE2h2mPSKjWwnxw8qxp4"}`                 |
> | `400`     | `application/json` | `{"error": "No file uploaded","timestamp": 1737195610743,"status": 400}`       |
> | `500`     | `application/json` | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example cURL

> ```javascript
>  curl -X POST http://localhost:8787/video/upload -F "file=@SampleVideo_1280x720_1mb.mp4" -F "downloadable=true"
> ```
 
<br />

#### Uploading video file via URL

<summary><code>POST</code> <code><b>/video/uploadByUrl</b></code></summary>
<code>Upload a video file via URL.<br /> 
Set downloadable to true so downloadable link can be get for this file.
</code>

##### Parameters (body)

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | url          | required | string    | file link (url)        |
> | downloadable | optional | boolean   | generate download link |


##### Responses

> | http code | content-type        | response                                                                       |
> |-----------|---------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json`  | `{"url":"https://dev.iambig.ai/public/zAE2h2mPSKjWwnxw8qxp4"}`                 |
> | `400`     | `application/json`  | `{"error": "No file uploaded","timestamp": 1737195610743,"status": 400}`       |
> | `500`     | `application/json`  | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example cURL

> ```javascript
>  curl -X POST http://localhost:8787/video/uploadByUrl --data '{"url":"https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_2mb.mp4","downloadable":"true"}'
> ```

<br />

#### Retrieving video file

<summary><code>GET</code> <code><b>/video/{id}</b></code> </summary>
<code>Get video file link for playback.
</code>

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
>  curl -X GET -H "Content-Type: application/json" http://localhost:8787/video/zAE2h2mPSKjWwnxw8qxp4
> ```

<br />

#### Retrieving video file Metadata

<summary><code>GET</code> <code><b>/video/{id}/metadata</b></code></summary>
<code>Get video file Metadata.
</code>

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
>  curl -X GET -H "Content-Type: application/json" http://localhost:8787/video/zAE2h2mPSKjWwnxw8qxp4/metadata
> ```

<br />

#### Retrieving Thumbnail link for video file

<summary><code>GET</code> <code><b>/video/{id}/thumbnail?anim=false</b></code></summary>
<code>Get video file Thumbnail.<br />
Pass anim query param as true to get animated preview (GIF)
</code>

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
>  curl -X GET -H "Content-Type: application/json" http://localhost:8787/video/zAE2h2mPSKjWwnxw8qxp4/thumbnail
> ```

<br />

#### Retrieving direct Download link for video file

<summary><code>GET</code> <code><b>/video/{id}/download</b></code></summary> 
<code>Get direct download link for video file.<br /> 
Link is available only if file was uploaded with `downloadable` option.
</code>

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
>  curl -X GET -H "Content-Type: application/json" http://localhost:8787/video/zAE2h2mPSKjWwnxw8qxp4/download
> ```

<br />

#### Delete video file

<summary><code>DELETE</code> <code><b>/video/{id}</b></code></summary>
<code>Completely delete video file.</code>

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
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:8787/video/zAE2h2mPSKjWwnxw8qxp4
> ```


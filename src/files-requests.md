# Files API (to be deprecated)

## NOTE: 
**Files & Video API are migrating to different subdomain**<br/>
`https://dev.files.iambig.ai`

## To be `deprecated` public endpoints
@ `https://dev.iambig.ai`

### Uploading file

<summary><code>POST</code> <code><b>/public/upload</b></code></summary>       

Upload a file as FormData.<br />

##### Parameters (FormData)

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | file         | required | blob      | file data              |


##### Responses

> | http code | content-type       | response                                                                       |
> |-----------|--------------------|--------------------------------------------------------------------------------|
> | `200`     | `application/json` | `{"url":"https://dev.iambig.ai/public/zAE2h2mPSKjWwnxw8qxp4"}`                 |
> | `400`     | `application/json` | `{"error": "No file uploaded","timestamp": 1737195610743,"status": 400}`       |
> | `500`     | `application/json` | `{"error": "Failed to upload video","timestamp": 1737195610743,"status": 500}` |

##### Example cURL

> ```javascript
>  curl -X POST http://localhost:8787/public/upload -F "file=@file.png"
> ```    

##### Example Response

> ```json
> {
>   "url": "https://dev.iambig.ai/public/zAE2h2mPSKjWwnxw8qxp4"
> }
> ``` 

---

### Retrieving file

<summary><code>GET</code> <code><b>/public/{id}</b></code> </summary>

Get file.

##### Parameters

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | id           | required | string    | internal file id       |

##### Responses

> | http code | content-type       | response                                    |
> |-----------|--------------------|---------------------------------------------|
> | `200`     | binary             | `file`                                        |
> | `404`     | `application/json` | `{"code":"404","message":"File not found"}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8787/public/zAE2h2mPSKjWwnxw8qxp4
> ```

---

### Deleting file
<summary><code>DELETE</code> <code><b>/public/{id}</b></code></summary>       

##### Parameters

> | name         | type     | data type | description            |
> |--------------|----------|-----------|------------------------|
> | id           | required | string    | internal file id       |

##### Responses

> | http code | content-type           | response                                    |
> |-----------|------------------------|---------------------------------------------|
> | `200`     | `application/json`     | `{} `                                       |
> | `404`     | `application/json`     | `{"code":"404","message":"File not found"}` |

##### Example cURL

> ```javascript
>  curl -X DELETE http://localhost:8787/public/zAE2h2mPSKjWwnxw8qxp4
> ```    

##### Example Response

> ```json
> {}
> ``` 
 
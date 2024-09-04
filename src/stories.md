# Stories API

## Request
```json
{
  "lastStoryTime": 1724318805948
}
```

## Response
```json
{
  "stories": [
    {
      "userId": "User11",
      "id": "JuPapCdd2",
      "status": "unseen",
      "time": 1724318805948,
      "content": [
        {
          "startTime": 0,
          "duration": 10,
          "type": "photo",
          "url": "https://dev.iambig.ai/public/c71ef0877c75566ae5a3a794e67cee43d81e6c719bab5339d08775779386e6f3"
        }
      ]
    },
    {
      "userId": "User11",
      "id": "sddsds",
      "time": 1724600000000,
      "status": "seen",
      "content": [
        {
          "startTime": 0,
          "duration": 100,
          "type": "video",
          "url": "stream://dev.iambig.ai/public/c71ef0877c75566ae5a3a794e67cee43d81e6c719bab5339d08775779386e6f3"
        }
      ]
    },
    {
      "userId": "User122",
      "id": "JuPapCdd2d",
      "status": "unseen",
      "time": 1724318805948,
      "content": [
        {
          "startTime": 0,
          "duration": 10,
          "type": "photo",
          "url": "https://dev.iambig.ai/public/f33fe12269832f003f68fe1088bbeca7471d121833dc42e007d2f3c513bd776b"
        }
      ]
    }
  ],
  "authors": [
    {
      "id": "User11",
      "name": "User One",
      "avatarUrl": "https://dev.iambig.ai/public/f33fe12269832f003f68fe1088bbeca7471d121833dc42e007d2f3c513bd776b"
    },
    {
      "id": "User122",
      "name": "User Two",
      "avatarUrl": "https://dev.iambig.ai/public/c71ef0877c75566ae5a3a794e67cee43d81e6c719bab5339d08775779386e6f3"
    }
  ]
}
```

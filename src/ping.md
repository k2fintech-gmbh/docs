# Connection, Online Statuses, and Ping-Pong

## Connection and statuses

Upon establishing a WebSocket connection, all your contacts will receive an "online" event

```json
{
  "type": "event",
  "timestamp": 1700400000000,
  "eventType": "online",
  "payload": {
    "userId": "YouId"
  }
}

```

You will receive an "online" event for each of your contacts who are currently online

```json
{
  "type": "event",
  "timestamp": 1700600000000,
  "eventType": "online",
  "payload": {
    "userId": "YouFriend"
  }
}

```

When the WebSocket connection is closed, all your contacts will receive an "offline" event. The closure can occur due to:

```json
{
  "type": "event",
  "timestamp": 1700900000000,
  "eventType": "offline",
  "payload": {
    "userId": "YouId"
  }
}

```

## Ping-Pong

To maintain the connection, the client must send a message at least once every 20 seconds. If there is nothing specific to send, the client can send any character or the string "ping". The server will respond with `{"event":"pong"}`

If there are no requests or pings from the client for 20 seconds, the client will be disconnected, and an "offline" event will be broadcast.

## Recommendations

- Reconnect if the server does not respond to ping messages within 5 seconds.
- When the mobile application transitions to the background, schedule the WebSocket disconnection within 1-20 seconds (depending on the platform) to ensure more predictable behavior

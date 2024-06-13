!!! info "WebSocket Connection Timeout"
    If no ping is received from the client within 20 seconds, the WebSocket connection will be closed, and an "offline" event will be sent to all participants.
    
    To keep the connection alive, the client must send any message at least once every 20 seconds. If there is nothing to send, the client can send any character or the string "ping". The server will respond with `{"event": "pong"}`. After 20 seconds without requests or pings, the client will be disconnected, and an "offline" event will be broadcast.

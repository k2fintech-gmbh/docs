# Call Events and Payloads

This section describes the different types of call-related events and their associated payloads.

## Call Events

- **newCall**: Indicates a new call has been initiated.
- **closeCall**: Indicates a call has been closed.

## Call Payloads

- **CallPayload**: Contains information about a call-related message.
  - `direction`: The direction of the call ('incoming' or 'outgoing').
  - `status`: (optional) The status of the call ('missed' or 'received').
  - `callType`: The type of call ('video' or 'audio').

- **CallStoredPayload**: Contains detailed information about a stored call.
  - `callId`: The unique identifier for the call.
  - `caller`: The identifier of the caller.
  - `participants`: (optional) List of participant identifiers.
  - `callType`: The type of call ('video' or 'audio').
  - `callDuration`: The duration of the call in seconds.

This documentation provides a clear overview of the call events and their payloads, enhancing the understanding of how calls are managed within the system.

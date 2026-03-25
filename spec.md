# MindCare Student Health

## Current State
Chat between students and counselors is fully functional. Messages are stored on-chain and auto-refresh every 3 seconds. However, counselors never reply — messages from the counselor side are never generated.

## Requested Changes (Diff)

### Add
- Built-in AI response engine in the Motoko backend (no external API or key required)
- Keyword-based mental health counselor response logic covering topics: anxiety/stress, depression/sadness, loneliness, sleep, academic pressure, relationships, trauma, identity, suicidal ideation (crisis response), greetings, and general fallback
- Auto-reply: when a student sends a message, the backend immediately generates and stores a counselor response from the counselor's synthetic principal to the student
- Timestamp support: messages now store real nanosecond timestamps using `Time.now()`

### Modify
- `sendMessage` in main.mo: after storing the student's message, call the AI engine and store a reply from `toPrincipal` → `caller`
- `ChatMessage.timestamp` will now be set to `Time.now()` instead of 0

### Remove
- Nothing removed

## Implementation Plan
1. Add `import Time "mo:base/Time";` and text utility imports to main.mo
2. Add `generateCounselorResponse(content: Text): Text` private function with keyword matching
3. Modify `sendMessage` to call `generateCounselorResponse` and store a second message from counselor back to caller
4. Set timestamps using `Time.now()` on all new messages
5. Frontend: no code changes needed — messages auto-refresh every 3 seconds and will pick up the AI reply

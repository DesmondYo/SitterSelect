## Sitter Avenue

#### Client / Sitter Data Structure

Here is an example of the client sitter data structure which is supported in the app. Make sure all these fields are added on Firebase when adding a sitter or client to the Firestore.

```
desription: string, // A long description of the sitter, required for sitter, null for client
image_url: string, // Upload this to Firebase storage, required for sitter, null for client
name: string,
phone_number: string, // Required for client and sitter
type: string, // Either 'sitter' or 'client'
full_address: string, // Required for client, null for sitter
user_id: string, // !REQUIRED! Grab this when you create user from "Authentication" tab
```

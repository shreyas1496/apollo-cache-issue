# apollo-cache-issue
Describes the apollo server cache issue with an example.




# Instructions

- Clone this repository
- `npm install`
- Start the gql server `node index.js`
- From another terminal window, run ```curl 'http://localhost:4000/'   -H 'Connection: keep-alive' -H 'content-type: application/json'   --data-raw '{"operationName":null,"variables":{},"query":"{\n  hello\n}\n"}'   --compressed
{"data":{"hello":"world"}}``` to execute the query
- OBSERVE THE TIME TAKEN TO FULFILL THE API REQUEST ON THE CONSOLE
- The first request takes ~ 700 ms to complete. The subsequent requests take around ~ 0.100 ms to complete. This is a huge gap.
- You can try multiple combinations cache configurations. Results follow a similar pattern
- Rerun the server after uncommenting the `this.memoizedResults.clear();` under `random-user-datasource.js`



# Screenshots/ Results




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

- ![Screenshot from 2021-05-25 11-13-43](https://user-images.githubusercontent.com/13742679/119448837-7ea8f480-bd4f-11eb-9504-3f73e3602f8f.png)
- When the memosized results are clear (Expected result)
- ![Screenshot from 2021-05-25 11-13-49](https://user-images.githubusercontent.com/13742679/119449029-b7e16480-bd4f-11eb-8647-a95512f1d26b.png)




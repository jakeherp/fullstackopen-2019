# Full Stack Open

## Part 0 - Fundamentals of Web-apps

### 0.4: new note

<img src="./diagram.png" alt="Diagram">

```
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note

note over browser:
Query string in format
"note=a+new+note" sent to server
end note

server-->browser: 302 Status

note over server:
Redirect back to
https://fullstack-exampleapp.herokuapp.com/notes
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

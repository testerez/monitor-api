# monitor-api
Call an API at a given frequency and log the response time

# Usage
checkout the project then:

```
> yarn
> yarn start http://google.fr
```

Output:
```
Calling: http://google.fr
Interval: 2000ms
Fri Mar 16 2018 13:44:41 GMT-0400 (EDT) 400ms 200 OK
Fri Mar 16 2018 13:44:43 GMT-0400 (EDT) 301ms 200 OK
Fri Mar 16 2018 13:44:45 GMT-0400 (EDT) 292ms 200 OK
Fri Mar 16 2018 13:44:47 GMT-0400 (EDT) 287ms 200 OK
Fri Mar 16 2018 13:44:49 GMT-0400 (EDT) 320ms 200 OK
```

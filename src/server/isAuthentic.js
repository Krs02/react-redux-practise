const isloggedIn = (req, res, next) => {
  console.log("authorizeUsersAccess Middleware in");
  if (req.query.admin === "true") {
    console.log("if");
    return next();
  } else {
    console.log("Else");
    res.send("ERROR: You must be an admin");
  }
  console.log("authorizeUsersAccess Middleware out ");
  //line 10 will not execute if confition is true.Since we are returning next, not executing
};
export default isloggedIn;
/*
WITH RETURN NEXT
Request Entry Time : 2021-12-01T07:10:01.947Z: /abc?admin=true
isAuthentic.js:2 authorizeUsersAccess Middleware in
isAuthentic.js:4 if
server.js:24 {} 'C:\\RnD\\react-redux-practise\\src\\server\\public\\index.html'
server.js:25 abc in
logger.js:4 Request Exit Time :  2021-12-01T07:10:12.448Z: /abc?admin=true

WITHOUT RETURN NEXT
Listening on port 5000
logger.js:2 Request Entry Time : 2021-12-01T07:10:54.072Z: /abc?admin=true
isAuthentic.js:2 authorizeUsersAccess Middleware in
isAuthentic.js:4 if
server.js:24 {} 'C:\\RnD\\react-redux-practise\\src\\server\\public\\index.html'
server.js:25 abc in
isAuthentic.js:10 authorizeUsersAccess Middleware out 
logger.js:4 Request Exit Time :  2021-12-01T07:11:09.448Z: /abc?admin=true
*/

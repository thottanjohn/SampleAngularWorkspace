function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
// app.use(requireHTTPS);

app.use(express.static('./dist/apps/angular-demo'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/apps/angular-demo'}
  );
  });

app.listen(process.env.PORT || 8080,()=>{
    console.log(`Server is listening on port ${process.env.PORT || 8080}`)
});
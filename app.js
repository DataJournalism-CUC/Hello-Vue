const Koa = require("koa");

const app = new Koa();


let staticFiles = require("./static-file");
app.use(staticFiles("/static",__dirname + "/static"));

app.use(async (ctx, next) => {
    ctx.response.redirect("/static/index.html");
});

app.listen(3000);
console.log("app started at port 3000....")
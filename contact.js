exports.contact=function(app){
    app.get("/contact", (req, res) => {

        res.send("<h1>Contact Page</h1>");
        
    });
};
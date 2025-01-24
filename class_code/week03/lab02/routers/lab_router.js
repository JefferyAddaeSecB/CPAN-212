import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, World! from Lab")
})

router.get("/name", (req, res) => {
    res.send("Jeffery Addae")
})

router.get("/greeting ", (req, res) => {
    res.send("Hello, Im Jeffery Addae. Student number: n01649101")
})

router.get("/add/:x/:y" , (req, res)=> {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);


    res.send (`${x+y}`);

});

router.get("/calculate/:a/:b/:operation", (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let operation = req.params.operation.trim();

    switch (operation) {
        case "+":
            res.send(`${a} + ${b} = ${a + b}`);
            break;
        case "-":
            res.send(`${a-b}`);
            break;
        case "*":
            res.send(`${a*b}`);
            break;
        case "/":
            res.send(`${a/b}`);
            break;
        default:
            res.send("Invalid operation");
    }
    

    res.send(`${x-y}`);
});


export default router;
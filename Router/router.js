const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).json({
        message: "GET - SUCCESS",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.get("/:id", (req, res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "GET - Success",
        id: id,
        metadata:{
            host: res.hostname,
            method: req.method,
        }
    })
});

router.post("/:id", (req, res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "Post - Success",
        id: id,
        metadata:{
            host: res.hostname,
            method: req.method,
        }
    })
})

router.delete("/:id", (req, res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "delete - Success",
        id: id,
        metadata:{
            host: res.hostname,
            method: req.method,
        }
    })
})

router.put("/:id", (req, res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "Put - Success",
        id: id,
        metadata:{
            host: res.hostname,
            method: req.method,
        }
    })
})

// router.get("/:getId", (req,res)=>{
//     res.status(200).json({
//         message: "Get by Id Successful",
//         id: req.params.getId,
//         metadata:{
//             host: req.hostname,
//         }
//     })
// })
module.exports = router;
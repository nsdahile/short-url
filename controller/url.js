exports.addUrl = (req, res, next)=>{
    const url = req.body.url;
    console.log(url);
    res.json({message:'Url got successfully'});
}
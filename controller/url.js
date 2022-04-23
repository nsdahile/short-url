const Url = require("../models/url");

exports.visitUrl = (req, res, next) => {
  const urlId = req.params.urlId;
  Url.findById(urlId)
    .then((url) => {
      res.status(301).redirect(url.url);
    })
    .catch((err) => {
      res.status(404).json({
        message: "No result found",
      });
    });
};

exports.addUrl = (req, res, next) => {
  let enteredUrl = req.body.url;
  if (!enteredUrl.startsWith("http")) enteredUrl = "http://" + enteredUrl;
  const url = new Url({ url: enteredUrl });
  url
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(503).json({ message: "unable to save" });
    });
};

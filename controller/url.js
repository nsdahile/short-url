const Url = require("../models/url");
const ObjectId = require("mongoose").Types.ObjectId;

exports.visitUrl = (req, res, next) => {
  const urlId = req.params.urlId;
  const filterList = [{ customSuffix: urlId }];

  if (ObjectId.isValid(urlId))
    filterList.push({ _id: new ObjectId(urlId) });

  Url.findOne({ $or: filterList })
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
  let customSuffix = req.body.customSuffix;
  if (!enteredUrl.startsWith("http")) enteredUrl = "http://" + enteredUrl;
  const url = new Url({ url: enteredUrl, customSuffix: customSuffix });
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

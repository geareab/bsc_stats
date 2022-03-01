const axios = require("axios")
const { validationResult } = require("express-validator");




exports.getItem = (req, res, next) => {
  var itemID = req.params.itemName;
  axios.get('https://api.bscscan.com/api?module=account&action=balancehistory&address=0x0DB011018728D1B91dDB3C77933a40B9B68C9fa7&blockno=2000000&apikey=J2MXSBTAR7YUQUDBZMRP2TQ7PGPDRATUQ2').then(resp => {

    console.log(resp.data);
  });
  res.status(200).json({ message: "item fetched" });

};


const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const SECRET_KEY = '76edce45e6914534af7c9b63a75d5cb49357a06f48d94defb7a1f5f45e728e1ec5dec2135c86487b949c90e029182162dc8f1d11660a41e587555cadcb790fd79b63254c3cda4d5b8df1b0b34f02e55d02c4534ea7044765955b05ec6352846ac94a46e7d81b4aa99c21524f27a96d9e25f1fd17179b412a9eb7b287adcdf588';

/* GET api listing. */
router.post('/sign', (req, res) => {
  
  let signedFields = req.body.signed_field_names.split(",");
  var fieldValues = [];
  signedFields.forEach(item => {
    fieldValues.push(item + "=" + req.body[item]);
  }); 

  const hash = crypto.createHmac('sha256', SECRET_KEY)
    .update(fieldValues.join(","))
    .digest('base64');

  res.send({ 'hash': hash });
});

module.exports = router;
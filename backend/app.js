import jwt from 'jsonwebtoken';
import axios from 'axios';
const accessKey = {
  developer_id: 'e1ddfb9d-cba8-49d8-afa9-4d87fe1394a4',
  key_id: '1abf145e-3d0e-475a-97f7-5375fcf0ce1d',
  signing_secret: 'aXmi5rltACOrOLWbnFLeqaQg-ICaShh4VDJNBwlE6-Y',
};

const data = {
  aud: 'doordash',
  iss: accessKey.developer_id,
  kid: accessKey.key_id,
  exp: Math.floor(Date.now() / 1000 + 300),
  iat: Math.floor(Date.now() / 1000),
};

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } };

const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
);

console.log(token);


const body = JSON.stringify({
  external_delivery_id: '0bef0487-fe9a-4bff-b3ba-f2bbc061c59a',
  pickup_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  pickup_business_name: 'Wells Fargo SF Downtown',
  pickup_phone_number: '+16505555555',
  pickup_instructions: 'Enter gate code 1234 on the callbox.',
  dropoff_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  dropoff_business_name: 'Wells Fargo SF Downtown',
  dropoff_phone_number: '+16505555555',
  dropoff_instructions: 'Enter gate code 1234 on the callbox.',
  order_value: 1999,
})
axios
  .get('https://openapi.doordash.com/drive/v2/deliveries/0bef0487-fe9a-4bff-b3ba-f2bbc061c59a',{
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })
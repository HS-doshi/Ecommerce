const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

function generateOTP(){
  return Math.floor(10000 + Math.random() * 900000).toString();
}
let generateOtp = '';
app.post('/api/generate-otp',(req,res)=>{
  generateOTP = generateOTP()
  res.json({
    success:true,
    otp:generateOTP,
  });
})

app.post('/api/veryfy-otp',(req,res)=>{
  const {otp} = req.body;

  if(generateOtp==otp)
  {
    res.json({
      success:true,
      message : 'OTP Verified Successfully!'
    })
  }
  else{
    res.json({
      success:false,
    })
  }
});
app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`)
})

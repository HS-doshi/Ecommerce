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
  generateOtp = generateOTP()
  res.json({
    success:true,
    otp:generateOTP,
  });
})

app.post('/api/verify-otp',(req,res)=>{
  const {otp} = req.body;

  if(otp === generateOtp)
  {
    res.json({
      success:true,
    })
  }
  else{
    res.json({
      success:false,
    })
  }
});
// start server using listen.
app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`)
})

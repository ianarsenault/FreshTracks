const AWS = require('aws-sdk')
const iotdata = new AWS.IotData({endpoint:process.env.Endpoint})//change this


exports.handler = async(event, context) => {
      
    const userid= event.detail.requestParameters['x-amz-meta-user-id']
    const MyPayload = JSON.stringify({"message": "Hello from AWS IoT console"})
    const res = await iotdata.publish({topic:'UpdateTable-'+userid,  qos: 0, payload: MyPayload, }).promise();
        
    return res

}
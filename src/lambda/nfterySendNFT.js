// import 'idempotent-babel-polyfill'
import Eth from 'ethjs'
import { NfteryClient } from './lib/NfteryClient'

const nfteryClient = new NfteryClient({
  privateKey: '0xab7873cc1c85a753f5e23eb3c7fc6c3c5b475304501a41855b4a437b38bf1396',
  providerUrl: 'https://rinkeby.infura.io/v3/d7d0cd8b6c844685a0a02a13f2ea6401',
  networkId: '4'
})

exports.handler = function (event, context, callback) {
  const responseHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  try {
    let ethAddress

    if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
      if (event.queryStringParameters.ethAddress !== undefined &&
        event.queryStringParameters.ethAddress !== null &&
        event.queryStringParameters.ethAddress !== "") {
        ethAddress = event.queryStringParameters.ethAddress;
      }
    }

    console.log('Sending NFT to ', ethAddress)

    if (!Eth.isAddress(ethAddress)) {
      callback(`ethAddress is not a valid address: ${ethAddress}`)
    } else {
      nfteryClient.sendNFT(ethAddress)
        .then((transactionHash) => {
          console.log('Successfully sent transaction with hash: ', transactionHash)
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ txHash: transactionHash }),
            headers: responseHeaders
          })
        })
        .catch(error => {
          console.error('ERROR: ', error)
          callback(error)
        })
    }
  } catch (error) {
    console.error('MASSIVE ERROR: ', error)
    callback(error)
  }
}

const Eth = require('ethjs')
const abi = require('ethjs-abi')
const sign = require('ethjs-signer').sign
const privateToAccount = require('ethjs-account').privateToAccount
const simple721Abi = [{
  "constant": true,
  "inputs": [
    {
      "name": "interfaceId",
      "type": "bytes4"
    }
  ],
  "name": "supportsInterface",
  "outputs": [
    {
      "name": "",
      "type": "bool"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "name": "",
        "type": "address"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
    },
      {
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
    },
      {
        "name": "to",
        "type": "address"
    },
      {
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
    },
      {
        "name": "index",
        "type": "uint256"
    }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
    },
      {
        "name": "to",
        "type": "address"
    },
      {
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
    },
      {
        "name": "symbol",
        "type": "string"
    }
    ],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
    }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "name": "",
        "type": "address"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
    }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": false,
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
    },
      {
        "name": "approved",
        "type": "bool"
    }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
    },
      {
        "name": "to",
        "type": "address"
    },
      {
        "name": "tokenId",
        "type": "uint256"
    },
      {
        "name": "_data",
        "type": "bytes"
    }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
    },
      {
        "name": "operator",
        "type": "address"
    }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "name": "",
        "type": "bool"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
    },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
    },
      {
        "indexed": true,
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
},
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
    },
      {
        "indexed": true,
        "name": "approved",
        "type": "address"
    },
      {
        "indexed": true,
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
},
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
    },
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
    },
      {
        "indexed": false,
        "name": "approved",
        "type": "bool"
    }
    ],
    "name": "ApprovalForAll",
    "type": "event"
},
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
    }
    ],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}]

function fail(msg) {
  throw new Error(msg)
}

export class NfteryClient {
  constructor (config = {}) {
    this._privateKey = config.privateKey || fail('You must configure the private key for the owner of the contract')

    if (this._privateKey.length !== 66)
      fail('privateKey is not the correct length (May need the leading "0x")')

    this._providerUrl = config.providerUrl || fail('You must pass a provider URL')
    this._networkId = config.networkId || fail('You must pass a network id')
    this._account = privateToAccount(this._privateKey)
    this._eth = new Eth(new Eth.HttpProvider(this._providerUrl))

    console.log('Using `this._privateKey`: ', this._privateKey)
    console.log('Using `this._providerUrl`: ', this._providerUrl)
    console.log('Using: `this._networkId`', this._networkId)

    // if (
    //   simple721Artifact === undefined
    //   || simple721Artifact.networks[this._networkId] === undefined
    // ) {
    //   fail('could not find simple721Artifact (may need to run `npm run migrate` ?)')
    // }
  }

  ownerAddress() {
    return this._account.address
  }

  deployedContractAddress () {
    return '0x3188de92bce4B00Cd6b6bbeC4396f9ed9D8007FC'
    // return simple721Artifact.networks[this._networkId].address
  }

  buildTransaction(data) {
    // You may want to calculate GasPrice automatically using a
    // gas station API, or simply use more gwei for your GasPrice
    // (since it's only Ropsten/Rinkeby testnet)
    return {
      from: this.ownerAddress(),
      to: this.deployedContractAddress(),
      gas: 4612388,
      gasPrice: Eth.toWei(20, 'gwei').toString(),
      data
    }
  }

  async sendTransaction (tx) {
    let nonce = tx.nonce
    if (!nonce) {
      nonce = await this._eth.getTransactionCount(this._account.address, 'pending')
      tx.nonce = nonce.toString()
    }

    for (let i = 0; i < 20; i++) {
      console.log('running sendTransaction')

      try {
        return await this._eth.sendRawTransaction(sign(tx, this._account.privateKey))
      } catch (error) {
        if (error.message.match(/known transaction|transaction underpriced/)) {
          tx.nonce++
          console.log(`retry: ${i+1}`)
        } else {
          console.error(error)
          throw error
        }
      }
    }
  }

  sendNFT (ethAddress) {
    const method = simple721Abi.find((obj) => obj.name === 'mint')

    var data = abi.encodeMethod(method, [ethAddress])
    const tx = this.buildTransaction(data)

    console.info('sendNFT tx: ', tx)

    return this.sendTransaction(tx)
  }
}

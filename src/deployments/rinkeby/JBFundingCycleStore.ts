export default {
  "address": "0x79cB4AEdf1E3EB3853f9A0BD9a6c597CdCb73C72",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IJBDirectory",
          "name": "_directory",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "CONTROLLER_UNAUTHORIZED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_DISCOUNT_RATE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_DURATION",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_WEIGHT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NO_SAME_BLOCK_RECONFIGURATION",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "prod1",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "denominator",
          "type": "uint256"
        }
      ],
      "name": "PRBMath__MulDivOverflow",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weight",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBFundingCycleBallot",
              "name": "ballot",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct JBFundingCycleData",
          "name": "data",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "metadata",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "mustStartAtOrAfter",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "Configure",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "basedOn",
          "type": "uint256"
        }
      ],
      "name": "Init",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weight",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBFundingCycleBallot",
              "name": "ballot",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleData",
          "name": "_data",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "_metadata",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_mustStartAtOrAfter",
          "type": "uint256"
        }
      ],
      "name": "configureFor",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "configuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "basedOn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weight",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBFundingCycleBallot",
              "name": "ballot",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "metadata",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundingCycle",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        }
      ],
      "name": "currentBallotStateOf",
      "outputs": [
        {
          "internalType": "enum JBBallotState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        }
      ],
      "name": "currentOf",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "configuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "basedOn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weight",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBFundingCycleBallot",
              "name": "ballot",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "metadata",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundingCycle",
          "name": "fundingCycle",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "directory",
      "outputs": [
        {
          "internalType": "contract IJBDirectory",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_configuration",
          "type": "uint256"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "configuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "basedOn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weight",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBFundingCycleBallot",
              "name": "ballot",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "metadata",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundingCycle",
          "name": "fundingCycle",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "latestConfigurationOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        }
      ],
      "name": "latestConfiguredOf",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "configuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "basedOn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weight",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBFundingCycleBallot",
              "name": "ballot",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "metadata",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundingCycle",
          "name": "fundingCycle",
          "type": "tuple"
        },
        {
          "internalType": "enum JBBallotState",
          "name": "ballotState",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        }
      ],
      "name": "queuedOf",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "configuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "basedOn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weight",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBFundingCycleBallot",
              "name": "ballot",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "metadata",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundingCycle",
          "name": "fundingCycle",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "transactionHash": "0x7a7c25f81bb25fd8b7977a385f94b5a953efd9de30a6156f6d8bdec69332d13d",
  "receipt": {
    "to": null,
    "from": "0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF",
    "contractAddress": "0x79cB4AEdf1E3EB3853f9A0BD9a6c597CdCb73C72",
    "transactionIndex": 0,
    "gasUsed": "1411120",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x8a7d72fd7d6666805f6b67f26a2fc36220308e98e55f02f1883bd368d81e8c03",
    "transactionHash": "0x7a7c25f81bb25fd8b7977a385f94b5a953efd9de30a6156f6d8bdec69332d13d",
    "logs": [],
    "blockNumber": 10635485,
    "cumulativeGasUsed": "1411120",
    "status": 1,
    "byzantium": true
  },
  "args": ["0xCAEC2DF60aBEfC165ABF8241ddc6e8D0E91eAb24"],
  "numDeployments": 1,
  "solcInputHash": "87acdcf5deeaa43ae3ecf62f45455645",
  "metadata": "{\"compiler\":{\"version\":\"0.8.6+commit.11564f7e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IJBDirectory\",\"name\":\"_directory\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"CONTROLLER_UNAUTHORIZED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_DISCOUNT_RATE\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_DURATION\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_WEIGHT\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NO_SAME_BLOCK_RECONFIGURATION\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"prod1\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"denominator\",\"type\":\"uint256\"}],\"name\":\"PRBMath__MulDivOverflow\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"}],\"indexed\":false,\"internalType\":\"struct JBFundingCycleData\",\"name\":\"data\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"mustStartAtOrAfter\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"Configure\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"}],\"name\":\"Init\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleData\",\"name\":\"_data\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_metadata\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_mustStartAtOrAfter\",\"type\":\"uint256\"}],\"name\":\"configureFor\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"currentBallotStateOf\",\"outputs\":[{\"internalType\":\"enum JBBallotState\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"currentOf\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"directory\",\"outputs\":[{\"internalType\":\"contract IJBDirectory\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_configuration\",\"type\":\"uint256\"}],\"name\":\"get\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"latestConfigurationOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"latestConfiguredOf\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"},{\"internalType\":\"enum JBBallotState\",\"name\":\"ballotState\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"queuedOf\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Adheres to - IJBTokenStore: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.Inherits from - JBControllerUtility: Includes convenience functionality for checking if the message sender is the current controller of the project whose data is being manipulated.\",\"kind\":\"dev\",\"methods\":{\"configureFor(uint256,(uint256,uint256,uint256,address),uint256,uint256)\":{\"details\":\"Only a project's current controller can configure its funding cycles.\",\"params\":{\"_data\":\"The funding cycle configuration data.\",\"_metadata\":\"Arbitrary extra data to associate with this funding cycle configuration that's not used within.\",\"_mustStartAtOrAfter\":\"The time before which the initialized funding cycle cannot start.\",\"_projectId\":\"The ID of the project being configured.\"},\"returns\":{\"_0\":\"The funding cycle that the configuration will take effect during.\"}},\"constructor\":{\"params\":{\"_directory\":\"A contract storing directories of terminals and controllers for each project.\"}},\"currentBallotStateOf(uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to check the ballot state of.\"},\"returns\":{\"_0\":\"The project's current ballot's state.\"}},\"currentOf(uint256)\":{\"details\":\"If a current funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.\",\"params\":{\"_projectId\":\"The ID of the project to get the current funding cycle of.\"},\"returns\":{\"fundingCycle\":\"The project's current funding cycle.\"}},\"get(uint256,uint256)\":{\"params\":{\"_configuration\":\"The configuration of the funding cycle to get.\",\"_projectId\":\"The ID of the project to which the funding cycle belongs.\"},\"returns\":{\"fundingCycle\":\"The funding cycle.\"}},\"latestConfiguredOf(uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to get the latest configured funding cycle of.\"},\"returns\":{\"ballotState\":\"The state of the ballot for the reconfiguration.\",\"fundingCycle\":\"The project's queued funding cycle.\"}},\"queuedOf(uint256)\":{\"details\":\"If a queued funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.\",\"params\":{\"_projectId\":\"The ID of the project to get the queued funding cycle of.\"},\"returns\":{\"fundingCycle\":\"The project's queued funding cycle.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"PRBMath__MulDivOverflow(uint256,uint256)\":[{\"notice\":\"Emitted when the result overflows uint256.\"}]},\"kind\":\"user\",\"methods\":{\"configureFor(uint256,(uint256,uint256,uint256,address),uint256,uint256)\":{\"notice\":\" Configures the next eligible funding cycle for the specified project.\"},\"currentBallotStateOf(uint256)\":{\"notice\":\" The current ballot state of the project.\"},\"currentOf(uint256)\":{\"notice\":\" The funding cycle that is currently active for the specified project.\"},\"directory()\":{\"notice\":\" The directory of terminals and controllers for projects.\"},\"get(uint256,uint256)\":{\"notice\":\" Get the funding cycle with the given configuration for the specified project.\"},\"latestConfigurationOf(uint256)\":{\"notice\":\" The latest funding cycle configuration for each project. _projectId The ID of the project to get the latest funding cycle configuration of.\"},\"latestConfiguredOf(uint256)\":{\"notice\":\" The latest funding cycle to be configured for the specified project, and its current ballot state.\"},\"queuedOf(uint256)\":{\"notice\":\" The funding cycle that's next up for the specified project.\"}},\"notice\":\" Manages funding cycle configurations and scheduling.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/JBFundingCycleStore.sol\":\"JBFundingCycleStore\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":10000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"@paulrberg/contracts/math/PRBMath.sol\":{\"content\":\"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\nimport \\\"prb-math/contracts/PRBMath.sol\\\";\\n\",\"keccak256\":\"0x42821345981bc0434a90ba2268a2f5278dfe9e38166981d72fc7f3b776a29495\",\"license\":\"Unlicense\"},\"contracts/JBFundingCycleStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@paulrberg/contracts/math/PRBMath.sol';\\nimport './abstract/JBControllerUtility.sol';\\nimport './libraries/JBConstants.sol';\\n\\n/** \\n  @notice \\n  Manages funding cycle configurations and scheduling.\\n\\n  @dev\\n  Adheres to -\\n  IJBTokenStore: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.\\n\\n  @dev\\n  Inherits from -\\n  JBControllerUtility: Includes convenience functionality for checking if the message sender is the current controller of the project whose data is being manipulated.\\n*/\\ncontract JBFundingCycleStore is IJBFundingCycleStore, JBControllerUtility {\\n  //*********************************************************************//\\n  // --------------------------- custom errors ------------------------- //\\n  //*********************************************************************//\\n  error INVALID_DISCOUNT_RATE();\\n  error INVALID_DURATION();\\n  error INVALID_WEIGHT();\\n  error NO_SAME_BLOCK_RECONFIGURATION();\\n\\n  //*********************************************************************//\\n  // --------------------- private stored properties ------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Stores the user defined properties of each funding cycle, packed into one storage slot.\\n\\n    _projectId The ID of the project to get properties of.\\n    _configuration The funding cycle configuration to get properties of.\\n  */\\n  mapping(uint256 => mapping(uint256 => uint256)) private _packedUserPropertiesOf;\\n\\n  /** \\n    @notice\\n    Stores the properties added by the mechanism to manage and schedule each funding cycle, packed into one storage slot.\\n    \\n    _projectId The ID of the project to get instrinsic properties of.\\n    _configuration The funding cycle configuration to get properties of.\\n  */\\n  mapping(uint256 => mapping(uint256 => uint256)) private _packedIntrinsicPropertiesOf;\\n\\n  /** \\n    @notice\\n    Stores the metadata for each funding cycle configuration, packed into one storage slot.\\n\\n    _projectId The ID of the project to get metadata of.\\n    _configuration The funding cycle configuration to get metadata of.\\n  */\\n  mapping(uint256 => mapping(uint256 => uint256)) private _metadataOf;\\n\\n  //*********************************************************************//\\n  // --------------------- public stored properties -------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    The latest funding cycle configuration for each project.\\n\\n    _projectId The ID of the project to get the latest funding cycle configuration of.\\n  */\\n  mapping(uint256 => uint256) public override latestConfigurationOf;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice \\n    Get the funding cycle with the given configuration for the specified project.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n    @param _configuration The configuration of the funding cycle to get.\\n\\n    @return fundingCycle The funding cycle.\\n  */\\n  function get(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle)\\n  {\\n    return _getStructFor(_projectId, _configuration);\\n  }\\n\\n  /**\\n    @notice \\n    The latest funding cycle to be configured for the specified project, and its current ballot state.\\n\\n    @param _projectId The ID of the project to get the latest configured funding cycle of.\\n\\n    @return fundingCycle The project's queued funding cycle.\\n    @return ballotState The state of the ballot for the reconfiguration.\\n  */\\n  function latestConfiguredOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle, JBBallotState ballotState)\\n  {\\n    // Get a reference to the latest funding cycle configuration.\\n    uint256 _fundingCycleConfiguration = latestConfigurationOf[_projectId];\\n\\n    // Resolve the funding cycle for the latest configuration.\\n    fundingCycle = _getStructFor(_projectId, _fundingCycleConfiguration);\\n\\n    // Resolve the ballot state.\\n    ballotState = _ballotStateOf(\\n      _projectId,\\n      fundingCycle.configuration,\\n      fundingCycle.start,\\n      fundingCycle.basedOn\\n    );\\n  }\\n\\n  /**\\n    @notice \\n    The funding cycle that's next up for the specified project.\\n\\n    @dev\\n    If a queued funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.\\n\\n    @param _projectId The ID of the project to get the queued funding cycle of.\\n\\n    @return fundingCycle The project's queued funding cycle.\\n  */\\n  function queuedOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle)\\n  {\\n    // If the project does not have a funding cycle, return an empty struct.\\n    if (latestConfigurationOf[_projectId] == 0) return _getStructFor(0, 0);\\n\\n    // Get a reference to the configuration of the standby funding cycle.\\n    uint256 _standbyFundingCycleConfiguration = _standbyOf(_projectId);\\n\\n    // If it exists, return its funding cycle if it is approved.\\n    if (_standbyFundingCycleConfiguration > 0) {\\n      fundingCycle = _getStructFor(_projectId, _standbyFundingCycleConfiguration);\\n\\n      if (_isApproved(_projectId, fundingCycle)) return fundingCycle;\\n\\n      // Resolve the funding cycle for the latest configured funding cycle.\\n      fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\\n    } else {\\n      // Resolve the funding cycle for the latest configured funding cycle.\\n      fundingCycle = _getStructFor(_projectId, latestConfigurationOf[_projectId]);\\n\\n      // If the latest funding cycle starts in the future, it must start in the distant future\\n      // since its not in standby. In this case base the queued cycles on the base cycle.\\n      if (fundingCycle.start > block.timestamp)\\n        fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\\n    }\\n\\n    // There's no queued if the current has a duration of 0.\\n    if (fundingCycle.duration == 0) return _getStructFor(0, 0);\\n\\n    // Check to see if this funding cycle's ballot is approved.\\n    // If so, return a funding cycle based on it.\\n    if (_isApproved(_projectId, fundingCycle)) return _mockFundingCycleBasedOn(fundingCycle, false);\\n\\n    // Get the funding cycle of its base funding cycle, which carries the last approved configuration.\\n    fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\\n\\n    // There's no queued if the base, which must still be the current, has a duration of 0.\\n    if (fundingCycle.duration == 0) return _getStructFor(0, 0);\\n\\n    // Return a mock of the next up funding cycle.\\n    return _mockFundingCycleBasedOn(fundingCycle, false);\\n  }\\n\\n  /**\\n    @notice \\n    The funding cycle that is currently active for the specified project.\\n\\n    @dev\\n    If a current funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.\\n\\n    @param _projectId The ID of the project to get the current funding cycle of.\\n\\n    @return fundingCycle The project's current funding cycle.\\n  */\\n  function currentOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle)\\n  {\\n    // If the project does not have a funding cycle, return an empty struct.\\n    if (latestConfigurationOf[_projectId] == 0) return _getStructFor(0, 0);\\n\\n    // Get a reference to the configuration of the eligible funding cycle.\\n    uint256 _fundingCycleConfiguration = _eligibleOf(_projectId);\\n\\n    // Keep a reference to the eligible funding cycle.\\n    JBFundingCycle memory _fundingCycle;\\n\\n    // If an eligible funding cycle exists...\\n    if (_fundingCycleConfiguration > 0) {\\n      // Resolve the funding cycle for the eligible configuration.\\n      _fundingCycle = _getStructFor(_projectId, _fundingCycleConfiguration);\\n\\n      // Check to see if this funding cycle's ballot is approved.\\n      // If so, return it.\\n      if (_isApproved(_projectId, _fundingCycle)) return _fundingCycle;\\n\\n      // If it hasn't been approved, set the funding cycle configuration to be the configuration of the funding cycle that it's based on,\\n      // which carries the last approved configuration.\\n      _fundingCycleConfiguration = _fundingCycle.basedOn;\\n    } else {\\n      // No upcoming funding cycle found that is eligible to become active,\\n      // so use the last configuration.\\n      _fundingCycleConfiguration = latestConfigurationOf[_projectId];\\n\\n      // Get the funding cycle for the latest ID.\\n      _fundingCycle = _getStructFor(_projectId, _fundingCycleConfiguration);\\n\\n      // If it's not approved or if it hasn't yet started, get a reference to the funding cycle that the latest is based on, which has the latest approved configuration.\\n      if (!_isApproved(_projectId, _fundingCycle) || block.timestamp < _fundingCycle.start)\\n        _fundingCycleConfiguration = _fundingCycle.basedOn;\\n    }\\n\\n    // If there is not funding cycle to base the current one on, there can't be a current one.\\n    if (_fundingCycleConfiguration == 0) return _getStructFor(0, 0);\\n\\n    // The funding cycle to base a current one on.\\n    _fundingCycle = _getStructFor(_projectId, _fundingCycleConfiguration);\\n\\n    // If the base has no duration, it's still the current one.\\n    if (_fundingCycle.duration == 0) return _fundingCycle;\\n\\n    // Return a mock of the current funding cycle.\\n    return _mockFundingCycleBasedOn(_fundingCycle, true);\\n  }\\n\\n  /** \\n    @notice \\n    The current ballot state of the project.\\n\\n    @param _projectId The ID of the project to check the ballot state of.\\n\\n    @return The project's current ballot's state.\\n  */\\n  function currentBallotStateOf(uint256 _projectId) external view override returns (JBBallotState) {\\n    // Get a reference to the latest funding cycle configuration.\\n    uint256 _fundingCycleConfiguration = latestConfigurationOf[_projectId];\\n\\n    // Resolve the funding cycle for the latest configuration.\\n    JBFundingCycle memory _fundingCycle = _getStructFor(_projectId, _fundingCycleConfiguration);\\n\\n    return\\n      _ballotStateOf(\\n        _projectId,\\n        _fundingCycle.configuration,\\n        _fundingCycle.start,\\n        _fundingCycle.basedOn\\n      );\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _directory A contract storing directories of terminals and controllers for each project.\\n  */\\n  // solhint-disable-next-line no-empty-blocks\\n  constructor(IJBDirectory _directory) JBControllerUtility(_directory) {}\\n\\n  //*********************************************************************//\\n  // ---------------------- external transactions ---------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice \\n    Configures the next eligible funding cycle for the specified project.\\n\\n    @dev\\n    Only a project's current controller can configure its funding cycles.\\n\\n    @param _projectId The ID of the project being configured.\\n    @param _data The funding cycle configuration data.\\n    @param _metadata Arbitrary extra data to associate with this funding cycle configuration that's not used within.\\n    @param _mustStartAtOrAfter The time before which the initialized funding cycle cannot start.\\n\\n    @return The funding cycle that the configuration will take effect during.\\n  */\\n  function configureFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    uint256 _metadata,\\n    uint256 _mustStartAtOrAfter\\n  ) external override onlyController(_projectId) returns (JBFundingCycle memory) {\\n    // Duration must fit in a uint64.\\n    if (_data.duration > type(uint64).max) revert INVALID_DURATION();\\n\\n    // Discount rate must be less than or equal to 100%.\\n    if (_data.discountRate > JBConstants.MAX_DISCOUNT_RATE) revert INVALID_DISCOUNT_RATE();\\n\\n    // Weight must fit into a uint88.\\n    if (_data.weight > type(uint88).max) revert INVALID_WEIGHT();\\n\\n    // The configuration timestamp is now.\\n    uint256 _configuration = block.timestamp;\\n\\n    // Set up a reconfiguration by configuring intrinsic properties.\\n    _configureIntrinsicPropertiesFor(\\n      _projectId,\\n      _configuration,\\n      _data.weight,\\n      // Must start on or after the current timestamp.\\n      _mustStartAtOrAfter > block.timestamp ? _mustStartAtOrAfter : block.timestamp\\n    );\\n\\n    // Efficiently stores a funding cycles provided user defined properties.\\n    // If all user config properties are zero, no need to store anything as the default value will have the same outcome.\\n    if (\\n      _data.ballot != IJBFundingCycleBallot(address(0)) ||\\n      _data.duration > 0 ||\\n      _data.discountRate > 0\\n    ) {\\n      // ballot in bits 0-159 bytes.\\n      uint256 packed = uint160(address(_data.ballot));\\n\\n      // duration in bits 160-223 bytes.\\n      packed |= _data.duration << 160;\\n\\n      // discountRate in bits 224-255 bytes.\\n      packed |= _data.discountRate << 224;\\n\\n      // Set in storage.\\n      _packedUserPropertiesOf[_projectId][_configuration] = packed;\\n    }\\n\\n    // Set the metadata if needed.\\n    if (_metadata > 0) _metadataOf[_projectId][_configuration] = _metadata;\\n\\n    emit Configure(_configuration, _projectId, _data, _metadata, _mustStartAtOrAfter, msg.sender);\\n\\n    // Return the funding cycle for the new configuration.\\n    return _getStructFor(_projectId, _configuration);\\n  }\\n\\n  //*********************************************************************//\\n  // --------------------- private helper functions -------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice \\n    Updates the configurable funding cycle for this project if it exists, otherwise creates one.\\n\\n    @param _projectId The ID of the project to find a configurable funding cycle for.\\n    @param _configuration The time at which the funding cycle was configured.\\n    @param _weight The weight to store in the configured funding cycle.\\n    @param _mustStartAtOrAfter The time before which the initialized funding cycle can't start.\\n  */\\n  function _configureIntrinsicPropertiesFor(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _weight,\\n    uint256 _mustStartAtOrAfter\\n  ) private {\\n    // If there's not yet a funding cycle for the project, initialize one.\\n    if (latestConfigurationOf[_projectId] == 0)\\n      // Use an empty funding cycle as the base.\\n      return\\n        _initFor(_projectId, _getStructFor(0, 0), _configuration, _mustStartAtOrAfter, _weight);\\n\\n    // Get the active funding cycle's configuration.\\n    uint256 _currentConfiguration = _eligibleOf(_projectId);\\n\\n    // If an eligible funding cycle does not exist, get a reference to the latest funding cycle configuration for the project.\\n    if (_currentConfiguration == 0)\\n      // Get the latest funding cycle's configuration.\\n      _currentConfiguration = latestConfigurationOf[_projectId];\\n\\n    // Get a reference to the funding cycle.\\n    JBFundingCycle memory _baseFundingCycle = _getStructFor(_projectId, _currentConfiguration);\\n\\n    if (!_isApproved(_projectId, _baseFundingCycle))\\n      // If it hasn't been approved, set the ID to be the funding cycle it's based on,\\n      // which carries the latest approved configuration.\\n      _baseFundingCycle = _getStructFor(_projectId, _baseFundingCycle.basedOn);\\n\\n    // The configuration can't be the same as the base configuration.\\n    if (_baseFundingCycle.configuration == _configuration) revert NO_SAME_BLOCK_RECONFIGURATION();\\n\\n    // The time after the ballot of the provided funding cycle has expired.\\n    // If the provided funding cycle has no ballot, return the current timestamp.\\n    uint256 _timestampAfterBallot = _baseFundingCycle.ballot == IJBFundingCycleBallot(address(0))\\n      ? 0\\n      : _configuration + _baseFundingCycle.ballot.duration();\\n\\n    _initFor(\\n      _projectId,\\n      _baseFundingCycle,\\n      _configuration,\\n      // Can only start after the ballot.\\n      _timestampAfterBallot > _mustStartAtOrAfter ? _timestampAfterBallot : _mustStartAtOrAfter,\\n      _weight\\n    );\\n  }\\n\\n  /**\\n    @notice \\n    Initializes a funding cycle with the specified properties.\\n\\n    @param _projectId The ID of the project to which the funding cycle being initialized belongs.\\n    @param _baseFundingCycle The funding cycle to base the initialized one on.\\n    @param _configuration The configuration of the funding cycle being initialized.\\n    @param _mustStartAtOrAfter The time before which the initialized funding cycle cannot start.\\n    @param _weight The weight to give the newly initialized funding cycle.\\n  */\\n  function _initFor(\\n    uint256 _projectId,\\n    JBFundingCycle memory _baseFundingCycle,\\n    uint256 _configuration,\\n    uint256 _mustStartAtOrAfter,\\n    uint256 _weight\\n  ) private {\\n    // If there is no base, initialize a first cycle.\\n    if (_baseFundingCycle.number == 0) {\\n      // The first number is 1.\\n      uint256 _number = 1;\\n\\n      // Set fresh intrinsic properties.\\n      _packAndStoreIntrinsicPropertiesOf(\\n        _configuration,\\n        _projectId,\\n        _number,\\n        _weight,\\n        _baseFundingCycle.configuration,\\n        _mustStartAtOrAfter\\n      );\\n    } else {\\n      // Derive the correct next start time from the base.\\n      uint256 _start = _deriveStartFrom(_baseFundingCycle, _mustStartAtOrAfter);\\n\\n      // A weight of 1 is treated as a weight of 0.\\n      // This is to allow a weight of 0 (default) to represent inheriting the discounted weight of the previous funding cycle.\\n      _weight = _weight > 0\\n        ? (_weight == 1 ? 0 : _weight)\\n        : _deriveWeightFrom(_baseFundingCycle, _start);\\n\\n      // Derive the correct number.\\n      uint256 _number = _deriveNumberFrom(_baseFundingCycle, _start);\\n\\n      // Update the intrinsic properties.\\n      _packAndStoreIntrinsicPropertiesOf(\\n        _configuration,\\n        _projectId,\\n        _number,\\n        _weight,\\n        _baseFundingCycle.configuration,\\n        _start\\n      );\\n    }\\n\\n    // Set the project's latest funding cycle configuration.\\n    latestConfigurationOf[_projectId] = _configuration;\\n\\n    emit Init(_configuration, _projectId, _baseFundingCycle.configuration);\\n  }\\n\\n  /**\\n    @notice \\n    Efficiently stores a funding cycle's provided intrinsic properties.\\n\\n    @param _configuration The configuration of the funding cycle to pack and store.\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n    @param _number The number of the funding cycle.\\n    @param _weight The weight of the funding cycle.\\n    @param _basedOn The configuration of the base funding cycle.\\n    @param _start The start time of this funding cycle.\\n  */\\n  function _packAndStoreIntrinsicPropertiesOf(\\n    uint256 _configuration,\\n    uint256 _projectId,\\n    uint256 _number,\\n    uint256 _weight,\\n    uint256 _basedOn,\\n    uint256 _start\\n  ) private {\\n    // weight in bits 0-87.\\n    uint256 packed = _weight;\\n\\n    // basedOn in bits 88-143.\\n    packed |= _basedOn << 88;\\n\\n    // start in bits 144-199.\\n    packed |= _start << 144;\\n\\n    // number in bits 200-255.\\n    packed |= _number << 200;\\n\\n    // Store the packed value.\\n    _packedIntrinsicPropertiesOf[_projectId][_configuration] = packed;\\n  }\\n\\n  /**\\n    @notice \\n    The project's stored funding cycle that hasn't yet started and should be used next, if one exists.\\n\\n    @dev\\n    A value of 0 is returned if no funding cycle was found.\\n\\n    @dev\\n    Assumes the project has a latest configuration.\\n    \\n    @param _projectId The ID of a project to look through for a standby cycle.\\n\\n    @return configuration The configuration of the standby funding cycle if one exists, or 0 if one doesn't exist.\\n  */\\n  function _standbyOf(uint256 _projectId) private view returns (uint256 configuration) {\\n    // Get a reference to the project's latest funding cycle.\\n    configuration = latestConfigurationOf[_projectId];\\n\\n    // Get the necessary properties for the latest funding cycle.\\n    JBFundingCycle memory _fundingCycle = _getStructFor(_projectId, configuration);\\n\\n    // There is no upcoming funding cycle if the latest funding cycle has already started.\\n    if (block.timestamp >= _fundingCycle.start) return 0;\\n\\n    // If this is the first funding cycle, it is queued.\\n    if (_fundingCycle.number == 1) return configuration;\\n\\n    // Get the necessary properties for the base funding cycle.\\n    JBFundingCycle memory _baseFundingCycle = _getStructFor(_projectId, _fundingCycle.basedOn);\\n\\n    // If the latest configuration doesn't start until after another base cycle, return 0.\\n    if (\\n      _baseFundingCycle.duration > 0 &&\\n      block.timestamp < _fundingCycle.start - _baseFundingCycle.duration\\n    ) return 0;\\n  }\\n\\n  /**\\n    @notice \\n    The project's stored funding cycle that has started and hasn't yet expired.\\n    \\n    @dev\\n    A value of 0 is returned if no funding cycle was found.\\n\\n    @dev\\n    Assumes the project has a latest configuration.\\n\\n    @param _projectId The ID of the project to look through.\\n\\n    @return configuration The configuration of an eligible funding cycle if one exists, or 0 if one doesn't exist.\\n  */\\n  function _eligibleOf(uint256 _projectId) private view returns (uint256 configuration) {\\n    // Get a reference to the project's latest funding cycle.\\n    configuration = latestConfigurationOf[_projectId];\\n\\n    // Get the latest funding cycle.\\n    JBFundingCycle memory _fundingCycle = _getStructFor(_projectId, configuration);\\n\\n    // If the latest is expired, return an empty funding cycle.\\n    // A duration of 0 cannot be expired.\\n    if (\\n      _fundingCycle.duration > 0 && block.timestamp >= _fundingCycle.start + _fundingCycle.duration\\n    ) return 0;\\n\\n    // Return the funding cycle's configuration if it has started.\\n    if (block.timestamp >= _fundingCycle.start) return _fundingCycle.configuration;\\n\\n    // Get a reference to the cycle's base configuration.\\n    JBFundingCycle memory _baseFundingCycle = _getStructFor(_projectId, _fundingCycle.basedOn);\\n\\n    // If the base cycle isn't eligible, the project has no eligible cycle.\\n    // A duration of 0 is always eligible.\\n    if (\\n      _baseFundingCycle.duration > 0 &&\\n      block.timestamp >= _baseFundingCycle.start + _baseFundingCycle.duration\\n    ) return 0;\\n\\n    // Return the configuration that the latest funding cycle is based on.\\n    configuration = _fundingCycle.basedOn;\\n  }\\n\\n  /** \\n    @notice \\n    A view of the funding cycle that would be created based on the provided one if the project doesn't make a reconfiguration.\\n\\n    @dev\\n    Returns an empty funding cycle if there can't be a mock funding cycle based on the provided one.\\n\\n    @dev\\n    Assumes a funding cycle with a duration of 0 will never be asked to be the base of a mock.\\n\\n    @param _baseFundingCycle The funding cycle that the resulting funding cycle should follow.\\n    @param _allowMidCycle A flag indicating if the mocked funding cycle is allowed to already be mid cycle.\\n\\n    @return A mock of what the next funding cycle will be.\\n  */\\n  function _mockFundingCycleBasedOn(JBFundingCycle memory _baseFundingCycle, bool _allowMidCycle)\\n    private\\n    view\\n    returns (JBFundingCycle memory)\\n  {\\n    // Get the distance of the current time to the start of the next possible funding cycle.\\n    // If the returned mock cycle must not yet have started, the start time of the mock must be in the future.\\n    uint256 _mustStartAtOrAfter = !_allowMidCycle\\n      ? block.timestamp + 1\\n      : block.timestamp - _baseFundingCycle.duration + 1;\\n\\n    // Derive what the start time should be.\\n    uint256 _start = _deriveStartFrom(_baseFundingCycle, _mustStartAtOrAfter);\\n\\n    // Derive what the number should be.\\n    uint256 _number = _deriveNumberFrom(_baseFundingCycle, _start);\\n\\n    return\\n      JBFundingCycle(\\n        _number,\\n        _baseFundingCycle.configuration,\\n        _baseFundingCycle.basedOn,\\n        _start,\\n        _baseFundingCycle.duration,\\n        _deriveWeightFrom(_baseFundingCycle, _start),\\n        _baseFundingCycle.discountRate,\\n        _baseFundingCycle.ballot,\\n        _baseFundingCycle.metadata\\n      );\\n  }\\n\\n  /** \\n    @notice \\n    The date that is the nearest multiple of the specified funding cycle's duration from its end.\\n\\n    @param _baseFundingCycle The funding cycle to base the calculation on.\\n    @param _mustStartAtOrAfter A date that the derived start must be on or come after.\\n\\n    @return start The next start time.\\n  */\\n  function _deriveStartFrom(JBFundingCycle memory _baseFundingCycle, uint256 _mustStartAtOrAfter)\\n    private\\n    pure\\n    returns (uint256 start)\\n  {\\n    // A subsequent cycle to one with a duration of 0 should start as soon as possible.\\n    if (_baseFundingCycle.duration == 0) return _mustStartAtOrAfter;\\n\\n    // The time when the funding cycle immediately after the specified funding cycle starts.\\n    uint256 _nextImmediateStart = _baseFundingCycle.start + _baseFundingCycle.duration;\\n\\n    // If the next immediate start is now or in the future, return it.\\n    if (_nextImmediateStart >= _mustStartAtOrAfter) return _nextImmediateStart;\\n\\n    // The amount of seconds since the `_mustStartAtOrAfter` time which results in a start time that might satisfy the specified constraints.\\n    uint256 _timeFromImmediateStartMultiple = (_mustStartAtOrAfter - _nextImmediateStart) %\\n      _baseFundingCycle.duration;\\n\\n    // A reference to the first possible start timestamp.\\n    start = _mustStartAtOrAfter - _timeFromImmediateStartMultiple;\\n\\n    // Add increments of duration as necessary to satisfy the threshold.\\n    while (_mustStartAtOrAfter > start) start = start + _baseFundingCycle.duration;\\n  }\\n\\n  /** \\n    @notice \\n    The accumulated weight change since the specified funding cycle.\\n\\n    @param _baseFundingCycle The funding cycle to base the calculation on.\\n    @param _start The start time of the funding cycle to derive a number for.\\n\\n    @return weight The derived weight, as a fixed point number with 18 decimals.\\n  */\\n  function _deriveWeightFrom(JBFundingCycle memory _baseFundingCycle, uint256 _start)\\n    private\\n    pure\\n    returns (uint256 weight)\\n  {\\n    // A subsequent cycle to one with a duration of 0 should have the next possible weight.\\n    if (_baseFundingCycle.duration == 0)\\n      return\\n        PRBMath.mulDiv(\\n          _baseFundingCycle.weight,\\n          JBConstants.MAX_DISCOUNT_RATE - _baseFundingCycle.discountRate,\\n          JBConstants.MAX_DISCOUNT_RATE\\n        );\\n\\n    // The weight should be based off the base funding cycle's weight.\\n    weight = _baseFundingCycle.weight;\\n\\n    // If the discount is 0, the weight doesn't change.\\n    if (_baseFundingCycle.discountRate == 0) return weight;\\n\\n    // The difference between the start of the base funding cycle and the proposed start.\\n    uint256 _startDistance = _start - _baseFundingCycle.start;\\n\\n    // Apply the base funding cycle's discount rate for each cycle that has passed.\\n    uint256 _discountMultiple = _startDistance / _baseFundingCycle.duration;\\n\\n    for (uint256 i = 0; i < _discountMultiple; i++) {\\n      // The number of times to apply the discount rate.\\n      // Base the new weight on the specified funding cycle's weight.\\n      weight = PRBMath.mulDiv(\\n        weight,\\n        JBConstants.MAX_DISCOUNT_RATE - _baseFundingCycle.discountRate,\\n        JBConstants.MAX_DISCOUNT_RATE\\n      );\\n      // The calculation doesn't need to continue if the weight is 0.\\n      if (weight == 0) break;\\n    }\\n  }\\n\\n  /** \\n    @notice \\n    The number of the next funding cycle given the specified funding cycle.\\n\\n    @param _baseFundingCycle The funding cycle to base the calculation on.\\n    @param _start The start time of the funding cycle to derive a number for.\\n\\n    @return The funding cycle number.\\n  */\\n  function _deriveNumberFrom(JBFundingCycle memory _baseFundingCycle, uint256 _start)\\n    private\\n    pure\\n    returns (uint256)\\n  {\\n    // A subsequent cycle to one with a duration of 0 should be the next number.\\n    if (_baseFundingCycle.duration == 0) return _baseFundingCycle.number + 1;\\n\\n    // The difference between the start of the base funding cycle and the proposed start.\\n    uint256 _startDistance = _start - _baseFundingCycle.start;\\n\\n    // Find the number of base cycles that fit in the start distance.\\n    return _baseFundingCycle.number + (_startDistance / _baseFundingCycle.duration);\\n  }\\n\\n  /** \\n    @notice \\n    Checks to see if the provided funding cycle is approved according to the correct ballot.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs. \\n    @param _fundingCycle The funding cycle to get an approval flag for.\\n\\n    @return The approval flag.\\n  */\\n  function _isApproved(uint256 _projectId, JBFundingCycle memory _fundingCycle)\\n    private\\n    view\\n    returns (bool)\\n  {\\n    return\\n      _ballotStateOf(\\n        _projectId,\\n        _fundingCycle.configuration,\\n        _fundingCycle.start,\\n        _fundingCycle.basedOn\\n      ) == JBBallotState.Approved;\\n  }\\n\\n  /**\\n    @notice \\n    A project's latest funding cycle configuration approval status.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n    @param _configuration The funding cycle configuration to get the ballot state of.\\n    @param _start The start time of the funding cycle configuration to get the ballot state of.\\n    @param _ballotFundingCycleConfiguration The configuration of the funding cycle which is configured with the ballot that should be used.\\n\\n    @return The ballot state of the project.\\n  */\\n  function _ballotStateOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _start,\\n    uint256 _ballotFundingCycleConfiguration\\n  ) private view returns (JBBallotState) {\\n    // If there is no ballot funding cycle, implicitly approve.\\n    if (_ballotFundingCycleConfiguration == 0) return JBBallotState.Approved;\\n\\n    // Get the ballot funding cycle.\\n    JBFundingCycle memory _ballotFundingCycle = _getStructFor(\\n      _projectId,\\n      _ballotFundingCycleConfiguration\\n    );\\n\\n    // If there is no ballot, the ID is auto approved.\\n    // Otherwise if the ballot's duration hasn't passed, its still active.\\n    // Otherwise, return the ballot's state.\\n    if (_ballotFundingCycle.ballot == IJBFundingCycleBallot(address(0)))\\n      return JBBallotState.Approved;\\n    else if (_ballotFundingCycle.ballot.duration() >= block.timestamp - _configuration)\\n      return JBBallotState.Active;\\n    else return _ballotFundingCycle.ballot.stateOf(_projectId, _configuration, _start);\\n  }\\n\\n  /**\\n    @notice \\n    Unpack a funding cycle's packed stored values into an easy-to-work-with funding cycle struct.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n    @param _configuration The funding cycle configuration to get the full struct for.\\n\\n    @return fundingCycle A funding cycle struct.\\n  */\\n  function _getStructFor(uint256 _projectId, uint256 _configuration)\\n    private\\n    view\\n    returns (JBFundingCycle memory fundingCycle)\\n  {\\n    // Return an empty funding cycle if the configuration specified is 0.\\n    if (_configuration == 0) return fundingCycle;\\n\\n    fundingCycle.configuration = _configuration;\\n\\n    uint256 _packedIntrinsicProperties = _packedIntrinsicPropertiesOf[_projectId][_configuration];\\n\\n    // weight in bits 0-87 bits.\\n    fundingCycle.weight = uint256(uint88(_packedIntrinsicProperties));\\n    // basedOn in bits 88-143 bits.\\n    fundingCycle.basedOn = uint256(uint56(_packedIntrinsicProperties >> 88));\\n    // start in bits 144-199 bits.\\n    fundingCycle.start = uint256(uint56(_packedIntrinsicProperties >> 144));\\n    // number in bits 200-255 bits.\\n    fundingCycle.number = uint256(uint56(_packedIntrinsicProperties >> 200));\\n\\n    uint256 _packedUserProperties = _packedUserPropertiesOf[_projectId][_configuration];\\n\\n    // ballot in bits 0-159 bits.\\n    fundingCycle.ballot = IJBFundingCycleBallot(address(uint160(_packedUserProperties)));\\n    // duration in bits 160-223 bits.\\n    fundingCycle.duration = uint256(uint64(_packedUserProperties >> 160));\\n    // discountRate in bits 224-255 bits.\\n    fundingCycle.discountRate = uint256(uint32(_packedUserProperties >> 224));\\n\\n    fundingCycle.metadata = _metadataOf[_projectId][_configuration];\\n  }\\n}\\n\",\"keccak256\":\"0x73820a0fec6a24195a854ecbd64e116e1728b5765dd6bc5315f25f4af783860f\",\"license\":\"MIT\"},\"contracts/abstract/JBControllerUtility.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBControllerUtility.sol';\\n\\n/** \\n  @notice\\n  Provides tools for contracts with functionality that can only be accessed by a project's controller.\\n\\n  @dev\\n  Adheres to -\\n  IJBControllerUtility: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.\\n*/\\nabstract contract JBControllerUtility is IJBControllerUtility {\\n  //*********************************************************************//\\n  // --------------------------- custom errors -------------------------- //\\n  //*********************************************************************//\\n  error CONTROLLER_UNAUTHORIZED();\\n\\n  //*********************************************************************//\\n  // ---------------------------- modifiers ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Only allows the controller of the specified project to proceed. \\n\\n    @param _projectId The ID of the project. \\n  */\\n  modifier onlyController(uint256 _projectId) {\\n    if (address(directory.controllerOf(_projectId)) != msg.sender) revert CONTROLLER_UNAUTHORIZED();\\n    _;\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    The directory of terminals and controllers for projects.\\n  */\\n  IJBDirectory public immutable override directory;\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _directory A contract storing directories of terminals and controllers for each project.\\n  */\\n  constructor(IJBDirectory _directory) {\\n    directory = _directory;\\n  }\\n}\\n\",\"keccak256\":\"0x7103f60c7279bd7db41b9ed10588c98fee960038f165705ad226d5c2cbedfa6a\",\"license\":\"MIT\"},\"contracts/enums/JBBallotState.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nenum JBBallotState {\\n  Active,\\n  Approved,\\n  Failed\\n}\\n\",\"keccak256\":\"0xadf07fd49f7e0947006fa1921bc7fd8fb532e8fecf3b9266721a8b7e43907461\",\"license\":\"MIT\"},\"contracts/interfaces/IJBControllerUtility.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBDirectory.sol';\\n\\ninterface IJBControllerUtility {\\n  function directory() external view returns (IJBDirectory);\\n}\\n\",\"keccak256\":\"0xb280df3e7bd6abc2fb533073a806a9b3edfea8f5be2791c6eb1767c79dd98f88\",\"license\":\"MIT\"},\"contracts/interfaces/IJBDirectory.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBFundingCycleStore.sol';\\nimport './IJBPaymentTerminal.sol';\\nimport './IJBProjects.sol';\\n\\ninterface IJBDirectory {\\n  event SetController(uint256 indexed projectId, address indexed controller, address caller);\\n\\n  event AddTerminal(uint256 indexed projectId, IJBPaymentTerminal indexed terminal, address caller);\\n\\n  event SetTerminals(uint256 indexed projectId, IJBPaymentTerminal[] terminals, address caller);\\n\\n  event SetPrimaryTerminal(\\n    uint256 indexed projectId,\\n    address indexed token,\\n    IJBPaymentTerminal indexed terminal,\\n    address caller\\n  );\\n\\n  event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function controllerOf(uint256 _projectId) external view returns (address);\\n\\n  function isAllowedToSetFirstController(address _address) external view returns (bool);\\n\\n  function terminalsOf(uint256 _projectId) external view returns (IJBPaymentTerminal[] memory);\\n\\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\\n    external\\n    view\\n    returns (bool);\\n\\n  function primaryTerminalOf(uint256 _projectId, address _token)\\n    external\\n    view\\n    returns (IJBPaymentTerminal);\\n\\n  function setControllerOf(uint256 _projectId, address _controller) external;\\n\\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals) external;\\n\\n  function setPrimaryTerminalOf(\\n    uint256 _projectId,\\n    address _token,\\n    IJBPaymentTerminal _terminal\\n  ) external;\\n\\n  function setIsAllowedToSetFirstController(address _address, bool _flag) external;\\n}\\n\",\"keccak256\":\"0x9e7f0d3590b3ddc3b667fcdacaa53b627e4d2b3a912360597fb0ffa413518167\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleBallot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../enums/JBBallotState.sol';\\nimport './IJBFundingCycleStore.sol';\\n\\ninterface IJBFundingCycleBallot is IERC165 {\\n  function duration() external view returns (uint256);\\n\\n  function stateOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _start\\n  ) external view returns (JBBallotState);\\n}\\n\",\"keccak256\":\"0xdc8c8bed613f5759c958b7b0d646032b4337a349a8ecea5ffeb167623f2f29f5\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../enums/JBBallotState.sol';\\nimport './../structs/JBFundingCycle.sol';\\nimport './../structs/JBFundingCycleData.sol';\\n\\ninterface IJBFundingCycleStore {\\n  event Configure(\\n    uint256 indexed configuration,\\n    uint256 indexed projectId,\\n    JBFundingCycleData data,\\n    uint256 metadata,\\n    uint256 mustStartAtOrAfter,\\n    address caller\\n  );\\n\\n  event Init(uint256 indexed configuration, uint256 indexed projectId, uint256 indexed basedOn);\\n\\n  function latestConfigurationOf(uint256 _projectId) external view returns (uint256);\\n\\n  function get(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory);\\n\\n  function latestConfiguredOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBBallotState ballotState);\\n\\n  function queuedOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentBallotStateOf(uint256 _projectId) external view returns (JBBallotState);\\n\\n  function configureFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    uint256 _metadata,\\n    uint256 _mustStartAtOrAfter\\n  ) external returns (JBFundingCycle memory fundingCycle);\\n}\\n\",\"keccak256\":\"0xf75791cd5b71bc6773cf56c92501e3f255a406eaedea781cb57cea2fa1e4ef20\",\"license\":\"MIT\"},\"contracts/interfaces/IJBPaymentTerminal.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\n\\ninterface IJBPaymentTerminal is IERC165 {\\n  function acceptsToken(address _token, uint256 _projectId) external view returns (bool);\\n\\n  function currencyForToken(address _token) external view returns (uint256);\\n\\n  function decimalsForToken(address _token) external view returns (uint256);\\n\\n  // Return value must be a fixed point number with 18 decimals.\\n  function currentEthOverflowOf(uint256 _projectId) external view returns (uint256);\\n\\n  function pay(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable returns (uint256 beneficiaryTokenCount);\\n\\n  function addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable;\\n}\\n\",\"keccak256\":\"0xf50279115f05568c12c254eb2c078b81a0c761f8cc985220e30ec15679118caa\",\"license\":\"MIT\"},\"contracts/interfaces/IJBProjects.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/token/ERC721/IERC721.sol';\\nimport './../structs/JBProjectMetadata.sol';\\nimport './IJBTokenUriResolver.sol';\\n\\ninterface IJBProjects is IERC721 {\\n  event Create(\\n    uint256 indexed projectId,\\n    address indexed owner,\\n    JBProjectMetadata metadata,\\n    address caller\\n  );\\n\\n  event SetMetadata(uint256 indexed projectId, JBProjectMetadata metadata, address caller);\\n\\n  event SetTokenUriResolver(IJBTokenUriResolver indexed resolver, address caller);\\n\\n  function count() external view returns (uint256);\\n\\n  function metadataContentOf(uint256 _projectId, uint256 _domain)\\n    external\\n    view\\n    returns (string memory);\\n\\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\\n\\n  function createFor(address _owner, JBProjectMetadata calldata _metadata)\\n    external\\n    returns (uint256 projectId);\\n\\n  function setMetadataOf(uint256 _projectId, JBProjectMetadata calldata _metadata) external;\\n\\n  function setTokenUriResolver(IJBTokenUriResolver _newResolver) external;\\n}\\n\",\"keccak256\":\"0x602bad7e8cce6e9d53fe5e3532c5d4428d02206f8df48b246aac7ee8a6dcc98d\",\"license\":\"MIT\"},\"contracts/interfaces/IJBTokenUriResolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBTokenUriResolver {\\n  function getUri(uint256 _projectId) external view returns (string memory tokenUri);\\n}\\n\",\"keccak256\":\"0xa64ece706d7ce399095f403b08383391c089da4995b5ee000b278d93d242a475\",\"license\":\"MIT\"},\"contracts/libraries/JBConstants.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/**\\n  @notice\\n  Global constants used across Juicebox contracts.\\n*/\\nlibrary JBConstants {\\n  uint256 public constant MAX_RESERVED_RATE = 10000;\\n  uint256 public constant MAX_REDEMPTION_RATE = 10000;\\n  uint256 public constant MAX_DISCOUNT_RATE = 1000000000;\\n  uint256 public constant SPLITS_TOTAL_PERCENT = 1000000000;\\n  uint256 public constant MAX_FEE = 1000000000;\\n  uint256 public constant MAX_FEE_DISCOUNT = 1000000000;\\n}\\n\",\"keccak256\":\"0x31517dfd8accf961f247cefd72bf8a76c20747cd8ed65cedf817dd7aa9a0082f\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycle.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member number The funding cycle number for the cycle's project. Each funding cycle has a number that is an increment of the cycle that directly preceded it. Each project's first funding cycle has a number of 1.\\n  @member configuration The timestamp when the parameters for this funding cycle were configured. This value will stay the same for subsequent funding cycles that roll over from an originally configured cycle.\\n  @member basedOn The `configuration` of the funding cycle that was active when this cycle was created.\\n  @member start The timestamp marking the moment from which the funding cycle is considered active. It is a unix timestamp measured in seconds.\\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n  @member metadata Extra data that can be associated with a funding cycle.\\n*/\\nstruct JBFundingCycle {\\n  uint256 number;\\n  uint256 configuration;\\n  uint256 basedOn;\\n  uint256 start;\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n  uint256 metadata;\\n}\\n\",\"keccak256\":\"0x7e1ee378705e677298b955bd82b7c79b962e1c2e20f840eb8c491aba595e4905\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycleData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n*/\\nstruct JBFundingCycleData {\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n}\\n\",\"keccak256\":\"0xfc1c73d1b01782bbdfdd73d5d25f075e6c33dd37414638b63664063a0d1692cc\",\"license\":\"MIT\"},\"contracts/structs/JBProjectMetadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member content The metadata content.\\n  @member domain The domain within which the metadata applies.\\n*/\\nstruct JBProjectMetadata {\\n  string content;\\n  uint256 domain;\\n}\\n\",\"keccak256\":\"0x5ea56d46d07944aacfe540ee9290f10a70d77b537650a0b28975e2e88fa5b9a4\",\"license\":\"MIT\"},\"prb-math/contracts/PRBMath.sol\":{\"content\":\"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivFixedPointOverflow(uint256 prod1);\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivOverflow(uint256 prod1, uint256 denominator);\\n\\n/// @notice Emitted when one of the inputs is type(int256).min.\\nerror PRBMath__MulDivSignedInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows int256.\\nerror PRBMath__MulDivSignedOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is MIN_SD59x18.\\nerror PRBMathSD59x18__AbsInputTooSmall();\\n\\n/// @notice Emitted when ceiling a number overflows SD59x18.\\nerror PRBMathSD59x18__CeilOverflow(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__DivInputTooSmall();\\n\\n/// @notice Emitted when one of the intermediary unsigned results overflows SD59x18.\\nerror PRBMathSD59x18__DivOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathSD59x18__ExpInputTooBig(int256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathSD59x18__Exp2InputTooBig(int256 x);\\n\\n/// @notice Emitted when flooring a number underflows SD59x18.\\nerror PRBMathSD59x18__FloorUnderflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format overflows SD59x18.\\nerror PRBMathSD59x18__FromIntOverflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format underflows SD59x18.\\nerror PRBMathSD59x18__FromIntUnderflow(int256 x);\\n\\n/// @notice Emitted when the product of the inputs is negative.\\nerror PRBMathSD59x18__GmNegativeProduct(int256 x, int256 y);\\n\\n/// @notice Emitted when multiplying the inputs overflows SD59x18.\\nerror PRBMathSD59x18__GmOverflow(int256 x, int256 y);\\n\\n/// @notice Emitted when the input is less than or equal to zero.\\nerror PRBMathSD59x18__LogInputTooSmall(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__MulInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__MulOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__PowuOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is negative.\\nerror PRBMathSD59x18__SqrtNegativeInput(int256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows SD59x18.\\nerror PRBMathSD59x18__SqrtOverflow(int256 x);\\n\\n/// @notice Emitted when addition overflows UD60x18.\\nerror PRBMathUD60x18__AddOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when ceiling a number overflows UD60x18.\\nerror PRBMathUD60x18__CeilOverflow(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathUD60x18__ExpInputTooBig(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathUD60x18__Exp2InputTooBig(uint256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format format overflows UD60x18.\\nerror PRBMathUD60x18__FromUintOverflow(uint256 x);\\n\\n/// @notice Emitted when multiplying the inputs overflows UD60x18.\\nerror PRBMathUD60x18__GmOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when the input is less than 1.\\nerror PRBMathUD60x18__LogInputTooSmall(uint256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows UD60x18.\\nerror PRBMathUD60x18__SqrtOverflow(uint256 x);\\n\\n/// @notice Emitted when subtraction underflows UD60x18.\\nerror PRBMathUD60x18__SubUnderflow(uint256 x, uint256 y);\\n\\n/// @dev Common mathematical functions used in both PRBMathSD59x18 and PRBMathUD60x18. Note that this shared library\\n/// does not always assume the signed 59.18-decimal fixed-point or the unsigned 60.18-decimal fixed-point\\n/// representation. When it does not, it is explicitly mentioned in the NatSpec documentation.\\nlibrary PRBMath {\\n    /// STRUCTS ///\\n\\n    struct SD59x18 {\\n        int256 value;\\n    }\\n\\n    struct UD60x18 {\\n        uint256 value;\\n    }\\n\\n    /// STORAGE ///\\n\\n    /// @dev How many trailing decimals can be represented.\\n    uint256 internal constant SCALE = 1e18;\\n\\n    /// @dev Largest power of two divisor of SCALE.\\n    uint256 internal constant SCALE_LPOTD = 262144;\\n\\n    /// @dev SCALE inverted mod 2^256.\\n    uint256 internal constant SCALE_INVERSE =\\n        78156646155174841979727994598816262306175212592076161876661_508869554232690281;\\n\\n    /// FUNCTIONS ///\\n\\n    /// @notice Calculates the binary exponent of x using the binary fraction method.\\n    /// @dev Has to use 192.64-bit fixed-point numbers.\\n    /// See https://ethereum.stackexchange.com/a/96594/24693.\\n    /// @param x The exponent as an unsigned 192.64-bit fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function exp2(uint256 x) internal pure returns (uint256 result) {\\n        unchecked {\\n            // Start from 0.5 in the 192.64-bit fixed-point format.\\n            result = 0x800000000000000000000000000000000000000000000000;\\n\\n            // Multiply the result by root(2, 2^-i) when the bit at position i is 1. None of the intermediary results overflows\\n            // because the initial result is 2^191 and all magic factors are less than 2^65.\\n            if (x & 0x8000000000000000 > 0) {\\n                result = (result * 0x16A09E667F3BCC909) >> 64;\\n            }\\n            if (x & 0x4000000000000000 > 0) {\\n                result = (result * 0x1306FE0A31B7152DF) >> 64;\\n            }\\n            if (x & 0x2000000000000000 > 0) {\\n                result = (result * 0x1172B83C7D517ADCE) >> 64;\\n            }\\n            if (x & 0x1000000000000000 > 0) {\\n                result = (result * 0x10B5586CF9890F62A) >> 64;\\n            }\\n            if (x & 0x800000000000000 > 0) {\\n                result = (result * 0x1059B0D31585743AE) >> 64;\\n            }\\n            if (x & 0x400000000000000 > 0) {\\n                result = (result * 0x102C9A3E778060EE7) >> 64;\\n            }\\n            if (x & 0x200000000000000 > 0) {\\n                result = (result * 0x10163DA9FB33356D8) >> 64;\\n            }\\n            if (x & 0x100000000000000 > 0) {\\n                result = (result * 0x100B1AFA5ABCBED61) >> 64;\\n            }\\n            if (x & 0x80000000000000 > 0) {\\n                result = (result * 0x10058C86DA1C09EA2) >> 64;\\n            }\\n            if (x & 0x40000000000000 > 0) {\\n                result = (result * 0x1002C605E2E8CEC50) >> 64;\\n            }\\n            if (x & 0x20000000000000 > 0) {\\n                result = (result * 0x100162F3904051FA1) >> 64;\\n            }\\n            if (x & 0x10000000000000 > 0) {\\n                result = (result * 0x1000B175EFFDC76BA) >> 64;\\n            }\\n            if (x & 0x8000000000000 > 0) {\\n                result = (result * 0x100058BA01FB9F96D) >> 64;\\n            }\\n            if (x & 0x4000000000000 > 0) {\\n                result = (result * 0x10002C5CC37DA9492) >> 64;\\n            }\\n            if (x & 0x2000000000000 > 0) {\\n                result = (result * 0x1000162E525EE0547) >> 64;\\n            }\\n            if (x & 0x1000000000000 > 0) {\\n                result = (result * 0x10000B17255775C04) >> 64;\\n            }\\n            if (x & 0x800000000000 > 0) {\\n                result = (result * 0x1000058B91B5BC9AE) >> 64;\\n            }\\n            if (x & 0x400000000000 > 0) {\\n                result = (result * 0x100002C5C89D5EC6D) >> 64;\\n            }\\n            if (x & 0x200000000000 > 0) {\\n                result = (result * 0x10000162E43F4F831) >> 64;\\n            }\\n            if (x & 0x100000000000 > 0) {\\n                result = (result * 0x100000B1721BCFC9A) >> 64;\\n            }\\n            if (x & 0x80000000000 > 0) {\\n                result = (result * 0x10000058B90CF1E6E) >> 64;\\n            }\\n            if (x & 0x40000000000 > 0) {\\n                result = (result * 0x1000002C5C863B73F) >> 64;\\n            }\\n            if (x & 0x20000000000 > 0) {\\n                result = (result * 0x100000162E430E5A2) >> 64;\\n            }\\n            if (x & 0x10000000000 > 0) {\\n                result = (result * 0x1000000B172183551) >> 64;\\n            }\\n            if (x & 0x8000000000 > 0) {\\n                result = (result * 0x100000058B90C0B49) >> 64;\\n            }\\n            if (x & 0x4000000000 > 0) {\\n                result = (result * 0x10000002C5C8601CC) >> 64;\\n            }\\n            if (x & 0x2000000000 > 0) {\\n                result = (result * 0x1000000162E42FFF0) >> 64;\\n            }\\n            if (x & 0x1000000000 > 0) {\\n                result = (result * 0x10000000B17217FBB) >> 64;\\n            }\\n            if (x & 0x800000000 > 0) {\\n                result = (result * 0x1000000058B90BFCE) >> 64;\\n            }\\n            if (x & 0x400000000 > 0) {\\n                result = (result * 0x100000002C5C85FE3) >> 64;\\n            }\\n            if (x & 0x200000000 > 0) {\\n                result = (result * 0x10000000162E42FF1) >> 64;\\n            }\\n            if (x & 0x100000000 > 0) {\\n                result = (result * 0x100000000B17217F8) >> 64;\\n            }\\n            if (x & 0x80000000 > 0) {\\n                result = (result * 0x10000000058B90BFC) >> 64;\\n            }\\n            if (x & 0x40000000 > 0) {\\n                result = (result * 0x1000000002C5C85FE) >> 64;\\n            }\\n            if (x & 0x20000000 > 0) {\\n                result = (result * 0x100000000162E42FF) >> 64;\\n            }\\n            if (x & 0x10000000 > 0) {\\n                result = (result * 0x1000000000B17217F) >> 64;\\n            }\\n            if (x & 0x8000000 > 0) {\\n                result = (result * 0x100000000058B90C0) >> 64;\\n            }\\n            if (x & 0x4000000 > 0) {\\n                result = (result * 0x10000000002C5C860) >> 64;\\n            }\\n            if (x & 0x2000000 > 0) {\\n                result = (result * 0x1000000000162E430) >> 64;\\n            }\\n            if (x & 0x1000000 > 0) {\\n                result = (result * 0x10000000000B17218) >> 64;\\n            }\\n            if (x & 0x800000 > 0) {\\n                result = (result * 0x1000000000058B90C) >> 64;\\n            }\\n            if (x & 0x400000 > 0) {\\n                result = (result * 0x100000000002C5C86) >> 64;\\n            }\\n            if (x & 0x200000 > 0) {\\n                result = (result * 0x10000000000162E43) >> 64;\\n            }\\n            if (x & 0x100000 > 0) {\\n                result = (result * 0x100000000000B1721) >> 64;\\n            }\\n            if (x & 0x80000 > 0) {\\n                result = (result * 0x10000000000058B91) >> 64;\\n            }\\n            if (x & 0x40000 > 0) {\\n                result = (result * 0x1000000000002C5C8) >> 64;\\n            }\\n            if (x & 0x20000 > 0) {\\n                result = (result * 0x100000000000162E4) >> 64;\\n            }\\n            if (x & 0x10000 > 0) {\\n                result = (result * 0x1000000000000B172) >> 64;\\n            }\\n            if (x & 0x8000 > 0) {\\n                result = (result * 0x100000000000058B9) >> 64;\\n            }\\n            if (x & 0x4000 > 0) {\\n                result = (result * 0x10000000000002C5D) >> 64;\\n            }\\n            if (x & 0x2000 > 0) {\\n                result = (result * 0x1000000000000162E) >> 64;\\n            }\\n            if (x & 0x1000 > 0) {\\n                result = (result * 0x10000000000000B17) >> 64;\\n            }\\n            if (x & 0x800 > 0) {\\n                result = (result * 0x1000000000000058C) >> 64;\\n            }\\n            if (x & 0x400 > 0) {\\n                result = (result * 0x100000000000002C6) >> 64;\\n            }\\n            if (x & 0x200 > 0) {\\n                result = (result * 0x10000000000000163) >> 64;\\n            }\\n            if (x & 0x100 > 0) {\\n                result = (result * 0x100000000000000B1) >> 64;\\n            }\\n            if (x & 0x80 > 0) {\\n                result = (result * 0x10000000000000059) >> 64;\\n            }\\n            if (x & 0x40 > 0) {\\n                result = (result * 0x1000000000000002C) >> 64;\\n            }\\n            if (x & 0x20 > 0) {\\n                result = (result * 0x10000000000000016) >> 64;\\n            }\\n            if (x & 0x10 > 0) {\\n                result = (result * 0x1000000000000000B) >> 64;\\n            }\\n            if (x & 0x8 > 0) {\\n                result = (result * 0x10000000000000006) >> 64;\\n            }\\n            if (x & 0x4 > 0) {\\n                result = (result * 0x10000000000000003) >> 64;\\n            }\\n            if (x & 0x2 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n            if (x & 0x1 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n\\n            // We're doing two things at the same time:\\n            //\\n            //   1. Multiply the result by 2^n + 1, where \\\"2^n\\\" is the integer part and the one is added to account for\\n            //      the fact that we initially set the result to 0.5. This is accomplished by subtracting from 191\\n            //      rather than 192.\\n            //   2. Convert the result to the unsigned 60.18-decimal fixed-point format.\\n            //\\n            // This works because 2^(191-ip) = 2^ip / 2^191, where \\\"ip\\\" is the integer part \\\"2^n\\\".\\n            result *= SCALE;\\n            result >>= (191 - (x >> 64));\\n        }\\n    }\\n\\n    /// @notice Finds the zero-based index of the first one in the binary representation of x.\\n    /// @dev See the note on msb in the \\\"Find First Set\\\" Wikipedia article https://en.wikipedia.org/wiki/Find_first_set\\n    /// @param x The uint256 number for which to find the index of the most significant bit.\\n    /// @return msb The index of the most significant bit as an uint256.\\n    function mostSignificantBit(uint256 x) internal pure returns (uint256 msb) {\\n        if (x >= 2**128) {\\n            x >>= 128;\\n            msb += 128;\\n        }\\n        if (x >= 2**64) {\\n            x >>= 64;\\n            msb += 64;\\n        }\\n        if (x >= 2**32) {\\n            x >>= 32;\\n            msb += 32;\\n        }\\n        if (x >= 2**16) {\\n            x >>= 16;\\n            msb += 16;\\n        }\\n        if (x >= 2**8) {\\n            x >>= 8;\\n            msb += 8;\\n        }\\n        if (x >= 2**4) {\\n            x >>= 4;\\n            msb += 4;\\n        }\\n        if (x >= 2**2) {\\n            x >>= 2;\\n            msb += 2;\\n        }\\n        if (x >= 2**1) {\\n            // No need to shift x any more.\\n            msb += 1;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev Credit to Remco Bloemen under MIT license https://xn--2-umb.com/21/muldiv.\\n    ///\\n    /// Requirements:\\n    /// - The denominator cannot be zero.\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The multiplicand as an uint256.\\n    /// @param y The multiplier as an uint256.\\n    /// @param denominator The divisor as an uint256.\\n    /// @return result The result as an uint256.\\n    function mulDiv(\\n        uint256 x,\\n        uint256 y,\\n        uint256 denominator\\n    ) internal pure returns (uint256 result) {\\n        // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n        // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n        // variables such that product = prod1 * 2^256 + prod0.\\n        uint256 prod0; // Least significant 256 bits of the product\\n        uint256 prod1; // Most significant 256 bits of the product\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        // Handle non-overflow cases, 256 by 256 division.\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = prod0 / denominator;\\n            }\\n            return result;\\n        }\\n\\n        // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n        if (prod1 >= denominator) {\\n            revert PRBMath__MulDivOverflow(prod1, denominator);\\n        }\\n\\n        ///////////////////////////////////////////////\\n        // 512 by 256 division.\\n        ///////////////////////////////////////////////\\n\\n        // Make division exact by subtracting the remainder from [prod1 prod0].\\n        uint256 remainder;\\n        assembly {\\n            // Compute remainder using mulmod.\\n            remainder := mulmod(x, y, denominator)\\n\\n            // Subtract 256 bit number from 512 bit number.\\n            prod1 := sub(prod1, gt(remainder, prod0))\\n            prod0 := sub(prod0, remainder)\\n        }\\n\\n        // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n        // See https://cs.stackexchange.com/q/138556/92363.\\n        unchecked {\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 lpotdod = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by lpotdod.\\n                denominator := div(denominator, lpotdod)\\n\\n                // Divide [prod1 prod0] by lpotdod.\\n                prod0 := div(prod0, lpotdod)\\n\\n                // Flip lpotdod such that it is 2^256 / lpotdod. If lpotdod is zero, then it becomes one.\\n                lpotdod := add(div(sub(0, lpotdod), lpotdod), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * lpotdod;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel's lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don't need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f71e18) with full precision.\\n    ///\\n    /// @dev Variant of \\\"mulDiv\\\" with constant folding, i.e. in which the denominator is always 1e18. Before returning the\\n    /// final result, we add 1 if (x * y) % SCALE >= HALF_SCALE. Without this, 6.6e-19 would be truncated to 0 instead of\\n    /// being rounded to 1e-18.  See \\\"Listing 6\\\" and text above it at https://accu.org/index.php/journals/1717.\\n    ///\\n    /// Requirements:\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - The body is purposely left uncommented; see the NatSpec comments in \\\"PRBMath.mulDiv\\\" to understand how this works.\\n    /// - It is assumed that the result can never be type(uint256).max when x and y solve the following two equations:\\n    ///     1. x * y = type(uint256).max * SCALE\\n    ///     2. (x * y) % SCALE >= SCALE / 2\\n    ///\\n    /// @param x The multiplicand as an unsigned 60.18-decimal fixed-point number.\\n    /// @param y The multiplier as an unsigned 60.18-decimal fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function mulDivFixedPoint(uint256 x, uint256 y) internal pure returns (uint256 result) {\\n        uint256 prod0;\\n        uint256 prod1;\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        if (prod1 >= SCALE) {\\n            revert PRBMath__MulDivFixedPointOverflow(prod1);\\n        }\\n\\n        uint256 remainder;\\n        uint256 roundUpUnit;\\n        assembly {\\n            remainder := mulmod(x, y, SCALE)\\n            roundUpUnit := gt(remainder, 499999999999999999)\\n        }\\n\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = (prod0 / SCALE) + roundUpUnit;\\n                return result;\\n            }\\n        }\\n\\n        assembly {\\n            result := add(\\n                mul(\\n                    or(\\n                        div(sub(prod0, remainder), SCALE_LPOTD),\\n                        mul(sub(prod1, gt(remainder, prod0)), add(div(sub(0, SCALE_LPOTD), SCALE_LPOTD), 1))\\n                    ),\\n                    SCALE_INVERSE\\n                ),\\n                roundUpUnit\\n            )\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev An extension of \\\"mulDiv\\\" for signed numbers. Works by computing the signs and the absolute values separately.\\n    ///\\n    /// Requirements:\\n    /// - None of the inputs can be type(int256).min.\\n    /// - The result must fit within int256.\\n    ///\\n    /// @param x The multiplicand as an int256.\\n    /// @param y The multiplier as an int256.\\n    /// @param denominator The divisor as an int256.\\n    /// @return result The result as an int256.\\n    function mulDivSigned(\\n        int256 x,\\n        int256 y,\\n        int256 denominator\\n    ) internal pure returns (int256 result) {\\n        if (x == type(int256).min || y == type(int256).min || denominator == type(int256).min) {\\n            revert PRBMath__MulDivSignedInputTooSmall();\\n        }\\n\\n        // Get hold of the absolute values of x, y and the denominator.\\n        uint256 ax;\\n        uint256 ay;\\n        uint256 ad;\\n        unchecked {\\n            ax = x < 0 ? uint256(-x) : uint256(x);\\n            ay = y < 0 ? uint256(-y) : uint256(y);\\n            ad = denominator < 0 ? uint256(-denominator) : uint256(denominator);\\n        }\\n\\n        // Compute the absolute value of (x*y)\\u00f7denominator. The result must fit within int256.\\n        uint256 rAbs = mulDiv(ax, ay, ad);\\n        if (rAbs > uint256(type(int256).max)) {\\n            revert PRBMath__MulDivSignedOverflow(rAbs);\\n        }\\n\\n        // Get the signs of x, y and the denominator.\\n        uint256 sx;\\n        uint256 sy;\\n        uint256 sd;\\n        assembly {\\n            sx := sgt(x, sub(0, 1))\\n            sy := sgt(y, sub(0, 1))\\n            sd := sgt(denominator, sub(0, 1))\\n        }\\n\\n        // XOR over sx, sy and sd. This is checking whether there are one or three negative signs in the inputs.\\n        // If yes, the result should be negative.\\n        result = sx ^ sy ^ sd == 0 ? -int256(rAbs) : int256(rAbs);\\n    }\\n\\n    /// @notice Calculates the square root of x, rounding down.\\n    /// @dev Uses the Babylonian method https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The uint256 number for which to calculate the square root.\\n    /// @return result The result as an uint256.\\n    function sqrt(uint256 x) internal pure returns (uint256 result) {\\n        if (x == 0) {\\n            return 0;\\n        }\\n\\n        // Set the initial guess to the closest power of two that is higher than x.\\n        uint256 xAux = uint256(x);\\n        result = 1;\\n        if (xAux >= 0x100000000000000000000000000000000) {\\n            xAux >>= 128;\\n            result <<= 64;\\n        }\\n        if (xAux >= 0x10000000000000000) {\\n            xAux >>= 64;\\n            result <<= 32;\\n        }\\n        if (xAux >= 0x100000000) {\\n            xAux >>= 32;\\n            result <<= 16;\\n        }\\n        if (xAux >= 0x10000) {\\n            xAux >>= 16;\\n            result <<= 8;\\n        }\\n        if (xAux >= 0x100) {\\n            xAux >>= 8;\\n            result <<= 4;\\n        }\\n        if (xAux >= 0x10) {\\n            xAux >>= 4;\\n            result <<= 2;\\n        }\\n        if (xAux >= 0x8) {\\n            result <<= 1;\\n        }\\n\\n        // The operations can never overflow because the result is max 2^127 when it enters this block.\\n        unchecked {\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1; // Seven iterations should be enough\\n            uint256 roundedDownResult = x / result;\\n            return result >= roundedDownResult ? roundedDownResult : result;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x62cbabae4910e168e99b9c2c3e3b5c9c7ad5e7abd961dcc63b7ea3d83d8ea87e\",\"license\":\"Unlicense\"}},\"version\":1}",
  "bytecode": "0x60a060405234801561001057600080fd5b5060405161193938038061193983398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c6118a06100996000396000818161011e01526105e401526118a06000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a249d4251161005b578063a249d42514610106578063c41c2f2414610119578063c55f571c14610165578063ebc8ca1f1461018557600080fd5b80632cee6deb1461008d57806343a266c2146100c05780635c550078146100e0578063669e48aa146100f3575b600080fd5b6100ad61009b3660046114be565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b6100d36100ce3660046114be565b6101a6565b6040516100b79190611626565b6100d36100ee3660046114be565b61035b565b6100d3610101366004611555565b6104c8565b6100d36101143660046114f0565b610537565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b6101786101733660046114be565b6108ad565b6040516100b791906115b2565b6101986101933660046114be565b6108e1565b6040516100b79291906116a0565b61020b60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008281526003602052604090205461022f57610229600080610981565b92915050565b600061023a83610ab6565b90506102a160405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b81156102d5576102b18483610981565b90506102bd8482610b6f565b156102c9579392505050565b80604001519150610318565b60008481526003602052604090205491506102f08483610981565b90506102fc8482610b6f565b158061030b5750806060015142105b1561031857806040015191505b8161033057610328600080610981565b949350505050565b61033a8483610981565b9050806080015160001415610350579392505050565b610328816001610ba4565b6103c060405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000828152600360205260409020546103de57610229600080610981565b60006103e983610cdc565b90508015610427576103fb8382610981565b91506104078383610b6f565b156104125750919050565b610420838360400151610981565b9150610460565b600083815260036020526040902054610441908490610981565b915042826060015111156104605761045d838360400151610981565b91505b608082015161047b57610474600080610981565b9392505050565b6104858383610b6f565b1561049557610474826000610ba4565b6104a3838360400151610981565b91508160800151600014156104bd57610474600080610981565b610474826000610ba4565b61052d60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6104748383610981565b61059c60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018690528590339073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b15801561062657600080fd5b505afa15801561063a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065e9190611463565b73ffffffffffffffffffffffffffffffffffffffff16146106ab576040517fab7f741400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff853511156106ee576040517f3147256c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b633b9aca0085604001351115610730576040517f2459513500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6affffffffffffffffffffff60208601351115610779576040517f698f22ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b42610797878260208901358188116107915742610d6a565b87610d6a565b60006107a96080880160608901611480565b73ffffffffffffffffffffffffffffffffffffffff161415806107cc5750853515155b806107db575060008660400135115b156108365760006107f26080880160608901611480565b6000898152602081815260408083208684529091529081902073ffffffffffffffffffffffffffffffffffffffff92909216893560a01b179089013560e01b179055505b841561085957600087815260026020908152604080832084845290915290208590555b86817f1175572e9e7787125bbb2c1175e626d6fa90191342319fa2c35d8bd194a8a1b68888883360405161089094939291906115c0565b60405180910390a36108a28782610981565b979650505050505050565b600081815260036020526040812054816108c78483610981565b905061032884826020015183606001518460400151610f05565b61094660405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008281526003602052604081205461095f8482610981565b925061097984846020015185606001518660400151610f05565b915050915091565b6109e660405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b816109f057610229565b602081810183905260008481526001825260408082208583528352808220546affffffffffffffffffffff811660a080870191909152605882901c66ffffffffffffff90811684880152609083901c16606087015260c89190911c855286835282845281832086845284528183205473ffffffffffffffffffffffffffffffffffffffff811660e0808801919091529181901c67ffffffffffffffff166080870152901c60c0850152948152600282528481209381529290529190205461010082015290565b60008181526003602052604081205490610ad08383610981565b905060008160800151118015610af9575080608001518160600151610af59190611728565b4210155b15610b075750600092915050565b80606001514210610b1c576020015192915050565b6000610b2c848360400151610981565b905060008160800151118015610b55575080608001518160600151610b519190611728565b4210155b15610b64575060009392505050565b506040015192915050565b60006001610b8b84846020015185606001518660400151610f05565b6002811115610b9c57610b9c611816565b149392505050565b610c0960405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008215610c30576080840151610c209042611754565b610c2b906001611728565b610c3b565b610c3b426001611728565b90506000610c4985836110a3565b90506000610c578683611130565b9050604051806101200160405280828152602001876020015181526020018760400151815260200183815260200187608001518152602001610c998885611183565b81526020018760c0015181526020018760e0015173ffffffffffffffffffffffffffffffffffffffff168152602001876101000151815250935050505092915050565b60008181526003602052604081205490610cf68383610981565b905080606001514210610d0c5750600092915050565b805160011415610d1c5750919050565b6000610d2c848360400151610981565b905060008160800151118015610d54575080608001518260600151610d519190611754565b42105b15610d63575060009392505050565b5050919050565b600084815260036020526040902054610d9957610d9484610d8c600080610981565b85848661123e565b610eff565b6000610da485610ab6565b905080610dbc57506000848152600360205260409020545b6000610dc88683610981565b9050610dd48682610b6f565b610de957610de6868260400151610981565b90505b8481602001511415610e27576040517f42bb50ae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e081015160009073ffffffffffffffffffffffffffffffffffffffff1615610edb578160e0015173ffffffffffffffffffffffffffffffffffffffff16630fb5a6b46040518163ffffffff1660e01b815260040160206040518083038186803b158015610e9457600080fd5b505afa158015610ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecc91906114d7565b610ed69087611728565b610ede565b60005b9050610efb878388878511610ef35787610ef5565b845b8961123e565b5050505b50505050565b600081610f1457506001610328565b6000610f208684610981565b60e081015190915073ffffffffffffffffffffffffffffffffffffffff16610f4c576001915050610328565b610f568542611754565b8160e0015173ffffffffffffffffffffffffffffffffffffffff16630fb5a6b46040518163ffffffff1660e01b815260040160206040518083038186803b158015610fa057600080fd5b505afa158015610fb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd891906114d7565b10610fe7576000915050610328565b60e08101516040517f7416790700000000000000000000000000000000000000000000000000000000815260048101889052602481018790526044810186905273ffffffffffffffffffffffffffffffffffffffff9091169063741679079060640160206040518083038186803b15801561106157600080fd5b505afa158015611075573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611099919061149d565b9695505050505050565b60008260800151600014156110b9575080610229565b6000836080015184606001516110cf9190611728565b90508281106110df579050610229565b60808401516000906110f18386611754565b6110fb91906117a4565b90506111078185611754565b92505b828411156111285760808501516111219084611728565b925061110a565b505092915050565b600082608001516000141561115357825161114c906001611728565b9050610229565b60008360600151836111659190611754565b90508360800151816111779190611740565b84516103289190611728565b60008260800151600014156111b85761114c8360a001518460c00151633b9aca006111ae9190611754565b633b9aca0061135b565b5060a082015160c08301516111cc57610229565b60008360600151836111de9190611754565b905060008460800151826111f29190611740565b905060005b8181101561123557611217848760c00151633b9aca006111ae9190611754565b93508361122357611235565b8061122d8161176b565b9150506111f7565b50505092915050565b83516112945760208085015160008781526001808452604080832088845290945292902060589190911b8317609085901b1779010000000000000000000000000000000000000000000000000017905550611311565b60006112a085846110a3565b9050600082116112b9576112b48582611183565b6112ca565b816001146112c757816112ca565b60005b915060006112d88683611130565b60208088015160008a81526001835260408082208a83529093529190912060589190911b8517609085901b1760c883901b179055905050505b60008581526003602090815260408083208690559086015190519091879186917ff1bd4f3fcb4e0b193abc7e4002c0284e25086269a02de2e4c52045a91f64703791a45050505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600014156113b4578382816113aa576113aa6117e7565b0492505050610474565b8381106113fb576040517f773cc18c000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260440160405180910390fd5b600084868809600260036001881981018916988990049182028318808302840302808302840302808302840302808302840302808302840302918202909203026000889003889004909101858311909403939093029303949094049190911702949350505050565b60006020828403121561147557600080fd5b815161047481611845565b60006020828403121561149257600080fd5b813561047481611845565b6000602082840312156114af57600080fd5b81516003811061047457600080fd5b6000602082840312156114d057600080fd5b5035919050565b6000602082840312156114e957600080fd5b5051919050565b60008060008084860360e081121561150757600080fd5b8535945060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561153b57600080fd5b50929560208501955060a08501359460c001359350915050565b6000806040838503121561156857600080fd5b50508035926020909101359150565b600381106115ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081016102298284611577565b84358152602080860135908201526040808601359082015260e0810160608601356115ea81611845565b73ffffffffffffffffffffffffffffffffffffffff80821660608501528660808501528560a085015280851660c0850152505095945050505050565b61012081016102298284805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b610140810161171a8285805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b610474610120830184611577565b6000821982111561173b5761173b6117b8565b500190565b60008261174f5761174f6117e7565b500490565b600082821015611766576117666117b8565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561179d5761179d6117b8565b5060010190565b6000826117b3576117b36117e7565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461186757600080fd5b5056fea264697066735822122089a1fcd6f0f94cf21e3f330a0685bd5cf3b9ce3e5a2c1e7754952c5fc50801b864736f6c63430008060033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100885760003560e01c8063a249d4251161005b578063a249d42514610106578063c41c2f2414610119578063c55f571c14610165578063ebc8ca1f1461018557600080fd5b80632cee6deb1461008d57806343a266c2146100c05780635c550078146100e0578063669e48aa146100f3575b600080fd5b6100ad61009b3660046114be565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b6100d36100ce3660046114be565b6101a6565b6040516100b79190611626565b6100d36100ee3660046114be565b61035b565b6100d3610101366004611555565b6104c8565b6100d36101143660046114f0565b610537565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b6101786101733660046114be565b6108ad565b6040516100b791906115b2565b6101986101933660046114be565b6108e1565b6040516100b79291906116a0565b61020b60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008281526003602052604090205461022f57610229600080610981565b92915050565b600061023a83610ab6565b90506102a160405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b81156102d5576102b18483610981565b90506102bd8482610b6f565b156102c9579392505050565b80604001519150610318565b60008481526003602052604090205491506102f08483610981565b90506102fc8482610b6f565b158061030b5750806060015142105b1561031857806040015191505b8161033057610328600080610981565b949350505050565b61033a8483610981565b9050806080015160001415610350579392505050565b610328816001610ba4565b6103c060405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000828152600360205260409020546103de57610229600080610981565b60006103e983610cdc565b90508015610427576103fb8382610981565b91506104078383610b6f565b156104125750919050565b610420838360400151610981565b9150610460565b600083815260036020526040902054610441908490610981565b915042826060015111156104605761045d838360400151610981565b91505b608082015161047b57610474600080610981565b9392505050565b6104858383610b6f565b1561049557610474826000610ba4565b6104a3838360400151610981565b91508160800151600014156104bd57610474600080610981565b610474826000610ba4565b61052d60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6104748383610981565b61059c60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018690528590339073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b15801561062657600080fd5b505afa15801561063a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065e9190611463565b73ffffffffffffffffffffffffffffffffffffffff16146106ab576040517fab7f741400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff853511156106ee576040517f3147256c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b633b9aca0085604001351115610730576040517f2459513500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6affffffffffffffffffffff60208601351115610779576040517f698f22ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b42610797878260208901358188116107915742610d6a565b87610d6a565b60006107a96080880160608901611480565b73ffffffffffffffffffffffffffffffffffffffff161415806107cc5750853515155b806107db575060008660400135115b156108365760006107f26080880160608901611480565b6000898152602081815260408083208684529091529081902073ffffffffffffffffffffffffffffffffffffffff92909216893560a01b179089013560e01b179055505b841561085957600087815260026020908152604080832084845290915290208590555b86817f1175572e9e7787125bbb2c1175e626d6fa90191342319fa2c35d8bd194a8a1b68888883360405161089094939291906115c0565b60405180910390a36108a28782610981565b979650505050505050565b600081815260036020526040812054816108c78483610981565b905061032884826020015183606001518460400151610f05565b61094660405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008281526003602052604081205461095f8482610981565b925061097984846020015185606001518660400151610f05565b915050915091565b6109e660405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b816109f057610229565b602081810183905260008481526001825260408082208583528352808220546affffffffffffffffffffff811660a080870191909152605882901c66ffffffffffffff90811684880152609083901c16606087015260c89190911c855286835282845281832086845284528183205473ffffffffffffffffffffffffffffffffffffffff811660e0808801919091529181901c67ffffffffffffffff166080870152901c60c0850152948152600282528481209381529290529190205461010082015290565b60008181526003602052604081205490610ad08383610981565b905060008160800151118015610af9575080608001518160600151610af59190611728565b4210155b15610b075750600092915050565b80606001514210610b1c576020015192915050565b6000610b2c848360400151610981565b905060008160800151118015610b55575080608001518160600151610b519190611728565b4210155b15610b64575060009392505050565b506040015192915050565b60006001610b8b84846020015185606001518660400151610f05565b6002811115610b9c57610b9c611816565b149392505050565b610c0960405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008215610c30576080840151610c209042611754565b610c2b906001611728565b610c3b565b610c3b426001611728565b90506000610c4985836110a3565b90506000610c578683611130565b9050604051806101200160405280828152602001876020015181526020018760400151815260200183815260200187608001518152602001610c998885611183565b81526020018760c0015181526020018760e0015173ffffffffffffffffffffffffffffffffffffffff168152602001876101000151815250935050505092915050565b60008181526003602052604081205490610cf68383610981565b905080606001514210610d0c5750600092915050565b805160011415610d1c5750919050565b6000610d2c848360400151610981565b905060008160800151118015610d54575080608001518260600151610d519190611754565b42105b15610d63575060009392505050565b5050919050565b600084815260036020526040902054610d9957610d9484610d8c600080610981565b85848661123e565b610eff565b6000610da485610ab6565b905080610dbc57506000848152600360205260409020545b6000610dc88683610981565b9050610dd48682610b6f565b610de957610de6868260400151610981565b90505b8481602001511415610e27576040517f42bb50ae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e081015160009073ffffffffffffffffffffffffffffffffffffffff1615610edb578160e0015173ffffffffffffffffffffffffffffffffffffffff16630fb5a6b46040518163ffffffff1660e01b815260040160206040518083038186803b158015610e9457600080fd5b505afa158015610ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecc91906114d7565b610ed69087611728565b610ede565b60005b9050610efb878388878511610ef35787610ef5565b845b8961123e565b5050505b50505050565b600081610f1457506001610328565b6000610f208684610981565b60e081015190915073ffffffffffffffffffffffffffffffffffffffff16610f4c576001915050610328565b610f568542611754565b8160e0015173ffffffffffffffffffffffffffffffffffffffff16630fb5a6b46040518163ffffffff1660e01b815260040160206040518083038186803b158015610fa057600080fd5b505afa158015610fb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd891906114d7565b10610fe7576000915050610328565b60e08101516040517f7416790700000000000000000000000000000000000000000000000000000000815260048101889052602481018790526044810186905273ffffffffffffffffffffffffffffffffffffffff9091169063741679079060640160206040518083038186803b15801561106157600080fd5b505afa158015611075573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611099919061149d565b9695505050505050565b60008260800151600014156110b9575080610229565b6000836080015184606001516110cf9190611728565b90508281106110df579050610229565b60808401516000906110f18386611754565b6110fb91906117a4565b90506111078185611754565b92505b828411156111285760808501516111219084611728565b925061110a565b505092915050565b600082608001516000141561115357825161114c906001611728565b9050610229565b60008360600151836111659190611754565b90508360800151816111779190611740565b84516103289190611728565b60008260800151600014156111b85761114c8360a001518460c00151633b9aca006111ae9190611754565b633b9aca0061135b565b5060a082015160c08301516111cc57610229565b60008360600151836111de9190611754565b905060008460800151826111f29190611740565b905060005b8181101561123557611217848760c00151633b9aca006111ae9190611754565b93508361122357611235565b8061122d8161176b565b9150506111f7565b50505092915050565b83516112945760208085015160008781526001808452604080832088845290945292902060589190911b8317609085901b1779010000000000000000000000000000000000000000000000000017905550611311565b60006112a085846110a3565b9050600082116112b9576112b48582611183565b6112ca565b816001146112c757816112ca565b60005b915060006112d88683611130565b60208088015160008a81526001835260408082208a83529093529190912060589190911b8517609085901b1760c883901b179055905050505b60008581526003602090815260408083208690559086015190519091879186917ff1bd4f3fcb4e0b193abc7e4002c0284e25086269a02de2e4c52045a91f64703791a45050505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600014156113b4578382816113aa576113aa6117e7565b0492505050610474565b8381106113fb576040517f773cc18c000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260440160405180910390fd5b600084868809600260036001881981018916988990049182028318808302840302808302840302808302840302808302840302808302840302918202909203026000889003889004909101858311909403939093029303949094049190911702949350505050565b60006020828403121561147557600080fd5b815161047481611845565b60006020828403121561149257600080fd5b813561047481611845565b6000602082840312156114af57600080fd5b81516003811061047457600080fd5b6000602082840312156114d057600080fd5b5035919050565b6000602082840312156114e957600080fd5b5051919050565b60008060008084860360e081121561150757600080fd5b8535945060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561153b57600080fd5b50929560208501955060a08501359460c001359350915050565b6000806040838503121561156857600080fd5b50508035926020909101359150565b600381106115ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081016102298284611577565b84358152602080860135908201526040808601359082015260e0810160608601356115ea81611845565b73ffffffffffffffffffffffffffffffffffffffff80821660608501528660808501528560a085015280851660c0850152505095945050505050565b61012081016102298284805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b610140810161171a8285805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b610474610120830184611577565b6000821982111561173b5761173b6117b8565b500190565b60008261174f5761174f6117e7565b500490565b600082821015611766576117666117b8565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561179d5761179d6117b8565b5060010190565b6000826117b3576117b36117e7565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461186757600080fd5b5056fea264697066735822122089a1fcd6f0f94cf21e3f330a0685bd5cf3b9ce3e5a2c1e7754952c5fc50801b864736f6c63430008060033",
  "devdoc": {
    "details": "Adheres to - IJBTokenStore: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.Inherits from - JBControllerUtility: Includes convenience functionality for checking if the message sender is the current controller of the project whose data is being manipulated.",
    "kind": "dev",
    "methods": {
      "configureFor(uint256,(uint256,uint256,uint256,address),uint256,uint256)": {
        "details": "Only a project's current controller can configure its funding cycles.",
        "params": {
          "_data": "The funding cycle configuration data.",
          "_metadata": "Arbitrary extra data to associate with this funding cycle configuration that's not used within.",
          "_mustStartAtOrAfter": "The time before which the initialized funding cycle cannot start.",
          "_projectId": "The ID of the project being configured."
        },
        "returns": {
          "_0": "The funding cycle that the configuration will take effect during."
        }
      },
      "constructor": {
        "params": {
          "_directory": "A contract storing directories of terminals and controllers for each project."
        }
      },
      "currentBallotStateOf(uint256)": {
        "params": {
          "_projectId": "The ID of the project to check the ballot state of."
        },
        "returns": {
          "_0": "The project's current ballot's state."
        }
      },
      "currentOf(uint256)": {
        "details": "If a current funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.",
        "params": {
          "_projectId": "The ID of the project to get the current funding cycle of."
        },
        "returns": {
          "fundingCycle": "The project's current funding cycle."
        }
      },
      "get(uint256,uint256)": {
        "params": {
          "_configuration": "The configuration of the funding cycle to get.",
          "_projectId": "The ID of the project to which the funding cycle belongs."
        },
        "returns": {
          "fundingCycle": "The funding cycle."
        }
      },
      "latestConfiguredOf(uint256)": {
        "params": {
          "_projectId": "The ID of the project to get the latest configured funding cycle of."
        },
        "returns": {
          "ballotState": "The state of the ballot for the reconfiguration.",
          "fundingCycle": "The project's queued funding cycle."
        }
      },
      "queuedOf(uint256)": {
        "details": "If a queued funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.",
        "params": {
          "_projectId": "The ID of the project to get the queued funding cycle of."
        },
        "returns": {
          "fundingCycle": "The project's queued funding cycle."
        }
      }
    },
    "version": 1
  },
  "userdoc": {
    "errors": {
      "PRBMath__MulDivOverflow(uint256,uint256)": [
        {
          "notice": "Emitted when the result overflows uint256."
        }
      ]
    },
    "kind": "user",
    "methods": {
      "configureFor(uint256,(uint256,uint256,uint256,address),uint256,uint256)": {
        "notice": " Configures the next eligible funding cycle for the specified project."
      },
      "currentBallotStateOf(uint256)": {
        "notice": " The current ballot state of the project."
      },
      "currentOf(uint256)": {
        "notice": " The funding cycle that is currently active for the specified project."
      },
      "directory()": {
        "notice": " The directory of terminals and controllers for projects."
      },
      "get(uint256,uint256)": {
        "notice": " Get the funding cycle with the given configuration for the specified project."
      },
      "latestConfigurationOf(uint256)": {
        "notice": " The latest funding cycle configuration for each project. _projectId The ID of the project to get the latest funding cycle configuration of."
      },
      "latestConfiguredOf(uint256)": {
        "notice": " The latest funding cycle to be configured for the specified project, and its current ballot state."
      },
      "queuedOf(uint256)": {
        "notice": " The funding cycle that's next up for the specified project."
      }
    },
    "notice": " Manages funding cycle configurations and scheduling.",
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 8772,
        "contract": "contracts/JBFundingCycleStore.sol:JBFundingCycleStore",
        "label": "_packedUserPropertiesOf",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))"
      },
      {
        "astId": 8779,
        "contract": "contracts/JBFundingCycleStore.sol:JBFundingCycleStore",
        "label": "_packedIntrinsicPropertiesOf",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))"
      },
      {
        "astId": 8786,
        "contract": "contracts/JBFundingCycleStore.sol:JBFundingCycleStore",
        "label": "_metadataOf",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))"
      },
      {
        "astId": 8792,
        "contract": "contracts/JBFundingCycleStore.sol:JBFundingCycleStore",
        "label": "latestConfigurationOf",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_uint256,t_uint256)"
      }
    ],
    "types": {
      "t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(uint256 => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_uint256,t_uint256)"
      },
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}

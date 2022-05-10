export default {
  "address": "0xF49e691b3716cB0a3CeBa99F96852A2334b57924",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IJBOperatorStore",
          "name": "_operatorStore",
          "type": "address"
        },
        {
          "internalType": "contract IJBProjects",
          "name": "_projects",
          "type": "address"
        },
        {
          "internalType": "contract IJBDirectory",
          "name": "_directory",
          "type": "address"
        },
        {
          "internalType": "contract IJBFundingCycleStore",
          "name": "_fundingCycleStore",
          "type": "address"
        },
        {
          "internalType": "contract IJBTokenStore",
          "name": "_tokenStore",
          "type": "address"
        },
        {
          "internalType": "contract IJBSplitsStore",
          "name": "_splitsStore",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CANT_MIGRATE_TO_CURRENT_CONTROLLER",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CHANGE_TOKEN_NOT_ALLOWED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FUNDING_CYCLE_ALREADY_LAUNCHED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_BALLOT_REDEMPTION_RATE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_DISTRIBUTION_LIMIT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_DISTRIBUTION_LIMIT_CURRENCY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_OVERFLOW_ALLOWANCE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_OVERFLOW_ALLOWANCE_CURRENCY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_REDEMPTION_RATE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_RESERVED_RATE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MIGRATION_NOT_ALLOWED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NOT_CURRENT_CONTROLLER",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NO_BURNABLE_TOKENS",
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
      "inputs": [],
      "name": "UNAUTHORIZED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ZERO_TOKENS_TO_MINT",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "memo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "BurnTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fundingCycleConfiguration",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fundingCycleNumber",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "beneficiaryTokenCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "memo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "DistributeReservedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "domain",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "group",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "preferClaimed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "preferAddToBalance",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "percent",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "beneficiary",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "lockedUntil",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBSplitAllocator",
              "name": "allocator",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct JBSplit",
          "name": "split",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "DistributeToReservedTokenSplit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "memo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "LaunchFundingCycles",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "memo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "LaunchProject",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "contract IJBMigratable",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "Migrate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "beneficiaryTokenCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "memo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reservedRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "MintTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "PrepMigration",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "memo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "ReconfigureFundingCycles",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fundingCycleConfiguration",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fundingCycleNumber",
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
              "internalType": "contract IJBPaymentTerminal",
              "name": "terminal",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimitCurrency",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowanceCurrency",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct JBFundAccessConstraints",
          "name": "constraints",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "SetFundAccessConstraints",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_holder",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenCount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_memo",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_preferClaimedTokens",
          "type": "bool"
        }
      ],
      "name": "burnTokensOf",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "internalType": "contract IJBToken",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changeTokenOf",
      "outputs": [],
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
      "name": "currentFundingCycleOf",
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
          "components": [
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ballotRedemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "pausePay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseDistributions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseRedeem",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseBurn",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowMinting",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowChangeToken",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowTerminalMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowControllerMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetTerminals",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetController",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "holdFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useTotalOverflowForRedemptions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForPay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForRedeem",
              "type": "bool"
            },
            {
              "internalType": "contract IJBFundingCycleDataSource",
              "name": "dataSource",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleMetadata",
          "name": "metadata",
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
          "internalType": "string",
          "name": "_memo",
          "type": "string"
        }
      ],
      "name": "distributeReservedTokensOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
        },
        {
          "internalType": "uint256",
          "name": "_configuration",
          "type": "uint256"
        },
        {
          "internalType": "contract IJBPaymentTerminal",
          "name": "_terminal",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "distributionLimitOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
      "inputs": [],
      "name": "fundingCycleStore",
      "outputs": [
        {
          "internalType": "contract IJBFundingCycleStore",
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
      "name": "getFundingCycleOf",
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
          "components": [
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ballotRedemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "pausePay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseDistributions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseRedeem",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseBurn",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowMinting",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowChangeToken",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowTerminalMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowControllerMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetTerminals",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetController",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "holdFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useTotalOverflowForRedemptions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForPay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForRedeem",
              "type": "bool"
            },
            {
              "internalType": "contract IJBFundingCycleDataSource",
              "name": "dataSource",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleMetadata",
          "name": "metadata",
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
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        }
      ],
      "name": "issueTokenFor",
      "outputs": [
        {
          "internalType": "contract IJBToken",
          "name": "token",
          "type": "address"
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
      "name": "latestConfiguredFundingCycleOf",
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
          "components": [
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ballotRedemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "pausePay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseDistributions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseRedeem",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseBurn",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowMinting",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowChangeToken",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowTerminalMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowControllerMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetTerminals",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetController",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "holdFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useTotalOverflowForRedemptions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForPay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForRedeem",
              "type": "bool"
            },
            {
              "internalType": "contract IJBFundingCycleDataSource",
              "name": "dataSource",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleMetadata",
          "name": "metadata",
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
          "components": [
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ballotRedemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "pausePay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseDistributions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseRedeem",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseBurn",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowMinting",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowChangeToken",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowTerminalMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowControllerMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetTerminals",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetController",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "holdFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useTotalOverflowForRedemptions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForPay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForRedeem",
              "type": "bool"
            },
            {
              "internalType": "contract IJBFundingCycleDataSource",
              "name": "dataSource",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleMetadata",
          "name": "_metadata",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "_mustStartAtOrAfter",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "group",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "preferClaimed",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "preferAddToBalance",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "percent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "projectId",
                  "type": "uint256"
                },
                {
                  "internalType": "address payable",
                  "name": "beneficiary",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lockedUntil",
                  "type": "uint256"
                },
                {
                  "internalType": "contract IJBSplitAllocator",
                  "name": "allocator",
                  "type": "address"
                }
              ],
              "internalType": "struct JBSplit[]",
              "name": "splits",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct JBGroupedSplits[]",
          "name": "_groupedSplits",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "contract IJBPaymentTerminal",
              "name": "terminal",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimitCurrency",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowanceCurrency",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundAccessConstraints[]",
          "name": "_fundAccessConstraints",
          "type": "tuple[]"
        },
        {
          "internalType": "contract IJBPaymentTerminal[]",
          "name": "_terminals",
          "type": "address[]"
        },
        {
          "internalType": "string",
          "name": "_memo",
          "type": "string"
        }
      ],
      "name": "launchFundingCyclesFor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "domain",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBProjectMetadata",
          "name": "_projectMetadata",
          "type": "tuple"
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
          "components": [
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ballotRedemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "pausePay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseDistributions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseRedeem",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseBurn",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowMinting",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowChangeToken",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowTerminalMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowControllerMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetTerminals",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetController",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "holdFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useTotalOverflowForRedemptions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForPay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForRedeem",
              "type": "bool"
            },
            {
              "internalType": "contract IJBFundingCycleDataSource",
              "name": "dataSource",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleMetadata",
          "name": "_metadata",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "_mustStartAtOrAfter",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "group",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "preferClaimed",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "preferAddToBalance",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "percent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "projectId",
                  "type": "uint256"
                },
                {
                  "internalType": "address payable",
                  "name": "beneficiary",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lockedUntil",
                  "type": "uint256"
                },
                {
                  "internalType": "contract IJBSplitAllocator",
                  "name": "allocator",
                  "type": "address"
                }
              ],
              "internalType": "struct JBSplit[]",
              "name": "splits",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct JBGroupedSplits[]",
          "name": "_groupedSplits",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "contract IJBPaymentTerminal",
              "name": "terminal",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimitCurrency",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowanceCurrency",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundAccessConstraints[]",
          "name": "_fundAccessConstraints",
          "type": "tuple[]"
        },
        {
          "internalType": "contract IJBPaymentTerminal[]",
          "name": "_terminals",
          "type": "address[]"
        },
        {
          "internalType": "string",
          "name": "_memo",
          "type": "string"
        }
      ],
      "name": "launchProjectFor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
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
        },
        {
          "internalType": "contract IJBMigratable",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "migrate",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_tokenCount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_memo",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_preferClaimedTokens",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_useReservedRate",
          "type": "bool"
        }
      ],
      "name": "mintTokensOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "beneficiaryTokenCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "operatorStore",
      "outputs": [
        {
          "internalType": "contract IJBOperatorStore",
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
        },
        {
          "internalType": "contract IJBPaymentTerminal",
          "name": "_terminal",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "overflowAllowanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
        },
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        }
      ],
      "name": "prepForMigrationOf",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projects",
      "outputs": [
        {
          "internalType": "contract IJBProjects",
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
        }
      ],
      "name": "queuedFundingCycleOf",
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
          "components": [
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ballotRedemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "pausePay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseDistributions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseRedeem",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseBurn",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowMinting",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowChangeToken",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowTerminalMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowControllerMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetTerminals",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetController",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "holdFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useTotalOverflowForRedemptions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForPay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForRedeem",
              "type": "bool"
            },
            {
              "internalType": "contract IJBFundingCycleDataSource",
              "name": "dataSource",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleMetadata",
          "name": "metadata",
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
          "components": [
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ballotRedemptionRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "pausePay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseDistributions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseRedeem",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "pauseBurn",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowMinting",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowChangeToken",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowTerminalMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowControllerMigration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetTerminals",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "allowSetController",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "holdFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useTotalOverflowForRedemptions",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForPay",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "useDataSourceForRedeem",
              "type": "bool"
            },
            {
              "internalType": "contract IJBFundingCycleDataSource",
              "name": "dataSource",
              "type": "address"
            }
          ],
          "internalType": "struct JBFundingCycleMetadata",
          "name": "_metadata",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "_mustStartAtOrAfter",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "group",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "preferClaimed",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "preferAddToBalance",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "percent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "projectId",
                  "type": "uint256"
                },
                {
                  "internalType": "address payable",
                  "name": "beneficiary",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lockedUntil",
                  "type": "uint256"
                },
                {
                  "internalType": "contract IJBSplitAllocator",
                  "name": "allocator",
                  "type": "address"
                }
              ],
              "internalType": "struct JBSplit[]",
              "name": "splits",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct JBGroupedSplits[]",
          "name": "_groupedSplits",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "contract IJBPaymentTerminal",
              "name": "terminal",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "distributionLimitCurrency",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overflowAllowanceCurrency",
              "type": "uint256"
            }
          ],
          "internalType": "struct JBFundAccessConstraints[]",
          "name": "_fundAccessConstraints",
          "type": "tuple[]"
        },
        {
          "internalType": "string",
          "name": "_memo",
          "type": "string"
        }
      ],
      "name": "reconfigureFundingCyclesOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
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
        },
        {
          "internalType": "uint256",
          "name": "_reservedRate",
          "type": "uint256"
        }
      ],
      "name": "reservedTokenBalanceOf",
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
      "inputs": [],
      "name": "splitsStore",
      "outputs": [
        {
          "internalType": "contract IJBSplitsStore",
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
          "internalType": "bytes4",
          "name": "_interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenStore",
      "outputs": [
        {
          "internalType": "contract IJBTokenStore",
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
          "name": "_reservedRate",
          "type": "uint256"
        }
      ],
      "name": "totalOutstandingTokensOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "transactionHash": "0xdf8e425388e4fd27a2a03fcc86f18bdfa1830a625db1a102370b4008fe3abb30",
  "receipt": {
    "to": null,
    "from": "0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF",
    "contractAddress": "0xF49e691b3716cB0a3CeBa99F96852A2334b57924",
    "transactionIndex": 0,
    "gasUsed": "5282970",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x3c328fa173666f35b8ad817f70e697f6d3c618a8ef6dc3992bc9fd1648722fa6",
    "transactionHash": "0xdf8e425388e4fd27a2a03fcc86f18bdfa1830a625db1a102370b4008fe3abb30",
    "logs": [],
    "blockNumber": 10550769,
    "cumulativeGasUsed": "5282970",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0xcBfa3c6B4D39Eefb5266F7Ebc9278D8D9369Bc5c",
    "0x981fEd011BD441D329Ec63160ce393f8b5c18af1",
    "0x7f60Ac5fBb7328D17e5f7847C000dFfbFdB0b8C3",
    "0xBe956b29cF727F5566CaC0379F55040588fF13D6",
    "0x8648c79B2b76BF04E31dcc8dcAAB703dc72A9621",
    "0x2c8238d46087aBbc42A72Ef92757fC4c79FefC4A"
  ],
  "numDeployments": 1,
  "solcInputHash": "2d6f35a58bd6d7d54eadea7a0697d07f",
  "metadata": "{\"compiler\":{\"version\":\"0.8.6+commit.11564f7e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IJBOperatorStore\",\"name\":\"_operatorStore\",\"type\":\"address\"},{\"internalType\":\"contract IJBProjects\",\"name\":\"_projects\",\"type\":\"address\"},{\"internalType\":\"contract IJBDirectory\",\"name\":\"_directory\",\"type\":\"address\"},{\"internalType\":\"contract IJBFundingCycleStore\",\"name\":\"_fundingCycleStore\",\"type\":\"address\"},{\"internalType\":\"contract IJBTokenStore\",\"name\":\"_tokenStore\",\"type\":\"address\"},{\"internalType\":\"contract IJBSplitsStore\",\"name\":\"_splitsStore\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"CANT_MIGRATE_TO_CURRENT_CONTROLLER\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"CHANGE_TOKEN_NOT_ALLOWED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FUNDING_CYCLE_ALREADY_LAUNCHED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_BALLOT_REDEMPTION_RATE\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_DISTRIBUTION_LIMIT\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_DISTRIBUTION_LIMIT_CURRENCY\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_OVERFLOW_ALLOWANCE\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_OVERFLOW_ALLOWANCE_CURRENCY\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_REDEMPTION_RATE\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_RESERVED_RATE\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MIGRATION_NOT_ALLOWED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NOT_CURRENT_CONTROLLER\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NO_BURNABLE_TOKENS\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"prod1\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"denominator\",\"type\":\"uint256\"}],\"name\":\"PRBMath__MulDivOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UNAUTHORIZED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZERO_TOKENS_TO_MINT\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenCount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"memo\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"BurnTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"fundingCycleConfiguration\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"fundingCycleNumber\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenCount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"beneficiaryTokenCount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"memo\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"DistributeReservedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"domain\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"group\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"preferClaimed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"preferAddToBalance\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"percent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"lockedUntil\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBSplitAllocator\",\"name\":\"allocator\",\"type\":\"address\"}],\"indexed\":false,\"internalType\":\"struct JBSplit\",\"name\":\"split\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenCount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"DistributeToReservedTokenSplit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"memo\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"LaunchFundingCycles\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"memo\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"LaunchProject\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"contract IJBMigratable\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"Migrate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenCount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"beneficiaryTokenCount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"memo\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"MintTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"PrepMigration\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"memo\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"ReconfigureFundingCycles\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"fundingCycleConfiguration\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"fundingCycleNumber\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"terminal\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimitCurrency\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowanceCurrency\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct JBFundAccessConstraints\",\"name\":\"constraints\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"SetFundAccessConstraints\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_holder\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_tokenCount\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_memo\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"_preferClaimedTokens\",\"type\":\"bool\"}],\"name\":\"burnTokensOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeTokenOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"currentFundingCycleOf\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"redemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"ballotRedemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"pausePay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseDistributions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseRedeem\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseBurn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowMinting\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowChangeToken\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowTerminalMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowControllerMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetTerminals\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetController\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"holdFees\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useTotalOverflowForRedemptions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForPay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForRedeem\",\"type\":\"bool\"},{\"internalType\":\"contract IJBFundingCycleDataSource\",\"name\":\"dataSource\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleMetadata\",\"name\":\"metadata\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"directory\",\"outputs\":[{\"internalType\":\"contract IJBDirectory\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_memo\",\"type\":\"string\"}],\"name\":\"distributeReservedTokensOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_configuration\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"_terminal\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"distributionLimitOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundingCycleStore\",\"outputs\":[{\"internalType\":\"contract IJBFundingCycleStore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_configuration\",\"type\":\"uint256\"}],\"name\":\"getFundingCycleOf\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"redemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"ballotRedemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"pausePay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseDistributions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseRedeem\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseBurn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowMinting\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowChangeToken\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowTerminalMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowControllerMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetTerminals\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetController\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"holdFees\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useTotalOverflowForRedemptions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForPay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForRedeem\",\"type\":\"bool\"},{\"internalType\":\"contract IJBFundingCycleDataSource\",\"name\":\"dataSource\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleMetadata\",\"name\":\"metadata\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"}],\"name\":\"issueTokenFor\",\"outputs\":[{\"internalType\":\"contract IJBToken\",\"name\":\"token\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"latestConfiguredFundingCycleOf\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"redemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"ballotRedemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"pausePay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseDistributions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseRedeem\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseBurn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowMinting\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowChangeToken\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowTerminalMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowControllerMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetTerminals\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetController\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"holdFees\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useTotalOverflowForRedemptions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForPay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForRedeem\",\"type\":\"bool\"},{\"internalType\":\"contract IJBFundingCycleDataSource\",\"name\":\"dataSource\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleMetadata\",\"name\":\"metadata\",\"type\":\"tuple\"},{\"internalType\":\"enum JBBallotState\",\"name\":\"ballotState\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleData\",\"name\":\"_data\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"redemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"ballotRedemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"pausePay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseDistributions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseRedeem\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseBurn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowMinting\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowChangeToken\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowTerminalMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowControllerMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetTerminals\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetController\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"holdFees\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useTotalOverflowForRedemptions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForPay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForRedeem\",\"type\":\"bool\"},{\"internalType\":\"contract IJBFundingCycleDataSource\",\"name\":\"dataSource\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleMetadata\",\"name\":\"_metadata\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_mustStartAtOrAfter\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"group\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"preferClaimed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"preferAddToBalance\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"percent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"lockedUntil\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBSplitAllocator\",\"name\":\"allocator\",\"type\":\"address\"}],\"internalType\":\"struct JBSplit[]\",\"name\":\"splits\",\"type\":\"tuple[]\"}],\"internalType\":\"struct JBGroupedSplits[]\",\"name\":\"_groupedSplits\",\"type\":\"tuple[]\"},{\"components\":[{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"terminal\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimitCurrency\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowanceCurrency\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundAccessConstraints[]\",\"name\":\"_fundAccessConstraints\",\"type\":\"tuple[]\"},{\"internalType\":\"contract IJBPaymentTerminal[]\",\"name\":\"_terminals\",\"type\":\"address[]\"},{\"internalType\":\"string\",\"name\":\"_memo\",\"type\":\"string\"}],\"name\":\"launchFundingCyclesFor\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"domain\",\"type\":\"uint256\"}],\"internalType\":\"struct JBProjectMetadata\",\"name\":\"_projectMetadata\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleData\",\"name\":\"_data\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"redemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"ballotRedemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"pausePay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseDistributions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseRedeem\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseBurn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowMinting\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowChangeToken\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowTerminalMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowControllerMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetTerminals\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetController\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"holdFees\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useTotalOverflowForRedemptions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForPay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForRedeem\",\"type\":\"bool\"},{\"internalType\":\"contract IJBFundingCycleDataSource\",\"name\":\"dataSource\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleMetadata\",\"name\":\"_metadata\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_mustStartAtOrAfter\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"group\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"preferClaimed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"preferAddToBalance\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"percent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"lockedUntil\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBSplitAllocator\",\"name\":\"allocator\",\"type\":\"address\"}],\"internalType\":\"struct JBSplit[]\",\"name\":\"splits\",\"type\":\"tuple[]\"}],\"internalType\":\"struct JBGroupedSplits[]\",\"name\":\"_groupedSplits\",\"type\":\"tuple[]\"},{\"components\":[{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"terminal\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimitCurrency\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowanceCurrency\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundAccessConstraints[]\",\"name\":\"_fundAccessConstraints\",\"type\":\"tuple[]\"},{\"internalType\":\"contract IJBPaymentTerminal[]\",\"name\":\"_terminals\",\"type\":\"address[]\"},{\"internalType\":\"string\",\"name\":\"_memo\",\"type\":\"string\"}],\"name\":\"launchProjectFor\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBMigratable\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"migrate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_tokenCount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_beneficiary\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_memo\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"_preferClaimedTokens\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_useReservedRate\",\"type\":\"bool\"}],\"name\":\"mintTokensOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"beneficiaryTokenCount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"operatorStore\",\"outputs\":[{\"internalType\":\"contract IJBOperatorStore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_configuration\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"_terminal\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"overflowAllowanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"}],\"name\":\"prepForMigrationOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"projects\",\"outputs\":[{\"internalType\":\"contract IJBProjects\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"queuedFundingCycleOf\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basedOn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"metadata\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundingCycle\",\"name\":\"fundingCycle\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"redemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"ballotRedemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"pausePay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseDistributions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseRedeem\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseBurn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowMinting\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowChangeToken\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowTerminalMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowControllerMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetTerminals\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetController\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"holdFees\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useTotalOverflowForRedemptions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForPay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForRedeem\",\"type\":\"bool\"},{\"internalType\":\"contract IJBFundingCycleDataSource\",\"name\":\"dataSource\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleMetadata\",\"name\":\"metadata\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"weight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"discountRate\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBFundingCycleBallot\",\"name\":\"ballot\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleData\",\"name\":\"_data\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"reservedRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"redemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"ballotRedemptionRate\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"pausePay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseDistributions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseRedeem\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"pauseBurn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowMinting\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowChangeToken\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowTerminalMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowControllerMigration\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetTerminals\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"allowSetController\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"holdFees\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useTotalOverflowForRedemptions\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForPay\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"useDataSourceForRedeem\",\"type\":\"bool\"},{\"internalType\":\"contract IJBFundingCycleDataSource\",\"name\":\"dataSource\",\"type\":\"address\"}],\"internalType\":\"struct JBFundingCycleMetadata\",\"name\":\"_metadata\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_mustStartAtOrAfter\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"group\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"preferClaimed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"preferAddToBalance\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"percent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"lockedUntil\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBSplitAllocator\",\"name\":\"allocator\",\"type\":\"address\"}],\"internalType\":\"struct JBSplit[]\",\"name\":\"splits\",\"type\":\"tuple[]\"}],\"internalType\":\"struct JBGroupedSplits[]\",\"name\":\"_groupedSplits\",\"type\":\"tuple[]\"},{\"components\":[{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"terminal\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"distributionLimitCurrency\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"overflowAllowanceCurrency\",\"type\":\"uint256\"}],\"internalType\":\"struct JBFundAccessConstraints[]\",\"name\":\"_fundAccessConstraints\",\"type\":\"tuple[]\"},{\"internalType\":\"string\",\"name\":\"_memo\",\"type\":\"string\"}],\"name\":\"reconfigureFundingCyclesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"configuration\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_reservedRate\",\"type\":\"uint256\"}],\"name\":\"reservedTokenBalanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"splitsStore\",\"outputs\":[{\"internalType\":\"contract IJBSplitsStore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"_interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenStore\",\"outputs\":[{\"internalType\":\"contract IJBTokenStore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_reservedRate\",\"type\":\"uint256\"}],\"name\":\"totalOutstandingTokensOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Adheres to - IJBController: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol's rules. IJBMigratable: Allows migrating to this contract, with a hook called to prepare for the migration.Inherits from - JBOperatable: Several functions in this contract can only be accessed by a project owner, or an address that has been preconfifigured to be an operator of the project. ERC165: Introspection on interface adherance. \",\"kind\":\"dev\",\"methods\":{\"burnTokensOf(address,uint256,uint256,string,bool)\":{\"details\":\"Only a token's holder, a designated operator, or a project's terminal can burn it.\",\"params\":{\"_holder\":\"The account that is having its tokens burned.\",\"_memo\":\"A memo to pass along to the emitted event.\",\"_preferClaimedTokens\":\"A flag indicating whether a project's attached token contract should be burned first if they have been issued.\",\"_projectId\":\"The ID of the project to which the tokens being burned belong.\",\"_tokenCount\":\"The number of tokens to burn.\"}},\"changeTokenOf(uint256,address,address)\":{\"details\":\"Only a project's owner or operator can change its token.\",\"params\":{\"_newOwner\":\"An address to transfer the current token's ownership to. This is optional, but it cannot be done later.\",\"_projectId\":\"The ID of the project to which the changed token belongs.\",\"_token\":\"The new token.\"}},\"constructor\":{\"params\":{\"_directory\":\"A contract storing directories of terminals and controllers for each project.\",\"_fundingCycleStore\":\"A contract storing all funding cycle configurations.\",\"_operatorStore\":\"A contract storing operator assignments.\",\"_projects\":\"A contract which mints ERC-721's that represent project ownership and transfers.\",\"_splitsStore\":\"A contract that stores splits for each project.\",\"_tokenStore\":\"A contract that manages token minting and burning.\"}},\"currentFundingCycleOf(uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to which the funding cycle belongs.\"},\"returns\":{\"fundingCycle\":\"The current funding cycle.\",\"metadata\":\"The current funding cycle's metadata.\"}},\"distributeReservedTokensOf(uint256,string)\":{\"params\":{\"_memo\":\"A memo to pass along to the emitted event.\",\"_projectId\":\"The ID of the project to which the reserved tokens belong.\"},\"returns\":{\"_0\":\"The amount of minted reserved tokens.\"}},\"distributionLimitOf(uint256,uint256,address,address)\":{\"details\":\"The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \",\"params\":{\"_configuration\":\"The configuration during which the distribution limit applies.\",\"_projectId\":\"The ID of the project to get the distribution limit of.\",\"_terminal\":\"The terminal from which distributions are being limited.\",\"_token\":\"The token for which the distribution limit applies.\"},\"returns\":{\"_0\":\"The distribution limit, as a fixed point number with the same number of decimals as the provided terminal.\",\"_1\":\"The currency of the distribution limit.\"}},\"getFundingCycleOf(uint256,uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to which the funding cycle belongs.\"},\"returns\":{\"fundingCycle\":\"The funding cycle.\",\"metadata\":\"The funding cycle's metadata.\"}},\"issueTokenFor(uint256,string,string)\":{\"details\":\"Deploys a project's ERC20 JBToken contract.Only a project's owner or operator can issue its token.\",\"params\":{\"_name\":\"The ERC20's name.\",\"_projectId\":\"The ID of the project being issued tokens.\",\"_symbol\":\"The ERC20's symbol.\"}},\"latestConfiguredFundingCycleOf(uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to which the funding cycle belongs.\"},\"returns\":{\"ballotState\":\"The state of the configuration.\",\"fundingCycle\":\"The latest configured funding cycle.\",\"metadata\":\"The latest configured funding cycle's metadata.\"}},\"launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)\":{\"details\":\"Each operation within this transaction can be done in sequence separately.Only a project owner or operator can launch its funding cycles.\",\"params\":{\"_data\":\"Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.\",\"_fundAccessConstraints\":\"An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\",\"_groupedSplits\":\"An array of splits to set for any number of groups. \",\"_memo\":\"A memo to pass along to the emitted event.\",\"_metadata\":\"Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\",\"_mustStartAtOrAfter\":\"The time before which the configured funding cycle cannot start.\",\"_projectId\":\"The ID of the project to launch funding cycles for.\",\"_terminals\":\"Payment terminals to add for the project.\"},\"returns\":{\"configuration\":\"The configuration of the funding cycle that was successfully created.\"}},\"launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)\":{\"details\":\"Each operation within this transaction can be done in sequence separately.Anyone can deploy a project on an owner's behalf.\",\"params\":{\"_data\":\"Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.\",\"_fundAccessConstraints\":\"An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\",\"_groupedSplits\":\"An array of splits to set for any number of groups. \",\"_memo\":\"A memo to pass along to the emitted event.\",\"_metadata\":\"Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\",\"_mustStartAtOrAfter\":\"The time before which the configured funding cycle cannot start.\",\"_owner\":\"The address to set as the owner of the project. The project ERC-721 will be owned by this address.\",\"_projectMetadata\":\"Metadata to associate with the project within a particular domain. This can be updated any time by the owner of the project.\",\"_terminals\":\"Payment terminals to add for the project.\"},\"returns\":{\"projectId\":\"The ID of the project.\"}},\"migrate(uint256,address)\":{\"details\":\"Only a project's owner or a designated operator can migrate it.\",\"params\":{\"_projectId\":\"The ID of the project that will be migrated from this controller.\",\"_to\":\"The controller to which the project is migrating.\"}},\"mintTokensOf(uint256,uint256,address,string,bool,bool)\":{\"details\":\"Only a project's owner, a designated operator, or one of its terminals can mint its tokens.\",\"params\":{\"_beneficiary\":\"The account that the tokens are being minted for.\",\"_memo\":\"A memo to pass along to the emitted event.\",\"_preferClaimedTokens\":\"A flag indicating whether a project's attached token contract should be minted if they have been issued.\",\"_projectId\":\"The ID of the project to which the tokens being minted belong.\",\"_tokenCount\":\"The amount of tokens to mint in total, counting however many should be reserved.\",\"_useReservedRate\":\"Whether to use the current funding cycle's reserved rate in the mint calculation.\"},\"returns\":{\"beneficiaryTokenCount\":\"The amount of tokens minted for the beneficiary.\"}},\"overflowAllowanceOf(uint256,uint256,address,address)\":{\"details\":\"The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \",\"params\":{\"_configuration\":\"The configuration of the during which the allowance applies.\",\"_projectId\":\"The ID of the project to get the overflow allowance of.\",\"_terminal\":\"The terminal managing the overflow.\",\"_token\":\"The token for which the overflow allowance applies.\"},\"returns\":{\"_0\":\"The overflow allowance, as a fixed point number with the same number of decimals as the provided terminal.\",\"_1\":\"The currency of the overflow allowance.\"}},\"prepForMigrationOf(uint256,address)\":{\"details\":\"This controller should not yet be the project's controller.\",\"params\":{\"_from\":\"The controller being migrated from.\",\"_projectId\":\"The ID of the project that will be migrated to this controller.\"}},\"queuedFundingCycleOf(uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to which the funding cycle belongs.\"},\"returns\":{\"fundingCycle\":\"The queued funding cycle.\",\"metadata\":\"The queued funding cycle's metadata.\"}},\"reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)\":{\"details\":\"Only a project's owner or a designated operator can configure its funding cycles.\",\"params\":{\"_data\":\"Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.\",\"_fundAccessConstraints\":\"An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\",\"_groupedSplits\":\"An array of splits to set for any number of groups. \",\"_memo\":\"A memo to pass along to the emitted event.\",\"_metadata\":\"Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\",\"_mustStartAtOrAfter\":\"The time before which the configured funding cycle cannot start.\",\"_projectId\":\"The ID of the project whose funding cycles are being reconfigured.\"},\"returns\":{\"configuration\":\"The configuration of the funding cycle that was successfully reconfigured.\"}},\"reservedTokenBalanceOf(uint256,uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to get a reserved token balance of.\",\"_reservedRate\":\"The reserved rate to use when making the calculation.\"},\"returns\":{\"_0\":\"The current amount of reserved tokens.\"}},\"supportsInterface(bytes4)\":{\"details\":\" See {IERC165-supportsInterface}.\",\"params\":{\"_interfaceId\":\"The ID of the interface to check for adherance to.\"}},\"totalOutstandingTokensOf(uint256,uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to get total outstanding tokens of.\",\"_reservedRate\":\"The reserved rate to use when making the calculation.\"},\"returns\":{\"_0\":\"The current total amount of outstanding tokens for the project.\"}}},\"stateVariables\":{\"_packedDistributionLimitDataOf\":{\"details\":\"bits 0-231: The amount of token that a project can distribute per funding cycle.bits 232-255: The currency of amount that a project can distribute. _projectId The ID of the project to get the packed distribution limit data of. _configuration The configuration during which the packed distribution limit data applies. _terminal The terminal from which distributions are being limited. _token The token for which distributions are being limited.\"},\"_packedOverflowAllowanceDataOf\":{\"details\":\"bits 0-231: The amount of overflow that a project is allowed to tap into on-demand throughout the configuration.bits 232-255: The currency of the amount of overflow that a project is allowed to tap. _projectId The ID of the project to get the packed overflow allowance data of. _configuration The configuration during which the packed overflow allowance data applies. _terminal The terminal managing the overflow. _token The token for which overflow is being allowed.\"}},\"version\":1},\"userdoc\":{\"errors\":{\"PRBMath__MulDivOverflow(uint256,uint256)\":[{\"notice\":\"Emitted when the result overflows uint256.\"}]},\"kind\":\"user\",\"methods\":{\"burnTokensOf(address,uint256,uint256,string,bool)\":{\"notice\":\"Burns a token holder's supply.\"},\"changeTokenOf(uint256,address,address)\":{\"notice\":\"Swap the current project's token that is minted and burned for another, and transfer ownership of the current token to another address if needed.\"},\"currentFundingCycleOf(uint256)\":{\"notice\":\"A project's current funding cycle along with its metadata.\"},\"directory()\":{\"notice\":\"The directory of terminals and controllers for projects.\"},\"distributeReservedTokensOf(uint256,string)\":{\"notice\":\"Distributes all outstanding reserved tokens for a project.\"},\"distributionLimitOf(uint256,uint256,address,address)\":{\"notice\":\"The amount of token that a project can distribute per funding cycle, and the currency it's in terms of.\"},\"fundingCycleStore()\":{\"notice\":\"The contract storing all funding cycle configurations.\"},\"getFundingCycleOf(uint256,uint256)\":{\"notice\":\"A project's funding cycle for the specified configuration along with its metadata.\"},\"issueTokenFor(uint256,string,string)\":{\"notice\":\"Issues an owner's ERC20 JBTokens that'll be used when claiming tokens.\"},\"latestConfiguredFundingCycleOf(uint256)\":{\"notice\":\"A project's latest configured funding cycle along with its metadata and the ballot state of the configuration.\"},\"launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)\":{\"notice\":\"Creates a funding cycle for an already existing project ERC-721.\"},\"launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)\":{\"notice\":\"Creates a project. This will mint an ERC-721 into the specified owner's account, configure a first funding cycle, and set up any splits.\"},\"migrate(uint256,address)\":{\"notice\":\"Allows a project to migrate from this controller to another.\"},\"mintTokensOf(uint256,uint256,address,string,bool,bool)\":{\"notice\":\"Mint new token supply into an account, and optionally reserve a supply to be distributed according to the project's current funding cycle configuration.\"},\"operatorStore()\":{\"notice\":\" A contract storing operator assignments.\"},\"overflowAllowanceOf(uint256,uint256,address,address)\":{\"notice\":\"The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it's in terms of.\"},\"prepForMigrationOf(uint256,address)\":{\"notice\":\"Allows other controllers to signal to this one that a migration is expected for the specified project.\"},\"projects()\":{\"notice\":\"Mints ERC-721's that represent project ownership.\"},\"queuedFundingCycleOf(uint256)\":{\"notice\":\"A project's queued funding cycle along with its metadata.\"},\"reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)\":{\"notice\":\"Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle's ballot.\"},\"reservedTokenBalanceOf(uint256,uint256)\":{\"notice\":\"Gets the amount of reserved tokens that a project has available to distribute.\"},\"splitsStore()\":{\"notice\":\"The contract that stores splits for each project.\"},\"supportsInterface(bytes4)\":{\"notice\":\"Indicates if this contract adheres to the specified interface.\"},\"tokenStore()\":{\"notice\":\"The contract that manages token minting and burning.\"},\"totalOutstandingTokensOf(uint256,uint256)\":{\"notice\":\"Gets the current total amount of outstanding tokens for a project, given a reserved rate.\"}},\"notice\":\"Stitches together funding cycles and community tokens, making sure all activity is accounted for and correct.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/JBController.sol\":\"JBController\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"@paulrberg/contracts/math/PRBMath.sol\":{\"content\":\"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\nimport \\\"prb-math/contracts/PRBMath.sol\\\";\\n\",\"keccak256\":\"0x42821345981bc0434a90ba2268a2f5278dfe9e38166981d72fc7f3b776a29495\",\"license\":\"Unlicense\"},\"contracts/JBController.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/ERC165.sol';\\nimport '@paulrberg/contracts/math/PRBMath.sol';\\nimport './abstract/JBOperatable.sol';\\nimport './interfaces/IJBController.sol';\\nimport './interfaces/IJBMigratable.sol';\\nimport './interfaces/IJBOperatorStore.sol';\\nimport './interfaces/IJBPaymentTerminal.sol';\\nimport './interfaces/IJBProjects.sol';\\nimport './libraries/JBConstants.sol';\\nimport './libraries/JBFundingCycleMetadataResolver.sol';\\nimport './libraries/JBOperations.sol';\\nimport './libraries/JBSplitsGroups.sol';\\n\\n/**\\n  @notice\\n  Stitches together funding cycles and community tokens, making sure all activity is accounted for and correct.\\n\\n  @dev\\n  Adheres to -\\n  IJBController: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol's rules.\\n  IJBMigratable: Allows migrating to this contract, with a hook called to prepare for the migration.\\n\\n  @dev\\n  Inherits from -\\n  JBOperatable: Several functions in this contract can only be accessed by a project owner, or an address that has been preconfifigured to be an operator of the project.\\n  ERC165: Introspection on interface adherance. \\n*/\\ncontract JBController is IJBController, IJBMigratable, JBOperatable, ERC165 {\\n  // A library that parses the packed funding cycle metadata into a more friendly format.\\n  using JBFundingCycleMetadataResolver for JBFundingCycle;\\n\\n  //*********************************************************************//\\n  // --------------------------- custom errors ------------------------- //\\n  //*********************************************************************//\\n  error BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE();\\n  error CANT_MIGRATE_TO_CURRENT_CONTROLLER();\\n  error CHANGE_TOKEN_NOT_ALLOWED();\\n  error FUNDING_CYCLE_ALREADY_LAUNCHED();\\n  error INVALID_BALLOT_REDEMPTION_RATE();\\n  error INVALID_DISTRIBUTION_LIMIT();\\n  error INVALID_DISTRIBUTION_LIMIT_CURRENCY();\\n  error INVALID_OVERFLOW_ALLOWANCE();\\n  error INVALID_OVERFLOW_ALLOWANCE_CURRENCY();\\n  error INVALID_REDEMPTION_RATE();\\n  error INVALID_RESERVED_RATE();\\n  error MIGRATION_NOT_ALLOWED();\\n  error MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE();\\n  error NO_BURNABLE_TOKENS();\\n  error NOT_CURRENT_CONTROLLER();\\n  error ZERO_TOKENS_TO_MINT();\\n\\n  //*********************************************************************//\\n  // --------------------- private stored properties ------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    The difference between the processed token tracker of a project and the project's token's total supply is the amount of tokens that still need to have reserves minted against them.\\n\\n    _projectId The ID of the project to get the tracker of.\\n  */\\n  mapping(uint256 => int256) private _processedTokenTrackerOf;\\n\\n  /**\\n    @notice\\n    Data regarding the distribution limit of a project during a configuration.\\n\\n    @dev\\n    bits 0-231: The amount of token that a project can distribute per funding cycle.\\n\\n    @dev\\n    bits 232-255: The currency of amount that a project can distribute.\\n\\n    _projectId The ID of the project to get the packed distribution limit data of.\\n    _configuration The configuration during which the packed distribution limit data applies.\\n    _terminal The terminal from which distributions are being limited.\\n    _token The token for which distributions are being limited.\\n  */\\n  mapping(uint256 => mapping(uint256 => mapping(IJBPaymentTerminal => mapping(address => uint256))))\\n    private _packedDistributionLimitDataOf;\\n\\n  /**\\n    @notice\\n    Data regarding the overflow allowance of a project during a configuration.\\n\\n    @dev\\n    bits 0-231: The amount of overflow that a project is allowed to tap into on-demand throughout the configuration.\\n\\n    @dev\\n    bits 232-255: The currency of the amount of overflow that a project is allowed to tap.\\n\\n    _projectId The ID of the project to get the packed overflow allowance data of.\\n    _configuration The configuration during which the packed overflow allowance data applies.\\n    _terminal The terminal managing the overflow.\\n    _token The token for which overflow is being allowed.\\n  */\\n  mapping(uint256 => mapping(uint256 => mapping(IJBPaymentTerminal => mapping(address => uint256))))\\n    private _packedOverflowAllowanceDataOf;\\n\\n  //*********************************************************************//\\n  // --------------- public immutable stored properties ---------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Mints ERC-721's that represent project ownership.\\n  */\\n  IJBProjects public immutable override projects;\\n\\n  /**\\n    @notice\\n    The contract storing all funding cycle configurations.\\n  */\\n  IJBFundingCycleStore public immutable override fundingCycleStore;\\n\\n  /**\\n    @notice\\n    The contract that manages token minting and burning.\\n  */\\n  IJBTokenStore public immutable override tokenStore;\\n\\n  /**\\n    @notice\\n    The contract that stores splits for each project.\\n  */\\n  IJBSplitsStore public immutable override splitsStore;\\n\\n  /**\\n    @notice\\n    The directory of terminals and controllers for projects.\\n  */\\n  IJBDirectory public immutable override directory;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    The amount of token that a project can distribute per funding cycle, and the currency it's in terms of.\\n\\n    @dev\\n    The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \\n\\n    @param _projectId The ID of the project to get the distribution limit of.\\n    @param _configuration The configuration during which the distribution limit applies.\\n    @param _terminal The terminal from which distributions are being limited.\\n    @param _token The token for which the distribution limit applies.\\n\\n    @return The distribution limit, as a fixed point number with the same number of decimals as the provided terminal.\\n    @return The currency of the distribution limit.\\n  */\\n  function distributionLimitOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view override returns (uint256, uint256) {\\n    // Get a reference to the packed data.\\n    uint256 _data = _packedDistributionLimitDataOf[_projectId][_configuration][_terminal][_token];\\n\\n    // The limit is in bits 0-231. The currency is in bits 232-255.\\n    return (uint256(uint232(_data)), _data >> 232);\\n  }\\n\\n  /**\\n    @notice\\n    The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it's in terms of.\\n\\n    @dev\\n    The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \\n\\n    @param _projectId The ID of the project to get the overflow allowance of.\\n    @param _configuration The configuration of the during which the allowance applies.\\n    @param _terminal The terminal managing the overflow.\\n    @param _token The token for which the overflow allowance applies.\\n\\n    @return The overflow allowance, as a fixed point number with the same number of decimals as the provided terminal.\\n    @return The currency of the overflow allowance.\\n  */\\n  function overflowAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view override returns (uint256, uint256) {\\n    // Get a reference to the packed data.\\n    uint256 _data = _packedOverflowAllowanceDataOf[_projectId][_configuration][_terminal][_token];\\n\\n    // The allowance is in bits 0-231. The currency is in bits 232-255.\\n    return (uint256(uint232(_data)), _data >> 232);\\n  }\\n\\n  /**\\n    @notice\\n    Gets the amount of reserved tokens that a project has available to distribute.\\n\\n    @param _projectId The ID of the project to get a reserved token balance of.\\n    @param _reservedRate The reserved rate to use when making the calculation.\\n\\n    @return The current amount of reserved tokens.\\n  */\\n  function reservedTokenBalanceOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    override\\n    returns (uint256)\\n  {\\n    return\\n      _reservedTokenAmountFrom(\\n        _processedTokenTrackerOf[_projectId],\\n        _reservedRate,\\n        tokenStore.totalSupplyOf(_projectId)\\n      );\\n  }\\n\\n  /**\\n    @notice\\n    Gets the current total amount of outstanding tokens for a project, given a reserved rate.\\n\\n    @param _projectId The ID of the project to get total outstanding tokens of.\\n    @param _reservedRate The reserved rate to use when making the calculation.\\n\\n    @return The current total amount of outstanding tokens for the project.\\n  */\\n  function totalOutstandingTokensOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    override\\n    returns (uint256)\\n  {\\n    // Get the total number of tokens in circulation.\\n    uint256 _totalSupply = tokenStore.totalSupplyOf(_projectId);\\n\\n    // Get the number of reserved tokens the project has.\\n    uint256 _reservedTokenAmount = _reservedTokenAmountFrom(\\n      _processedTokenTrackerOf[_projectId],\\n      _reservedRate,\\n      _totalSupply\\n    );\\n\\n    // Add the reserved tokens to the total supply.\\n    return _totalSupply + _reservedTokenAmount;\\n  }\\n\\n  /** \\n    @notice\\n    A project's funding cycle for the specified configuration along with its metadata.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The funding cycle.\\n    @return metadata The funding cycle's metadata.\\n  */\\n  function getFundingCycleOf(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata)\\n  {\\n    fundingCycle = fundingCycleStore.get(_projectId, _configuration);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  /** \\n    @notice\\n    A project's latest configured funding cycle along with its metadata and the ballot state of the configuration.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The latest configured funding cycle.\\n    @return metadata The latest configured funding cycle's metadata.\\n    @return ballotState The state of the configuration.\\n  */\\n  function latestConfiguredFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (\\n      JBFundingCycle memory fundingCycle,\\n      JBFundingCycleMetadata memory metadata,\\n      JBBallotState ballotState\\n    )\\n  {\\n    (fundingCycle, ballotState) = fundingCycleStore.latestConfiguredOf(_projectId);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  /** \\n    @notice\\n    A project's current funding cycle along with its metadata.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The current funding cycle.\\n    @return metadata The current funding cycle's metadata.\\n  */\\n  function currentFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata)\\n  {\\n    fundingCycle = fundingCycleStore.currentOf(_projectId);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  /** \\n    @notice\\n    A project's queued funding cycle along with its metadata.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The queued funding cycle.\\n    @return metadata The queued funding cycle's metadata.\\n  */\\n  function queuedFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata)\\n  {\\n    fundingCycle = fundingCycleStore.queuedOf(_projectId);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- public views --------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Indicates if this contract adheres to the specified interface.\\n\\n    @dev \\n    See {IERC165-supportsInterface}.\\n\\n    @param _interfaceId The ID of the interface to check for adherance to.\\n  */\\n  function supportsInterface(bytes4 _interfaceId)\\n    public\\n    view\\n    virtual\\n    override(ERC165, IERC165)\\n    returns (bool)\\n  {\\n    return\\n      _interfaceId == type(IJBController).interfaceId ||\\n      _interfaceId == type(IJBMigratable).interfaceId ||\\n      _interfaceId == type(IJBOperatable).interfaceId ||\\n      super.supportsInterface(_interfaceId);\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------------------- constructor -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @param _operatorStore A contract storing operator assignments.\\n    @param _projects A contract which mints ERC-721's that represent project ownership and transfers.\\n    @param _directory A contract storing directories of terminals and controllers for each project.\\n    @param _fundingCycleStore A contract storing all funding cycle configurations.\\n    @param _tokenStore A contract that manages token minting and burning.\\n    @param _splitsStore A contract that stores splits for each project.\\n  */\\n  constructor(\\n    IJBOperatorStore _operatorStore,\\n    IJBProjects _projects,\\n    IJBDirectory _directory,\\n    IJBFundingCycleStore _fundingCycleStore,\\n    IJBTokenStore _tokenStore,\\n    IJBSplitsStore _splitsStore\\n  ) JBOperatable(_operatorStore) {\\n    projects = _projects;\\n    directory = _directory;\\n    fundingCycleStore = _fundingCycleStore;\\n    tokenStore = _tokenStore;\\n    splitsStore = _splitsStore;\\n  }\\n\\n  //*********************************************************************//\\n  // --------------------- external transactions ----------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Creates a project. This will mint an ERC-721 into the specified owner's account, configure a first funding cycle, and set up any splits.\\n\\n    @dev\\n    Each operation within this transaction can be done in sequence separately.\\n\\n    @dev\\n    Anyone can deploy a project on an owner's behalf.\\n\\n    @param _owner The address to set as the owner of the project. The project ERC-721 will be owned by this address.\\n    @param _projectMetadata Metadata to associate with the project within a particular domain. This can be updated any time by the owner of the project.\\n    @param _data Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\\n    @param _terminals Payment terminals to add for the project.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return projectId The ID of the project.\\n  */\\n  function launchProjectFor(\\n    address _owner,\\n    JBProjectMetadata calldata _projectMetadata,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] calldata _groupedSplits,\\n    JBFundAccessConstraints[] calldata _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string memory _memo\\n  ) external virtual override returns (uint256 projectId) {\\n    // Mint the project into the wallet of the message sender.\\n    projectId = projects.createFor(_owner, _projectMetadata);\\n\\n    // Set this contract as the project's controller in the directory.\\n    directory.setControllerOf(projectId, address(this));\\n\\n    // Configure the first funding cycle.\\n    uint256 _configuration = _configure(\\n      projectId,\\n      _data,\\n      _metadata,\\n      _mustStartAtOrAfter,\\n      _groupedSplits,\\n      _fundAccessConstraints\\n    );\\n\\n    // Add the provided terminals to the list of terminals.\\n    if (_terminals.length > 0) directory.setTerminalsOf(projectId, _terminals);\\n\\n    emit LaunchProject(_configuration, projectId, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Creates a funding cycle for an already existing project ERC-721.\\n\\n    @dev\\n    Each operation within this transaction can be done in sequence separately.\\n\\n    @dev\\n    Only a project owner or operator can launch its funding cycles.\\n\\n    @param _projectId The ID of the project to launch funding cycles for.\\n    @param _data Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\\n    @param _terminals Payment terminals to add for the project.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return configuration The configuration of the funding cycle that was successfully created.\\n  */\\n  function launchFundingCyclesFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] calldata _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string memory _memo\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)\\n    returns (uint256 configuration)\\n  {\\n    // If there is a previous configuration, reconfigureFundingCyclesOf should be called instead\\n    if (fundingCycleStore.latestConfigurationOf(_projectId) > 0)\\n      revert FUNDING_CYCLE_ALREADY_LAUNCHED();\\n\\n    // Set this contract as the project's controller in the directory.\\n    directory.setControllerOf(_projectId, address(this));\\n\\n    // Configure the first funding cycle.\\n    configuration = _configure(\\n      _projectId,\\n      _data,\\n      _metadata,\\n      _mustStartAtOrAfter,\\n      _groupedSplits,\\n      _fundAccessConstraints\\n    );\\n\\n    // Add the provided terminals to the list of terminals.\\n    if (_terminals.length > 0) directory.setTerminalsOf(_projectId, _terminals);\\n\\n    emit LaunchFundingCycles(configuration, _projectId, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle's ballot.\\n\\n    @dev\\n    Only a project's owner or a designated operator can configure its funding cycles.\\n\\n    @param _projectId The ID of the project whose funding cycles are being reconfigured.\\n    @param _data Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return configuration The configuration of the funding cycle that was successfully reconfigured.\\n  */\\n  function reconfigureFundingCyclesOf(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] calldata _groupedSplits,\\n    JBFundAccessConstraints[] calldata _fundAccessConstraints,\\n    string calldata _memo\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)\\n    returns (uint256 configuration)\\n  {\\n    // Configure the next funding cycle.\\n    configuration = _configure(\\n      _projectId,\\n      _data,\\n      _metadata,\\n      _mustStartAtOrAfter,\\n      _groupedSplits,\\n      _fundAccessConstraints\\n    );\\n\\n    emit ReconfigureFundingCycles(configuration, _projectId, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Issues an owner's ERC20 JBTokens that'll be used when claiming tokens.\\n\\n    @dev\\n    Deploys a project's ERC20 JBToken contract.\\n\\n    @dev\\n    Only a project's owner or operator can issue its token.\\n\\n    @param _projectId The ID of the project being issued tokens.\\n    @param _name The ERC20's name.\\n    @param _symbol The ERC20's symbol.\\n  */\\n  function issueTokenFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.ISSUE)\\n    returns (IJBToken token)\\n  {\\n    // Issue the token in the store.\\n    return tokenStore.issueFor(_projectId, _name, _symbol);\\n  }\\n\\n  /**\\n    @notice\\n    Swap the current project's token that is minted and burned for another, and transfer ownership of the current token to another address if needed.\\n\\n    @dev\\n    Only a project's owner or operator can change its token.\\n\\n    @param _projectId The ID of the project to which the changed token belongs.\\n    @param _token The new token.\\n    @param _newOwner An address to transfer the current token's ownership to. This is optional, but it cannot be done later.\\n  */\\n  function changeTokenOf(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.CHANGE_TOKEN)\\n  {\\n    // Get a reference to the project's current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // The current funding cycle must not be paused.\\n    if (!_fundingCycle.changeTokenAllowed()) revert CHANGE_TOKEN_NOT_ALLOWED();\\n\\n    // Change the token in the store.\\n    tokenStore.changeFor(_projectId, _token, _newOwner);\\n  }\\n\\n  /**\\n    @notice\\n    Mint new token supply into an account, and optionally reserve a supply to be distributed according to the project's current funding cycle configuration.\\n\\n    @dev\\n    Only a project's owner, a designated operator, or one of its terminals can mint its tokens.\\n\\n    @param _projectId The ID of the project to which the tokens being minted belong.\\n    @param _tokenCount The amount of tokens to mint in total, counting however many should be reserved.\\n    @param _beneficiary The account that the tokens are being minted for.\\n    @param _memo A memo to pass along to the emitted event.\\n    @param _preferClaimedTokens A flag indicating whether a project's attached token contract should be minted if they have been issued.\\n    @param _useReservedRate Whether to use the current funding cycle's reserved rate in the mint calculation.\\n\\n    @return beneficiaryTokenCount The amount of tokens minted for the beneficiary.\\n  */\\n  function mintTokensOf(\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    address _beneficiary,\\n    string calldata _memo,\\n    bool _preferClaimedTokens,\\n    bool _useReservedRate\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermissionAllowingOverride(\\n      projects.ownerOf(_projectId),\\n      _projectId,\\n      JBOperations.MINT,\\n      directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender))\\n    )\\n    returns (uint256 beneficiaryTokenCount)\\n  {\\n    // There should be tokens to mint.\\n    if (_tokenCount == 0) revert ZERO_TOKENS_TO_MINT();\\n\\n    // Define variables that will be needed outside scoped section below.\\n    // Keep a reference to the reserved rate to use\\n    uint256 _reservedRate;\\n\\n    // Scoped section prevents stack too deep. `_fundingCycle` only used within scope.\\n    {\\n      // Get a reference to the project's current funding cycle.\\n      JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n      // If the message sender is not a terminal, the current funding cycle must allow minting.\\n      if (\\n        !_fundingCycle.mintingAllowed() &&\\n        !directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender))\\n      ) revert MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE();\\n\\n      // Determine the reserved rate to use.\\n      _reservedRate = _useReservedRate ? _fundingCycle.reservedRate() : 0;\\n    }\\n\\n    if (_reservedRate == JBConstants.MAX_RESERVED_RATE)\\n      // Subtract the total weighted amount from the tracker so the full reserved token amount can be printed later.\\n      _processedTokenTrackerOf[_projectId] =\\n        _processedTokenTrackerOf[_projectId] -\\n        int256(_tokenCount);\\n    else {\\n      // The unreserved token count that will be minted for the beneficiary.\\n      beneficiaryTokenCount = PRBMath.mulDiv(\\n        _tokenCount,\\n        JBConstants.MAX_RESERVED_RATE - _reservedRate,\\n        JBConstants.MAX_RESERVED_RATE\\n      );\\n\\n      if (_reservedRate == 0)\\n        // If there's no reserved rate, increment the tracker with the newly minted tokens.\\n        _processedTokenTrackerOf[_projectId] =\\n          _processedTokenTrackerOf[_projectId] +\\n          int256(beneficiaryTokenCount);\\n\\n      // Mint the tokens.\\n      tokenStore.mintFor(_beneficiary, _projectId, beneficiaryTokenCount, _preferClaimedTokens);\\n    }\\n\\n    emit MintTokens(\\n      _beneficiary,\\n      _projectId,\\n      _tokenCount,\\n      beneficiaryTokenCount,\\n      _memo,\\n      _reservedRate,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Burns a token holder's supply.\\n\\n    @dev\\n    Only a token's holder, a designated operator, or a project's terminal can burn it.\\n\\n    @param _holder The account that is having its tokens burned.\\n    @param _projectId The ID of the project to which the tokens being burned belong.\\n    @param _tokenCount The number of tokens to burn.\\n    @param _memo A memo to pass along to the emitted event.\\n    @param _preferClaimedTokens A flag indicating whether a project's attached token contract should be burned first if they have been issued.\\n  */\\n  function burnTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    string calldata _memo,\\n    bool _preferClaimedTokens\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermissionAllowingOverride(\\n      _holder,\\n      _projectId,\\n      JBOperations.BURN,\\n      directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender))\\n    )\\n  {\\n    // There should be tokens to burn\\n    if (_tokenCount == 0) revert NO_BURNABLE_TOKENS();\\n\\n    // Get a reference to the project's current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // If the message sender is not a terminal, the current funding cycle must not be paused.\\n    if (\\n      _fundingCycle.burnPaused() &&\\n      !directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender))\\n    ) revert BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE();\\n\\n    // Update the token tracker so that reserved tokens will still be correctly mintable.\\n    _processedTokenTrackerOf[_projectId] =\\n      _processedTokenTrackerOf[_projectId] -\\n      int256(_tokenCount);\\n\\n    // Burn the tokens.\\n    tokenStore.burnFrom(_holder, _projectId, _tokenCount, _preferClaimedTokens);\\n\\n    emit BurnTokens(_holder, _projectId, _tokenCount, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Distributes all outstanding reserved tokens for a project.\\n\\n    @param _projectId The ID of the project to which the reserved tokens belong.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return The amount of minted reserved tokens.\\n  */\\n  function distributeReservedTokensOf(uint256 _projectId, string calldata _memo)\\n    external\\n    virtual\\n    override\\n    returns (uint256)\\n  {\\n    return _distributeReservedTokensOf(_projectId, _memo);\\n  }\\n\\n  /**\\n    @notice\\n    Allows other controllers to signal to this one that a migration is expected for the specified project.\\n\\n    @dev\\n    This controller should not yet be the project's controller.\\n\\n    @param _projectId The ID of the project that will be migrated to this controller.\\n    @param _from The controller being migrated from.\\n  */\\n  function prepForMigrationOf(uint256 _projectId, address _from) external virtual override {\\n    // This controller must not be the project's current controller.\\n    if (directory.controllerOf(_projectId) == address(this))\\n      revert CANT_MIGRATE_TO_CURRENT_CONTROLLER();\\n\\n    // Set the tracker as the total supply.\\n    _processedTokenTrackerOf[_projectId] = int256(tokenStore.totalSupplyOf(_projectId));\\n\\n    emit PrepMigration(_projectId, _from, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Allows a project to migrate from this controller to another.\\n\\n    @dev\\n    Only a project's owner or a designated operator can migrate it.\\n\\n    @param _projectId The ID of the project that will be migrated from this controller.\\n    @param _to The controller to which the project is migrating.\\n  */\\n  function migrate(uint256 _projectId, IJBMigratable _to)\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.MIGRATE_CONTROLLER)\\n  {\\n    // This controller must be the project's current controller.\\n    if (directory.controllerOf(_projectId) != address(this)) revert NOT_CURRENT_CONTROLLER();\\n\\n    // Get a reference to the project's current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // Migration must be allowed.\\n    if (!_fundingCycle.controllerMigrationAllowed()) revert MIGRATION_NOT_ALLOWED();\\n\\n    // All reserved tokens must be minted before migrating.\\n    if (uint256(_processedTokenTrackerOf[_projectId]) != tokenStore.totalSupplyOf(_projectId))\\n      _distributeReservedTokensOf(_projectId, '');\\n\\n    // Make sure the new controller is prepped for the migration.\\n    _to.prepForMigrationOf(_projectId, address(this));\\n\\n    // Set the new controller.\\n    directory.setControllerOf(_projectId, address(_to));\\n\\n    emit Migrate(_projectId, _to, msg.sender);\\n  }\\n\\n  //*********************************************************************//\\n  // --------------------- private helper functions -------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Distributes all outstanding reserved tokens for a project.\\n\\n    @param _projectId The ID of the project to which the reserved tokens belong.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return tokenCount The amount of minted reserved tokens.\\n  */\\n  function _distributeReservedTokensOf(uint256 _projectId, string memory _memo)\\n    private\\n    returns (uint256 tokenCount)\\n  {\\n    // Get the current funding cycle to read the reserved rate from.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // Get a reference to new total supply of tokens before minting reserved tokens.\\n    uint256 _totalTokens = tokenStore.totalSupplyOf(_projectId);\\n\\n    // Get a reference to the number of tokens that need to be minted.\\n    tokenCount = _reservedTokenAmountFrom(\\n      _processedTokenTrackerOf[_projectId],\\n      _fundingCycle.reservedRate(),\\n      _totalTokens\\n    );\\n\\n    // Set the tracker to be the new total supply.\\n    _processedTokenTrackerOf[_projectId] = int256(_totalTokens + tokenCount);\\n\\n    // Get a reference to the project owner.\\n    address _owner = projects.ownerOf(_projectId);\\n\\n    // Distribute tokens to splits and get a reference to the leftover amount to mint after all splits have gotten their share.\\n    uint256 _leftoverTokenCount = tokenCount == 0\\n      ? 0\\n      : _distributeToReservedTokenSplitsOf(\\n        _projectId,\\n        _fundingCycle.configuration,\\n        JBSplitsGroups.RESERVED_TOKENS,\\n        tokenCount\\n      );\\n\\n    // Mint any leftover tokens to the project owner.\\n    if (_leftoverTokenCount > 0) tokenStore.mintFor(_owner, _projectId, _leftoverTokenCount, false);\\n\\n    emit DistributeReservedTokens(\\n      _fundingCycle.configuration,\\n      _fundingCycle.number,\\n      _projectId,\\n      _owner,\\n      tokenCount,\\n      _leftoverTokenCount,\\n      _memo,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Distribute tokens to the splits according to the specified funding cycle configuration.\\n\\n    @param _projectId The ID of the project for which reserved token splits are being distributed.\\n    @param _domain The domain of the splits to distribute the reserved tokens between.\\n    @param _group The group of the splits to distribute the reserved tokens between.\\n    @param _amount The total amount of tokens to mint.\\n\\n    @return leftoverAmount If the splits percents dont add up to 100%, the leftover amount is returned.\\n  */\\n  function _distributeToReservedTokenSplitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group,\\n    uint256 _amount\\n  ) private returns (uint256 leftoverAmount) {\\n    // Set the leftover amount to the initial amount.\\n    leftoverAmount = _amount;\\n\\n    // Get a reference to the project's reserved token splits.\\n    JBSplit[] memory _splits = splitsStore.splitsOf(_projectId, _domain, _group);\\n\\n    //Transfer between all splits.\\n    for (uint256 _i = 0; _i < _splits.length; _i++) {\\n      // Get a reference to the split being iterated on.\\n      JBSplit memory _split = _splits[_i];\\n\\n      // The amount to send towards the split.\\n      uint256 _tokenCount = PRBMath.mulDiv(\\n        _amount,\\n        _split.percent,\\n        JBConstants.SPLITS_TOTAL_PERCENT\\n      );\\n\\n      // Mints tokens for the split if needed.\\n      if (_tokenCount > 0) {\\n        tokenStore.mintFor(\\n          // If an allocator is set in the splits, set it as the beneficiary.\\n          // Otherwise if a projectId is set in the split, set the project's owner as the beneficiary.\\n          // If the split has a beneficiary send to the split's beneficiary. Otherwise send to the msg.sender.\\n          _split.allocator != IJBSplitAllocator(address(0))\\n            ? address(_split.allocator)\\n            : _split.projectId != 0\\n            ? projects.ownerOf(_split.projectId)\\n            : _split.beneficiary != address(0)\\n            ? _split.beneficiary\\n            : msg.sender,\\n          _projectId,\\n          _tokenCount,\\n          _split.preferClaimed\\n        );\\n\\n        // If there's an allocator set, trigger its `allocate` function.\\n        if (_split.allocator != IJBSplitAllocator(address(0)))\\n          _split.allocator.allocate(\\n            JBSplitAllocationData(\\n              address(tokenStore.tokenOf(_projectId)),\\n              _tokenCount,\\n              18,\\n              _projectId,\\n              _group,\\n              _split\\n            )\\n          );\\n\\n        // Subtract from the amount to be sent to the beneficiary.\\n        leftoverAmount = leftoverAmount - _tokenCount;\\n      }\\n\\n      emit DistributeToReservedTokenSplit(\\n        _projectId,\\n        _domain,\\n        _group,\\n        _split,\\n        _tokenCount,\\n        msg.sender\\n      );\\n    }\\n  }\\n\\n  /**\\n    @notice\\n    Configures a funding cycle and stores information pertinent to the configuration.\\n\\n    @param _projectId The ID of the project whose funding cycles are being reconfigured.\\n    @param _data Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\\n\\n    @return configuration The configuration of the funding cycle that was successfully reconfigured.\\n  */\\n  function _configure(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints\\n  ) private returns (uint256) {\\n    // Make sure the provided reserved rate is valid.\\n    if (_metadata.reservedRate > JBConstants.MAX_RESERVED_RATE) revert INVALID_RESERVED_RATE();\\n\\n    // Make sure the provided redemption rate is valid.\\n    if (_metadata.redemptionRate > JBConstants.MAX_REDEMPTION_RATE)\\n      revert INVALID_REDEMPTION_RATE();\\n\\n    // Make sure the provided ballot redemption rate is valid.\\n    if (_metadata.ballotRedemptionRate > JBConstants.MAX_REDEMPTION_RATE)\\n      revert INVALID_BALLOT_REDEMPTION_RATE();\\n\\n    // Configure the funding cycle's properties.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.configureFor(\\n      _projectId,\\n      _data,\\n      JBFundingCycleMetadataResolver.packFundingCycleMetadata(_metadata),\\n      _mustStartAtOrAfter\\n    );\\n\\n    for (uint256 _i; _i < _groupedSplits.length; _i++)\\n      // Set splits for the current group being iterated on if there are any.\\n      if (_groupedSplits[_i].splits.length > 0)\\n        splitsStore.set(\\n          _projectId,\\n          _fundingCycle.configuration,\\n          _groupedSplits[_i].group,\\n          _groupedSplits[_i].splits\\n        );\\n\\n    // Set distribution limits if there are any.\\n    for (uint256 _i; _i < _fundAccessConstraints.length; _i++) {\\n      JBFundAccessConstraints memory _constraints = _fundAccessConstraints[_i];\\n\\n      // If distribution limit value is larger than 232 bits, revert.\\n      if (_constraints.distributionLimit > type(uint232).max) revert INVALID_DISTRIBUTION_LIMIT();\\n\\n      // If distribution limit currency value is larger than 24 bits, revert.\\n      if (_constraints.distributionLimitCurrency > type(uint24).max)\\n        revert INVALID_DISTRIBUTION_LIMIT_CURRENCY();\\n\\n      // If overflow allowance value is larger than 232 bits, revert.\\n      if (_constraints.overflowAllowance > type(uint232).max) revert INVALID_OVERFLOW_ALLOWANCE();\\n\\n      // If overflow allowance currency value is larger than 24 bits, revert.\\n      if (_constraints.overflowAllowanceCurrency > type(uint24).max)\\n        revert INVALID_OVERFLOW_ALLOWANCE_CURRENCY();\\n\\n      // Set the distribution limit if there is one.\\n      if (_constraints.distributionLimit > 0)\\n        _packedDistributionLimitDataOf[_projectId][_fundingCycle.configuration][\\n          _constraints.terminal\\n        ][_constraints.token] =\\n          _constraints.distributionLimit |\\n          (_constraints.distributionLimitCurrency << 232);\\n\\n      // Set the overflow allowance if there is one.\\n      if (_constraints.overflowAllowance > 0)\\n        _packedOverflowAllowanceDataOf[_projectId][_fundingCycle.configuration][\\n          _constraints.terminal\\n        ][_constraints.token] =\\n          _constraints.overflowAllowance |\\n          (_constraints.overflowAllowanceCurrency << 232);\\n\\n      emit SetFundAccessConstraints(\\n        _fundingCycle.configuration,\\n        _fundingCycle.number,\\n        _projectId,\\n        _constraints,\\n        msg.sender\\n      );\\n    }\\n\\n    return _fundingCycle.configuration;\\n  }\\n\\n  /**\\n    @notice\\n    Gets the amount of reserved tokens currently tracked for a project given a reserved rate.\\n\\n    @param _processedTokenTracker The tracker to make the calculation with.\\n    @param _reservedRate The reserved rate to use to make the calculation.\\n    @param _totalEligibleTokens The total amount to make the calculation with.\\n\\n    @return amount reserved token amount.\\n  */\\n  function _reservedTokenAmountFrom(\\n    int256 _processedTokenTracker,\\n    uint256 _reservedRate,\\n    uint256 _totalEligibleTokens\\n  ) private pure returns (uint256) {\\n    // Get a reference to the amount of tokens that are unprocessed.\\n    uint256 _unprocessedTokenBalanceOf = _processedTokenTracker >= 0\\n      ? _totalEligibleTokens - uint256(_processedTokenTracker)\\n      : _totalEligibleTokens + uint256(-_processedTokenTracker);\\n\\n    // If there are no unprocessed tokens, return.\\n    if (_unprocessedTokenBalanceOf == 0) return 0;\\n\\n    // If all tokens are reserved, return the full unprocessed amount.\\n    if (_reservedRate == JBConstants.MAX_RESERVED_RATE) return _unprocessedTokenBalanceOf;\\n\\n    return\\n      PRBMath.mulDiv(\\n        _unprocessedTokenBalanceOf,\\n        JBConstants.MAX_RESERVED_RATE,\\n        JBConstants.MAX_RESERVED_RATE - _reservedRate\\n      ) - _unprocessedTokenBalanceOf;\\n  }\\n}\\n\",\"keccak256\":\"0xd973246573724047755e46ba544712328a0b59b14c143084388ad0f140b06084\",\"license\":\"MIT\"},\"contracts/abstract/JBOperatable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBOperatable.sol';\\n\\n/** \\n  @notice\\n  Modifiers to allow access to functions based on the message sender's operator status.\\n\\n  @dev\\n  Adheres to -\\n  IJBOperatable: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.\\n*/\\nabstract contract JBOperatable is IJBOperatable {\\n  //*********************************************************************//\\n  // --------------------------- custom errors -------------------------- //\\n  //*********************************************************************//\\n  error UNAUTHORIZED();\\n\\n  //*********************************************************************//\\n  // ---------------------------- modifiers ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Only allows the speficied account or an operator of the account to proceed. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n  */\\n  modifier requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) {\\n    _requirePermission(_account, _domain, _permissionIndex);\\n    _;\\n  }\\n\\n  /** \\n    @notice\\n    Only allows the speficied account, an operator of the account to proceed, or a truthy override flag. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n    @param _override A condition to force allowance for.\\n  */\\n  modifier requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) {\\n    _requirePermissionAllowingOverride(_account, _domain, _permissionIndex, _override);\\n    _;\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    A contract storing operator assignments.\\n  */\\n  IJBOperatorStore public immutable override operatorStore;\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _operatorStore A contract storing operator assignments.\\n  */\\n  constructor(IJBOperatorStore _operatorStore) {\\n    operatorStore = _operatorStore;\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- internal views ------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account or has the specified permission.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _permissionIndex The permission index that an operator must have within the specified domain to be allowed.\\n  */\\n  function _requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) internal view {\\n    if (\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account, has the specified permission, or the override condition is true.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _domain The permission index that an operator must have within the specified domain to be allowed.\\n    @param _override The override condition to allow.\\n  */\\n  function _requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) internal view {\\n    if (\\n      !_override &&\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n}\\n\",\"keccak256\":\"0x9a5781d40c6b8013249653253369cda2047aa35329a1fcd4dc6353cd2dde30a6\",\"license\":\"MIT\"},\"contracts/enums/JBBallotState.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nenum JBBallotState {\\n  Active,\\n  Approved,\\n  Failed\\n}\\n\",\"keccak256\":\"0xadf07fd49f7e0947006fa1921bc7fd8fb532e8fecf3b9266721a8b7e43907461\",\"license\":\"MIT\"},\"contracts/interfaces/IJBController.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../structs/JBFundAccessConstraints.sol';\\nimport './../structs/JBFundingCycleData.sol';\\nimport './../structs/JBFundingCycleMetadata.sol';\\nimport './../structs/JBGroupedSplits.sol';\\nimport './../structs/JBProjectMetadata.sol';\\nimport './IJBDirectory.sol';\\nimport './IJBFundingCycleStore.sol';\\nimport './IJBMigratable.sol';\\nimport './IJBPaymentTerminal.sol';\\nimport './IJBSplitsStore.sol';\\nimport './IJBToken.sol';\\nimport './IJBTokenStore.sol';\\n\\ninterface IJBController is IERC165 {\\n  event LaunchProject(uint256 configuration, uint256 projectId, string memo, address caller);\\n\\n  event LaunchFundingCycles(uint256 configuration, uint256 projectId, string memo, address caller);\\n\\n  event ReconfigureFundingCycles(\\n    uint256 configuration,\\n    uint256 projectId,\\n    string memo,\\n    address caller\\n  );\\n\\n  event SetFundAccessConstraints(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    JBFundAccessConstraints constraints,\\n    address caller\\n  );\\n\\n  event DistributeReservedTokens(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    address beneficiary,\\n    uint256 tokenCount,\\n    uint256 beneficiaryTokenCount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event DistributeToReservedTokenSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    uint256 tokenCount,\\n    address caller\\n  );\\n\\n  event MintTokens(\\n    address indexed beneficiary,\\n    uint256 indexed projectId,\\n    uint256 tokenCount,\\n    uint256 beneficiaryTokenCount,\\n    string memo,\\n    uint256 reservedRate,\\n    address caller\\n  );\\n\\n  event BurnTokens(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 tokenCount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event Migrate(uint256 indexed projectId, IJBMigratable to, address caller);\\n\\n  event PrepMigration(uint256 indexed projectId, address from, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function tokenStore() external view returns (IJBTokenStore);\\n\\n  function splitsStore() external view returns (IJBSplitsStore);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function reservedTokenBalanceOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function distributionLimitOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view returns (uint256 distributionLimit, uint256 distributionLimitCurrency);\\n\\n  function overflowAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view returns (uint256 overflowAllowance, uint256 overflowAllowanceCurrency);\\n\\n  function totalOutstandingTokensOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function getFundingCycleOf(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function latestConfiguredFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (\\n      JBFundingCycle memory,\\n      JBFundingCycleMetadata memory metadata,\\n      JBBallotState\\n    );\\n\\n  function currentFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function queuedFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function launchProjectFor(\\n    address _owner,\\n    JBProjectMetadata calldata _projectMetadata,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string calldata _memo\\n  ) external returns (uint256 projectId);\\n\\n  function launchFundingCyclesFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string calldata _memo\\n  ) external returns (uint256 configuration);\\n\\n  function reconfigureFundingCyclesOf(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    string calldata _memo\\n  ) external returns (uint256);\\n\\n  function issueTokenFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  ) external returns (IJBToken token);\\n\\n  function changeTokenOf(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  ) external;\\n\\n  function mintTokensOf(\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    address _beneficiary,\\n    string calldata _memo,\\n    bool _preferClaimedTokens,\\n    bool _useReservedRate\\n  ) external returns (uint256 beneficiaryTokenCount);\\n\\n  function burnTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    string calldata _memo,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function distributeReservedTokensOf(uint256 _projectId, string memory _memo)\\n    external\\n    returns (uint256);\\n\\n  function migrate(uint256 _projectId, IJBMigratable _to) external;\\n}\\n\",\"keccak256\":\"0xa313569eaff79f9443e12878b2efbb4160d50682c0f9e7304c42ecd600c42d96\",\"license\":\"MIT\"},\"contracts/interfaces/IJBDirectory.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBFundingCycleStore.sol';\\nimport './IJBPaymentTerminal.sol';\\nimport './IJBProjects.sol';\\n\\ninterface IJBDirectory {\\n  event SetController(uint256 indexed projectId, address indexed controller, address caller);\\n\\n  event AddTerminal(uint256 indexed projectId, IJBPaymentTerminal indexed terminal, address caller);\\n\\n  event SetTerminals(uint256 indexed projectId, IJBPaymentTerminal[] terminals, address caller);\\n\\n  event SetPrimaryTerminal(\\n    uint256 indexed projectId,\\n    address indexed token,\\n    IJBPaymentTerminal indexed terminal,\\n    address caller\\n  );\\n\\n  event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function controllerOf(uint256 _projectId) external view returns (address);\\n\\n  function isAllowedToSetFirstController(address _address) external view returns (bool);\\n\\n  function terminalsOf(uint256 _projectId) external view returns (IJBPaymentTerminal[] memory);\\n\\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\\n    external\\n    view\\n    returns (bool);\\n\\n  function primaryTerminalOf(uint256 _projectId, address _token)\\n    external\\n    view\\n    returns (IJBPaymentTerminal);\\n\\n  function setControllerOf(uint256 _projectId, address _controller) external;\\n\\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals) external;\\n\\n  function setPrimaryTerminalOf(\\n    uint256 _projectId,\\n    address _token,\\n    IJBPaymentTerminal _terminal\\n  ) external;\\n\\n  function setIsAllowedToSetFirstController(address _address, bool _flag) external;\\n}\\n\",\"keccak256\":\"0x9e7f0d3590b3ddc3b667fcdacaa53b627e4d2b3a912360597fb0ffa413518167\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleBallot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../enums/JBBallotState.sol';\\nimport './IJBFundingCycleStore.sol';\\n\\ninterface IJBFundingCycleBallot is IERC165 {\\n  function duration() external view returns (uint256);\\n\\n  function stateOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _start\\n  ) external view returns (JBBallotState);\\n}\\n\",\"keccak256\":\"0xdc8c8bed613f5759c958b7b0d646032b4337a349a8ecea5ffeb167623f2f29f5\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleDataSource.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../structs/JBPayParamsData.sol';\\nimport './../structs/JBRedeemParamsData.sol';\\nimport './IJBFundingCycleStore.sol';\\nimport './IJBPayDelegate.sol';\\nimport './IJBRedemptionDelegate.sol';\\n\\ninterface IJBFundingCycleDataSource is IERC165 {\\n  function payParams(JBPayParamsData calldata _data)\\n    external\\n    view\\n    returns (\\n      uint256 weight,\\n      string memory memo,\\n      IJBPayDelegate delegate\\n    );\\n\\n  function redeemParams(JBRedeemParamsData calldata _data)\\n    external\\n    view\\n    returns (\\n      uint256 reclaimAmount,\\n      string memory memo,\\n      IJBRedemptionDelegate delegate\\n    );\\n}\\n\",\"keccak256\":\"0x7cba259a6c4177e0977bef12bae28e14ebb7c1fc665e67cd80d71743da4a1e86\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../enums/JBBallotState.sol';\\nimport './../structs/JBFundingCycle.sol';\\nimport './../structs/JBFundingCycleData.sol';\\n\\ninterface IJBFundingCycleStore {\\n  event Configure(\\n    uint256 indexed configuration,\\n    uint256 indexed projectId,\\n    JBFundingCycleData data,\\n    uint256 metadata,\\n    uint256 mustStartAtOrAfter,\\n    address caller\\n  );\\n\\n  event Init(uint256 indexed configuration, uint256 indexed projectId, uint256 indexed basedOn);\\n\\n  function latestConfigurationOf(uint256 _projectId) external view returns (uint256);\\n\\n  function get(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory);\\n\\n  function latestConfiguredOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBBallotState ballotState);\\n\\n  function queuedOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentBallotStateOf(uint256 _projectId) external view returns (JBBallotState);\\n\\n  function configureFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    uint256 _metadata,\\n    uint256 _mustStartAtOrAfter\\n  ) external returns (JBFundingCycle memory fundingCycle);\\n}\\n\",\"keccak256\":\"0xf75791cd5b71bc6773cf56c92501e3f255a406eaedea781cb57cea2fa1e4ef20\",\"license\":\"MIT\"},\"contracts/interfaces/IJBMigratable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBMigratable {\\n  function prepForMigrationOf(uint256 _projectId, address _from) external;\\n}\\n\",\"keccak256\":\"0xd24d7f91e5276f36811695e1e45283947cbd6e5cff912384e5f3e55ef4acadf3\",\"license\":\"MIT\"},\"contracts/interfaces/IJBOperatable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBOperatorStore.sol';\\n\\ninterface IJBOperatable {\\n  function operatorStore() external view returns (IJBOperatorStore);\\n}\\n\",\"keccak256\":\"0x150097e253a667d2336367445bea019bb3669ef7c82d358befe1f4cdd480e9aa\",\"license\":\"MIT\"},\"contracts/interfaces/IJBOperatorStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../structs/JBOperatorData.sol';\\n\\ninterface IJBOperatorStore {\\n  event SetOperator(\\n    address indexed operator,\\n    address indexed account,\\n    uint256 indexed domain,\\n    uint256[] permissionIndexes,\\n    uint256 packed\\n  );\\n\\n  function permissionsOf(\\n    address _operator,\\n    address _account,\\n    uint256 _domain\\n  ) external view returns (uint256);\\n\\n  function hasPermission(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) external view returns (bool);\\n\\n  function hasPermissions(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256[] calldata _permissionIndexes\\n  ) external view returns (bool);\\n\\n  function setOperator(JBOperatorData calldata _operatorData) external;\\n\\n  function setOperators(JBOperatorData[] calldata _operatorData) external;\\n}\\n\",\"keccak256\":\"0x50a26fddc575a50176df7deb9225ec1816b0158c9e9b8555e7921a3261254ed8\",\"license\":\"MIT\"},\"contracts/interfaces/IJBPayDelegate.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../structs/JBDidPayData.sol';\\n\\ninterface IJBPayDelegate is IERC165 {\\n  function didPay(JBDidPayData calldata _data) external;\\n}\\n\",\"keccak256\":\"0xf7a9ef2df665e1c85a461fadb3cd54f6270c181eac96064005bde19e54d0ffa9\",\"license\":\"MIT\"},\"contracts/interfaces/IJBPaymentTerminal.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\n\\ninterface IJBPaymentTerminal is IERC165 {\\n  function acceptsToken(address _token) external view returns (bool);\\n\\n  function currencyForToken(address _token) external view returns (uint256);\\n\\n  function decimalsForToken(address _token) external view returns (uint256);\\n\\n  // Return value must be a fixed point number with 18 decimals.\\n  function currentEthOverflowOf(uint256 _projectId) external view returns (uint256);\\n\\n  function pay(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable returns (uint256 beneficiaryTokenCount);\\n\\n  function addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable;\\n}\\n\",\"keccak256\":\"0x9ed8b16aa84675698784e2106d773d99d2ea85242784531a12f57c07ef10b291\",\"license\":\"MIT\"},\"contracts/interfaces/IJBProjects.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/token/ERC721/IERC721.sol';\\nimport './../structs/JBProjectMetadata.sol';\\nimport './IJBTokenUriResolver.sol';\\n\\ninterface IJBProjects is IERC721 {\\n  event Create(\\n    uint256 indexed projectId,\\n    address indexed owner,\\n    JBProjectMetadata metadata,\\n    address caller\\n  );\\n\\n  event SetMetadata(uint256 indexed projectId, JBProjectMetadata metadata, address caller);\\n\\n  event SetTokenUriResolver(IJBTokenUriResolver indexed resolver, address caller);\\n\\n  function count() external view returns (uint256);\\n\\n  function metadataContentOf(uint256 _projectId, uint256 _domain)\\n    external\\n    view\\n    returns (string memory);\\n\\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\\n\\n  function createFor(address _owner, JBProjectMetadata calldata _metadata)\\n    external\\n    returns (uint256 projectId);\\n\\n  function setMetadataOf(uint256 _projectId, JBProjectMetadata calldata _metadata) external;\\n\\n  function setTokenUriResolver(IJBTokenUriResolver _newResolver) external;\\n}\\n\",\"keccak256\":\"0x602bad7e8cce6e9d53fe5e3532c5d4428d02206f8df48b246aac7ee8a6dcc98d\",\"license\":\"MIT\"},\"contracts/interfaces/IJBRedemptionDelegate.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../structs/JBDidRedeemData.sol';\\n\\ninterface IJBRedemptionDelegate is IERC165 {\\n  function didRedeem(JBDidRedeemData calldata _data) external;\\n}\\n\",\"keccak256\":\"0xfc91761a568e60e1a1429ac11b0d1b57c627ef59f4011b17df4f9f540b7dd60d\",\"license\":\"MIT\"},\"contracts/interfaces/IJBSplitAllocator.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport '../structs/JBSplitAllocationData.sol';\\n\\ninterface IJBSplitAllocator is IERC165 {\\n  function allocate(JBSplitAllocationData calldata _data) external payable;\\n}\\n\",\"keccak256\":\"0x717575a0a4a20f8598f44d22a3fd3e282f34f4b33543a0d4b36ba3b59ed8cd04\",\"license\":\"MIT\"},\"contracts/interfaces/IJBSplitsStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../structs/JBSplit.sol';\\nimport './IJBDirectory.sol';\\nimport './IJBProjects.sol';\\n\\ninterface IJBSplitsStore {\\n  event SetSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    address caller\\n  );\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function splitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group\\n  ) external view returns (JBSplit[] memory);\\n\\n  function set(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group,\\n    JBSplit[] memory _splits\\n  ) external;\\n}\\n\",\"keccak256\":\"0x11951e705a11eda101218c0996816ef39c89d0fde964f42dd67a89d00e4c7c69\",\"license\":\"MIT\"},\"contracts/interfaces/IJBToken.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBToken {\\n  function decimals() external view returns (uint8);\\n\\n  function totalSupply(uint256 _projectId) external view returns (uint256);\\n\\n  function balanceOf(address _account, uint256 _projectId) external view returns (uint256);\\n\\n  function mint(\\n    uint256 _projectId,\\n    address _account,\\n    uint256 _amount\\n  ) external;\\n\\n  function burn(\\n    uint256 _projectId,\\n    address _account,\\n    uint256 _amount\\n  ) external;\\n\\n  function approve(\\n    uint256,\\n    address _spender,\\n    uint256 _amount\\n  ) external;\\n\\n  function transfer(\\n    uint256 _projectId,\\n    address _to,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferFrom(\\n    uint256 _projectId,\\n    address _from,\\n    address _to,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferOwnership(uint256 _projectId, address _newOwner) external;\\n}\\n\",\"keccak256\":\"0xf5ec0861b067a5e58f2bcca44892ea8d4a42ab8a7c95bd4d3bbddad33c8727f5\",\"license\":\"MIT\"},\"contracts/interfaces/IJBTokenStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBProjects.sol';\\nimport './IJBToken.sol';\\n\\ninterface IJBTokenStore {\\n  event Issue(\\n    uint256 indexed projectId,\\n    IJBToken indexed token,\\n    string name,\\n    string symbol,\\n    address caller\\n  );\\n\\n  event Mint(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 amount,\\n    bool tokensWereClaimed,\\n    bool preferClaimedTokens,\\n    address caller\\n  );\\n\\n  event Burn(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 amount,\\n    uint256 initialUnclaimedBalance,\\n    uint256 initialClaimedBalance,\\n    bool preferClaimedTokens,\\n    address caller\\n  );\\n\\n  event Claim(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 initialUnclaimedBalance,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  event ShouldRequireClaim(uint256 indexed projectId, bool indexed flag, address caller);\\n\\n  event Change(\\n    uint256 indexed projectId,\\n    IJBToken indexed newToken,\\n    IJBToken indexed oldToken,\\n    address owner,\\n    address caller\\n  );\\n\\n  event Transfer(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    address indexed recipient,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  function tokenOf(uint256 _projectId) external view returns (IJBToken);\\n\\n  function projectOf(IJBToken _token) external view returns (uint256);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function unclaimedBalanceOf(address _holder, uint256 _projectId) external view returns (uint256);\\n\\n  function unclaimedTotalSupplyOf(uint256 _projectId) external view returns (uint256);\\n\\n  function totalSupplyOf(uint256 _projectId) external view returns (uint256);\\n\\n  function balanceOf(address _holder, uint256 _projectId) external view returns (uint256 _result);\\n\\n  function requireClaimFor(uint256 _projectId) external view returns (bool);\\n\\n  function issueFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  ) external returns (IJBToken token);\\n\\n  function changeFor(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  ) external returns (IJBToken oldToken);\\n\\n  function burnFrom(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function mintFor(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function shouldRequireClaimingFor(uint256 _projectId, bool _flag) external;\\n\\n  function claimFor(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferFrom(\\n    address _holder,\\n    uint256 _projectId,\\n    address _recipient,\\n    uint256 _amount\\n  ) external;\\n}\\n\",\"keccak256\":\"0x2b7a6cdb457e710161079a46683e9804d66d4cc7d18be8f64de25ba7bfadf9ef\",\"license\":\"MIT\"},\"contracts/interfaces/IJBTokenUriResolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBTokenUriResolver {\\n  function getUri(uint256 _projectId) external view returns (string memory tokenUri);\\n}\\n\",\"keccak256\":\"0xa64ece706d7ce399095f403b08383391c089da4995b5ee000b278d93d242a475\",\"license\":\"MIT\"},\"contracts/libraries/JBConstants.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/**\\n  @notice\\n  Global constants used across Juicebox contracts.\\n*/\\nlibrary JBConstants {\\n  uint256 public constant MAX_RESERVED_RATE = 10000;\\n  uint256 public constant MAX_REDEMPTION_RATE = 10000;\\n  uint256 public constant MAX_DISCOUNT_RATE = 1000000000;\\n  uint256 public constant SPLITS_TOTAL_PERCENT = 1000000000;\\n  uint256 public constant MAX_FEE = 1000000000;\\n  uint256 public constant MAX_FEE_DISCOUNT = 1000000000;\\n}\\n\",\"keccak256\":\"0x31517dfd8accf961f247cefd72bf8a76c20747cd8ed65cedf817dd7aa9a0082f\",\"license\":\"MIT\"},\"contracts/libraries/JBFundingCycleMetadataResolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleDataSource.sol';\\nimport './../structs/JBFundingCycleMetadata.sol';\\nimport './JBConstants.sol';\\n\\nlibrary JBFundingCycleMetadataResolver {\\n  function reservedRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    return uint256(uint16(_fundingCycle.metadata >> 8));\\n  }\\n\\n  function redemptionRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 24));\\n  }\\n\\n  function ballotRedemptionRate(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (uint256)\\n  {\\n    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 40));\\n  }\\n\\n  function payPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 56) & 1) == 1;\\n  }\\n\\n  function distributionsPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 57) & 1) == 1;\\n  }\\n\\n  function redeemPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 58) & 1) == 1;\\n  }\\n\\n  function burnPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 59) & 1) == 1;\\n  }\\n\\n  function mintingAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 60) & 1) == 1;\\n  }\\n\\n  function changeTokenAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 61) & 1) == 1;\\n  }\\n\\n  function terminalMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 62) & 1) == 1;\\n  }\\n\\n  function controllerMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 63) & 1) == 1;\\n  }\\n\\n  function setTerminalsAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 64) & 1) == 1;\\n  }\\n\\n  function setControllerAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 65) & 1) == 1;\\n  }\\n\\n  function shouldHoldFees(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 66) & 1) == 1;\\n  }\\n\\n  function useTotalOverflowForRedemptions(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 67) & 1) == 1;\\n  }\\n\\n  function useDataSourceForPay(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return (_fundingCycle.metadata >> 68) & 1 == 1;\\n  }\\n\\n  function useDataSourceForRedeem(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return (_fundingCycle.metadata >> 69) & 1 == 1;\\n  }\\n\\n  function dataSource(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (IJBFundingCycleDataSource)\\n  {\\n    return IJBFundingCycleDataSource(address(uint160(_fundingCycle.metadata >> 70)));\\n  }\\n\\n  /**\\n    @notice\\n    Pack the funding cycle metadata.\\n\\n    @param _metadata The metadata to validate and pack.\\n\\n    @return packed The packed uint256 of all metadata params. The first 8 bits specify the version.\\n  */\\n  function packFundingCycleMetadata(JBFundingCycleMetadata memory _metadata)\\n    internal\\n    pure\\n    returns (uint256 packed)\\n  {\\n    // version 1 in the bits 0-7 (8 bits).\\n    packed = 1;\\n    // reserved rate in bits 8-23 (16 bits).\\n    packed |= _metadata.reservedRate << 8;\\n    // redemption rate in bits 24-39 (16 bits).\\n    // redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.redemptionRate) << 24;\\n    // ballot redemption rate rate in bits 40-55 (16 bits).\\n    // ballot redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.ballotRedemptionRate) << 40;\\n    // pause pay in bit 56.\\n    if (_metadata.pausePay) packed |= 1 << 56;\\n    // pause tap in bit 57.\\n    if (_metadata.pauseDistributions) packed |= 1 << 57;\\n    // pause redeem in bit 58.\\n    if (_metadata.pauseRedeem) packed |= 1 << 58;\\n    // pause burn in bit 59.\\n    if (_metadata.pauseBurn) packed |= 1 << 59;\\n    // allow minting in bit 60.\\n    if (_metadata.allowMinting) packed |= 1 << 60;\\n    // pause change token in bit 61.\\n    if (_metadata.allowChangeToken) packed |= 1 << 61;\\n    // allow terminal migration in bit 62.\\n    if (_metadata.allowTerminalMigration) packed |= 1 << 62;\\n    // allow controller migration in bit 63.\\n    if (_metadata.allowControllerMigration) packed |= 1 << 63;\\n    // allow set terminals in bit 64.\\n    if (_metadata.allowSetTerminals) packed |= 1 << 64;\\n    // allow set controller in bit 65.\\n    if (_metadata.allowSetController) packed |= 1 << 65;\\n    // hold fees in bit 66.\\n    if (_metadata.holdFees) packed |= 1 << 66;\\n    // useTotalOverflowForRedemptions in bit 67.\\n    if (_metadata.useTotalOverflowForRedemptions) packed |= 1 << 67;\\n    // use pay data source in bit 68.\\n    if (_metadata.useDataSourceForPay) packed |= 1 << 68;\\n    // use redeem data source in bit 69.\\n    if (_metadata.useDataSourceForRedeem) packed |= 1 << 69;\\n    // data source address in bits 70-229.\\n    packed |= uint256(uint160(address(_metadata.dataSource))) << 70;\\n  }\\n\\n  /**\\n    @notice\\n    Expand the funding cycle metadata.\\n\\n    @param _fundingCycle The funding cycle having its metadata expanded.\\n\\n    @return metadata The metadata object.\\n  */\\n  function expandMetadata(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (JBFundingCycleMetadata memory metadata)\\n  {\\n    return\\n      JBFundingCycleMetadata(\\n        reservedRate(_fundingCycle),\\n        redemptionRate(_fundingCycle),\\n        ballotRedemptionRate(_fundingCycle),\\n        payPaused(_fundingCycle),\\n        distributionsPaused(_fundingCycle),\\n        redeemPaused(_fundingCycle),\\n        burnPaused(_fundingCycle),\\n        mintingAllowed(_fundingCycle),\\n        changeTokenAllowed(_fundingCycle),\\n        terminalMigrationAllowed(_fundingCycle),\\n        controllerMigrationAllowed(_fundingCycle),\\n        setTerminalsAllowed(_fundingCycle),\\n        setControllerAllowed(_fundingCycle),\\n        shouldHoldFees(_fundingCycle),\\n        useTotalOverflowForRedemptions(_fundingCycle),\\n        useDataSourceForPay(_fundingCycle),\\n        useDataSourceForRedeem(_fundingCycle),\\n        dataSource(_fundingCycle)\\n      );\\n  }\\n}\\n\",\"keccak256\":\"0x1528b01f3482fcab649ea9d0ff27be74e50fdb9dd6a0947687fa90af048aff73\",\"license\":\"MIT\"},\"contracts/libraries/JBOperations.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBOperations {\\n  uint256 public constant RECONFIGURE = 1;\\n  uint256 public constant REDEEM = 2;\\n  uint256 public constant MIGRATE_CONTROLLER = 3;\\n  uint256 public constant MIGRATE_TERMINAL = 4;\\n  uint256 public constant PROCESS_FEES = 5;\\n  uint256 public constant SET_METADATA = 6;\\n  uint256 public constant ISSUE = 7;\\n  uint256 public constant CHANGE_TOKEN = 8;\\n  uint256 public constant MINT = 9;\\n  uint256 public constant BURN = 10;\\n  uint256 public constant CLAIM = 11;\\n  uint256 public constant TRANSFER = 12;\\n  uint256 public constant REQUIRE_CLAIM = 13;\\n  uint256 public constant SET_CONTROLLER = 14;\\n  uint256 public constant SET_TERMINALS = 15;\\n  uint256 public constant SET_PRIMARY_TERMINAL = 16;\\n  uint256 public constant USE_ALLOWANCE = 17;\\n  uint256 public constant SET_SPLITS = 18;\\n}\\n\",\"keccak256\":\"0x828971de3d07c31e294c188335e250ee0b28919dd86f0dd570f89b97cca13932\",\"license\":\"MIT\"},\"contracts/libraries/JBSplitsGroups.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBSplitsGroups {\\n  uint256 public constant ETH_PAYOUT = 1;\\n  uint256 public constant RESERVED_TOKENS = 2;\\n}\\n\",\"keccak256\":\"0x855a78b0411f3b0a0e2d96009e0f910a971d0175d18cbcac9eab1541c8968288\",\"license\":\"MIT\"},\"contracts/structs/JBDidPayData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member payer The address from which the payment originated.\\n  @member projectId The ID of the project for which the payment was made.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectTokenCount The number of project tokens minted for the beneficiary.\\n  @member beneficiary The address to which the tokens were minted.\\n  @member memo The memo that is being emitted alongside the payment.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidPayData {\\n  address payer;\\n  uint256 projectId;\\n  JBTokenAmount amount;\\n  uint256 projectTokenCount;\\n  address beneficiary;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0x1c2cb695993bd3c95f9dd1b164d6db8cb4f9fc2a2f4073005d5b15d8433767a7\",\"license\":\"MIT\"},\"contracts/structs/JBDidRedeemData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project with which the redeemed tokens are associated.\\n  @member projectTokenCount The number of project tokens being redeemed.\\n  @member reclaimedAmount The amount reclaimed from the treasury. Includes the token being reclaimed, the value, the number of decimals included, and the currency of the amount.\\n  @member beneficiary The address to which the reclaimed amount will be sent.\\n  @member memo The memo that is being emitted alongside the redemption.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidRedeemData {\\n  address holder;\\n  uint256 projectId;\\n  uint256 projectTokenCount;\\n  JBTokenAmount reclaimedAmount;\\n  address payable beneficiary;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0xc951e07378af3c71e52680615ba974c5a8e5448fa8275988af4caeb53036d13e\",\"license\":\"MIT\"},\"contracts/structs/JBFundAccessConstraints.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBPaymentTerminal.sol';\\n\\n/** \\n  @member terminal The terminal within which the distribution limit and the overflow allowance applies.\\n  @member token The token for which the fund access constraints apply.\\n  @member distributionLimit The amount of the distribution limit, as a fixed point number with the same number of decimals as the terminal within which the limit applies.\\n  @member distributionLimitCurrency The currency of the distribution limit.\\n  @member overflowAllowance The amount of the allowance, as a fixed point number with the same number of decimals as the terminal within which the allowance applies.\\n  @member overflowAllowanceCurrency The currency of the overflow allowance.\\n*/\\nstruct JBFundAccessConstraints {\\n  IJBPaymentTerminal terminal;\\n  address token;\\n  uint256 distributionLimit;\\n  uint256 distributionLimitCurrency;\\n  uint256 overflowAllowance;\\n  uint256 overflowAllowanceCurrency;\\n}\\n\",\"keccak256\":\"0x47e778e94bec262633c2f9fe69bebd7e76cc8bedf6b3d8ba0481acdf3619cb5f\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycle.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member number The funding cycle number for the cycle's project. Each funding cycle has a number that is an increment of the cycle that directly preceded it. Each project's first funding cycle has a number of 1.\\n  @member configuration The timestamp when the parameters for this funding cycle were configured. This value will stay the same for subsequent funding cycles that roll over from an originally configured cycle.\\n  @member basedOn The `configuration` of the funding cycle that was active when this cycle was created.\\n  @member start The timestamp marking the moment from which the funding cycle is considered active. It is a unix timestamp measured in seconds.\\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n  @member metadata Extra data that can be associated with a funding cycle.\\n*/\\nstruct JBFundingCycle {\\n  uint256 number;\\n  uint256 configuration;\\n  uint256 basedOn;\\n  uint256 start;\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n  uint256 metadata;\\n}\\n\",\"keccak256\":\"0x7e1ee378705e677298b955bd82b7c79b962e1c2e20f840eb8c491aba595e4905\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycleData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n*/\\nstruct JBFundingCycleData {\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n}\\n\",\"keccak256\":\"0xfc1c73d1b01782bbdfdd73d5d25f075e6c33dd37414638b63664063a0d1692cc\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycleMetadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleDataSource.sol';\\n\\n/** \\n  @member reservedRate The reserved rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_RESERVED_RATE`.\\n  @member redemptionRate The redemption rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member ballotRedemptionRate The redemption rate to use during an active ballot of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member pausePay A flag indicating if the pay functionality should be paused during the funding cycle.\\n  @member pauseDistributions A flag indicating if the distribute functionality should be paused during the funding cycle.\\n  @member pauseRedeem A flag indicating if the redeem functionality should be paused during the funding cycle.\\n  @member pauseBurn A flag indicating if the burn functionality should be paused during the funding cycle.\\n  @member allowMinting A flag indicating if the mint functionality should be allowed during the funding cycle.\\n  @member allowChangeToken A flag indicating if changing tokens should be allowed during this funding cycle.\\n  @member allowTerminalMigration A flag indicating if migrating terminals should be allowed during this funding cycle.\\n  @member allowControllerMigration A flag indicating if migrating controllers should be allowed during this funding cycle.\\n  @member allowSetTerminals A flag indicating if setting terminals should be allowed during this funding cycle.\\n  @member allowSetController A flag indicating if setting a new controller should be allowed during this funding cycle.\\n  @member holdFees A flag indicating if fees should be held during this funding cycle.\\n  @member useTotalOverflowForRedemptions A flag indicating if redemptions should use the project's balance held in all terminals instead of the project's local terminal balance from which the redemption is being fulfilled.\\n  @member useDataSourceForPay A flag indicating if the data source should be used for pay transactions during this funding cycle.\\n  @member useDataSourceForRedeem A flag indicating if the data source should be used for redeem transactions during this funding cycle.\\n  @member dataSource The data source to use during this funding cycle.\\n*/\\nstruct JBFundingCycleMetadata {\\n  uint256 reservedRate;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  bool pausePay;\\n  bool pauseDistributions;\\n  bool pauseRedeem;\\n  bool pauseBurn;\\n  bool allowMinting;\\n  bool allowChangeToken;\\n  bool allowTerminalMigration;\\n  bool allowControllerMigration;\\n  bool allowSetTerminals;\\n  bool allowSetController;\\n  bool holdFees;\\n  bool useTotalOverflowForRedemptions;\\n  bool useDataSourceForPay;\\n  bool useDataSourceForRedeem;\\n  IJBFundingCycleDataSource dataSource;\\n}\\n\",\"keccak256\":\"0xd74a9fc88a934fdda70636f5ea16eca87d651414725ef53c4e699e645cf1e0dd\",\"license\":\"MIT\"},\"contracts/structs/JBGroupedSplits.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBSplit.sol';\\n\\n/** \\n  @member group The group indentifier.\\n  @member splits The splits to associate with the group.\\n*/\\nstruct JBGroupedSplits {\\n  uint256 group;\\n  JBSplit[] splits;\\n}\\n\",\"keccak256\":\"0x99e837531ffe541b8dd2eaf97c0c36a32e53ce24aaabac97c5b70dd93e7e86f5\",\"license\":\"MIT\"},\"contracts/structs/JBOperatorData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member operator The address of the operator.\\n  @member domain The domain within which the operator is being given permissions. A domain of 0 is a wildcard domain, which gives an operator access to all domains.\\n  @member permissionIndexes The indexes of the permissions the operator is being given.\\n*/\\nstruct JBOperatorData {\\n  address operator;\\n  uint256 domain;\\n  uint256[] permissionIndexes;\\n}\\n\",\"keccak256\":\"0xc108ff9bbeef8783e332522b8bd1c17bba071c34051de72dc5bfe38dfd39a3a3\",\"license\":\"MIT\"},\"contracts/structs/JBPayParamsData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBPaymentTerminal.sol';\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member terminal The terminal that is facilitating the payment.\\n  @member payer The address from which the payment originated.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectId The ID of the project being paid.\\n  @member weight The weight of the funding cycle during which the payment is being made.\\n  @member reservedRate The reserved rate of the funding cycle during which the payment is being made.\\n  @member memo The memo that was sent alongside the payment.\\n  @member metadata Extra data provided by the payer.\\n*/\\nstruct JBPayParamsData {\\n  IJBPaymentTerminal terminal;\\n  address payer;\\n  JBTokenAmount amount;\\n  uint256 projectId;\\n  uint256 weight;\\n  uint256 reservedRate;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0x00132a0aee8526841953cfd7d954fc7f00c9976c9a3083cacfb6ed108e8baead\",\"license\":\"MIT\"},\"contracts/structs/JBProjectMetadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member content The metadata content.\\n  @member domain The domain within which the metadata applies.\\n*/\\nstruct JBProjectMetadata {\\n  string content;\\n  uint256 domain;\\n}\\n\",\"keccak256\":\"0x5ea56d46d07944aacfe540ee9290f10a70d77b537650a0b28975e2e88fa5b9a4\",\"license\":\"MIT\"},\"contracts/structs/JBRedeemParamsData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBPaymentTerminal.sol';\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member terminal The terminal that is facilitating the redemption.\\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project whos tokens are being redeemed.\\n  @member tokenCount The proposed number of tokens being redeemed, as a fixed point number with 18 decimals.\\n  @member totalSupply The total supply of tokens used in the calculation, as a fixed point number with 18 decimals.\\n  @member overflow The amount of overflow used in the reclaim amount calculation.\\n  @member reclaimAmount The amount that should be reclaimed by the redeemer using the protocol's standard bonding curve redemption formula. Includes the token being reclaimed, the reclaim value, the number of decimals included, and the currency of the reclaim amount.\\n  @member useTotalOverflow If overflow across all of a project's terminals is being used when making redemptions.\\n  @member redemptionRate The redemption rate of the funding cycle during which the redemption is being made.\\n  @member ballotRedemptionRate The ballot redemption rate of the funding cycle during which the redemption is being made.\\n  @member memo The proposed memo that is being emitted alongside the redemption.\\n  @member metadata Extra data provided by the redeemer.\\n*/\\nstruct JBRedeemParamsData {\\n  IJBPaymentTerminal terminal;\\n  address holder;\\n  uint256 projectId;\\n  uint256 tokenCount;\\n  uint256 totalSupply;\\n  uint256 overflow;\\n  JBTokenAmount reclaimAmount;\\n  bool useTotalOverflow;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0x283deeeb3ef16f41d0002f32690ee6dcd3ac9a250fbee02d3b9e3808e172a875\",\"license\":\"MIT\"},\"contracts/structs/JBSplit.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBSplitAllocator.sol';\\n\\n/** \\n  @member preferClaimed A flag that only has effect if a projectId is also specified, and the project has a token contract attached. If so, this flag indicates if the tokens that result from making a payment to the project should be delivered claimed into the beneficiary's wallet, or unclaimed to save gas.\\n  @member preferAddToBalance A flag indicating if a distribution to a project should prefer triggering it's addToBalance function instead of its pay function.\\n  @member percent The percent of the whole group that this split occupies. This number is out of `JBConstants.SPLITS_TOTAL_PERCENT`.\\n  @member projectId The ID of a project. If an allocator is not set but a projectId is set, funds will be sent to the protocol treasury belonging to the project who's ID is specified. Resulting tokens will be routed to the beneficiary with the claimed token preference respected.\\n  @member beneficiary An address. The role the of the beneficary depends on whether or not projectId is specified, and whether or not an allocator is specified. If allocator is set, the beneficiary will be forwarded to the allocator for it to use. If allocator is not set but projectId is set, the beneficiary is the address to which the project's tokens will be sent that result from a payment to it. If neither allocator or projectId are set, the beneficiary is where the funds from the split will be sent.\\n  @member lockedUntil Specifies if the split should be unchangeable until the specified time, with the exception of extending the locked period.\\n  @member allocator If an allocator is specified, funds will be sent to the allocator contract along with all properties of this split.\\n*/\\nstruct JBSplit {\\n  bool preferClaimed;\\n  bool preferAddToBalance;\\n  uint256 percent;\\n  uint256 projectId;\\n  address payable beneficiary;\\n  uint256 lockedUntil;\\n  IJBSplitAllocator allocator;\\n}\\n\",\"keccak256\":\"0x03b5c632ad8c3b273d550bb334735d686fafa673b68ddb27fb77400d0de1eca1\",\"license\":\"MIT\"},\"contracts/structs/JBSplitAllocationData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBSplit.sol';\\n\\n/** \\n  @member token The token being sent to the split allocator.\\n  @member amount The amount being sent to the split allocator, as a fixed point number.\\n  @member decimals The number of decimals in the amount.\\n  @member projectId The project to which the split belongs.\\n  @member group The group to which the split belongs.\\n  @member split The split that caused the allocation.\\n*/\\nstruct JBSplitAllocationData {\\n  address token;\\n  uint256 amount;\\n  uint256 decimals;\\n  uint256 projectId;\\n  uint256 group;\\n  JBSplit split;\\n}\\n\",\"keccak256\":\"0x11f19479dc1d20cc07f52edc994d24b2ac08f8074d03a72ccee68af40f884b02\",\"license\":\"MIT\"},\"contracts/structs/JBTokenAmount.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/* \\n  @member token The token the payment was made in.\\n  @member value The amount of tokens that was paid, as a fixed point number.\\n  @member decimals The number of decimals included in the value fixed point number.\\n  @member currency The expected currency of the value.\\n**/\\nstruct JBTokenAmount {\\n  address token;\\n  uint256 value;\\n  uint256 decimals;\\n  uint256 currency;\\n}\\n\",\"keccak256\":\"0xc606ed3c46a59e2e037897d2d749867919756d01f8e75a495d2dd4e03c3535fc\",\"license\":\"MIT\"},\"prb-math/contracts/PRBMath.sol\":{\"content\":\"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivFixedPointOverflow(uint256 prod1);\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivOverflow(uint256 prod1, uint256 denominator);\\n\\n/// @notice Emitted when one of the inputs is type(int256).min.\\nerror PRBMath__MulDivSignedInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows int256.\\nerror PRBMath__MulDivSignedOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is MIN_SD59x18.\\nerror PRBMathSD59x18__AbsInputTooSmall();\\n\\n/// @notice Emitted when ceiling a number overflows SD59x18.\\nerror PRBMathSD59x18__CeilOverflow(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__DivInputTooSmall();\\n\\n/// @notice Emitted when one of the intermediary unsigned results overflows SD59x18.\\nerror PRBMathSD59x18__DivOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathSD59x18__ExpInputTooBig(int256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathSD59x18__Exp2InputTooBig(int256 x);\\n\\n/// @notice Emitted when flooring a number underflows SD59x18.\\nerror PRBMathSD59x18__FloorUnderflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format overflows SD59x18.\\nerror PRBMathSD59x18__FromIntOverflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format underflows SD59x18.\\nerror PRBMathSD59x18__FromIntUnderflow(int256 x);\\n\\n/// @notice Emitted when the product of the inputs is negative.\\nerror PRBMathSD59x18__GmNegativeProduct(int256 x, int256 y);\\n\\n/// @notice Emitted when multiplying the inputs overflows SD59x18.\\nerror PRBMathSD59x18__GmOverflow(int256 x, int256 y);\\n\\n/// @notice Emitted when the input is less than or equal to zero.\\nerror PRBMathSD59x18__LogInputTooSmall(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__MulInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__MulOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__PowuOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is negative.\\nerror PRBMathSD59x18__SqrtNegativeInput(int256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows SD59x18.\\nerror PRBMathSD59x18__SqrtOverflow(int256 x);\\n\\n/// @notice Emitted when addition overflows UD60x18.\\nerror PRBMathUD60x18__AddOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when ceiling a number overflows UD60x18.\\nerror PRBMathUD60x18__CeilOverflow(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathUD60x18__ExpInputTooBig(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathUD60x18__Exp2InputTooBig(uint256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format format overflows UD60x18.\\nerror PRBMathUD60x18__FromUintOverflow(uint256 x);\\n\\n/// @notice Emitted when multiplying the inputs overflows UD60x18.\\nerror PRBMathUD60x18__GmOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when the input is less than 1.\\nerror PRBMathUD60x18__LogInputTooSmall(uint256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows UD60x18.\\nerror PRBMathUD60x18__SqrtOverflow(uint256 x);\\n\\n/// @notice Emitted when subtraction underflows UD60x18.\\nerror PRBMathUD60x18__SubUnderflow(uint256 x, uint256 y);\\n\\n/// @dev Common mathematical functions used in both PRBMathSD59x18 and PRBMathUD60x18. Note that this shared library\\n/// does not always assume the signed 59.18-decimal fixed-point or the unsigned 60.18-decimal fixed-point\\n/// representation. When it does not, it is explicitly mentioned in the NatSpec documentation.\\nlibrary PRBMath {\\n    /// STRUCTS ///\\n\\n    struct SD59x18 {\\n        int256 value;\\n    }\\n\\n    struct UD60x18 {\\n        uint256 value;\\n    }\\n\\n    /// STORAGE ///\\n\\n    /// @dev How many trailing decimals can be represented.\\n    uint256 internal constant SCALE = 1e18;\\n\\n    /// @dev Largest power of two divisor of SCALE.\\n    uint256 internal constant SCALE_LPOTD = 262144;\\n\\n    /// @dev SCALE inverted mod 2^256.\\n    uint256 internal constant SCALE_INVERSE =\\n        78156646155174841979727994598816262306175212592076161876661_508869554232690281;\\n\\n    /// FUNCTIONS ///\\n\\n    /// @notice Calculates the binary exponent of x using the binary fraction method.\\n    /// @dev Has to use 192.64-bit fixed-point numbers.\\n    /// See https://ethereum.stackexchange.com/a/96594/24693.\\n    /// @param x The exponent as an unsigned 192.64-bit fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function exp2(uint256 x) internal pure returns (uint256 result) {\\n        unchecked {\\n            // Start from 0.5 in the 192.64-bit fixed-point format.\\n            result = 0x800000000000000000000000000000000000000000000000;\\n\\n            // Multiply the result by root(2, 2^-i) when the bit at position i is 1. None of the intermediary results overflows\\n            // because the initial result is 2^191 and all magic factors are less than 2^65.\\n            if (x & 0x8000000000000000 > 0) {\\n                result = (result * 0x16A09E667F3BCC909) >> 64;\\n            }\\n            if (x & 0x4000000000000000 > 0) {\\n                result = (result * 0x1306FE0A31B7152DF) >> 64;\\n            }\\n            if (x & 0x2000000000000000 > 0) {\\n                result = (result * 0x1172B83C7D517ADCE) >> 64;\\n            }\\n            if (x & 0x1000000000000000 > 0) {\\n                result = (result * 0x10B5586CF9890F62A) >> 64;\\n            }\\n            if (x & 0x800000000000000 > 0) {\\n                result = (result * 0x1059B0D31585743AE) >> 64;\\n            }\\n            if (x & 0x400000000000000 > 0) {\\n                result = (result * 0x102C9A3E778060EE7) >> 64;\\n            }\\n            if (x & 0x200000000000000 > 0) {\\n                result = (result * 0x10163DA9FB33356D8) >> 64;\\n            }\\n            if (x & 0x100000000000000 > 0) {\\n                result = (result * 0x100B1AFA5ABCBED61) >> 64;\\n            }\\n            if (x & 0x80000000000000 > 0) {\\n                result = (result * 0x10058C86DA1C09EA2) >> 64;\\n            }\\n            if (x & 0x40000000000000 > 0) {\\n                result = (result * 0x1002C605E2E8CEC50) >> 64;\\n            }\\n            if (x & 0x20000000000000 > 0) {\\n                result = (result * 0x100162F3904051FA1) >> 64;\\n            }\\n            if (x & 0x10000000000000 > 0) {\\n                result = (result * 0x1000B175EFFDC76BA) >> 64;\\n            }\\n            if (x & 0x8000000000000 > 0) {\\n                result = (result * 0x100058BA01FB9F96D) >> 64;\\n            }\\n            if (x & 0x4000000000000 > 0) {\\n                result = (result * 0x10002C5CC37DA9492) >> 64;\\n            }\\n            if (x & 0x2000000000000 > 0) {\\n                result = (result * 0x1000162E525EE0547) >> 64;\\n            }\\n            if (x & 0x1000000000000 > 0) {\\n                result = (result * 0x10000B17255775C04) >> 64;\\n            }\\n            if (x & 0x800000000000 > 0) {\\n                result = (result * 0x1000058B91B5BC9AE) >> 64;\\n            }\\n            if (x & 0x400000000000 > 0) {\\n                result = (result * 0x100002C5C89D5EC6D) >> 64;\\n            }\\n            if (x & 0x200000000000 > 0) {\\n                result = (result * 0x10000162E43F4F831) >> 64;\\n            }\\n            if (x & 0x100000000000 > 0) {\\n                result = (result * 0x100000B1721BCFC9A) >> 64;\\n            }\\n            if (x & 0x80000000000 > 0) {\\n                result = (result * 0x10000058B90CF1E6E) >> 64;\\n            }\\n            if (x & 0x40000000000 > 0) {\\n                result = (result * 0x1000002C5C863B73F) >> 64;\\n            }\\n            if (x & 0x20000000000 > 0) {\\n                result = (result * 0x100000162E430E5A2) >> 64;\\n            }\\n            if (x & 0x10000000000 > 0) {\\n                result = (result * 0x1000000B172183551) >> 64;\\n            }\\n            if (x & 0x8000000000 > 0) {\\n                result = (result * 0x100000058B90C0B49) >> 64;\\n            }\\n            if (x & 0x4000000000 > 0) {\\n                result = (result * 0x10000002C5C8601CC) >> 64;\\n            }\\n            if (x & 0x2000000000 > 0) {\\n                result = (result * 0x1000000162E42FFF0) >> 64;\\n            }\\n            if (x & 0x1000000000 > 0) {\\n                result = (result * 0x10000000B17217FBB) >> 64;\\n            }\\n            if (x & 0x800000000 > 0) {\\n                result = (result * 0x1000000058B90BFCE) >> 64;\\n            }\\n            if (x & 0x400000000 > 0) {\\n                result = (result * 0x100000002C5C85FE3) >> 64;\\n            }\\n            if (x & 0x200000000 > 0) {\\n                result = (result * 0x10000000162E42FF1) >> 64;\\n            }\\n            if (x & 0x100000000 > 0) {\\n                result = (result * 0x100000000B17217F8) >> 64;\\n            }\\n            if (x & 0x80000000 > 0) {\\n                result = (result * 0x10000000058B90BFC) >> 64;\\n            }\\n            if (x & 0x40000000 > 0) {\\n                result = (result * 0x1000000002C5C85FE) >> 64;\\n            }\\n            if (x & 0x20000000 > 0) {\\n                result = (result * 0x100000000162E42FF) >> 64;\\n            }\\n            if (x & 0x10000000 > 0) {\\n                result = (result * 0x1000000000B17217F) >> 64;\\n            }\\n            if (x & 0x8000000 > 0) {\\n                result = (result * 0x100000000058B90C0) >> 64;\\n            }\\n            if (x & 0x4000000 > 0) {\\n                result = (result * 0x10000000002C5C860) >> 64;\\n            }\\n            if (x & 0x2000000 > 0) {\\n                result = (result * 0x1000000000162E430) >> 64;\\n            }\\n            if (x & 0x1000000 > 0) {\\n                result = (result * 0x10000000000B17218) >> 64;\\n            }\\n            if (x & 0x800000 > 0) {\\n                result = (result * 0x1000000000058B90C) >> 64;\\n            }\\n            if (x & 0x400000 > 0) {\\n                result = (result * 0x100000000002C5C86) >> 64;\\n            }\\n            if (x & 0x200000 > 0) {\\n                result = (result * 0x10000000000162E43) >> 64;\\n            }\\n            if (x & 0x100000 > 0) {\\n                result = (result * 0x100000000000B1721) >> 64;\\n            }\\n            if (x & 0x80000 > 0) {\\n                result = (result * 0x10000000000058B91) >> 64;\\n            }\\n            if (x & 0x40000 > 0) {\\n                result = (result * 0x1000000000002C5C8) >> 64;\\n            }\\n            if (x & 0x20000 > 0) {\\n                result = (result * 0x100000000000162E4) >> 64;\\n            }\\n            if (x & 0x10000 > 0) {\\n                result = (result * 0x1000000000000B172) >> 64;\\n            }\\n            if (x & 0x8000 > 0) {\\n                result = (result * 0x100000000000058B9) >> 64;\\n            }\\n            if (x & 0x4000 > 0) {\\n                result = (result * 0x10000000000002C5D) >> 64;\\n            }\\n            if (x & 0x2000 > 0) {\\n                result = (result * 0x1000000000000162E) >> 64;\\n            }\\n            if (x & 0x1000 > 0) {\\n                result = (result * 0x10000000000000B17) >> 64;\\n            }\\n            if (x & 0x800 > 0) {\\n                result = (result * 0x1000000000000058C) >> 64;\\n            }\\n            if (x & 0x400 > 0) {\\n                result = (result * 0x100000000000002C6) >> 64;\\n            }\\n            if (x & 0x200 > 0) {\\n                result = (result * 0x10000000000000163) >> 64;\\n            }\\n            if (x & 0x100 > 0) {\\n                result = (result * 0x100000000000000B1) >> 64;\\n            }\\n            if (x & 0x80 > 0) {\\n                result = (result * 0x10000000000000059) >> 64;\\n            }\\n            if (x & 0x40 > 0) {\\n                result = (result * 0x1000000000000002C) >> 64;\\n            }\\n            if (x & 0x20 > 0) {\\n                result = (result * 0x10000000000000016) >> 64;\\n            }\\n            if (x & 0x10 > 0) {\\n                result = (result * 0x1000000000000000B) >> 64;\\n            }\\n            if (x & 0x8 > 0) {\\n                result = (result * 0x10000000000000006) >> 64;\\n            }\\n            if (x & 0x4 > 0) {\\n                result = (result * 0x10000000000000003) >> 64;\\n            }\\n            if (x & 0x2 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n            if (x & 0x1 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n\\n            // We're doing two things at the same time:\\n            //\\n            //   1. Multiply the result by 2^n + 1, where \\\"2^n\\\" is the integer part and the one is added to account for\\n            //      the fact that we initially set the result to 0.5. This is accomplished by subtracting from 191\\n            //      rather than 192.\\n            //   2. Convert the result to the unsigned 60.18-decimal fixed-point format.\\n            //\\n            // This works because 2^(191-ip) = 2^ip / 2^191, where \\\"ip\\\" is the integer part \\\"2^n\\\".\\n            result *= SCALE;\\n            result >>= (191 - (x >> 64));\\n        }\\n    }\\n\\n    /// @notice Finds the zero-based index of the first one in the binary representation of x.\\n    /// @dev See the note on msb in the \\\"Find First Set\\\" Wikipedia article https://en.wikipedia.org/wiki/Find_first_set\\n    /// @param x The uint256 number for which to find the index of the most significant bit.\\n    /// @return msb The index of the most significant bit as an uint256.\\n    function mostSignificantBit(uint256 x) internal pure returns (uint256 msb) {\\n        if (x >= 2**128) {\\n            x >>= 128;\\n            msb += 128;\\n        }\\n        if (x >= 2**64) {\\n            x >>= 64;\\n            msb += 64;\\n        }\\n        if (x >= 2**32) {\\n            x >>= 32;\\n            msb += 32;\\n        }\\n        if (x >= 2**16) {\\n            x >>= 16;\\n            msb += 16;\\n        }\\n        if (x >= 2**8) {\\n            x >>= 8;\\n            msb += 8;\\n        }\\n        if (x >= 2**4) {\\n            x >>= 4;\\n            msb += 4;\\n        }\\n        if (x >= 2**2) {\\n            x >>= 2;\\n            msb += 2;\\n        }\\n        if (x >= 2**1) {\\n            // No need to shift x any more.\\n            msb += 1;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev Credit to Remco Bloemen under MIT license https://xn--2-umb.com/21/muldiv.\\n    ///\\n    /// Requirements:\\n    /// - The denominator cannot be zero.\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The multiplicand as an uint256.\\n    /// @param y The multiplier as an uint256.\\n    /// @param denominator The divisor as an uint256.\\n    /// @return result The result as an uint256.\\n    function mulDiv(\\n        uint256 x,\\n        uint256 y,\\n        uint256 denominator\\n    ) internal pure returns (uint256 result) {\\n        // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n        // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n        // variables such that product = prod1 * 2^256 + prod0.\\n        uint256 prod0; // Least significant 256 bits of the product\\n        uint256 prod1; // Most significant 256 bits of the product\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        // Handle non-overflow cases, 256 by 256 division.\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = prod0 / denominator;\\n            }\\n            return result;\\n        }\\n\\n        // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n        if (prod1 >= denominator) {\\n            revert PRBMath__MulDivOverflow(prod1, denominator);\\n        }\\n\\n        ///////////////////////////////////////////////\\n        // 512 by 256 division.\\n        ///////////////////////////////////////////////\\n\\n        // Make division exact by subtracting the remainder from [prod1 prod0].\\n        uint256 remainder;\\n        assembly {\\n            // Compute remainder using mulmod.\\n            remainder := mulmod(x, y, denominator)\\n\\n            // Subtract 256 bit number from 512 bit number.\\n            prod1 := sub(prod1, gt(remainder, prod0))\\n            prod0 := sub(prod0, remainder)\\n        }\\n\\n        // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n        // See https://cs.stackexchange.com/q/138556/92363.\\n        unchecked {\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 lpotdod = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by lpotdod.\\n                denominator := div(denominator, lpotdod)\\n\\n                // Divide [prod1 prod0] by lpotdod.\\n                prod0 := div(prod0, lpotdod)\\n\\n                // Flip lpotdod such that it is 2^256 / lpotdod. If lpotdod is zero, then it becomes one.\\n                lpotdod := add(div(sub(0, lpotdod), lpotdod), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * lpotdod;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel's lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don't need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f71e18) with full precision.\\n    ///\\n    /// @dev Variant of \\\"mulDiv\\\" with constant folding, i.e. in which the denominator is always 1e18. Before returning the\\n    /// final result, we add 1 if (x * y) % SCALE >= HALF_SCALE. Without this, 6.6e-19 would be truncated to 0 instead of\\n    /// being rounded to 1e-18.  See \\\"Listing 6\\\" and text above it at https://accu.org/index.php/journals/1717.\\n    ///\\n    /// Requirements:\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - The body is purposely left uncommented; see the NatSpec comments in \\\"PRBMath.mulDiv\\\" to understand how this works.\\n    /// - It is assumed that the result can never be type(uint256).max when x and y solve the following two equations:\\n    ///     1. x * y = type(uint256).max * SCALE\\n    ///     2. (x * y) % SCALE >= SCALE / 2\\n    ///\\n    /// @param x The multiplicand as an unsigned 60.18-decimal fixed-point number.\\n    /// @param y The multiplier as an unsigned 60.18-decimal fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function mulDivFixedPoint(uint256 x, uint256 y) internal pure returns (uint256 result) {\\n        uint256 prod0;\\n        uint256 prod1;\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        if (prod1 >= SCALE) {\\n            revert PRBMath__MulDivFixedPointOverflow(prod1);\\n        }\\n\\n        uint256 remainder;\\n        uint256 roundUpUnit;\\n        assembly {\\n            remainder := mulmod(x, y, SCALE)\\n            roundUpUnit := gt(remainder, 499999999999999999)\\n        }\\n\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = (prod0 / SCALE) + roundUpUnit;\\n                return result;\\n            }\\n        }\\n\\n        assembly {\\n            result := add(\\n                mul(\\n                    or(\\n                        div(sub(prod0, remainder), SCALE_LPOTD),\\n                        mul(sub(prod1, gt(remainder, prod0)), add(div(sub(0, SCALE_LPOTD), SCALE_LPOTD), 1))\\n                    ),\\n                    SCALE_INVERSE\\n                ),\\n                roundUpUnit\\n            )\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev An extension of \\\"mulDiv\\\" for signed numbers. Works by computing the signs and the absolute values separately.\\n    ///\\n    /// Requirements:\\n    /// - None of the inputs can be type(int256).min.\\n    /// - The result must fit within int256.\\n    ///\\n    /// @param x The multiplicand as an int256.\\n    /// @param y The multiplier as an int256.\\n    /// @param denominator The divisor as an int256.\\n    /// @return result The result as an int256.\\n    function mulDivSigned(\\n        int256 x,\\n        int256 y,\\n        int256 denominator\\n    ) internal pure returns (int256 result) {\\n        if (x == type(int256).min || y == type(int256).min || denominator == type(int256).min) {\\n            revert PRBMath__MulDivSignedInputTooSmall();\\n        }\\n\\n        // Get hold of the absolute values of x, y and the denominator.\\n        uint256 ax;\\n        uint256 ay;\\n        uint256 ad;\\n        unchecked {\\n            ax = x < 0 ? uint256(-x) : uint256(x);\\n            ay = y < 0 ? uint256(-y) : uint256(y);\\n            ad = denominator < 0 ? uint256(-denominator) : uint256(denominator);\\n        }\\n\\n        // Compute the absolute value of (x*y)\\u00f7denominator. The result must fit within int256.\\n        uint256 rAbs = mulDiv(ax, ay, ad);\\n        if (rAbs > uint256(type(int256).max)) {\\n            revert PRBMath__MulDivSignedOverflow(rAbs);\\n        }\\n\\n        // Get the signs of x, y and the denominator.\\n        uint256 sx;\\n        uint256 sy;\\n        uint256 sd;\\n        assembly {\\n            sx := sgt(x, sub(0, 1))\\n            sy := sgt(y, sub(0, 1))\\n            sd := sgt(denominator, sub(0, 1))\\n        }\\n\\n        // XOR over sx, sy and sd. This is checking whether there are one or three negative signs in the inputs.\\n        // If yes, the result should be negative.\\n        result = sx ^ sy ^ sd == 0 ? -int256(rAbs) : int256(rAbs);\\n    }\\n\\n    /// @notice Calculates the square root of x, rounding down.\\n    /// @dev Uses the Babylonian method https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The uint256 number for which to calculate the square root.\\n    /// @return result The result as an uint256.\\n    function sqrt(uint256 x) internal pure returns (uint256 result) {\\n        if (x == 0) {\\n            return 0;\\n        }\\n\\n        // Set the initial guess to the closest power of two that is higher than x.\\n        uint256 xAux = uint256(x);\\n        result = 1;\\n        if (xAux >= 0x100000000000000000000000000000000) {\\n            xAux >>= 128;\\n            result <<= 64;\\n        }\\n        if (xAux >= 0x10000000000000000) {\\n            xAux >>= 64;\\n            result <<= 32;\\n        }\\n        if (xAux >= 0x100000000) {\\n            xAux >>= 32;\\n            result <<= 16;\\n        }\\n        if (xAux >= 0x10000) {\\n            xAux >>= 16;\\n            result <<= 8;\\n        }\\n        if (xAux >= 0x100) {\\n            xAux >>= 8;\\n            result <<= 4;\\n        }\\n        if (xAux >= 0x10) {\\n            xAux >>= 4;\\n            result <<= 2;\\n        }\\n        if (xAux >= 0x8) {\\n            result <<= 1;\\n        }\\n\\n        // The operations can never overflow because the result is max 2^127 when it enters this block.\\n        unchecked {\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1; // Seven iterations should be enough\\n            uint256 roundedDownResult = x / result;\\n            return result >= roundedDownResult ? roundedDownResult : result;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x62cbabae4910e168e99b9c2c3e3b5c9c7ad5e7abd961dcc63b7ea3d83d8ea87e\",\"license\":\"Unlicense\"}},\"version\":1}",
  "bytecode": "0x6101406040523480156200001257600080fd5b506040516200621638038062006216833981016040819052620000359162000076565b6001600160601b0319606096871b811660805294861b851660a05292851b84166101205290841b831660c052831b821660e05290911b166101005262000123565b60008060008060008060c087890312156200009057600080fd5b86516200009d816200010a565b6020880151909650620000b0816200010a565b6040880151909550620000c3816200010a565b6060880151909450620000d6816200010a565b6080880151909350620000e9816200010a565b60a0880151909250620000fc816200010a565b809150509295509295509295565b6001600160a01b03811681146200012057600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c615f3a620002dc6000396000818161044c0152818161088f01528181610a5c015281816112bb015281816115bb0152818161194901528181611c7401528181611e59015281816126360152818161275201528181612a1b0152612a9d0152600081816102610152818161352001526140480152600081816102fa01528181610bab015281816111ef015281816113b2015281816117bb01528181612005015281816122e00152818161249901528181612c07015281816139fa01528181613bfe0152818161415e01526143740152600081816102d3015281816107b00152818161097e01528181610f1e015281816110c3015281816116b401528181611b3501528181611d7a015281816122080152818161291f0152818161343801526139350152600081816103d801528181610c9b01528181610ff4015281816114d801528181611b96015281816123bf015281816125750152818161283b01528181613aea01526141f801526000818161041201528181612fbd01528181613099015281816131cc01526132a80152615f3a6000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80638776c499116100ee578063c41c2f2411610097578063dff3bd6c11610071578063dff3bd6c14610494578063e867c59c146104a7578063e8db2130146104ba578063f033b3b41461053657600080fd5b8063c41c2f2414610447578063d10130731461046e578063df89c3c11461048157600080fd5b8063a40bb9c7116100c8578063a40bb9c7146103fa578063ad007d631461040d578063b5f1e34d1461043457600080fd5b80638776c499146103ad5780638ae9c07b146103c05780638b79543c146103d357600080fd5b80632bdfe00411610150578063557e71551161012a578063557e7155146102ce57806361930630146102f55780637a81b5621461031c57600080fd5b80632bdfe0041461025c5780633e8c615b146102a8578063405b84fa146102bb57600080fd5b80631d496dc9116101815780631d496dc9146102065780631f51045314610227578063229bb8241461024957600080fd5b806301ffc9a7146101a857806312b37b14146101d05780631665bc0f146101f1575b600080fd5b6101bb6101b6366004614c56565b610549565b60405190151581526020015b60405180910390f35b6101e36101de366004614e52565b61067a565b6040516101c792919061553b565b6102046101ff366004614aae565b61083e565b005b610219610214366004614fb1565b610c69565b6040519081526020016101c7565b61023a610235366004614e52565b610df6565b6040516101c7939291906155c3565b610204610257366004614ea9565b610fc5565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c7565b6102046102b6366004614e84565b611275565b6102046102c9366004614e84565b6114a9565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b61039861032a366004615229565b600093845260026020908152604080862094865293815283852073ffffffffffffffffffffffffffffffffffffffff9384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b604080519283526020830191909152016101c7565b6101e36103bb366004614e52565b6119ff565b6102196103ce366004615199565b611b64565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b6101e3610408366004615177565b6120cb565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b610219610442366004615177565b612297565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b61028361047c366004614f37565b61238d565b61021961048f366004614984565b612535565b6102196104a2366004615089565b612809565b6102196104b5366004614eeb565b612b76565b6103986104c8366004615229565b600093845260016020908152604080862094865293815283852073ffffffffffffffffffffffffffffffffffffffff9384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b610219610544366004615177565b612bc2565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f73498cea0000000000000000000000000000000000000000000000000000000014806105dc57507fffffffff0000000000000000000000000000000000000000000000000000000082167f3e8c615b00000000000000000000000000000000000000000000000000000000145b8061062857507fffffffff0000000000000000000000000000000000000000000000000000000082167fad007d6300000000000000000000000000000000000000000000000000000000145b8061067457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6106df60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082015290517f5c5500780000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635c550078906024015b6101206040518083038186803b1580156107f457600080fd5b505afa158015610808573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082c9190614df7565b915061083782612c9b565b9050915091565b6040517f6e49181f0000000000000000000000000000000000000000000000000000000081526004810186905233602482015286908690600a9073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b1580156108d157600080fd5b505afa1580156108e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109099190614c39565b61091584848484612f39565b8761094c576040517f7b38547b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018a90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b1580156109d657600080fd5b505afa1580156109ea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0e9190614df7565b610100810151909150603b1c6001908116148015610aed57506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523360248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636e49181f9060440160206040518083038186803b158015610ab357600080fd5b505afa158015610ac7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aeb9190614c39565b155b15610b24576040517f78a4871800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008a815260208190526040902054610b3e908a90615b91565b60008b8152602081905260409081902091909155517f906ebd0f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c81166004830152602482018c9052604482018b905287151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063906ebd0f90608401600060405180830381600087803b158015610bef57600080fd5b505af1158015610c03573d6000803e3d6000fd5b50505050898b73ffffffffffffffffffffffffffffffffffffffff167fdf04e13ee4fcd48a81ab2fd114757093740a3efa9b6475d86e05878b4c59d0798b8b8b33604051610c549493929190615781565b60405180910390a35050505050505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018b90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015610cf257600080fd5b505afa158015610d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2a9190614967565b8b6001610d38838383613152565b610da48e8e8e8e8e8e90610d4c9190615c1c565b8d8d808060200260200160405190810160405280939291908181526020016000905b82821015610d9a57610d8b60c08302860136819003810190614c98565b81526020019060010190610d6e565b5050505050613360565b93507f1a08ad37c93969a586fd0605d240c17113b20a9c9ac3847595d0ab425225f6af848f888833604051610ddd95949392919061585c565b60405180910390a15050509a9950505050505050505050565b610e5b60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e0810182905261020081018290526102208101919091526040517febc8ca1f000000000000000000000000000000000000000000000000000000008152600481018490526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063ebc8ca1f906024016101406040518083038186803b158015610f7657600080fd5b505afa158015610f8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fae9190614e14565b9093509050610fbc83612c9b565b91509193909250565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561104b57600080fd5b505afa15801561105f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110839190614967565b836008611091838383613152565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018790526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561111b57600080fd5b505afa15801561112f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111539190614df7565b610100810151909150603d1c60019081161461119b576040517f2ebc601300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f57e4c7780000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff878116602483015286811660448301527f000000000000000000000000000000000000000000000000000000000000000016906357e4c77890606401602060405180830381600087803b15801561123357600080fd5b505af1158015611247573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126b9190614967565b5050505050505050565b6040517f5dd8f6aa00000000000000000000000000000000000000000000000000000000815260048101839052309073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156112fd57600080fd5b505afa158015611311573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113359190614967565b73ffffffffffffffffffffffffffffffffffffffff161415611383576040517ffc2ce25a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906375b0d9cd9060240160206040518083038186803b15801561140957600080fd5b505afa15801561141d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114419190614e6b565b6000838152602081815260409182902092909255805173ffffffffffffffffffffffffffffffffffffffff84168152339281019290925283917ff389f4f5d01fe4903d6a7a63b8790b7bf80d374b6afed808c03795c3b323d4d3910160405180910390a25050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561152f57600080fd5b505afa158015611543573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115679190614967565b826003611575838383613152565b6040517f5dd8f6aa00000000000000000000000000000000000000000000000000000000815260048101869052309073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156115fd57600080fd5b505afa158015611611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116359190614967565b73ffffffffffffffffffffffffffffffffffffffff1614611682576040517fe0a0a87d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018690526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561170c57600080fd5b505afa158015611720573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117449190614df7565b610100810151909150603f1c60019081161461178c576040517f46ace3f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018790527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906375b0d9cd9060240160206040518083038186803b15801561181257600080fd5b505afa158015611826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184a9190614e6b565b600087815260208190526040902054146118795761187786604051806020016040528060008152506138ec565b505b6040517f3e8c615b0000000000000000000000000000000000000000000000000000000081526004810187905230602482015273ffffffffffffffffffffffffffffffffffffffff861690633e8c615b90604401600060405180830381600087803b1580156118e757600080fd5b505af11580156118fb573d6000803e3d6000fd5b50506040517f714e7f320000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff88811660248301527f000000000000000000000000000000000000000000000000000000000000000016925063714e7f329150604401600060405180830381600087803b15801561198f57600080fd5b505af11580156119a3573d6000803e3d6000fd5b50506040805173ffffffffffffffffffffffffffffffffffffffff891681523360208201528993507f01f954abace731a88ab86e71186040cc2be49fe517ea06bc0d24f25b82b8345692500160405180910390a2505050505050565b611a6460405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082015290517f43a266c20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016107db565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018890526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015611bed57600080fd5b505afa158015611c01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c259190614967565b6040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018a9052336024820152899060099073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b158015611cb657600080fd5b505afa158015611cca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cee9190614c39565b611cfa84848484612f39565b8a611d31576040517f9fd13e5400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018d9052600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b158015611dbd57600080fd5b505afa158015611dd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df59190614df7565b610100810151909150603c1c600190811614158015611ed557506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018f905233602482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b158015611e9b57600080fd5b505afa158015611eaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ed39190614c39565b155b15611f0c576040517f9d0ca8fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87611f18576000611f26565b61010081015160081c61ffff165b915050612710811415611f615760008d815260208190526040902054611f4d908d90615b91565b60008e815260208190526040902055612062565b611f798c611f7183612710615c05565b612710613caf565b955080611faa5760008d815260208190526040902054611f9a908790615b05565b60008e8152602081905260409020555b6040517fceddd3e400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c81166004830152602482018f90526044820188905289151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b15801561204957600080fd5b505af115801561205d573d6000803e3d6000fd5b505050505b8c8b73ffffffffffffffffffffffffffffffffffffffff167fe6fee9c572244c0c2238c3112ac12d411750a7ee00eeebd32521c3e5a666c14b8e898e8e87336040516120b3969594939291906158a4565b60405180910390a35050505050979650505050505050565b61213060405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082015290517f669e48aa000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063669e48aa906044016101206040518083038186803b15801561224b57600080fd5b505afa15801561225f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122839190614df7565b915061228e82612c9b565b90509250929050565b6040517f75b0d9cd00000000000000000000000000000000000000000000000000000000815260048101839052600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b15801561232257600080fd5b505afa158015612336573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235a9190614e6b565b60008581526020819052604081205491925090612378908584613db8565b90506123848183615b79565b95945050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018690526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561241657600080fd5b505afa15801561242a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061244e9190614967565b86600761245c838383613152565b6040517fa7f2a70b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063a7f2a70b906124d6908c908c908c908c908c906004016157c2565b602060405180830381600087803b1580156124f057600080fd5b505af1158015612504573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125289190614967565b9998505050505050505050565b6040517f666d87a000000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063666d87a0906125ac908f908f9060040161543f565b602060405180830381600087803b1580156125c657600080fd5b505af11580156125da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fe9190614e6b565b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018290523060248201529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063714e7f3290604401600060405180830381600087803b15801561268f57600080fd5b505af11580156126a3573d6000803e3d6000fd5b50505050600061270b828c8c8c8c8c906126bd9190615c1c565b8b8b808060200260200160405190810160405280939291908181526020016000905b82821015610d9a576126fc60c08302860136819003810190614c98565b815260200190600101906126df565b8451909150156127bc576040517f821b9fd800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063821b9fd890612789908590889060040161572a565b600060405180830381600087803b1580156127a357600080fd5b505af11580156127b7573d6000803e3d6000fd5b505050505b7ff3e6948ba8b32d557363ea08470121c47c0127659aed09320812174d373afef2818385336040516127f194939291906158f3565b60405180910390a1509b9a5050505050505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561289257600080fd5b505afa1580156128a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128ca9190614967565b8a60016128d8838383613152565b6040517f2cee6deb000000000000000000000000000000000000000000000000000000008152600481018e905260009073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690632cee6deb9060240160206040518083038186803b15801561296157600080fd5b505afa158015612975573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129999190614e6b565b11156129d1576040517fffd0bc1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018e905230602482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063714e7f3290604401600060405180830381600087803b158015612a5f57600080fd5b505af1158015612a73573d6000803e3d6000fd5b50505050612a918d8d8d8d8d8d90612a8b9190615c1c565b8c613360565b865190945015612b29577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663821b9fd88e886040518363ffffffff1660e01b8152600401612af692919061572a565b600060405180830381600087803b158015612b1057600080fd5b505af1158015612b24573d6000803e3d6000fd5b505050505b7f8621c3692c18d8ddd4cd26457d6a3e1d916e7001c4243a6c8dfa862a7e10a823848e8733604051612b5e94939291906158f3565b60405180910390a15050509998505050505050505050565b6000612bb88484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506138ec92505050565b90505b9392505050565b6000828152602081905260408082205490517f75b0d9cd00000000000000000000000000000000000000000000000000000000815260048101859052612bbb919084907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906375b0d9cd9060240160206040518083038186803b158015612c5e57600080fd5b505afa158015612c72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c969190614e6b565b613db8565b6040805161024081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081018290526102008101829052610220810191909152604080516102408101909152610100830151819060081c61ffff168152602001612d5584613e29565b8152602001612d6384613e46565b8152602001612d7f846101000151600160389190911c81161490565b15158152602001612d9d846101000151600160399190911c81161490565b15158152602001612dbb8461010001516001603a9190911c81161490565b15158152602001612dd98461010001516001603b9190911c81161490565b15158152602001612df78461010001516001603c9190911c81161490565b15158152602001612e158461010001516001603d9190911c81161490565b15158152602001612e338461010001516001603e9190911c81161490565b15158152602001612e518461010001516001603f9190911c81161490565b15158152602001612e6f846101000151600160409190911c81161490565b15158152602001612e8d846101000151600160419190911c81161490565b15158152602001612eab846101000151600160429190911c81161490565b15158152602001612ec9846101000151600160439190911c81161490565b15158152602001612ee7846101000151600160449190911c81161490565b15158152602001612f05846101000151600160459190911c81161490565b15158152602001612f1b84610100015160461c90565b73ffffffffffffffffffffffffffffffffffffffff16905292915050565b80158015612f5d57503373ffffffffffffffffffffffffffffffffffffffff851614155b801561303957506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612fff57600080fd5b505afa158015613013573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130379190614c39565b155b801561311557506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156130db57600080fd5b505afa1580156130ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131139190614c39565b155b1561314c576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b3373ffffffffffffffffffffffffffffffffffffffff84161480159061324857506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561320e57600080fd5b505afa158015613222573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132469190614c39565b155b801561332457506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156132ea57600080fd5b505afa1580156132fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133229190614c39565b155b1561335b576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b60006127108535111561339f576040517f5623289500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612710856020013511156133df576040517f9db9ee9300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6127108560400135111561341f576040517fddbf1bc600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a249d4258989613476613471368c90038c018c614cb4565b613e63565b896040518563ffffffff1660e01b815260040161349694939291906157fb565b61012060405180830381600087803b1580156134b157600080fd5b505af11580156134c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134e99190614df7565b905060005b845181101561360057600085828151811061350b5761350b615e73565b6020026020010151602001515111156135ee577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166312e7c4c68a846020015188858151811061357257613572615e73565b60200260200101516000015189868151811061359057613590615e73565b6020026020010151602001516040518563ffffffff1660e01b81526004016135bb9493929190615939565b600060405180830381600087803b1580156135d557600080fd5b505af11580156135e9573d6000803e3d6000fd5b505050505b806135f881615da3565b9150506134ee565b5060005b83518110156138dc57600084828151811061362157613621615e73565b602002602001015190507cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff801681604001511115613688576040517fa9b8fbcf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606081015162ffffff10156136c9576040517f9583faed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101517cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1015613724576040517f5730278300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a081015162ffffff1015613765576040517fd9b93c2500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040810151156137cf57606081015160408083015160008d8152600160209081528382208882015183528152838220865173ffffffffffffffffffffffffffffffffffffffff908116845290825284832082880151909116835290529190912060e89290921b1790555b6080810151156138395760a0810151608082015160008c81526002602090815260408083208883015184528252808320865173ffffffffffffffffffffffffffffffffffffffff9081168552908352818420838801519091168452909152902060e89290921b1790555b825160208085015160408051855173ffffffffffffffffffffffffffffffffffffffff90811682528685015116938101939093528085015190830152606080850151908301526080808501519083015260a080850151908301523360c08301528c92917f8a1c80ab9ab05d6bf02096dd94aa2fa05a9de212e793835a50dd5ffe8d8cbab89060e00160405180910390a450806138d481615da3565b915050613604565b5060200151979650505050505050565b6040517f43a266c200000000000000000000000000000000000000000000000000000000815260048101839052600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b15801561397857600080fd5b505afa15801561398c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139b09190614df7565b6040517f75b0d9cd0000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b158015613a3c57600080fd5b505afa158015613a50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a749190614e6b565b600086815260208190526040902054610100840151919250613a9d9160081c61ffff1683613db8565b9250613aa98382615b79565b6000868152602081905260408082209290925590517f6352211e000000000000000000000000000000000000000000000000000000008152600481018790527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015613b4157600080fd5b505afa158015613b55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613b799190614967565b905060008415613b9957613b94878560200151600288614006565b613b9c565b60005b90508015613c5b576040517fceddd3e400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820189905260448201839052600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b158015613c4257600080fd5b505af1158015613c56573d6000803e3d6000fd5b505050505b86846000015185602001517fb12d7a78048433f69fe6d30145bf08aad8e82985b96e4db6d5c6a7e94d57086e8589868c33604051613c9d9594939291906154ea565b60405180910390a45050505092915050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8587098587029250828110838203039150508060001415613d0857838281613cfe57613cfe615e44565b0492505050612bbb565b838110613d4f576040517f773cc18c000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260440160405180910390fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000806000851215613ddc57613dcd85615ddc565b613dd79084615b79565b613de6565b613de68584615c05565b905080613df7576000915050612bbb565b612710841415613e08579050612bbb565b80613e1f81612710613e1a8882615c05565b613caf565b6123849190615c05565b60006018826101000151901c61ffff166127106106749190615c05565b60006028826101000151901c61ffff166127106106749190615c05565b8051602082015160089190911b60011790601890613e8390612710615c05565b901b8117905060288260400151612710613e9d9190615c05565b901b81179050816060015115613eb857670100000000000000175b816080015115613ecd57670200000000000000175b8160a0015115613ee257670400000000000000175b8160c0015115613ef757670800000000000000175b8160e0015115613f0c57671000000000000000175b81610100015115613f2257672000000000000000175b81610120015115613f3857674000000000000000175b81610140015115613f4e57678000000000000000175b81610160015115613f655768010000000000000000175b81610180015115613f7c5768020000000000000000175b816101a0015115613f935768040000000000000000175b816101c0015115613faa5768080000000000000000175b816101e0015115613fc15768100000000000000000175b81610200015115613fd85768200000000000000000175b610220919091015160461b7c3fffffffffffffffffffffffffffffffffffffffc00000000000000000161790565b6040517f69e11cc500000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905281906000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906369e11cc59060640160006040518083038186803b15801561409f57600080fd5b505afa1580156140b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526140f99190810190614b2a565b905060005b815181101561459d57600082828151811061411b5761411b615e73565b60200260200101519050600061413a868360400151633b9aca00613caf565b9050801561454a5760c082015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169163ceddd3e4911661428c5760608401516141c357608084015173ffffffffffffffffffffffffffffffffffffffff166141b95733614292565b8360800151614292565b60608401516040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101919091527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561424f57600080fd5b505afa158015614263573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906142879190614967565b614292565b8360c001515b845160405160e084901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9092166004830152602482018d90526044820185905215156064820152608401600060405180830381600087803b15801561430f57600080fd5b505af1158015614323573d6000803e3d6000fd5b5050505060c082015173ffffffffffffffffffffffffffffffffffffffff161561453d578160c0015173ffffffffffffffffffffffffffffffffffffffff16639d740bfa6040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ea78803f8e6040518263ffffffff1660e01b81526004016143cd91815260200190565b60206040518083038186803b1580156143e557600080fd5b505afa1580156143f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061441d9190614967565b73ffffffffffffffffffffffffffffffffffffffff168152602001848152602001601281526020018c81526020018a8152602001858152506040518263ffffffff1660e01b815260040161450a9190815173ffffffffffffffffffffffffffffffffffffffff90811682526020808401518184015260408085015181850152606080860151818601526080808701518187015260a096870151805115158888015293840151151560c0808801919091529284015160e08701529083015161010086015282015183166101208501529381015161014084015292909201519091166101608201526101800190565b600060405180830381600087803b15801561452457600080fd5b505af1158015614538573d6000803e3d6000fd5b505050505b6145478186615c05565b94505b86888a7f990c1da5d280602f972ae3c429b6dc66a66569875205cc6e67f14e0b3fc4d2ac85853360405161458093929190615691565b60405180910390a45050808061459590615da3565b9150506140fe565b5050949350505050565b80356145b281615ed1565b919050565b600082601f8301126145c857600080fd5b813560206145dd6145d883615ae1565b615a92565b80838252828201915082860187848660051b89010111156145fd57600080fd5b60005b8581101561462557813561461381615ed1565b84529284019290840190600101614600565b5090979650505050505050565b60008083601f84011261464457600080fd5b50813567ffffffffffffffff81111561465c57600080fd5b60208301915083602060c08302850101111561467757600080fd5b9250929050565b600082601f83011261468f57600080fd5b8135602061469f6145d883615ae1565b8281528181019085830160c0808602880185018910156146be57600080fd5b60005b868110156146e5576146d38a8461481e565b855293850193918101916001016146c1565b509198975050505050505050565b60008083601f84011261470557600080fd5b50813567ffffffffffffffff81111561471d57600080fd5b6020830191508360208260051b850101111561467757600080fd5b80356145b281615ef6565b80516145b281615ed1565b60008083601f84011261476057600080fd5b50813567ffffffffffffffff81111561477857600080fd5b60208301915083602082850101111561467757600080fd5b600082601f8301126147a157600080fd5b813567ffffffffffffffff8111156147bb576147bb615ea2565b6147ec60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601615a92565b81815284602083860101111561480157600080fd5b816020850160208301376000918101602001919091529392505050565b600060c0828403121561483057600080fd5b60405160c0810181811067ffffffffffffffff8211171561485357614853615ea2565b604052905080823561486481615ed1565b8152602083013561487481615ed1565b8060208301525060408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b6000608082840312156148bc57600080fd5b50919050565b600061024082840312156148bc57600080fd5b600061012082840312156148e857600080fd5b6148f06159fe565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015261493e60e08301614743565b60e082015261010080830151818301525092915050565b6000604082840312156148bc57600080fd5b60006020828403121561497957600080fd5b8151612bbb81615ed1565b60008060008060008060008060008060006103a08c8e0312156149a657600080fd5b6149af8c6145a7565b9a5067ffffffffffffffff8060208e013511156149cb57600080fd5b6149db8e60208f01358f01614955565b9a506149ea8e60408f016148aa565b99506149f98e60c08f016148c2565b98506103008d01359750806103208e01351115614a1557600080fd5b614a268e6103208f01358f016146f3565b90975095506103408d0135811015614a3d57600080fd5b614a4e8e6103408f01358f01614632565b90955093506103608d0135811015614a6557600080fd5b614a768e6103608f01358f016145b7565b9250806103808e01351115614a8a57600080fd5b50614a9c8d6103808e01358e01614790565b90509295989b509295989b9093969950565b60008060008060008060a08789031215614ac757600080fd5b8635614ad281615ed1565b95506020870135945060408701359350606087013567ffffffffffffffff811115614afc57600080fd5b614b0889828a0161474e565b9094509250506080870135614b1c81615ef6565b809150509295509295509295565b60006020808385031215614b3d57600080fd5b825167ffffffffffffffff811115614b5457600080fd5b8301601f81018513614b6557600080fd5b8051614b736145d882615ae1565b8181528381019083850160e0808502860187018a1015614b9257600080fd5b60009550855b85811015614c2a5781838c031215614bae578687fd5b614bb6615a28565b8351614bc181615ef6565b815283890151614bd081615ef6565b818a01526040848101519082015260608085015190820152608080850151614bf781615ed1565b9082015260a0848101519082015260c080850151614c1481615ed1565b9082015285529387019391810191600101614b98565b50919998505050505050505050565b600060208284031215614c4b57600080fd5b8151612bbb81615ef6565b600060208284031215614c6857600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114612bbb57600080fd5b600060c08284031215614caa57600080fd5b612bbb838361481e565b60006102408284031215614cc757600080fd5b614ccf615a4b565b823581526020830135602082015260408301356040820152614cf360608401614738565b6060820152614d0460808401614738565b6080820152614d1560a08401614738565b60a0820152614d2660c08401614738565b60c0820152614d3760e08401614738565b60e0820152610100614d4a818501614738565b90820152610120614d5c848201614738565b90820152610140614d6e848201614738565b90820152610160614d80848201614738565b90820152610180614d92848201614738565b908201526101a0614da4848201614738565b908201526101c0614db6848201614738565b908201526101e0614dc8848201614738565b90820152610200614dda848201614738565b90820152610220614dec8482016145a7565b908201529392505050565b60006101208284031215614e0a57600080fd5b612bbb83836148d5565b6000806101408385031215614e2857600080fd5b614e3284846148d5565b915061012083015160038110614e4757600080fd5b809150509250929050565b600060208284031215614e6457600080fd5b5035919050565b600060208284031215614e7d57600080fd5b5051919050565b60008060408385031215614e9757600080fd5b823591506020830135614e4781615ed1565b600080600060608486031215614ebe57600080fd5b833592506020840135614ed081615ed1565b91506040840135614ee081615ed1565b809150509250925092565b600080600060408486031215614f0057600080fd5b83359250602084013567ffffffffffffffff811115614f1e57600080fd5b614f2a8682870161474e565b9497909650939450505050565b600080600080600060608688031215614f4f57600080fd5b85359450602086013567ffffffffffffffff80821115614f6e57600080fd5b614f7a89838a0161474e565b90965094506040880135915080821115614f9357600080fd5b50614fa08882890161474e565b969995985093965092949392505050565b6000806000806000806000806000806103608b8d031215614fd157600080fd5b8a359950614fe28c60208d016148aa565b9850614ff18c60a08d016148c2565b97506102e08b013596506103008b013567ffffffffffffffff8082111561501757600080fd5b6150238e838f016146f3565b90985096506103208d013591508082111561503d57600080fd5b6150498e838f01614632565b90965094506103408d013591508082111561506357600080fd5b506150708d828e0161474e565b915080935050809150509295989b9194979a5092959850565b60008060008060008060008060006103808a8c0312156150a857600080fd5b893598506150b98b60208c016148aa565b97506150c88b60a08c016148c2565b96506102e08a013595506103008a013567ffffffffffffffff808211156150ee57600080fd5b6150fa8d838e016146f3565b90975095506103208c013591508082111561511457600080fd5b6151208d838e0161467e565b94506103408c013591508082111561513757600080fd5b6151438d838e016145b7565b93506103608c013591508082111561515a57600080fd5b506151678c828d01614790565b9150509295985092959850929598565b6000806040838503121561518a57600080fd5b50508035926020909101359150565b600080600080600080600060c0888a0312156151b457600080fd5b873596506020880135955060408801356151cd81615ed1565b9450606088013567ffffffffffffffff8111156151e957600080fd5b6151f58a828b0161474e565b909550935050608088013561520981615ef6565b915060a088013561521981615ef6565b8091505092959891949750929550565b6000806000806080858703121561523f57600080fd5b8435935060208501359250604085013561525881615ed1565b9150606085013561526881615ed1565b939692955090935050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000815180845260005b818110156152e2576020818501810151868301820152016152c6565b818111156152f4576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8051825260208101516020830152604081015160408301526060810151615352606084018215159052565b506080810151615366608084018215159052565b5060a081015161537a60a084018215159052565b5060c081015161538e60c084018215159052565b5060e08101516153a260e084018215159052565b5061010081810151151590830152610120808201511515908301526101408082015115159083015261016080820151151590830152610180808201511515908301526101a0808201511515908301526101c0808201511515908301526101e080820151151590830152610200808201511515908301526102208082015173ffffffffffffffffffffffffffffffffffffffff81168285015261314c565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261549357600080fd5b8301803567ffffffffffffffff8111156154ac57600080fd5b8036038513156154bb57600080fd5b6040808501526154d2608085018260208501615273565b91505060208401356060840152809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835286602084015285604084015260a0606084015261552660a08401866152bc565b91508084166080840152509695505050505050565b61036081016155b58285805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b612bbb610120830184615327565b610380810161563d8286805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b61564b610120830185615327565b60038310615682577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b82610360830152949350505050565b61012081016156ff82868051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b8360e083015273ffffffffffffffffffffffffffffffffffffffff8316610100830152949350505050565b6000604082018483526020604081850152818551808452606086019150828701935060005b8181101561462557845173ffffffffffffffffffffffffffffffffffffffff168352938301939183019160010161574f565b84815260606020820152600061579b606083018587615273565b905073ffffffffffffffffffffffffffffffffffffffff8316604083015295945050505050565b8581526060602082015260006157dc606083018688615273565b82810360408401526157ef818587615273565b98975050505050505050565b600060e082019050858252843560208301526020850135604083015260408501356060830152606085013561582f81615ed1565b73ffffffffffffffffffffffffffffffffffffffff16608083015260a082019390935260c0015292915050565b85815284602082015260806040820152600061587c608083018587615273565b905073ffffffffffffffffffffffffffffffffffffffff831660608301529695505050505050565b86815285602082015260a0604082015260006158c460a083018688615273565b905083606083015273ffffffffffffffffffffffffffffffffffffffff83166080830152979650505050505050565b84815283602082015260806040820152600061591260808301856152bc565b905073ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060808201868352602086818501528560408501526080606085015281855180845260a086019150828701935060005b818110156159ef576159dc8386518051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b9383019360e0929092019160010161596a565b50909998505050505050505050565b604051610120810167ffffffffffffffff81118282101715615a2257615a22615ea2565b60405290565b60405160e0810167ffffffffffffffff81118282101715615a2257615a22615ea2565b604051610240810167ffffffffffffffff81118282101715615a2257615a22615ea2565b6040805190810167ffffffffffffffff81118282101715615a2257615a22615ea2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715615ad957615ad9615ea2565b604052919050565b600067ffffffffffffffff821115615afb57615afb615ea2565b5060051b60200190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03841381151615615b3f57615b3f615e15565b827f8000000000000000000000000000000000000000000000000000000000000000038412811615615b7357615b73615e15565b50500190565b60008219821115615b8c57615b8c615e15565b500190565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615615bcb57615bcb615e15565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615615bff57615bff615e15565b50500390565b600082821015615c1757615c17615e15565b500390565b6000615c2a6145d884615ae1565b808482526020808301925084368760051b87011115615c4857600080fd5b60005b87811015615d9757813567ffffffffffffffff80821115615c6b57600080fd5b81890191506040808336031215615c8157600080fd5b615c89615a6f565b833581528684013583811115615c9e57600080fd5b939093019236601f850112615cb257600080fd5b83359250615cc26145d884615ae1565b8381528781019085890160e03681880289018c011115615ce157600080fd5b600097505b86881015615d7b57808236031215615cfd57600080fd5b615d05615a28565b8235615d1081615ef6565b8152828c0135615d1f81615ef6565b818d0152828701358782015260608084013590820152608080840135615d4481615ed1565b9082015260a0838101359082015260c080840135615d6181615ed1565b90820152845260019790970196928a019290810190615ce6565b5050828901525088525050509382019390820190600101615c4b565b50919695505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415615dd557615dd5615e15565b5060010190565b60007f8000000000000000000000000000000000000000000000000000000000000000821415615e0e57615e0e615e15565b5060000390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114615ef357600080fd5b50565b8015158114615ef357600080fdfea26469706673582212208861c5b4c6ca9b55b40df8af58dd196cb1f04843de92f07c856ce19c5a4d571464736f6c63430008060033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101a35760003560e01c80638776c499116100ee578063c41c2f2411610097578063dff3bd6c11610071578063dff3bd6c14610494578063e867c59c146104a7578063e8db2130146104ba578063f033b3b41461053657600080fd5b8063c41c2f2414610447578063d10130731461046e578063df89c3c11461048157600080fd5b8063a40bb9c7116100c8578063a40bb9c7146103fa578063ad007d631461040d578063b5f1e34d1461043457600080fd5b80638776c499146103ad5780638ae9c07b146103c05780638b79543c146103d357600080fd5b80632bdfe00411610150578063557e71551161012a578063557e7155146102ce57806361930630146102f55780637a81b5621461031c57600080fd5b80632bdfe0041461025c5780633e8c615b146102a8578063405b84fa146102bb57600080fd5b80631d496dc9116101815780631d496dc9146102065780631f51045314610227578063229bb8241461024957600080fd5b806301ffc9a7146101a857806312b37b14146101d05780631665bc0f146101f1575b600080fd5b6101bb6101b6366004614c56565b610549565b60405190151581526020015b60405180910390f35b6101e36101de366004614e52565b61067a565b6040516101c792919061553b565b6102046101ff366004614aae565b61083e565b005b610219610214366004614fb1565b610c69565b6040519081526020016101c7565b61023a610235366004614e52565b610df6565b6040516101c7939291906155c3565b610204610257366004614ea9565b610fc5565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c7565b6102046102b6366004614e84565b611275565b6102046102c9366004614e84565b6114a9565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b61039861032a366004615229565b600093845260026020908152604080862094865293815283852073ffffffffffffffffffffffffffffffffffffffff9384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b604080519283526020830191909152016101c7565b6101e36103bb366004614e52565b6119ff565b6102196103ce366004615199565b611b64565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b6101e3610408366004615177565b6120cb565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b610219610442366004615177565b612297565b6102837f000000000000000000000000000000000000000000000000000000000000000081565b61028361047c366004614f37565b61238d565b61021961048f366004614984565b612535565b6102196104a2366004615089565b612809565b6102196104b5366004614eeb565b612b76565b6103986104c8366004615229565b600093845260016020908152604080862094865293815283852073ffffffffffffffffffffffffffffffffffffffff9384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b610219610544366004615177565b612bc2565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f73498cea0000000000000000000000000000000000000000000000000000000014806105dc57507fffffffff0000000000000000000000000000000000000000000000000000000082167f3e8c615b00000000000000000000000000000000000000000000000000000000145b8061062857507fffffffff0000000000000000000000000000000000000000000000000000000082167fad007d6300000000000000000000000000000000000000000000000000000000145b8061067457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6106df60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082015290517f5c5500780000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635c550078906024015b6101206040518083038186803b1580156107f457600080fd5b505afa158015610808573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082c9190614df7565b915061083782612c9b565b9050915091565b6040517f6e49181f0000000000000000000000000000000000000000000000000000000081526004810186905233602482015286908690600a9073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b1580156108d157600080fd5b505afa1580156108e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109099190614c39565b61091584848484612f39565b8761094c576040517f7b38547b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018a90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b1580156109d657600080fd5b505afa1580156109ea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0e9190614df7565b610100810151909150603b1c6001908116148015610aed57506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523360248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636e49181f9060440160206040518083038186803b158015610ab357600080fd5b505afa158015610ac7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aeb9190614c39565b155b15610b24576040517f78a4871800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008a815260208190526040902054610b3e908a90615b91565b60008b8152602081905260409081902091909155517f906ebd0f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c81166004830152602482018c9052604482018b905287151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063906ebd0f90608401600060405180830381600087803b158015610bef57600080fd5b505af1158015610c03573d6000803e3d6000fd5b50505050898b73ffffffffffffffffffffffffffffffffffffffff167fdf04e13ee4fcd48a81ab2fd114757093740a3efa9b6475d86e05878b4c59d0798b8b8b33604051610c549493929190615781565b60405180910390a35050505050505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018b90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015610cf257600080fd5b505afa158015610d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2a9190614967565b8b6001610d38838383613152565b610da48e8e8e8e8e8e90610d4c9190615c1c565b8d8d808060200260200160405190810160405280939291908181526020016000905b82821015610d9a57610d8b60c08302860136819003810190614c98565b81526020019060010190610d6e565b5050505050613360565b93507f1a08ad37c93969a586fd0605d240c17113b20a9c9ac3847595d0ab425225f6af848f888833604051610ddd95949392919061585c565b60405180910390a15050509a9950505050505050505050565b610e5b60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e0810182905261020081018290526102208101919091526040517febc8ca1f000000000000000000000000000000000000000000000000000000008152600481018490526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063ebc8ca1f906024016101406040518083038186803b158015610f7657600080fd5b505afa158015610f8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fae9190614e14565b9093509050610fbc83612c9b565b91509193909250565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561104b57600080fd5b505afa15801561105f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110839190614967565b836008611091838383613152565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018790526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561111b57600080fd5b505afa15801561112f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111539190614df7565b610100810151909150603d1c60019081161461119b576040517f2ebc601300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f57e4c7780000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff878116602483015286811660448301527f000000000000000000000000000000000000000000000000000000000000000016906357e4c77890606401602060405180830381600087803b15801561123357600080fd5b505af1158015611247573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126b9190614967565b5050505050505050565b6040517f5dd8f6aa00000000000000000000000000000000000000000000000000000000815260048101839052309073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156112fd57600080fd5b505afa158015611311573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113359190614967565b73ffffffffffffffffffffffffffffffffffffffff161415611383576040517ffc2ce25a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906375b0d9cd9060240160206040518083038186803b15801561140957600080fd5b505afa15801561141d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114419190614e6b565b6000838152602081815260409182902092909255805173ffffffffffffffffffffffffffffffffffffffff84168152339281019290925283917ff389f4f5d01fe4903d6a7a63b8790b7bf80d374b6afed808c03795c3b323d4d3910160405180910390a25050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561152f57600080fd5b505afa158015611543573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115679190614967565b826003611575838383613152565b6040517f5dd8f6aa00000000000000000000000000000000000000000000000000000000815260048101869052309073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156115fd57600080fd5b505afa158015611611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116359190614967565b73ffffffffffffffffffffffffffffffffffffffff1614611682576040517fe0a0a87d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018690526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561170c57600080fd5b505afa158015611720573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117449190614df7565b610100810151909150603f1c60019081161461178c576040517f46ace3f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018790527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906375b0d9cd9060240160206040518083038186803b15801561181257600080fd5b505afa158015611826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184a9190614e6b565b600087815260208190526040902054146118795761187786604051806020016040528060008152506138ec565b505b6040517f3e8c615b0000000000000000000000000000000000000000000000000000000081526004810187905230602482015273ffffffffffffffffffffffffffffffffffffffff861690633e8c615b90604401600060405180830381600087803b1580156118e757600080fd5b505af11580156118fb573d6000803e3d6000fd5b50506040517f714e7f320000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff88811660248301527f000000000000000000000000000000000000000000000000000000000000000016925063714e7f329150604401600060405180830381600087803b15801561198f57600080fd5b505af11580156119a3573d6000803e3d6000fd5b50506040805173ffffffffffffffffffffffffffffffffffffffff891681523360208201528993507f01f954abace731a88ab86e71186040cc2be49fe517ea06bc0d24f25b82b8345692500160405180910390a2505050505050565b611a6460405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082015290517f43a266c20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016107db565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018890526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015611bed57600080fd5b505afa158015611c01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c259190614967565b6040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018a9052336024820152899060099073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b158015611cb657600080fd5b505afa158015611cca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cee9190614c39565b611cfa84848484612f39565b8a611d31576040517f9fd13e5400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018d9052600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b158015611dbd57600080fd5b505afa158015611dd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df59190614df7565b610100810151909150603c1c600190811614158015611ed557506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018f905233602482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b158015611e9b57600080fd5b505afa158015611eaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ed39190614c39565b155b15611f0c576040517f9d0ca8fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87611f18576000611f26565b61010081015160081c61ffff165b915050612710811415611f615760008d815260208190526040902054611f4d908d90615b91565b60008e815260208190526040902055612062565b611f798c611f7183612710615c05565b612710613caf565b955080611faa5760008d815260208190526040902054611f9a908790615b05565b60008e8152602081905260409020555b6040517fceddd3e400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c81166004830152602482018f90526044820188905289151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b15801561204957600080fd5b505af115801561205d573d6000803e3d6000fd5b505050505b8c8b73ffffffffffffffffffffffffffffffffffffffff167fe6fee9c572244c0c2238c3112ac12d411750a7ee00eeebd32521c3e5a666c14b8e898e8e87336040516120b3969594939291906158a4565b60405180910390a35050505050979650505050505050565b61213060405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040805161024081018252600080825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082015290517f669e48aa000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063669e48aa906044016101206040518083038186803b15801561224b57600080fd5b505afa15801561225f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122839190614df7565b915061228e82612c9b565b90509250929050565b6040517f75b0d9cd00000000000000000000000000000000000000000000000000000000815260048101839052600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b15801561232257600080fd5b505afa158015612336573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235a9190614e6b565b60008581526020819052604081205491925090612378908584613db8565b90506123848183615b79565b95945050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018690526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561241657600080fd5b505afa15801561242a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061244e9190614967565b86600761245c838383613152565b6040517fa7f2a70b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063a7f2a70b906124d6908c908c908c908c908c906004016157c2565b602060405180830381600087803b1580156124f057600080fd5b505af1158015612504573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125289190614967565b9998505050505050505050565b6040517f666d87a000000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063666d87a0906125ac908f908f9060040161543f565b602060405180830381600087803b1580156125c657600080fd5b505af11580156125da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fe9190614e6b565b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018290523060248201529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063714e7f3290604401600060405180830381600087803b15801561268f57600080fd5b505af11580156126a3573d6000803e3d6000fd5b50505050600061270b828c8c8c8c8c906126bd9190615c1c565b8b8b808060200260200160405190810160405280939291908181526020016000905b82821015610d9a576126fc60c08302860136819003810190614c98565b815260200190600101906126df565b8451909150156127bc576040517f821b9fd800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063821b9fd890612789908590889060040161572a565b600060405180830381600087803b1580156127a357600080fd5b505af11580156127b7573d6000803e3d6000fd5b505050505b7ff3e6948ba8b32d557363ea08470121c47c0127659aed09320812174d373afef2818385336040516127f194939291906158f3565b60405180910390a1509b9a5050505050505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561289257600080fd5b505afa1580156128a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128ca9190614967565b8a60016128d8838383613152565b6040517f2cee6deb000000000000000000000000000000000000000000000000000000008152600481018e905260009073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690632cee6deb9060240160206040518083038186803b15801561296157600080fd5b505afa158015612975573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129999190614e6b565b11156129d1576040517fffd0bc1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018e905230602482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063714e7f3290604401600060405180830381600087803b158015612a5f57600080fd5b505af1158015612a73573d6000803e3d6000fd5b50505050612a918d8d8d8d8d8d90612a8b9190615c1c565b8c613360565b865190945015612b29577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663821b9fd88e886040518363ffffffff1660e01b8152600401612af692919061572a565b600060405180830381600087803b158015612b1057600080fd5b505af1158015612b24573d6000803e3d6000fd5b505050505b7f8621c3692c18d8ddd4cd26457d6a3e1d916e7001c4243a6c8dfa862a7e10a823848e8733604051612b5e94939291906158f3565b60405180910390a15050509998505050505050505050565b6000612bb88484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506138ec92505050565b90505b9392505050565b6000828152602081905260408082205490517f75b0d9cd00000000000000000000000000000000000000000000000000000000815260048101859052612bbb919084907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906375b0d9cd9060240160206040518083038186803b158015612c5e57600080fd5b505afa158015612c72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c969190614e6b565b613db8565b6040805161024081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081018290526102008101829052610220810191909152604080516102408101909152610100830151819060081c61ffff168152602001612d5584613e29565b8152602001612d6384613e46565b8152602001612d7f846101000151600160389190911c81161490565b15158152602001612d9d846101000151600160399190911c81161490565b15158152602001612dbb8461010001516001603a9190911c81161490565b15158152602001612dd98461010001516001603b9190911c81161490565b15158152602001612df78461010001516001603c9190911c81161490565b15158152602001612e158461010001516001603d9190911c81161490565b15158152602001612e338461010001516001603e9190911c81161490565b15158152602001612e518461010001516001603f9190911c81161490565b15158152602001612e6f846101000151600160409190911c81161490565b15158152602001612e8d846101000151600160419190911c81161490565b15158152602001612eab846101000151600160429190911c81161490565b15158152602001612ec9846101000151600160439190911c81161490565b15158152602001612ee7846101000151600160449190911c81161490565b15158152602001612f05846101000151600160459190911c81161490565b15158152602001612f1b84610100015160461c90565b73ffffffffffffffffffffffffffffffffffffffff16905292915050565b80158015612f5d57503373ffffffffffffffffffffffffffffffffffffffff851614155b801561303957506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612fff57600080fd5b505afa158015613013573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130379190614c39565b155b801561311557506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156130db57600080fd5b505afa1580156130ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131139190614c39565b155b1561314c576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b3373ffffffffffffffffffffffffffffffffffffffff84161480159061324857506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561320e57600080fd5b505afa158015613222573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132469190614c39565b155b801561332457506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156132ea57600080fd5b505afa1580156132fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133229190614c39565b155b1561335b576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b60006127108535111561339f576040517f5623289500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612710856020013511156133df576040517f9db9ee9300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6127108560400135111561341f576040517fddbf1bc600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a249d4258989613476613471368c90038c018c614cb4565b613e63565b896040518563ffffffff1660e01b815260040161349694939291906157fb565b61012060405180830381600087803b1580156134b157600080fd5b505af11580156134c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134e99190614df7565b905060005b845181101561360057600085828151811061350b5761350b615e73565b6020026020010151602001515111156135ee577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166312e7c4c68a846020015188858151811061357257613572615e73565b60200260200101516000015189868151811061359057613590615e73565b6020026020010151602001516040518563ffffffff1660e01b81526004016135bb9493929190615939565b600060405180830381600087803b1580156135d557600080fd5b505af11580156135e9573d6000803e3d6000fd5b505050505b806135f881615da3565b9150506134ee565b5060005b83518110156138dc57600084828151811061362157613621615e73565b602002602001015190507cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff801681604001511115613688576040517fa9b8fbcf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606081015162ffffff10156136c9576040517f9583faed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101517cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1015613724576040517f5730278300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a081015162ffffff1015613765576040517fd9b93c2500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040810151156137cf57606081015160408083015160008d8152600160209081528382208882015183528152838220865173ffffffffffffffffffffffffffffffffffffffff908116845290825284832082880151909116835290529190912060e89290921b1790555b6080810151156138395760a0810151608082015160008c81526002602090815260408083208883015184528252808320865173ffffffffffffffffffffffffffffffffffffffff9081168552908352818420838801519091168452909152902060e89290921b1790555b825160208085015160408051855173ffffffffffffffffffffffffffffffffffffffff90811682528685015116938101939093528085015190830152606080850151908301526080808501519083015260a080850151908301523360c08301528c92917f8a1c80ab9ab05d6bf02096dd94aa2fa05a9de212e793835a50dd5ffe8d8cbab89060e00160405180910390a450806138d481615da3565b915050613604565b5060200151979650505050505050565b6040517f43a266c200000000000000000000000000000000000000000000000000000000815260048101839052600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b15801561397857600080fd5b505afa15801561398c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139b09190614df7565b6040517f75b0d9cd0000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b158015613a3c57600080fd5b505afa158015613a50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a749190614e6b565b600086815260208190526040902054610100840151919250613a9d9160081c61ffff1683613db8565b9250613aa98382615b79565b6000868152602081905260408082209290925590517f6352211e000000000000000000000000000000000000000000000000000000008152600481018790527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015613b4157600080fd5b505afa158015613b55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613b799190614967565b905060008415613b9957613b94878560200151600288614006565b613b9c565b60005b90508015613c5b576040517fceddd3e400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820189905260448201839052600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b158015613c4257600080fd5b505af1158015613c56573d6000803e3d6000fd5b505050505b86846000015185602001517fb12d7a78048433f69fe6d30145bf08aad8e82985b96e4db6d5c6a7e94d57086e8589868c33604051613c9d9594939291906154ea565b60405180910390a45050505092915050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8587098587029250828110838203039150508060001415613d0857838281613cfe57613cfe615e44565b0492505050612bbb565b838110613d4f576040517f773cc18c000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260440160405180910390fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000806000851215613ddc57613dcd85615ddc565b613dd79084615b79565b613de6565b613de68584615c05565b905080613df7576000915050612bbb565b612710841415613e08579050612bbb565b80613e1f81612710613e1a8882615c05565b613caf565b6123849190615c05565b60006018826101000151901c61ffff166127106106749190615c05565b60006028826101000151901c61ffff166127106106749190615c05565b8051602082015160089190911b60011790601890613e8390612710615c05565b901b8117905060288260400151612710613e9d9190615c05565b901b81179050816060015115613eb857670100000000000000175b816080015115613ecd57670200000000000000175b8160a0015115613ee257670400000000000000175b8160c0015115613ef757670800000000000000175b8160e0015115613f0c57671000000000000000175b81610100015115613f2257672000000000000000175b81610120015115613f3857674000000000000000175b81610140015115613f4e57678000000000000000175b81610160015115613f655768010000000000000000175b81610180015115613f7c5768020000000000000000175b816101a0015115613f935768040000000000000000175b816101c0015115613faa5768080000000000000000175b816101e0015115613fc15768100000000000000000175b81610200015115613fd85768200000000000000000175b610220919091015160461b7c3fffffffffffffffffffffffffffffffffffffffc00000000000000000161790565b6040517f69e11cc500000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905281906000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906369e11cc59060640160006040518083038186803b15801561409f57600080fd5b505afa1580156140b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526140f99190810190614b2a565b905060005b815181101561459d57600082828151811061411b5761411b615e73565b60200260200101519050600061413a868360400151633b9aca00613caf565b9050801561454a5760c082015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169163ceddd3e4911661428c5760608401516141c357608084015173ffffffffffffffffffffffffffffffffffffffff166141b95733614292565b8360800151614292565b60608401516040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101919091527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561424f57600080fd5b505afa158015614263573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906142879190614967565b614292565b8360c001515b845160405160e084901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9092166004830152602482018d90526044820185905215156064820152608401600060405180830381600087803b15801561430f57600080fd5b505af1158015614323573d6000803e3d6000fd5b5050505060c082015173ffffffffffffffffffffffffffffffffffffffff161561453d578160c0015173ffffffffffffffffffffffffffffffffffffffff16639d740bfa6040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ea78803f8e6040518263ffffffff1660e01b81526004016143cd91815260200190565b60206040518083038186803b1580156143e557600080fd5b505afa1580156143f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061441d9190614967565b73ffffffffffffffffffffffffffffffffffffffff168152602001848152602001601281526020018c81526020018a8152602001858152506040518263ffffffff1660e01b815260040161450a9190815173ffffffffffffffffffffffffffffffffffffffff90811682526020808401518184015260408085015181850152606080860151818601526080808701518187015260a096870151805115158888015293840151151560c0808801919091529284015160e08701529083015161010086015282015183166101208501529381015161014084015292909201519091166101608201526101800190565b600060405180830381600087803b15801561452457600080fd5b505af1158015614538573d6000803e3d6000fd5b505050505b6145478186615c05565b94505b86888a7f990c1da5d280602f972ae3c429b6dc66a66569875205cc6e67f14e0b3fc4d2ac85853360405161458093929190615691565b60405180910390a45050808061459590615da3565b9150506140fe565b5050949350505050565b80356145b281615ed1565b919050565b600082601f8301126145c857600080fd5b813560206145dd6145d883615ae1565b615a92565b80838252828201915082860187848660051b89010111156145fd57600080fd5b60005b8581101561462557813561461381615ed1565b84529284019290840190600101614600565b5090979650505050505050565b60008083601f84011261464457600080fd5b50813567ffffffffffffffff81111561465c57600080fd5b60208301915083602060c08302850101111561467757600080fd5b9250929050565b600082601f83011261468f57600080fd5b8135602061469f6145d883615ae1565b8281528181019085830160c0808602880185018910156146be57600080fd5b60005b868110156146e5576146d38a8461481e565b855293850193918101916001016146c1565b509198975050505050505050565b60008083601f84011261470557600080fd5b50813567ffffffffffffffff81111561471d57600080fd5b6020830191508360208260051b850101111561467757600080fd5b80356145b281615ef6565b80516145b281615ed1565b60008083601f84011261476057600080fd5b50813567ffffffffffffffff81111561477857600080fd5b60208301915083602082850101111561467757600080fd5b600082601f8301126147a157600080fd5b813567ffffffffffffffff8111156147bb576147bb615ea2565b6147ec60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601615a92565b81815284602083860101111561480157600080fd5b816020850160208301376000918101602001919091529392505050565b600060c0828403121561483057600080fd5b60405160c0810181811067ffffffffffffffff8211171561485357614853615ea2565b604052905080823561486481615ed1565b8152602083013561487481615ed1565b8060208301525060408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b6000608082840312156148bc57600080fd5b50919050565b600061024082840312156148bc57600080fd5b600061012082840312156148e857600080fd5b6148f06159fe565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015261493e60e08301614743565b60e082015261010080830151818301525092915050565b6000604082840312156148bc57600080fd5b60006020828403121561497957600080fd5b8151612bbb81615ed1565b60008060008060008060008060008060006103a08c8e0312156149a657600080fd5b6149af8c6145a7565b9a5067ffffffffffffffff8060208e013511156149cb57600080fd5b6149db8e60208f01358f01614955565b9a506149ea8e60408f016148aa565b99506149f98e60c08f016148c2565b98506103008d01359750806103208e01351115614a1557600080fd5b614a268e6103208f01358f016146f3565b90975095506103408d0135811015614a3d57600080fd5b614a4e8e6103408f01358f01614632565b90955093506103608d0135811015614a6557600080fd5b614a768e6103608f01358f016145b7565b9250806103808e01351115614a8a57600080fd5b50614a9c8d6103808e01358e01614790565b90509295989b509295989b9093969950565b60008060008060008060a08789031215614ac757600080fd5b8635614ad281615ed1565b95506020870135945060408701359350606087013567ffffffffffffffff811115614afc57600080fd5b614b0889828a0161474e565b9094509250506080870135614b1c81615ef6565b809150509295509295509295565b60006020808385031215614b3d57600080fd5b825167ffffffffffffffff811115614b5457600080fd5b8301601f81018513614b6557600080fd5b8051614b736145d882615ae1565b8181528381019083850160e0808502860187018a1015614b9257600080fd5b60009550855b85811015614c2a5781838c031215614bae578687fd5b614bb6615a28565b8351614bc181615ef6565b815283890151614bd081615ef6565b818a01526040848101519082015260608085015190820152608080850151614bf781615ed1565b9082015260a0848101519082015260c080850151614c1481615ed1565b9082015285529387019391810191600101614b98565b50919998505050505050505050565b600060208284031215614c4b57600080fd5b8151612bbb81615ef6565b600060208284031215614c6857600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114612bbb57600080fd5b600060c08284031215614caa57600080fd5b612bbb838361481e565b60006102408284031215614cc757600080fd5b614ccf615a4b565b823581526020830135602082015260408301356040820152614cf360608401614738565b6060820152614d0460808401614738565b6080820152614d1560a08401614738565b60a0820152614d2660c08401614738565b60c0820152614d3760e08401614738565b60e0820152610100614d4a818501614738565b90820152610120614d5c848201614738565b90820152610140614d6e848201614738565b90820152610160614d80848201614738565b90820152610180614d92848201614738565b908201526101a0614da4848201614738565b908201526101c0614db6848201614738565b908201526101e0614dc8848201614738565b90820152610200614dda848201614738565b90820152610220614dec8482016145a7565b908201529392505050565b60006101208284031215614e0a57600080fd5b612bbb83836148d5565b6000806101408385031215614e2857600080fd5b614e3284846148d5565b915061012083015160038110614e4757600080fd5b809150509250929050565b600060208284031215614e6457600080fd5b5035919050565b600060208284031215614e7d57600080fd5b5051919050565b60008060408385031215614e9757600080fd5b823591506020830135614e4781615ed1565b600080600060608486031215614ebe57600080fd5b833592506020840135614ed081615ed1565b91506040840135614ee081615ed1565b809150509250925092565b600080600060408486031215614f0057600080fd5b83359250602084013567ffffffffffffffff811115614f1e57600080fd5b614f2a8682870161474e565b9497909650939450505050565b600080600080600060608688031215614f4f57600080fd5b85359450602086013567ffffffffffffffff80821115614f6e57600080fd5b614f7a89838a0161474e565b90965094506040880135915080821115614f9357600080fd5b50614fa08882890161474e565b969995985093965092949392505050565b6000806000806000806000806000806103608b8d031215614fd157600080fd5b8a359950614fe28c60208d016148aa565b9850614ff18c60a08d016148c2565b97506102e08b013596506103008b013567ffffffffffffffff8082111561501757600080fd5b6150238e838f016146f3565b90985096506103208d013591508082111561503d57600080fd5b6150498e838f01614632565b90965094506103408d013591508082111561506357600080fd5b506150708d828e0161474e565b915080935050809150509295989b9194979a5092959850565b60008060008060008060008060006103808a8c0312156150a857600080fd5b893598506150b98b60208c016148aa565b97506150c88b60a08c016148c2565b96506102e08a013595506103008a013567ffffffffffffffff808211156150ee57600080fd5b6150fa8d838e016146f3565b90975095506103208c013591508082111561511457600080fd5b6151208d838e0161467e565b94506103408c013591508082111561513757600080fd5b6151438d838e016145b7565b93506103608c013591508082111561515a57600080fd5b506151678c828d01614790565b9150509295985092959850929598565b6000806040838503121561518a57600080fd5b50508035926020909101359150565b600080600080600080600060c0888a0312156151b457600080fd5b873596506020880135955060408801356151cd81615ed1565b9450606088013567ffffffffffffffff8111156151e957600080fd5b6151f58a828b0161474e565b909550935050608088013561520981615ef6565b915060a088013561521981615ef6565b8091505092959891949750929550565b6000806000806080858703121561523f57600080fd5b8435935060208501359250604085013561525881615ed1565b9150606085013561526881615ed1565b939692955090935050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000815180845260005b818110156152e2576020818501810151868301820152016152c6565b818111156152f4576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8051825260208101516020830152604081015160408301526060810151615352606084018215159052565b506080810151615366608084018215159052565b5060a081015161537a60a084018215159052565b5060c081015161538e60c084018215159052565b5060e08101516153a260e084018215159052565b5061010081810151151590830152610120808201511515908301526101408082015115159083015261016080820151151590830152610180808201511515908301526101a0808201511515908301526101c0808201511515908301526101e080820151151590830152610200808201511515908301526102208082015173ffffffffffffffffffffffffffffffffffffffff81168285015261314c565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261549357600080fd5b8301803567ffffffffffffffff8111156154ac57600080fd5b8036038513156154bb57600080fd5b6040808501526154d2608085018260208501615273565b91505060208401356060840152809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835286602084015285604084015260a0606084015261552660a08401866152bc565b91508084166080840152509695505050505050565b61036081016155b58285805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b612bbb610120830184615327565b610380810161563d8286805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b61564b610120830185615327565b60038310615682577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b82610360830152949350505050565b61012081016156ff82868051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b8360e083015273ffffffffffffffffffffffffffffffffffffffff8316610100830152949350505050565b6000604082018483526020604081850152818551808452606086019150828701935060005b8181101561462557845173ffffffffffffffffffffffffffffffffffffffff168352938301939183019160010161574f565b84815260606020820152600061579b606083018587615273565b905073ffffffffffffffffffffffffffffffffffffffff8316604083015295945050505050565b8581526060602082015260006157dc606083018688615273565b82810360408401526157ef818587615273565b98975050505050505050565b600060e082019050858252843560208301526020850135604083015260408501356060830152606085013561582f81615ed1565b73ffffffffffffffffffffffffffffffffffffffff16608083015260a082019390935260c0015292915050565b85815284602082015260806040820152600061587c608083018587615273565b905073ffffffffffffffffffffffffffffffffffffffff831660608301529695505050505050565b86815285602082015260a0604082015260006158c460a083018688615273565b905083606083015273ffffffffffffffffffffffffffffffffffffffff83166080830152979650505050505050565b84815283602082015260806040820152600061591260808301856152bc565b905073ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060808201868352602086818501528560408501526080606085015281855180845260a086019150828701935060005b818110156159ef576159dc8386518051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b9383019360e0929092019160010161596a565b50909998505050505050505050565b604051610120810167ffffffffffffffff81118282101715615a2257615a22615ea2565b60405290565b60405160e0810167ffffffffffffffff81118282101715615a2257615a22615ea2565b604051610240810167ffffffffffffffff81118282101715615a2257615a22615ea2565b6040805190810167ffffffffffffffff81118282101715615a2257615a22615ea2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715615ad957615ad9615ea2565b604052919050565b600067ffffffffffffffff821115615afb57615afb615ea2565b5060051b60200190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03841381151615615b3f57615b3f615e15565b827f8000000000000000000000000000000000000000000000000000000000000000038412811615615b7357615b73615e15565b50500190565b60008219821115615b8c57615b8c615e15565b500190565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615615bcb57615bcb615e15565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615615bff57615bff615e15565b50500390565b600082821015615c1757615c17615e15565b500390565b6000615c2a6145d884615ae1565b808482526020808301925084368760051b87011115615c4857600080fd5b60005b87811015615d9757813567ffffffffffffffff80821115615c6b57600080fd5b81890191506040808336031215615c8157600080fd5b615c89615a6f565b833581528684013583811115615c9e57600080fd5b939093019236601f850112615cb257600080fd5b83359250615cc26145d884615ae1565b8381528781019085890160e03681880289018c011115615ce157600080fd5b600097505b86881015615d7b57808236031215615cfd57600080fd5b615d05615a28565b8235615d1081615ef6565b8152828c0135615d1f81615ef6565b818d0152828701358782015260608084013590820152608080840135615d4481615ed1565b9082015260a0838101359082015260c080840135615d6181615ed1565b90820152845260019790970196928a019290810190615ce6565b5050828901525088525050509382019390820190600101615c4b565b50919695505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415615dd557615dd5615e15565b5060010190565b60007f8000000000000000000000000000000000000000000000000000000000000000821415615e0e57615e0e615e15565b5060000390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114615ef357600080fd5b50565b8015158114615ef357600080fdfea26469706673582212208861c5b4c6ca9b55b40df8af58dd196cb1f04843de92f07c856ce19c5a4d571464736f6c63430008060033",
  "devdoc": {
    "details": "Adheres to - IJBController: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol's rules. IJBMigratable: Allows migrating to this contract, with a hook called to prepare for the migration.Inherits from - JBOperatable: Several functions in this contract can only be accessed by a project owner, or an address that has been preconfifigured to be an operator of the project. ERC165: Introspection on interface adherance. ",
    "kind": "dev",
    "methods": {
      "burnTokensOf(address,uint256,uint256,string,bool)": {
        "details": "Only a token's holder, a designated operator, or a project's terminal can burn it.",
        "params": {
          "_holder": "The account that is having its tokens burned.",
          "_memo": "A memo to pass along to the emitted event.",
          "_preferClaimedTokens": "A flag indicating whether a project's attached token contract should be burned first if they have been issued.",
          "_projectId": "The ID of the project to which the tokens being burned belong.",
          "_tokenCount": "The number of tokens to burn."
        }
      },
      "changeTokenOf(uint256,address,address)": {
        "details": "Only a project's owner or operator can change its token.",
        "params": {
          "_newOwner": "An address to transfer the current token's ownership to. This is optional, but it cannot be done later.",
          "_projectId": "The ID of the project to which the changed token belongs.",
          "_token": "The new token."
        }
      },
      "constructor": {
        "params": {
          "_directory": "A contract storing directories of terminals and controllers for each project.",
          "_fundingCycleStore": "A contract storing all funding cycle configurations.",
          "_operatorStore": "A contract storing operator assignments.",
          "_projects": "A contract which mints ERC-721's that represent project ownership and transfers.",
          "_splitsStore": "A contract that stores splits for each project.",
          "_tokenStore": "A contract that manages token minting and burning."
        }
      },
      "currentFundingCycleOf(uint256)": {
        "params": {
          "_projectId": "The ID of the project to which the funding cycle belongs."
        },
        "returns": {
          "fundingCycle": "The current funding cycle.",
          "metadata": "The current funding cycle's metadata."
        }
      },
      "distributeReservedTokensOf(uint256,string)": {
        "params": {
          "_memo": "A memo to pass along to the emitted event.",
          "_projectId": "The ID of the project to which the reserved tokens belong."
        },
        "returns": {
          "_0": "The amount of minted reserved tokens."
        }
      },
      "distributionLimitOf(uint256,uint256,address,address)": {
        "details": "The number of decimals in the returned fixed point amount is the same as that of the specified terminal. ",
        "params": {
          "_configuration": "The configuration during which the distribution limit applies.",
          "_projectId": "The ID of the project to get the distribution limit of.",
          "_terminal": "The terminal from which distributions are being limited.",
          "_token": "The token for which the distribution limit applies."
        },
        "returns": {
          "_0": "The distribution limit, as a fixed point number with the same number of decimals as the provided terminal.",
          "_1": "The currency of the distribution limit."
        }
      },
      "getFundingCycleOf(uint256,uint256)": {
        "params": {
          "_projectId": "The ID of the project to which the funding cycle belongs."
        },
        "returns": {
          "fundingCycle": "The funding cycle.",
          "metadata": "The funding cycle's metadata."
        }
      },
      "issueTokenFor(uint256,string,string)": {
        "details": "Deploys a project's ERC20 JBToken contract.Only a project's owner or operator can issue its token.",
        "params": {
          "_name": "The ERC20's name.",
          "_projectId": "The ID of the project being issued tokens.",
          "_symbol": "The ERC20's symbol."
        }
      },
      "latestConfiguredFundingCycleOf(uint256)": {
        "params": {
          "_projectId": "The ID of the project to which the funding cycle belongs."
        },
        "returns": {
          "ballotState": "The state of the configuration.",
          "fundingCycle": "The latest configured funding cycle.",
          "metadata": "The latest configured funding cycle's metadata."
        }
      },
      "launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)": {
        "details": "Each operation within this transaction can be done in sequence separately.Only a project owner or operator can launch its funding cycles.",
        "params": {
          "_data": "Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.",
          "_fundAccessConstraints": "An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.",
          "_groupedSplits": "An array of splits to set for any number of groups. ",
          "_memo": "A memo to pass along to the emitted event.",
          "_metadata": "Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.",
          "_mustStartAtOrAfter": "The time before which the configured funding cycle cannot start.",
          "_projectId": "The ID of the project to launch funding cycles for.",
          "_terminals": "Payment terminals to add for the project."
        },
        "returns": {
          "configuration": "The configuration of the funding cycle that was successfully created."
        }
      },
      "launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)": {
        "details": "Each operation within this transaction can be done in sequence separately.Anyone can deploy a project on an owner's behalf.",
        "params": {
          "_data": "Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.",
          "_fundAccessConstraints": "An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.",
          "_groupedSplits": "An array of splits to set for any number of groups. ",
          "_memo": "A memo to pass along to the emitted event.",
          "_metadata": "Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.",
          "_mustStartAtOrAfter": "The time before which the configured funding cycle cannot start.",
          "_owner": "The address to set as the owner of the project. The project ERC-721 will be owned by this address.",
          "_projectMetadata": "Metadata to associate with the project within a particular domain. This can be updated any time by the owner of the project.",
          "_terminals": "Payment terminals to add for the project."
        },
        "returns": {
          "projectId": "The ID of the project."
        }
      },
      "migrate(uint256,address)": {
        "details": "Only a project's owner or a designated operator can migrate it.",
        "params": {
          "_projectId": "The ID of the project that will be migrated from this controller.",
          "_to": "The controller to which the project is migrating."
        }
      },
      "mintTokensOf(uint256,uint256,address,string,bool,bool)": {
        "details": "Only a project's owner, a designated operator, or one of its terminals can mint its tokens.",
        "params": {
          "_beneficiary": "The account that the tokens are being minted for.",
          "_memo": "A memo to pass along to the emitted event.",
          "_preferClaimedTokens": "A flag indicating whether a project's attached token contract should be minted if they have been issued.",
          "_projectId": "The ID of the project to which the tokens being minted belong.",
          "_tokenCount": "The amount of tokens to mint in total, counting however many should be reserved.",
          "_useReservedRate": "Whether to use the current funding cycle's reserved rate in the mint calculation."
        },
        "returns": {
          "beneficiaryTokenCount": "The amount of tokens minted for the beneficiary."
        }
      },
      "overflowAllowanceOf(uint256,uint256,address,address)": {
        "details": "The number of decimals in the returned fixed point amount is the same as that of the specified terminal. ",
        "params": {
          "_configuration": "The configuration of the during which the allowance applies.",
          "_projectId": "The ID of the project to get the overflow allowance of.",
          "_terminal": "The terminal managing the overflow.",
          "_token": "The token for which the overflow allowance applies."
        },
        "returns": {
          "_0": "The overflow allowance, as a fixed point number with the same number of decimals as the provided terminal.",
          "_1": "The currency of the overflow allowance."
        }
      },
      "prepForMigrationOf(uint256,address)": {
        "details": "This controller should not yet be the project's controller.",
        "params": {
          "_from": "The controller being migrated from.",
          "_projectId": "The ID of the project that will be migrated to this controller."
        }
      },
      "queuedFundingCycleOf(uint256)": {
        "params": {
          "_projectId": "The ID of the project to which the funding cycle belongs."
        },
        "returns": {
          "fundingCycle": "The queued funding cycle.",
          "metadata": "The queued funding cycle's metadata."
        }
      },
      "reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)": {
        "details": "Only a project's owner or a designated operator can configure its funding cycles.",
        "params": {
          "_data": "Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.",
          "_fundAccessConstraints": "An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.",
          "_groupedSplits": "An array of splits to set for any number of groups. ",
          "_memo": "A memo to pass along to the emitted event.",
          "_metadata": "Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.",
          "_mustStartAtOrAfter": "The time before which the configured funding cycle cannot start.",
          "_projectId": "The ID of the project whose funding cycles are being reconfigured."
        },
        "returns": {
          "configuration": "The configuration of the funding cycle that was successfully reconfigured."
        }
      },
      "reservedTokenBalanceOf(uint256,uint256)": {
        "params": {
          "_projectId": "The ID of the project to get a reserved token balance of.",
          "_reservedRate": "The reserved rate to use when making the calculation."
        },
        "returns": {
          "_0": "The current amount of reserved tokens."
        }
      },
      "supportsInterface(bytes4)": {
        "details": " See {IERC165-supportsInterface}.",
        "params": {
          "_interfaceId": "The ID of the interface to check for adherance to."
        }
      },
      "totalOutstandingTokensOf(uint256,uint256)": {
        "params": {
          "_projectId": "The ID of the project to get total outstanding tokens of.",
          "_reservedRate": "The reserved rate to use when making the calculation."
        },
        "returns": {
          "_0": "The current total amount of outstanding tokens for the project."
        }
      }
    },
    "stateVariables": {
      "_packedDistributionLimitDataOf": {
        "details": "bits 0-231: The amount of token that a project can distribute per funding cycle.bits 232-255: The currency of amount that a project can distribute. _projectId The ID of the project to get the packed distribution limit data of. _configuration The configuration during which the packed distribution limit data applies. _terminal The terminal from which distributions are being limited. _token The token for which distributions are being limited."
      },
      "_packedOverflowAllowanceDataOf": {
        "details": "bits 0-231: The amount of overflow that a project is allowed to tap into on-demand throughout the configuration.bits 232-255: The currency of the amount of overflow that a project is allowed to tap. _projectId The ID of the project to get the packed overflow allowance data of. _configuration The configuration during which the packed overflow allowance data applies. _terminal The terminal managing the overflow. _token The token for which overflow is being allowed."
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
      "burnTokensOf(address,uint256,uint256,string,bool)": {
        "notice": "Burns a token holder's supply."
      },
      "changeTokenOf(uint256,address,address)": {
        "notice": "Swap the current project's token that is minted and burned for another, and transfer ownership of the current token to another address if needed."
      },
      "currentFundingCycleOf(uint256)": {
        "notice": "A project's current funding cycle along with its metadata."
      },
      "directory()": {
        "notice": "The directory of terminals and controllers for projects."
      },
      "distributeReservedTokensOf(uint256,string)": {
        "notice": "Distributes all outstanding reserved tokens for a project."
      },
      "distributionLimitOf(uint256,uint256,address,address)": {
        "notice": "The amount of token that a project can distribute per funding cycle, and the currency it's in terms of."
      },
      "fundingCycleStore()": {
        "notice": "The contract storing all funding cycle configurations."
      },
      "getFundingCycleOf(uint256,uint256)": {
        "notice": "A project's funding cycle for the specified configuration along with its metadata."
      },
      "issueTokenFor(uint256,string,string)": {
        "notice": "Issues an owner's ERC20 JBTokens that'll be used when claiming tokens."
      },
      "latestConfiguredFundingCycleOf(uint256)": {
        "notice": "A project's latest configured funding cycle along with its metadata and the ballot state of the configuration."
      },
      "launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)": {
        "notice": "Creates a funding cycle for an already existing project ERC-721."
      },
      "launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)": {
        "notice": "Creates a project. This will mint an ERC-721 into the specified owner's account, configure a first funding cycle, and set up any splits."
      },
      "migrate(uint256,address)": {
        "notice": "Allows a project to migrate from this controller to another."
      },
      "mintTokensOf(uint256,uint256,address,string,bool,bool)": {
        "notice": "Mint new token supply into an account, and optionally reserve a supply to be distributed according to the project's current funding cycle configuration."
      },
      "operatorStore()": {
        "notice": " A contract storing operator assignments."
      },
      "overflowAllowanceOf(uint256,uint256,address,address)": {
        "notice": "The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it's in terms of."
      },
      "prepForMigrationOf(uint256,address)": {
        "notice": "Allows other controllers to signal to this one that a migration is expected for the specified project."
      },
      "projects()": {
        "notice": "Mints ERC-721's that represent project ownership."
      },
      "queuedFundingCycleOf(uint256)": {
        "notice": "A project's queued funding cycle along with its metadata."
      },
      "reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)": {
        "notice": "Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle's ballot."
      },
      "reservedTokenBalanceOf(uint256,uint256)": {
        "notice": "Gets the amount of reserved tokens that a project has available to distribute."
      },
      "splitsStore()": {
        "notice": "The contract that stores splits for each project."
      },
      "supportsInterface(bytes4)": {
        "notice": "Indicates if this contract adheres to the specified interface."
      },
      "tokenStore()": {
        "notice": "The contract that manages token minting and burning."
      },
      "totalOutstandingTokensOf(uint256,uint256)": {
        "notice": "Gets the current total amount of outstanding tokens for a project, given a reserved rate."
      }
    },
    "notice": "Stitches together funding cycles and community tokens, making sure all activity is accounted for and correct.",
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 4718,
        "contract": "contracts/JBController.sol:JBController",
        "label": "_processedTokenTrackerOf",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_uint256,t_int256)"
      },
      {
        "astId": 4730,
        "contract": "contracts/JBController.sol:JBController",
        "label": "_packedDistributionLimitDataOf",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17683,t_mapping(t_address,t_uint256))))"
      },
      {
        "astId": 4742,
        "contract": "contracts/JBController.sol:JBController",
        "label": "_packedOverflowAllowanceDataOf",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17683,t_mapping(t_address,t_uint256))))"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_contract(IJBPaymentTerminal)17683": {
        "encoding": "inplace",
        "label": "contract IJBPaymentTerminal",
        "numberOfBytes": "20"
      },
      "t_int256": {
        "encoding": "inplace",
        "label": "int256",
        "numberOfBytes": "32"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_contract(IJBPaymentTerminal)17683,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_contract(IJBPaymentTerminal)17683",
        "label": "mapping(contract IJBPaymentTerminal => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_uint256,t_int256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => int256)",
        "numberOfBytes": "32",
        "value": "t_int256"
      },
      "t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17683,t_mapping(t_address,t_uint256)))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(contract IJBPaymentTerminal => mapping(address => uint256)))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_contract(IJBPaymentTerminal)17683,t_mapping(t_address,t_uint256))"
      },
      "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17683,t_mapping(t_address,t_uint256))))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(uint256 => mapping(contract IJBPaymentTerminal => mapping(address => uint256))))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17683,t_mapping(t_address,t_uint256)))"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}

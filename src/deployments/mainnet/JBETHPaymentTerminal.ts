export default {
	address: '0xacD28185AE65adc711481c0aECB0B99Ac8608698',
	abi: [
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_baseWeightCurrency',
					type: 'uint256'
				},
				{
					internalType: 'contract IJBOperatorStore',
					name: '_operatorStore',
					type: 'address'
				},
				{
					internalType: 'contract IJBProjects',
					name: '_projects',
					type: 'address'
				},
				{
					internalType: 'contract IJBDirectory',
					name: '_directory',
					type: 'address'
				},
				{
					internalType: 'contract IJBSplitsStore',
					name: '_splitsStore',
					type: 'address'
				},
				{
					internalType: 'contract IJBPrices',
					name: '_prices',
					type: 'address'
				},
				{
					internalType: 'contract IJBSingleTokenPaymentTerminalStore',
					name: '_store',
					type: 'address'
				},
				{
					internalType: 'address',
					name: '_owner',
					type: 'address'
				}
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [],
			name: 'FEE_TOO_HIGH',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INADEQUATE_DISTRIBUTION_AMOUNT',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INADEQUATE_RECLAIM_AMOUNT',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INADEQUATE_TOKEN_COUNT',
			type: 'error'
		},
		{
			inputs: [],
			name: 'NO_MSG_VALUE_ALLOWED',
			type: 'error'
		},
		{
			inputs: [],
			name: 'PAY_TO_ZERO_ADDRESS',
			type: 'error'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'prod1',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: 'denominator',
					type: 'uint256'
				}
			],
			name: 'PRBMath__MulDivOverflow',
			type: 'error'
		},
		{
			inputs: [],
			name: 'PROJECT_TERMINAL_MISMATCH',
			type: 'error'
		},
		{
			inputs: [],
			name: 'REDEEM_TO_ZERO_ADDRESS',
			type: 'error'
		},
		{
			inputs: [],
			name: 'TERMINAL_IN_SPLIT_ZERO_ADDRESS',
			type: 'error'
		},
		{
			inputs: [],
			name: 'TERMINAL_TOKENS_INCOMPATIBLE',
			type: 'error'
		},
		{
			inputs: [],
			name: 'UNAUTHORIZED',
			type: 'error'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'refundedFees',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'metadata',
					type: 'bytes'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'AddToBalance',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract IJBPayDelegate',
					name: 'delegate',
					type: 'address'
				},
				{
					components: [
						{
							internalType: 'address',
							name: 'payer',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'projectId',
							type: 'uint256'
						},
						{
							components: [
								{
									internalType: 'address',
									name: 'token',
									type: 'address'
								},
								{
									internalType: 'uint256',
									name: 'value',
									type: 'uint256'
								},
								{
									internalType: 'uint256',
									name: 'decimals',
									type: 'uint256'
								},
								{
									internalType: 'uint256',
									name: 'currency',
									type: 'uint256'
								}
							],
							internalType: 'struct JBTokenAmount',
							name: 'amount',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'projectTokenCount',
							type: 'uint256'
						},
						{
							internalType: 'address',
							name: 'beneficiary',
							type: 'address'
						},
						{
							internalType: 'string',
							name: 'memo',
							type: 'string'
						},
						{
							internalType: 'bytes',
							name: 'metadata',
							type: 'bytes'
						}
					],
					indexed: false,
					internalType: 'struct JBDidPayData',
					name: 'data',
					type: 'tuple'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'DelegateDidPay',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract IJBRedemptionDelegate',
					name: 'delegate',
					type: 'address'
				},
				{
					components: [
						{
							internalType: 'address',
							name: 'holder',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'projectId',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'projectTokenCount',
							type: 'uint256'
						},
						{
							components: [
								{
									internalType: 'address',
									name: 'token',
									type: 'address'
								},
								{
									internalType: 'uint256',
									name: 'value',
									type: 'uint256'
								},
								{
									internalType: 'uint256',
									name: 'decimals',
									type: 'uint256'
								},
								{
									internalType: 'uint256',
									name: 'currency',
									type: 'uint256'
								}
							],
							internalType: 'struct JBTokenAmount',
							name: 'reclaimedAmount',
							type: 'tuple'
						},
						{
							internalType: 'address payable',
							name: 'beneficiary',
							type: 'address'
						},
						{
							internalType: 'string',
							name: 'memo',
							type: 'string'
						},
						{
							internalType: 'bytes',
							name: 'metadata',
							type: 'bytes'
						}
					],
					indexed: false,
					internalType: 'struct JBDidRedeemData',
					name: 'data',
					type: 'tuple'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'DelegateDidRedeem',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleConfiguration',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleNumber',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'distributedAmount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'fee',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'beneficiaryDistributionAmount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'DistributePayouts',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'domain',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'group',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'bool',
							name: 'preferClaimed',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'preferAddToBalance',
							type: 'bool'
						},
						{
							internalType: 'uint256',
							name: 'percent',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'projectId',
							type: 'uint256'
						},
						{
							internalType: 'address payable',
							name: 'beneficiary',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'lockedUntil',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBSplitAllocator',
							name: 'allocator',
							type: 'address'
						}
					],
					indexed: false,
					internalType: 'struct JBSplit',
					name: 'split',
					type: 'tuple'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'DistributeToPayoutSplit',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fee',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'feeDiscount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'HoldFee',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'contract IJBPaymentTerminal',
					name: 'to',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'Migrate',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address'
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address'
				}
			],
			name: 'OwnershipTransferred',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleConfiguration',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleNumber',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'payer',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'beneficiaryTokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'metadata',
					type: 'bytes'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'Pay',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'bool',
					name: 'wasHeld',
					type: 'bool'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'ProcessFee',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleConfiguration',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleNumber',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'holder',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'reclaimedAmount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'metadata',
					type: 'bytes'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'RedeemTokens',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'refundedFees',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'leftoverAmount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'RefundHeldFees',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'fee',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'SetFee',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract IJBFeeGauge',
					name: 'feeGauge',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'SetFeeGauge',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract IJBPaymentTerminal',
					name: 'terminal',
					type: 'address'
				},
				{
					indexed: true,
					internalType: 'bool',
					name: 'flag',
					type: 'bool'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'SetFeelessTerminal',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleConfiguration',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleNumber',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'distributedAmount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'netDistributedamount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'UseAllowance',
			type: 'event'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_token',
					type: 'address'
				}
			],
			name: 'acceptsToken',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256'
				},
				{
					internalType: 'address',
					name: '',
					type: 'address'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				},
				{
					internalType: 'bytes',
					name: '_metadata',
					type: 'bytes'
				}
			],
			name: 'addToBalanceOf',
			outputs: [],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'baseWeightCurrency',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'currency',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			name: 'currencyForToken',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				}
			],
			name: 'currentEthOverflowOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			name: 'decimalsForToken',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'directory',
			outputs: [
				{
					internalType: 'contract IJBDirectory',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_currency',
					type: 'uint256'
				},
				{
					internalType: 'address',
					name: '',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: '_minReturnedTokens',
					type: 'uint256'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				}
			],
			name: 'distributePayoutsOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'netLeftoverDistributionAmount',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'fee',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'feeGauge',
			outputs: [
				{
					internalType: 'contract IJBFeeGauge',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				}
			],
			name: 'heldFeesOf',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256'
						},
						{
							internalType: 'uint32',
							name: 'fee',
							type: 'uint32'
						},
						{
							internalType: 'uint32',
							name: 'feeDiscount',
							type: 'uint32'
						},
						{
							internalType: 'address',
							name: 'beneficiary',
							type: 'address'
						}
					],
					internalType: 'struct JBFee[]',
					name: '',
					type: 'tuple[]'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'contract IJBPaymentTerminal',
					name: '',
					type: 'address'
				}
			],
			name: 'isFeelessTerminal',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'contract IJBPaymentTerminal',
					name: '_to',
					type: 'address'
				}
			],
			name: 'migrate',
			outputs: [
				{
					internalType: 'uint256',
					name: 'balance',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'operatorStore',
			outputs: [
				{
					internalType: 'contract IJBOperatorStore',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256'
				},
				{
					internalType: 'address',
					name: '',
					type: 'address'
				},
				{
					internalType: 'address',
					name: '_beneficiary',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: '_minReturnedTokens',
					type: 'uint256'
				},
				{
					internalType: 'bool',
					name: '_preferClaimedTokens',
					type: 'bool'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				},
				{
					internalType: 'bytes',
					name: '_metadata',
					type: 'bytes'
				}
			],
			name: 'pay',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'payoutSplitsGroup',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'prices',
			outputs: [
				{
					internalType: 'contract IJBPrices',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				}
			],
			name: 'processFees',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'projects',
			outputs: [
				{
					internalType: 'contract IJBProjects',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_holder',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_tokenCount',
					type: 'uint256'
				},
				{
					internalType: 'address',
					name: '',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: '_minReturnedTokens',
					type: 'uint256'
				},
				{
					internalType: 'address payable',
					name: '_beneficiary',
					type: 'address'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				},
				{
					internalType: 'bytes',
					name: '_metadata',
					type: 'bytes'
				}
			],
			name: 'redeemTokensOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'reclaimAmount',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_fee',
					type: 'uint256'
				}
			],
			name: 'setFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'contract IJBFeeGauge',
					name: '_feeGauge',
					type: 'address'
				}
			],
			name: 'setFeeGauge',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'contract IJBPaymentTerminal',
					name: '_terminal',
					type: 'address'
				},
				{
					internalType: 'bool',
					name: '_flag',
					type: 'bool'
				}
			],
			name: 'setFeelessTerminal',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'splitsStore',
			outputs: [
				{
					internalType: 'contract IJBSplitsStore',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'store',
			outputs: [
				{
					internalType: 'contract IJBSingleTokenPaymentTerminalStore',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: '_interfaceId',
					type: 'bytes4'
				}
			],
			name: 'supportsInterface',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'token',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address'
				}
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_currency',
					type: 'uint256'
				},
				{
					internalType: 'address',
					name: '',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: '_minReturnedTokens',
					type: 'uint256'
				},
				{
					internalType: 'address payable',
					name: '_beneficiary',
					type: 'address'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				}
			],
			name: 'useAllowanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'netDistributedAmount',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		}
	],
	transactionHash: '0xe084d052150e65322fb9187eae996541a7335f70d33f8d1cec009727b23f625e',
	receipt: {
		to: null,
		from: '0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF',
		contractAddress: '0xacD28185AE65adc711481c0aECB0B99Ac8608698',
		transactionIndex: 22,
		gasUsed: '5371402',
		logsBloom:
			'0x00000000000000000000000000000000000000000000000000801000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000020000000000000000000800040000000000000000000000000000400000000100000000000100000000000000000000000000000000000000000000000000000000000000000800000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200060000000000000000000000000000000000000000000000800000000000000000000',
		blockHash: '0x5517ade726551a36c629e75a224ce67eb094d94023f24dbad5456a1b5c1cf4e8',
		transactionHash: '0xe084d052150e65322fb9187eae996541a7335f70d33f8d1cec009727b23f625e',
		logs: [
			{
				transactionIndex: 22,
				blockNumber: 14637437,
				transactionHash: '0xe084d052150e65322fb9187eae996541a7335f70d33f8d1cec009727b23f625e',
				address: '0xacD28185AE65adc711481c0aECB0B99Ac8608698',
				topics: [
					'0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0',
					'0x0000000000000000000000000000000000000000000000000000000000000000',
					'0x000000000000000000000000e9be6df23c7f9caba3005da2fa2d8714d340d0af'
				],
				data: '0x',
				logIndex: 28,
				blockHash: '0x5517ade726551a36c629e75a224ce67eb094d94023f24dbad5456a1b5c1cf4e8'
			},
			{
				transactionIndex: 22,
				blockNumber: 14637437,
				transactionHash: '0xe084d052150e65322fb9187eae996541a7335f70d33f8d1cec009727b23f625e',
				address: '0xacD28185AE65adc711481c0aECB0B99Ac8608698',
				topics: [
					'0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0',
					'0x000000000000000000000000e9be6df23c7f9caba3005da2fa2d8714d340d0af',
					'0x000000000000000000000000af28bcb48c40dbc86f52d459a6562f658fc94b1e'
				],
				data: '0x',
				logIndex: 29,
				blockHash: '0x5517ade726551a36c629e75a224ce67eb094d94023f24dbad5456a1b5c1cf4e8'
			}
		],
		blockNumber: 14637437,
		cumulativeGasUsed: '6704197',
		status: 1,
		byzantium: true
	},
	args: [
		'1',
		'0xf4326041BE30a4b7fc4db9Bb6286fef458F71fe2',
		'0x9afc7156d8034A6Bbd4297D450f17cB4027BF9F5',
		'0x703d932403408d1a4Ae3Ea2921207d2f550e2e67',
		'0x3d017b78c05c390d7dfcdfcf594c49d854301574',
		'0x1bd2d2D0a5F5981636a4EC1b28195722E1D333bD',
		'0x9B865CC6017d1B421084510FBc0841F7B8Dc3626',
		'0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e'
	],
	numDeployments: 1,
	solcInputHash: '2d6f35a58bd6d7d54eadea7a0697d07f',
	metadata:
		'{"compiler":{"version":"0.8.6+commit.11564f7e"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"uint256","name":"_baseWeightCurrency","type":"uint256"},{"internalType":"contract IJBOperatorStore","name":"_operatorStore","type":"address"},{"internalType":"contract IJBProjects","name":"_projects","type":"address"},{"internalType":"contract IJBDirectory","name":"_directory","type":"address"},{"internalType":"contract IJBSplitsStore","name":"_splitsStore","type":"address"},{"internalType":"contract IJBPrices","name":"_prices","type":"address"},{"internalType":"contract IJBSingleTokenPaymentTerminalStore","name":"_store","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"FEE_TOO_HIGH","type":"error"},{"inputs":[],"name":"INADEQUATE_DISTRIBUTION_AMOUNT","type":"error"},{"inputs":[],"name":"INADEQUATE_RECLAIM_AMOUNT","type":"error"},{"inputs":[],"name":"INADEQUATE_TOKEN_COUNT","type":"error"},{"inputs":[],"name":"NO_MSG_VALUE_ALLOWED","type":"error"},{"inputs":[],"name":"PAY_TO_ZERO_ADDRESS","type":"error"},{"inputs":[{"internalType":"uint256","name":"prod1","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"PRBMath__MulDivOverflow","type":"error"},{"inputs":[],"name":"PROJECT_TERMINAL_MISMATCH","type":"error"},{"inputs":[],"name":"REDEEM_TO_ZERO_ADDRESS","type":"error"},{"inputs":[],"name":"TERMINAL_IN_SPLIT_ZERO_ADDRESS","type":"error"},{"inputs":[],"name":"TERMINAL_TOKENS_INCOMPATIBLE","type":"error"},{"inputs":[],"name":"UNAUTHORIZED","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"refundedFees","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"bytes","name":"metadata","type":"bytes"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"AddToBalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IJBPayDelegate","name":"delegate","type":"address"},{"components":[{"internalType":"address","name":"payer","type":"address"},{"internalType":"uint256","name":"projectId","type":"uint256"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"currency","type":"uint256"}],"internalType":"struct JBTokenAmount","name":"amount","type":"tuple"},{"internalType":"uint256","name":"projectTokenCount","type":"uint256"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"string","name":"memo","type":"string"},{"internalType":"bytes","name":"metadata","type":"bytes"}],"indexed":false,"internalType":"struct JBDidPayData","name":"data","type":"tuple"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"DelegateDidPay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IJBRedemptionDelegate","name":"delegate","type":"address"},{"components":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"uint256","name":"projectId","type":"uint256"},{"internalType":"uint256","name":"projectTokenCount","type":"uint256"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"currency","type":"uint256"}],"internalType":"struct JBTokenAmount","name":"reclaimedAmount","type":"tuple"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"internalType":"string","name":"memo","type":"string"},{"internalType":"bytes","name":"metadata","type":"bytes"}],"indexed":false,"internalType":"struct JBDidRedeemData","name":"data","type":"tuple"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"DelegateDidRedeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fundingCycleConfiguration","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"fundingCycleNumber","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"distributedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beneficiaryDistributionAmount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"DistributePayouts","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"domain","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"group","type":"uint256"},{"components":[{"internalType":"bool","name":"preferClaimed","type":"bool"},{"internalType":"bool","name":"preferAddToBalance","type":"bool"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"projectId","type":"uint256"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"contract IJBSplitAllocator","name":"allocator","type":"address"}],"indexed":false,"internalType":"struct JBSplit","name":"split","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"DistributeToPayoutSplit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeDiscount","type":"uint256"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"HoldFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":true,"internalType":"contract IJBPaymentTerminal","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"Migrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fundingCycleConfiguration","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"fundingCycleNumber","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beneficiaryTokenCount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"bytes","name":"metadata","type":"bytes"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"Pay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"bool","name":"wasHeld","type":"bool"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"ProcessFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fundingCycleConfiguration","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"fundingCycleNumber","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reclaimedAmount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"bytes","name":"metadata","type":"bytes"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"RedeemTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"refundedFees","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"leftoverAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"RefundHeldFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"SetFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IJBFeeGauge","name":"feeGauge","type":"address"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"SetFeeGauge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IJBPaymentTerminal","name":"terminal","type":"address"},{"indexed":true,"internalType":"bool","name":"flag","type":"bool"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"SetFeelessTerminal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fundingCycleConfiguration","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"fundingCycleNumber","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"distributedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"netDistributedamount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"UseAllowance","type":"event"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"acceptsToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"_memo","type":"string"},{"internalType":"bytes","name":"_metadata","type":"bytes"}],"name":"addToBalanceOf","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"baseWeightCurrency","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"currencyForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"currentEthOverflowOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"decimalsForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"directory","outputs":[{"internalType":"contract IJBDirectory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_currency","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"_minReturnedTokens","type":"uint256"},{"internalType":"string","name":"_memo","type":"string"}],"name":"distributePayoutsOf","outputs":[{"internalType":"uint256","name":"netLeftoverDistributionAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGauge","outputs":[{"internalType":"contract IJBFeeGauge","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"heldFeesOf","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint32","name":"fee","type":"uint32"},{"internalType":"uint32","name":"feeDiscount","type":"uint32"},{"internalType":"address","name":"beneficiary","type":"address"}],"internalType":"struct JBFee[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IJBPaymentTerminal","name":"","type":"address"}],"name":"isFeelessTerminal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"contract IJBPaymentTerminal","name":"_to","type":"address"}],"name":"migrate","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operatorStore","outputs":[{"internalType":"contract IJBOperatorStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"_beneficiary","type":"address"},{"internalType":"uint256","name":"_minReturnedTokens","type":"uint256"},{"internalType":"bool","name":"_preferClaimedTokens","type":"bool"},{"internalType":"string","name":"_memo","type":"string"},{"internalType":"bytes","name":"_metadata","type":"bytes"}],"name":"pay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"payoutSplitsGroup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prices","outputs":[{"internalType":"contract IJBPrices","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"processFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"projects","outputs":[{"internalType":"contract IJBProjects","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_tokenCount","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"_minReturnedTokens","type":"uint256"},{"internalType":"address payable","name":"_beneficiary","type":"address"},{"internalType":"string","name":"_memo","type":"string"},{"internalType":"bytes","name":"_metadata","type":"bytes"}],"name":"redeemTokensOf","outputs":[{"internalType":"uint256","name":"reclaimAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IJBFeeGauge","name":"_feeGauge","type":"address"}],"name":"setFeeGauge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IJBPaymentTerminal","name":"_terminal","type":"address"},{"internalType":"bool","name":"_flag","type":"bool"}],"name":"setFeelessTerminal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"splitsStore","outputs":[{"internalType":"contract IJBSplitsStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"store","outputs":[{"internalType":"contract IJBSingleTokenPaymentTerminalStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_currency","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"_minReturnedTokens","type":"uint256"},{"internalType":"address payable","name":"_beneficiary","type":"address"},{"internalType":"string","name":"_memo","type":"string"}],"name":"useAllowanceOf","outputs":[{"internalType":"uint256","name":"netDistributedAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"details":"Inherits from - JBPayoutRedemptionPaymentTerminal: Generic terminal managing all inflows and outflows of funds into the protocol ecosystem.","kind":"dev","methods":{"acceptsToken(address)":{"params":{"_token":"The token to check if this terminal accepts or not."},"returns":{"_0":"The flag."}},"addToBalanceOf(uint256,uint256,address,string,bytes)":{"params":{"_amount":"The amount of tokens to add, as a fixed point number with the same number of decimals as this terminal. If this is an ETH terminal, this is ignored and msg.value is used instead. ignored: _token The token being paid. This terminal ignores this property since it only manages one currency. ","_memo":"A memo to pass along to the emitted event.","_metadata":"Extra data to pass along to the emitted event.","_projectId":"The ID of the project to which the funds received belong."}},"constructor":{"params":{"_baseWeightCurrency":"The currency to base token issuance on.","_directory":"A contract storing directories of terminals and controllers for each project.","_operatorStore":"A contract storing operator assignments.","_owner":"The address that will own this contract.","_prices":"A contract that exposes price feeds.","_projects":"A contract which mints ERC-721\'s that represent project ownership and transfers.","_splitsStore":"A contract that stores splits for each project.","_store":"A contract that stores the terminal\'s data."}},"currencyForToken(address)":{"returns":{"_0":"The currency index."}},"currentEthOverflowOf(uint256)":{"details":"The current overflow is represented as a fixed point number with 18 decimals.","params":{"_projectId":"The ID of the project to get overflow for."},"returns":{"_0":"The current amount of ETH overflow that project has in this terminal, as a fixed point number with 18 decimals."}},"decimalsForToken(address)":{"returns":{"_0":"The number of decimals for the token."}},"distributePayoutsOf(uint256,uint256,uint256,address,uint256,string)":{"details":"Payouts are sent to the preprogrammed splits. Any leftover is sent to the project\'s owner.Anyone can distribute payouts on a project\'s behalf. The project can preconfigure a wildcard split that is used to send funds to msg.sender. This can be used to incentivize calling this function.All funds distributed outside of this contract or any feeless terminals incure the protocol fee.","params":{"_amount":"The amount of terminal tokens to distribute, as a fixed point number with same number of decimals as this terminal.","_currency":"The expected currency of the amount being distributed. Must match the project\'s current funding cycle\'s distribution limit currency. ignored: _token The token being distributed. This terminal ignores this property since it only manages one token. ","_memo":"A memo to pass along to the emitted event.","_minReturnedTokens":"The minimum number of terminal tokens that the `_amount` should be valued at in terms of this terminal\'s currency, as a fixed point number with the same number of decimals as this terminal.","_projectId":"The ID of the project having its payouts distributed."},"returns":{"netLeftoverDistributionAmount":"The amount that was sent to the project owner, as a fixed point number with the same amount of decimals as this terminal."}},"heldFeesOf(uint256)":{"params":{"_projectId":"The ID of the project for which fees are being held."},"returns":{"_0":"An array of fees that are being held."}},"migrate(uint256,address)":{"details":"Only a project\'s owner or a designated operator can migrate it.","params":{"_projectId":"The ID of the project being migrated.","_to":"The terminal contract that will gain the project\'s funds."},"returns":{"balance":"The amount of funds that were migrated, as a fixed point number with the same amount of decimals as this terminal."}},"owner()":{"details":"Returns the address of the current owner."},"pay(uint256,uint256,address,address,uint256,bool,string,bytes)":{"params":{"_amount":"The amount of terminal tokens being received, as a fixed point number with the same amount of decimals as this terminal. If this terminal\'s token is ETH, this is ignored and msg.value is used in its place. ignored: _token The token being paid. This terminal ignores this property since it only manages one token. ","_beneficiary":"The address to mint tokens for and pass along to the funding cycle\'s delegate.","_memo":"A memo to pass along to the emitted event, and passed along the the funding cycle\'s data source and delegate.  A data source can alter the memo before emitting in the event and forwarding to the delegate.","_metadata":"Bytes to send along to the data source, delegate, and emitted event, if provided.","_minReturnedTokens":"The minimum number of project tokens expected in return, as a fixed point number with the same amount of decimals as this terminal.","_preferClaimedTokens":"A flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas.","_projectId":"The ID of the project being paid."},"returns":{"_0":"The number of tokens minted for the beneficiary, as a fixed point number with 18 decimals."}},"processFees(uint256)":{"details":"Only a project owner, an operator, or the contract\'s owner can process held fees.","params":{"_projectId":"The ID of the project whos held fees should be processed."}},"redeemTokensOf(address,uint256,uint256,address,uint256,address,string,bytes)":{"details":"Only a token holder or a designated operator can redeem its tokens.","params":{"_beneficiary":"The address to send the terminal tokens to.","_holder":"The account to redeem tokens for.","_memo":"A memo to pass along to the emitted event.","_metadata":"Bytes to send along to the data source, delegate, and emitted event, if provided.","_minReturnedTokens":"The minimum amount of terminal tokens expected in return, as a fixed point number with the same amount of decimals as the terminal.","_projectId":"The ID of the project to which the tokens being redeemed belong.","_tokenCount":"The number of project tokens to redeem, as a fixed point number with 18 decimals. ignored: _token The token being reclaimed. This terminal ignores this property since it only manages one token. "},"returns":{"reclaimAmount":"The amount of terminal tokens that the project tokens were redeemed for, as a fixed point number with 18 decimals."}},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."},"setFee(uint256)":{"details":"Only the owner of this contract can change the fee.","params":{"_fee":"The new fee, out of MAX_FEE."}},"setFeeGauge(address)":{"details":"Only the owner of this contract can change the fee gauge.If the fee gauge reverts when called upon while a project is attempting to distribute its funds, a project\'s funds will be locked. This is a known risk.","params":{"_feeGauge":"The new fee gauge."}},"setFeelessTerminal(address,bool)":{"details":"Only the owner of this contract can set terminal\'s as feeless.","params":{"_flag":"A flag indicating whether the terminal should be feeless or not.","_terminal":"The terminal that can be paid towards while still bypassing fees."}},"supportsInterface(bytes4)":{"details":" See {IERC165-supportsInterface}.","params":{"_interfaceId":"The ID of the interface to check for adherance to."}},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."},"useAllowanceOf(uint256,uint256,uint256,address,uint256,address,string)":{"details":"Only a project\'s owner or a designated operator can use its allowance.Incurs the protocol fee.","params":{"_amount":"The amount of terminal tokens to use from this project\'s current allowance, as a fixed point number with the same amount of decimals as this terminal.","_beneficiary":"The address to send the funds to.","_currency":"The expected currency of the amount being distributed. Must match the project\'s current funding cycle\'s overflow allowance currency. ignored: _token The token being distributed. This terminal ignores this property since it only manages one token. ","_memo":"A memo to pass along to the emitted event.","_minReturnedTokens":"The minimum number of tokens that the `_amount` should be valued at in terms of this terminal\'s currency, as a fixed point number with 18 decimals.","_projectId":"The ID of the project to use the allowance of."},"returns":{"netDistributedAmount":"The amount of tokens that was distributed to the beneficiary, as a fixed point number with the same amount of decimals as the terminal."}}},"version":1},"userdoc":{"errors":{"PRBMath__MulDivOverflow(uint256,uint256)":[{"notice":"Emitted when the result overflows uint256."}]},"kind":"user","methods":{"acceptsToken(address)":{"notice":"A flag indicating if this terminal accepts the specified token."},"addToBalanceOf(uint256,uint256,address,string,bytes)":{"notice":"Receives funds belonging to the specified project."},"baseWeightCurrency()":{"notice":"The currency to base token issuance on."},"currency()":{"notice":"The currency to use when resolving price feeds for this terminal."},"currencyForToken(address)":{"notice":"The currency that should be used for the specified token. ignored: _token The token to check for the currency of."},"currentEthOverflowOf(uint256)":{"notice":"Gets the current overflowed amount in this terminal for a specified project, in terms of ETH."},"decimals()":{"notice":"The number of decimals the token fixed point amounts are expected to have."},"decimalsForToken(address)":{"notice":"The decimals that should be used in fixed number accounting for the specified token. ignored: _token The token to check for the decimals of."},"directory()":{"notice":"The directory of terminals and controllers for projects."},"distributePayoutsOf(uint256,uint256,uint256,address,uint256,string)":{"notice":"Distributes payouts for a project with the distribution limit of its current funding cycle."},"fee()":{"notice":"The platform fee percent."},"feeGauge()":{"notice":"The data source that returns a discount to apply to a project\'s fee."},"heldFeesOf(uint256)":{"notice":"The fees that are currently being held to be processed later for each project."},"isFeelessTerminal(address)":{"notice":"Terminals that can be paid towards from this terminal without incurring a fee. _terminal The terminal that can be paid toward."},"migrate(uint256,address)":{"notice":"Allows a project owner to migrate its funds and operations to a new terminal that accepts the same token type."},"operatorStore()":{"notice":" A contract storing operator assignments."},"pay(uint256,uint256,address,address,uint256,bool,string,bytes)":{"notice":"Contribute tokens to a project."},"payoutSplitsGroup()":{"notice":"The group that payout splits coming from this terminal are identified by."},"prices()":{"notice":"The contract that exposes price feeds."},"processFees(uint256)":{"notice":"Process any fees that are being held for the project."},"projects()":{"notice":"Mints ERC-721\'s that represent project ownership and transfers."},"redeemTokensOf(address,uint256,uint256,address,uint256,address,string,bytes)":{"notice":"Holders can redeem their tokens to claim the project\'s overflowed tokens, or to trigger rules determined by the project\'s current funding cycle\'s data source."},"setFee(uint256)":{"notice":"Allows the fee to be updated."},"setFeeGauge(address)":{"notice":"Allows the fee gauge to be updated."},"setFeelessTerminal(address,bool)":{"notice":"Sets whether projects operating on this terminal can pay projects operating on the specified terminal without incurring a fee."},"splitsStore()":{"notice":"The contract that stores splits for each project."},"store()":{"notice":"The contract that stores and manages the terminal\'s data."},"supportsInterface(bytes4)":{"notice":"Indicates if this contract adheres to the specified interface."},"token()":{"notice":"The token that this terminal accepts."},"useAllowanceOf(uint256,uint256,uint256,address,uint256,address,string)":{"notice":"Allows a project to send funds from its overflow up to the preconfigured allowance."}},"notice":"Manages all inflows and outflows of ETH funds into the protocol ecosystem.","version":1}},"settings":{"compilationTarget":{"contracts/JBETHPaymentTerminal.sol":"JBETHPaymentTerminal"},"evmVersion":"berlin","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":1000000},"remappings":[]},"sources":{"@openzeppelin/contracts/access/Ownable.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../utils/Context.sol\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        require(owner() == _msgSender(), \\"Ownable: caller is not the owner\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby removing any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\"Ownable: new owner is the zero address\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n","keccak256":"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9","license":"MIT"},"@openzeppelin/contracts/security/ReentrancyGuard.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (security/ReentrancyGuard.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Contract module that helps prevent reentrant calls to a function.\\n *\\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\\n * available, which can be applied to functions to make sure there are no nested\\n * (reentrant) calls to them.\\n *\\n * Note that because there is a single `nonReentrant` guard, functions marked as\\n * `nonReentrant` may not call one another. This can be worked around by making\\n * those functions `private`, and then adding `external` `nonReentrant` entry\\n * points to them.\\n *\\n * TIP: If you would like to learn more about reentrancy and alternative ways\\n * to protect against it, check out our blog post\\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\\n */\\nabstract contract ReentrancyGuard {\\n    // Booleans are more expensive than uint256 or any type that takes up a full\\n    // word because each write operation emits an extra SLOAD to first read the\\n    // slot\'s contents, replace the bits taken up by the boolean, and then write\\n    // back. This is the compiler\'s defense against contract upgrades and\\n    // pointer aliasing, and it cannot be disabled.\\n\\n    // The values being non-zero value makes deployment a bit more expensive,\\n    // but in exchange the refund on every call to nonReentrant will be lower in\\n    // amount. Since refunds are capped to a percentage of the total\\n    // transaction\'s gas, it is best to keep them low in cases like this one, to\\n    // increase the likelihood of the full refund coming into effect.\\n    uint256 private constant _NOT_ENTERED = 1;\\n    uint256 private constant _ENTERED = 2;\\n\\n    uint256 private _status;\\n\\n    constructor() {\\n        _status = _NOT_ENTERED;\\n    }\\n\\n    /**\\n     * @dev Prevents a contract from calling itself, directly or indirectly.\\n     * Calling a `nonReentrant` function from another `nonReentrant`\\n     * function is not supported. It is possible to prevent this from happening\\n     * by making the `nonReentrant` function external, and making it call a\\n     * `private` function that does the actual work.\\n     */\\n    modifier nonReentrant() {\\n        // On the first call to nonReentrant, _notEntered will be true\\n        require(_status != _ENTERED, \\"ReentrancyGuard: reentrant call\\");\\n\\n        // Any calls to nonReentrant after this point will fail\\n        _status = _ENTERED;\\n\\n        _;\\n\\n        // By storing the original value once again, a refund is triggered (see\\n        // https://eips.ethereum.org/EIPS/eip-2200)\\n        _status = _NOT_ENTERED;\\n    }\\n}\\n","keccak256":"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935","license":"MIT"},"@openzeppelin/contracts/token/ERC20/IERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller\'s account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller\'s\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n","keccak256":"0x61437cb513a887a1bbad006e7b1c8b414478427d33de47c5600af3c748f108da","license":"MIT"},"@openzeppelin/contracts/token/ERC721/IERC721.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../../utils/introspection/IERC165.sol\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n}\\n","keccak256":"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990","license":"MIT"},"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0-rc.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        require(isContract(target), \\"Address: call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\"Address: static call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\"Address: delegate call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0x3777e696b62134e6177440dbe6e6601c0c156a443f57167194b67e75527439de","license":"MIT"},"@openzeppelin/contracts/utils/Context.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n","keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT"},"@openzeppelin/contracts/utils/introspection/ERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC165.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n","keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT"},"@openzeppelin/contracts/utils/introspection/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n","keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT"},"@paulrberg/contracts/math/PRBMath.sol":{"content":"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\nimport \\"prb-math/contracts/PRBMath.sol\\";\\n","keccak256":"0x42821345981bc0434a90ba2268a2f5278dfe9e38166981d72fc7f3b776a29495","license":"Unlicense"},"contracts/JBETHPaymentTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/Address.sol\';\\nimport \'./abstract/JBPayoutRedemptionPaymentTerminal.sol\';\\n\\n/**\\n  @notice\\n  Manages all inflows and outflows of ETH funds into the protocol ecosystem.\\n\\n  @dev\\n  Inherits from -\\n  JBPayoutRedemptionPaymentTerminal: Generic terminal managing all inflows and outflows of funds into the protocol ecosystem.\\n*/\\ncontract JBETHPaymentTerminal is JBPayoutRedemptionPaymentTerminal {\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @param _baseWeightCurrency The currency to base token issuance on.\\n    @param _operatorStore A contract storing operator assignments.\\n    @param _projects A contract which mints ERC-721\'s that represent project ownership and transfers.\\n    @param _directory A contract storing directories of terminals and controllers for each project.\\n    @param _splitsStore A contract that stores splits for each project.\\n    @param _prices A contract that exposes price feeds.\\n    @param _store A contract that stores the terminal\'s data.\\n    @param _owner The address that will own this contract.\\n  */\\n  constructor(\\n    uint256 _baseWeightCurrency,\\n    IJBOperatorStore _operatorStore,\\n    IJBProjects _projects,\\n    IJBDirectory _directory,\\n    IJBSplitsStore _splitsStore,\\n    IJBPrices _prices,\\n    IJBSingleTokenPaymentTerminalStore _store,\\n    address _owner\\n  )\\n    JBPayoutRedemptionPaymentTerminal(\\n      JBTokens.ETH,\\n      18, // 18 decimals.\\n      JBCurrencies.ETH,\\n      _baseWeightCurrency,\\n      JBSplitsGroups.ETH_PAYOUT,\\n      _operatorStore,\\n      _projects,\\n      _directory,\\n      _splitsStore,\\n      _prices,\\n      _store,\\n      _owner\\n    )\\n  // solhint-disable-next-line no-empty-blocks\\n  {\\n\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------------- internal transactions ---------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Transfers tokens.\\n\\n    ignored: _from The address from which the transfer should originate.\\n    @param _to The address to which the transfer should go.\\n    @param _amount The amount of the transfer, as a fixed point number with the same number of decimals as this terminal.\\n  */\\n  function _transferFrom(\\n    address,\\n    address payable _to,\\n    uint256 _amount\\n  ) internal override {\\n    Address.sendValue(_to, _amount);\\n  }\\n\\n  /** \\n    @notice\\n    Logic to be triggered before transferring tokens from this terminal.\\n\\n    ignored: _to The address to which the transfer is going.\\n    ignored: _amount The amount of the transfer, as a fixed point number with the same number of decimals as this terminal.\\n  */\\n  // solhint-disable-next-line no-empty-blocks\\n  function _beforeTransferTo(address, uint256) internal override {}\\n}\\n","keccak256":"0xf9d84d6669269950fe91247dc75ce6d4b5c2d4fe0b302d967678f145a0cc7e3b","license":"MIT"},"contracts/abstract/JBOperatable.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBOperatable.sol\';\\n\\n/** \\n  @notice\\n  Modifiers to allow access to functions based on the message sender\'s operator status.\\n\\n  @dev\\n  Adheres to -\\n  IJBOperatable: General interface for the methods in this contract that interact with the blockchain\'s state according to the protocol\'s rules.\\n*/\\nabstract contract JBOperatable is IJBOperatable {\\n  //*********************************************************************//\\n  // --------------------------- custom errors -------------------------- //\\n  //*********************************************************************//\\n  error UNAUTHORIZED();\\n\\n  //*********************************************************************//\\n  // ---------------------------- modifiers ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Only allows the speficied account or an operator of the account to proceed. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n  */\\n  modifier requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) {\\n    _requirePermission(_account, _domain, _permissionIndex);\\n    _;\\n  }\\n\\n  /** \\n    @notice\\n    Only allows the speficied account, an operator of the account to proceed, or a truthy override flag. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n    @param _override A condition to force allowance for.\\n  */\\n  modifier requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) {\\n    _requirePermissionAllowingOverride(_account, _domain, _permissionIndex, _override);\\n    _;\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    A contract storing operator assignments.\\n  */\\n  IJBOperatorStore public immutable override operatorStore;\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _operatorStore A contract storing operator assignments.\\n  */\\n  constructor(IJBOperatorStore _operatorStore) {\\n    operatorStore = _operatorStore;\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- internal views ------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account or has the specified permission.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _permissionIndex The permission index that an operator must have within the specified domain to be allowed.\\n  */\\n  function _requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) internal view {\\n    if (\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account, has the specified permission, or the override condition is true.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _domain The permission index that an operator must have within the specified domain to be allowed.\\n    @param _override The override condition to allow.\\n  */\\n  function _requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) internal view {\\n    if (\\n      !_override &&\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n}\\n","keccak256":"0x9a5781d40c6b8013249653253369cda2047aa35329a1fcd4dc6353cd2dde30a6","license":"MIT"},"contracts/abstract/JBPayoutRedemptionPaymentTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/access/Ownable.sol\';\\nimport \'@openzeppelin/contracts/security/ReentrancyGuard.sol\';\\nimport \'@openzeppelin/contracts/token/ERC20/IERC20.sol\';\\nimport \'@paulrberg/contracts/math/PRBMath.sol\';\\nimport \'./../interfaces/IJBController.sol\';\\nimport \'./../interfaces/IJBPayoutRedemptionPaymentTerminal.sol\';\\nimport \'./../libraries/JBConstants.sol\';\\nimport \'./../libraries/JBCurrencies.sol\';\\nimport \'./../libraries/JBFixedPointNumber.sol\';\\nimport \'./../libraries/JBFundingCycleMetadataResolver.sol\';\\nimport \'./../libraries/JBOperations.sol\';\\nimport \'./../libraries/JBSplitsGroups.sol\';\\nimport \'./../libraries/JBTokens.sol\';\\nimport \'./../structs/JBTokenAmount.sol\';\\nimport \'./JBOperatable.sol\';\\nimport \'./JBSingleTokenPaymentTerminal.sol\';\\n\\n/**\\n  @notice\\n  Generic terminal managing all inflows and outflows of funds into the protocol ecosystem.\\n\\n  @dev\\n  A project can transfer its funds, along with the power to reconfigure and mint/burn their tokens, from this contract to another allowed terminal of the same token type contract at any time.\\n\\n  @dev\\n  Adheres to -\\n  IJBPayoutRedemptionPaymentTerminal: General interface for the methods in this contract that interact with the blockchain\'s state according to the protocol\'s rules.\\n\\n  @dev\\n  Inherits from -\\n  JBSingleTokenPaymentTerminal: Generic terminal managing all inflows of funds into the protocol ecosystem for one token.\\n  JBOperatable: Includes convenience functionality for checking a message sender\'s permissions before executing certain transactions.\\n  Ownable: Includes convenience functionality for checking a message sender\'s permissions before executing certain transactions.\\n  ReentrancyGuard: Contract module that helps prevent reentrant calls to a function.\\n*/\\nabstract contract JBPayoutRedemptionPaymentTerminal is\\n  IJBPayoutRedemptionPaymentTerminal,\\n  JBSingleTokenPaymentTerminal,\\n  JBOperatable,\\n  Ownable,\\n  ReentrancyGuard\\n{\\n  // A library that parses the packed funding cycle metadata into a friendlier format.\\n  using JBFundingCycleMetadataResolver for JBFundingCycle;\\n\\n  //*********************************************************************//\\n  // --------------------------- custom errors ------------------------- //\\n  //*********************************************************************//\\n  error FEE_TOO_HIGH();\\n  error INADEQUATE_DISTRIBUTION_AMOUNT();\\n  error INADEQUATE_RECLAIM_AMOUNT();\\n  error INADEQUATE_TOKEN_COUNT();\\n  error NO_MSG_VALUE_ALLOWED();\\n  error PAY_TO_ZERO_ADDRESS();\\n  error PROJECT_TERMINAL_MISMATCH();\\n  error REDEEM_TO_ZERO_ADDRESS();\\n  error TERMINAL_IN_SPLIT_ZERO_ADDRESS();\\n  error TERMINAL_TOKENS_INCOMPATIBLE();\\n\\n  //*********************************************************************//\\n  // ---------------------------- modifiers ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    A modifier that verifies this terminal is a terminal of provided project ID.\\n  */\\n  modifier isTerminalOf(uint256 _projectId) {\\n    if (!directory.isTerminalOf(_projectId, this)) revert PROJECT_TERMINAL_MISMATCH();\\n    _;\\n  }\\n\\n  //*********************************************************************//\\n  // --------------------- private stored constants -------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Maximum fee that can be set for a funding cycle configuration.\\n\\n    @dev\\n    Out of MAX_FEE (50_000_000 / 1_000_000_000).\\n  */\\n  uint256 private constant _FEE_CAP = 50_000_000;\\n\\n  /**\\n    @notice\\n    The protocol project ID is 1, as it should be the first project launched during the deployment process.\\n  */\\n  uint256 private constant _PROTOCOL_PROJECT_ID = 1;\\n\\n  //*********************************************************************//\\n  // --------------------- private stored properties ------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Fees that are being held to be processed later.\\n\\n    _projectId The ID of the project for which fees are being held.\\n  */\\n  mapping(uint256 => JBFee[]) private _heldFeesOf;\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Mints ERC-721\'s that represent project ownership and transfers.\\n  */\\n  IJBProjects public immutable override projects;\\n\\n  /**\\n    @notice\\n    The directory of terminals and controllers for projects.\\n  */\\n  IJBDirectory public immutable override directory;\\n\\n  /**\\n    @notice\\n    The contract that stores splits for each project.\\n  */\\n  IJBSplitsStore public immutable override splitsStore;\\n\\n  /**\\n    @notice\\n    The contract that exposes price feeds.\\n  */\\n  IJBPrices public immutable override prices;\\n\\n  /**\\n    @notice\\n    The contract that stores and manages the terminal\'s data.\\n  */\\n  IJBSingleTokenPaymentTerminalStore public immutable override store;\\n\\n  /**\\n    @notice\\n    The currency to base token issuance on.\\n\\n    @dev\\n    If this differs from `currency`, there must be a price feed available to convert `currency` to `baseWeightCurrency`.\\n  */\\n  uint256 public immutable override baseWeightCurrency;\\n\\n  /**\\n    @notice\\n    The group that payout splits coming from this terminal are identified by.\\n  */\\n  uint256 public immutable override payoutSplitsGroup;\\n\\n  //*********************************************************************//\\n  // --------------------- public stored properties -------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    The platform fee percent.\\n\\n    @dev\\n    Out of MAX_FEE (25_000_000 / 1_000_000_000)\\n  */\\n  uint256 public override fee = 25_000_000; // 2.5%\\n\\n  /**\\n    @notice\\n    The data source that returns a discount to apply to a project\'s fee.\\n  */\\n  IJBFeeGauge public override feeGauge;\\n\\n  /**\\n    @notice\\n    Terminals that can be paid towards from this terminal without incurring a fee.\\n\\n    _terminal The terminal that can be paid toward.\\n  */\\n  mapping(IJBPaymentTerminal => bool) public override isFeelessTerminal;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Gets the current overflowed amount in this terminal for a specified project, in terms of ETH.\\n\\n    @dev\\n    The current overflow is represented as a fixed point number with 18 decimals.\\n\\n    @param _projectId The ID of the project to get overflow for.\\n\\n    @return The current amount of ETH overflow that project has in this terminal, as a fixed point number with 18 decimals.\\n  */\\n  function currentEthOverflowOf(uint256 _projectId) external view override returns (uint256) {\\n    // Get this terminal\'s current overflow.\\n    uint256 _overflow = store.currentOverflowOf(this, _projectId);\\n\\n    // Adjust the decimals of the fixed point number if needed to have 18 decimals.\\n    uint256 _adjustedOverflow = (decimals == 18)\\n      ? _overflow\\n      : JBFixedPointNumber.adjustDecimals(_overflow, decimals, 18);\\n\\n    // Return the amount converted to ETH.\\n    return\\n      (currency == JBCurrencies.ETH)\\n        ? _adjustedOverflow\\n        : PRBMath.mulDiv(\\n          _adjustedOverflow,\\n          10**decimals,\\n          prices.priceFor(currency, JBCurrencies.ETH, decimals)\\n        );\\n  }\\n\\n  /**\\n    @notice\\n    The fees that are currently being held to be processed later for each project.\\n\\n    @param _projectId The ID of the project for which fees are being held.\\n\\n    @return An array of fees that are being held.\\n  */\\n  function heldFeesOf(uint256 _projectId) external view override returns (JBFee[] memory) {\\n    return _heldFeesOf[_projectId];\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- public views --------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Indicates if this contract adheres to the specified interface.\\n\\n    @dev \\n    See {IERC165-supportsInterface}.\\n\\n    @param _interfaceId The ID of the interface to check for adherance to.\\n  */\\n  function supportsInterface(bytes4 _interfaceId)\\n    public\\n    view\\n    virtual\\n    override(JBSingleTokenPaymentTerminal, IERC165)\\n    returns (bool)\\n  {\\n    return\\n      _interfaceId == type(IJBPayoutRedemptionPaymentTerminal).interfaceId ||\\n      _interfaceId == type(IJBPayoutTerminal).interfaceId ||\\n      _interfaceId == type(IJBAllowanceTerminal).interfaceId ||\\n      _interfaceId == type(IJBRedemptionTerminal).interfaceId ||\\n      _interfaceId == type(IJBOperatable).interfaceId ||\\n      super.supportsInterface(_interfaceId);\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @param _token The token that this terminal manages.\\n    @param _decimals The number of decimals the token fixed point amounts are expected to have.\\n    @param _currency The currency that this terminal\'s token adheres to for price feeds.\\n    @param _baseWeightCurrency The currency to base token issuance on.\\n    @param _payoutSplitsGroup The group that denotes payout splits from this terminal in the splits store.\\n    @param _operatorStore A contract storing operator assignments.\\n    @param _projects A contract which mints ERC-721\'s that represent project ownership and transfers.\\n    @param _directory A contract storing directories of terminals and controllers for each project.\\n    @param _splitsStore A contract that stores splits for each project.\\n    @param _prices A contract that exposes price feeds.\\n    @param _store A contract that stores the terminal\'s data.\\n    @param _owner The address that will own this contract.\\n  */\\n  constructor(\\n    address _token,\\n    uint256 _decimals,\\n    uint256 _currency,\\n    uint256 _baseWeightCurrency,\\n    uint256 _payoutSplitsGroup,\\n    IJBOperatorStore _operatorStore,\\n    IJBProjects _projects,\\n    IJBDirectory _directory,\\n    IJBSplitsStore _splitsStore,\\n    IJBPrices _prices,\\n    IJBSingleTokenPaymentTerminalStore _store,\\n    address _owner\\n  ) JBSingleTokenPaymentTerminal(_token, _decimals, _currency) JBOperatable(_operatorStore) {\\n    baseWeightCurrency = _baseWeightCurrency;\\n    payoutSplitsGroup = _payoutSplitsGroup;\\n    projects = _projects;\\n    directory = _directory;\\n    splitsStore = _splitsStore;\\n    prices = _prices;\\n    store = _store;\\n\\n    transferOwnership(_owner);\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------------- external transactions ---------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Contribute tokens to a project.\\n\\n    @param _projectId The ID of the project being paid.\\n    @param _amount The amount of terminal tokens being received, as a fixed point number with the same amount of decimals as this terminal. If this terminal\'s token is ETH, this is ignored and msg.value is used in its place.\\n    ignored: _token The token being paid. This terminal ignores this property since it only manages one token. \\n    @param _beneficiary The address to mint tokens for and pass along to the funding cycle\'s delegate.\\n    @param _minReturnedTokens The minimum number of project tokens expected in return, as a fixed point number with the same amount of decimals as this terminal.\\n    @param _preferClaimedTokens A flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas.\\n    @param _memo A memo to pass along to the emitted event, and passed along the the funding cycle\'s data source and delegate.  A data source can alter the memo before emitting in the event and forwarding to the delegate.\\n    @param _metadata Bytes to send along to the data source, delegate, and emitted event, if provided.\\n\\n    @return The number of tokens minted for the beneficiary, as a fixed point number with 18 decimals.\\n  */\\n  function pay(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable virtual override isTerminalOf(_projectId) returns (uint256) {\\n    // ETH shouldn\'t be sent if this terminal\'s token isn\'t ETH.\\n    if (token != JBTokens.ETH) {\\n      if (msg.value > 0) revert NO_MSG_VALUE_ALLOWED();\\n\\n      // Transfer tokens to this terminal from the msg sender.\\n      _transferFrom(msg.sender, payable(address(this)), _amount);\\n    }\\n    // If this terminal\'s token is ETH, override _amount with msg.value.\\n    else _amount = msg.value;\\n\\n    return\\n      _pay(\\n        _amount,\\n        msg.sender,\\n        _projectId,\\n        _beneficiary,\\n        _minReturnedTokens,\\n        _preferClaimedTokens,\\n        _memo,\\n        _metadata\\n      );\\n  }\\n\\n  /**\\n    @notice\\n    Holders can redeem their tokens to claim the project\'s overflowed tokens, or to trigger rules determined by the project\'s current funding cycle\'s data source.\\n\\n    @dev\\n    Only a token holder or a designated operator can redeem its tokens.\\n\\n    @param _holder The account to redeem tokens for.\\n    @param _projectId The ID of the project to which the tokens being redeemed belong.\\n    @param _tokenCount The number of project tokens to redeem, as a fixed point number with 18 decimals.\\n    ignored: _token The token being reclaimed. This terminal ignores this property since it only manages one token. \\n    @param _minReturnedTokens The minimum amount of terminal tokens expected in return, as a fixed point number with the same amount of decimals as the terminal.\\n    @param _beneficiary The address to send the terminal tokens to.\\n    @param _memo A memo to pass along to the emitted event.\\n    @param _metadata Bytes to send along to the data source, delegate, and emitted event, if provided.\\n\\n    @return reclaimAmount The amount of terminal tokens that the project tokens were redeemed for, as a fixed point number with 18 decimals.\\n  */\\n  function redeemTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    address,\\n    uint256 _minReturnedTokens,\\n    address payable _beneficiary,\\n    string memory _memo,\\n    bytes memory _metadata\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(_holder, _projectId, JBOperations.REDEEM)\\n    returns (uint256 reclaimAmount)\\n  {\\n    return\\n      _redeemTokensOf(\\n        _holder,\\n        _projectId,\\n        _tokenCount,\\n        _minReturnedTokens,\\n        _beneficiary,\\n        _memo,\\n        _metadata\\n      );\\n  }\\n\\n  /**\\n    @notice\\n    Distributes payouts for a project with the distribution limit of its current funding cycle.\\n\\n    @dev\\n    Payouts are sent to the preprogrammed splits. Any leftover is sent to the project\'s owner.\\n\\n    @dev\\n    Anyone can distribute payouts on a project\'s behalf. The project can preconfigure a wildcard split that is used to send funds to msg.sender. This can be used to incentivize calling this function.\\n\\n    @dev\\n    All funds distributed outside of this contract or any feeless terminals incure the protocol fee.\\n\\n    @param _projectId The ID of the project having its payouts distributed.\\n    @param _amount The amount of terminal tokens to distribute, as a fixed point number with same number of decimals as this terminal.\\n    @param _currency The expected currency of the amount being distributed. Must match the project\'s current funding cycle\'s distribution limit currency.\\n    ignored: _token The token being distributed. This terminal ignores this property since it only manages one token. \\n    @param _minReturnedTokens The minimum number of terminal tokens that the `_amount` should be valued at in terms of this terminal\'s currency, as a fixed point number with the same number of decimals as this terminal.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return netLeftoverDistributionAmount The amount that was sent to the project owner, as a fixed point number with the same amount of decimals as this terminal.\\n  */\\n  function distributePayoutsOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency,\\n    address,\\n    uint256 _minReturnedTokens,\\n    string calldata _memo\\n  ) external virtual override returns (uint256 netLeftoverDistributionAmount) {\\n    return _distributePayoutsOf(_projectId, _amount, _currency, _minReturnedTokens, _memo);\\n  }\\n\\n  /**\\n    @notice\\n    Allows a project to send funds from its overflow up to the preconfigured allowance.\\n\\n    @dev\\n    Only a project\'s owner or a designated operator can use its allowance.\\n\\n    @dev\\n    Incurs the protocol fee.\\n\\n    @param _projectId The ID of the project to use the allowance of.\\n    @param _amount The amount of terminal tokens to use from this project\'s current allowance, as a fixed point number with the same amount of decimals as this terminal.\\n    @param _currency The expected currency of the amount being distributed. Must match the project\'s current funding cycle\'s overflow allowance currency.\\n    ignored: _token The token being distributed. This terminal ignores this property since it only manages one token. \\n    @param _minReturnedTokens The minimum number of tokens that the `_amount` should be valued at in terms of this terminal\'s currency, as a fixed point number with 18 decimals.\\n    @param _beneficiary The address to send the funds to.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return netDistributedAmount The amount of tokens that was distributed to the beneficiary, as a fixed point number with the same amount of decimals as the terminal.\\n  */\\n  function useAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency,\\n    address,\\n    uint256 _minReturnedTokens,\\n    address payable _beneficiary,\\n    string memory _memo\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.USE_ALLOWANCE)\\n    returns (uint256 netDistributedAmount)\\n  {\\n    return _useAllowanceOf(_projectId, _amount, _currency, _minReturnedTokens, _beneficiary, _memo);\\n  }\\n\\n  /**\\n    @notice\\n    Allows a project owner to migrate its funds and operations to a new terminal that accepts the same token type.\\n\\n    @dev\\n    Only a project\'s owner or a designated operator can migrate it.\\n\\n    @param _projectId The ID of the project being migrated.\\n    @param _to The terminal contract that will gain the project\'s funds.\\n\\n    @return balance The amount of funds that were migrated, as a fixed point number with the same amount of decimals as this terminal.\\n  */\\n  function migrate(uint256 _projectId, IJBPaymentTerminal _to)\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.MIGRATE_TERMINAL)\\n    returns (uint256 balance)\\n  {\\n    // The terminal being migrated to must accept the same token as this terminal.\\n    if (!_to.acceptsToken(token)) revert TERMINAL_TOKENS_INCOMPATIBLE();\\n\\n    // Record the migration in the store.\\n    balance = store.recordMigration(_projectId);\\n\\n    // Transfer the balance if needed.\\n    if (balance > 0) {\\n      // Trigger any inherited pre-transfer logic.\\n      _beforeTransferTo(address(_to), balance);\\n\\n      // If this terminal\'s token is ETH, send it in msg.value.\\n      uint256 _payableValue = token == JBTokens.ETH ? balance : 0;\\n\\n      // Withdraw the balance to transfer to the new terminal;\\n      _to.addToBalanceOf{value: _payableValue}(_projectId, balance, token, \'\', bytes(\'\'));\\n    }\\n\\n    emit Migrate(_projectId, _to, balance, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Receives funds belonging to the specified project.\\n\\n    @param _projectId The ID of the project to which the funds received belong.\\n    @param _amount The amount of tokens to add, as a fixed point number with the same number of decimals as this terminal. If this is an ETH terminal, this is ignored and msg.value is used instead.\\n    ignored: _token The token being paid. This terminal ignores this property since it only manages one currency. \\n    @param _memo A memo to pass along to the emitted event.\\n    @param _metadata Extra data to pass along to the emitted event.\\n  */\\n  function addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable virtual override isTerminalOf(_projectId) {\\n    // If this terminal\'s token isn\'t ETH, make sure no msg.value was sent, then transfer the tokens in from msg.sender.\\n    if (token != JBTokens.ETH) {\\n      // Amount must be greater than 0.\\n      if (msg.value > 0) revert NO_MSG_VALUE_ALLOWED();\\n\\n      // Transfer tokens to this terminal from the msg sender.\\n      _transferFrom(msg.sender, payable(address(this)), _amount);\\n    }\\n    // If the terminal\'s token is ETH, override `_amount` with msg.value.\\n    else _amount = msg.value;\\n\\n    _addToBalanceOf(_projectId, _amount, _memo, _metadata);\\n  }\\n\\n  /**\\n    @notice\\n    Process any fees that are being held for the project.\\n\\n    @dev\\n    Only a project owner, an operator, or the contract\'s owner can process held fees.\\n\\n    @param _projectId The ID of the project whos held fees should be processed.\\n  */\\n  function processFees(uint256 _projectId)\\n    external\\n    virtual\\n    override\\n    requirePermissionAllowingOverride(\\n      projects.ownerOf(_projectId),\\n      _projectId,\\n      JBOperations.PROCESS_FEES,\\n      msg.sender == owner()\\n    )\\n  {\\n    // Get a reference to the project\'s held fees.\\n    JBFee[] memory _heldFees = _heldFeesOf[_projectId];\\n\\n    // Delete the held fees.\\n    delete _heldFeesOf[_projectId];\\n\\n    // Process each fee.\\n    for (uint256 _i = 0; _i < _heldFees.length; _i++) {\\n      // Get the fee amount.\\n      uint256 _amount = _feeAmount(\\n        _heldFees[_i].amount,\\n        _heldFees[_i].fee,\\n        _heldFees[_i].feeDiscount\\n      );\\n\\n      // Process the fee.\\n      _processFee(_amount, _heldFees[_i].beneficiary);\\n\\n      emit ProcessFee(_projectId, _amount, true, _heldFees[_i].beneficiary, msg.sender);\\n    }\\n  }\\n\\n  /**\\n    @notice\\n    Allows the fee to be updated.\\n\\n    @dev\\n    Only the owner of this contract can change the fee.\\n\\n    @param _fee The new fee, out of MAX_FEE.\\n  */\\n  function setFee(uint256 _fee) external virtual override onlyOwner {\\n    // The provided fee must be within the max.\\n    if (_fee > _FEE_CAP) revert FEE_TOO_HIGH();\\n\\n    // Store the new fee.\\n    fee = _fee;\\n\\n    emit SetFee(_fee, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Allows the fee gauge to be updated.\\n\\n    @dev\\n    Only the owner of this contract can change the fee gauge.\\n\\n    @dev\\n    If the fee gauge reverts when called upon while a project is attempting to distribute its funds, a project\'s funds will be locked. This is a known risk.\\n\\n    @param _feeGauge The new fee gauge.\\n  */\\n  function setFeeGauge(IJBFeeGauge _feeGauge) external virtual override onlyOwner {\\n    // Store the new fee gauge.\\n    feeGauge = _feeGauge;\\n\\n    emit SetFeeGauge(_feeGauge, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Sets whether projects operating on this terminal can pay projects operating on the specified terminal without incurring a fee.\\n\\n    @dev\\n    Only the owner of this contract can set terminal\'s as feeless.\\n\\n    @param _terminal The terminal that can be paid towards while still bypassing fees.\\n    @param _flag A flag indicating whether the terminal should be feeless or not.\\n  */\\n  function setFeelessTerminal(IJBPaymentTerminal _terminal, bool _flag)\\n    external\\n    virtual\\n    override\\n    onlyOwner\\n  {\\n    // Set the flag value.\\n    isFeelessTerminal[_terminal] = _flag;\\n\\n    emit SetFeelessTerminal(_terminal, _flag, msg.sender);\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------------- internal transactions ---------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Transfers tokens.\\n\\n    @param _from The address from which the transfer should originate.\\n    @param _to The address to which the transfer should go.\\n    @param _amount The amount of the transfer, as a fixed point number with the same number of decimals as this terminal.\\n  */\\n  function _transferFrom(\\n    address _from,\\n    address payable _to,\\n    uint256 _amount\\n  ) internal virtual;\\n\\n  /** \\n    @notice\\n    Logic to be triggered before transferring tokens from this terminal.\\n\\n    @param _to The address to which the transfer is going.\\n    @param _amount The amount of the transfer, as a fixed point number with the same number of decimals as this terminal.\\n  */\\n  function _beforeTransferTo(address _to, uint256 _amount) internal virtual;\\n\\n  //*********************************************************************//\\n  // --------------------- private helper functions -------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Holders can redeem their tokens to claim the project\'s overflowed tokens, or to trigger rules determined by the project\'s current funding cycle\'s data source.\\n\\n    @dev\\n    Only a token holder or a designated operator can redeem its tokens.\\n\\n    @param _holder The account to redeem tokens for.\\n    @param _projectId The ID of the project to which the tokens being redeemed belong.\\n    @param _tokenCount The number of project tokens to redeem, as a fixed point number with 18 decimals.\\n    @param _minReturnedTokens The minimum amount of terminal tokens expected in return, as a fixed point number with the same amount of decimals as the terminal.\\n    @param _beneficiary The address to send the terminal tokens to.\\n    @param _memo A memo to pass along to the emitted event.\\n    @param _metadata Bytes to send along to the data source, delegate, and emitted event, if provided.\\n\\n    @return reclaimAmount The amount of terminal tokens that the project tokens were redeemed for, as a fixed point number with 18 decimals.\\n  */\\n  function _redeemTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    uint256 _minReturnedTokens,\\n    address payable _beneficiary,\\n    string memory _memo,\\n    bytes memory _metadata\\n  ) private returns (uint256 reclaimAmount) {\\n    // Can\'t send reclaimed funds to the zero address.\\n    if (_beneficiary == address(0)) revert REDEEM_TO_ZERO_ADDRESS();\\n\\n    // Define variables that will be needed outside the scoped section below.\\n    // Keep a reference to the funding cycle during which the redemption is being made.\\n    JBFundingCycle memory _fundingCycle;\\n\\n    // Scoped section prevents stack too deep. `_delegate` only used within scope.\\n    {\\n      IJBRedemptionDelegate _delegate;\\n\\n      // Record the redemption.\\n      (_fundingCycle, reclaimAmount, _delegate, _memo) = store.recordRedemptionFor(\\n        _holder,\\n        _projectId,\\n        _tokenCount,\\n        _memo,\\n        _metadata\\n      );\\n\\n      // The amount being reclaimed must be at least as much as was expected.\\n      if (reclaimAmount < _minReturnedTokens) revert INADEQUATE_RECLAIM_AMOUNT();\\n\\n      // Burn the project tokens.\\n      if (_tokenCount > 0)\\n        IJBController(directory.controllerOf(_projectId)).burnTokensOf(\\n          _holder,\\n          _projectId,\\n          _tokenCount,\\n          \'\',\\n          false\\n        );\\n\\n      // If a delegate was returned by the data source, issue a callback to it.\\n      if (_delegate != IJBRedemptionDelegate(address(0))) {\\n        JBDidRedeemData memory _data = JBDidRedeemData(\\n          _holder,\\n          _projectId,\\n          _tokenCount,\\n          JBTokenAmount(token, reclaimAmount, decimals, currency),\\n          _beneficiary,\\n          _memo,\\n          _metadata\\n        );\\n        _delegate.didRedeem(_data);\\n        emit DelegateDidRedeem(_delegate, _data, msg.sender);\\n      }\\n    }\\n\\n    // Send the reclaimed funds to the beneficiary.\\n    if (reclaimAmount > 0) _transferFrom(address(this), _beneficiary, reclaimAmount);\\n\\n    emit RedeemTokens(\\n      _fundingCycle.configuration,\\n      _fundingCycle.number,\\n      _projectId,\\n      _holder,\\n      _beneficiary,\\n      _tokenCount,\\n      reclaimAmount,\\n      _memo,\\n      _metadata,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Distributes payouts for a project with the distribution limit of its current funding cycle.\\n\\n    @dev\\n    Payouts are sent to the preprogrammed splits. Any leftover is sent to the project\'s owner.\\n\\n    @dev\\n    Anyone can distribute payouts on a project\'s behalf. The project can preconfigure a wildcard split that is used to send funds to msg.sender. This can be used to incentivize calling this function.\\n\\n    @dev\\n    All funds distributed outside of this contract or any feeless terminals incure the protocol fee.\\n\\n    @param _projectId The ID of the project having its payouts distributed.\\n    @param _amount The amount of terminal tokens to distribute, as a fixed point number with same number of decimals as this terminal.\\n    @param _currency The expected currency of the amount being distributed. Must match the project\'s current funding cycle\'s distribution limit currency.\\n    @param _minReturnedTokens The minimum number of terminal tokens that the `_amount` should be valued at in terms of this terminal\'s currency, as a fixed point number with the same number of decimals as this terminal.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return netLeftoverDistributionAmount The amount that was sent to the project owner, as a fixed point number with the same amount of decimals as this terminal.\\n  */\\n  function _distributePayoutsOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency,\\n    uint256 _minReturnedTokens,\\n    string calldata _memo\\n  ) private returns (uint256 netLeftoverDistributionAmount) {\\n    // Record the distribution.\\n    (JBFundingCycle memory _fundingCycle, uint256 _distributedAmount) = store.recordDistributionFor(\\n      _projectId,\\n      _amount,\\n      _currency\\n    );\\n\\n    // The amount being distributed must be at least as much as was expected.\\n    if (_distributedAmount < _minReturnedTokens) revert INADEQUATE_DISTRIBUTION_AMOUNT();\\n\\n    // Get a reference to the project owner, which will receive tokens from paying the platform fee\\n    // and receive any extra distributable funds not allocated to payout splits.\\n    address payable _projectOwner = payable(projects.ownerOf(_projectId));\\n\\n    // Define variables that will be needed outside the scoped section below.\\n    // Keep a reference to the fee amount that was paid.\\n    uint256 _fee;\\n\\n    // Scoped section prevents stack too deep. `_feeDiscount`, `_feeEligibleDistributionAmount`, and `_leftoverDistributionAmount` only used within scope.\\n    {\\n      // Get the amount of discount that should be applied to any fees taken.\\n      // If the fee is zero, set the discount to 100% for convinience.\\n      uint256 _feeDiscount = fee == 0\\n        ? JBConstants.MAX_FEE_DISCOUNT\\n        : _currentFeeDiscount(_projectId);\\n\\n      // The amount distributed that is eligible for incurring fees.\\n      uint256 _feeEligibleDistributionAmount;\\n\\n      // The amount leftover after distributing to the splits.\\n      uint256 _leftoverDistributionAmount;\\n\\n      // Payout to splits and get a reference to the leftover transfer amount after all splits have been paid.\\n      // Also get a reference to the amount that was distributed to splits from which fees should be taken.\\n      (_leftoverDistributionAmount, _feeEligibleDistributionAmount) = _distributeToPayoutSplitsOf(\\n        _projectId,\\n        _fundingCycle.configuration,\\n        payoutSplitsGroup,\\n        _distributedAmount,\\n        _feeDiscount\\n      );\\n\\n      // Leftover distribution amount is also eligible for a fee since the funds are going out of the ecosystem to _beneficiary.\\n      _feeEligibleDistributionAmount += _leftoverDistributionAmount;\\n\\n      // Take the fee.\\n      _fee = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT || _feeEligibleDistributionAmount == 0\\n        ? 0\\n        : _takeFeeFrom(\\n          _projectId,\\n          _fundingCycle,\\n          _feeEligibleDistributionAmount,\\n          _projectOwner,\\n          _feeDiscount\\n        );\\n\\n      // Get a reference to how much to distribute to the project owner, which is the leftover amount minus any fees.\\n      netLeftoverDistributionAmount = _leftoverDistributionAmount == 0\\n        ? 0\\n        : _leftoverDistributionAmount - _feeAmount(_leftoverDistributionAmount, fee, _feeDiscount);\\n\\n      // Transfer any remaining balance to the project owner.\\n      if (netLeftoverDistributionAmount > 0)\\n        _transferFrom(address(this), _projectOwner, netLeftoverDistributionAmount);\\n    }\\n\\n    emit DistributePayouts(\\n      _fundingCycle.configuration,\\n      _fundingCycle.number,\\n      _projectId,\\n      _projectOwner,\\n      _amount,\\n      _distributedAmount,\\n      _fee,\\n      netLeftoverDistributionAmount,\\n      _memo,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Allows a project to send funds from its overflow up to the preconfigured allowance.\\n\\n    @dev\\n    Only a project\'s owner or a designated operator can use its allowance.\\n\\n    @dev\\n    Incurs the protocol fee.\\n\\n    @param _projectId The ID of the project to use the allowance of.\\n    @param _amount The amount of terminal tokens to use from this project\'s current allowance, as a fixed point number with the same amount of decimals as this terminal.\\n    @param _currency The expected currency of the amount being distributed. Must match the project\'s current funding cycle\'s overflow allowance currency.\\n    @param _minReturnedTokens The minimum number of tokens that the `_amount` should be valued at in terms of this terminal\'s currency, as a fixed point number with 18 decimals.\\n    @param _beneficiary The address to send the funds to.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return netDistributedAmount The amount of tokens that was distributed to the beneficiary, as a fixed point number with the same amount of decimals as the terminal.\\n  */\\n  function _useAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency,\\n    uint256 _minReturnedTokens,\\n    address payable _beneficiary,\\n    string memory _memo\\n  ) private returns (uint256 netDistributedAmount) {\\n    // Record the use of the allowance.\\n    (JBFundingCycle memory _fundingCycle, uint256 _distributedAmount) = store.recordUsedAllowanceOf(\\n      _projectId,\\n      _amount,\\n      _currency\\n    );\\n\\n    // The amount being withdrawn must be at least as much as was expected.\\n    if (_distributedAmount < _minReturnedTokens) revert INADEQUATE_DISTRIBUTION_AMOUNT();\\n\\n    // Scoped section prevents stack too deep. `_fee`, `_projectOwner`, `_feeDiscount`, and `_netAmount` only used within scope.\\n    {\\n      // Keep a reference to the fee amount that was paid.\\n      uint256 _fee;\\n\\n      // Get a reference to the project owner, which will receive tokens from paying the platform fee.\\n      address _projectOwner = projects.ownerOf(_projectId);\\n\\n      // Get the amount of discount that should be applied to any fees taken.\\n      // If the fee is zero, set the discount to 100% for convinience.\\n      uint256 _feeDiscount = fee == 0\\n        ? JBConstants.MAX_FEE_DISCOUNT\\n        : _currentFeeDiscount(_projectId);\\n\\n      // Take a fee from the `_distributedAmount`, if needed.\\n      _fee = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\\n        ? 0\\n        : _takeFeeFrom(_projectId, _fundingCycle, _distributedAmount, _projectOwner, _feeDiscount);\\n\\n      // The net amount is the withdrawn amount without the fee.\\n      netDistributedAmount = _distributedAmount - _fee;\\n\\n      // Transfer any remaining balance to the beneficiary.\\n      if (netDistributedAmount > 0)\\n        _transferFrom(address(this), _beneficiary, netDistributedAmount);\\n    }\\n\\n    emit UseAllowance(\\n      _fundingCycle.configuration,\\n      _fundingCycle.number,\\n      _projectId,\\n      _beneficiary,\\n      _amount,\\n      _distributedAmount,\\n      netDistributedAmount,\\n      _memo,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Pays out splits for a project\'s funding cycle configuration.\\n\\n    @param _projectId The ID of the project for which payout splits are being distributed.\\n    @param _domain The domain of the splits to distribute the payout between.\\n    @param _group The group of the splits to distribute the payout between.\\n    @param _amount The total amount being distributed, as a fixed point number with the same number of decimals as this terminal.\\n    @param _feeDiscount The amount of discount to apply to the fee, out of the MAX_FEE.\\n\\n    @return leftoverAmount If the leftover amount if the splits don\'t add up to 100%.\\n    @return feeEligibleDistributionAmount The total amount of distributions that are eligible to have fees taken from.\\n  */\\n  function _distributeToPayoutSplitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group,\\n    uint256 _amount,\\n    uint256 _feeDiscount\\n  ) private returns (uint256 leftoverAmount, uint256 feeEligibleDistributionAmount) {\\n    // Set the leftover amount to the initial amount.\\n    leftoverAmount = _amount;\\n\\n    // Get a reference to the project\'s payout splits.\\n    JBSplit[] memory _splits = splitsStore.splitsOf(_projectId, _domain, _group);\\n\\n    // Transfer between all splits.\\n    for (uint256 _i = 0; _i < _splits.length; _i++) {\\n      // Get a reference to the split being iterated on.\\n      JBSplit memory _split = _splits[_i];\\n\\n      // The amount to send towards the split.\\n      uint256 _payoutAmount = PRBMath.mulDiv(\\n        _amount,\\n        _split.percent,\\n        JBConstants.SPLITS_TOTAL_PERCENT\\n      );\\n\\n      // The payout amount substracting any applicable incurred fees.\\n      uint256 _netPayoutAmount;\\n\\n      if (_payoutAmount > 0) {\\n        // Transfer tokens to the split.\\n        // If there\'s an allocator set, transfer to its `allocate` function.\\n        if (_split.allocator != IJBSplitAllocator(address(0))) {\\n          _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\\n            ? _payoutAmount\\n            : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\\n\\n          // This distribution is eligible for a fee since the funds are leaving the ecosystem.\\n          feeEligibleDistributionAmount += _payoutAmount;\\n\\n          // Trigger any inherited pre-transfer logic.\\n          _beforeTransferTo(address(_split.allocator), _netPayoutAmount);\\n\\n          // If this terminal\'s token is ETH, send it in msg.value.\\n          uint256 _payableValue = token == JBTokens.ETH ? _netPayoutAmount : 0;\\n\\n          // Create the data to send to the allocator.\\n          JBSplitAllocationData memory _data = JBSplitAllocationData(\\n            token,\\n            _netPayoutAmount,\\n            decimals,\\n            _projectId,\\n            _group,\\n            _split\\n          );\\n\\n          // Trigger the allocator\'s `allocate` function.\\n          _split.allocator.allocate{value: _payableValue}(_data);\\n\\n          // Otherwise, if a project is specified, make a payment to it.\\n        } else if (_split.projectId != 0) {\\n          // Get a reference to the Juicebox terminal being used.\\n          IJBPaymentTerminal _terminal = directory.primaryTerminalOf(_split.projectId, token);\\n\\n          // The project must have a terminal to send funds to.\\n          if (_terminal == IJBPaymentTerminal(address(0))) revert TERMINAL_IN_SPLIT_ZERO_ADDRESS();\\n\\n          // Save gas if this contract is being used as the terminal.\\n          if (_terminal == this) {\\n            // This distribution does not incur a fee.\\n            _netPayoutAmount = _payoutAmount;\\n\\n            // Send the projectId in the metadata.\\n            bytes memory _projectMetadata = new bytes(32);\\n            _projectMetadata = bytes(abi.encodePacked(_projectId));\\n\\n            // Add to balance if prefered.\\n            if (_split.preferAddToBalance)\\n              _addToBalanceOf(_split.projectId, _netPayoutAmount, \'\', _projectMetadata);\\n            else\\n              _pay(\\n                _netPayoutAmount,\\n                address(this),\\n                _split.projectId,\\n                (_split.beneficiary != address(0)) ? _split.beneficiary : msg.sender,\\n                0,\\n                _split.preferClaimed,\\n                \'\',\\n                _projectMetadata\\n              );\\n          } else {\\n            // If the terminal is set as feeless, this distribution is not eligible for a fee.\\n            if (isFeelessTerminal[_terminal])\\n              _netPayoutAmount = _payoutAmount;\\n              // This distribution is eligible for a fee since the funds are leaving this contract and the terminal isn\'t listed as feeless.\\n            else {\\n              _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\\n                ? _payoutAmount\\n                : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\\n\\n              feeEligibleDistributionAmount += _payoutAmount;\\n            }\\n\\n            // Trigger any inherited pre-transfer logic.\\n            _beforeTransferTo(address(_terminal), _netPayoutAmount);\\n\\n            // If this terminal\'s token is ETH, send it in msg.value.\\n            uint256 _payableValue = token == JBTokens.ETH ? _netPayoutAmount : 0;\\n\\n            // Send the projectId in the metadata.\\n            bytes memory _projectMetadata = new bytes(32);\\n            _projectMetadata = bytes(abi.encodePacked(_projectId));\\n\\n            // Add to balance if prefered.\\n            if (_split.preferAddToBalance)\\n              _terminal.addToBalanceOf{value: _payableValue}(\\n                _split.projectId,\\n                _netPayoutAmount,\\n                token,\\n                \'\',\\n                _projectMetadata\\n              );\\n            else\\n              _terminal.pay{value: _payableValue}(\\n                _split.projectId,\\n                _netPayoutAmount,\\n                token,\\n                _split.beneficiary != address(0) ? _split.beneficiary : msg.sender,\\n                0,\\n                _split.preferClaimed,\\n                \'\',\\n                _projectMetadata\\n              );\\n          }\\n        } else {\\n          _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\\n            ? _payoutAmount\\n            : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\\n\\n          // This distribution is eligible for a fee since the funds are leaving the ecosystem.\\n          feeEligibleDistributionAmount += _payoutAmount;\\n\\n          // If there\'s a beneficiary, send the funds directly to the beneficiary. Otherwise send to the msg.sender.\\n          _transferFrom(\\n            address(this),\\n            _split.beneficiary != address(0) ? _split.beneficiary : payable(msg.sender),\\n            _netPayoutAmount\\n          );\\n        }\\n\\n        // Subtract from the amount to be sent to the beneficiary.\\n        leftoverAmount = leftoverAmount - _payoutAmount;\\n      }\\n\\n      emit DistributeToPayoutSplit(\\n        _projectId,\\n        _domain,\\n        _group,\\n        _split,\\n        _netPayoutAmount,\\n        msg.sender\\n      );\\n    }\\n  }\\n\\n  /**\\n    @notice\\n    Takes a fee into the platform\'s project, which has an id of _PROTOCOL_PROJECT_ID.\\n\\n    @param _projectId The ID of the project having fees taken from.\\n    @param _fundingCycle The funding cycle during which the fee is being taken.\\n    @param _amount The amount of the fee to take, as a floating point number with 18 decimals.\\n    @param _beneficiary The address to mint the platforms tokens for.\\n    @param _feeDiscount The amount of discount to apply to the fee, out of the MAX_FEE.\\n\\n    @return feeAmount The amount of the fee taken.\\n  */\\n  function _takeFeeFrom(\\n    uint256 _projectId,\\n    JBFundingCycle memory _fundingCycle,\\n    uint256 _amount,\\n    address _beneficiary,\\n    uint256 _feeDiscount\\n  ) private returns (uint256 feeAmount) {\\n    feeAmount = _feeAmount(_amount, fee, _feeDiscount);\\n    if (_fundingCycle.shouldHoldFees()) {\\n      // Store the held fee.\\n      _heldFeesOf[_projectId].push(JBFee(_amount, uint32(fee), uint32(_feeDiscount), _beneficiary));\\n      emit HoldFee(_projectId, _amount, fee, _feeDiscount, _beneficiary, msg.sender);\\n    } else {\\n      // Process the fee.\\n      _processFee(feeAmount, _beneficiary); // Take the fee.\\n\\n      emit ProcessFee(_projectId, feeAmount, false, _beneficiary, msg.sender);\\n    }\\n  }\\n\\n  /**\\n    @notice\\n    Process a fee of the specified amount.\\n\\n    @param _amount The fee amount, as a floating point number with 18 decimals.\\n    @param _beneficiary The address to mint the platform\'s tokens for.\\n  */\\n  function _processFee(uint256 _amount, address _beneficiary) private {\\n    // Get the terminal for the protocol project.\\n    IJBPaymentTerminal _terminal = directory.primaryTerminalOf(_PROTOCOL_PROJECT_ID, token);\\n\\n    // When processing the admin fee, save gas if the admin is using this contract as its terminal.\\n    if (_terminal == this)\\n      _pay(_amount, address(this), _PROTOCOL_PROJECT_ID, _beneficiary, 0, false, \'\', bytes(\'\')); // Use the local pay call.\\n    else {\\n      // Trigger any inherited pre-transfer logic.\\n      _beforeTransferTo(address(_terminal), _amount);\\n\\n      // If this terminal\'s token is ETH, send it in msg.value.\\n      uint256 _payableValue = token == JBTokens.ETH ? _amount : 0;\\n\\n      // Send the payment.\\n      _terminal.pay{value: _payableValue}(\\n        _PROTOCOL_PROJECT_ID,\\n        _amount,\\n        token,\\n        _beneficiary,\\n        0,\\n        false,\\n        \'\',\\n        bytes(\'\')\\n      ); // Use the external pay call of the correct terminal.\\n    }\\n  }\\n\\n  /**\\n    @notice\\n    Contribute tokens to a project.\\n\\n    @param _amount The amount of terminal tokens being received, as a fixed point number with the same amount of decimals as this terminal. If this terminal\'s token is ETH, this is ignored and msg.value is used in its place.\\n    @param _payer The address making the payment.\\n    @param _projectId The ID of the project being paid.\\n    @param _beneficiary The address to mint tokens for and pass along to the funding cycle\'s delegate.\\n    @param _minReturnedTokens The minimum number of project tokens expected in return, as a fixed point number with the same amount of decimals as this terminal.\\n    @param _preferClaimedTokens A flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas.\\n    @param _memo A memo to pass along to the emitted event, and passed along the the funding cycle\'s data source and delegate.  A data source can alter the memo before emitting in the event and forwarding to the delegate.\\n    @param _metadata Bytes to send along to the data source, delegate, and emitted event, if provided.\\n\\n    @return beneficiaryTokenCount The number of tokens minted for the beneficiary, as a fixed point number with 18 decimals.\\n  */\\n  function _pay(\\n    uint256 _amount,\\n    address _payer,\\n    uint256 _projectId,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string memory _memo,\\n    bytes memory _metadata\\n  ) private returns (uint256 beneficiaryTokenCount) {\\n    // Cant send tokens to the zero address.\\n    if (_beneficiary == address(0)) revert PAY_TO_ZERO_ADDRESS();\\n\\n    // Define variables that will be needed outside the scoped section below.\\n    // Keep a reference to the funding cycle during which the payment is being made.\\n    JBFundingCycle memory _fundingCycle;\\n\\n    // Scoped section prevents stack too deep. `_delegate` and `_tokenCount` only used within scope.\\n    {\\n      IJBPayDelegate _delegate;\\n      uint256 _tokenCount;\\n\\n      // Bundle the amount info into a JBTokenAmount struct.\\n      JBTokenAmount memory _bundledAmount = JBTokenAmount(token, _amount, decimals, currency);\\n\\n      // Record the payment.\\n      (_fundingCycle, _tokenCount, _delegate, _memo) = store.recordPaymentFrom(\\n        _payer,\\n        _bundledAmount,\\n        _projectId,\\n        baseWeightCurrency,\\n        _memo,\\n        _metadata\\n      );\\n\\n      // Mint the tokens if needed.\\n      if (_tokenCount > 0)\\n        // Set token count to be the number of tokens minted for the beneficiary instead of the total amount.\\n        beneficiaryTokenCount = IJBController(directory.controllerOf(_projectId)).mintTokensOf(\\n          _projectId,\\n          _tokenCount,\\n          _beneficiary,\\n          \'\',\\n          _preferClaimedTokens,\\n          true\\n        );\\n\\n      // The token count for the beneficiary must be greater than or equal to the minimum expected.\\n      if (beneficiaryTokenCount < _minReturnedTokens) revert INADEQUATE_TOKEN_COUNT();\\n\\n      // If a delegate was returned by the data source, issue a callback to it.\\n      if (_delegate != IJBPayDelegate(address(0))) {\\n        JBDidPayData memory _data = JBDidPayData(\\n          _payer,\\n          _projectId,\\n          _bundledAmount,\\n          beneficiaryTokenCount,\\n          _beneficiary,\\n          _memo,\\n          _metadata\\n        );\\n\\n        _delegate.didPay(_data);\\n        emit DelegateDidPay(_delegate, _data, msg.sender);\\n      }\\n    }\\n\\n    emit Pay(\\n      _fundingCycle.configuration,\\n      _fundingCycle.number,\\n      _projectId,\\n      _payer,\\n      _beneficiary,\\n      _amount,\\n      beneficiaryTokenCount,\\n      _memo,\\n      _metadata,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Receives funds belonging to the specified project.\\n\\n    @param _projectId The ID of the project to which the funds received belong.\\n    @param _amount The amount of tokens to add, as a fixed point number with the same number of decimals as this terminal. If this is an ETH terminal, this is ignored and msg.value is used instead.\\n    @param _memo A memo to pass along to the emitted event.\\n    @param _metadata Extra data to pass along to the emitted event.\\n  */\\n  function _addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    string memory _memo,\\n    bytes memory _metadata\\n  ) private {\\n    // Refund any held fees to make sure the project doesn\'t pay double for funds going in and out of the protocol.\\n    uint256 _refundedFees = _refundHeldFees(_projectId, _amount);\\n\\n    // Record the added funds with any refunded fees.\\n    store.recordAddedBalanceFor(_projectId, _amount + _refundedFees);\\n\\n    emit AddToBalance(_projectId, _amount, _refundedFees, _memo, _metadata, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Refund fees based on the specified amount.\\n\\n    @param _projectId The project for which fees are being refunded.\\n    @param _amount The amount to base the refund on, as a fixed point number with the same amount of decimals as this terminal.\\n\\n    @return refundedFees How much fees were refunded, as a fixed point number with the same number of decimals as this terminal\\n  */\\n  function _refundHeldFees(uint256 _projectId, uint256 _amount)\\n    private\\n    returns (uint256 refundedFees)\\n  {\\n    // Get a reference to the project\'s held fees.\\n    JBFee[] memory _heldFees = _heldFeesOf[_projectId];\\n\\n    // Delete the current held fees.\\n    delete _heldFeesOf[_projectId];\\n\\n    // Get a reference to the leftover amount once all fees have been settled.\\n    uint256 leftoverAmount = _amount;\\n\\n    // Process each fee.\\n    for (uint256 _i = 0; _i < _heldFees.length; _i++) {\\n      if (leftoverAmount == 0) _heldFeesOf[_projectId].push(_heldFees[_i]);\\n      else if (leftoverAmount >= _heldFees[_i].amount) {\\n        leftoverAmount = leftoverAmount - _heldFees[_i].amount;\\n        refundedFees += _feeAmount(\\n          _heldFees[_i].amount,\\n          _heldFees[_i].fee,\\n          _heldFees[_i].feeDiscount\\n        );\\n      } else {\\n        _heldFeesOf[_projectId].push(\\n          JBFee(\\n            _heldFees[_i].amount - leftoverAmount,\\n            _heldFees[_i].fee,\\n            _heldFees[_i].feeDiscount,\\n            _heldFees[_i].beneficiary\\n          )\\n        );\\n        refundedFees += _feeAmount(leftoverAmount, _heldFees[_i].fee, _heldFees[_i].feeDiscount);\\n        leftoverAmount = 0;\\n      }\\n    }\\n\\n    emit RefundHeldFees(_projectId, _amount, refundedFees, leftoverAmount, msg.sender);\\n  }\\n\\n  /** \\n    @notice \\n    Returns the fee amount based on the provided amount for the specified project.\\n\\n    @param _amount The amount that the fee is based on, as a fixed point number with the same amount of decimals as this terminal.\\n    @param _fee The percentage of the fee, out of MAX_FEE. \\n    @param _feeDiscount The percentage discount that should be applied out of the max amount, out of MAX_FEE_DISCOUNT.\\n\\n    @return The amount of the fee, as a fixed point number with the same amount of decimals as this terminal.\\n  */\\n  function _feeAmount(\\n    uint256 _amount,\\n    uint256 _fee,\\n    uint256 _feeDiscount\\n  ) private pure returns (uint256) {\\n    // Calculate the discounted fee.\\n    uint256 _discountedFee = _fee -\\n      PRBMath.mulDiv(_fee, _feeDiscount, JBConstants.MAX_FEE_DISCOUNT);\\n\\n    // The amount of tokens from the `_amount` to pay as a fee.\\n    return\\n      _amount - PRBMath.mulDiv(_amount, JBConstants.MAX_FEE, _discountedFee + JBConstants.MAX_FEE);\\n  }\\n\\n  /** \\n    @notice\\n    Get the fee discount from the fee gauge for the specified project.\\n\\n    @param _projectId The ID of the project to get a fee discount for.\\n    \\n    @return feeDiscount The fee discount, which should be interpreted as a percentage out MAX_FEE_DISCOUNT.\\n  */\\n  function _currentFeeDiscount(uint256 _projectId) private view returns (uint256 feeDiscount) {\\n    // Can\'t take a fee if the protocol project doesn\'t have a terminal that accepts the token.\\n    if (directory.primaryTerminalOf(_PROTOCOL_PROJECT_ID, token) == IJBPaymentTerminal(address(0)))\\n      return JBConstants.MAX_FEE_DISCOUNT;\\n\\n    // Get the fee discount.\\n    if (feeGauge == IJBFeeGauge(address(0)))\\n      feeDiscount = 0;\\n      // If the guage reverts, set the discount to 0.\\n    else\\n      try feeGauge.currentDiscountFor(_projectId) returns (uint256 discount) {\\n        feeDiscount = discount;\\n      } catch {\\n        feeDiscount = 0;\\n      }\\n\\n    // If the fee discount is greater than the max, nullify the discount.\\n    if (feeDiscount > JBConstants.MAX_FEE_DISCOUNT) feeDiscount = 0;\\n  }\\n}\\n","keccak256":"0x60e7bb62ac6c42c7b814b109a4c72cbdd9ea289b5445fd67b6aab0067fd0dda9","license":"MIT"},"contracts/abstract/JBSingleTokenPaymentTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/ERC165.sol\';\\nimport \'./../interfaces/IJBSingleTokenPaymentTerminal.sol\';\\n\\n/**\\n  @notice\\n  Generic terminal managing all inflows of funds into the protocol ecosystem for one token.\\n\\n  @dev\\n  Adheres to -\\n  IJBSingleTokenPaymentTerminals: General interface for the methods in this contract that interact with the blockchain\'s state according to the protocol\'s rules.\\n*/\\nabstract contract JBSingleTokenPaymentTerminal is IJBSingleTokenPaymentTerminal, ERC165 {\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    The token that this terminal accepts.\\n  */\\n  address public immutable override token;\\n\\n  /**\\n    @notice\\n    The number of decimals the token fixed point amounts are expected to have.\\n  */\\n  uint256 public immutable override decimals;\\n\\n  /**\\n    @notice\\n    The currency to use when resolving price feeds for this terminal.\\n  */\\n  uint256 public immutable override currency;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    A flag indicating if this terminal accepts the specified token.\\n\\n    @param _token The token to check if this terminal accepts or not.\\n\\n    @return The flag.\\n  */\\n  function acceptsToken(address _token) external view override returns (bool) {\\n    return _token == token;\\n  }\\n\\n  /** \\n    @notice\\n    The decimals that should be used in fixed number accounting for the specified token.\\n\\n    ignored: _token The token to check for the decimals of.\\n\\n    @return The number of decimals for the token.\\n  */\\n  function decimalsForToken(address) external view override returns (uint256) {\\n    return decimals;\\n  }\\n\\n  /** \\n    @notice\\n    The currency that should be used for the specified token.\\n\\n    ignored: _token The token to check for the currency of.\\n\\n    @return The currency index.\\n  */\\n  function currencyForToken(address) external view override returns (uint256) {\\n    return currency;\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- public views --------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Indicates if this contract adheres to the specified interface.\\n\\n    @dev \\n    See {IERC165-supportsInterface}.\\n\\n    @param _interfaceId The ID of the interface to check for adherance to.\\n  */\\n  function supportsInterface(bytes4 _interfaceId)\\n    public\\n    view\\n    virtual\\n    override(ERC165, IERC165)\\n    returns (bool)\\n  {\\n    return\\n      _interfaceId == type(IJBPaymentTerminal).interfaceId ||\\n      _interfaceId == type(IJBSingleTokenPaymentTerminal).interfaceId ||\\n      super.supportsInterface(_interfaceId);\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @param _token The token that this terminal manages.\\n    @param _decimals The number of decimals the token fixed point amounts are expected to have.\\n    @param _currency The currency that this terminal\'s token adheres to for price feeds.\\n  */\\n  constructor(\\n    address _token,\\n    uint256 _decimals,\\n    uint256 _currency\\n  ) {\\n    token = _token;\\n    decimals = _decimals;\\n    currency = _currency;\\n  }\\n}\\n","keccak256":"0xd6ca4fb819126c0b1352261f4ebf4631a6a769f6535a308fe083fec8799daf0d","license":"MIT"},"contracts/enums/JBBallotState.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nenum JBBallotState {\\n  Active,\\n  Approved,\\n  Failed\\n}\\n","keccak256":"0xadf07fd49f7e0947006fa1921bc7fd8fb532e8fecf3b9266721a8b7e43907461","license":"MIT"},"contracts/interfaces/IJBAllowanceTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBAllowanceTerminal {\\n  function useAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency,\\n    address _token,\\n    uint256 _minReturnedTokens,\\n    address payable _beneficiary,\\n    string calldata _memo\\n  ) external returns (uint256 netDistributedAmount);\\n}\\n","keccak256":"0xda5e7c0c0feb9cded1ff5e615cfd770f7917e1479c577382b3f1b552d19baf45","license":"MIT"},"contracts/interfaces/IJBController.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBFundAccessConstraints.sol\';\\nimport \'./../structs/JBFundingCycleData.sol\';\\nimport \'./../structs/JBFundingCycleMetadata.sol\';\\nimport \'./../structs/JBGroupedSplits.sol\';\\nimport \'./../structs/JBProjectMetadata.sol\';\\nimport \'./IJBDirectory.sol\';\\nimport \'./IJBFundingCycleStore.sol\';\\nimport \'./IJBMigratable.sol\';\\nimport \'./IJBPaymentTerminal.sol\';\\nimport \'./IJBSplitsStore.sol\';\\nimport \'./IJBToken.sol\';\\nimport \'./IJBTokenStore.sol\';\\n\\ninterface IJBController is IERC165 {\\n  event LaunchProject(uint256 configuration, uint256 projectId, string memo, address caller);\\n\\n  event LaunchFundingCycles(uint256 configuration, uint256 projectId, string memo, address caller);\\n\\n  event ReconfigureFundingCycles(\\n    uint256 configuration,\\n    uint256 projectId,\\n    string memo,\\n    address caller\\n  );\\n\\n  event SetFundAccessConstraints(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    JBFundAccessConstraints constraints,\\n    address caller\\n  );\\n\\n  event DistributeReservedTokens(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    address beneficiary,\\n    uint256 tokenCount,\\n    uint256 beneficiaryTokenCount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event DistributeToReservedTokenSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    uint256 tokenCount,\\n    address caller\\n  );\\n\\n  event MintTokens(\\n    address indexed beneficiary,\\n    uint256 indexed projectId,\\n    uint256 tokenCount,\\n    uint256 beneficiaryTokenCount,\\n    string memo,\\n    uint256 reservedRate,\\n    address caller\\n  );\\n\\n  event BurnTokens(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 tokenCount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event Migrate(uint256 indexed projectId, IJBMigratable to, address caller);\\n\\n  event PrepMigration(uint256 indexed projectId, address from, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function tokenStore() external view returns (IJBTokenStore);\\n\\n  function splitsStore() external view returns (IJBSplitsStore);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function reservedTokenBalanceOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function distributionLimitOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view returns (uint256 distributionLimit, uint256 distributionLimitCurrency);\\n\\n  function overflowAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view returns (uint256 overflowAllowance, uint256 overflowAllowanceCurrency);\\n\\n  function totalOutstandingTokensOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function getFundingCycleOf(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function latestConfiguredFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (\\n      JBFundingCycle memory,\\n      JBFundingCycleMetadata memory metadata,\\n      JBBallotState\\n    );\\n\\n  function currentFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function queuedFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function launchProjectFor(\\n    address _owner,\\n    JBProjectMetadata calldata _projectMetadata,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string calldata _memo\\n  ) external returns (uint256 projectId);\\n\\n  function launchFundingCyclesFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string calldata _memo\\n  ) external returns (uint256 configuration);\\n\\n  function reconfigureFundingCyclesOf(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    string calldata _memo\\n  ) external returns (uint256);\\n\\n  function issueTokenFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  ) external returns (IJBToken token);\\n\\n  function changeTokenOf(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  ) external;\\n\\n  function mintTokensOf(\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    address _beneficiary,\\n    string calldata _memo,\\n    bool _preferClaimedTokens,\\n    bool _useReservedRate\\n  ) external returns (uint256 beneficiaryTokenCount);\\n\\n  function burnTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    string calldata _memo,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function distributeReservedTokensOf(uint256 _projectId, string memory _memo)\\n    external\\n    returns (uint256);\\n\\n  function migrate(uint256 _projectId, IJBMigratable _to) external;\\n}\\n","keccak256":"0xa313569eaff79f9443e12878b2efbb4160d50682c0f9e7304c42ecd600c42d96","license":"MIT"},"contracts/interfaces/IJBDirectory.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBFundingCycleStore.sol\';\\nimport \'./IJBPaymentTerminal.sol\';\\nimport \'./IJBProjects.sol\';\\n\\ninterface IJBDirectory {\\n  event SetController(uint256 indexed projectId, address indexed controller, address caller);\\n\\n  event AddTerminal(uint256 indexed projectId, IJBPaymentTerminal indexed terminal, address caller);\\n\\n  event SetTerminals(uint256 indexed projectId, IJBPaymentTerminal[] terminals, address caller);\\n\\n  event SetPrimaryTerminal(\\n    uint256 indexed projectId,\\n    address indexed token,\\n    IJBPaymentTerminal indexed terminal,\\n    address caller\\n  );\\n\\n  event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function controllerOf(uint256 _projectId) external view returns (address);\\n\\n  function isAllowedToSetFirstController(address _address) external view returns (bool);\\n\\n  function terminalsOf(uint256 _projectId) external view returns (IJBPaymentTerminal[] memory);\\n\\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\\n    external\\n    view\\n    returns (bool);\\n\\n  function primaryTerminalOf(uint256 _projectId, address _token)\\n    external\\n    view\\n    returns (IJBPaymentTerminal);\\n\\n  function setControllerOf(uint256 _projectId, address _controller) external;\\n\\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals) external;\\n\\n  function setPrimaryTerminalOf(\\n    uint256 _projectId,\\n    address _token,\\n    IJBPaymentTerminal _terminal\\n  ) external;\\n\\n  function setIsAllowedToSetFirstController(address _address, bool _flag) external;\\n}\\n","keccak256":"0x9e7f0d3590b3ddc3b667fcdacaa53b627e4d2b3a912360597fb0ffa413518167","license":"MIT"},"contracts/interfaces/IJBFeeGauge.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBFeeGauge {\\n  function currentDiscountFor(uint256 _projectId) external view returns (uint256);\\n}\\n","keccak256":"0xfef1aa95ca332c8b45edee6e393bacfc173d54f76b2a57b2d87119dfadd6650a","license":"MIT"},"contracts/interfaces/IJBFundingCycleBallot.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../enums/JBBallotState.sol\';\\nimport \'./IJBFundingCycleStore.sol\';\\n\\ninterface IJBFundingCycleBallot is IERC165 {\\n  function duration() external view returns (uint256);\\n\\n  function stateOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _start\\n  ) external view returns (JBBallotState);\\n}\\n","keccak256":"0xdc8c8bed613f5759c958b7b0d646032b4337a349a8ecea5ffeb167623f2f29f5","license":"MIT"},"contracts/interfaces/IJBFundingCycleDataSource.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBPayParamsData.sol\';\\nimport \'./../structs/JBRedeemParamsData.sol\';\\nimport \'./IJBFundingCycleStore.sol\';\\nimport \'./IJBPayDelegate.sol\';\\nimport \'./IJBRedemptionDelegate.sol\';\\n\\ninterface IJBFundingCycleDataSource is IERC165 {\\n  function payParams(JBPayParamsData calldata _data)\\n    external\\n    view\\n    returns (\\n      uint256 weight,\\n      string memory memo,\\n      IJBPayDelegate delegate\\n    );\\n\\n  function redeemParams(JBRedeemParamsData calldata _data)\\n    external\\n    view\\n    returns (\\n      uint256 reclaimAmount,\\n      string memory memo,\\n      IJBRedemptionDelegate delegate\\n    );\\n}\\n","keccak256":"0x7cba259a6c4177e0977bef12bae28e14ebb7c1fc665e67cd80d71743da4a1e86","license":"MIT"},"contracts/interfaces/IJBFundingCycleStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../enums/JBBallotState.sol\';\\nimport \'./../structs/JBFundingCycle.sol\';\\nimport \'./../structs/JBFundingCycleData.sol\';\\n\\ninterface IJBFundingCycleStore {\\n  event Configure(\\n    uint256 indexed configuration,\\n    uint256 indexed projectId,\\n    JBFundingCycleData data,\\n    uint256 metadata,\\n    uint256 mustStartAtOrAfter,\\n    address caller\\n  );\\n\\n  event Init(uint256 indexed configuration, uint256 indexed projectId, uint256 indexed basedOn);\\n\\n  function latestConfigurationOf(uint256 _projectId) external view returns (uint256);\\n\\n  function get(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory);\\n\\n  function latestConfiguredOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBBallotState ballotState);\\n\\n  function queuedOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentBallotStateOf(uint256 _projectId) external view returns (JBBallotState);\\n\\n  function configureFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    uint256 _metadata,\\n    uint256 _mustStartAtOrAfter\\n  ) external returns (JBFundingCycle memory fundingCycle);\\n}\\n","keccak256":"0xf75791cd5b71bc6773cf56c92501e3f255a406eaedea781cb57cea2fa1e4ef20","license":"MIT"},"contracts/interfaces/IJBMigratable.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBMigratable {\\n  function prepForMigrationOf(uint256 _projectId, address _from) external;\\n}\\n","keccak256":"0xd24d7f91e5276f36811695e1e45283947cbd6e5cff912384e5f3e55ef4acadf3","license":"MIT"},"contracts/interfaces/IJBOperatable.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBOperatorStore.sol\';\\n\\ninterface IJBOperatable {\\n  function operatorStore() external view returns (IJBOperatorStore);\\n}\\n","keccak256":"0x150097e253a667d2336367445bea019bb3669ef7c82d358befe1f4cdd480e9aa","license":"MIT"},"contracts/interfaces/IJBOperatorStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../structs/JBOperatorData.sol\';\\n\\ninterface IJBOperatorStore {\\n  event SetOperator(\\n    address indexed operator,\\n    address indexed account,\\n    uint256 indexed domain,\\n    uint256[] permissionIndexes,\\n    uint256 packed\\n  );\\n\\n  function permissionsOf(\\n    address _operator,\\n    address _account,\\n    uint256 _domain\\n  ) external view returns (uint256);\\n\\n  function hasPermission(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) external view returns (bool);\\n\\n  function hasPermissions(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256[] calldata _permissionIndexes\\n  ) external view returns (bool);\\n\\n  function setOperator(JBOperatorData calldata _operatorData) external;\\n\\n  function setOperators(JBOperatorData[] calldata _operatorData) external;\\n}\\n","keccak256":"0x50a26fddc575a50176df7deb9225ec1816b0158c9e9b8555e7921a3261254ed8","license":"MIT"},"contracts/interfaces/IJBPayDelegate.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBDidPayData.sol\';\\n\\ninterface IJBPayDelegate is IERC165 {\\n  function didPay(JBDidPayData calldata _data) external;\\n}\\n","keccak256":"0xf7a9ef2df665e1c85a461fadb3cd54f6270c181eac96064005bde19e54d0ffa9","license":"MIT"},"contracts/interfaces/IJBPaymentTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\n\\ninterface IJBPaymentTerminal is IERC165 {\\n  function acceptsToken(address _token) external view returns (bool);\\n\\n  function currencyForToken(address _token) external view returns (uint256);\\n\\n  function decimalsForToken(address _token) external view returns (uint256);\\n\\n  // Return value must be a fixed point number with 18 decimals.\\n  function currentEthOverflowOf(uint256 _projectId) external view returns (uint256);\\n\\n  function pay(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable returns (uint256 beneficiaryTokenCount);\\n\\n  function addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable;\\n}\\n","keccak256":"0x9ed8b16aa84675698784e2106d773d99d2ea85242784531a12f57c07ef10b291","license":"MIT"},"contracts/interfaces/IJBPayoutRedemptionPaymentTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/token/ERC721/IERC721.sol\';\\nimport \'./../structs/JBFee.sol\';\\nimport \'./IJBAllowanceTerminal.sol\';\\nimport \'./IJBDirectory.sol\';\\nimport \'./IJBFeeGauge.sol\';\\nimport \'./IJBPayoutTerminal.sol\';\\nimport \'./IJBProjects.sol\';\\nimport \'./IJBPayDelegate.sol\';\\nimport \'./IJBPaymentTerminal.sol\';\\nimport \'./IJBPrices.sol\';\\nimport \'./IJBRedemptionDelegate.sol\';\\nimport \'./IJBRedemptionTerminal.sol\';\\nimport \'./IJBSingleTokenPaymentTerminal.sol\';\\nimport \'./IJBSingleTokenPaymentTerminalStore.sol\';\\nimport \'./IJBSplitsStore.sol\';\\n\\ninterface IJBPayoutRedemptionPaymentTerminal is\\n  IJBPaymentTerminal,\\n  IJBPayoutTerminal,\\n  IJBAllowanceTerminal,\\n  IJBRedemptionTerminal\\n{\\n  event AddToBalance(\\n    uint256 indexed projectId,\\n    uint256 amount,\\n    uint256 refundedFees,\\n    string memo,\\n    bytes metadata,\\n    address caller\\n  );\\n\\n  event Migrate(\\n    uint256 indexed projectId,\\n    IJBPaymentTerminal indexed to,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  event DistributePayouts(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    address beneficiary,\\n    uint256 amount,\\n    uint256 distributedAmount,\\n    uint256 fee,\\n    uint256 beneficiaryDistributionAmount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event UseAllowance(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    address beneficiary,\\n    uint256 amount,\\n    uint256 distributedAmount,\\n    uint256 netDistributedamount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event HoldFee(\\n    uint256 indexed projectId,\\n    uint256 indexed amount,\\n    uint256 indexed fee,\\n    uint256 feeDiscount,\\n    address beneficiary,\\n    address caller\\n  );\\n\\n  event ProcessFee(\\n    uint256 indexed projectId,\\n    uint256 indexed amount,\\n    bool indexed wasHeld,\\n    address beneficiary,\\n    address caller\\n  );\\n\\n  event RefundHeldFees(\\n    uint256 indexed projectId,\\n    uint256 indexed amount,\\n    uint256 indexed refundedFees,\\n    uint256 leftoverAmount,\\n    address caller\\n  );\\n\\n  event Pay(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    address payer,\\n    address beneficiary,\\n    uint256 amount,\\n    uint256 beneficiaryTokenCount,\\n    string memo,\\n    bytes metadata,\\n    address caller\\n  );\\n\\n  event DelegateDidPay(IJBPayDelegate indexed delegate, JBDidPayData data, address caller);\\n\\n  event RedeemTokens(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    address holder,\\n    address beneficiary,\\n    uint256 tokenCount,\\n    uint256 reclaimedAmount,\\n    string memo,\\n    bytes metadata,\\n    address caller\\n  );\\n\\n  event DelegateDidRedeem(\\n    IJBRedemptionDelegate indexed delegate,\\n    JBDidRedeemData data,\\n    address caller\\n  );\\n\\n  event DistributeToPayoutSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  event SetFee(uint256 fee, address caller);\\n\\n  event SetFeeGauge(IJBFeeGauge indexed feeGauge, address caller);\\n\\n  event SetFeelessTerminal(IJBPaymentTerminal indexed terminal, bool indexed flag, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function splitsStore() external view returns (IJBSplitsStore);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function prices() external view returns (IJBPrices);\\n\\n  function store() external view returns (IJBSingleTokenPaymentTerminalStore);\\n\\n  function baseWeightCurrency() external view returns (uint256);\\n\\n  function payoutSplitsGroup() external view returns (uint256);\\n\\n  function heldFeesOf(uint256 _projectId) external view returns (JBFee[] memory);\\n\\n  function fee() external view returns (uint256);\\n\\n  function feeGauge() external view returns (IJBFeeGauge);\\n\\n  function isFeelessTerminal(IJBPaymentTerminal _terminal) external view returns (bool);\\n\\n  function migrate(uint256 _projectId, IJBPaymentTerminal _to) external returns (uint256 balance);\\n\\n  function processFees(uint256 _projectId) external;\\n\\n  function setFee(uint256 _fee) external;\\n\\n  function setFeeGauge(IJBFeeGauge _feeGauge) external;\\n\\n  function setFeelessTerminal(IJBPaymentTerminal _terminal, bool _flag) external;\\n}\\n","keccak256":"0xc2d0662664dd5519ac9ed9e2a47dbb00b22892c33b5bbfa1a534252f96041891","license":"MIT"},"contracts/interfaces/IJBPayoutTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBPayoutTerminal {\\n  function distributePayoutsOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency,\\n    address _token,\\n    uint256 _minReturnedTokens,\\n    string calldata _memo\\n  ) external returns (uint256 netLeftoverDistributionAmount);\\n}\\n","keccak256":"0x3f0cd485e21e69b3a1954c8da8ab1a896efaaa1bbbb86d312b7ad7ebc8707d6b","license":"MIT"},"contracts/interfaces/IJBPriceFeed.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBPriceFeed {\\n  function currentPrice(uint256 _targetDecimals) external view returns (uint256);\\n}\\n","keccak256":"0xac22ef5e35cdd64b1467416fd142801856ce867ecde41582f3aa437c955c9be2","license":"MIT"},"contracts/interfaces/IJBPrices.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBPriceFeed.sol\';\\n\\ninterface IJBPrices {\\n  event AddFeed(uint256 indexed currency, uint256 indexed base, IJBPriceFeed feed);\\n\\n  function feedFor(uint256 _currency, uint256 _base) external view returns (IJBPriceFeed);\\n\\n  function priceFor(\\n    uint256 _currency,\\n    uint256 _base,\\n    uint256 _decimals\\n  ) external view returns (uint256);\\n\\n  function addFeedFor(\\n    uint256 _currency,\\n    uint256 _base,\\n    IJBPriceFeed _priceFeed\\n  ) external;\\n}\\n","keccak256":"0x0d9c3fce264953aaeca00db1f8d8a3cf99876fa63366f5a2148f7966967b39b7","license":"MIT"},"contracts/interfaces/IJBProjects.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/token/ERC721/IERC721.sol\';\\nimport \'./../structs/JBProjectMetadata.sol\';\\nimport \'./IJBTokenUriResolver.sol\';\\n\\ninterface IJBProjects is IERC721 {\\n  event Create(\\n    uint256 indexed projectId,\\n    address indexed owner,\\n    JBProjectMetadata metadata,\\n    address caller\\n  );\\n\\n  event SetMetadata(uint256 indexed projectId, JBProjectMetadata metadata, address caller);\\n\\n  event SetTokenUriResolver(IJBTokenUriResolver indexed resolver, address caller);\\n\\n  function count() external view returns (uint256);\\n\\n  function metadataContentOf(uint256 _projectId, uint256 _domain)\\n    external\\n    view\\n    returns (string memory);\\n\\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\\n\\n  function createFor(address _owner, JBProjectMetadata calldata _metadata)\\n    external\\n    returns (uint256 projectId);\\n\\n  function setMetadataOf(uint256 _projectId, JBProjectMetadata calldata _metadata) external;\\n\\n  function setTokenUriResolver(IJBTokenUriResolver _newResolver) external;\\n}\\n","keccak256":"0x602bad7e8cce6e9d53fe5e3532c5d4428d02206f8df48b246aac7ee8a6dcc98d","license":"MIT"},"contracts/interfaces/IJBRedemptionDelegate.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBDidRedeemData.sol\';\\n\\ninterface IJBRedemptionDelegate is IERC165 {\\n  function didRedeem(JBDidRedeemData calldata _data) external;\\n}\\n","keccak256":"0xfc91761a568e60e1a1429ac11b0d1b57c627ef59f4011b17df4f9f540b7dd60d","license":"MIT"},"contracts/interfaces/IJBRedemptionTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBRedemptionTerminal {\\n  function redeemTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _count,\\n    address _token,\\n    uint256 _minReturnedTokens,\\n    address payable _beneficiary,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external returns (uint256 reclaimAmount);\\n}\\n","keccak256":"0x23f72447557584b695717ac8e388b9b15113fdc50ca08b9ee25774650cb68d31","license":"MIT"},"contracts/interfaces/IJBSingleTokenPaymentTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBPaymentTerminal.sol\';\\n\\ninterface IJBSingleTokenPaymentTerminal is IJBPaymentTerminal {\\n  function token() external view returns (address);\\n\\n  function currency() external view returns (uint256);\\n\\n  function decimals() external view returns (uint256);\\n}\\n","keccak256":"0x72285da98154a8fdaa69728e6422587106aead823996b73c54d7a5bff0c52460","license":"MIT"},"contracts/interfaces/IJBSingleTokenPaymentTerminalStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../structs/JBFundingCycle.sol\';\\nimport \'./../structs/JBTokenAmount.sol\';\\nimport \'./IJBDirectory.sol\';\\nimport \'./IJBFundingCycleStore.sol\';\\nimport \'./IJBPayDelegate.sol\';\\nimport \'./IJBPrices.sol\';\\nimport \'./IJBRedemptionDelegate.sol\';\\nimport \'./IJBSingleTokenPaymentTerminal.sol\';\\n\\ninterface IJBSingleTokenPaymentTerminalStore {\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function prices() external view returns (IJBPrices);\\n\\n  function balanceOf(IJBSingleTokenPaymentTerminal _terminal, uint256 _projectId)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function usedDistributionLimitOf(\\n    IJBSingleTokenPaymentTerminal _terminal,\\n    uint256 _projectId,\\n    uint256 _fundingCycleNumber\\n  ) external view returns (uint256);\\n\\n  function usedOverflowAllowanceOf(\\n    IJBSingleTokenPaymentTerminal _terminal,\\n    uint256 _projectId,\\n    uint256 _fundingCycleConfiguration\\n  ) external view returns (uint256);\\n\\n  function currentOverflowOf(IJBSingleTokenPaymentTerminal _terminal, uint256 _projectId)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function currentTotalOverflowOf(\\n    uint256 _projectId,\\n    uint256 _decimals,\\n    uint256 _currency\\n  ) external view returns (uint256);\\n\\n  function currentReclaimableOverflowOf(\\n    IJBSingleTokenPaymentTerminal _terminal,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    bool _useTotalOverflow\\n  ) external view returns (uint256);\\n\\n  function currentReclaimableOverflowOf(\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    uint256 _totalSupply,\\n    uint256 _overflow\\n  ) external view returns (uint256);\\n\\n  function recordPaymentFrom(\\n    address _payer,\\n    JBTokenAmount memory _amount,\\n    uint256 _projectId,\\n    uint256 _baseWeightCurrency,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  )\\n    external\\n    returns (\\n      JBFundingCycle memory fundingCycle,\\n      uint256 tokenCount,\\n      IJBPayDelegate delegate,\\n      string memory memo\\n    );\\n\\n  function recordRedemptionFor(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  )\\n    external\\n    returns (\\n      JBFundingCycle memory fundingCycle,\\n      uint256 reclaimAmount,\\n      IJBRedemptionDelegate delegate,\\n      string memory memo\\n    );\\n\\n  function recordDistributionFor(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency\\n  ) external returns (JBFundingCycle memory fundingCycle, uint256 distributedAmount);\\n\\n  function recordUsedAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    uint256 _currency\\n  ) external returns (JBFundingCycle memory fundingCycle, uint256 withdrawnAmount);\\n\\n  function recordAddedBalanceFor(uint256 _projectId, uint256 _amount) external;\\n\\n  function recordMigration(uint256 _projectId) external returns (uint256 balance);\\n}\\n","keccak256":"0x850a61a93215b0c7860ea0c10961bc2099579c4dbcd6008068fc2e136a208cd7","license":"MIT"},"contracts/interfaces/IJBSplitAllocator.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'../structs/JBSplitAllocationData.sol\';\\n\\ninterface IJBSplitAllocator is IERC165 {\\n  function allocate(JBSplitAllocationData calldata _data) external payable;\\n}\\n","keccak256":"0x717575a0a4a20f8598f44d22a3fd3e282f34f4b33543a0d4b36ba3b59ed8cd04","license":"MIT"},"contracts/interfaces/IJBSplitsStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../structs/JBSplit.sol\';\\nimport \'./IJBDirectory.sol\';\\nimport \'./IJBProjects.sol\';\\n\\ninterface IJBSplitsStore {\\n  event SetSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    address caller\\n  );\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function splitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group\\n  ) external view returns (JBSplit[] memory);\\n\\n  function set(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group,\\n    JBSplit[] memory _splits\\n  ) external;\\n}\\n","keccak256":"0x11951e705a11eda101218c0996816ef39c89d0fde964f42dd67a89d00e4c7c69","license":"MIT"},"contracts/interfaces/IJBToken.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBToken {\\n  function decimals() external view returns (uint8);\\n\\n  function totalSupply(uint256 _projectId) external view returns (uint256);\\n\\n  function balanceOf(address _account, uint256 _projectId) external view returns (uint256);\\n\\n  function mint(\\n    uint256 _projectId,\\n    address _account,\\n    uint256 _amount\\n  ) external;\\n\\n  function burn(\\n    uint256 _projectId,\\n    address _account,\\n    uint256 _amount\\n  ) external;\\n\\n  function approve(\\n    uint256,\\n    address _spender,\\n    uint256 _amount\\n  ) external;\\n\\n  function transfer(\\n    uint256 _projectId,\\n    address _to,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferFrom(\\n    uint256 _projectId,\\n    address _from,\\n    address _to,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferOwnership(uint256 _projectId, address _newOwner) external;\\n}\\n","keccak256":"0xf5ec0861b067a5e58f2bcca44892ea8d4a42ab8a7c95bd4d3bbddad33c8727f5","license":"MIT"},"contracts/interfaces/IJBTokenStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBProjects.sol\';\\nimport \'./IJBToken.sol\';\\n\\ninterface IJBTokenStore {\\n  event Issue(\\n    uint256 indexed projectId,\\n    IJBToken indexed token,\\n    string name,\\n    string symbol,\\n    address caller\\n  );\\n\\n  event Mint(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 amount,\\n    bool tokensWereClaimed,\\n    bool preferClaimedTokens,\\n    address caller\\n  );\\n\\n  event Burn(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 amount,\\n    uint256 initialUnclaimedBalance,\\n    uint256 initialClaimedBalance,\\n    bool preferClaimedTokens,\\n    address caller\\n  );\\n\\n  event Claim(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 initialUnclaimedBalance,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  event ShouldRequireClaim(uint256 indexed projectId, bool indexed flag, address caller);\\n\\n  event Change(\\n    uint256 indexed projectId,\\n    IJBToken indexed newToken,\\n    IJBToken indexed oldToken,\\n    address owner,\\n    address caller\\n  );\\n\\n  event Transfer(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    address indexed recipient,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  function tokenOf(uint256 _projectId) external view returns (IJBToken);\\n\\n  function projectOf(IJBToken _token) external view returns (uint256);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function unclaimedBalanceOf(address _holder, uint256 _projectId) external view returns (uint256);\\n\\n  function unclaimedTotalSupplyOf(uint256 _projectId) external view returns (uint256);\\n\\n  function totalSupplyOf(uint256 _projectId) external view returns (uint256);\\n\\n  function balanceOf(address _holder, uint256 _projectId) external view returns (uint256 _result);\\n\\n  function requireClaimFor(uint256 _projectId) external view returns (bool);\\n\\n  function issueFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  ) external returns (IJBToken token);\\n\\n  function changeFor(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  ) external returns (IJBToken oldToken);\\n\\n  function burnFrom(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function mintFor(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function shouldRequireClaimingFor(uint256 _projectId, bool _flag) external;\\n\\n  function claimFor(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferFrom(\\n    address _holder,\\n    uint256 _projectId,\\n    address _recipient,\\n    uint256 _amount\\n  ) external;\\n}\\n","keccak256":"0x2b7a6cdb457e710161079a46683e9804d66d4cc7d18be8f64de25ba7bfadf9ef","license":"MIT"},"contracts/interfaces/IJBTokenUriResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBTokenUriResolver {\\n  function getUri(uint256 _projectId) external view returns (string memory tokenUri);\\n}\\n","keccak256":"0xa64ece706d7ce399095f403b08383391c089da4995b5ee000b278d93d242a475","license":"MIT"},"contracts/libraries/JBConstants.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/**\\n  @notice\\n  Global constants used across Juicebox contracts.\\n*/\\nlibrary JBConstants {\\n  uint256 public constant MAX_RESERVED_RATE = 10000;\\n  uint256 public constant MAX_REDEMPTION_RATE = 10000;\\n  uint256 public constant MAX_DISCOUNT_RATE = 1000000000;\\n  uint256 public constant SPLITS_TOTAL_PERCENT = 1000000000;\\n  uint256 public constant MAX_FEE = 1000000000;\\n  uint256 public constant MAX_FEE_DISCOUNT = 1000000000;\\n}\\n","keccak256":"0x31517dfd8accf961f247cefd72bf8a76c20747cd8ed65cedf817dd7aa9a0082f","license":"MIT"},"contracts/libraries/JBCurrencies.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBCurrencies {\\n  uint256 public constant ETH = 1;\\n  uint256 public constant USD = 2;\\n}\\n","keccak256":"0x3077e365b09d45e3a82d6710bfda7323a0366c3cafc318ea9dc442a1a93036d7","license":"MIT"},"contracts/libraries/JBFixedPointNumber.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBFixedPointNumber {\\n  function adjustDecimals(\\n    uint256 _value,\\n    uint256 _decimals,\\n    uint256 _targetDecimals\\n  ) internal pure returns (uint256) {\\n    // If decimals need adjusting, multiply or divide the price by the decimal adjuster to get the normalized result.\\n    if (_targetDecimals == _decimals) return _value;\\n    else if (_targetDecimals > _decimals) return _value * 10**(_targetDecimals - _decimals);\\n    else return _value / 10**(_decimals - _targetDecimals);\\n  }\\n}\\n","keccak256":"0x98b16f5cc7e0b317ae7d0f429f05a5268c8439053d9e953619e0baaf996a012a","license":"MIT"},"contracts/libraries/JBFundingCycleMetadataResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleDataSource.sol\';\\nimport \'./../structs/JBFundingCycleMetadata.sol\';\\nimport \'./JBConstants.sol\';\\n\\nlibrary JBFundingCycleMetadataResolver {\\n  function reservedRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    return uint256(uint16(_fundingCycle.metadata >> 8));\\n  }\\n\\n  function redemptionRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    // Redemption rate is a number 0-10000. It\'s inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 24));\\n  }\\n\\n  function ballotRedemptionRate(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (uint256)\\n  {\\n    // Redemption rate is a number 0-10000. It\'s inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 40));\\n  }\\n\\n  function payPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 56) & 1) == 1;\\n  }\\n\\n  function distributionsPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 57) & 1) == 1;\\n  }\\n\\n  function redeemPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 58) & 1) == 1;\\n  }\\n\\n  function burnPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 59) & 1) == 1;\\n  }\\n\\n  function mintingAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 60) & 1) == 1;\\n  }\\n\\n  function changeTokenAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 61) & 1) == 1;\\n  }\\n\\n  function terminalMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 62) & 1) == 1;\\n  }\\n\\n  function controllerMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 63) & 1) == 1;\\n  }\\n\\n  function setTerminalsAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 64) & 1) == 1;\\n  }\\n\\n  function setControllerAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 65) & 1) == 1;\\n  }\\n\\n  function shouldHoldFees(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 66) & 1) == 1;\\n  }\\n\\n  function useTotalOverflowForRedemptions(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 67) & 1) == 1;\\n  }\\n\\n  function useDataSourceForPay(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return (_fundingCycle.metadata >> 68) & 1 == 1;\\n  }\\n\\n  function useDataSourceForRedeem(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return (_fundingCycle.metadata >> 69) & 1 == 1;\\n  }\\n\\n  function dataSource(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (IJBFundingCycleDataSource)\\n  {\\n    return IJBFundingCycleDataSource(address(uint160(_fundingCycle.metadata >> 70)));\\n  }\\n\\n  /**\\n    @notice\\n    Pack the funding cycle metadata.\\n\\n    @param _metadata The metadata to validate and pack.\\n\\n    @return packed The packed uint256 of all metadata params. The first 8 bits specify the version.\\n  */\\n  function packFundingCycleMetadata(JBFundingCycleMetadata memory _metadata)\\n    internal\\n    pure\\n    returns (uint256 packed)\\n  {\\n    // version 1 in the bits 0-7 (8 bits).\\n    packed = 1;\\n    // reserved rate in bits 8-23 (16 bits).\\n    packed |= _metadata.reservedRate << 8;\\n    // redemption rate in bits 24-39 (16 bits).\\n    // redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.redemptionRate) << 24;\\n    // ballot redemption rate rate in bits 40-55 (16 bits).\\n    // ballot redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.ballotRedemptionRate) << 40;\\n    // pause pay in bit 56.\\n    if (_metadata.pausePay) packed |= 1 << 56;\\n    // pause tap in bit 57.\\n    if (_metadata.pauseDistributions) packed |= 1 << 57;\\n    // pause redeem in bit 58.\\n    if (_metadata.pauseRedeem) packed |= 1 << 58;\\n    // pause burn in bit 59.\\n    if (_metadata.pauseBurn) packed |= 1 << 59;\\n    // allow minting in bit 60.\\n    if (_metadata.allowMinting) packed |= 1 << 60;\\n    // pause change token in bit 61.\\n    if (_metadata.allowChangeToken) packed |= 1 << 61;\\n    // allow terminal migration in bit 62.\\n    if (_metadata.allowTerminalMigration) packed |= 1 << 62;\\n    // allow controller migration in bit 63.\\n    if (_metadata.allowControllerMigration) packed |= 1 << 63;\\n    // allow set terminals in bit 64.\\n    if (_metadata.allowSetTerminals) packed |= 1 << 64;\\n    // allow set controller in bit 65.\\n    if (_metadata.allowSetController) packed |= 1 << 65;\\n    // hold fees in bit 66.\\n    if (_metadata.holdFees) packed |= 1 << 66;\\n    // useTotalOverflowForRedemptions in bit 67.\\n    if (_metadata.useTotalOverflowForRedemptions) packed |= 1 << 67;\\n    // use pay data source in bit 68.\\n    if (_metadata.useDataSourceForPay) packed |= 1 << 68;\\n    // use redeem data source in bit 69.\\n    if (_metadata.useDataSourceForRedeem) packed |= 1 << 69;\\n    // data source address in bits 70-229.\\n    packed |= uint256(uint160(address(_metadata.dataSource))) << 70;\\n  }\\n\\n  /**\\n    @notice\\n    Expand the funding cycle metadata.\\n\\n    @param _fundingCycle The funding cycle having its metadata expanded.\\n\\n    @return metadata The metadata object.\\n  */\\n  function expandMetadata(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (JBFundingCycleMetadata memory metadata)\\n  {\\n    return\\n      JBFundingCycleMetadata(\\n        reservedRate(_fundingCycle),\\n        redemptionRate(_fundingCycle),\\n        ballotRedemptionRate(_fundingCycle),\\n        payPaused(_fundingCycle),\\n        distributionsPaused(_fundingCycle),\\n        redeemPaused(_fundingCycle),\\n        burnPaused(_fundingCycle),\\n        mintingAllowed(_fundingCycle),\\n        changeTokenAllowed(_fundingCycle),\\n        terminalMigrationAllowed(_fundingCycle),\\n        controllerMigrationAllowed(_fundingCycle),\\n        setTerminalsAllowed(_fundingCycle),\\n        setControllerAllowed(_fundingCycle),\\n        shouldHoldFees(_fundingCycle),\\n        useTotalOverflowForRedemptions(_fundingCycle),\\n        useDataSourceForPay(_fundingCycle),\\n        useDataSourceForRedeem(_fundingCycle),\\n        dataSource(_fundingCycle)\\n      );\\n  }\\n}\\n","keccak256":"0x1528b01f3482fcab649ea9d0ff27be74e50fdb9dd6a0947687fa90af048aff73","license":"MIT"},"contracts/libraries/JBOperations.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBOperations {\\n  uint256 public constant RECONFIGURE = 1;\\n  uint256 public constant REDEEM = 2;\\n  uint256 public constant MIGRATE_CONTROLLER = 3;\\n  uint256 public constant MIGRATE_TERMINAL = 4;\\n  uint256 public constant PROCESS_FEES = 5;\\n  uint256 public constant SET_METADATA = 6;\\n  uint256 public constant ISSUE = 7;\\n  uint256 public constant CHANGE_TOKEN = 8;\\n  uint256 public constant MINT = 9;\\n  uint256 public constant BURN = 10;\\n  uint256 public constant CLAIM = 11;\\n  uint256 public constant TRANSFER = 12;\\n  uint256 public constant REQUIRE_CLAIM = 13;\\n  uint256 public constant SET_CONTROLLER = 14;\\n  uint256 public constant SET_TERMINALS = 15;\\n  uint256 public constant SET_PRIMARY_TERMINAL = 16;\\n  uint256 public constant USE_ALLOWANCE = 17;\\n  uint256 public constant SET_SPLITS = 18;\\n}\\n","keccak256":"0x828971de3d07c31e294c188335e250ee0b28919dd86f0dd570f89b97cca13932","license":"MIT"},"contracts/libraries/JBSplitsGroups.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBSplitsGroups {\\n  uint256 public constant ETH_PAYOUT = 1;\\n  uint256 public constant RESERVED_TOKENS = 2;\\n}\\n","keccak256":"0x855a78b0411f3b0a0e2d96009e0f910a971d0175d18cbcac9eab1541c8968288","license":"MIT"},"contracts/libraries/JBTokens.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBTokens {\\n  /** \\n    @notice \\n    The ETH token address in Juicebox is represented by 0x000000000000000000000000000000000000EEEe.\\n  */\\n  address public constant ETH = address(0x000000000000000000000000000000000000EEEe);\\n}\\n","keccak256":"0x8531a1a36ca119b805a011f230ee9bdeb1036c82d8fd69fc5d4503da6daace51","license":"MIT"},"contracts/structs/JBDidPayData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member payer The address from which the payment originated.\\n  @member projectId The ID of the project for which the payment was made.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectTokenCount The number of project tokens minted for the beneficiary.\\n  @member beneficiary The address to which the tokens were minted.\\n  @member memo The memo that is being emitted alongside the payment.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidPayData {\\n  address payer;\\n  uint256 projectId;\\n  JBTokenAmount amount;\\n  uint256 projectTokenCount;\\n  address beneficiary;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0x1c2cb695993bd3c95f9dd1b164d6db8cb4f9fc2a2f4073005d5b15d8433767a7","license":"MIT"},"contracts/structs/JBDidRedeemData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project with which the redeemed tokens are associated.\\n  @member projectTokenCount The number of project tokens being redeemed.\\n  @member reclaimedAmount The amount reclaimed from the treasury. Includes the token being reclaimed, the value, the number of decimals included, and the currency of the amount.\\n  @member beneficiary The address to which the reclaimed amount will be sent.\\n  @member memo The memo that is being emitted alongside the redemption.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidRedeemData {\\n  address holder;\\n  uint256 projectId;\\n  uint256 projectTokenCount;\\n  JBTokenAmount reclaimedAmount;\\n  address payable beneficiary;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0xc951e07378af3c71e52680615ba974c5a8e5448fa8275988af4caeb53036d13e","license":"MIT"},"contracts/structs/JBFee.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member amount The total amount the fee was taken from, as a fixed point number with the same number of decimals as the terminal in which this struct was created.\\n  @member fee The percent of the fee, out of MAX_FEE.\\n  @member feeDiscount The discount of the fee.\\n  @member beneficiary The address that will receive the tokens that are minted as a result of the fee payment.\\n*/\\nstruct JBFee {\\n  uint256 amount;\\n  uint32 fee;\\n  uint32 feeDiscount;\\n  address beneficiary;\\n}\\n","keccak256":"0x2b2e5c89f0e0f3ee9a2924a51d73e061ec742a06984c8901896579da7a7e95c4","license":"MIT"},"contracts/structs/JBFundAccessConstraints.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBPaymentTerminal.sol\';\\n\\n/** \\n  @member terminal The terminal within which the distribution limit and the overflow allowance applies.\\n  @member token The token for which the fund access constraints apply.\\n  @member distributionLimit The amount of the distribution limit, as a fixed point number with the same number of decimals as the terminal within which the limit applies.\\n  @member distributionLimitCurrency The currency of the distribution limit.\\n  @member overflowAllowance The amount of the allowance, as a fixed point number with the same number of decimals as the terminal within which the allowance applies.\\n  @member overflowAllowanceCurrency The currency of the overflow allowance.\\n*/\\nstruct JBFundAccessConstraints {\\n  IJBPaymentTerminal terminal;\\n  address token;\\n  uint256 distributionLimit;\\n  uint256 distributionLimitCurrency;\\n  uint256 overflowAllowance;\\n  uint256 overflowAllowanceCurrency;\\n}\\n","keccak256":"0x47e778e94bec262633c2f9fe69bebd7e76cc8bedf6b3d8ba0481acdf3619cb5f","license":"MIT"},"contracts/structs/JBFundingCycle.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleBallot.sol\';\\n\\n/** \\n  @member number The funding cycle number for the cycle\'s project. Each funding cycle has a number that is an increment of the cycle that directly preceded it. Each project\'s first funding cycle has a number of 1.\\n  @member configuration The timestamp when the parameters for this funding cycle were configured. This value will stay the same for subsequent funding cycles that roll over from an originally configured cycle.\\n  @member basedOn The `configuration` of the funding cycle that was active when this cycle was created.\\n  @member start The timestamp marking the moment from which the funding cycle is considered active. It is a unix timestamp measured in seconds.\\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle\'s parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn\'t configured the subsequent funding cycle with an explicit `weight`. If it\'s 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n  @member metadata Extra data that can be associated with a funding cycle.\\n*/\\nstruct JBFundingCycle {\\n  uint256 number;\\n  uint256 configuration;\\n  uint256 basedOn;\\n  uint256 start;\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n  uint256 metadata;\\n}\\n","keccak256":"0x7e1ee378705e677298b955bd82b7c79b962e1c2e20f840eb8c491aba595e4905","license":"MIT"},"contracts/structs/JBFundingCycleData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleBallot.sol\';\\n\\n/** \\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle\'s parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn\'t configured the subsequent funding cycle with an explicit `weight`. If it\'s 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n*/\\nstruct JBFundingCycleData {\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n}\\n","keccak256":"0xfc1c73d1b01782bbdfdd73d5d25f075e6c33dd37414638b63664063a0d1692cc","license":"MIT"},"contracts/structs/JBFundingCycleMetadata.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleDataSource.sol\';\\n\\n/** \\n  @member reservedRate The reserved rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_RESERVED_RATE`.\\n  @member redemptionRate The redemption rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member ballotRedemptionRate The redemption rate to use during an active ballot of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member pausePay A flag indicating if the pay functionality should be paused during the funding cycle.\\n  @member pauseDistributions A flag indicating if the distribute functionality should be paused during the funding cycle.\\n  @member pauseRedeem A flag indicating if the redeem functionality should be paused during the funding cycle.\\n  @member pauseBurn A flag indicating if the burn functionality should be paused during the funding cycle.\\n  @member allowMinting A flag indicating if the mint functionality should be allowed during the funding cycle.\\n  @member allowChangeToken A flag indicating if changing tokens should be allowed during this funding cycle.\\n  @member allowTerminalMigration A flag indicating if migrating terminals should be allowed during this funding cycle.\\n  @member allowControllerMigration A flag indicating if migrating controllers should be allowed during this funding cycle.\\n  @member allowSetTerminals A flag indicating if setting terminals should be allowed during this funding cycle.\\n  @member allowSetController A flag indicating if setting a new controller should be allowed during this funding cycle.\\n  @member holdFees A flag indicating if fees should be held during this funding cycle.\\n  @member useTotalOverflowForRedemptions A flag indicating if redemptions should use the project\'s balance held in all terminals instead of the project\'s local terminal balance from which the redemption is being fulfilled.\\n  @member useDataSourceForPay A flag indicating if the data source should be used for pay transactions during this funding cycle.\\n  @member useDataSourceForRedeem A flag indicating if the data source should be used for redeem transactions during this funding cycle.\\n  @member dataSource The data source to use during this funding cycle.\\n*/\\nstruct JBFundingCycleMetadata {\\n  uint256 reservedRate;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  bool pausePay;\\n  bool pauseDistributions;\\n  bool pauseRedeem;\\n  bool pauseBurn;\\n  bool allowMinting;\\n  bool allowChangeToken;\\n  bool allowTerminalMigration;\\n  bool allowControllerMigration;\\n  bool allowSetTerminals;\\n  bool allowSetController;\\n  bool holdFees;\\n  bool useTotalOverflowForRedemptions;\\n  bool useDataSourceForPay;\\n  bool useDataSourceForRedeem;\\n  IJBFundingCycleDataSource dataSource;\\n}\\n","keccak256":"0xd74a9fc88a934fdda70636f5ea16eca87d651414725ef53c4e699e645cf1e0dd","license":"MIT"},"contracts/structs/JBGroupedSplits.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBSplit.sol\';\\n\\n/** \\n  @member group The group indentifier.\\n  @member splits The splits to associate with the group.\\n*/\\nstruct JBGroupedSplits {\\n  uint256 group;\\n  JBSplit[] splits;\\n}\\n","keccak256":"0x99e837531ffe541b8dd2eaf97c0c36a32e53ce24aaabac97c5b70dd93e7e86f5","license":"MIT"},"contracts/structs/JBOperatorData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member operator The address of the operator.\\n  @member domain The domain within which the operator is being given permissions. A domain of 0 is a wildcard domain, which gives an operator access to all domains.\\n  @member permissionIndexes The indexes of the permissions the operator is being given.\\n*/\\nstruct JBOperatorData {\\n  address operator;\\n  uint256 domain;\\n  uint256[] permissionIndexes;\\n}\\n","keccak256":"0xc108ff9bbeef8783e332522b8bd1c17bba071c34051de72dc5bfe38dfd39a3a3","license":"MIT"},"contracts/structs/JBPayParamsData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBPaymentTerminal.sol\';\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member terminal The terminal that is facilitating the payment.\\n  @member payer The address from which the payment originated.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectId The ID of the project being paid.\\n  @member weight The weight of the funding cycle during which the payment is being made.\\n  @member reservedRate The reserved rate of the funding cycle during which the payment is being made.\\n  @member memo The memo that was sent alongside the payment.\\n  @member metadata Extra data provided by the payer.\\n*/\\nstruct JBPayParamsData {\\n  IJBPaymentTerminal terminal;\\n  address payer;\\n  JBTokenAmount amount;\\n  uint256 projectId;\\n  uint256 weight;\\n  uint256 reservedRate;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0x00132a0aee8526841953cfd7d954fc7f00c9976c9a3083cacfb6ed108e8baead","license":"MIT"},"contracts/structs/JBProjectMetadata.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member content The metadata content.\\n  @member domain The domain within which the metadata applies.\\n*/\\nstruct JBProjectMetadata {\\n  string content;\\n  uint256 domain;\\n}\\n","keccak256":"0x5ea56d46d07944aacfe540ee9290f10a70d77b537650a0b28975e2e88fa5b9a4","license":"MIT"},"contracts/structs/JBRedeemParamsData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBPaymentTerminal.sol\';\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member terminal The terminal that is facilitating the redemption.\\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project whos tokens are being redeemed.\\n  @member tokenCount The proposed number of tokens being redeemed, as a fixed point number with 18 decimals.\\n  @member totalSupply The total supply of tokens used in the calculation, as a fixed point number with 18 decimals.\\n  @member overflow The amount of overflow used in the reclaim amount calculation.\\n  @member reclaimAmount The amount that should be reclaimed by the redeemer using the protocol\'s standard bonding curve redemption formula. Includes the token being reclaimed, the reclaim value, the number of decimals included, and the currency of the reclaim amount.\\n  @member useTotalOverflow If overflow across all of a project\'s terminals is being used when making redemptions.\\n  @member redemptionRate The redemption rate of the funding cycle during which the redemption is being made.\\n  @member ballotRedemptionRate The ballot redemption rate of the funding cycle during which the redemption is being made.\\n  @member memo The proposed memo that is being emitted alongside the redemption.\\n  @member metadata Extra data provided by the redeemer.\\n*/\\nstruct JBRedeemParamsData {\\n  IJBPaymentTerminal terminal;\\n  address holder;\\n  uint256 projectId;\\n  uint256 tokenCount;\\n  uint256 totalSupply;\\n  uint256 overflow;\\n  JBTokenAmount reclaimAmount;\\n  bool useTotalOverflow;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0x283deeeb3ef16f41d0002f32690ee6dcd3ac9a250fbee02d3b9e3808e172a875","license":"MIT"},"contracts/structs/JBSplit.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBSplitAllocator.sol\';\\n\\n/** \\n  @member preferClaimed A flag that only has effect if a projectId is also specified, and the project has a token contract attached. If so, this flag indicates if the tokens that result from making a payment to the project should be delivered claimed into the beneficiary\'s wallet, or unclaimed to save gas.\\n  @member preferAddToBalance A flag indicating if a distribution to a project should prefer triggering it\'s addToBalance function instead of its pay function.\\n  @member percent The percent of the whole group that this split occupies. This number is out of `JBConstants.SPLITS_TOTAL_PERCENT`.\\n  @member projectId The ID of a project. If an allocator is not set but a projectId is set, funds will be sent to the protocol treasury belonging to the project who\'s ID is specified. Resulting tokens will be routed to the beneficiary with the claimed token preference respected.\\n  @member beneficiary An address. The role the of the beneficary depends on whether or not projectId is specified, and whether or not an allocator is specified. If allocator is set, the beneficiary will be forwarded to the allocator for it to use. If allocator is not set but projectId is set, the beneficiary is the address to which the project\'s tokens will be sent that result from a payment to it. If neither allocator or projectId are set, the beneficiary is where the funds from the split will be sent.\\n  @member lockedUntil Specifies if the split should be unchangeable until the specified time, with the exception of extending the locked period.\\n  @member allocator If an allocator is specified, funds will be sent to the allocator contract along with all properties of this split.\\n*/\\nstruct JBSplit {\\n  bool preferClaimed;\\n  bool preferAddToBalance;\\n  uint256 percent;\\n  uint256 projectId;\\n  address payable beneficiary;\\n  uint256 lockedUntil;\\n  IJBSplitAllocator allocator;\\n}\\n","keccak256":"0x03b5c632ad8c3b273d550bb334735d686fafa673b68ddb27fb77400d0de1eca1","license":"MIT"},"contracts/structs/JBSplitAllocationData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBSplit.sol\';\\n\\n/** \\n  @member token The token being sent to the split allocator.\\n  @member amount The amount being sent to the split allocator, as a fixed point number.\\n  @member decimals The number of decimals in the amount.\\n  @member projectId The project to which the split belongs.\\n  @member group The group to which the split belongs.\\n  @member split The split that caused the allocation.\\n*/\\nstruct JBSplitAllocationData {\\n  address token;\\n  uint256 amount;\\n  uint256 decimals;\\n  uint256 projectId;\\n  uint256 group;\\n  JBSplit split;\\n}\\n","keccak256":"0x11f19479dc1d20cc07f52edc994d24b2ac08f8074d03a72ccee68af40f884b02","license":"MIT"},"contracts/structs/JBTokenAmount.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/* \\n  @member token The token the payment was made in.\\n  @member value The amount of tokens that was paid, as a fixed point number.\\n  @member decimals The number of decimals included in the value fixed point number.\\n  @member currency The expected currency of the value.\\n**/\\nstruct JBTokenAmount {\\n  address token;\\n  uint256 value;\\n  uint256 decimals;\\n  uint256 currency;\\n}\\n","keccak256":"0xc606ed3c46a59e2e037897d2d749867919756d01f8e75a495d2dd4e03c3535fc","license":"MIT"},"prb-math/contracts/PRBMath.sol":{"content":"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivFixedPointOverflow(uint256 prod1);\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivOverflow(uint256 prod1, uint256 denominator);\\n\\n/// @notice Emitted when one of the inputs is type(int256).min.\\nerror PRBMath__MulDivSignedInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows int256.\\nerror PRBMath__MulDivSignedOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is MIN_SD59x18.\\nerror PRBMathSD59x18__AbsInputTooSmall();\\n\\n/// @notice Emitted when ceiling a number overflows SD59x18.\\nerror PRBMathSD59x18__CeilOverflow(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__DivInputTooSmall();\\n\\n/// @notice Emitted when one of the intermediary unsigned results overflows SD59x18.\\nerror PRBMathSD59x18__DivOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathSD59x18__ExpInputTooBig(int256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathSD59x18__Exp2InputTooBig(int256 x);\\n\\n/// @notice Emitted when flooring a number underflows SD59x18.\\nerror PRBMathSD59x18__FloorUnderflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format overflows SD59x18.\\nerror PRBMathSD59x18__FromIntOverflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format underflows SD59x18.\\nerror PRBMathSD59x18__FromIntUnderflow(int256 x);\\n\\n/// @notice Emitted when the product of the inputs is negative.\\nerror PRBMathSD59x18__GmNegativeProduct(int256 x, int256 y);\\n\\n/// @notice Emitted when multiplying the inputs overflows SD59x18.\\nerror PRBMathSD59x18__GmOverflow(int256 x, int256 y);\\n\\n/// @notice Emitted when the input is less than or equal to zero.\\nerror PRBMathSD59x18__LogInputTooSmall(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__MulInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__MulOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__PowuOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is negative.\\nerror PRBMathSD59x18__SqrtNegativeInput(int256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows SD59x18.\\nerror PRBMathSD59x18__SqrtOverflow(int256 x);\\n\\n/// @notice Emitted when addition overflows UD60x18.\\nerror PRBMathUD60x18__AddOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when ceiling a number overflows UD60x18.\\nerror PRBMathUD60x18__CeilOverflow(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathUD60x18__ExpInputTooBig(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathUD60x18__Exp2InputTooBig(uint256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format format overflows UD60x18.\\nerror PRBMathUD60x18__FromUintOverflow(uint256 x);\\n\\n/// @notice Emitted when multiplying the inputs overflows UD60x18.\\nerror PRBMathUD60x18__GmOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when the input is less than 1.\\nerror PRBMathUD60x18__LogInputTooSmall(uint256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows UD60x18.\\nerror PRBMathUD60x18__SqrtOverflow(uint256 x);\\n\\n/// @notice Emitted when subtraction underflows UD60x18.\\nerror PRBMathUD60x18__SubUnderflow(uint256 x, uint256 y);\\n\\n/// @dev Common mathematical functions used in both PRBMathSD59x18 and PRBMathUD60x18. Note that this shared library\\n/// does not always assume the signed 59.18-decimal fixed-point or the unsigned 60.18-decimal fixed-point\\n/// representation. When it does not, it is explicitly mentioned in the NatSpec documentation.\\nlibrary PRBMath {\\n    /// STRUCTS ///\\n\\n    struct SD59x18 {\\n        int256 value;\\n    }\\n\\n    struct UD60x18 {\\n        uint256 value;\\n    }\\n\\n    /// STORAGE ///\\n\\n    /// @dev How many trailing decimals can be represented.\\n    uint256 internal constant SCALE = 1e18;\\n\\n    /// @dev Largest power of two divisor of SCALE.\\n    uint256 internal constant SCALE_LPOTD = 262144;\\n\\n    /// @dev SCALE inverted mod 2^256.\\n    uint256 internal constant SCALE_INVERSE =\\n        78156646155174841979727994598816262306175212592076161876661_508869554232690281;\\n\\n    /// FUNCTIONS ///\\n\\n    /// @notice Calculates the binary exponent of x using the binary fraction method.\\n    /// @dev Has to use 192.64-bit fixed-point numbers.\\n    /// See https://ethereum.stackexchange.com/a/96594/24693.\\n    /// @param x The exponent as an unsigned 192.64-bit fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function exp2(uint256 x) internal pure returns (uint256 result) {\\n        unchecked {\\n            // Start from 0.5 in the 192.64-bit fixed-point format.\\n            result = 0x800000000000000000000000000000000000000000000000;\\n\\n            // Multiply the result by root(2, 2^-i) when the bit at position i is 1. None of the intermediary results overflows\\n            // because the initial result is 2^191 and all magic factors are less than 2^65.\\n            if (x & 0x8000000000000000 > 0) {\\n                result = (result * 0x16A09E667F3BCC909) >> 64;\\n            }\\n            if (x & 0x4000000000000000 > 0) {\\n                result = (result * 0x1306FE0A31B7152DF) >> 64;\\n            }\\n            if (x & 0x2000000000000000 > 0) {\\n                result = (result * 0x1172B83C7D517ADCE) >> 64;\\n            }\\n            if (x & 0x1000000000000000 > 0) {\\n                result = (result * 0x10B5586CF9890F62A) >> 64;\\n            }\\n            if (x & 0x800000000000000 > 0) {\\n                result = (result * 0x1059B0D31585743AE) >> 64;\\n            }\\n            if (x & 0x400000000000000 > 0) {\\n                result = (result * 0x102C9A3E778060EE7) >> 64;\\n            }\\n            if (x & 0x200000000000000 > 0) {\\n                result = (result * 0x10163DA9FB33356D8) >> 64;\\n            }\\n            if (x & 0x100000000000000 > 0) {\\n                result = (result * 0x100B1AFA5ABCBED61) >> 64;\\n            }\\n            if (x & 0x80000000000000 > 0) {\\n                result = (result * 0x10058C86DA1C09EA2) >> 64;\\n            }\\n            if (x & 0x40000000000000 > 0) {\\n                result = (result * 0x1002C605E2E8CEC50) >> 64;\\n            }\\n            if (x & 0x20000000000000 > 0) {\\n                result = (result * 0x100162F3904051FA1) >> 64;\\n            }\\n            if (x & 0x10000000000000 > 0) {\\n                result = (result * 0x1000B175EFFDC76BA) >> 64;\\n            }\\n            if (x & 0x8000000000000 > 0) {\\n                result = (result * 0x100058BA01FB9F96D) >> 64;\\n            }\\n            if (x & 0x4000000000000 > 0) {\\n                result = (result * 0x10002C5CC37DA9492) >> 64;\\n            }\\n            if (x & 0x2000000000000 > 0) {\\n                result = (result * 0x1000162E525EE0547) >> 64;\\n            }\\n            if (x & 0x1000000000000 > 0) {\\n                result = (result * 0x10000B17255775C04) >> 64;\\n            }\\n            if (x & 0x800000000000 > 0) {\\n                result = (result * 0x1000058B91B5BC9AE) >> 64;\\n            }\\n            if (x & 0x400000000000 > 0) {\\n                result = (result * 0x100002C5C89D5EC6D) >> 64;\\n            }\\n            if (x & 0x200000000000 > 0) {\\n                result = (result * 0x10000162E43F4F831) >> 64;\\n            }\\n            if (x & 0x100000000000 > 0) {\\n                result = (result * 0x100000B1721BCFC9A) >> 64;\\n            }\\n            if (x & 0x80000000000 > 0) {\\n                result = (result * 0x10000058B90CF1E6E) >> 64;\\n            }\\n            if (x & 0x40000000000 > 0) {\\n                result = (result * 0x1000002C5C863B73F) >> 64;\\n            }\\n            if (x & 0x20000000000 > 0) {\\n                result = (result * 0x100000162E430E5A2) >> 64;\\n            }\\n            if (x & 0x10000000000 > 0) {\\n                result = (result * 0x1000000B172183551) >> 64;\\n            }\\n            if (x & 0x8000000000 > 0) {\\n                result = (result * 0x100000058B90C0B49) >> 64;\\n            }\\n            if (x & 0x4000000000 > 0) {\\n                result = (result * 0x10000002C5C8601CC) >> 64;\\n            }\\n            if (x & 0x2000000000 > 0) {\\n                result = (result * 0x1000000162E42FFF0) >> 64;\\n            }\\n            if (x & 0x1000000000 > 0) {\\n                result = (result * 0x10000000B17217FBB) >> 64;\\n            }\\n            if (x & 0x800000000 > 0) {\\n                result = (result * 0x1000000058B90BFCE) >> 64;\\n            }\\n            if (x & 0x400000000 > 0) {\\n                result = (result * 0x100000002C5C85FE3) >> 64;\\n            }\\n            if (x & 0x200000000 > 0) {\\n                result = (result * 0x10000000162E42FF1) >> 64;\\n            }\\n            if (x & 0x100000000 > 0) {\\n                result = (result * 0x100000000B17217F8) >> 64;\\n            }\\n            if (x & 0x80000000 > 0) {\\n                result = (result * 0x10000000058B90BFC) >> 64;\\n            }\\n            if (x & 0x40000000 > 0) {\\n                result = (result * 0x1000000002C5C85FE) >> 64;\\n            }\\n            if (x & 0x20000000 > 0) {\\n                result = (result * 0x100000000162E42FF) >> 64;\\n            }\\n            if (x & 0x10000000 > 0) {\\n                result = (result * 0x1000000000B17217F) >> 64;\\n            }\\n            if (x & 0x8000000 > 0) {\\n                result = (result * 0x100000000058B90C0) >> 64;\\n            }\\n            if (x & 0x4000000 > 0) {\\n                result = (result * 0x10000000002C5C860) >> 64;\\n            }\\n            if (x & 0x2000000 > 0) {\\n                result = (result * 0x1000000000162E430) >> 64;\\n            }\\n            if (x & 0x1000000 > 0) {\\n                result = (result * 0x10000000000B17218) >> 64;\\n            }\\n            if (x & 0x800000 > 0) {\\n                result = (result * 0x1000000000058B90C) >> 64;\\n            }\\n            if (x & 0x400000 > 0) {\\n                result = (result * 0x100000000002C5C86) >> 64;\\n            }\\n            if (x & 0x200000 > 0) {\\n                result = (result * 0x10000000000162E43) >> 64;\\n            }\\n            if (x & 0x100000 > 0) {\\n                result = (result * 0x100000000000B1721) >> 64;\\n            }\\n            if (x & 0x80000 > 0) {\\n                result = (result * 0x10000000000058B91) >> 64;\\n            }\\n            if (x & 0x40000 > 0) {\\n                result = (result * 0x1000000000002C5C8) >> 64;\\n            }\\n            if (x & 0x20000 > 0) {\\n                result = (result * 0x100000000000162E4) >> 64;\\n            }\\n            if (x & 0x10000 > 0) {\\n                result = (result * 0x1000000000000B172) >> 64;\\n            }\\n            if (x & 0x8000 > 0) {\\n                result = (result * 0x100000000000058B9) >> 64;\\n            }\\n            if (x & 0x4000 > 0) {\\n                result = (result * 0x10000000000002C5D) >> 64;\\n            }\\n            if (x & 0x2000 > 0) {\\n                result = (result * 0x1000000000000162E) >> 64;\\n            }\\n            if (x & 0x1000 > 0) {\\n                result = (result * 0x10000000000000B17) >> 64;\\n            }\\n            if (x & 0x800 > 0) {\\n                result = (result * 0x1000000000000058C) >> 64;\\n            }\\n            if (x & 0x400 > 0) {\\n                result = (result * 0x100000000000002C6) >> 64;\\n            }\\n            if (x & 0x200 > 0) {\\n                result = (result * 0x10000000000000163) >> 64;\\n            }\\n            if (x & 0x100 > 0) {\\n                result = (result * 0x100000000000000B1) >> 64;\\n            }\\n            if (x & 0x80 > 0) {\\n                result = (result * 0x10000000000000059) >> 64;\\n            }\\n            if (x & 0x40 > 0) {\\n                result = (result * 0x1000000000000002C) >> 64;\\n            }\\n            if (x & 0x20 > 0) {\\n                result = (result * 0x10000000000000016) >> 64;\\n            }\\n            if (x & 0x10 > 0) {\\n                result = (result * 0x1000000000000000B) >> 64;\\n            }\\n            if (x & 0x8 > 0) {\\n                result = (result * 0x10000000000000006) >> 64;\\n            }\\n            if (x & 0x4 > 0) {\\n                result = (result * 0x10000000000000003) >> 64;\\n            }\\n            if (x & 0x2 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n            if (x & 0x1 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n\\n            // We\'re doing two things at the same time:\\n            //\\n            //   1. Multiply the result by 2^n + 1, where \\"2^n\\" is the integer part and the one is added to account for\\n            //      the fact that we initially set the result to 0.5. This is accomplished by subtracting from 191\\n            //      rather than 192.\\n            //   2. Convert the result to the unsigned 60.18-decimal fixed-point format.\\n            //\\n            // This works because 2^(191-ip) = 2^ip / 2^191, where \\"ip\\" is the integer part \\"2^n\\".\\n            result *= SCALE;\\n            result >>= (191 - (x >> 64));\\n        }\\n    }\\n\\n    /// @notice Finds the zero-based index of the first one in the binary representation of x.\\n    /// @dev See the note on msb in the \\"Find First Set\\" Wikipedia article https://en.wikipedia.org/wiki/Find_first_set\\n    /// @param x The uint256 number for which to find the index of the most significant bit.\\n    /// @return msb The index of the most significant bit as an uint256.\\n    function mostSignificantBit(uint256 x) internal pure returns (uint256 msb) {\\n        if (x >= 2**128) {\\n            x >>= 128;\\n            msb += 128;\\n        }\\n        if (x >= 2**64) {\\n            x >>= 64;\\n            msb += 64;\\n        }\\n        if (x >= 2**32) {\\n            x >>= 32;\\n            msb += 32;\\n        }\\n        if (x >= 2**16) {\\n            x >>= 16;\\n            msb += 16;\\n        }\\n        if (x >= 2**8) {\\n            x >>= 8;\\n            msb += 8;\\n        }\\n        if (x >= 2**4) {\\n            x >>= 4;\\n            msb += 4;\\n        }\\n        if (x >= 2**2) {\\n            x >>= 2;\\n            msb += 2;\\n        }\\n        if (x >= 2**1) {\\n            // No need to shift x any more.\\n            msb += 1;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev Credit to Remco Bloemen under MIT license https://xn--2-umb.com/21/muldiv.\\n    ///\\n    /// Requirements:\\n    /// - The denominator cannot be zero.\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The multiplicand as an uint256.\\n    /// @param y The multiplier as an uint256.\\n    /// @param denominator The divisor as an uint256.\\n    /// @return result The result as an uint256.\\n    function mulDiv(\\n        uint256 x,\\n        uint256 y,\\n        uint256 denominator\\n    ) internal pure returns (uint256 result) {\\n        // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n        // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n        // variables such that product = prod1 * 2^256 + prod0.\\n        uint256 prod0; // Least significant 256 bits of the product\\n        uint256 prod1; // Most significant 256 bits of the product\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        // Handle non-overflow cases, 256 by 256 division.\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = prod0 / denominator;\\n            }\\n            return result;\\n        }\\n\\n        // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n        if (prod1 >= denominator) {\\n            revert PRBMath__MulDivOverflow(prod1, denominator);\\n        }\\n\\n        ///////////////////////////////////////////////\\n        // 512 by 256 division.\\n        ///////////////////////////////////////////////\\n\\n        // Make division exact by subtracting the remainder from [prod1 prod0].\\n        uint256 remainder;\\n        assembly {\\n            // Compute remainder using mulmod.\\n            remainder := mulmod(x, y, denominator)\\n\\n            // Subtract 256 bit number from 512 bit number.\\n            prod1 := sub(prod1, gt(remainder, prod0))\\n            prod0 := sub(prod0, remainder)\\n        }\\n\\n        // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n        // See https://cs.stackexchange.com/q/138556/92363.\\n        unchecked {\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 lpotdod = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by lpotdod.\\n                denominator := div(denominator, lpotdod)\\n\\n                // Divide [prod1 prod0] by lpotdod.\\n                prod0 := div(prod0, lpotdod)\\n\\n                // Flip lpotdod such that it is 2^256 / lpotdod. If lpotdod is zero, then it becomes one.\\n                lpotdod := add(div(sub(0, lpotdod), lpotdod), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * lpotdod;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel\'s lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don\'t need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f71e18) with full precision.\\n    ///\\n    /// @dev Variant of \\"mulDiv\\" with constant folding, i.e. in which the denominator is always 1e18. Before returning the\\n    /// final result, we add 1 if (x * y) % SCALE >= HALF_SCALE. Without this, 6.6e-19 would be truncated to 0 instead of\\n    /// being rounded to 1e-18.  See \\"Listing 6\\" and text above it at https://accu.org/index.php/journals/1717.\\n    ///\\n    /// Requirements:\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - The body is purposely left uncommented; see the NatSpec comments in \\"PRBMath.mulDiv\\" to understand how this works.\\n    /// - It is assumed that the result can never be type(uint256).max when x and y solve the following two equations:\\n    ///     1. x * y = type(uint256).max * SCALE\\n    ///     2. (x * y) % SCALE >= SCALE / 2\\n    ///\\n    /// @param x The multiplicand as an unsigned 60.18-decimal fixed-point number.\\n    /// @param y The multiplier as an unsigned 60.18-decimal fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function mulDivFixedPoint(uint256 x, uint256 y) internal pure returns (uint256 result) {\\n        uint256 prod0;\\n        uint256 prod1;\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        if (prod1 >= SCALE) {\\n            revert PRBMath__MulDivFixedPointOverflow(prod1);\\n        }\\n\\n        uint256 remainder;\\n        uint256 roundUpUnit;\\n        assembly {\\n            remainder := mulmod(x, y, SCALE)\\n            roundUpUnit := gt(remainder, 499999999999999999)\\n        }\\n\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = (prod0 / SCALE) + roundUpUnit;\\n                return result;\\n            }\\n        }\\n\\n        assembly {\\n            result := add(\\n                mul(\\n                    or(\\n                        div(sub(prod0, remainder), SCALE_LPOTD),\\n                        mul(sub(prod1, gt(remainder, prod0)), add(div(sub(0, SCALE_LPOTD), SCALE_LPOTD), 1))\\n                    ),\\n                    SCALE_INVERSE\\n                ),\\n                roundUpUnit\\n            )\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev An extension of \\"mulDiv\\" for signed numbers. Works by computing the signs and the absolute values separately.\\n    ///\\n    /// Requirements:\\n    /// - None of the inputs can be type(int256).min.\\n    /// - The result must fit within int256.\\n    ///\\n    /// @param x The multiplicand as an int256.\\n    /// @param y The multiplier as an int256.\\n    /// @param denominator The divisor as an int256.\\n    /// @return result The result as an int256.\\n    function mulDivSigned(\\n        int256 x,\\n        int256 y,\\n        int256 denominator\\n    ) internal pure returns (int256 result) {\\n        if (x == type(int256).min || y == type(int256).min || denominator == type(int256).min) {\\n            revert PRBMath__MulDivSignedInputTooSmall();\\n        }\\n\\n        // Get hold of the absolute values of x, y and the denominator.\\n        uint256 ax;\\n        uint256 ay;\\n        uint256 ad;\\n        unchecked {\\n            ax = x < 0 ? uint256(-x) : uint256(x);\\n            ay = y < 0 ? uint256(-y) : uint256(y);\\n            ad = denominator < 0 ? uint256(-denominator) : uint256(denominator);\\n        }\\n\\n        // Compute the absolute value of (x*y)\\u00f7denominator. The result must fit within int256.\\n        uint256 rAbs = mulDiv(ax, ay, ad);\\n        if (rAbs > uint256(type(int256).max)) {\\n            revert PRBMath__MulDivSignedOverflow(rAbs);\\n        }\\n\\n        // Get the signs of x, y and the denominator.\\n        uint256 sx;\\n        uint256 sy;\\n        uint256 sd;\\n        assembly {\\n            sx := sgt(x, sub(0, 1))\\n            sy := sgt(y, sub(0, 1))\\n            sd := sgt(denominator, sub(0, 1))\\n        }\\n\\n        // XOR over sx, sy and sd. This is checking whether there are one or three negative signs in the inputs.\\n        // If yes, the result should be negative.\\n        result = sx ^ sy ^ sd == 0 ? -int256(rAbs) : int256(rAbs);\\n    }\\n\\n    /// @notice Calculates the square root of x, rounding down.\\n    /// @dev Uses the Babylonian method https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The uint256 number for which to calculate the square root.\\n    /// @return result The result as an uint256.\\n    function sqrt(uint256 x) internal pure returns (uint256 result) {\\n        if (x == 0) {\\n            return 0;\\n        }\\n\\n        // Set the initial guess to the closest power of two that is higher than x.\\n        uint256 xAux = uint256(x);\\n        result = 1;\\n        if (xAux >= 0x100000000000000000000000000000000) {\\n            xAux >>= 128;\\n            result <<= 64;\\n        }\\n        if (xAux >= 0x10000000000000000) {\\n            xAux >>= 64;\\n            result <<= 32;\\n        }\\n        if (xAux >= 0x100000000) {\\n            xAux >>= 32;\\n            result <<= 16;\\n        }\\n        if (xAux >= 0x10000) {\\n            xAux >>= 16;\\n            result <<= 8;\\n        }\\n        if (xAux >= 0x100) {\\n            xAux >>= 8;\\n            result <<= 4;\\n        }\\n        if (xAux >= 0x10) {\\n            xAux >>= 4;\\n            result <<= 2;\\n        }\\n        if (xAux >= 0x8) {\\n            result <<= 1;\\n        }\\n\\n        // The operations can never overflow because the result is max 2^127 when it enters this block.\\n        unchecked {\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1; // Seven iterations should be enough\\n            uint256 roundedDownResult = x / result;\\n            return result >= roundedDownResult ? roundedDownResult : result;\\n        }\\n    }\\n}\\n","keccak256":"0x62cbabae4910e168e99b9c2c3e3b5c9c7ad5e7abd961dcc63b7ea3d83d8ea87e","license":"Unlicense"}},"version":1}',
	bytecode:
		'0x6101e060405263017d78406003553480156200001a57600080fd5b506040516200648f3803806200648f8339810160408190526200003d9162000219565b6deeee000000000000000000000000608052601260a0819052600160c0819052606089901b6001600160601b03191660e05261eeee91908a818b8b8b8b8b8b8b6200008833620000f4565b600180556101a08990526101c08890526001600160601b0319606087811b82166101005286811b82166101205285811b82166101405284811b82166101605283901b1661018052620000da8162000144565b5050505050505050505050505050505050505050620002e4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b03163314620001a45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b0381166200020b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200019b565b6200021681620000f4565b50565b600080600080600080600080610100898b0312156200023757600080fd5b8851975060208901516200024b81620002ce565b60408a01519097506200025e81620002ce565b60608a01519096506200027181620002ce565b60808a01519095506200028481620002ce565b60a08a01519094506200029781620002ce565b60c08a0151909350620002aa81620002ce565b60e08a0151909250620002bd81620002ce565b809150509295985092959890939650565b6001600160a01b03811681146200021657600080fd5b60805160601c60a05160c05160e05160601c6101005160601c6101205160601c6101405160601c6101605160601c6101805160601c6101a0516101c051615f796200051660003960008181610401015261279e015260008181610339015261216d015260008181610570015281816110a10152818161195201528181611ef50152818161212e015281816125ef0152818161319e01526134ce01526000818161068c0152611aff0152600081816102e0015261419f0152600081816106580152818161098c01528181610baa0152818161226201528181612de4015281816135f801528181613fbb015261452401526000818161051101528181610ee00152818161155001528181611bd4015281816126dc01526132a20152600081816105c401528181612912015281816129ee01528181612b9a0152612c7601526000818161026b0152818161070301528181611a3101528181611aac0152818161210801526137f401526000818161036d01528181610604015281816119d2015281816119fe01528181611a5e01528181611ad9015281816120e2015281816137ce015261438f0152600081816104750152818161078701528181610a5301528181610c5c01528181610fba0152818161113e015281816111e4015281816120a001528181612db901528181612eb401528181612f5c0152818161378c01528181613f8e015281816142f60152818161434d01528181614551015281816147b10152818161489d01526149230152615f796000f3fe6080604052600436106101fe5760003560e01c80638af560941161011d578063c41c2f24116100b0578063e5a6b10f1161007f578063f2fde38b11610064578063f2fde38b14610755578063fc0c546a14610775578063fe663f0f146107a957600080fd5b8063e5a6b10f146106f1578063e730b26e1461072557600080fd5b8063c41c2f2414610646578063d3419bf31461067a578063d6dacc53146106ae578063ddca3f43146106db57600080fd5b8063a32e1e96116100ec578063a32e1e9614610592578063ad007d63146105b2578063b7bad1b1146105e6578063bc8926e91461062657600080fd5b80638af56094146104d25780638b79543c146104ff5780638da5cb5b14610533578063975057e71461055e57600080fd5b80633b7be7ea1161019557806369fe0e2d1161016457806369fe0e2d14610423578063715018a614610443578063868399a51461045857806389701db5146104b257600080fd5b80633b7be7ea1461038f578063405b84fa146103af578063637913ac146103cf57806366248b86146103ef57600080fd5b80632b267b4e116101d15780632b267b4e146102ae5780632bdfe004146102ce5780632d1a590314610327578063313ce5671461035b57600080fd5b806301ffc9a7146102035780630cf8e858146102385780631982d6791461024d5780631ebc263f1461029b575b600080fd5b34801561020f57600080fd5b5061022361021e3660046150e7565b6107c9565b60405190151581526020015b60405180910390f35b61024b610246366004615320565b610955565b005b34801561025957600080fd5b5061028d610268366004614eb1565b507f000000000000000000000000000000000000000000000000000000000000000090565b60405190815260200161022f565b61028d6102a9366004615258565b610b5b565b3480156102ba57600080fd5b5061028d6102c936600461543f565b610d7f565b3480156102da57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161022f565b34801561033357600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036757600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561039b57600080fd5b5061024b6103aa366004615129565b610d9b565b3480156103bb57600080fd5b5061028d6103ca366004615233565b610eae565b3480156103db57600080fd5b5061024b6103ea366004614eb1565b61129b565b3480156103fb57600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561042f57600080fd5b5061024b61043e366004615201565b611395565b34801561044f57600080fd5b5061024b611494565b34801561046457600080fd5b50610223610473366004614eb1565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161490565b3480156104be57600080fd5b5061024b6104cd366004615201565b611521565b3480156104de57600080fd5b506104f26104ed366004615201565b611844565b60405161022f9190615896565b34801561050b57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b34801561053f57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610302565b34801561056a57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b34801561059e57600080fd5b5061028d6105ad366004615201565b611903565b3480156105be57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b3480156105f257600080fd5b5061028d610601366004614eb1565b507f000000000000000000000000000000000000000000000000000000000000000090565b34801561063257600080fd5b5061028d6106413660046153b6565b611ba2565b34801561065257600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b34801561068657600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b3480156106ba57600080fd5b506004546103029073ffffffffffffffffffffffffffffffffffffffff1681565b3480156106e757600080fd5b5061028d60035481565b3480156106fd57600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561073157600080fd5b50610223610740366004614eb1565b60056020526000908152604090205460ff1681565b34801561076157600080fd5b5061024b610770366004614eb1565b611c8e565b34801561078157600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b3480156107b557600080fd5b5061028d6107c4366004614eeb565b611dbe565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167ff597c74300000000000000000000000000000000000000000000000000000000148061085c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f2b267b4e00000000000000000000000000000000000000000000000000000000145b806108a857507fffffffff0000000000000000000000000000000000000000000000000000000082167fbc8926e900000000000000000000000000000000000000000000000000000000145b806108f457507fffffffff0000000000000000000000000000000000000000000000000000000082167ffe663f0f00000000000000000000000000000000000000000000000000000000145b8061094057507fffffffff0000000000000000000000000000000000000000000000000000000082167fad007d6300000000000000000000000000000000000000000000000000000000145b8061094f575061094f82611dde565b92915050565b6040517f6e49181f0000000000000000000000000000000000000000000000000000000081526004810188905230602482015287907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636e49181f9060440160206040518083038186803b1580156109e357600080fd5b505afa1580156109f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1b91906150ca565b610a51576040517fd8ead2c800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14610ad8573415610ac8576040517fbcfd35be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ad3333089611ec1565b610adc565b3496505b610b51888887878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250611ed092505050565b5050505050505050565b6040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523060248201526000908b9073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b158015610bec57600080fd5b505afa158015610c00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2491906150ca565b610c5a576040517fd8ead2c800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14610ce1573415610cd1576040517fbcfd35be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cdc33308d611ec1565b610ce5565b349a505b610d6f8b338e8c8c8c8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611fda92505050565b9c9b505050505050505050505050565b6000610d8f888888878787612596565b98975050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591513381529192917ff870dc5d3fb30dcc6e5588de75dfd6a15c777db0fb8266158702569c081eef35910160405180910390a35050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015610f3757600080fd5b505afa158015610f4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6f9190614ece565b836004610f7d838383612898565b6040517f868399a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116600483015286169063868399a59060240160206040518083038186803b15801561100457600080fd5b505afa158015611018573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103c91906150ca565b611072576040517f581010ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f6bb6a5ad000000000000000000000000000000000000000000000000000000008152600481018790527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636bb6a5ad90602401602060405180830381600087803b1580156110fa57600080fd5b505af115801561110e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611132919061521a565b935083156112405760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14611182576000611184565b845b604080516020810182526000815290517f0cf8e85800000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691630cf8e85891849161120c918c918b917f000000000000000000000000000000000000000000000000000000000000000091600401615a95565b6000604051808303818588803b15801561122557600080fd5b505af1158015611239573d6000803e3d6000fd5b5050505050505b6040805185815233602082015273ffffffffffffffffffffffffffffffffffffffff87169188917fa7519e5f94697b7f53e97c5eb46a0c730a296ab686ab8fd333835c5f735784eb910160405180910390a350505092915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461131c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040513381527f0a9a80fe9716605b3e52abb3d792d6a4e7816d6afc02a5a4ef023081feaf9f609060200160405180910390a250565b60005473ffffffffffffffffffffffffffffffffffffffff163314611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b6302faf080811115611454576040517f45fbd9c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003819055604080518281523360208201527fd7414e590e1cb532989ab2a34c8f4c2c17f7ab6f006efeeaef2e87cd5008c202910160405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314611515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b61151f6000612aa1565b565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b1580156115a757600080fd5b505afa1580156115bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115df9190614ece565b81600561160160005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461163b84848484612b16565b600085815260026020908152604080832080548251818502810185019093528083529192909190849084015b828210156116e657600084815260209081902060408051608081018252600286029092018054835260019081015463ffffffff80821685870152640100000000820416928401929092526801000000000000000090910473ffffffffffffffffffffffffffffffffffffffff1660608301529083529092019101611667565b5050506000888152600260205260408120929350611705929150614ce3565b60005b815181101561183b57600061178183838151811061172857611728615eb5565b60200260200101516000015184848151811061174657611746615eb5565b60200260200101516020015163ffffffff1685858151811061176a5761176a615eb5565b60200260200101516040015163ffffffff16612d2f565b90506117aa8184848151811061179957611799615eb5565b602002602001015160600151612d75565b6001151581897fcf0c92a2c6d7c42f488326b0cb900104b99984b6b218db81cd29371364a352518686815181106117e3576117e3615eb5565b6020026020010151606001513360405161182092919073ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b60405180910390a4508061183381615e1e565b915050611708565b50505050505050565b606060026000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156118f857600084815260209081902060408051608081018252600286029092018054835260019081015463ffffffff80821685870152640100000000820416928401929092526801000000000000000090910473ffffffffffffffffffffffffffffffffffffffff1660608301529083529092019101611879565b505050509050919050565b6040517fd49031c000000000000000000000000000000000000000000000000000000000815230600482015260248101829052600090819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063d49031c09060440160206040518083038186803b15801561199457600080fd5b505afa1580156119a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cc919061521a565b905060007f0000000000000000000000000000000000000000000000000000000000000000601214611a2957611a24827f00000000000000000000000000000000000000000000000000000000000000006012612fe2565b611a2b565b815b905060017f000000000000000000000000000000000000000000000000000000000000000014611b9857611b9381611a847f0000000000000000000000000000000000000000000000000000000000000000600a615cd8565b6040517fa4d0caf20000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000006004820152600160248201527f000000000000000000000000000000000000000000000000000000000000000060448201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a4d0caf29060640160206040518083038186803b158015611b5657600080fd5b505afa158015611b6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8e919061521a565b613040565b611b9a565b805b949350505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018890526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015611c2b57600080fd5b505afa158015611c3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c639190614ece565b886011611c71838383612898565b611c7f8b8b8b8a8a8a613145565b9b9a5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b73ffffffffffffffffffffffffffffffffffffffff8116611db2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610e18565b611dbb81612aa1565b50565b600088886002611dcf838383612898565b610d6f8c8c8c8b8b8b8b6133da565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f99d14e9c000000000000000000000000000000000000000000000000000000001480611e7157507fffffffff0000000000000000000000000000000000000000000000000000000082167f2896000200000000000000000000000000000000000000000000000000000000145b8061094f57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461094f565b611ecb828261396c565b505050565b6000611edc8585613ac6565b905073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663e7c8e3e386611f258488615c24565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015611f7b57600080fd5b505af1158015611f8f573d6000803e3d6000fd5b50505050847f9ecaf7fc3dfffd6867c175d6e684b1f1e3aef019398ba8db2c1ffab4a09db2538583868633604051611fcb959493929190615ae8565b60405180910390a25050505050565b600073ffffffffffffffffffffffffffffffffffffffff8616612029576040517fa762251300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61208e60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600080600060405180608001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018e81526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a977aefc8d838e7f00000000000000000000000000000000000000000000000000000000000000008c8c6040518763ffffffff1660e01b81526004016121af969594939291906157a7565b600060405180830381600087803b1580156121c957600080fd5b505af11580156121dd573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526122239190810190615191565b9950919550909350915081156123c2576040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018c90527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635dd8f6aa9060240160206040518083038186803b1580156122b957600080fd5b505afa1580156122cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f19190614ece565b6040517f8ae9c07b000000000000000000000000000000000000000000000000000000008152600481018d90526024810184905273ffffffffffffffffffffffffffffffffffffffff8c8116604483015260c06064830152600060c48301528a15156084830152600160a48301529190911690638ae9c07b9060e401602060405180830381600087803b15801561238757600080fd5b505af115801561239b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123bf919061521a565b94505b888510156123fc576040517f7b94612600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316156125385760006040518060e001604052808e73ffffffffffffffffffffffffffffffffffffffff1681526020018d81526020018381526020018781526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018881525090508373ffffffffffffffffffffffffffffffffffffffff1663185856a1826040518263ffffffff1660e01b81526004016124b49190615919565b600060405180830381600087803b1580156124ce57600080fd5b505af11580156124e2573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff167f7c66059d4a9f68466678168c1c369a1532ce0c8cec8da9b0a40703d29ff1c7b3823360405161252e92919061592c565b60405180910390a2505b50505087816000015182602001517f133161f1c9161488f777ab9a26aae91d47c0d9a3fafb398960f138db02c737978c8b8f888b8b336040516125819796959493929190615739565b60405180910390a45098975050505050505050565b6040517fc66445970000000000000000000000000000000000000000000000000000000081526004810187905260248101869052604481018590526000908190819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c66445979060640161014060405180830381600087803b15801561263457600080fd5b505af1158015612648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061266c9190615162565b91509150858110156126aa576040517fb01493c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561273357600080fd5b505afa158015612747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276b9190614ece565b9050600080600354600014612788576127838c613f4a565b61278e565b633b9aca005b90506000806127c48e88602001517f0000000000000000000000000000000000000000000000000000000000000000898761415b565b925090506127d28183615c24565b9150633b9aca008314806127e4575081155b6127fa576127f58e88848887614b1a565b6127fd565b60005b93508015612821576128128160035485612d2f565b61281c9082615ddb565b612824565b60005b975087156128375761283730868a611ec1565b5050508a846000015185602001517f24352f49df447b14e0e08a323625c663d865ce20c343c4638af12e1dc48aa760858e88878c8f8f336040516128829897969594939291906156aa565b60405180910390a4505050509695505050505050565b3373ffffffffffffffffffffffffffffffffffffffff84161480159061298e57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561295457600080fd5b505afa158015612968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298c91906150ca565b155b8015612a6a57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612a3057600080fd5b505afa158015612a44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6891906150ca565b155b15611ecb576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80158015612b3a57503373ffffffffffffffffffffffffffffffffffffffff851614155b8015612c1657506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612bdc57600080fd5b505afa158015612bf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c1491906150ca565b155b8015612cf257506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612cb857600080fd5b505afa158015612ccc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cf091906150ca565b155b15612d29576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b600080612d418484633b9aca00613040565b612d4b9085615ddb565b9050612d6085633b9aca00611b8e8185615c24565b612d6a9086615ddb565b9150505b9392505050565b6040517f862026500000000000000000000000000000000000000000000000000000000081526001600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063862026509060440160206040518083038186803b158015612e2857600080fd5b505afa158015612e3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e609190614ece565b905073ffffffffffffffffffffffffffffffffffffffff8116301415612eb057612d2983306001856000806040518060200160405280600081525060405180602001604052806000815250611fda565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14612ef8576000612efa565b835b60408051602081018252600080825291517f1ebc263f00000000000000000000000000000000000000000000000000000000815292935073ffffffffffffffffffffffffffffffffffffffff851692631ebc263f928592612f89926001928b927f0000000000000000000000000000000000000000000000000000000000000000928c92918291600401615a23565b6020604051808303818588803b158015612fa257600080fd5b505af1158015612fb6573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612fdb919061521a565b5050505050565b600082821415612ff3575082612d6e565b82821115613021576130058383615ddb565b61301090600a615cd8565b61301a9085615d9e565b9050612d6e565b61302b8284615ddb565b61303690600a615cd8565b61301a9085615c3c565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600014156130995783828161308f5761308f615e86565b0492505050612d6e565b8381106130dc576040517f773cc18c0000000000000000000000000000000000000000000000000000000081526004810182905260248101859052604401610e18565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6040517f253867150000000000000000000000000000000000000000000000000000000081526004810187905260248101869052604481018590526000908190819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063253867159060640161014060405180830381600087803b1580156131e357600080fd5b505af11580156131f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061321b9190615162565b9150915085811015613259576040517fb01493c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a9052600090819073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b1580156132e457600080fd5b505afa1580156132f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061331c9190614ece565b90506000600354600014613338576133338c613f4a565b61333e565b633b9aca005b9050633b9aca00811461335d576133588c86868585614b1a565b613360565b60005b925061336c8385615ddb565b9550851561337f5761337f308988611ec1565b50505088826000015183602001517f8657a0c05a68a912c23c1bd00124afaa8c669063b046bd9bfd22b21d573c5e6d888c86898b336040516133c696959493929190615652565b60405180910390a450509695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8416613429576040517ff74a1b6600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61348e60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040517fa2df1f9500000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063a2df1f959061350b908d908d908d908b908b90600401615849565b600060405180830381600087803b15801561352557600080fd5b505af1158015613539573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261357f9190810190615191565b97509094509092509050868310156135c3576040517ff896960b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b871561372e576040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018a90527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635dd8f6aa9060240160206040518083038186803b15801561364f57600080fd5b505afa158015613663573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136879190614ece565b6040517f1665bc0f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c81166004830152602482018c9052604482018b905260a06064830152600060a4830181905260848301529190911690631665bc0f9060c401600060405180830381600087803b15801561371557600080fd5b505af1158015613729573d6000803e3d6000fd5b505050505b73ffffffffffffffffffffffffffffffffffffffff8116156139005760006040518060e001604052808c73ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018781526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681525090508173ffffffffffffffffffffffffffffffffffffffff166343e1db27826040518263ffffffff1660e01b815260040161387c9190615964565b600060405180830381600087803b15801561389657600080fd5b505af11580156138aa573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff167fae50d9bddbe6ac4bc3773182fa294bce3492ee93a9d32ae21ad4f6ebb618c7f982336040516138f6929190615977565b60405180910390a2505b50811561391257613912308684611ec1565b87816000015182602001517f2be10f2a0203c77d0fcaa9fd6484a8a1d6904de31cd820587f60c1c8c338c8148c898c888b8b336040516139589796959493929190615739565b60405180910390a450979650505050505050565b804710156139d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610e18565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114613a30576040519150601f19603f3d011682016040523d82523d6000602084013e613a35565b606091505b5050905080611ecb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610e18565b600082815260026020908152604080832080548251818502810185019093528083528493849084015b82821015613b6e57600084815260209081902060408051608081018252600286029092018054835260019081015463ffffffff80821685870152640100000000820416928401929092526801000000000000000090910473ffffffffffffffffffffffffffffffffffffffff1660608301529083529092019101613aef565b5050506000868152600260205260408120929350613b8d929150614ce3565b8260005b8251811015613f035781613c8c5760008681526002602052604090208351849083908110613bc157613bc1615eb5565b602090810291909101810151825460018181018555600094855293839020825160029092020190815591810151919092018054604084015160609094015173ffffffffffffffffffffffffffffffffffffffff1668010000000000000000027fffffffff0000000000000000000000000000000000000000ffffffffffffffff63ffffffff958616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090931695909416949094171791909116919091179055613ef1565b828181518110613c9e57613c9e615eb5565b6020026020010151600001518210613d4357828181518110613cc257613cc2615eb5565b60200260200101516000015182613cd99190615ddb565b9150613d32838281518110613cf057613cf0615eb5565b602002602001015160000151848381518110613d0e57613d0e615eb5565b60200260200101516020015163ffffffff1685848151811061176a5761176a615eb5565b613d3c9085615c24565b9350613ef1565b60026000878152602001908152602001600020604051806080016040528084868581518110613d7457613d74615eb5565b602002602001015160000151613d8a9190615ddb565b8152602001858481518110613da157613da1615eb5565b60200260200101516020015163ffffffff168152602001858481518110613dca57613dca615eb5565b60200260200101516040015163ffffffff168152602001858481518110613df357613df3615eb5565b60209081029190910181015160609081015173ffffffffffffffffffffffffffffffffffffffff9081169093528454600181810187556000968752958390208551600290920201908155918401519190940180546040850151949095015190921668010000000000000000027fffffffff0000000000000000000000000000000000000000ffffffffffffffff63ffffffff948516640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909616949092169390931793909317929092161790558251613ee0908390859084908110613d0e57613d0e615eb5565b613eea9085615c24565b9350600091505b80613efb81615e1e565b915050613b91565b50604080518281523360208201528491869188917f59860d79d97c1fce2be7f987915c631471f4b08f671200463cc40a3380194ffb910160405180910390a4505092915050565b6040517f862026500000000000000000000000000000000000000000000000000000000081526001600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015260009182917f0000000000000000000000000000000000000000000000000000000000000000169063862026509060440160206040518083038186803b158015613ffd57600080fd5b505afa158015614011573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906140359190614ece565b73ffffffffffffffffffffffffffffffffffffffff16141561405c5750633b9aca00919050565b60045473ffffffffffffffffffffffffffffffffffffffff1661408157506000614146565b600480546040517f7769589600000000000000000000000000000000000000000000000000000000815291820184905273ffffffffffffffffffffffffffffffffffffffff169063776958969060240160206040518083038186803b1580156140e957600080fd5b505afa925050508015614137575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526141349181019061521a565b60015b61414357506000614146565b90505b633b9aca00811115614156575060005b919050565b6040517f69e11cc5000000000000000000000000000000000000000000000000000000008152600481018690526024810185905260448101849052829060009081907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906369e11cc59060640160006040518083038186803b1580156141f657600080fd5b505afa15801561420a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526142509190810190614fa4565b905060005b8151811015614b0e57600082828151811061427257614272615eb5565b602002602001015190506000614291888360400151633b9aca00613040565b905060008115614aba5760c083015173ffffffffffffffffffffffffffffffffffffffff16156144d557633b9aca0088146142e2576142d3826003548a612d2f565b6142dd9083615ddb565b6142e4565b815b90506142f08287615c24565b955060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee1461433a57600061433c565b815b905060006040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018481526020017f000000000000000000000000000000000000000000000000000000000000000081526020018f81526020018d81526020018681525090508460c0015173ffffffffffffffffffffffffffffffffffffffff16639d740bfa83836040518363ffffffff1660e01b815260040161449c9190815173ffffffffffffffffffffffffffffffffffffffff90811682526020808401518184015260408085015181850152606080860151818601526080808701518187015260a096870151805115158888015293840151151560c0808801919091529284015160e08701529083015161010086015282015183166101208501529381015161014084015292909201519091166101608201526101800190565b6000604051808303818588803b1580156144b557600080fd5b505af11580156144c9573d6000803e3d6000fd5b50505050505050614aad565b606083015115614a275760608301516040517f8620265000000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691638620265091614598917f00000000000000000000000000000000000000000000000000000000000000009060040191825273ffffffffffffffffffffffffffffffffffffffff16602082015260400190565b60206040518083038186803b1580156145b057600080fd5b505afa1580156145c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906145e89190614ece565b905073ffffffffffffffffffffffffffffffffffffffff8116614637576040517f6921234300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811630141561473f576040805160208082528183019092528493506000916020820181803683370190505090508d60405160200161468c91815260200190565b60405160208183030381529060405290508460200151156146cb576146c68560600151846040518060200160405280600081525084611ed0565b614739565b61473783308760600151600073ffffffffffffffffffffffffffffffffffffffff16896080015173ffffffffffffffffffffffffffffffffffffffff161415614714573361471a565b88608001515b60008a600001516040518060200160405280600081525088611fda565b505b50614a21565b73ffffffffffffffffffffffffffffffffffffffff811660009081526005602052604090205460ff1615614775578291506147ad565b633b9aca00891461479c5761478d836003548b612d2f565b6147979084615ddb565b61479e565b825b91506147aa8388615c24565b96505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee146147f55760006147f7565b825b604080516020808252818301909252919250600091906020820181803683370190505090508e60405160200161482f91815260200190565b60405160208183030381529060405290508560200151156148fe5760608601516040517f0cf8e85800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851691630cf8e8589185916148c79189907f0000000000000000000000000000000000000000000000000000000000000000908890600401615a95565b6000604051808303818588803b1580156148e057600080fd5b505af11580156148f4573d6000803e3d6000fd5b5050505050614a1e565b8273ffffffffffffffffffffffffffffffffffffffff16631ebc263f838860600151877f0000000000000000000000000000000000000000000000000000000000000000600073ffffffffffffffffffffffffffffffffffffffff168c6080015173ffffffffffffffffffffffffffffffffffffffff1614156149815733614987565b8b608001515b8c516040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b1681526149ca95949392916000918b90600401615a23565b6020604051808303818588803b1580156149e357600080fd5b505af11580156149f7573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190614a1c919061521a565b505b50505b50614aad565b633b9aca008814614a4e57614a3f826003548a612d2f565b614a499083615ddb565b614a50565b815b9050614a5c8287615c24565b9550614aad30600073ffffffffffffffffffffffffffffffffffffffff16856080015173ffffffffffffffffffffffffffffffffffffffff161415614aa15733614aa7565b84608001515b83611ec1565b614ab78288615ddb565b96505b898b8d7f2a1f2df21da49f011c6165709ae4b279f8d6d7cffe9043c582352882d8c9698b868533604051614af09392919061598a565b60405180910390a45050508080614b0690615e1e565b915050614255565b50509550959350505050565b6000614b298460035484612d2f565b61010086015190915060421c60019081161415614c7a57600086815260026020818152604080842081516080810183528981526003805463ffffffff9081168387019081528a821684870190815273ffffffffffffffffffffffffffffffffffffffff8d81166060808801828152895460018082018c559a8f529d8c902098519d909c029097019b8c5592519a90960180549151995190961668010000000000000000027fffffffff0000000000000000000000000000000000000000ffffffffffffffff998416640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009092169a9093169990991798909817969096169590951790915592548151878152928301949094523390820152869189917f77813be0661650ddc1a5193ff2837df4162b251cb432651e2c060c3fc39756be910160405180910390a4614cda565b614c848184612d75565b6040805173ffffffffffffffffffffffffffffffffffffffff85168152336020820152600091839189917fcf0c92a2c6d7c42f488326b0cb900104b99984b6b218db81cd29371364a35251910160405180910390a45b95945050505050565b5080546000825560020290600052602060002090810190611dbb91905b80821115614d3e57600081556001810180547fffffffff00000000000000000000000000000000000000000000000000000000169055600201614d00565b5090565b60008083601f840112614d5457600080fd5b50813567ffffffffffffffff811115614d6c57600080fd5b602083019150836020828501011115614d8457600080fd5b9250929050565b600082601f830112614d9c57600080fd5b8135614daf614daa82615bde565b615b8f565b818152846020838601011115614dc457600080fd5b816020850160208301376000918101602001919091529392505050565b805161415681615f13565b600082601f830112614dfd57600080fd5b8151614e0b614daa82615bde565b818152846020838601011115614e2057600080fd5b611b9a826020830160208701615df2565b60006101208284031215614e4457600080fd5b614e4c615b42565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c0820152614e9a60e08301614de1565b60e082015261010080830151818301525092915050565b600060208284031215614ec357600080fd5b8135612d6e81615f13565b600060208284031215614ee057600080fd5b8151612d6e81615f13565b600080600080600080600080610100898b031215614f0857600080fd5b8835614f1381615f13565b975060208901359650604089013595506060890135614f3181615f13565b94506080890135935060a0890135614f4881615f13565b925060c089013567ffffffffffffffff80821115614f6557600080fd5b614f718c838d01614d8b565b935060e08b0135915080821115614f8757600080fd5b50614f948b828c01614d8b565b9150509295985092959890939650565b60006020808385031215614fb757600080fd5b825167ffffffffffffffff80821115614fcf57600080fd5b818501915085601f830112614fe357600080fd5b815181811115614ff557614ff5615ee4565b615003848260051b01615b8f565b818152848101925083850160e0808402860187018a101561502357600080fd5b60009550855b848110156150bb5781838c03121561503f578687fd5b615047615b6c565b835161505281615f35565b81528389015161506181615f35565b818a0152604084810151908201526060808501519082015260808085015161508881615f13565b9082015260a0848101519082015260c0808501516150a581615f13565b9082015286529487019491810191600101615029565b50919998505050505050505050565b6000602082840312156150dc57600080fd5b8151612d6e81615f35565b6000602082840312156150f957600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114612d6e57600080fd5b6000806040838503121561513c57600080fd5b823561514781615f13565b9150602083013561515781615f35565b809150509250929050565b600080610140838503121561517657600080fd5b6151808484614e31565b915061012083015190509250929050565b60008060008061018085870312156151a857600080fd5b6151b28686614e31565b935061012085015192506101408501516151cb81615f13565b61016086015190925067ffffffffffffffff8111156151e957600080fd5b6151f587828801614dec565b91505092959194509250565b60006020828403121561521357600080fd5b5035919050565b60006020828403121561522c57600080fd5b5051919050565b6000806040838503121561524657600080fd5b82359150602083013561515781615f13565b6000806000806000806000806000806101008b8d03121561527857600080fd5b8a35995060208b0135985060408b013561529181615f13565b975060608b01356152a181615f13565b965060808b0135955060a08b01356152b881615f35565b945060c08b013567ffffffffffffffff808211156152d557600080fd5b6152e18e838f01614d42565b909650945060e08d01359150808211156152fa57600080fd5b506153078d828e01614d42565b915080935050809150509295989b9194979a5092959850565b600080600080600080600060a0888a03121561533b57600080fd5b8735965060208801359550604088013561535481615f13565b9450606088013567ffffffffffffffff8082111561537157600080fd5b61537d8b838c01614d42565b909650945060808a013591508082111561539657600080fd5b506153a38a828b01614d42565b989b979a50959850939692959293505050565b600080600080600080600060e0888a0312156153d157600080fd5b87359650602088013595506040880135945060608801356153f181615f13565b93506080880135925060a088013561540881615f13565b915060c088013567ffffffffffffffff81111561542457600080fd5b6154308a828b01614d8b565b91505092959891949750929550565b600080600080600080600060c0888a03121561545a57600080fd5b873596506020880135955060408801359450606088013561547a81615f13565b93506080880135925060a088013567ffffffffffffffff81111561549d57600080fd5b6153a38a828b01614d42565b600081518084526154c1816020860160208601615df2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600061014073ffffffffffffffffffffffffffffffffffffffff808451168552602084015160208601526040840151615566604087018273ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015160608301525050565b50606084015160c086015260808401511660e085015260a08301516101008501829052615595828601826154a9565b91505060c0830151848203610120860152614cda82826154a9565b600061014073ffffffffffffffffffffffffffffffffffffffff8084511685526020840151602086015260408401516040860152606084015161562d606087018273ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015160608301525050565b5060808401511660e085015260a08301516101008501829052615595828601826154a9565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015286604084015285606084015260c0608084015261569460c08401866154a9565b915080841660a084015250979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808b16835289602084015288604084015287606084015286608084015260e060a08401528460e08401526101008587828601376000848701820152931660c083015250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909101019695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808a168352808916602084015287604084015286606084015260e0608084015261577d60e08401876154a9565b83810360a085015261578f81876154a9565b92505080841660c08401525098975050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff89168352615809602084018973ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015160608301525050565b8660a08401528560c08401528060e0840152615827818401866154a9565b905082810361010084015261583c81856154a9565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015283604082015260a06060820152600061588460a08301856154a9565b8281036080840152610d8f81856154a9565b602080825282518282018190526000919060409081850190868401855b8281101561590c578151805185528681015163ffffffff9081168887015286820151168686015260609081015173ffffffffffffffffffffffffffffffffffffffff1690850152608090930192908501906001016158b3565b5091979650505050505050565b602081526000612d6e60208301846154f3565b60408152600061593f60408301856154f3565b905073ffffffffffffffffffffffffffffffffffffffff831660208301529392505050565b602081526000612d6e60208301846155b0565b60408152600061593f60408301856155b0565b61012081016159f882868051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b8360e083015273ffffffffffffffffffffffffffffffffffffffff8316610100830152949350505050565b600061010089835288602084015273ffffffffffffffffffffffffffffffffffffffff808916604085015280881660608501525085608084015284151560a08401528060c0840152600081840152506101208060e0840152615a87818401856154a9565b9a9950505050505050505050565b84815283602082015273ffffffffffffffffffffffffffffffffffffffff8316604082015260a06060820152600060a082015260c060808201526000615ade60c08301846154a9565b9695505050505050565b85815284602082015260a060408201526000615b0760a08301866154a9565b8281036060840152615b1981866154a9565b91505073ffffffffffffffffffffffffffffffffffffffff831660808301529695505050505050565b604051610120810167ffffffffffffffff81118282101715615b6657615b66615ee4565b60405290565b60405160e0810167ffffffffffffffff81118282101715615b6657615b66615ee4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715615bd657615bd6615ee4565b604052919050565b600067ffffffffffffffff821115615bf857615bf8615ee4565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60008219821115615c3757615c37615e57565b500190565b600082615c72577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600181815b80851115615cd057817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115615cb657615cb6615e57565b80851615615cc357918102915b93841c9390800290615c7c565b509250929050565b6000612d6e8383600082615cee5750600161094f565b81615cfb5750600061094f565b8160018114615d115760028114615d1b57615d37565b600191505061094f565b60ff841115615d2c57615d2c615e57565b50506001821b61094f565b5060208310610133831016604e8410600b8410161715615d5a575081810a61094f565b615d648383615c77565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115615d9657615d96615e57565b029392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615615dd657615dd6615e57565b500290565b600082821015615ded57615ded615e57565b500390565b60005b83811015615e0d578181015183820152602001615df5565b83811115612d295750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415615e5057615e50615e57565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611dbb57600080fd5b8015158114611dbb57600080fdfea2646970667358221220c50cef22dac128caae53830cb1aa832ee96bda290594f6920ca533ff493e454064736f6c63430008060033',
	deployedBytecode:
		'0x6080604052600436106101fe5760003560e01c80638af560941161011d578063c41c2f24116100b0578063e5a6b10f1161007f578063f2fde38b11610064578063f2fde38b14610755578063fc0c546a14610775578063fe663f0f146107a957600080fd5b8063e5a6b10f146106f1578063e730b26e1461072557600080fd5b8063c41c2f2414610646578063d3419bf31461067a578063d6dacc53146106ae578063ddca3f43146106db57600080fd5b8063a32e1e96116100ec578063a32e1e9614610592578063ad007d63146105b2578063b7bad1b1146105e6578063bc8926e91461062657600080fd5b80638af56094146104d25780638b79543c146104ff5780638da5cb5b14610533578063975057e71461055e57600080fd5b80633b7be7ea1161019557806369fe0e2d1161016457806369fe0e2d14610423578063715018a614610443578063868399a51461045857806389701db5146104b257600080fd5b80633b7be7ea1461038f578063405b84fa146103af578063637913ac146103cf57806366248b86146103ef57600080fd5b80632b267b4e116101d15780632b267b4e146102ae5780632bdfe004146102ce5780632d1a590314610327578063313ce5671461035b57600080fd5b806301ffc9a7146102035780630cf8e858146102385780631982d6791461024d5780631ebc263f1461029b575b600080fd5b34801561020f57600080fd5b5061022361021e3660046150e7565b6107c9565b60405190151581526020015b60405180910390f35b61024b610246366004615320565b610955565b005b34801561025957600080fd5b5061028d610268366004614eb1565b507f000000000000000000000000000000000000000000000000000000000000000090565b60405190815260200161022f565b61028d6102a9366004615258565b610b5b565b3480156102ba57600080fd5b5061028d6102c936600461543f565b610d7f565b3480156102da57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161022f565b34801561033357600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036757600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561039b57600080fd5b5061024b6103aa366004615129565b610d9b565b3480156103bb57600080fd5b5061028d6103ca366004615233565b610eae565b3480156103db57600080fd5b5061024b6103ea366004614eb1565b61129b565b3480156103fb57600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561042f57600080fd5b5061024b61043e366004615201565b611395565b34801561044f57600080fd5b5061024b611494565b34801561046457600080fd5b50610223610473366004614eb1565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161490565b3480156104be57600080fd5b5061024b6104cd366004615201565b611521565b3480156104de57600080fd5b506104f26104ed366004615201565b611844565b60405161022f9190615896565b34801561050b57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b34801561053f57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610302565b34801561056a57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b34801561059e57600080fd5b5061028d6105ad366004615201565b611903565b3480156105be57600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b3480156105f257600080fd5b5061028d610601366004614eb1565b507f000000000000000000000000000000000000000000000000000000000000000090565b34801561063257600080fd5b5061028d6106413660046153b6565b611ba2565b34801561065257600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b34801561068657600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b3480156106ba57600080fd5b506004546103029073ffffffffffffffffffffffffffffffffffffffff1681565b3480156106e757600080fd5b5061028d60035481565b3480156106fd57600080fd5b5061028d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561073157600080fd5b50610223610740366004614eb1565b60056020526000908152604090205460ff1681565b34801561076157600080fd5b5061024b610770366004614eb1565b611c8e565b34801561078157600080fd5b506103027f000000000000000000000000000000000000000000000000000000000000000081565b3480156107b557600080fd5b5061028d6107c4366004614eeb565b611dbe565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167ff597c74300000000000000000000000000000000000000000000000000000000148061085c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f2b267b4e00000000000000000000000000000000000000000000000000000000145b806108a857507fffffffff0000000000000000000000000000000000000000000000000000000082167fbc8926e900000000000000000000000000000000000000000000000000000000145b806108f457507fffffffff0000000000000000000000000000000000000000000000000000000082167ffe663f0f00000000000000000000000000000000000000000000000000000000145b8061094057507fffffffff0000000000000000000000000000000000000000000000000000000082167fad007d6300000000000000000000000000000000000000000000000000000000145b8061094f575061094f82611dde565b92915050565b6040517f6e49181f0000000000000000000000000000000000000000000000000000000081526004810188905230602482015287907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636e49181f9060440160206040518083038186803b1580156109e357600080fd5b505afa1580156109f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1b91906150ca565b610a51576040517fd8ead2c800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14610ad8573415610ac8576040517fbcfd35be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ad3333089611ec1565b610adc565b3496505b610b51888887878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250611ed092505050565b5050505050505050565b6040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523060248201526000908b9073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b158015610bec57600080fd5b505afa158015610c00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2491906150ca565b610c5a576040517fd8ead2c800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14610ce1573415610cd1576040517fbcfd35be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cdc33308d611ec1565b610ce5565b349a505b610d6f8b338e8c8c8c8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611fda92505050565b9c9b505050505050505050505050565b6000610d8f888888878787612596565b98975050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591513381529192917ff870dc5d3fb30dcc6e5588de75dfd6a15c777db0fb8266158702569c081eef35910160405180910390a35050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015610f3757600080fd5b505afa158015610f4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6f9190614ece565b836004610f7d838383612898565b6040517f868399a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116600483015286169063868399a59060240160206040518083038186803b15801561100457600080fd5b505afa158015611018573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103c91906150ca565b611072576040517f581010ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f6bb6a5ad000000000000000000000000000000000000000000000000000000008152600481018790527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636bb6a5ad90602401602060405180830381600087803b1580156110fa57600080fd5b505af115801561110e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611132919061521a565b935083156112405760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14611182576000611184565b845b604080516020810182526000815290517f0cf8e85800000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691630cf8e85891849161120c918c918b917f000000000000000000000000000000000000000000000000000000000000000091600401615a95565b6000604051808303818588803b15801561122557600080fd5b505af1158015611239573d6000803e3d6000fd5b5050505050505b6040805185815233602082015273ffffffffffffffffffffffffffffffffffffffff87169188917fa7519e5f94697b7f53e97c5eb46a0c730a296ab686ab8fd333835c5f735784eb910160405180910390a350505092915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461131c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040513381527f0a9a80fe9716605b3e52abb3d792d6a4e7816d6afc02a5a4ef023081feaf9f609060200160405180910390a250565b60005473ffffffffffffffffffffffffffffffffffffffff163314611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b6302faf080811115611454576040517f45fbd9c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003819055604080518281523360208201527fd7414e590e1cb532989ab2a34c8f4c2c17f7ab6f006efeeaef2e87cd5008c202910160405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314611515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b61151f6000612aa1565b565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b1580156115a757600080fd5b505afa1580156115bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115df9190614ece565b81600561160160005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461163b84848484612b16565b600085815260026020908152604080832080548251818502810185019093528083529192909190849084015b828210156116e657600084815260209081902060408051608081018252600286029092018054835260019081015463ffffffff80821685870152640100000000820416928401929092526801000000000000000090910473ffffffffffffffffffffffffffffffffffffffff1660608301529083529092019101611667565b5050506000888152600260205260408120929350611705929150614ce3565b60005b815181101561183b57600061178183838151811061172857611728615eb5565b60200260200101516000015184848151811061174657611746615eb5565b60200260200101516020015163ffffffff1685858151811061176a5761176a615eb5565b60200260200101516040015163ffffffff16612d2f565b90506117aa8184848151811061179957611799615eb5565b602002602001015160600151612d75565b6001151581897fcf0c92a2c6d7c42f488326b0cb900104b99984b6b218db81cd29371364a352518686815181106117e3576117e3615eb5565b6020026020010151606001513360405161182092919073ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b60405180910390a4508061183381615e1e565b915050611708565b50505050505050565b606060026000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156118f857600084815260209081902060408051608081018252600286029092018054835260019081015463ffffffff80821685870152640100000000820416928401929092526801000000000000000090910473ffffffffffffffffffffffffffffffffffffffff1660608301529083529092019101611879565b505050509050919050565b6040517fd49031c000000000000000000000000000000000000000000000000000000000815230600482015260248101829052600090819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063d49031c09060440160206040518083038186803b15801561199457600080fd5b505afa1580156119a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cc919061521a565b905060007f0000000000000000000000000000000000000000000000000000000000000000601214611a2957611a24827f00000000000000000000000000000000000000000000000000000000000000006012612fe2565b611a2b565b815b905060017f000000000000000000000000000000000000000000000000000000000000000014611b9857611b9381611a847f0000000000000000000000000000000000000000000000000000000000000000600a615cd8565b6040517fa4d0caf20000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000006004820152600160248201527f000000000000000000000000000000000000000000000000000000000000000060448201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a4d0caf29060640160206040518083038186803b158015611b5657600080fd5b505afa158015611b6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8e919061521a565b613040565b611b9a565b805b949350505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018890526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015611c2b57600080fd5b505afa158015611c3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c639190614ece565b886011611c71838383612898565b611c7f8b8b8b8a8a8a613145565b9b9a5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e18565b73ffffffffffffffffffffffffffffffffffffffff8116611db2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610e18565b611dbb81612aa1565b50565b600088886002611dcf838383612898565b610d6f8c8c8c8b8b8b8b6133da565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f99d14e9c000000000000000000000000000000000000000000000000000000001480611e7157507fffffffff0000000000000000000000000000000000000000000000000000000082167f2896000200000000000000000000000000000000000000000000000000000000145b8061094f57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461094f565b611ecb828261396c565b505050565b6000611edc8585613ac6565b905073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663e7c8e3e386611f258488615c24565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015611f7b57600080fd5b505af1158015611f8f573d6000803e3d6000fd5b50505050847f9ecaf7fc3dfffd6867c175d6e684b1f1e3aef019398ba8db2c1ffab4a09db2538583868633604051611fcb959493929190615ae8565b60405180910390a25050505050565b600073ffffffffffffffffffffffffffffffffffffffff8616612029576040517fa762251300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61208e60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600080600060405180608001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018e81526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a977aefc8d838e7f00000000000000000000000000000000000000000000000000000000000000008c8c6040518763ffffffff1660e01b81526004016121af969594939291906157a7565b600060405180830381600087803b1580156121c957600080fd5b505af11580156121dd573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526122239190810190615191565b9950919550909350915081156123c2576040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018c90527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635dd8f6aa9060240160206040518083038186803b1580156122b957600080fd5b505afa1580156122cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f19190614ece565b6040517f8ae9c07b000000000000000000000000000000000000000000000000000000008152600481018d90526024810184905273ffffffffffffffffffffffffffffffffffffffff8c8116604483015260c06064830152600060c48301528a15156084830152600160a48301529190911690638ae9c07b9060e401602060405180830381600087803b15801561238757600080fd5b505af115801561239b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123bf919061521a565b94505b888510156123fc576040517f7b94612600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316156125385760006040518060e001604052808e73ffffffffffffffffffffffffffffffffffffffff1681526020018d81526020018381526020018781526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018881525090508373ffffffffffffffffffffffffffffffffffffffff1663185856a1826040518263ffffffff1660e01b81526004016124b49190615919565b600060405180830381600087803b1580156124ce57600080fd5b505af11580156124e2573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff167f7c66059d4a9f68466678168c1c369a1532ce0c8cec8da9b0a40703d29ff1c7b3823360405161252e92919061592c565b60405180910390a2505b50505087816000015182602001517f133161f1c9161488f777ab9a26aae91d47c0d9a3fafb398960f138db02c737978c8b8f888b8b336040516125819796959493929190615739565b60405180910390a45098975050505050505050565b6040517fc66445970000000000000000000000000000000000000000000000000000000081526004810187905260248101869052604481018590526000908190819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c66445979060640161014060405180830381600087803b15801561263457600080fd5b505af1158015612648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061266c9190615162565b91509150858110156126aa576040517fb01493c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a90526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561273357600080fd5b505afa158015612747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276b9190614ece565b9050600080600354600014612788576127838c613f4a565b61278e565b633b9aca005b90506000806127c48e88602001517f0000000000000000000000000000000000000000000000000000000000000000898761415b565b925090506127d28183615c24565b9150633b9aca008314806127e4575081155b6127fa576127f58e88848887614b1a565b6127fd565b60005b93508015612821576128128160035485612d2f565b61281c9082615ddb565b612824565b60005b975087156128375761283730868a611ec1565b5050508a846000015185602001517f24352f49df447b14e0e08a323625c663d865ce20c343c4638af12e1dc48aa760858e88878c8f8f336040516128829897969594939291906156aa565b60405180910390a4505050509695505050505050565b3373ffffffffffffffffffffffffffffffffffffffff84161480159061298e57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561295457600080fd5b505afa158015612968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298c91906150ca565b155b8015612a6a57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612a3057600080fd5b505afa158015612a44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6891906150ca565b155b15611ecb576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80158015612b3a57503373ffffffffffffffffffffffffffffffffffffffff851614155b8015612c1657506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612bdc57600080fd5b505afa158015612bf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c1491906150ca565b155b8015612cf257506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612cb857600080fd5b505afa158015612ccc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cf091906150ca565b155b15612d29576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b600080612d418484633b9aca00613040565b612d4b9085615ddb565b9050612d6085633b9aca00611b8e8185615c24565b612d6a9086615ddb565b9150505b9392505050565b6040517f862026500000000000000000000000000000000000000000000000000000000081526001600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063862026509060440160206040518083038186803b158015612e2857600080fd5b505afa158015612e3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e609190614ece565b905073ffffffffffffffffffffffffffffffffffffffff8116301415612eb057612d2983306001856000806040518060200160405280600081525060405180602001604052806000815250611fda565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee14612ef8576000612efa565b835b60408051602081018252600080825291517f1ebc263f00000000000000000000000000000000000000000000000000000000815292935073ffffffffffffffffffffffffffffffffffffffff851692631ebc263f928592612f89926001928b927f0000000000000000000000000000000000000000000000000000000000000000928c92918291600401615a23565b6020604051808303818588803b158015612fa257600080fd5b505af1158015612fb6573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612fdb919061521a565b5050505050565b600082821415612ff3575082612d6e565b82821115613021576130058383615ddb565b61301090600a615cd8565b61301a9085615d9e565b9050612d6e565b61302b8284615ddb565b61303690600a615cd8565b61301a9085615c3c565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600014156130995783828161308f5761308f615e86565b0492505050612d6e565b8381106130dc576040517f773cc18c0000000000000000000000000000000000000000000000000000000081526004810182905260248101859052604401610e18565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6040517f253867150000000000000000000000000000000000000000000000000000000081526004810187905260248101869052604481018590526000908190819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063253867159060640161014060405180830381600087803b1580156131e357600080fd5b505af11580156131f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061321b9190615162565b9150915085811015613259576040517fb01493c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a9052600090819073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b1580156132e457600080fd5b505afa1580156132f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061331c9190614ece565b90506000600354600014613338576133338c613f4a565b61333e565b633b9aca005b9050633b9aca00811461335d576133588c86868585614b1a565b613360565b60005b925061336c8385615ddb565b9550851561337f5761337f308988611ec1565b50505088826000015183602001517f8657a0c05a68a912c23c1bd00124afaa8c669063b046bd9bfd22b21d573c5e6d888c86898b336040516133c696959493929190615652565b60405180910390a450509695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8416613429576040517ff74a1b6600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61348e60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040517fa2df1f9500000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063a2df1f959061350b908d908d908d908b908b90600401615849565b600060405180830381600087803b15801561352557600080fd5b505af1158015613539573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261357f9190810190615191565b97509094509092509050868310156135c3576040517ff896960b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b871561372e576040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018a90527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635dd8f6aa9060240160206040518083038186803b15801561364f57600080fd5b505afa158015613663573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136879190614ece565b6040517f1665bc0f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c81166004830152602482018c9052604482018b905260a06064830152600060a4830181905260848301529190911690631665bc0f9060c401600060405180830381600087803b15801561371557600080fd5b505af1158015613729573d6000803e3d6000fd5b505050505b73ffffffffffffffffffffffffffffffffffffffff8116156139005760006040518060e001604052808c73ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018781526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681525090508173ffffffffffffffffffffffffffffffffffffffff166343e1db27826040518263ffffffff1660e01b815260040161387c9190615964565b600060405180830381600087803b15801561389657600080fd5b505af11580156138aa573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff167fae50d9bddbe6ac4bc3773182fa294bce3492ee93a9d32ae21ad4f6ebb618c7f982336040516138f6929190615977565b60405180910390a2505b50811561391257613912308684611ec1565b87816000015182602001517f2be10f2a0203c77d0fcaa9fd6484a8a1d6904de31cd820587f60c1c8c338c8148c898c888b8b336040516139589796959493929190615739565b60405180910390a450979650505050505050565b804710156139d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610e18565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114613a30576040519150601f19603f3d011682016040523d82523d6000602084013e613a35565b606091505b5050905080611ecb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610e18565b600082815260026020908152604080832080548251818502810185019093528083528493849084015b82821015613b6e57600084815260209081902060408051608081018252600286029092018054835260019081015463ffffffff80821685870152640100000000820416928401929092526801000000000000000090910473ffffffffffffffffffffffffffffffffffffffff1660608301529083529092019101613aef565b5050506000868152600260205260408120929350613b8d929150614ce3565b8260005b8251811015613f035781613c8c5760008681526002602052604090208351849083908110613bc157613bc1615eb5565b602090810291909101810151825460018181018555600094855293839020825160029092020190815591810151919092018054604084015160609094015173ffffffffffffffffffffffffffffffffffffffff1668010000000000000000027fffffffff0000000000000000000000000000000000000000ffffffffffffffff63ffffffff958616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090931695909416949094171791909116919091179055613ef1565b828181518110613c9e57613c9e615eb5565b6020026020010151600001518210613d4357828181518110613cc257613cc2615eb5565b60200260200101516000015182613cd99190615ddb565b9150613d32838281518110613cf057613cf0615eb5565b602002602001015160000151848381518110613d0e57613d0e615eb5565b60200260200101516020015163ffffffff1685848151811061176a5761176a615eb5565b613d3c9085615c24565b9350613ef1565b60026000878152602001908152602001600020604051806080016040528084868581518110613d7457613d74615eb5565b602002602001015160000151613d8a9190615ddb565b8152602001858481518110613da157613da1615eb5565b60200260200101516020015163ffffffff168152602001858481518110613dca57613dca615eb5565b60200260200101516040015163ffffffff168152602001858481518110613df357613df3615eb5565b60209081029190910181015160609081015173ffffffffffffffffffffffffffffffffffffffff9081169093528454600181810187556000968752958390208551600290920201908155918401519190940180546040850151949095015190921668010000000000000000027fffffffff0000000000000000000000000000000000000000ffffffffffffffff63ffffffff948516640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909616949092169390931793909317929092161790558251613ee0908390859084908110613d0e57613d0e615eb5565b613eea9085615c24565b9350600091505b80613efb81615e1e565b915050613b91565b50604080518281523360208201528491869188917f59860d79d97c1fce2be7f987915c631471f4b08f671200463cc40a3380194ffb910160405180910390a4505092915050565b6040517f862026500000000000000000000000000000000000000000000000000000000081526001600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015260009182917f0000000000000000000000000000000000000000000000000000000000000000169063862026509060440160206040518083038186803b158015613ffd57600080fd5b505afa158015614011573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906140359190614ece565b73ffffffffffffffffffffffffffffffffffffffff16141561405c5750633b9aca00919050565b60045473ffffffffffffffffffffffffffffffffffffffff1661408157506000614146565b600480546040517f7769589600000000000000000000000000000000000000000000000000000000815291820184905273ffffffffffffffffffffffffffffffffffffffff169063776958969060240160206040518083038186803b1580156140e957600080fd5b505afa925050508015614137575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526141349181019061521a565b60015b61414357506000614146565b90505b633b9aca00811115614156575060005b919050565b6040517f69e11cc5000000000000000000000000000000000000000000000000000000008152600481018690526024810185905260448101849052829060009081907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906369e11cc59060640160006040518083038186803b1580156141f657600080fd5b505afa15801561420a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526142509190810190614fa4565b905060005b8151811015614b0e57600082828151811061427257614272615eb5565b602002602001015190506000614291888360400151633b9aca00613040565b905060008115614aba5760c083015173ffffffffffffffffffffffffffffffffffffffff16156144d557633b9aca0088146142e2576142d3826003548a612d2f565b6142dd9083615ddb565b6142e4565b815b90506142f08287615c24565b955060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee1461433a57600061433c565b815b905060006040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018481526020017f000000000000000000000000000000000000000000000000000000000000000081526020018f81526020018d81526020018681525090508460c0015173ffffffffffffffffffffffffffffffffffffffff16639d740bfa83836040518363ffffffff1660e01b815260040161449c9190815173ffffffffffffffffffffffffffffffffffffffff90811682526020808401518184015260408085015181850152606080860151818601526080808701518187015260a096870151805115158888015293840151151560c0808801919091529284015160e08701529083015161010086015282015183166101208501529381015161014084015292909201519091166101608201526101800190565b6000604051808303818588803b1580156144b557600080fd5b505af11580156144c9573d6000803e3d6000fd5b50505050505050614aad565b606083015115614a275760608301516040517f8620265000000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691638620265091614598917f00000000000000000000000000000000000000000000000000000000000000009060040191825273ffffffffffffffffffffffffffffffffffffffff16602082015260400190565b60206040518083038186803b1580156145b057600080fd5b505afa1580156145c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906145e89190614ece565b905073ffffffffffffffffffffffffffffffffffffffff8116614637576040517f6921234300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811630141561473f576040805160208082528183019092528493506000916020820181803683370190505090508d60405160200161468c91815260200190565b60405160208183030381529060405290508460200151156146cb576146c68560600151846040518060200160405280600081525084611ed0565b614739565b61473783308760600151600073ffffffffffffffffffffffffffffffffffffffff16896080015173ffffffffffffffffffffffffffffffffffffffff161415614714573361471a565b88608001515b60008a600001516040518060200160405280600081525088611fda565b505b50614a21565b73ffffffffffffffffffffffffffffffffffffffff811660009081526005602052604090205460ff1615614775578291506147ad565b633b9aca00891461479c5761478d836003548b612d2f565b6147979084615ddb565b61479e565b825b91506147aa8388615c24565b96505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661eeee146147f55760006147f7565b825b604080516020808252818301909252919250600091906020820181803683370190505090508e60405160200161482f91815260200190565b60405160208183030381529060405290508560200151156148fe5760608601516040517f0cf8e85800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851691630cf8e8589185916148c79189907f0000000000000000000000000000000000000000000000000000000000000000908890600401615a95565b6000604051808303818588803b1580156148e057600080fd5b505af11580156148f4573d6000803e3d6000fd5b5050505050614a1e565b8273ffffffffffffffffffffffffffffffffffffffff16631ebc263f838860600151877f0000000000000000000000000000000000000000000000000000000000000000600073ffffffffffffffffffffffffffffffffffffffff168c6080015173ffffffffffffffffffffffffffffffffffffffff1614156149815733614987565b8b608001515b8c516040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b1681526149ca95949392916000918b90600401615a23565b6020604051808303818588803b1580156149e357600080fd5b505af11580156149f7573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190614a1c919061521a565b505b50505b50614aad565b633b9aca008814614a4e57614a3f826003548a612d2f565b614a499083615ddb565b614a50565b815b9050614a5c8287615c24565b9550614aad30600073ffffffffffffffffffffffffffffffffffffffff16856080015173ffffffffffffffffffffffffffffffffffffffff161415614aa15733614aa7565b84608001515b83611ec1565b614ab78288615ddb565b96505b898b8d7f2a1f2df21da49f011c6165709ae4b279f8d6d7cffe9043c582352882d8c9698b868533604051614af09392919061598a565b60405180910390a45050508080614b0690615e1e565b915050614255565b50509550959350505050565b6000614b298460035484612d2f565b61010086015190915060421c60019081161415614c7a57600086815260026020818152604080842081516080810183528981526003805463ffffffff9081168387019081528a821684870190815273ffffffffffffffffffffffffffffffffffffffff8d81166060808801828152895460018082018c559a8f529d8c902098519d909c029097019b8c5592519a90960180549151995190961668010000000000000000027fffffffff0000000000000000000000000000000000000000ffffffffffffffff998416640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009092169a9093169990991798909817969096169590951790915592548151878152928301949094523390820152869189917f77813be0661650ddc1a5193ff2837df4162b251cb432651e2c060c3fc39756be910160405180910390a4614cda565b614c848184612d75565b6040805173ffffffffffffffffffffffffffffffffffffffff85168152336020820152600091839189917fcf0c92a2c6d7c42f488326b0cb900104b99984b6b218db81cd29371364a35251910160405180910390a45b95945050505050565b5080546000825560020290600052602060002090810190611dbb91905b80821115614d3e57600081556001810180547fffffffff00000000000000000000000000000000000000000000000000000000169055600201614d00565b5090565b60008083601f840112614d5457600080fd5b50813567ffffffffffffffff811115614d6c57600080fd5b602083019150836020828501011115614d8457600080fd5b9250929050565b600082601f830112614d9c57600080fd5b8135614daf614daa82615bde565b615b8f565b818152846020838601011115614dc457600080fd5b816020850160208301376000918101602001919091529392505050565b805161415681615f13565b600082601f830112614dfd57600080fd5b8151614e0b614daa82615bde565b818152846020838601011115614e2057600080fd5b611b9a826020830160208701615df2565b60006101208284031215614e4457600080fd5b614e4c615b42565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c0820152614e9a60e08301614de1565b60e082015261010080830151818301525092915050565b600060208284031215614ec357600080fd5b8135612d6e81615f13565b600060208284031215614ee057600080fd5b8151612d6e81615f13565b600080600080600080600080610100898b031215614f0857600080fd5b8835614f1381615f13565b975060208901359650604089013595506060890135614f3181615f13565b94506080890135935060a0890135614f4881615f13565b925060c089013567ffffffffffffffff80821115614f6557600080fd5b614f718c838d01614d8b565b935060e08b0135915080821115614f8757600080fd5b50614f948b828c01614d8b565b9150509295985092959890939650565b60006020808385031215614fb757600080fd5b825167ffffffffffffffff80821115614fcf57600080fd5b818501915085601f830112614fe357600080fd5b815181811115614ff557614ff5615ee4565b615003848260051b01615b8f565b818152848101925083850160e0808402860187018a101561502357600080fd5b60009550855b848110156150bb5781838c03121561503f578687fd5b615047615b6c565b835161505281615f35565b81528389015161506181615f35565b818a0152604084810151908201526060808501519082015260808085015161508881615f13565b9082015260a0848101519082015260c0808501516150a581615f13565b9082015286529487019491810191600101615029565b50919998505050505050505050565b6000602082840312156150dc57600080fd5b8151612d6e81615f35565b6000602082840312156150f957600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114612d6e57600080fd5b6000806040838503121561513c57600080fd5b823561514781615f13565b9150602083013561515781615f35565b809150509250929050565b600080610140838503121561517657600080fd5b6151808484614e31565b915061012083015190509250929050565b60008060008061018085870312156151a857600080fd5b6151b28686614e31565b935061012085015192506101408501516151cb81615f13565b61016086015190925067ffffffffffffffff8111156151e957600080fd5b6151f587828801614dec565b91505092959194509250565b60006020828403121561521357600080fd5b5035919050565b60006020828403121561522c57600080fd5b5051919050565b6000806040838503121561524657600080fd5b82359150602083013561515781615f13565b6000806000806000806000806000806101008b8d03121561527857600080fd5b8a35995060208b0135985060408b013561529181615f13565b975060608b01356152a181615f13565b965060808b0135955060a08b01356152b881615f35565b945060c08b013567ffffffffffffffff808211156152d557600080fd5b6152e18e838f01614d42565b909650945060e08d01359150808211156152fa57600080fd5b506153078d828e01614d42565b915080935050809150509295989b9194979a5092959850565b600080600080600080600060a0888a03121561533b57600080fd5b8735965060208801359550604088013561535481615f13565b9450606088013567ffffffffffffffff8082111561537157600080fd5b61537d8b838c01614d42565b909650945060808a013591508082111561539657600080fd5b506153a38a828b01614d42565b989b979a50959850939692959293505050565b600080600080600080600060e0888a0312156153d157600080fd5b87359650602088013595506040880135945060608801356153f181615f13565b93506080880135925060a088013561540881615f13565b915060c088013567ffffffffffffffff81111561542457600080fd5b6154308a828b01614d8b565b91505092959891949750929550565b600080600080600080600060c0888a03121561545a57600080fd5b873596506020880135955060408801359450606088013561547a81615f13565b93506080880135925060a088013567ffffffffffffffff81111561549d57600080fd5b6153a38a828b01614d42565b600081518084526154c1816020860160208601615df2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600061014073ffffffffffffffffffffffffffffffffffffffff808451168552602084015160208601526040840151615566604087018273ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015160608301525050565b50606084015160c086015260808401511660e085015260a08301516101008501829052615595828601826154a9565b91505060c0830151848203610120860152614cda82826154a9565b600061014073ffffffffffffffffffffffffffffffffffffffff8084511685526020840151602086015260408401516040860152606084015161562d606087018273ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015160608301525050565b5060808401511660e085015260a08301516101008501829052615595828601826154a9565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015286604084015285606084015260c0608084015261569460c08401866154a9565b915080841660a084015250979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808b16835289602084015288604084015287606084015286608084015260e060a08401528460e08401526101008587828601376000848701820152931660c083015250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909101019695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808a168352808916602084015287604084015286606084015260e0608084015261577d60e08401876154a9565b83810360a085015261578f81876154a9565b92505080841660c08401525098975050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff89168352615809602084018973ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015160608301525050565b8660a08401528560c08401528060e0840152615827818401866154a9565b905082810361010084015261583c81856154a9565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015283604082015260a06060820152600061588460a08301856154a9565b8281036080840152610d8f81856154a9565b602080825282518282018190526000919060409081850190868401855b8281101561590c578151805185528681015163ffffffff9081168887015286820151168686015260609081015173ffffffffffffffffffffffffffffffffffffffff1690850152608090930192908501906001016158b3565b5091979650505050505050565b602081526000612d6e60208301846154f3565b60408152600061593f60408301856154f3565b905073ffffffffffffffffffffffffffffffffffffffff831660208301529392505050565b602081526000612d6e60208301846155b0565b60408152600061593f60408301856155b0565b61012081016159f882868051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b8360e083015273ffffffffffffffffffffffffffffffffffffffff8316610100830152949350505050565b600061010089835288602084015273ffffffffffffffffffffffffffffffffffffffff808916604085015280881660608501525085608084015284151560a08401528060c0840152600081840152506101208060e0840152615a87818401856154a9565b9a9950505050505050505050565b84815283602082015273ffffffffffffffffffffffffffffffffffffffff8316604082015260a06060820152600060a082015260c060808201526000615ade60c08301846154a9565b9695505050505050565b85815284602082015260a060408201526000615b0760a08301866154a9565b8281036060840152615b1981866154a9565b91505073ffffffffffffffffffffffffffffffffffffffff831660808301529695505050505050565b604051610120810167ffffffffffffffff81118282101715615b6657615b66615ee4565b60405290565b60405160e0810167ffffffffffffffff81118282101715615b6657615b66615ee4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715615bd657615bd6615ee4565b604052919050565b600067ffffffffffffffff821115615bf857615bf8615ee4565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60008219821115615c3757615c37615e57565b500190565b600082615c72577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600181815b80851115615cd057817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115615cb657615cb6615e57565b80851615615cc357918102915b93841c9390800290615c7c565b509250929050565b6000612d6e8383600082615cee5750600161094f565b81615cfb5750600061094f565b8160018114615d115760028114615d1b57615d37565b600191505061094f565b60ff841115615d2c57615d2c615e57565b50506001821b61094f565b5060208310610133831016604e8410600b8410161715615d5a575081810a61094f565b615d648383615c77565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115615d9657615d96615e57565b029392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615615dd657615dd6615e57565b500290565b600082821015615ded57615ded615e57565b500390565b60005b83811015615e0d578181015183820152602001615df5565b83811115612d295750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415615e5057615e50615e57565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611dbb57600080fd5b8015158114611dbb57600080fdfea2646970667358221220c50cef22dac128caae53830cb1aa832ee96bda290594f6920ca533ff493e454064736f6c63430008060033',
	devdoc: {
		details:
			'Inherits from - JBPayoutRedemptionPaymentTerminal: Generic terminal managing all inflows and outflows of funds into the protocol ecosystem.',
		kind: 'dev',
		methods: {
			'acceptsToken(address)': {
				params: {
					_token: 'The token to check if this terminal accepts or not.'
				},
				returns: {
					_0: 'The flag.'
				}
			},
			'addToBalanceOf(uint256,uint256,address,string,bytes)': {
				params: {
					_amount:
						'The amount of tokens to add, as a fixed point number with the same number of decimals as this terminal. If this is an ETH terminal, this is ignored and msg.value is used instead. ignored: _token The token being paid. This terminal ignores this property since it only manages one currency. ',
					_memo: 'A memo to pass along to the emitted event.',
					_metadata: 'Extra data to pass along to the emitted event.',
					_projectId: 'The ID of the project to which the funds received belong.'
				}
			},
			constructor: {
				params: {
					_baseWeightCurrency: 'The currency to base token issuance on.',
					_directory:
						'A contract storing directories of terminals and controllers for each project.',
					_operatorStore: 'A contract storing operator assignments.',
					_owner: 'The address that will own this contract.',
					_prices: 'A contract that exposes price feeds.',
					_projects:
						"A contract which mints ERC-721's that represent project ownership and transfers.",
					_splitsStore: 'A contract that stores splits for each project.',
					_store: "A contract that stores the terminal's data."
				}
			},
			'currencyForToken(address)': {
				returns: {
					_0: 'The currency index.'
				}
			},
			'currentEthOverflowOf(uint256)': {
				details: 'The current overflow is represented as a fixed point number with 18 decimals.',
				params: {
					_projectId: 'The ID of the project to get overflow for.'
				},
				returns: {
					_0: 'The current amount of ETH overflow that project has in this terminal, as a fixed point number with 18 decimals.'
				}
			},
			'decimalsForToken(address)': {
				returns: {
					_0: 'The number of decimals for the token.'
				}
			},
			'distributePayoutsOf(uint256,uint256,uint256,address,uint256,string)': {
				details:
					"Payouts are sent to the preprogrammed splits. Any leftover is sent to the project's owner.Anyone can distribute payouts on a project's behalf. The project can preconfigure a wildcard split that is used to send funds to msg.sender. This can be used to incentivize calling this function.All funds distributed outside of this contract or any feeless terminals incure the protocol fee.",
				params: {
					_amount:
						'The amount of terminal tokens to distribute, as a fixed point number with same number of decimals as this terminal.',
					_currency:
						"The expected currency of the amount being distributed. Must match the project's current funding cycle's distribution limit currency. ignored: _token The token being distributed. This terminal ignores this property since it only manages one token. ",
					_memo: 'A memo to pass along to the emitted event.',
					_minReturnedTokens:
						"The minimum number of terminal tokens that the `_amount` should be valued at in terms of this terminal's currency, as a fixed point number with the same number of decimals as this terminal.",
					_projectId: 'The ID of the project having its payouts distributed.'
				},
				returns: {
					netLeftoverDistributionAmount:
						'The amount that was sent to the project owner, as a fixed point number with the same amount of decimals as this terminal.'
				}
			},
			'heldFeesOf(uint256)': {
				params: {
					_projectId: 'The ID of the project for which fees are being held.'
				},
				returns: {
					_0: 'An array of fees that are being held.'
				}
			},
			'migrate(uint256,address)': {
				details: "Only a project's owner or a designated operator can migrate it.",
				params: {
					_projectId: 'The ID of the project being migrated.',
					_to: "The terminal contract that will gain the project's funds."
				},
				returns: {
					balance:
						'The amount of funds that were migrated, as a fixed point number with the same amount of decimals as this terminal.'
				}
			},
			'owner()': {
				details: 'Returns the address of the current owner.'
			},
			'pay(uint256,uint256,address,address,uint256,bool,string,bytes)': {
				params: {
					_amount:
						"The amount of terminal tokens being received, as a fixed point number with the same amount of decimals as this terminal. If this terminal's token is ETH, this is ignored and msg.value is used in its place. ignored: _token The token being paid. This terminal ignores this property since it only manages one token. ",
					_beneficiary:
						"The address to mint tokens for and pass along to the funding cycle's delegate.",
					_memo:
						"A memo to pass along to the emitted event, and passed along the the funding cycle's data source and delegate.  A data source can alter the memo before emitting in the event and forwarding to the delegate.",
					_metadata:
						'Bytes to send along to the data source, delegate, and emitted event, if provided.',
					_minReturnedTokens:
						'The minimum number of project tokens expected in return, as a fixed point number with the same amount of decimals as this terminal.',
					_preferClaimedTokens:
						'A flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas.',
					_projectId: 'The ID of the project being paid.'
				},
				returns: {
					_0: 'The number of tokens minted for the beneficiary, as a fixed point number with 18 decimals.'
				}
			},
			'processFees(uint256)': {
				details:
					"Only a project owner, an operator, or the contract's owner can process held fees.",
				params: {
					_projectId: 'The ID of the project whos held fees should be processed.'
				}
			},
			'redeemTokensOf(address,uint256,uint256,address,uint256,address,string,bytes)': {
				details: 'Only a token holder or a designated operator can redeem its tokens.',
				params: {
					_beneficiary: 'The address to send the terminal tokens to.',
					_holder: 'The account to redeem tokens for.',
					_memo: 'A memo to pass along to the emitted event.',
					_metadata:
						'Bytes to send along to the data source, delegate, and emitted event, if provided.',
					_minReturnedTokens:
						'The minimum amount of terminal tokens expected in return, as a fixed point number with the same amount of decimals as the terminal.',
					_projectId: 'The ID of the project to which the tokens being redeemed belong.',
					_tokenCount:
						'The number of project tokens to redeem, as a fixed point number with 18 decimals. ignored: _token The token being reclaimed. This terminal ignores this property since it only manages one token. '
				},
				returns: {
					reclaimAmount:
						'The amount of terminal tokens that the project tokens were redeemed for, as a fixed point number with 18 decimals.'
				}
			},
			'renounceOwnership()': {
				details:
					'Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.'
			},
			'setFee(uint256)': {
				details: 'Only the owner of this contract can change the fee.',
				params: {
					_fee: 'The new fee, out of MAX_FEE.'
				}
			},
			'setFeeGauge(address)': {
				details:
					"Only the owner of this contract can change the fee gauge.If the fee gauge reverts when called upon while a project is attempting to distribute its funds, a project's funds will be locked. This is a known risk.",
				params: {
					_feeGauge: 'The new fee gauge.'
				}
			},
			'setFeelessTerminal(address,bool)': {
				details: "Only the owner of this contract can set terminal's as feeless.",
				params: {
					_flag: 'A flag indicating whether the terminal should be feeless or not.',
					_terminal: 'The terminal that can be paid towards while still bypassing fees.'
				}
			},
			'supportsInterface(bytes4)': {
				details: ' See {IERC165-supportsInterface}.',
				params: {
					_interfaceId: 'The ID of the interface to check for adherance to.'
				}
			},
			'transferOwnership(address)': {
				details:
					'Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.'
			},
			'useAllowanceOf(uint256,uint256,uint256,address,uint256,address,string)': {
				details:
					"Only a project's owner or a designated operator can use its allowance.Incurs the protocol fee.",
				params: {
					_amount:
						"The amount of terminal tokens to use from this project's current allowance, as a fixed point number with the same amount of decimals as this terminal.",
					_beneficiary: 'The address to send the funds to.',
					_currency:
						"The expected currency of the amount being distributed. Must match the project's current funding cycle's overflow allowance currency. ignored: _token The token being distributed. This terminal ignores this property since it only manages one token. ",
					_memo: 'A memo to pass along to the emitted event.',
					_minReturnedTokens:
						"The minimum number of tokens that the `_amount` should be valued at in terms of this terminal's currency, as a fixed point number with 18 decimals.",
					_projectId: 'The ID of the project to use the allowance of.'
				},
				returns: {
					netDistributedAmount:
						'The amount of tokens that was distributed to the beneficiary, as a fixed point number with the same amount of decimals as the terminal.'
				}
			}
		},
		version: 1
	},
	userdoc: {
		errors: {
			'PRBMath__MulDivOverflow(uint256,uint256)': [
				{
					notice: 'Emitted when the result overflows uint256.'
				}
			]
		},
		kind: 'user',
		methods: {
			'acceptsToken(address)': {
				notice: 'A flag indicating if this terminal accepts the specified token.'
			},
			'addToBalanceOf(uint256,uint256,address,string,bytes)': {
				notice: 'Receives funds belonging to the specified project.'
			},
			'baseWeightCurrency()': {
				notice: 'The currency to base token issuance on.'
			},
			'currency()': {
				notice: 'The currency to use when resolving price feeds for this terminal.'
			},
			'currencyForToken(address)': {
				notice:
					'The currency that should be used for the specified token. ignored: _token The token to check for the currency of.'
			},
			'currentEthOverflowOf(uint256)': {
				notice:
					'Gets the current overflowed amount in this terminal for a specified project, in terms of ETH.'
			},
			'decimals()': {
				notice: 'The number of decimals the token fixed point amounts are expected to have.'
			},
			'decimalsForToken(address)': {
				notice:
					'The decimals that should be used in fixed number accounting for the specified token. ignored: _token The token to check for the decimals of.'
			},
			'directory()': {
				notice: 'The directory of terminals and controllers for projects.'
			},
			'distributePayoutsOf(uint256,uint256,uint256,address,uint256,string)': {
				notice:
					'Distributes payouts for a project with the distribution limit of its current funding cycle.'
			},
			'fee()': {
				notice: 'The platform fee percent.'
			},
			'feeGauge()': {
				notice: "The data source that returns a discount to apply to a project's fee."
			},
			'heldFeesOf(uint256)': {
				notice: 'The fees that are currently being held to be processed later for each project.'
			},
			'isFeelessTerminal(address)': {
				notice:
					'Terminals that can be paid towards from this terminal without incurring a fee. _terminal The terminal that can be paid toward.'
			},
			'migrate(uint256,address)': {
				notice:
					'Allows a project owner to migrate its funds and operations to a new terminal that accepts the same token type.'
			},
			'operatorStore()': {
				notice: ' A contract storing operator assignments.'
			},
			'pay(uint256,uint256,address,address,uint256,bool,string,bytes)': {
				notice: 'Contribute tokens to a project.'
			},
			'payoutSplitsGroup()': {
				notice: 'The group that payout splits coming from this terminal are identified by.'
			},
			'prices()': {
				notice: 'The contract that exposes price feeds.'
			},
			'processFees(uint256)': {
				notice: 'Process any fees that are being held for the project.'
			},
			'projects()': {
				notice: "Mints ERC-721's that represent project ownership and transfers."
			},
			'redeemTokensOf(address,uint256,uint256,address,uint256,address,string,bytes)': {
				notice:
					"Holders can redeem their tokens to claim the project's overflowed tokens, or to trigger rules determined by the project's current funding cycle's data source."
			},
			'setFee(uint256)': {
				notice: 'Allows the fee to be updated.'
			},
			'setFeeGauge(address)': {
				notice: 'Allows the fee gauge to be updated.'
			},
			'setFeelessTerminal(address,bool)': {
				notice:
					'Sets whether projects operating on this terminal can pay projects operating on the specified terminal without incurring a fee.'
			},
			'splitsStore()': {
				notice: 'The contract that stores splits for each project.'
			},
			'store()': {
				notice: "The contract that stores and manages the terminal's data."
			},
			'supportsInterface(bytes4)': {
				notice: 'Indicates if this contract adheres to the specified interface.'
			},
			'token()': {
				notice: 'The token that this terminal accepts.'
			},
			'useAllowanceOf(uint256,uint256,uint256,address,uint256,address,string)': {
				notice:
					'Allows a project to send funds from its overflow up to the preconfigured allowance.'
			}
		},
		notice: 'Manages all inflows and outflows of ETH funds into the protocol ecosystem.',
		version: 1
	},
	storageLayout: {
		storage: [
			{
				astId: 53,
				contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
				label: '_owner',
				offset: 0,
				slot: '0',
				type: 't_address'
			},
			{
				astId: 693,
				contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
				label: '_status',
				offset: 0,
				slot: '1',
				type: 't_uint256'
			},
			{
				astId: 14361,
				contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
				label: '_heldFeesOf',
				offset: 0,
				slot: '2',
				type: 't_mapping(t_uint256,t_array(t_struct(JBFee)19915_storage)dyn_storage)'
			},
			{
				astId: 14399,
				contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
				label: 'fee',
				offset: 0,
				slot: '3',
				type: 't_uint256'
			},
			{
				astId: 14404,
				contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
				label: 'feeGauge',
				offset: 0,
				slot: '4',
				type: 't_contract(IJBFeeGauge)17356'
			},
			{
				astId: 14411,
				contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
				label: 'isFeelessTerminal',
				offset: 0,
				slot: '5',
				type: 't_mapping(t_contract(IJBPaymentTerminal)17683,t_bool)'
			}
		],
		types: {
			t_address: {
				encoding: 'inplace',
				label: 'address',
				numberOfBytes: '20'
			},
			't_array(t_struct(JBFee)19915_storage)dyn_storage': {
				base: 't_struct(JBFee)19915_storage',
				encoding: 'dynamic_array',
				label: 'struct JBFee[]',
				numberOfBytes: '32'
			},
			t_bool: {
				encoding: 'inplace',
				label: 'bool',
				numberOfBytes: '1'
			},
			't_contract(IJBFeeGauge)17356': {
				encoding: 'inplace',
				label: 'contract IJBFeeGauge',
				numberOfBytes: '20'
			},
			't_contract(IJBPaymentTerminal)17683': {
				encoding: 'inplace',
				label: 'contract IJBPaymentTerminal',
				numberOfBytes: '20'
			},
			't_mapping(t_contract(IJBPaymentTerminal)17683,t_bool)': {
				encoding: 'mapping',
				key: 't_contract(IJBPaymentTerminal)17683',
				label: 'mapping(contract IJBPaymentTerminal => bool)',
				numberOfBytes: '32',
				value: 't_bool'
			},
			't_mapping(t_uint256,t_array(t_struct(JBFee)19915_storage)dyn_storage)': {
				encoding: 'mapping',
				key: 't_uint256',
				label: 'mapping(uint256 => struct JBFee[])',
				numberOfBytes: '32',
				value: 't_array(t_struct(JBFee)19915_storage)dyn_storage'
			},
			't_struct(JBFee)19915_storage': {
				encoding: 'inplace',
				label: 'struct JBFee',
				members: [
					{
						astId: 19908,
						contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
						label: 'amount',
						offset: 0,
						slot: '0',
						type: 't_uint256'
					},
					{
						astId: 19910,
						contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
						label: 'fee',
						offset: 0,
						slot: '1',
						type: 't_uint32'
					},
					{
						astId: 19912,
						contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
						label: 'feeDiscount',
						offset: 4,
						slot: '1',
						type: 't_uint32'
					},
					{
						astId: 19914,
						contract: 'contracts/JBETHPaymentTerminal.sol:JBETHPaymentTerminal',
						label: 'beneficiary',
						offset: 8,
						slot: '1',
						type: 't_address'
					}
				],
				numberOfBytes: '64'
			},
			t_uint256: {
				encoding: 'inplace',
				label: 'uint256',
				numberOfBytes: '32'
			},
			t_uint32: {
				encoding: 'inplace',
				label: 'uint32',
				numberOfBytes: '4'
			}
		}
	}
};

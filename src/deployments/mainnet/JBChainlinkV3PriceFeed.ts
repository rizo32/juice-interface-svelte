export default {
	address: '0x236D9F67587782420151225Ff867044B9CcD30e3',
	abi: [
		{
			inputs: [
				{
					internalType: 'contract AggregatorV3Interface',
					name: '_feed',
					type: 'address'
				}
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_decimals',
					type: 'uint256'
				}
			],
			name: 'currentPrice',
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
			name: 'feed',
			outputs: [
				{
					internalType: 'contract AggregatorV3Interface',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		}
	],
	transactionHash: '0x347d2f9eb22f636bd8f7f8c30b26773987bfce0a7f648a449c0e862738f9aa12',
	receipt: {
		to: null,
		from: '0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF',
		contractAddress: '0x236D9F67587782420151225Ff867044B9CcD30e3',
		transactionIndex: 22,
		gasUsed: '364563',
		logsBloom:
			'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		blockHash: '0xb037e0caa5755a0e32f45768d4215e35a00bd40c6f23eb367d830d760fc0a672',
		transactionHash: '0x347d2f9eb22f636bd8f7f8c30b26773987bfce0a7f648a449c0e862738f9aa12',
		logs: [],
		blockNumber: 14637438,
		cumulativeGasUsed: '1833473',
		status: 1,
		byzantium: true
	},
	args: ['0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'],
	numDeployments: 1,
	solcInputHash: '2d6f35a58bd6d7d54eadea7a0697d07f',
	metadata:
		'{"compiler":{"version":"0.8.6+commit.11564f7e"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract AggregatorV3Interface","name":"_feed","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feed","outputs":[{"internalType":"contract AggregatorV3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"details":"Adheres to - IJBPriceFeed: General interface for the methods in this contract that interact with the blockchain\'s state according to the protocol\'s rules.","kind":"dev","methods":{"constructor":{"params":{"_feed":"The feed to report prices from."}},"currentPrice(uint256)":{"params":{"_decimals":"The number of decimals the returned fixed point price should include."},"returns":{"_0":"The current price of the feed, as a fixed point number with the specified number of decimals."}}},"version":1},"userdoc":{"kind":"user","methods":{"currentPrice(uint256)":{"notice":" Gets the current price from the feed, normalized to the specified number of decimals."},"feed()":{"notice":" The feed that prices are reported from."}},"notice":" A generalized price feed for the Chainlink AggregatorV3Interface.","version":1}},"settings":{"compilationTarget":{"contracts/JBChainlinkV3PriceFeed.sol":"JBChainlinkV3PriceFeed"},"evmVersion":"berlin","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":1000000},"remappings":[]},"sources":{"@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity >=0.6.0;\\n\\ninterface AggregatorV3Interface {\\n\\n  function decimals() external view returns (uint8);\\n  function description() external view returns (string memory);\\n  function version() external view returns (uint256);\\n\\n  // getRoundData and latestRoundData should both raise \\"No data present\\"\\n  // if they do not have data to report, instead of returning unset values\\n  // which could be misinterpreted as actual reported values.\\n  function getRoundData(uint80 _roundId)\\n    external\\n    view\\n    returns (\\n      uint80 roundId,\\n      int256 answer,\\n      uint256 startedAt,\\n      uint256 updatedAt,\\n      uint80 answeredInRound\\n    );\\n  function latestRoundData()\\n    external\\n    view\\n    returns (\\n      uint80 roundId,\\n      int256 answer,\\n      uint256 startedAt,\\n      uint256 updatedAt,\\n      uint80 answeredInRound\\n    );\\n\\n}\\n","keccak256":"0x1862840d741dedb36e774534b877a13b5187555e3b78b8d2815f898b0dc02268","license":"MIT"},"contracts/JBChainlinkV3PriceFeed.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol\';\\nimport \'./interfaces/IJBPriceFeed.sol\';\\nimport \'./libraries/JBFixedPointNumber.sol\';\\n\\n/** \\n  @notice \\n  A generalized price feed for the Chainlink AggregatorV3Interface.\\n\\n  @dev\\n  Adheres to -\\n  IJBPriceFeed: General interface for the methods in this contract that interact with the blockchain\'s state according to the protocol\'s rules.\\n*/\\ncontract JBChainlinkV3PriceFeed is IJBPriceFeed {\\n  // A library that provides utility for fixed point numbers.\\n  using JBFixedPointNumber for uint256;\\n\\n  //*********************************************************************//\\n  // --------------------- public stored properties -------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    The feed that prices are reported from.\\n  */\\n  AggregatorV3Interface public feed;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    Gets the current price from the feed, normalized to the specified number of decimals.\\n\\n    @param _decimals The number of decimals the returned fixed point price should include.\\n\\n    @return The current price of the feed, as a fixed point number with the specified number of decimals.\\n  */\\n  function currentPrice(uint256 _decimals) external view override returns (uint256) {\\n    // Get the latest round information. Only need the price is needed.\\n    (, int256 _price, , , ) = feed.latestRoundData();\\n\\n    // Get a reference to the number of decimals the feed uses.\\n    uint256 _feedDecimals = feed.decimals();\\n\\n    // Return the price, adjusted to the target decimals.\\n    return uint256(_price).adjustDecimals(_feedDecimals, _decimals);\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _feed The feed to report prices from.\\n  */\\n  constructor(AggregatorV3Interface _feed) {\\n    feed = _feed;\\n  }\\n}\\n","keccak256":"0xcd74af97790c450d022db18c0effa5ea2cc1b2060ac33cea0c72ce27db040a98","license":"MIT"},"contracts/interfaces/IJBPriceFeed.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBPriceFeed {\\n  function currentPrice(uint256 _targetDecimals) external view returns (uint256);\\n}\\n","keccak256":"0xac22ef5e35cdd64b1467416fd142801856ce867ecde41582f3aa437c955c9be2","license":"MIT"},"contracts/libraries/JBFixedPointNumber.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBFixedPointNumber {\\n  function adjustDecimals(\\n    uint256 _value,\\n    uint256 _decimals,\\n    uint256 _targetDecimals\\n  ) internal pure returns (uint256) {\\n    // If decimals need adjusting, multiply or divide the price by the decimal adjuster to get the normalized result.\\n    if (_targetDecimals == _decimals) return _value;\\n    else if (_targetDecimals > _decimals) return _value * 10**(_targetDecimals - _decimals);\\n    else return _value / 10**(_decimals - _targetDecimals);\\n  }\\n}\\n","keccak256":"0x98b16f5cc7e0b317ae7d0f429f05a5268c8439053d9e953619e0baaf996a012a","license":"MIT"}},"version":1}',
	bytecode:
		'0x608060405234801561001057600080fd5b506040516105c83803806105c883398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610535806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806337a7b7d81461003b5780637a3c4c1714610085575b600080fd5b60005461005b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61009861009336600461028c565b6100a6565b60405190815260200161007c565b60008054604080517ffeaf968c0000000000000000000000000000000000000000000000000000000081529051839273ffffffffffffffffffffffffffffffffffffffff169163feaf968c9160048083019260a0929190829003018186803b15801561011157600080fd5b505afa158015610125573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014991906102a5565b50505091505060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156101b857600080fd5b505afa1580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f091906102f5565b60ff169050610200828286610208565b949350505050565b600082821415610219575082610266565b828211156102475761022b83836104b9565b61023690600a6103b4565b610240908561047c565b9050610266565b61025182846104b9565b61025c90600a6103b4565b6102409085610318565b9392505050565b805169ffffffffffffffffffff8116811461028757600080fd5b919050565b60006020828403121561029e57600080fd5b5035919050565b600080600080600060a086880312156102bd57600080fd5b6102c68661026d565b94506020860151935060408601519250606086015191506102e96080870161026d565b90509295509295909350565b60006020828403121561030757600080fd5b815160ff8116811461026657600080fd5b60008261034e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600181815b808511156103ac57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610392576103926104d0565b8085161561039f57918102915b93841c9390800290610358565b509250929050565b600061026683836000826103ca57506001610476565b816103d757506000610476565b81600181146103ed57600281146103f757610413565b6001915050610476565b60ff841115610408576104086104d0565b50506001821b610476565b5060208310610133831016604e8410600b8410161715610436575081810a610476565b6104408383610353565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610472576104726104d0565b0290505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156104b4576104b46104d0565b500290565b6000828210156104cb576104cb6104d0565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220203960162f9d811b4d3a6184aaa5ef6b6c4237a0d5d27088b711e12d118270f564736f6c63430008060033',
	deployedBytecode:
		'0x608060405234801561001057600080fd5b50600436106100365760003560e01c806337a7b7d81461003b5780637a3c4c1714610085575b600080fd5b60005461005b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61009861009336600461028c565b6100a6565b60405190815260200161007c565b60008054604080517ffeaf968c0000000000000000000000000000000000000000000000000000000081529051839273ffffffffffffffffffffffffffffffffffffffff169163feaf968c9160048083019260a0929190829003018186803b15801561011157600080fd5b505afa158015610125573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014991906102a5565b50505091505060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156101b857600080fd5b505afa1580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f091906102f5565b60ff169050610200828286610208565b949350505050565b600082821415610219575082610266565b828211156102475761022b83836104b9565b61023690600a6103b4565b610240908561047c565b9050610266565b61025182846104b9565b61025c90600a6103b4565b6102409085610318565b9392505050565b805169ffffffffffffffffffff8116811461028757600080fd5b919050565b60006020828403121561029e57600080fd5b5035919050565b600080600080600060a086880312156102bd57600080fd5b6102c68661026d565b94506020860151935060408601519250606086015191506102e96080870161026d565b90509295509295909350565b60006020828403121561030757600080fd5b815160ff8116811461026657600080fd5b60008261034e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600181815b808511156103ac57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610392576103926104d0565b8085161561039f57918102915b93841c9390800290610358565b509250929050565b600061026683836000826103ca57506001610476565b816103d757506000610476565b81600181146103ed57600281146103f757610413565b6001915050610476565b60ff841115610408576104086104d0565b50506001821b610476565b5060208310610133831016604e8410600b8410161715610436575081810a610476565b6104408383610353565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610472576104726104d0565b0290505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156104b4576104b46104d0565b500290565b6000828210156104cb576104cb6104d0565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220203960162f9d811b4d3a6184aaa5ef6b6c4237a0d5d27088b711e12d118270f564736f6c63430008060033',
	devdoc: {
		details:
			"Adheres to - IJBPriceFeed: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.",
		kind: 'dev',
		methods: {
			constructor: {
				params: {
					_feed: 'The feed to report prices from.'
				}
			},
			'currentPrice(uint256)': {
				params: {
					_decimals: 'The number of decimals the returned fixed point price should include.'
				},
				returns: {
					_0: 'The current price of the feed, as a fixed point number with the specified number of decimals.'
				}
			}
		},
		version: 1
	},
	userdoc: {
		kind: 'user',
		methods: {
			'currentPrice(uint256)': {
				notice:
					' Gets the current price from the feed, normalized to the specified number of decimals.'
			},
			'feed()': {
				notice: ' The feed that prices are reported from.'
			}
		},
		notice: ' A generalized price feed for the Chainlink AggregatorV3Interface.',
		version: 1
	},
	storageLayout: {
		storage: [
			{
				astId: 4610,
				contract: 'contracts/JBChainlinkV3PriceFeed.sol:JBChainlinkV3PriceFeed',
				label: 'feed',
				offset: 0,
				slot: '0',
				type: 't_contract(AggregatorV3Interface)45'
			}
		],
		types: {
			't_contract(AggregatorV3Interface)45': {
				encoding: 'inplace',
				label: 'contract AggregatorV3Interface',
				numberOfBytes: '20'
			}
		}
	}
};

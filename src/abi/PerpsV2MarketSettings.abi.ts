export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "address",
                "name": "_resolver"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CacheUpdated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "name",
                "indexed": false
            },
            {
                "type": "address",
                "name": "destination",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "KeeperLiquidationFeeUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "keeperFee",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LiquidationBufferRatioUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "bps",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LiquidationFeeRatioUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "bps",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MaxKeeperFeeUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "sUSD",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MinInitialMarginUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "minMargin",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MinKeeperFeeUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "sUSD",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnerChanged",
        "inputs": [
            {
                "type": "address",
                "name": "oldOwner",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnerNominated",
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ParameterUpdated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "marketKey",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "parameter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ParameterUpdatedBytes32",
        "inputs": [
            {
                "type": "bytes32",
                "name": "marketKey",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "parameter",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "CONTRACT_NAME",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "acceptOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "delayedOrderConfirmWindow",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "isResolverCached",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "keeperLiquidationFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "liquidationBufferRatio",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "liquidationFeeRatio",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "liquidationPremiumMultiplier",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "makerFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "makerFeeDelayedOrder",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "makerFeeOffchainDelayedOrder",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxDelayTimeDelta",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxFundingVelocity",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxKeeperFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxLeverage",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxLiquidationDelta",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxMarketValue",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxPD",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "minDelayTimeDelta",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "minInitialMargin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "minKeeperFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "nextPriceConfirmWindow",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "nominateNewOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "nominatedOwner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "offchainDelayedOrderMaxAge",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "offchainDelayedOrderMinAge",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "offchainMarketKey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "offchainPriceDivergence",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "parameters",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint256",
                        "name": "takerFee"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFee"
                    },
                    {
                        "type": "uint256",
                        "name": "takerFeeDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFeeDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "takerFeeOffchainDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFeeOffchainDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLeverage"
                    },
                    {
                        "type": "uint256",
                        "name": "maxMarketValue"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFundingVelocity"
                    },
                    {
                        "type": "uint256",
                        "name": "skewScale"
                    },
                    {
                        "type": "uint256",
                        "name": "nextPriceConfirmWindow"
                    },
                    {
                        "type": "uint256",
                        "name": "delayedOrderConfirmWindow"
                    },
                    {
                        "type": "uint256",
                        "name": "minDelayTimeDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "maxDelayTimeDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainDelayedOrderMinAge"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainDelayedOrderMaxAge"
                    },
                    {
                        "type": "bytes32",
                        "name": "offchainMarketKey"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainPriceDivergence"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationPremiumMultiplier"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationBufferRatio"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLiquidationDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPD"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "rebuildCache",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "resolver",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "resolverAddressesRequired",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32[]",
                "name": "addresses"
            }
        ]
    },
    {
        "type": "function",
        "name": "setDelayedOrderConfirmWindow",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_delayedOrderConfirmWindow"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setKeeperLiquidationFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_keeperFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLiquidationBufferRatio",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_ratio"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLiquidationFeeRatio",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_ratio"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLiquidationPremiumMultiplier",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_liquidationPremiumMultiplier"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMakerFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_makerFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMakerFeeDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_makerFeeDelayedOrder"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMakerFeeOffchainDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_makerFeeOffchainDelayedOrder"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxDelayTimeDelta",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_maxDelayTimeDelta"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxFundingVelocity",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_maxFundingVelocity"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxKeeperFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_sUSD"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxLeverage",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_maxLeverage"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxLiquidationDelta",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_maxLiquidationDelta"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxMarketValue",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_maxMarketValue"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxPD",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_maxPD"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMinDelayTimeDelta",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_minDelayTimeDelta"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMinInitialMargin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_minMargin"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMinKeeperFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_sUSD"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setNextPriceConfirmWindow",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_nextPriceConfirmWindow"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOffchainDelayedOrderMaxAge",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_offchainDelayedOrderMaxAge"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOffchainDelayedOrderMinAge",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_offchainDelayedOrderMinAge"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOffchainMarketKey",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "bytes32",
                "name": "_offchainMarketKey"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOffchainPriceDivergence",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_offchainPriceDivergence"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setParameters",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "tuple",
                "name": "_parameters",
                "components": [
                    {
                        "type": "uint256",
                        "name": "takerFee"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFee"
                    },
                    {
                        "type": "uint256",
                        "name": "takerFeeDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFeeDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "takerFeeOffchainDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFeeOffchainDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLeverage"
                    },
                    {
                        "type": "uint256",
                        "name": "maxMarketValue"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFundingVelocity"
                    },
                    {
                        "type": "uint256",
                        "name": "skewScale"
                    },
                    {
                        "type": "uint256",
                        "name": "nextPriceConfirmWindow"
                    },
                    {
                        "type": "uint256",
                        "name": "delayedOrderConfirmWindow"
                    },
                    {
                        "type": "uint256",
                        "name": "minDelayTimeDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "maxDelayTimeDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainDelayedOrderMinAge"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainDelayedOrderMaxAge"
                    },
                    {
                        "type": "bytes32",
                        "name": "offchainMarketKey"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainPriceDivergence"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationPremiumMultiplier"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationBufferRatio"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLiquidationDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPD"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSkewScale",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_skewScale"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTakerFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_takerFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTakerFeeDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_takerFeeDelayedOrder"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTakerFeeOffchainDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            },
            {
                "type": "uint256",
                "name": "_takerFeeOffchainDelayedOrder"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "skewScale",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "takerFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "takerFeeDelayedOrder",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "takerFeeOffchainDelayedOrder",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_marketKey"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    }
]

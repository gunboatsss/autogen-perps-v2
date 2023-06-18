export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "DelayedOrderRemoved",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "isOffchain",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "currentRoundId",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "targetRoundId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "commitDeposit",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "keeperDeposit",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "trackingCode",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DelayedOrderSubmitted",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "isOffchain",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "targetRoundId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "intentionTime",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executableAtTime",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "commitDeposit",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "keeperDeposit",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "trackingCode",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FundingRecomputed",
        "inputs": [
            {
                "type": "int256",
                "name": "funding",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "fundingRate",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "index",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MarginTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "marginDelta",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PerpsTracking",
        "inputs": [
            {
                "type": "bytes32",
                "name": "trackingCode",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "baseAsset",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "marketKey",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PositionFlagged",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            },
            {
                "type": "address",
                "name": "account",
                "indexed": false
            },
            {
                "type": "address",
                "name": "flagger",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PositionLiquidated",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            },
            {
                "type": "address",
                "name": "account",
                "indexed": false
            },
            {
                "type": "address",
                "name": "liquidator",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "size",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "price",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "flaggerFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "liquidatorFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "stakersFee",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PositionLiquidated",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            },
            {
                "type": "address",
                "name": "account",
                "indexed": false
            },
            {
                "type": "address",
                "name": "liquidator",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "size",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "price",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PositionModified",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "margin",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "size",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "tradeSize",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "lastPrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fundingIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "skew",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PositionModified",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "margin",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "size",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "tradeSize",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "lastPrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fundingIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "accessibleMargin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "marginAccessible"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "accruedFunding",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": "funding"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "assetPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "baseAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": "key"
            }
        ]
    },
    {
        "type": "function",
        "name": "canLiquidate",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "cancelDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelOffchainDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "closePosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "closePositionWithTracking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            },
            {
                "type": "bytes32",
                "name": "trackingCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "currentFundingRate",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": "fundingRate"
            }
        ]
    },
    {
        "type": "function",
        "name": "currentFundingVelocity",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": "fundingVelocity"
            }
        ]
    },
    {
        "type": "function",
        "name": "delayedOrders",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "bool",
                        "name": "isOffchain"
                    },
                    {
                        "type": "int128",
                        "name": "sizeDelta"
                    },
                    {
                        "type": "uint128",
                        "name": "desiredFillPrice"
                    },
                    {
                        "type": "uint128",
                        "name": "targetRoundId"
                    },
                    {
                        "type": "uint128",
                        "name": "commitDeposit"
                    },
                    {
                        "type": "uint128",
                        "name": "keeperDeposit"
                    },
                    {
                        "type": "uint256",
                        "name": "executableAtTime"
                    },
                    {
                        "type": "uint256",
                        "name": "intentionTime"
                    },
                    {
                        "type": "bytes32",
                        "name": "trackingCode"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "executeDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "executeOffchainDelayedOrder",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "bytes[]",
                "name": "priceUpdateData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "fillPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "flagPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "forceLiquidatePosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "fundingLastRecomputed",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": "timestamp"
            }
        ]
    },
    {
        "type": "function",
        "name": "fundingRateLastRecomputed",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int128",
                "name": "fundingRate"
            }
        ]
    },
    {
        "type": "function",
        "name": "fundingSequence",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "int128",
                "name": "netFunding"
            }
        ]
    },
    {
        "type": "function",
        "name": "fundingSequenceLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "length"
            }
        ]
    },
    {
        "type": "function",
        "name": "isFlagged",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "liquidatePosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "liquidationFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
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
        "name": "liquidationPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "marketDebt",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "debt"
            },
            {
                "type": "bool",
                "name": "isInvalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "marketKey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": "key"
            }
        ]
    },
    {
        "type": "function",
        "name": "marketSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint128",
                "name": "size"
            }
        ]
    },
    {
        "type": "function",
        "name": "marketSizes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "long"
            },
            {
                "type": "uint256",
                "name": "short"
            }
        ]
    },
    {
        "type": "function",
        "name": "marketSkew",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int128",
                "name": "skew"
            }
        ]
    },
    {
        "type": "function",
        "name": "modifyPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "modifyPositionWithTracking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            },
            {
                "type": "bytes32",
                "name": "trackingCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "notionalValue",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": "value"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "orderFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint8",
                "name": "orderType"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "fee"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "positions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint64",
                        "name": "id"
                    },
                    {
                        "type": "uint64",
                        "name": "lastFundingIndex"
                    },
                    {
                        "type": "uint128",
                        "name": "margin"
                    },
                    {
                        "type": "uint128",
                        "name": "lastPrice"
                    },
                    {
                        "type": "int128",
                        "name": "size"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "postTradeDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint256",
                "name": "tradePrice"
            },
            {
                "type": "uint8",
                "name": "orderType"
            },
            {
                "type": "address",
                "name": "sender"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "margin"
            },
            {
                "type": "int256",
                "name": "size"
            },
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "uint256",
                "name": "liqPrice"
            },
            {
                "type": "uint256",
                "name": "fee"
            },
            {
                "type": "uint8",
                "name": "status"
            }
        ]
    },
    {
        "type": "function",
        "name": "profitLoss",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": "pnl"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "recomputeFunding",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "lastIndex"
            }
        ]
    },
    {
        "type": "function",
        "name": "remainingMargin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "marginRemaining"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "submitCloseDelayedOrderWithTracking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "desiredTimeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            },
            {
                "type": "bytes32",
                "name": "trackingCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitCloseOffchainDelayedOrderWithTracking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            },
            {
                "type": "bytes32",
                "name": "trackingCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredTimeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitDelayedOrderWithTracking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredTimeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            },
            {
                "type": "bytes32",
                "name": "trackingCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitOffchainDelayedOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitOffchainDelayedOrderWithTracking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "sizeDelta"
            },
            {
                "type": "uint256",
                "name": "desiredFillPrice"
            },
            {
                "type": "bytes32",
                "name": "trackingCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferMargin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "marginDelta"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unrecordedFunding",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": "funding"
            },
            {
                "type": "bool",
                "name": "invalid"
            }
        ]
    },
    {
        "type": "function",
        "name": "withdrawAllMargin",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    }
]

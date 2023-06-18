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
        "name": "EndorsedAddressAdded",
        "inputs": [
            {
                "type": "address",
                "name": "endorsedAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EndorsedAddressRemoved",
        "inputs": [
            {
                "type": "address",
                "name": "endorsedAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MarketAdded",
        "inputs": [
            {
                "type": "address",
                "name": "market",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "marketKey",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MarketRemoved",
        "inputs": [
            {
                "type": "address",
                "name": "market",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "marketKey",
                "indexed": true
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
        "name": "addEndorsedAddresses",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "addresses"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addMarkets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "marketsToAdd"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addProxiedMarkets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "marketsToAdd"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "allEndorsedAddresses",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "allMarketSummaries",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "asset"
                    },
                    {
                        "type": "bytes32",
                        "name": "marketKey"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "marketSize"
                    },
                    {
                        "type": "int256",
                        "name": "marketSkew"
                    },
                    {
                        "type": "uint256",
                        "name": "marketDebt"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingRate"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingVelocity"
                    },
                    {
                        "type": "bool",
                        "name": "priceInvalid"
                    },
                    {
                        "type": "bool",
                        "name": "proxied"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "allMarkets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "allMarkets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "proxiedMarkets"
            }
        ],
        "outputs": [
            {
                "type": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "burnSUSD",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "postReclamationAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "isEndorsed",
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
        "name": "issueSUSD",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "marketForKey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "marketSummaries",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "addresses"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "asset"
                    },
                    {
                        "type": "bytes32",
                        "name": "marketKey"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "marketSize"
                    },
                    {
                        "type": "int256",
                        "name": "marketSkew"
                    },
                    {
                        "type": "uint256",
                        "name": "marketDebt"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingRate"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingVelocity"
                    },
                    {
                        "type": "bool",
                        "name": "priceInvalid"
                    },
                    {
                        "type": "bool",
                        "name": "proxied"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "marketSummariesForKeys",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "marketKeys"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "asset"
                    },
                    {
                        "type": "bytes32",
                        "name": "marketKey"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "marketSize"
                    },
                    {
                        "type": "int256",
                        "name": "marketSkew"
                    },
                    {
                        "type": "uint256",
                        "name": "marketDebt"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingRate"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingVelocity"
                    },
                    {
                        "type": "bool",
                        "name": "priceInvalid"
                    },
                    {
                        "type": "bool",
                        "name": "proxied"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "markets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            },
            {
                "type": "uint256",
                "name": "pageSize"
            },
            {
                "type": "bool",
                "name": "proxiedMarkets"
            }
        ],
        "outputs": [
            {
                "type": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "markets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            },
            {
                "type": "uint256",
                "name": "pageSize"
            }
        ],
        "outputs": [
            {
                "type": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "marketsForKeys",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "marketKeys"
            }
        ],
        "outputs": [
            {
                "type": "address[]"
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
        "name": "numMarkets",
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
        "name": "numMarkets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "proxiedMarkets"
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
        "name": "payFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "payFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
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
        "name": "removeEndorsedAddresses",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "addresses"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeMarkets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "marketsToRemove"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeMarketsByKey",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "marketKeysToRemove"
            }
        ],
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
        "name": "totalDebt",
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
        "name": "updateMarketsImplementations",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "marketsToUpdate"
            }
        ],
        "outputs": []
    }
]

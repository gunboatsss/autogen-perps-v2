import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import {Store} from '../db'
import {EntityBuffer} from '../entityBuffer'
import {FuturesMarketManagerEventCacheUpdated, FuturesMarketManagerEventEndorsedAddressAdded, FuturesMarketManagerEventEndorsedAddressRemoved, FuturesMarketManagerEventMarketAdded, FuturesMarketManagerEventMarketRemoved, FuturesMarketManagerEventOwnerChanged, FuturesMarketManagerEventOwnerNominated, FuturesMarketManagerFunctionAcceptOwnership, FuturesMarketManagerFunctionAddEndorsedAddresses, FuturesMarketManagerFunctionAddMarkets, FuturesMarketManagerFunctionAddProxiedMarkets, FuturesMarketManagerFunctionBurnSusd, FuturesMarketManagerFunctionIssueSusd, FuturesMarketManagerFunctionNominateNewOwner, FuturesMarketManagerFunctionPayFee0, FuturesMarketManagerFunctionPayFee1, FuturesMarketManagerFunctionRebuildCache, FuturesMarketManagerFunctionRemoveEndorsedAddresses, FuturesMarketManagerFunctionRemoveMarkets, FuturesMarketManagerFunctionRemoveMarketsByKey, FuturesMarketManagerFunctionUpdateMarketsImplementations} from '../model'
import * as spec from '../abi/FuturesMarketManager'
import {normalize} from '../util'

export {spec}

export const address = '0xd30bdfd7e7a65fe109d5de1d4e95f3b800fb7463'

type EventItem = LogItem<{evmLog: {topics: true, data: true}, transaction: {hash: true}}>
type FunctionItem = TransactionItem<{transaction: {hash: true, input: true, value: true, status: true}}>

export function parse(ctx: CommonHandlerContext<Store>, block: EvmBlock, item: EventItem | FunctionItem) {
    switch (item.kind) {
        case 'evmLog':
            return parseEvent(ctx, block, item)
        case 'transaction':
            return parseFunction(ctx, block, item)
    }
}

function parseEvent(ctx: CommonHandlerContext<Store>, block: EvmBlock, item: EventItem) {
    try {
        switch (item.evmLog.topics[0]) {
            case spec.events['CacheUpdated'].topic: {
                let e = normalize(spec.events['CacheUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new FuturesMarketManagerEventCacheUpdated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'CacheUpdated',
                        name: e[0],
                        destination: e[1],
                    })
                )
                break
            }
            case spec.events['EndorsedAddressAdded'].topic: {
                let e = normalize(spec.events['EndorsedAddressAdded'].decode(item.evmLog))
                EntityBuffer.add(
                    new FuturesMarketManagerEventEndorsedAddressAdded({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'EndorsedAddressAdded',
                        endorsedAddress: e[0],
                    })
                )
                break
            }
            case spec.events['EndorsedAddressRemoved'].topic: {
                let e = normalize(spec.events['EndorsedAddressRemoved'].decode(item.evmLog))
                EntityBuffer.add(
                    new FuturesMarketManagerEventEndorsedAddressRemoved({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'EndorsedAddressRemoved',
                        endorsedAddress: e[0],
                    })
                )
                break
            }
            case spec.events['MarketAdded'].topic: {
                let e = normalize(spec.events['MarketAdded'].decode(item.evmLog))
                EntityBuffer.add(
                    new FuturesMarketManagerEventMarketAdded({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'MarketAdded',
                        market: e[0],
                        asset: e[1],
                        marketKey: e[2],
                    })
                )
                break
            }
            case spec.events['MarketRemoved'].topic: {
                let e = normalize(spec.events['MarketRemoved'].decode(item.evmLog))
                EntityBuffer.add(
                    new FuturesMarketManagerEventMarketRemoved({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'MarketRemoved',
                        market: e[0],
                        asset: e[1],
                        marketKey: e[2],
                    })
                )
                break
            }
            case spec.events['OwnerChanged'].topic: {
                let e = normalize(spec.events['OwnerChanged'].decode(item.evmLog))
                EntityBuffer.add(
                    new FuturesMarketManagerEventOwnerChanged({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'OwnerChanged',
                        oldOwner: e[0],
                        newOwner: e[1],
                    })
                )
                break
            }
            case spec.events['OwnerNominated'].topic: {
                let e = normalize(spec.events['OwnerNominated'].decode(item.evmLog))
                EntityBuffer.add(
                    new FuturesMarketManagerEventOwnerNominated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'OwnerNominated',
                        newOwner: e[0],
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode event "${item.evmLog.topics[0]}"`)
    }
}

function parseFunction(ctx: CommonHandlerContext<Store>, block: EvmBlock, item: FunctionItem) {
    try {
        switch (item.transaction.input.slice(0, 10)) {
            case spec.functions['acceptOwnership'].sighash: {
                let f = normalize(spec.functions['acceptOwnership'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionAcceptOwnership({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'acceptOwnership',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                    })
                )
                break
            }
            case spec.functions['addEndorsedAddresses'].sighash: {
                let f = normalize(spec.functions['addEndorsedAddresses'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionAddEndorsedAddresses({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'addEndorsedAddresses',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        addresses: f[0],
                    })
                )
                break
            }
            case spec.functions['addMarkets'].sighash: {
                let f = normalize(spec.functions['addMarkets'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionAddMarkets({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'addMarkets',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketsToAdd: f[0],
                    })
                )
                break
            }
            case spec.functions['addProxiedMarkets'].sighash: {
                let f = normalize(spec.functions['addProxiedMarkets'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionAddProxiedMarkets({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'addProxiedMarkets',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketsToAdd: f[0],
                    })
                )
                break
            }
            case spec.functions['burnSUSD'].sighash: {
                let f = normalize(spec.functions['burnSUSD'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionBurnSusd({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'burnSUSD',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                        amount: f[1],
                    })
                )
                break
            }
            case spec.functions['issueSUSD'].sighash: {
                let f = normalize(spec.functions['issueSUSD'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionIssueSusd({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'issueSUSD',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                        amount: f[1],
                    })
                )
                break
            }
            case spec.functions['nominateNewOwner'].sighash: {
                let f = normalize(spec.functions['nominateNewOwner'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionNominateNewOwner({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'nominateNewOwner',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        owner: f[0],
                    })
                )
                break
            }
            case spec.functions['payFee(uint256,bytes32)'].sighash: {
                let f = normalize(spec.functions['payFee(uint256,bytes32)'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionPayFee0({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'payFee(uint256,bytes32)',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        amount: f[0],
                        trackingCode: f[1],
                    })
                )
                break
            }
            case spec.functions['payFee(uint256)'].sighash: {
                let f = normalize(spec.functions['payFee(uint256)'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionPayFee1({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'payFee(uint256)',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        amount: f[0],
                    })
                )
                break
            }
            case spec.functions['rebuildCache'].sighash: {
                let f = normalize(spec.functions['rebuildCache'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionRebuildCache({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'rebuildCache',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                    })
                )
                break
            }
            case spec.functions['removeEndorsedAddresses'].sighash: {
                let f = normalize(spec.functions['removeEndorsedAddresses'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionRemoveEndorsedAddresses({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'removeEndorsedAddresses',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        addresses: f[0],
                    })
                )
                break
            }
            case spec.functions['removeMarkets'].sighash: {
                let f = normalize(spec.functions['removeMarkets'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionRemoveMarkets({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'removeMarkets',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketsToRemove: f[0],
                    })
                )
                break
            }
            case spec.functions['removeMarketsByKey'].sighash: {
                let f = normalize(spec.functions['removeMarketsByKey'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionRemoveMarketsByKey({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'removeMarketsByKey',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKeysToRemove: f[0],
                    })
                )
                break
            }
            case spec.functions['updateMarketsImplementations'].sighash: {
                let f = normalize(spec.functions['updateMarketsImplementations'].decode(item.transaction.input))
                EntityBuffer.add(
                    new FuturesMarketManagerFunctionUpdateMarketsImplementations({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'updateMarketsImplementations',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketsToUpdate: f[0],
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}

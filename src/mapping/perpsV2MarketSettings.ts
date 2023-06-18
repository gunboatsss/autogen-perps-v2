import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import {Store} from '../db'
import {EntityBuffer} from '../entityBuffer'
import {PerpsV2MarketSettingsEventCacheUpdated, PerpsV2MarketSettingsEventKeeperLiquidationFeeUpdated, PerpsV2MarketSettingsEventLiquidationBufferRatioUpdate, PerpsV2MarketSettingsEventLiquidationFeeRatioUpdated, PerpsV2MarketSettingsEventMaxKeeperFeeUpdated, PerpsV2MarketSettingsEventMinInitialMarginUpdated, PerpsV2MarketSettingsEventMinKeeperFeeUpdated, PerpsV2MarketSettingsEventOwnerChanged, PerpsV2MarketSettingsEventOwnerNominated, PerpsV2MarketSettingsEventParameterUpdated, PerpsV2MarketSettingsEventParameterUpdatedBytes32, PerpsV2MarketSettingsFunctionAcceptOwnership, PerpsV2MarketSettingsFunctionNominateNewOwner, PerpsV2MarketSettingsFunctionRebuildCache, PerpsV2MarketSettingsFunctionSetDelayedOrderConfirmWi, PerpsV2MarketSettingsFunctionSetKeeperLiquidationFee, PerpsV2MarketSettingsFunctionSetLiquidationBufferRatio, PerpsV2MarketSettingsFunctionSetLiquidationFeeRatio, PerpsV2MarketSettingsFunctionSetLiquidationPremiumMult, PerpsV2MarketSettingsFunctionSetMakerFee, PerpsV2MarketSettingsFunctionSetMakerFeeDelayedOrder, PerpsV2MarketSettingsFunctionSetMakerFeeOffchainDelay, PerpsV2MarketSettingsFunctionSetMaxDelayTimeDelta, PerpsV2MarketSettingsFunctionSetMaxFundingVelocity, PerpsV2MarketSettingsFunctionSetMaxKeeperFee, PerpsV2MarketSettingsFunctionSetMaxLeverage, PerpsV2MarketSettingsFunctionSetMaxLiquidationDelta, PerpsV2MarketSettingsFunctionSetMaxMarketValue, PerpsV2MarketSettingsFunctionSetMaxPd, PerpsV2MarketSettingsFunctionSetMinDelayTimeDelta, PerpsV2MarketSettingsFunctionSetMinInitialMargin, PerpsV2MarketSettingsFunctionSetMinKeeperFee, PerpsV2MarketSettingsFunctionSetNextPriceConfirmWindo, PerpsV2MarketSettingsFunctionSetOffchainDelayedOrderM0, PerpsV2MarketSettingsFunctionSetOffchainDelayedOrderM1, PerpsV2MarketSettingsFunctionSetOffchainMarketKey, PerpsV2MarketSettingsFunctionSetOffchainPriceDivergenc, PerpsV2MarketSettingsFunctionSetParameters, PerpsV2MarketSettingsFunctionSetSkewScale, PerpsV2MarketSettingsFunctionSetTakerFee, PerpsV2MarketSettingsFunctionSetTakerFeeDelayedOrder, PerpsV2MarketSettingsFunctionSetTakerFeeOffchainDelay} from '../model'
import * as spec from '../abi/PerpsV2MarketSettings'
import {normalize} from '../util'

export {spec}

export const address = '0x649f44cac3276557d03223dbf6395af65b11c11c'

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
                    new PerpsV2MarketSettingsEventCacheUpdated({
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
            case spec.events['KeeperLiquidationFeeUpdated'].topic: {
                let e = normalize(spec.events['KeeperLiquidationFeeUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventKeeperLiquidationFeeUpdated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'KeeperLiquidationFeeUpdated',
                        keeperFee: e[0],
                    })
                )
                break
            }
            case spec.events['LiquidationBufferRatioUpdated'].topic: {
                let e = normalize(spec.events['LiquidationBufferRatioUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventLiquidationBufferRatioUpdate({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'LiquidationBufferRatioUpdated',
                        bps: e[0],
                    })
                )
                break
            }
            case spec.events['LiquidationFeeRatioUpdated'].topic: {
                let e = normalize(spec.events['LiquidationFeeRatioUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventLiquidationFeeRatioUpdated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'LiquidationFeeRatioUpdated',
                        bps: e[0],
                    })
                )
                break
            }
            case spec.events['MaxKeeperFeeUpdated'].topic: {
                let e = normalize(spec.events['MaxKeeperFeeUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventMaxKeeperFeeUpdated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'MaxKeeperFeeUpdated',
                        sUsd: e[0],
                    })
                )
                break
            }
            case spec.events['MinInitialMarginUpdated'].topic: {
                let e = normalize(spec.events['MinInitialMarginUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventMinInitialMarginUpdated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'MinInitialMarginUpdated',
                        minMargin: e[0],
                    })
                )
                break
            }
            case spec.events['MinKeeperFeeUpdated'].topic: {
                let e = normalize(spec.events['MinKeeperFeeUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventMinKeeperFeeUpdated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'MinKeeperFeeUpdated',
                        sUsd: e[0],
                    })
                )
                break
            }
            case spec.events['OwnerChanged'].topic: {
                let e = normalize(spec.events['OwnerChanged'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventOwnerChanged({
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
                    new PerpsV2MarketSettingsEventOwnerNominated({
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
            case spec.events['ParameterUpdated'].topic: {
                let e = normalize(spec.events['ParameterUpdated'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventParameterUpdated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'ParameterUpdated',
                        marketKey: e[0],
                        parameter: e[1],
                        value: e[2],
                    })
                )
                break
            }
            case spec.events['ParameterUpdatedBytes32'].topic: {
                let e = normalize(spec.events['ParameterUpdatedBytes32'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsEventParameterUpdatedBytes32({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'ParameterUpdatedBytes32',
                        marketKey: e[0],
                        parameter: e[1],
                        value: e[2],
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
                    new PerpsV2MarketSettingsFunctionAcceptOwnership({
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
            case spec.functions['nominateNewOwner'].sighash: {
                let f = normalize(spec.functions['nominateNewOwner'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionNominateNewOwner({
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
            case spec.functions['rebuildCache'].sighash: {
                let f = normalize(spec.functions['rebuildCache'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionRebuildCache({
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
            case spec.functions['setDelayedOrderConfirmWindow'].sighash: {
                let f = normalize(spec.functions['setDelayedOrderConfirmWindow'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetDelayedOrderConfirmWi({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setDelayedOrderConfirmWindow',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        delayedOrderConfirmWindow: f[1],
                    })
                )
                break
            }
            case spec.functions['setKeeperLiquidationFee'].sighash: {
                let f = normalize(spec.functions['setKeeperLiquidationFee'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetKeeperLiquidationFee({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setKeeperLiquidationFee',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        keeperFee: f[0],
                    })
                )
                break
            }
            case spec.functions['setLiquidationBufferRatio'].sighash: {
                let f = normalize(spec.functions['setLiquidationBufferRatio'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetLiquidationBufferRatio({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setLiquidationBufferRatio',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        ratio: f[1],
                    })
                )
                break
            }
            case spec.functions['setLiquidationFeeRatio'].sighash: {
                let f = normalize(spec.functions['setLiquidationFeeRatio'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetLiquidationFeeRatio({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setLiquidationFeeRatio',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        ratio: f[0],
                    })
                )
                break
            }
            case spec.functions['setLiquidationPremiumMultiplier'].sighash: {
                let f = normalize(spec.functions['setLiquidationPremiumMultiplier'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetLiquidationPremiumMult({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setLiquidationPremiumMultiplier',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        liquidationPremiumMultiplier: f[1],
                    })
                )
                break
            }
            case spec.functions['setMakerFee'].sighash: {
                let f = normalize(spec.functions['setMakerFee'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMakerFee({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMakerFee',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        makerFee: f[1],
                    })
                )
                break
            }
            case spec.functions['setMakerFeeDelayedOrder'].sighash: {
                let f = normalize(spec.functions['setMakerFeeDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMakerFeeDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMakerFeeDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        makerFeeDelayedOrder: f[1],
                    })
                )
                break
            }
            case spec.functions['setMakerFeeOffchainDelayedOrder'].sighash: {
                let f = normalize(spec.functions['setMakerFeeOffchainDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMakerFeeOffchainDelay({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMakerFeeOffchainDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        makerFeeOffchainDelayedOrder: f[1],
                    })
                )
                break
            }
            case spec.functions['setMaxDelayTimeDelta'].sighash: {
                let f = normalize(spec.functions['setMaxDelayTimeDelta'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMaxDelayTimeDelta({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMaxDelayTimeDelta',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        maxDelayTimeDelta: f[1],
                    })
                )
                break
            }
            case spec.functions['setMaxFundingVelocity'].sighash: {
                let f = normalize(spec.functions['setMaxFundingVelocity'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMaxFundingVelocity({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMaxFundingVelocity',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        maxFundingVelocity: f[1],
                    })
                )
                break
            }
            case spec.functions['setMaxKeeperFee'].sighash: {
                let f = normalize(spec.functions['setMaxKeeperFee'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMaxKeeperFee({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMaxKeeperFee',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sUsd: f[0],
                    })
                )
                break
            }
            case spec.functions['setMaxLeverage'].sighash: {
                let f = normalize(spec.functions['setMaxLeverage'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMaxLeverage({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMaxLeverage',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        maxLeverage: f[1],
                    })
                )
                break
            }
            case spec.functions['setMaxLiquidationDelta'].sighash: {
                let f = normalize(spec.functions['setMaxLiquidationDelta'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMaxLiquidationDelta({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMaxLiquidationDelta',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        maxLiquidationDelta: f[1],
                    })
                )
                break
            }
            case spec.functions['setMaxMarketValue'].sighash: {
                let f = normalize(spec.functions['setMaxMarketValue'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMaxMarketValue({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMaxMarketValue',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        maxMarketValue: f[1],
                    })
                )
                break
            }
            case spec.functions['setMaxPD'].sighash: {
                let f = normalize(spec.functions['setMaxPD'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMaxPd({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMaxPD',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        maxPd: f[1],
                    })
                )
                break
            }
            case spec.functions['setMinDelayTimeDelta'].sighash: {
                let f = normalize(spec.functions['setMinDelayTimeDelta'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMinDelayTimeDelta({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMinDelayTimeDelta',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        minDelayTimeDelta: f[1],
                    })
                )
                break
            }
            case spec.functions['setMinInitialMargin'].sighash: {
                let f = normalize(spec.functions['setMinInitialMargin'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMinInitialMargin({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMinInitialMargin',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        minMargin: f[0],
                    })
                )
                break
            }
            case spec.functions['setMinKeeperFee'].sighash: {
                let f = normalize(spec.functions['setMinKeeperFee'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetMinKeeperFee({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setMinKeeperFee',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sUsd: f[0],
                    })
                )
                break
            }
            case spec.functions['setNextPriceConfirmWindow'].sighash: {
                let f = normalize(spec.functions['setNextPriceConfirmWindow'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetNextPriceConfirmWindo({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setNextPriceConfirmWindow',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        nextPriceConfirmWindow: f[1],
                    })
                )
                break
            }
            case spec.functions['setOffchainDelayedOrderMaxAge'].sighash: {
                let f = normalize(spec.functions['setOffchainDelayedOrderMaxAge'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetOffchainDelayedOrderM0({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setOffchainDelayedOrderMaxAge',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        offchainDelayedOrderMaxAge: f[1],
                    })
                )
                break
            }
            case spec.functions['setOffchainDelayedOrderMinAge'].sighash: {
                let f = normalize(spec.functions['setOffchainDelayedOrderMinAge'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetOffchainDelayedOrderM1({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setOffchainDelayedOrderMinAge',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        offchainDelayedOrderMinAge: f[1],
                    })
                )
                break
            }
            case spec.functions['setOffchainMarketKey'].sighash: {
                let f = normalize(spec.functions['setOffchainMarketKey'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetOffchainMarketKey({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setOffchainMarketKey',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        offchainMarketKey: f[1],
                    })
                )
                break
            }
            case spec.functions['setOffchainPriceDivergence'].sighash: {
                let f = normalize(spec.functions['setOffchainPriceDivergence'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetOffchainPriceDivergenc({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setOffchainPriceDivergence',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        offchainPriceDivergence: f[1],
                    })
                )
                break
            }
            case spec.functions['setParameters'].sighash: {
                let f = normalize(spec.functions['setParameters'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetParameters({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setParameters',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        parameters: f[1],
                    })
                )
                break
            }
            case spec.functions['setSkewScale'].sighash: {
                let f = normalize(spec.functions['setSkewScale'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetSkewScale({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setSkewScale',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        skewScale: f[1],
                    })
                )
                break
            }
            case spec.functions['setTakerFee'].sighash: {
                let f = normalize(spec.functions['setTakerFee'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetTakerFee({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setTakerFee',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        takerFee: f[1],
                    })
                )
                break
            }
            case spec.functions['setTakerFeeDelayedOrder'].sighash: {
                let f = normalize(spec.functions['setTakerFeeDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetTakerFeeDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setTakerFeeDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        takerFeeDelayedOrder: f[1],
                    })
                )
                break
            }
            case spec.functions['setTakerFeeOffchainDelayedOrder'].sighash: {
                let f = normalize(spec.functions['setTakerFeeOffchainDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketSettingsFunctionSetTakerFeeOffchainDelay({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'setTakerFeeOffchainDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marketKey: f[0],
                        takerFeeOffchainDelayedOrder: f[1],
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

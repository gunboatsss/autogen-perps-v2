import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import {Store} from '../db'
import {EntityBuffer} from '../entityBuffer'
import {PerpsV2MarketsEventDelayedOrderRemoved, PerpsV2MarketsEventDelayedOrderSubmitted, PerpsV2MarketsEventFundingRecomputed, PerpsV2MarketsEventMarginTransferred, PerpsV2MarketsEventPerpsTracking, PerpsV2MarketsEventPositionFlagged, PerpsV2MarketsEventPositionLiquidated0, PerpsV2MarketsEventPositionLiquidated1, PerpsV2MarketsEventPositionModified0, PerpsV2MarketsEventPositionModified1, PerpsV2MarketsFunctionCancelDelayedOrder, PerpsV2MarketsFunctionCancelOffchainDelayedOrder, PerpsV2MarketsFunctionClosePosition, PerpsV2MarketsFunctionClosePositionWithTracking, PerpsV2MarketsFunctionExecuteDelayedOrder, PerpsV2MarketsFunctionExecuteOffchainDelayedOrder, PerpsV2MarketsFunctionFlagPosition, PerpsV2MarketsFunctionForceLiquidatePosition, PerpsV2MarketsFunctionLiquidatePosition, PerpsV2MarketsFunctionModifyPosition, PerpsV2MarketsFunctionModifyPositionWithTracking, PerpsV2MarketsFunctionRecomputeFunding, PerpsV2MarketsFunctionSubmitCloseDelayedOrderWithTrac, PerpsV2MarketsFunctionSubmitCloseOffchainDelayedOrder, PerpsV2MarketsFunctionSubmitDelayedOrder, PerpsV2MarketsFunctionSubmitDelayedOrderWithTracking, PerpsV2MarketsFunctionSubmitOffchainDelayedOrder, PerpsV2MarketsFunctionSubmitOffchainDelayedOrderWithT, PerpsV2MarketsFunctionTransferMargin, PerpsV2MarketsFunctionWithdrawAllMargin, PositionLiquidated, PositionModified} from '../model'
import * as spec from '../abi/PerpsV2Markets'
import {normalize} from '../util'

export {spec}

export const address = '0x2b3bb4c683bfc5239b029131eef3b1d214478d93'

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
            case spec.events['DelayedOrderRemoved'].topic: {
                let e = normalize(spec.events['DelayedOrderRemoved'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketsEventDelayedOrderRemoved({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'DelayedOrderRemoved',
                        account: e[0],
                        isOffchain: e[1],
                        currentRoundId: e[2],
                        sizeDelta: e[3],
                        targetRoundId: e[4],
                        commitDeposit: e[5],
                        keeperDeposit: e[6],
                        trackingCode: e[7],
                    })
                )
                break
            }
            case spec.events['DelayedOrderSubmitted'].topic: {
                let e = normalize(spec.events['DelayedOrderSubmitted'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketsEventDelayedOrderSubmitted({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'DelayedOrderSubmitted',
                        account: e[0],
                        isOffchain: e[1],
                        sizeDelta: e[2],
                        targetRoundId: e[3],
                        intentionTime: e[4],
                        executableAtTime: e[5],
                        commitDeposit: e[6],
                        keeperDeposit: e[7],
                        trackingCode: e[8],
                    })
                )
                break
            }
            case spec.events['FundingRecomputed'].topic: {
                let e = normalize(spec.events['FundingRecomputed'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketsEventFundingRecomputed({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'FundingRecomputed',
                        funding: e[0],
                        fundingRate: e[1],
                        index: e[2],
                        timestamp: e[3],
                    })
                )
                break
            }
            case spec.events['MarginTransferred'].topic: {
                let e = normalize(spec.events['MarginTransferred'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketsEventMarginTransferred({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'MarginTransferred',
                        account: e[0],
                        marginDelta: e[1],
                    })
                )
                break
            }
            case spec.events['PerpsTracking'].topic: {
                let e = normalize(spec.events['PerpsTracking'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketsEventPerpsTracking({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PerpsTracking',
                        trackingCode: e[0],
                        baseAsset: e[1],
                        marketKey: e[2],
                        sizeDelta: e[3],
                        fee: e[4],
                    })
                )
                break
            }
            case spec.events['PositionFlagged'].topic: {
                let e = normalize(spec.events['PositionFlagged'].decode(item.evmLog))
                EntityBuffer.add(
                    new PerpsV2MarketsEventPositionFlagged({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionFlagged',
                        id0: e[0],
                        account: e[1],
                        flagger: e[2],
                        timestamp: e[3],
                    })
                )
                break
            }
            case spec.events['PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)'].topic: {
                let e = normalize(spec.events['PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)'].decode(item.evmLog))
                EntityBuffer.add(
                    new PositionLiquidated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)',
                        id0: e[0],
                        account: e[1],
                        liquidator: e[2],
                        size: e[3],
                        price: e[4],
                        flaggerFee: e[5],
                        liquidatorFee: e[6],
                        stakersFee: e[7],
                    })
                )
                EntityBuffer.add(
                    new PerpsV2MarketsEventPositionLiquidated0({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)',
                        id0: e[0],
                        account: e[1],
                        liquidator: e[2],
                        size: e[3],
                        price: e[4],
                        flaggerFee: e[5],
                        liquidatorFee: e[6],
                        stakersFee: e[7],
                    })
                )
                break
            }
            case spec.events['PositionLiquidated(uint256,address,address,int256,uint256,uint256)'].topic: {
                let e = normalize(spec.events['PositionLiquidated(uint256,address,address,int256,uint256,uint256)'].decode(item.evmLog))
                EntityBuffer.add(
                    new PositionLiquidated({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionLiquidated(uint256,address,address,int256,uint256,uint256)',
                        id0: e[0],
                        account: e[1],
                        liquidator: e[2],
                        size: e[3],
                        price: e[4],
                        flaggerFee: BigInt(0),
                        liquidatorFee: e[5],
                        stakersFee: BigInt(0) //TODO: GET ACTUAL SUSD TO FEE POOL
                    })
                )
                EntityBuffer.add(
                    new PerpsV2MarketsEventPositionLiquidated1({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionLiquidated(uint256,address,address,int256,uint256,uint256)',
                        id0: e[0],
                        account: e[1],
                        liquidator: e[2],
                        size: e[3],
                        price: e[4],
                        fee: e[5],
                    })
                )
                break
            }
            case spec.events['PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)'].topic: {
                let e = normalize(spec.events['PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)'].decode(item.evmLog))
                EntityBuffer.add(
                    new PositionModified({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)',
                        id0: e[0],
                        account: e[1],
                        margin: e[2],
                        size: e[3],
                        tradeSize: e[4],
                        lastPrice: e[5],
                        fundingIndex: e[6],
                        fee: e[7],
                        skew: e[8],
                    })
                )
                EntityBuffer.add(
                    new PerpsV2MarketsEventPositionModified0({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)',
                        id0: e[0],
                        account: e[1],
                        margin: e[2],
                        size: e[3],
                        tradeSize: e[4],
                        lastPrice: e[5],
                        fundingIndex: e[6],
                        fee: e[7],
                        skew: e[8],
                    })
                )
                break
            }
            case spec.events['PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)'].topic: {
                let e = normalize(spec.events['PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)'].decode(item.evmLog))
                EntityBuffer.add(
                    new PositionModified({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)',
                        id0: e[0],
                        account: e[1],
                        margin: e[2],
                        size: e[3],
                        tradeSize: e[4],
                        lastPrice: e[5],
                        fundingIndex: e[6],
                        fee: e[7],
                    })
                )
                EntityBuffer.add(
                    new PerpsV2MarketsEventPositionModified1({
                        id: item.evmLog.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        eventName: 'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)',
                        id0: e[0],
                        account: e[1],
                        margin: e[2],
                        size: e[3],
                        tradeSize: e[4],
                        lastPrice: e[5],
                        fundingIndex: e[6],
                        fee: e[7],
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
            case spec.functions['cancelDelayedOrder'].sighash: {
                let f = normalize(spec.functions['cancelDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionCancelDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'cancelDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                    })
                )
                break
            }
            case spec.functions['cancelOffchainDelayedOrder'].sighash: {
                let f = normalize(spec.functions['cancelOffchainDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionCancelOffchainDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'cancelOffchainDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                    })
                )
                break
            }
            case spec.functions['closePosition'].sighash: {
                let f = normalize(spec.functions['closePosition'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionClosePosition({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'closePosition',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        desiredFillPrice: f[0],
                    })
                )
                break
            }
            case spec.functions['closePositionWithTracking'].sighash: {
                let f = normalize(spec.functions['closePositionWithTracking'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionClosePositionWithTracking({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'closePositionWithTracking',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        desiredFillPrice: f[0],
                        trackingCode: f[1],
                    })
                )
                break
            }
            case spec.functions['executeDelayedOrder'].sighash: {
                let f = normalize(spec.functions['executeDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionExecuteDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'executeDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                    })
                )
                break
            }
            case spec.functions['executeOffchainDelayedOrder'].sighash: {
                let f = normalize(spec.functions['executeOffchainDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionExecuteOffchainDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'executeOffchainDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                        priceUpdateData: f[1],
                    })
                )
                break
            }
            case spec.functions['flagPosition'].sighash: {
                let f = normalize(spec.functions['flagPosition'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionFlagPosition({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'flagPosition',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                    })
                )
                break
            }
            case spec.functions['forceLiquidatePosition'].sighash: {
                let f = normalize(spec.functions['forceLiquidatePosition'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionForceLiquidatePosition({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'forceLiquidatePosition',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                    })
                )
                break
            }
            case spec.functions['liquidatePosition'].sighash: {
                let f = normalize(spec.functions['liquidatePosition'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionLiquidatePosition({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'liquidatePosition',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        account: f[0],
                    })
                )
                break
            }
            case spec.functions['modifyPosition'].sighash: {
                let f = normalize(spec.functions['modifyPosition'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionModifyPosition({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'modifyPosition',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sizeDelta: f[0],
                        desiredFillPrice: f[1],
                    })
                )
                break
            }
            case spec.functions['modifyPositionWithTracking'].sighash: {
                let f = normalize(spec.functions['modifyPositionWithTracking'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionModifyPositionWithTracking({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'modifyPositionWithTracking',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sizeDelta: f[0],
                        desiredFillPrice: f[1],
                        trackingCode: f[2],
                    })
                )
                break
            }
            case spec.functions['recomputeFunding'].sighash: {
                let f = normalize(spec.functions['recomputeFunding'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionRecomputeFunding({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'recomputeFunding',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                    })
                )
                break
            }
            case spec.functions['submitCloseDelayedOrderWithTracking'].sighash: {
                let f = normalize(spec.functions['submitCloseDelayedOrderWithTracking'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionSubmitCloseDelayedOrderWithTrac({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'submitCloseDelayedOrderWithTracking',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        desiredTimeDelta: f[0],
                        desiredFillPrice: f[1],
                        trackingCode: f[2],
                    })
                )
                break
            }
            case spec.functions['submitCloseOffchainDelayedOrderWithTracking'].sighash: {
                let f = normalize(spec.functions['submitCloseOffchainDelayedOrderWithTracking'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionSubmitCloseOffchainDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'submitCloseOffchainDelayedOrderWithTracking',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        desiredFillPrice: f[0],
                        trackingCode: f[1],
                    })
                )
                break
            }
            case spec.functions['submitDelayedOrder'].sighash: {
                let f = normalize(spec.functions['submitDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionSubmitDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'submitDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sizeDelta: f[0],
                        desiredTimeDelta: f[1],
                        desiredFillPrice: f[2],
                    })
                )
                break
            }
            case spec.functions['submitDelayedOrderWithTracking'].sighash: {
                let f = normalize(spec.functions['submitDelayedOrderWithTracking'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionSubmitDelayedOrderWithTracking({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'submitDelayedOrderWithTracking',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sizeDelta: f[0],
                        desiredTimeDelta: f[1],
                        desiredFillPrice: f[2],
                        trackingCode: f[3],
                    })
                )
                break
            }
            case spec.functions['submitOffchainDelayedOrder'].sighash: {
                let f = normalize(spec.functions['submitOffchainDelayedOrder'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionSubmitOffchainDelayedOrder({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'submitOffchainDelayedOrder',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sizeDelta: f[0],
                        desiredFillPrice: f[1],
                    })
                )
                break
            }
            case spec.functions['submitOffchainDelayedOrderWithTracking'].sighash: {
                let f = normalize(spec.functions['submitOffchainDelayedOrderWithTracking'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionSubmitOffchainDelayedOrderWithT({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'submitOffchainDelayedOrderWithTracking',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        sizeDelta: f[0],
                        desiredFillPrice: f[1],
                        trackingCode: f[2],
                    })
                )
                break
            }
            case spec.functions['transferMargin'].sighash: {
                let f = normalize(spec.functions['transferMargin'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionTransferMargin({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'transferMargin',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
                        marginDelta: f[0],
                    })
                )
                break
            }
            case spec.functions['withdrawAllMargin'].sighash: {
                let f = normalize(spec.functions['withdrawAllMargin'].decode(item.transaction.input))
                EntityBuffer.add(
                    new PerpsV2MarketsFunctionWithdrawAllMargin({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        transactionHash: item.transaction.hash,
                        contract: item.address,
                        functionName: 'withdrawAllMargin',
                        functionValue: item.transaction.value,
                        functionSuccess: Boolean(item.transaction.status),
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

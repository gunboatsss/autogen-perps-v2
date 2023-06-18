import {EvmBatchProcessor, BatchHandlerContext} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'
import {perpsV2Markets, perpsV2MarketSettings, FuturesMarketManager} from './mapping'
import {db, Store} from './db'
import {EntityBuffer} from './entityBuffer'
import {Block, Transaction} from './model'

const processor = new EvmBatchProcessor()
processor.setDataSource({
    archive: lookupArchive('optimism-mainnet', {type: 'EVM'}),
})
const perpsV2MarketSettingsAddresses = [
    "0xd442Dc2Ac1f3cA1C86C8329246e47Ca0C91D0471",
    "0x09793Aad1518B8d8CC72FDd356479E3CBa7B4Ad1",
    "0x649F44CAC3276557D03223Dbf6395Af65b11c11c"
]

processor.setBlockRange(
    {
        from: 52456606
    }
)

processor.addLog([], {
    filter: [
        [
            perpsV2Markets.spec.events['DelayedOrderRemoved'].topic,
            perpsV2Markets.spec.events['DelayedOrderSubmitted'].topic,
            perpsV2Markets.spec.events['FundingRecomputed'].topic,
            perpsV2Markets.spec.events['MarginTransferred'].topic,
            perpsV2Markets.spec.events['PerpsTracking'].topic,
            perpsV2Markets.spec.events['PositionFlagged'].topic,
            perpsV2Markets.spec.events['PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)'].topic,
            perpsV2Markets.spec.events['PositionLiquidated(uint256,address,address,int256,uint256,uint256)'].topic,
            perpsV2Markets.spec.events['PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)'].topic,
            perpsV2Markets.spec.events['PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
            from: true,
        },
    } as const,
})
processor.addTransaction([], {
    sighash: [
        perpsV2Markets.spec.functions['cancelDelayedOrder'].sighash,
        perpsV2Markets.spec.functions['cancelOffchainDelayedOrder'].sighash,
        perpsV2Markets.spec.functions['closePosition'].sighash,
        perpsV2Markets.spec.functions['closePositionWithTracking'].sighash,
        perpsV2Markets.spec.functions['executeDelayedOrder'].sighash,
        perpsV2Markets.spec.functions['executeOffchainDelayedOrder'].sighash,
        perpsV2Markets.spec.functions['flagPosition'].sighash,
        perpsV2Markets.spec.functions['forceLiquidatePosition'].sighash,
        perpsV2Markets.spec.functions['liquidatePosition'].sighash,
        perpsV2Markets.spec.functions['modifyPosition'].sighash,
        perpsV2Markets.spec.functions['modifyPositionWithTracking'].sighash,
        perpsV2Markets.spec.functions['recomputeFunding'].sighash,
        perpsV2Markets.spec.functions['submitCloseDelayedOrderWithTracking'].sighash,
        perpsV2Markets.spec.functions['submitCloseOffchainDelayedOrderWithTracking'].sighash,
        perpsV2Markets.spec.functions['submitDelayedOrder'].sighash,
        perpsV2Markets.spec.functions['submitDelayedOrderWithTracking'].sighash,
        perpsV2Markets.spec.functions['submitOffchainDelayedOrder'].sighash,
        perpsV2Markets.spec.functions['submitOffchainDelayedOrderWithTracking'].sighash,
        perpsV2Markets.spec.functions['transferMargin'].sighash,
        perpsV2Markets.spec.functions['withdrawAllMargin'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
            from: true,
            value: true,
        },
    } as const,
})
processor.addLog(perpsV2MarketSettingsAddresses, {
    filter: [
        [
            perpsV2MarketSettings.spec.events['CacheUpdated'].topic,
            perpsV2MarketSettings.spec.events['KeeperLiquidationFeeUpdated'].topic,
            perpsV2MarketSettings.spec.events['LiquidationBufferRatioUpdated'].topic,
            perpsV2MarketSettings.spec.events['LiquidationFeeRatioUpdated'].topic,
            perpsV2MarketSettings.spec.events['MaxKeeperFeeUpdated'].topic,
            perpsV2MarketSettings.spec.events['MinInitialMarginUpdated'].topic,
            perpsV2MarketSettings.spec.events['MinKeeperFeeUpdated'].topic,
            perpsV2MarketSettings.spec.events['OwnerChanged'].topic,
            perpsV2MarketSettings.spec.events['OwnerNominated'].topic,
            perpsV2MarketSettings.spec.events['ParameterUpdated'].topic,
            perpsV2MarketSettings.spec.events['ParameterUpdatedBytes32'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
            from: true,
        },
    } as const,
})
processor.addTransaction(perpsV2MarketSettingsAddresses, {
    sighash: [
        perpsV2MarketSettings.spec.functions['acceptOwnership'].sighash,
        perpsV2MarketSettings.spec.functions['nominateNewOwner'].sighash,
        perpsV2MarketSettings.spec.functions['rebuildCache'].sighash,
        perpsV2MarketSettings.spec.functions['setDelayedOrderConfirmWindow'].sighash,
        perpsV2MarketSettings.spec.functions['setKeeperLiquidationFee'].sighash,
        perpsV2MarketSettings.spec.functions['setLiquidationBufferRatio'].sighash,
        perpsV2MarketSettings.spec.functions['setLiquidationFeeRatio'].sighash,
        perpsV2MarketSettings.spec.functions['setLiquidationPremiumMultiplier'].sighash,
        perpsV2MarketSettings.spec.functions['setMakerFee'].sighash,
        perpsV2MarketSettings.spec.functions['setMakerFeeDelayedOrder'].sighash,
        perpsV2MarketSettings.spec.functions['setMakerFeeOffchainDelayedOrder'].sighash,
        perpsV2MarketSettings.spec.functions['setMaxDelayTimeDelta'].sighash,
        perpsV2MarketSettings.spec.functions['setMaxFundingVelocity'].sighash,
        perpsV2MarketSettings.spec.functions['setMaxKeeperFee'].sighash,
        perpsV2MarketSettings.spec.functions['setMaxLeverage'].sighash,
        perpsV2MarketSettings.spec.functions['setMaxLiquidationDelta'].sighash,
        perpsV2MarketSettings.spec.functions['setMaxMarketValue'].sighash,
        perpsV2MarketSettings.spec.functions['setMaxPD'].sighash,
        perpsV2MarketSettings.spec.functions['setMinDelayTimeDelta'].sighash,
        perpsV2MarketSettings.spec.functions['setMinInitialMargin'].sighash,
        perpsV2MarketSettings.spec.functions['setMinKeeperFee'].sighash,
        perpsV2MarketSettings.spec.functions['setNextPriceConfirmWindow'].sighash,
        perpsV2MarketSettings.spec.functions['setOffchainDelayedOrderMaxAge'].sighash,
        perpsV2MarketSettings.spec.functions['setOffchainDelayedOrderMinAge'].sighash,
        perpsV2MarketSettings.spec.functions['setOffchainMarketKey'].sighash,
        perpsV2MarketSettings.spec.functions['setOffchainPriceDivergence'].sighash,
        perpsV2MarketSettings.spec.functions['setParameters'].sighash,
        perpsV2MarketSettings.spec.functions['setSkewScale'].sighash,
        perpsV2MarketSettings.spec.functions['setTakerFee'].sighash,
        perpsV2MarketSettings.spec.functions['setTakerFeeDelayedOrder'].sighash,
        perpsV2MarketSettings.spec.functions['setTakerFeeOffchainDelayedOrder'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
            from: true,
            value: true,
        },
    } as const,
})
processor.addLog(FuturesMarketManager.address, {
    filter: [
        [
            FuturesMarketManager.spec.events['CacheUpdated'].topic,
            FuturesMarketManager.spec.events['EndorsedAddressAdded'].topic,
            FuturesMarketManager.spec.events['EndorsedAddressRemoved'].topic,
            FuturesMarketManager.spec.events['MarketAdded'].topic,
            FuturesMarketManager.spec.events['MarketRemoved'].topic,
            FuturesMarketManager.spec.events['OwnerChanged'].topic,
            FuturesMarketManager.spec.events['OwnerNominated'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
            from: true,
        },
    } as const,
})
processor.addTransaction(FuturesMarketManager.address, {
    sighash: [
        FuturesMarketManager.spec.functions['acceptOwnership'].sighash,
        FuturesMarketManager.spec.functions['addEndorsedAddresses'].sighash,
        FuturesMarketManager.spec.functions['addMarkets'].sighash,
        FuturesMarketManager.spec.functions['addProxiedMarkets'].sighash,
        FuturesMarketManager.spec.functions['burnSUSD'].sighash,
        FuturesMarketManager.spec.functions['issueSUSD'].sighash,
        FuturesMarketManager.spec.functions['nominateNewOwner'].sighash,
        FuturesMarketManager.spec.functions['payFee(uint256,bytes32)'].sighash,
        FuturesMarketManager.spec.functions['payFee(uint256)'].sighash,
        FuturesMarketManager.spec.functions['rebuildCache'].sighash,
        FuturesMarketManager.spec.functions['removeEndorsedAddresses'].sighash,
        FuturesMarketManager.spec.functions['removeMarkets'].sighash,
        FuturesMarketManager.spec.functions['removeMarketsByKey'].sighash,
        FuturesMarketManager.spec.functions['updateMarketsImplementations'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
            from: true,
            value: true,
        },
    } as const,
})

processor.run(db, async (ctx: BatchHandlerContext<Store, any>) => {
    for (let {header: block, items} of ctx.blocks) {
        EntityBuffer.add(
            new Block({
                id: block.id,
                number: block.height,
                timestamp: new Date(block.timestamp),
            })
        )
        let lastTxHash: string | undefined
        for (let item of items) {
            if (item.transaction.hash != lastTxHash) {
                lastTxHash = item.transaction.hash
                EntityBuffer.add(
                    new Transaction({
                        id: item.transaction.id,
                        blockNumber: block.height,
                        blockTimestamp: new Date(block.timestamp),
                        hash: item.transaction.hash,
                        to: item.transaction.to,
                        from: item.transaction.from,
                        success: item.transaction.success,
                    })
                )
            }

            if (item.address === perpsV2Markets.address) {
                perpsV2Markets.parse(ctx, block, item)
            }

            if (item.address === perpsV2MarketSettings.address) {
                perpsV2MarketSettings.parse(ctx, block, item)
            }

            if (item.address === FuturesMarketManager.address) {
                FuturesMarketManager.parse(ctx, block, item)
            }
        }
    }
    for (let entities of EntityBuffer.flush()) {
        await ctx.store.insert(entities)
    }
})

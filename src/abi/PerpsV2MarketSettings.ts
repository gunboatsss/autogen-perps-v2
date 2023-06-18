import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './PerpsV2MarketSettings.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    CacheUpdated: new LogEvent<([name: string, destination: string] & {name: string, destination: string})>(
        abi, '0x88a93678a3692f6789d9546fc621bf7234b101ddb7d4fe479455112831b8aa68'
    ),
    KeeperLiquidationFeeUpdated: new LogEvent<([keeperFee: ethers.BigNumber] & {keeperFee: ethers.BigNumber})>(
        abi, '0x6b3f66ae1ca3399d67740353b4871b7b1a7bd353c6d98a441be97133ec1d4933'
    ),
    LiquidationBufferRatioUpdated: new LogEvent<([bps: ethers.BigNumber] & {bps: ethers.BigNumber})>(
        abi, '0x733333f0452c918352a0a3b74e6e95d7682ef3001a6b070df09cc6e6c27a6376'
    ),
    LiquidationFeeRatioUpdated: new LogEvent<([bps: ethers.BigNumber] & {bps: ethers.BigNumber})>(
        abi, '0xc20b071f9997836faebec2ea68df94cb8cd01c8721f2c0b973443d8316eaa070'
    ),
    MaxKeeperFeeUpdated: new LogEvent<([sUSD: ethers.BigNumber] & {sUSD: ethers.BigNumber})>(
        abi, '0x5f76c6c4116194987a36d1002399cf6129c9623bb38b557dd907e10515071a52'
    ),
    MinInitialMarginUpdated: new LogEvent<([minMargin: ethers.BigNumber] & {minMargin: ethers.BigNumber})>(
        abi, '0xf5958b2492f4eeb807d26adb1e05d927402a2b27ec6b67e98a76def8bf9fbb99'
    ),
    MinKeeperFeeUpdated: new LogEvent<([sUSD: ethers.BigNumber] & {sUSD: ethers.BigNumber})>(
        abi, '0x19aa707c9ee917e97ea0ac9146e39c123d4bd88e1f2cd719d32a8a54fe409902'
    ),
    OwnerChanged: new LogEvent<([oldOwner: string, newOwner: string] & {oldOwner: string, newOwner: string})>(
        abi, '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c'
    ),
    OwnerNominated: new LogEvent<([newOwner: string] & {newOwner: string})>(
        abi, '0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22'
    ),
    ParameterUpdated: new LogEvent<([marketKey: string, parameter: string, value: ethers.BigNumber] & {marketKey: string, parameter: string, value: ethers.BigNumber})>(
        abi, '0xb1e024a1aed9a1f08ef2258cedd5c544e48dcb5befc1ec2aa0ff9ea60997d14f'
    ),
    ParameterUpdatedBytes32: new LogEvent<([marketKey: string, parameter: string, value: string] & {marketKey: string, parameter: string, value: string})>(
        abi, '0x2b2171bdafe7d860cca6c1336be5f1761e7e1a17e78fbd0ed99295eee8e42dc5'
    ),
}

export const functions = {
    CONTRACT_NAME: new Func<[], {}, string>(
        abi, '0x614d08f8'
    ),
    acceptOwnership: new Func<[], {}, []>(
        abi, '0x79ba5097'
    ),
    delayedOrderConfirmWindow: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x58da2168'
    ),
    isResolverCached: new Func<[], {}, boolean>(
        abi, '0x2af64bd3'
    ),
    keeperLiquidationFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0x2e94e9cf'
    ),
    liquidationBufferRatio: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xfa92f590'
    ),
    liquidationFeeRatio: new Func<[], {}, ethers.BigNumber>(
        abi, '0xcfe71103'
    ),
    liquidationPremiumMultiplier: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x2814affe'
    ),
    makerFee: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x3da61cf8'
    ),
    makerFeeDelayedOrder: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x3df761f9'
    ),
    makerFeeOffchainDelayedOrder: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xe7de75bb'
    ),
    maxDelayTimeDelta: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xc460ffd8'
    ),
    maxFundingVelocity: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xa3bc0db0'
    ),
    maxKeeperFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0xacdde53e'
    ),
    maxLeverage: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x0730bf53'
    ),
    maxLiquidationDelta: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x31f90c96'
    ),
    maxMarketValue: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xd9b102e2'
    ),
    maxPD: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x409a071a'
    ),
    minDelayTimeDelta: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xf6013335'
    ),
    minInitialMargin: new Func<[], {}, ethers.BigNumber>(
        abi, '0x8f20f2ea'
    ),
    minKeeperFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0x13995502'
    ),
    nextPriceConfirmWindow: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x96129d2b'
    ),
    nominateNewOwner: new Func<[_owner: string], {_owner: string}, []>(
        abi, '0x1627540c'
    ),
    nominatedOwner: new Func<[], {}, string>(
        abi, '0x53a47bb7'
    ),
    offchainDelayedOrderMaxAge: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xd28fe412'
    ),
    offchainDelayedOrderMinAge: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x75537596'
    ),
    offchainMarketKey: new Func<[_marketKey: string], {_marketKey: string}, string>(
        abi, '0x01a79ac3'
    ),
    offchainPriceDivergence: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x31f29d6b'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    parameters: new Func<[_marketKey: string], {_marketKey: string}, ([takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber] & {takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber})>(
        abi, '0x02506804'
    ),
    rebuildCache: new Func<[], {}, []>(
        abi, '0x74185360'
    ),
    resolver: new Func<[], {}, string>(
        abi, '0x04f3bcec'
    ),
    resolverAddressesRequired: new Func<[], {}, Array<string>>(
        abi, '0x899ffef4'
    ),
    setDelayedOrderConfirmWindow: new Func<[_marketKey: string, _delayedOrderConfirmWindow: ethers.BigNumber], {_marketKey: string, _delayedOrderConfirmWindow: ethers.BigNumber}, []>(
        abi, '0x183180b3'
    ),
    setKeeperLiquidationFee: new Func<[_keeperFee: ethers.BigNumber], {_keeperFee: ethers.BigNumber}, []>(
        abi, '0x8fb4855e'
    ),
    setLiquidationBufferRatio: new Func<[_marketKey: string, _ratio: ethers.BigNumber], {_marketKey: string, _ratio: ethers.BigNumber}, []>(
        abi, '0xae7dff48'
    ),
    setLiquidationFeeRatio: new Func<[_ratio: ethers.BigNumber], {_ratio: ethers.BigNumber}, []>(
        abi, '0xa9ec1416'
    ),
    setLiquidationPremiumMultiplier: new Func<[_marketKey: string, _liquidationPremiumMultiplier: ethers.BigNumber], {_marketKey: string, _liquidationPremiumMultiplier: ethers.BigNumber}, []>(
        abi, '0xc3b8b582'
    ),
    setMakerFee: new Func<[_marketKey: string, _makerFee: ethers.BigNumber], {_marketKey: string, _makerFee: ethers.BigNumber}, []>(
        abi, '0x0b1ccf80'
    ),
    setMakerFeeDelayedOrder: new Func<[_marketKey: string, _makerFeeDelayedOrder: ethers.BigNumber], {_marketKey: string, _makerFeeDelayedOrder: ethers.BigNumber}, []>(
        abi, '0xf6169923'
    ),
    setMakerFeeOffchainDelayedOrder: new Func<[_marketKey: string, _makerFeeOffchainDelayedOrder: ethers.BigNumber], {_marketKey: string, _makerFeeOffchainDelayedOrder: ethers.BigNumber}, []>(
        abi, '0xc6174a98'
    ),
    setMaxDelayTimeDelta: new Func<[_marketKey: string, _maxDelayTimeDelta: ethers.BigNumber], {_marketKey: string, _maxDelayTimeDelta: ethers.BigNumber}, []>(
        abi, '0x9c02908b'
    ),
    setMaxFundingVelocity: new Func<[_marketKey: string, _maxFundingVelocity: ethers.BigNumber], {_marketKey: string, _maxFundingVelocity: ethers.BigNumber}, []>(
        abi, '0x798133bd'
    ),
    setMaxKeeperFee: new Func<[_sUSD: ethers.BigNumber], {_sUSD: ethers.BigNumber}, []>(
        abi, '0xbec07329'
    ),
    setMaxLeverage: new Func<[_marketKey: string, _maxLeverage: ethers.BigNumber], {_marketKey: string, _maxLeverage: ethers.BigNumber}, []>(
        abi, '0xa61fd348'
    ),
    setMaxLiquidationDelta: new Func<[_marketKey: string, _maxLiquidationDelta: ethers.BigNumber], {_marketKey: string, _maxLiquidationDelta: ethers.BigNumber}, []>(
        abi, '0x153ee875'
    ),
    setMaxMarketValue: new Func<[_marketKey: string, _maxMarketValue: ethers.BigNumber], {_marketKey: string, _maxMarketValue: ethers.BigNumber}, []>(
        abi, '0x633026dd'
    ),
    setMaxPD: new Func<[_marketKey: string, _maxPD: ethers.BigNumber], {_marketKey: string, _maxPD: ethers.BigNumber}, []>(
        abi, '0xa53d5ba0'
    ),
    setMinDelayTimeDelta: new Func<[_marketKey: string, _minDelayTimeDelta: ethers.BigNumber], {_marketKey: string, _minDelayTimeDelta: ethers.BigNumber}, []>(
        abi, '0x1a9294b9'
    ),
    setMinInitialMargin: new Func<[_minMargin: ethers.BigNumber], {_minMargin: ethers.BigNumber}, []>(
        abi, '0x20edcdb8'
    ),
    setMinKeeperFee: new Func<[_sUSD: ethers.BigNumber], {_sUSD: ethers.BigNumber}, []>(
        abi, '0x333ef253'
    ),
    setNextPriceConfirmWindow: new Func<[_marketKey: string, _nextPriceConfirmWindow: ethers.BigNumber], {_marketKey: string, _nextPriceConfirmWindow: ethers.BigNumber}, []>(
        abi, '0x43b3c004'
    ),
    setOffchainDelayedOrderMaxAge: new Func<[_marketKey: string, _offchainDelayedOrderMaxAge: ethers.BigNumber], {_marketKey: string, _offchainDelayedOrderMaxAge: ethers.BigNumber}, []>(
        abi, '0x95556494'
    ),
    setOffchainDelayedOrderMinAge: new Func<[_marketKey: string, _offchainDelayedOrderMinAge: ethers.BigNumber], {_marketKey: string, _offchainDelayedOrderMinAge: ethers.BigNumber}, []>(
        abi, '0x61fba682'
    ),
    setOffchainMarketKey: new Func<[_marketKey: string, _offchainMarketKey: string], {_marketKey: string, _offchainMarketKey: string}, []>(
        abi, '0x6f459050'
    ),
    setOffchainPriceDivergence: new Func<[_marketKey: string, _offchainPriceDivergence: ethers.BigNumber], {_marketKey: string, _offchainPriceDivergence: ethers.BigNumber}, []>(
        abi, '0x36320f49'
    ),
    setParameters: new Func<[_marketKey: string, _parameters: ([takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber] & {takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber})], {_marketKey: string, _parameters: ([takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber] & {takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber})}, []>(
        abi, '0x43535528'
    ),
    setSkewScale: new Func<[_marketKey: string, _skewScale: ethers.BigNumber], {_marketKey: string, _skewScale: ethers.BigNumber}, []>(
        abi, '0x20f937f6'
    ),
    setTakerFee: new Func<[_marketKey: string, _takerFee: ethers.BigNumber], {_marketKey: string, _takerFee: ethers.BigNumber}, []>(
        abi, '0x381bc187'
    ),
    setTakerFeeDelayedOrder: new Func<[_marketKey: string, _takerFeeDelayedOrder: ethers.BigNumber], {_marketKey: string, _takerFeeDelayedOrder: ethers.BigNumber}, []>(
        abi, '0x3d570bff'
    ),
    setTakerFeeOffchainDelayedOrder: new Func<[_marketKey: string, _takerFeeOffchainDelayedOrder: ethers.BigNumber], {_marketKey: string, _takerFeeOffchainDelayedOrder: ethers.BigNumber}, []>(
        abi, '0xaf4fe406'
    ),
    skewScale: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xb9f4e160'
    ),
    takerFee: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x8c3556e9'
    ),
    takerFeeDelayedOrder: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0xb21a7e86'
    ),
    takerFeeOffchainDelayedOrder: new Func<[_marketKey: string], {_marketKey: string}, ethers.BigNumber>(
        abi, '0x9a33f109'
    ),
}

export class Contract extends ContractBase {

    CONTRACT_NAME(): Promise<string> {
        return this.eth_call(functions.CONTRACT_NAME, [])
    }

    delayedOrderConfirmWindow(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.delayedOrderConfirmWindow, [_marketKey])
    }

    isResolverCached(): Promise<boolean> {
        return this.eth_call(functions.isResolverCached, [])
    }

    keeperLiquidationFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.keeperLiquidationFee, [])
    }

    liquidationBufferRatio(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.liquidationBufferRatio, [_marketKey])
    }

    liquidationFeeRatio(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.liquidationFeeRatio, [])
    }

    liquidationPremiumMultiplier(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.liquidationPremiumMultiplier, [_marketKey])
    }

    makerFee(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.makerFee, [_marketKey])
    }

    makerFeeDelayedOrder(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.makerFeeDelayedOrder, [_marketKey])
    }

    makerFeeOffchainDelayedOrder(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.makerFeeOffchainDelayedOrder, [_marketKey])
    }

    maxDelayTimeDelta(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxDelayTimeDelta, [_marketKey])
    }

    maxFundingVelocity(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxFundingVelocity, [_marketKey])
    }

    maxKeeperFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxKeeperFee, [])
    }

    maxLeverage(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxLeverage, [_marketKey])
    }

    maxLiquidationDelta(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxLiquidationDelta, [_marketKey])
    }

    maxMarketValue(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxMarketValue, [_marketKey])
    }

    maxPD(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxPD, [_marketKey])
    }

    minDelayTimeDelta(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.minDelayTimeDelta, [_marketKey])
    }

    minInitialMargin(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.minInitialMargin, [])
    }

    minKeeperFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.minKeeperFee, [])
    }

    nextPriceConfirmWindow(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nextPriceConfirmWindow, [_marketKey])
    }

    nominatedOwner(): Promise<string> {
        return this.eth_call(functions.nominatedOwner, [])
    }

    offchainDelayedOrderMaxAge(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.offchainDelayedOrderMaxAge, [_marketKey])
    }

    offchainDelayedOrderMinAge(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.offchainDelayedOrderMinAge, [_marketKey])
    }

    offchainMarketKey(_marketKey: string): Promise<string> {
        return this.eth_call(functions.offchainMarketKey, [_marketKey])
    }

    offchainPriceDivergence(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.offchainPriceDivergence, [_marketKey])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    parameters(_marketKey: string): Promise<([takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber] & {takerFee: ethers.BigNumber, makerFee: ethers.BigNumber, takerFeeDelayedOrder: ethers.BigNumber, makerFeeDelayedOrder: ethers.BigNumber, takerFeeOffchainDelayedOrder: ethers.BigNumber, makerFeeOffchainDelayedOrder: ethers.BigNumber, maxLeverage: ethers.BigNumber, maxMarketValue: ethers.BigNumber, maxFundingVelocity: ethers.BigNumber, skewScale: ethers.BigNumber, nextPriceConfirmWindow: ethers.BigNumber, delayedOrderConfirmWindow: ethers.BigNumber, minDelayTimeDelta: ethers.BigNumber, maxDelayTimeDelta: ethers.BigNumber, offchainDelayedOrderMinAge: ethers.BigNumber, offchainDelayedOrderMaxAge: ethers.BigNumber, offchainMarketKey: string, offchainPriceDivergence: ethers.BigNumber, liquidationPremiumMultiplier: ethers.BigNumber, liquidationBufferRatio: ethers.BigNumber, maxLiquidationDelta: ethers.BigNumber, maxPD: ethers.BigNumber})> {
        return this.eth_call(functions.parameters, [_marketKey])
    }

    resolver(): Promise<string> {
        return this.eth_call(functions.resolver, [])
    }

    resolverAddressesRequired(): Promise<Array<string>> {
        return this.eth_call(functions.resolverAddressesRequired, [])
    }

    skewScale(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.skewScale, [_marketKey])
    }

    takerFee(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.takerFee, [_marketKey])
    }

    takerFeeDelayedOrder(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.takerFeeDelayedOrder, [_marketKey])
    }

    takerFeeOffchainDelayedOrder(_marketKey: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.takerFeeOffchainDelayedOrder, [_marketKey])
    }
}

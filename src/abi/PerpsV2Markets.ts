import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './PerpsV2Markets.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    DelayedOrderRemoved: new LogEvent<([account: string, isOffchain: boolean, currentRoundId: ethers.BigNumber, sizeDelta: ethers.BigNumber, targetRoundId: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, trackingCode: string] & {account: string, isOffchain: boolean, currentRoundId: ethers.BigNumber, sizeDelta: ethers.BigNumber, targetRoundId: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, trackingCode: string})>(
        abi, '0xb47a6f7db9b75acb005050d7dabb7a604b169c9f5669259b53bec86092ee6434'
    ),
    DelayedOrderSubmitted: new LogEvent<([account: string, isOffchain: boolean, sizeDelta: ethers.BigNumber, targetRoundId: ethers.BigNumber, intentionTime: ethers.BigNumber, executableAtTime: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, trackingCode: string] & {account: string, isOffchain: boolean, sizeDelta: ethers.BigNumber, targetRoundId: ethers.BigNumber, intentionTime: ethers.BigNumber, executableAtTime: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, trackingCode: string})>(
        abi, '0x9deb3648ccf8efc44205985ac6ead4ffb30791fea9ce7f9437ae398b31cf9d5a'
    ),
    FundingRecomputed: new LogEvent<([funding: ethers.BigNumber, fundingRate: ethers.BigNumber, index: ethers.BigNumber, timestamp: ethers.BigNumber] & {funding: ethers.BigNumber, fundingRate: ethers.BigNumber, index: ethers.BigNumber, timestamp: ethers.BigNumber})>(
        abi, '0xfc48da481fcf86ce12ffab287c2f0876771bfd89d024ed05e59d8640035d603e'
    ),
    MarginTransferred: new LogEvent<([account: string, marginDelta: ethers.BigNumber] & {account: string, marginDelta: ethers.BigNumber})>(
        abi, '0xe20b33a51269d7e4c48682ccfacaf1ca004fdec7b161e7098e4847a0c05d0ce2'
    ),
    PerpsTracking: new LogEvent<([trackingCode: string, baseAsset: string, marketKey: string, sizeDelta: ethers.BigNumber, fee: ethers.BigNumber] & {trackingCode: string, baseAsset: string, marketKey: string, sizeDelta: ethers.BigNumber, fee: ethers.BigNumber})>(
        abi, '0xc9d5ada2ea384fe04826ecd1b258955ac73c3e2e20d755108eafde90bc5588d4'
    ),
    PositionFlagged: new LogEvent<([id: ethers.BigNumber, account: string, flagger: string, timestamp: ethers.BigNumber] & {id: ethers.BigNumber, account: string, flagger: string, timestamp: ethers.BigNumber})>(
        abi, '0x3972cd04c4e9cd13103fd0e47c1a1c8ed80d8929f5849d54d64e8db24056c38f'
    ),
    'PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)': new LogEvent<([id: ethers.BigNumber, account: string, liquidator: string, size: ethers.BigNumber, price: ethers.BigNumber, flaggerFee: ethers.BigNumber, liquidatorFee: ethers.BigNumber, stakersFee: ethers.BigNumber] & {id: ethers.BigNumber, account: string, liquidator: string, size: ethers.BigNumber, price: ethers.BigNumber, flaggerFee: ethers.BigNumber, liquidatorFee: ethers.BigNumber, stakersFee: ethers.BigNumber})>(
        abi, '0x8e83cfbf9c95216dce50909e376c0dcc3e23129a3aa1edd5013fa8b41648f883'
    ),
    'PositionLiquidated(uint256,address,address,int256,uint256,uint256)': new LogEvent<([id: ethers.BigNumber, account: string, liquidator: string, size: ethers.BigNumber, price: ethers.BigNumber, fee: ethers.BigNumber] & {id: ethers.BigNumber, account: string, liquidator: string, size: ethers.BigNumber, price: ethers.BigNumber, fee: ethers.BigNumber})>(
        abi, '0x62e7eb6698aabc6740afc94f06bbdfb947fc109fd24d4adb26014d44053ac2c3'
    ),
    'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)': new LogEvent<([id: ethers.BigNumber, account: string, margin: ethers.BigNumber, size: ethers.BigNumber, tradeSize: ethers.BigNumber, lastPrice: ethers.BigNumber, fundingIndex: ethers.BigNumber, fee: ethers.BigNumber, skew: ethers.BigNumber] & {id: ethers.BigNumber, account: string, margin: ethers.BigNumber, size: ethers.BigNumber, tradeSize: ethers.BigNumber, lastPrice: ethers.BigNumber, fundingIndex: ethers.BigNumber, fee: ethers.BigNumber, skew: ethers.BigNumber})>(
        abi, '0xc0d933baa356386a245ade48f9a9c59db4612af2b5b9c17de5b451c628760f43'
    ),
    'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)': new LogEvent<([id: ethers.BigNumber, account: string, margin: ethers.BigNumber, size: ethers.BigNumber, tradeSize: ethers.BigNumber, lastPrice: ethers.BigNumber, fundingIndex: ethers.BigNumber, fee: ethers.BigNumber] & {id: ethers.BigNumber, account: string, margin: ethers.BigNumber, size: ethers.BigNumber, tradeSize: ethers.BigNumber, lastPrice: ethers.BigNumber, fundingIndex: ethers.BigNumber, fee: ethers.BigNumber})>(
        abi, '0x930fd93131df035ac630ef616ad4212af6370377bf327e905c2724cd01d95097'
    ),
}

export const functions = {
    accessibleMargin: new Func<[account: string], {account: string}, ([marginAccessible: ethers.BigNumber, invalid: boolean] & {marginAccessible: ethers.BigNumber, invalid: boolean})>(
        abi, '0x785cdeec'
    ),
    accruedFunding: new Func<[account: string], {account: string}, ([funding: ethers.BigNumber, invalid: boolean] & {funding: ethers.BigNumber, invalid: boolean})>(
        abi, '0x1bf556d0'
    ),
    assetPrice: new Func<[], {}, ([price: ethers.BigNumber, invalid: boolean] & {price: ethers.BigNumber, invalid: boolean})>(
        abi, '0xd24378eb'
    ),
    baseAsset: new Func<[], {}, string>(
        abi, '0xcdf456e1'
    ),
    canLiquidate: new Func<[account: string], {account: string}, boolean>(
        abi, '0xb9f4ff55'
    ),
    cancelDelayedOrder: new Func<[account: string], {account: string}, []>(
        abi, '0xc70b41e9'
    ),
    cancelOffchainDelayedOrder: new Func<[account: string], {account: string}, []>(
        abi, '0xdcce5806'
    ),
    closePosition: new Func<[desiredFillPrice: ethers.BigNumber], {desiredFillPrice: ethers.BigNumber}, []>(
        abi, '0xa126d601'
    ),
    closePositionWithTracking: new Func<[desiredFillPrice: ethers.BigNumber, trackingCode: string], {desiredFillPrice: ethers.BigNumber, trackingCode: string}, []>(
        abi, '0x5c8011c3'
    ),
    currentFundingRate: new Func<[], {}, ethers.BigNumber>(
        abi, '0x3aef4d0b'
    ),
    currentFundingVelocity: new Func<[], {}, ethers.BigNumber>(
        abi, '0xb74e3806'
    ),
    delayedOrders: new Func<[account: string], {account: string}, ([isOffchain: boolean, sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, targetRoundId: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, executableAtTime: ethers.BigNumber, intentionTime: ethers.BigNumber, trackingCode: string] & {isOffchain: boolean, sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, targetRoundId: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, executableAtTime: ethers.BigNumber, intentionTime: ethers.BigNumber, trackingCode: string})>(
        abi, '0xc8b809aa'
    ),
    executeDelayedOrder: new Func<[account: string], {account: string}, []>(
        abi, '0xa8300afb'
    ),
    executeOffchainDelayedOrder: new Func<[account: string, priceUpdateData: Array<string>], {account: string, priceUpdateData: Array<string>}, []>(
        abi, '0xdfa723cc'
    ),
    fillPrice: new Func<[sizeDelta: ethers.BigNumber], {sizeDelta: ethers.BigNumber}, ([price: ethers.BigNumber, invalid: boolean] & {price: ethers.BigNumber, invalid: boolean})>(
        abi, '0xea9f9aa7'
    ),
    flagPosition: new Func<[account: string], {account: string}, []>(
        abi, '0x909bc379'
    ),
    forceLiquidatePosition: new Func<[account: string], {account: string}, []>(
        abi, '0x3c92b8ec'
    ),
    fundingLastRecomputed: new Func<[], {}, number>(
        abi, '0x27b9a236'
    ),
    fundingRateLastRecomputed: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe44c84c2'
    ),
    fundingSequence: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x41108cf2'
    ),
    fundingSequenceLength: new Func<[], {}, ethers.BigNumber>(
        abi, '0xcded0cea'
    ),
    isFlagged: new Func<[account: string], {account: string}, boolean>(
        abi, '0xfef48a99'
    ),
    liquidatePosition: new Func<[account: string], {account: string}, []>(
        abi, '0x7498a0f0'
    ),
    liquidationFee: new Func<[account: string], {account: string}, ethers.BigNumber>(
        abi, '0xc8023af4'
    ),
    liquidationPrice: new Func<[account: string], {account: string}, ([price: ethers.BigNumber, invalid: boolean] & {price: ethers.BigNumber, invalid: boolean})>(
        abi, '0x964db90c'
    ),
    marketDebt: new Func<[], {}, ([debt: ethers.BigNumber, isInvalid: boolean] & {debt: ethers.BigNumber, isInvalid: boolean})>(
        abi, '0xe8c63470'
    ),
    marketKey: new Func<[], {}, string>(
        abi, '0xd7103a46'
    ),
    marketSize: new Func<[], {}, ethers.BigNumber>(
        abi, '0xeb56105d'
    ),
    marketSizes: new Func<[], {}, ([long: ethers.BigNumber, short: ethers.BigNumber] & {long: ethers.BigNumber, short: ethers.BigNumber})>(
        abi, '0x5fc890c2'
    ),
    marketSkew: new Func<[], {}, ethers.BigNumber>(
        abi, '0x2b58ecef'
    ),
    modifyPosition: new Func<[sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber], {sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber}, []>(
        abi, '0x4ad4914b'
    ),
    modifyPositionWithTracking: new Func<[sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string], {sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string}, []>(
        abi, '0x32f05103'
    ),
    notionalValue: new Func<[account: string], {account: string}, ([value: ethers.BigNumber, invalid: boolean] & {value: ethers.BigNumber, invalid: boolean})>(
        abi, '0xb895daab'
    ),
    orderFee: new Func<[sizeDelta: ethers.BigNumber, orderType: number], {sizeDelta: ethers.BigNumber, orderType: number}, ([fee: ethers.BigNumber, invalid: boolean] & {fee: ethers.BigNumber, invalid: boolean})>(
        abi, '0x4dd9d7e9'
    ),
    positions: new Func<[account: string], {account: string}, ([id: ethers.BigNumber, lastFundingIndex: ethers.BigNumber, margin: ethers.BigNumber, lastPrice: ethers.BigNumber, size: ethers.BigNumber] & {id: ethers.BigNumber, lastFundingIndex: ethers.BigNumber, margin: ethers.BigNumber, lastPrice: ethers.BigNumber, size: ethers.BigNumber})>(
        abi, '0x55f57510'
    ),
    postTradeDetails: new Func<[sizeDelta: ethers.BigNumber, tradePrice: ethers.BigNumber, orderType: number, sender: string], {sizeDelta: ethers.BigNumber, tradePrice: ethers.BigNumber, orderType: number, sender: string}, ([margin: ethers.BigNumber, size: ethers.BigNumber, price: ethers.BigNumber, liqPrice: ethers.BigNumber, fee: ethers.BigNumber, status: number] & {margin: ethers.BigNumber, size: ethers.BigNumber, price: ethers.BigNumber, liqPrice: ethers.BigNumber, fee: ethers.BigNumber, status: number})>(
        abi, '0xea1d5478'
    ),
    profitLoss: new Func<[account: string], {account: string}, ([pnl: ethers.BigNumber, invalid: boolean] & {pnl: ethers.BigNumber, invalid: boolean})>(
        abi, '0xb111dfac'
    ),
    recomputeFunding: new Func<[], {}, ethers.BigNumber>(
        abi, '0x4eb985cc'
    ),
    remainingMargin: new Func<[account: string], {account: string}, ([marginRemaining: ethers.BigNumber, invalid: boolean] & {marginRemaining: ethers.BigNumber, invalid: boolean})>(
        abi, '0x9cfbf4e4'
    ),
    submitCloseDelayedOrderWithTracking: new Func<[desiredTimeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string], {desiredTimeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string}, []>(
        abi, '0xc5a4b07a'
    ),
    submitCloseOffchainDelayedOrderWithTracking: new Func<[desiredFillPrice: ethers.BigNumber, trackingCode: string], {desiredFillPrice: ethers.BigNumber, trackingCode: string}, []>(
        abi, '0xed44a2db'
    ),
    submitDelayedOrder: new Func<[sizeDelta: ethers.BigNumber, desiredTimeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber], {sizeDelta: ethers.BigNumber, desiredTimeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber}, []>(
        abi, '0x09461cfe'
    ),
    submitDelayedOrderWithTracking: new Func<[sizeDelta: ethers.BigNumber, desiredTimeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string], {sizeDelta: ethers.BigNumber, desiredTimeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string}, []>(
        abi, '0x787d6c30'
    ),
    submitOffchainDelayedOrder: new Func<[sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber], {sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber}, []>(
        abi, '0xa1c35a35'
    ),
    submitOffchainDelayedOrderWithTracking: new Func<[sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string], {sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, trackingCode: string}, []>(
        abi, '0x85f05ab5'
    ),
    transferMargin: new Func<[marginDelta: ethers.BigNumber], {marginDelta: ethers.BigNumber}, []>(
        abi, '0x88a3c848'
    ),
    unrecordedFunding: new Func<[], {}, ([funding: ethers.BigNumber, invalid: boolean] & {funding: ethers.BigNumber, invalid: boolean})>(
        abi, '0x917e77f5'
    ),
    withdrawAllMargin: new Func<[], {}, []>(
        abi, '0x5a1cbd2b'
    ),
}

export class Contract extends ContractBase {

    accessibleMargin(account: string): Promise<([marginAccessible: ethers.BigNumber, invalid: boolean] & {marginAccessible: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.accessibleMargin, [account])
    }

    accruedFunding(account: string): Promise<([funding: ethers.BigNumber, invalid: boolean] & {funding: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.accruedFunding, [account])
    }

    assetPrice(): Promise<([price: ethers.BigNumber, invalid: boolean] & {price: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.assetPrice, [])
    }

    baseAsset(): Promise<string> {
        return this.eth_call(functions.baseAsset, [])
    }

    canLiquidate(account: string): Promise<boolean> {
        return this.eth_call(functions.canLiquidate, [account])
    }

    currentFundingRate(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.currentFundingRate, [])
    }

    currentFundingVelocity(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.currentFundingVelocity, [])
    }

    delayedOrders(account: string): Promise<([isOffchain: boolean, sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, targetRoundId: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, executableAtTime: ethers.BigNumber, intentionTime: ethers.BigNumber, trackingCode: string] & {isOffchain: boolean, sizeDelta: ethers.BigNumber, desiredFillPrice: ethers.BigNumber, targetRoundId: ethers.BigNumber, commitDeposit: ethers.BigNumber, keeperDeposit: ethers.BigNumber, executableAtTime: ethers.BigNumber, intentionTime: ethers.BigNumber, trackingCode: string})> {
        return this.eth_call(functions.delayedOrders, [account])
    }

    fillPrice(sizeDelta: ethers.BigNumber): Promise<([price: ethers.BigNumber, invalid: boolean] & {price: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.fillPrice, [sizeDelta])
    }

    fundingLastRecomputed(): Promise<number> {
        return this.eth_call(functions.fundingLastRecomputed, [])
    }

    fundingRateLastRecomputed(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.fundingRateLastRecomputed, [])
    }

    fundingSequence(index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.fundingSequence, [index])
    }

    fundingSequenceLength(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.fundingSequenceLength, [])
    }

    isFlagged(account: string): Promise<boolean> {
        return this.eth_call(functions.isFlagged, [account])
    }

    liquidationFee(account: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.liquidationFee, [account])
    }

    liquidationPrice(account: string): Promise<([price: ethers.BigNumber, invalid: boolean] & {price: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.liquidationPrice, [account])
    }

    marketDebt(): Promise<([debt: ethers.BigNumber, isInvalid: boolean] & {debt: ethers.BigNumber, isInvalid: boolean})> {
        return this.eth_call(functions.marketDebt, [])
    }

    marketKey(): Promise<string> {
        return this.eth_call(functions.marketKey, [])
    }

    marketSize(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.marketSize, [])
    }

    marketSizes(): Promise<([long: ethers.BigNumber, short: ethers.BigNumber] & {long: ethers.BigNumber, short: ethers.BigNumber})> {
        return this.eth_call(functions.marketSizes, [])
    }

    marketSkew(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.marketSkew, [])
    }

    notionalValue(account: string): Promise<([value: ethers.BigNumber, invalid: boolean] & {value: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.notionalValue, [account])
    }

    orderFee(sizeDelta: ethers.BigNumber, orderType: number): Promise<([fee: ethers.BigNumber, invalid: boolean] & {fee: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.orderFee, [sizeDelta, orderType])
    }

    positions(account: string): Promise<([id: ethers.BigNumber, lastFundingIndex: ethers.BigNumber, margin: ethers.BigNumber, lastPrice: ethers.BigNumber, size: ethers.BigNumber] & {id: ethers.BigNumber, lastFundingIndex: ethers.BigNumber, margin: ethers.BigNumber, lastPrice: ethers.BigNumber, size: ethers.BigNumber})> {
        return this.eth_call(functions.positions, [account])
    }

    postTradeDetails(sizeDelta: ethers.BigNumber, tradePrice: ethers.BigNumber, orderType: number, sender: string): Promise<([margin: ethers.BigNumber, size: ethers.BigNumber, price: ethers.BigNumber, liqPrice: ethers.BigNumber, fee: ethers.BigNumber, status: number] & {margin: ethers.BigNumber, size: ethers.BigNumber, price: ethers.BigNumber, liqPrice: ethers.BigNumber, fee: ethers.BigNumber, status: number})> {
        return this.eth_call(functions.postTradeDetails, [sizeDelta, tradePrice, orderType, sender])
    }

    profitLoss(account: string): Promise<([pnl: ethers.BigNumber, invalid: boolean] & {pnl: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.profitLoss, [account])
    }

    remainingMargin(account: string): Promise<([marginRemaining: ethers.BigNumber, invalid: boolean] & {marginRemaining: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.remainingMargin, [account])
    }

    unrecordedFunding(): Promise<([funding: ethers.BigNumber, invalid: boolean] & {funding: ethers.BigNumber, invalid: boolean})> {
        return this.eth_call(functions.unrecordedFunding, [])
    }
}

import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './FuturesMarketManager.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    CacheUpdated: new LogEvent<([name: string, destination: string] & {name: string, destination: string})>(
        abi, '0x88a93678a3692f6789d9546fc621bf7234b101ddb7d4fe479455112831b8aa68'
    ),
    EndorsedAddressAdded: new LogEvent<([endorsedAddress: string] & {endorsedAddress: string})>(
        abi, '0x696384f01e94455c2445de779911f5b368f4eac3e16adf75bdc0d48ac54e8d19'
    ),
    EndorsedAddressRemoved: new LogEvent<([endorsedAddress: string] & {endorsedAddress: string})>(
        abi, '0x833f79c2defb42e058e0f2ee06ccf0ed0d316289148a5d3b28d1296d8a6e00f4'
    ),
    MarketAdded: new LogEvent<([market: string, asset: string, marketKey: string] & {market: string, asset: string, marketKey: string})>(
        abi, '0x96bfb0243b17c28e58d33656cd16adf56e92fc6bbeedab19c4a1c56f585274d6'
    ),
    MarketRemoved: new LogEvent<([market: string, asset: string, marketKey: string] & {market: string, asset: string, marketKey: string})>(
        abi, '0xce64c0b68d87b6796835a03e01a9e3935b8ed965b01df87766b1e5e35ab44bfd'
    ),
    OwnerChanged: new LogEvent<([oldOwner: string, newOwner: string] & {oldOwner: string, newOwner: string})>(
        abi, '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c'
    ),
    OwnerNominated: new LogEvent<([newOwner: string] & {newOwner: string})>(
        abi, '0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22'
    ),
}

export const functions = {
    CONTRACT_NAME: new Func<[], {}, string>(
        abi, '0x614d08f8'
    ),
    acceptOwnership: new Func<[], {}, []>(
        abi, '0x79ba5097'
    ),
    addEndorsedAddresses: new Func<[addresses: Array<string>], {addresses: Array<string>}, []>(
        abi, '0xca079885'
    ),
    addMarkets: new Func<[marketsToAdd: Array<string>], {marketsToAdd: Array<string>}, []>(
        abi, '0xda40385d'
    ),
    addProxiedMarkets: new Func<[marketsToAdd: Array<string>], {marketsToAdd: Array<string>}, []>(
        abi, '0x4ed03526'
    ),
    allEndorsedAddresses: new Func<[], {}, Array<string>>(
        abi, '0x4dc25348'
    ),
    allMarketSummaries: new Func<[], {}, Array<([market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean] & {market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean})>>(
        abi, '0x3c88ee18'
    ),
    'allMarkets()': new Func<[], {}, Array<string>>(
        abi, '0x375a7cba'
    ),
    'allMarkets(bool)': new Func<[proxiedMarkets: boolean], {proxiedMarkets: boolean}, Array<string>>(
        abi, '0xf607d900'
    ),
    burnSUSD: new Func<[account: string, amount: ethers.BigNumber], {account: string, amount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x6f9a0ca6'
    ),
    isEndorsed: new Func<[account: string], {account: string}, boolean>(
        abi, '0xa237e94d'
    ),
    isResolverCached: new Func<[], {}, boolean>(
        abi, '0x2af64bd3'
    ),
    issueSUSD: new Func<[account: string, amount: ethers.BigNumber], {account: string, amount: ethers.BigNumber}, []>(
        abi, '0xa7b5833f'
    ),
    marketForKey: new Func<[_: string], {}, string>(
        abi, '0xe63bfadb'
    ),
    marketSummaries: new Func<[addresses: Array<string>], {addresses: Array<string>}, Array<([market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean] & {market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean})>>(
        abi, '0xa9e0bef7'
    ),
    marketSummariesForKeys: new Func<[marketKeys: Array<string>], {marketKeys: Array<string>}, Array<([market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean] & {market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean})>>(
        abi, '0x83ce9022'
    ),
    'markets(uint256,uint256,bool)': new Func<[index: ethers.BigNumber, pageSize: ethers.BigNumber, proxiedMarkets: boolean], {index: ethers.BigNumber, pageSize: ethers.BigNumber, proxiedMarkets: boolean}, Array<string>>(
        abi, '0x95fafa4a'
    ),
    'markets(uint256,uint256)': new Func<[index: ethers.BigNumber, pageSize: ethers.BigNumber], {index: ethers.BigNumber, pageSize: ethers.BigNumber}, Array<string>>(
        abi, '0xfe11edc9'
    ),
    marketsForKeys: new Func<[marketKeys: Array<string>], {marketKeys: Array<string>}, Array<string>>(
        abi, '0x008d3aca'
    ),
    nominateNewOwner: new Func<[_owner: string], {_owner: string}, []>(
        abi, '0x1627540c'
    ),
    nominatedOwner: new Func<[], {}, string>(
        abi, '0x53a47bb7'
    ),
    'numMarkets()': new Func<[], {}, ethers.BigNumber>(
        abi, '0x26e04f9d'
    ),
    'numMarkets(bool)': new Func<[proxiedMarkets: boolean], {proxiedMarkets: boolean}, ethers.BigNumber>(
        abi, '0xc03852fb'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    'payFee(uint256,bytes32)': new Func<[amount: ethers.BigNumber, trackingCode: string], {amount: ethers.BigNumber, trackingCode: string}, []>(
        abi, '0xc6bbdafb'
    ),
    'payFee(uint256)': new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0xd289ade2'
    ),
    rebuildCache: new Func<[], {}, []>(
        abi, '0x74185360'
    ),
    removeEndorsedAddresses: new Func<[addresses: Array<string>], {addresses: Array<string>}, []>(
        abi, '0xfb77549c'
    ),
    removeMarkets: new Func<[marketsToRemove: Array<string>], {marketsToRemove: Array<string>}, []>(
        abi, '0xbfef7bdf'
    ),
    removeMarketsByKey: new Func<[marketKeysToRemove: Array<string>], {marketKeysToRemove: Array<string>}, []>(
        abi, '0xf04cfcea'
    ),
    resolver: new Func<[], {}, string>(
        abi, '0x04f3bcec'
    ),
    resolverAddressesRequired: new Func<[], {}, Array<string>>(
        abi, '0x899ffef4'
    ),
    totalDebt: new Func<[], {}, ([debt: ethers.BigNumber, isInvalid: boolean] & {debt: ethers.BigNumber, isInvalid: boolean})>(
        abi, '0xfc7b9c18'
    ),
    updateMarketsImplementations: new Func<[marketsToUpdate: Array<string>], {marketsToUpdate: Array<string>}, []>(
        abi, '0x4b955c38'
    ),
}

export class Contract extends ContractBase {

    CONTRACT_NAME(): Promise<string> {
        return this.eth_call(functions.CONTRACT_NAME, [])
    }

    allEndorsedAddresses(): Promise<Array<string>> {
        return this.eth_call(functions.allEndorsedAddresses, [])
    }

    allMarketSummaries(): Promise<Array<([market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean] & {market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean})>> {
        return this.eth_call(functions.allMarketSummaries, [])
    }

    'allMarkets()'(): Promise<Array<string>> {
        return this.eth_call(functions['allMarkets()'], [])
    }

    'allMarkets(bool)'(proxiedMarkets: boolean): Promise<Array<string>> {
        return this.eth_call(functions['allMarkets(bool)'], [proxiedMarkets])
    }

    isEndorsed(account: string): Promise<boolean> {
        return this.eth_call(functions.isEndorsed, [account])
    }

    isResolverCached(): Promise<boolean> {
        return this.eth_call(functions.isResolverCached, [])
    }

    marketForKey(arg0: string): Promise<string> {
        return this.eth_call(functions.marketForKey, [arg0])
    }

    marketSummaries(addresses: Array<string>): Promise<Array<([market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean] & {market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean})>> {
        return this.eth_call(functions.marketSummaries, [addresses])
    }

    marketSummariesForKeys(marketKeys: Array<string>): Promise<Array<([market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean] & {market: string, asset: string, marketKey: string, price: ethers.BigNumber, marketSize: ethers.BigNumber, marketSkew: ethers.BigNumber, marketDebt: ethers.BigNumber, currentFundingRate: ethers.BigNumber, currentFundingVelocity: ethers.BigNumber, priceInvalid: boolean, proxied: boolean})>> {
        return this.eth_call(functions.marketSummariesForKeys, [marketKeys])
    }

    'markets(uint256,uint256,bool)'(index: ethers.BigNumber, pageSize: ethers.BigNumber, proxiedMarkets: boolean): Promise<Array<string>> {
        return this.eth_call(functions['markets(uint256,uint256,bool)'], [index, pageSize, proxiedMarkets])
    }

    'markets(uint256,uint256)'(index: ethers.BigNumber, pageSize: ethers.BigNumber): Promise<Array<string>> {
        return this.eth_call(functions['markets(uint256,uint256)'], [index, pageSize])
    }

    marketsForKeys(marketKeys: Array<string>): Promise<Array<string>> {
        return this.eth_call(functions.marketsForKeys, [marketKeys])
    }

    nominatedOwner(): Promise<string> {
        return this.eth_call(functions.nominatedOwner, [])
    }

    'numMarkets()'(): Promise<ethers.BigNumber> {
        return this.eth_call(functions['numMarkets()'], [])
    }

    'numMarkets(bool)'(proxiedMarkets: boolean): Promise<ethers.BigNumber> {
        return this.eth_call(functions['numMarkets(bool)'], [proxiedMarkets])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    resolver(): Promise<string> {
        return this.eth_call(functions.resolver, [])
    }

    resolverAddressesRequired(): Promise<Array<string>> {
        return this.eth_call(functions.resolverAddressesRequired, [])
    }

    totalDebt(): Promise<([debt: ethers.BigNumber, isInvalid: boolean] & {debt: ethers.BigNumber, isInvalid: boolean})> {
        return this.eth_call(functions.totalDebt, [])
    }
}

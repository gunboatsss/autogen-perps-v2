import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class PerpsV2MarketsEventDelayedOrderRemoved {
    constructor(props?: Partial<PerpsV2MarketsEventDelayedOrderRemoved>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    blockTimestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    transactionHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    contract!: string

    @Index_()
    @Column_("text", {nullable: false})
    eventName!: string

    @Index_()
    @Column_("text", {nullable: false})
    account!: string

    @Column_("bool", {nullable: false})
    isOffchain!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    currentRoundId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sizeDelta!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    targetRoundId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    commitDeposit!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    keeperDeposit!: bigint

    @Column_("text", {nullable: false})
    trackingCode!: string
}

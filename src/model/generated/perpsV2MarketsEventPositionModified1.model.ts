import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class PerpsV2MarketsEventPositionModified1 {
    constructor(props?: Partial<PerpsV2MarketsEventPositionModified1>) {
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
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    id0!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    account!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    margin!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    size!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tradeSize!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lastPrice!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fundingIndex!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fee!: bigint
}

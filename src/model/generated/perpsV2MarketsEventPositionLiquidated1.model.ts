import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class PerpsV2MarketsEventPositionLiquidated1 {
    constructor(props?: Partial<PerpsV2MarketsEventPositionLiquidated1>) {
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

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    id0!: bigint

    @Column_("text", {nullable: false})
    account!: string

    @Column_("text", {nullable: false})
    liquidator!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    size!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    price!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fee!: bigint
}

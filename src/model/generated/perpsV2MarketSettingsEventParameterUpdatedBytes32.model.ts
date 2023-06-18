import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class PerpsV2MarketSettingsEventParameterUpdatedBytes32 {
    constructor(props?: Partial<PerpsV2MarketSettingsEventParameterUpdatedBytes32>) {
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
    marketKey!: string

    @Index_()
    @Column_("text", {nullable: false})
    parameter!: string

    @Column_("text", {nullable: false})
    value!: string
}

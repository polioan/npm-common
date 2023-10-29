export type Aliasable = string | number | bigint

export type TypeAlias<
  BaseType extends Aliasable,
  UniqueSymbolDiscriminator extends symbol,
> =
  | (BaseType & {
      readonly __discriminator: UniqueSymbolDiscriminator | void
    })
  | (void & {
      readonly __discriminator: UniqueSymbolDiscriminator | void
    })

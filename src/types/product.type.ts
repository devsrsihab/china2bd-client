export type TProduct = {
  id: string;
  title: string;
  description: string;
  categoryId: string | null;
  thumbnail: string;
  price: {
    original: number | null;
    converted: number | null;
    display: string;
    currency: string;
    sign: string;
  };
  quantity: number;
  vendor: {
    id: string;
    name: string;
    displayName: string;
    score: number;
  };
  images: string[];
  stats: {
    totalSales: number;
    salesLast30Days: number;
    rating: number;
  };
  location: string | null;
};

export type TSidebarItem = {
  id: string;
  title: string;
  icon: { src: string };
  submenu: {
    id: string;
    title: string;
    url: string;
  }[];
};














// Root product response type
export interface Root {
  Id: string;
  ErrorCode: string;
  HasError: boolean;
  ProviderType: string;
  UpdatedTime: string;
  Title: string;
  IsTitleManuallyTranslated: boolean;
  OriginalTitle: string;
  CategoryId: string;
  ExternalCategoryId: string;
  VendorId: string;
  VendorName: string;
  VendorDisplayName: string;
  VendorScore: number;
  Description: string;
  TaobaoItemUrl: string;
  ExternalItemUrl: string;
  MainPictureUrl: string;
  StuffStatus: string;
  Volume: number;
  Price: Price;
  MasterQuantity: number;
  Pictures: Picture[];
  Location: Location;
  FeaturedValues: FeaturedValue[];
  IsSellAllowed: boolean;
  PhysicalParameters: PhysicalParameters;
  IsFiltered: boolean;
  Videos: Video[];
  HasInternalDelivery: boolean;
  DeliveryCosts: DeliveryCost[];
  Attributes: Attribute[];
  HasHierarchicalConfigurators: boolean;
  ConfiguredItems: ConfiguredItem[];
  FirstLotQuantity: number;
  NextLotQuantity: number;
  WeightInfos: WeightInfo[];
  ActualWeightInfo: ActualWeightInfo;
  RelatedGroups: RelatedGroup[];
}

/* -------------------- PRICES -------------------- */
export interface Price {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList;
  ConvertedPrice: string;
  ConvertedPriceWithoutSign: string;
  CurrencySign: string;
  CurrencyName: string;
  IsDeliverable: boolean;
  DeliveryPrice: DeliveryPrice;
  OneItemDeliveryPrice: OneItemDeliveryPrice;
  PriceWithoutDelivery: PriceWithoutDelivery;
  OneItemPriceWithoutDelivery: OneItemPriceWithoutDelivery;
}

export interface ConvertedPriceList {
  Internal: Internal;
  DisplayedMoneys: DisplayedMoney[];
}
export interface Internal {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney {
  Price: number;
  Sign: string;
  Code: string;
}

export interface DeliveryPrice {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList2;
}
export interface ConvertedPriceList2 {
  Internal: Internal2;
  DisplayedMoneys: DisplayedMoney2[];
}
export interface Internal2 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney2 {
  Price: number;
  Sign: string;
  Code: string;
}

export interface OneItemDeliveryPrice {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList3;
}
export interface ConvertedPriceList3 {
  Internal: Internal3;
  DisplayedMoneys: DisplayedMoney3[];
}
export interface Internal3 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney3 {
  Price: number;
  Sign: string;
  Code: string;
}

export interface PriceWithoutDelivery {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList4;
}
export interface ConvertedPriceList4 {
  Internal: Internal4;
  DisplayedMoneys: DisplayedMoney4[];
}
export interface Internal4 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney4 {
  Price: number;
  Sign: string;
  Code: string;
}

export interface OneItemPriceWithoutDelivery {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList5;
}
export interface ConvertedPriceList5 {
  Internal: Internal5;
  DisplayedMoneys: DisplayedMoney5[];
}
export interface Internal5 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney5 {
  Price: number;
  Sign: string;
  Code: string;
}

/* -------------------- MEDIA -------------------- */
export interface Picture {
  Url: string;
  Small: Small;
  Medium: Medium;
  Large: Large;
  IsMain: boolean;
}
export interface Small {
  Url: string;
  Width: number;
  Height: number;
}
export interface Medium {
  Url: string;
  Width: number;
  Height: number;
}
export interface Large {
  Url: string;
  Width: number;
  Height: number;
}

export interface Video {
  PreviewUrl: string;
  Url: string;
}

/* -------------------- LOCATION -------------------- */
export interface Location {
  City: string;
  State: string;
}

/* -------------------- EXTRA -------------------- */
export interface FeaturedValue {
  Name: string;
  Value: string;
}
export interface PhysicalParameters {
  Weight: number;
  Length: number;
  Width: number;
  Height: number;
}
export interface WeightInfo {
  Type: string;
  DisplayName: string;
  Weight: number;
}
export interface ActualWeightInfo {
  Type: string;
  DisplayName: string;
  Weight: number;
}

/* -------------------- DELIVERY COSTS -------------------- */
export interface DeliveryCost {
  AreaCode: string;
  Mode: string;
  Price: Price2;
  StartCost: number;
  StartWeight: number;
  AddWeight: number;
  AddCost: number;
}
export interface Price2 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList6;
  ConvertedPrice: string;
  ConvertedPriceWithoutSign: string;
  CurrencySign: string;
  CurrencyName: string;
  IsDeliverable: boolean;
  PriceWithoutDelivery: PriceWithoutDelivery2;
}
export interface ConvertedPriceList6 {
  Internal: Internal6;
  DisplayedMoneys: DisplayedMoney6[];
}
export interface Internal6 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney6 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface PriceWithoutDelivery2 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList7;
}
export interface ConvertedPriceList7 {
  Internal: Internal7;
  DisplayedMoneys: DisplayedMoney7[];
}
export interface Internal7 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney7 {
  Price: number;
  Sign: string;
  Code: string;
}

/* -------------------- ATTRIBUTES -------------------- */
export interface Attribute {
  Pid: string;
  Vid: string;
  PropertyName: string;
  Value: string;
  OriginalPropertyName: string;
  OriginalValue: string;
  IsConfigurator: boolean;
  ImageUrl?: string;
  MiniImageUrl?: string;
}

/* -------------------- CONFIGURATORS -------------------- */
export interface ConfiguredItem {
  Id: string;
  Quantity: number;
  SalesCount: number;
  Configurators: Configurator[];
  Price: Price3;
}
export interface Configurator {
  Pid: string;
  Vid: string;
}
export interface Price3 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList8;
  ConvertedPrice: string;
  ConvertedPriceWithoutSign: string;
  CurrencySign: string;
  CurrencyName: string;
  IsDeliverable: boolean;
  DeliveryPrice: DeliveryPrice2;
  OneItemDeliveryPrice: OneItemDeliveryPrice2;
  PriceWithoutDelivery: PriceWithoutDelivery3;
  OneItemPriceWithoutDelivery: OneItemPriceWithoutDelivery2;
}
export interface ConvertedPriceList8 {
  Internal: Internal8;
  DisplayedMoneys: DisplayedMoney8[];
}
export interface Internal8 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney8 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DeliveryPrice2 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList9;
}
export interface ConvertedPriceList9 {
  Internal: Internal9;
  DisplayedMoneys: DisplayedMoney9[];
}
export interface Internal9 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney9 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface OneItemDeliveryPrice2 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList10;
}
export interface ConvertedPriceList10 {
  Internal: Internal10;
  DisplayedMoneys: DisplayedMoney10[];
}
export interface Internal10 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney10 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface PriceWithoutDelivery3 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList11;
}
export interface ConvertedPriceList11 {
  Internal: Internal11;
  DisplayedMoneys: DisplayedMoney11[];
}
export interface Internal11 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney11 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface OneItemPriceWithoutDelivery2 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList12;
}
export interface ConvertedPriceList12 {
  Internal: Internal12;
  DisplayedMoneys: DisplayedMoney12[];
}
export interface Internal12 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney12 {
  Price: number;
  Sign: string;
  Code: string;
}

/* -------------------- RELATED GROUPS -------------------- */
export interface RelatedGroup {
  Type: string;
  OriginalName: string;
  DisplayName: string;
  Items: Item[];
}
export interface Item {
  Name: string;
  Image: Image;
  Price: Price4;
  Id: string;
  Title: string;
  IsTitleManuallyTranslated: boolean;
  OriginalTitle: string;
  PromotionPrice?: PromotionPrice;
}
export interface Image {
  Url: string;
  Small: Small2;
  Medium: Medium2;
  Large: Large2;
  IsMain: boolean;
}
export interface Small2 {
  Url: string;
  Width: number;
  Height: number;
}
export interface Medium2 {
  Url: string;
  Width?: number;
  Height?: number;
}
export interface Large2 {
  Url: string;
  Width?: number;
  Height?: number;
}
export interface Price4 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList13;
  ConvertedPrice: string;
  ConvertedPriceWithoutSign: string;
  CurrencySign: string;
  CurrencyName: string;
  IsDeliverable: boolean;
  DeliveryPrice: DeliveryPrice3;
  OneItemDeliveryPrice: OneItemDeliveryPrice3;
  PriceWithoutDelivery: PriceWithoutDelivery4;
  OneItemPriceWithoutDelivery: OneItemPriceWithoutDelivery3;
}
export interface ConvertedPriceList13 {
  Internal: Internal13;
  DisplayedMoneys: DisplayedMoney13[];
}
export interface Internal13 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney13 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DeliveryPrice3 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
}
export interface OneItemDeliveryPrice3 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
}
export interface PriceWithoutDelivery4 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList14;
}
export interface ConvertedPriceList14 {
  Internal: Internal14;
  DisplayedMoneys: DisplayedMoney14[];
}
export interface Internal14 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney14 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface OneItemPriceWithoutDelivery3 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList15;
}
export interface ConvertedPriceList15 {
  Internal: Internal15;
  DisplayedMoneys: any[];
}
export interface Internal15 {
  Price: number;
}

/* -------------------- PROMOTION PRICE -------------------- */
export interface PromotionPrice {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList16;
  ConvertedPrice: string;
  ConvertedPriceWithoutSign: string;
  CurrencySign: string;
  CurrencyName: string;
  IsDeliverable: boolean;
  DeliveryPrice: DeliveryPrice4;
  OneItemDeliveryPrice: OneItemDeliveryPrice4;
  PriceWithoutDelivery: PriceWithoutDelivery5;
  OneItemPriceWithoutDelivery: OneItemPriceWithoutDelivery4;
}
export interface ConvertedPriceList16 {
  Internal: Internal16;
  DisplayedMoneys: DisplayedMoney15[];
}
export interface Internal16 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney15 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DeliveryPrice4 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
}
export interface OneItemDeliveryPrice4 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
}
export interface PriceWithoutDelivery5 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList17;
}
export interface ConvertedPriceList17 {
  Internal: Internal17;
  DisplayedMoneys: DisplayedMoney16[];
}
export interface Internal17 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface DisplayedMoney16 {
  Price: number;
  Sign: string;
  Code: string;
}
export interface OneItemPriceWithoutDelivery4 {
  OriginalPrice: number;
  MarginPrice: number;
  OriginalCurrencyCode: string;
  ConvertedPriceList: ConvertedPriceList18;
}
export interface ConvertedPriceList18 {
  Internal: Internal18;
  DisplayedMoneys: any[];
}
export interface Internal18 {
  Price: number;
}

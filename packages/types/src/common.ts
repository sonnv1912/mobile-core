export type Option<TKey = string, TIcon = string, THref = string> = {
   code: TKey;
   label?: string;
   icon?: TIcon;
   href?: THref;
};

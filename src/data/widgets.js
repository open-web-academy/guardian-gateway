const TestnetDomains = {
  "test.near.social": true,
  "127.0.0.1": true,
  "testnet.vara.ow.academy": true,
  "testnet.eternacode.dev": true,
};

console.log(window.location.hostname)

export const NetworkId = window.location.hostname in TestnetDomains ? "testnet" : "mainnet";
export const WssVara = window.location.hostname in TestnetDomains ? "wss://testnet.vara.network" : "mainnet";

const TestnetWidgets = {
  image: "eugenethedream/widget/Image",
  default: "syi216.testnet/widget/varagateway-landing-page",
  viewSource: "eugenethedream/widget/WidgetSource",
  widgetMetadataEditor: "eugenethedream/widget/WidgetMetadataEditor",
  widgetMetadata: "eugenethedream/widget/WidgetMetadata",
  profileImage: "eugenethedream/widget/ProfileImage",
  profilePage: "syi216.testnet/widget/WelcomeProfile",
  profileName: "eugenethedream/widget/ProfileName",
  profileInlineBlock: "eugenethedream/widget/Profile",
  notificationButton: "eugenethedream/widget/NotificationButton",
};

const MainnetWidgets = {
  image: "mob.near/widget/Image",
  default: "syi216.near/widget/varagateway-landing-page",
  viewSource: "mob.near/widget/WidgetSource",
  widgetMetadataEditor: "mob.near/widget/WidgetMetadataEditor",
  widgetMetadata: "mob.near/widget/WidgetMetadata",
  profileImage: "mob.near/widget/ProfileImage",
  notificationButton: "mob.near/widget/NotificationButton",
  profilePage: "mob.near/widget/ProfilePage",
  profileName: "patrick.near/widget/ProfileName",
  editorComponentSearch: "mob.near/widget/Editor.ComponentSearch",
  profileInlineBlock: "mob.near/widget/Profile.InlineBlock",
  viewHistory: "bozon.near/widget/WidgetHistory",
  starButton: "mob.near/widget/N.StarButton",
};

export const Widgets =
  NetworkId === "testnet" ? TestnetWidgets : MainnetWidgets;

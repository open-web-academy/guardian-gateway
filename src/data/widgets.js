const TestnetDomains = {
  "test.near.social": true,
  "127.0.0.1": true,
  "domaintestnet.d3d508se6sm4gy.amplifyapp.com": true,
};

console.log(window.location.hostname)

export const NetworkId = window.location.hostname in TestnetDomains ? "testnet" : "mainnet";

const TestnetWidgets = {
  image: "eugenethedream/widget/Image",
  default: "syi216.testnet/widget/varagateway-landing-page",
  viewSource: "eugenethedream/widget/WidgetSource",
  widgetMetadataEditor: "eugenethedream/widget/WidgetMetadataEditor",
  widgetMetadata: "eugenethedream/widget/WidgetMetadata",
  profileImage: "eugenethedream/widget/ProfileImage",
  profilePage: "eugenethedream/widget/Profile",
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

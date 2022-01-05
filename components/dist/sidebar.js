"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var layout_1 = require("@chakra-ui/layout");
var md_1 = require("react-icons/md");
var hooks_1 = require("../lib/hooks");
var navMenu = [
    {
        name: "Home",
        icon: md_1.MdHome,
        route: "/"
    },
    {
        name: "Search",
        icon: md_1.MdSearch,
        route: "/search"
    },
    {
        name: "Your Library",
        icon: md_1.MdLibraryMusic,
        route: "/library"
    },
];
var musicMenu = [
    {
        name: "Create Playlist",
        icon: md_1.MdPlaylistAdd,
        route: "/playlist"
    },
    {
        name: "Favorites",
        icon: md_1.MdFavorite,
        route: "/favorites"
    },
];
// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);
var Sidebar = function () {
    var playlists = hooks_1.usePlaylist().playlists;
    return (React.createElement(layout_1.Box, { width: "100%", height: "calc(100vh - 100px)", bg: "black", paddingX: "5px", color: "gray" },
        React.createElement(layout_1.Box, { paddingY: "20px", height: "100%" },
            React.createElement(layout_1.Box, { width: "120px", marginBottom: "20px", paddingX: "20px" },
                React.createElement(image_1["default"], { src: "/logo.svg", height: 60, width: 120 })),
            React.createElement(layout_1.Box, { marginBottom: "20px" },
                React.createElement(layout_1.List, { spacing: 2 }, navMenu.map(function (menu) { return (React.createElement(layout_1.ListItem, { paddingX: "20px", fontSize: "16px", key: menu.name },
                    React.createElement(layout_1.LinkBox, null,
                        React.createElement(link_1["default"], { href: menu.route, passHref: true },
                            React.createElement(layout_1.LinkOverlay, null,
                                React.createElement(layout_1.ListIcon, { as: menu.icon, color: "white", marginRight: "20px" }),
                                menu.name))))); }))),
            React.createElement(layout_1.Box, { marginTop: "20px" },
                React.createElement(layout_1.List, { spacing: 2 }, musicMenu.map(function (item) { return (React.createElement(layout_1.ListItem, { paddingX: "20px", fontSize: "16px", key: item.name },
                    React.createElement(layout_1.LinkBox, null,
                        React.createElement(link_1["default"], { href: item.route, passHref: true },
                            React.createElement(layout_1.LinkOverlay, null,
                                React.createElement(layout_1.ListIcon, { as: item.icon, color: "white", marginRight: "20px" }),
                                item.name))))); }))),
            React.createElement(layout_1.Divider, { color: "gray.800" }),
            React.createElement(layout_1.Box, { height: "66%", overflowY: "auto", paddingY: "20px" },
                React.createElement(layout_1.List, { spacing: 2 }, playlists.map(function (playlist) {
                    return (React.createElement(layout_1.ListItem, { paddingX: "20px", key: playlist.id },
                        React.createElement(layout_1.LinkBox, null,
                            React.createElement(link_1["default"], { href: {
                                    pathname: "/playlist/[id]",
                                    query: { id: playlist.id }
                                }, passHref: true },
                                React.createElement(layout_1.LinkOverlay, null, playlist.name)))));
                }))))));
};
exports["default"] = Sidebar;

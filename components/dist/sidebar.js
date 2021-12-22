"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var layout_1 = require("@chakra-ui/layout");
var md_1 = require("react-icons/md");
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
var Sidebar = function () {
    return (React.createElement(layout_1.Box, { width: "100%", height: "calc(100vh - 100px)", bg: "black", paddingX: "5px", color: "gray" },
        React.createElement(layout_1.Box, { paddingY: "20px" },
            React.createElement(layout_1.Box, { width: "120px", marginBottom: "20px", paddingX: "20px" },
                React.createElement(image_1["default"], { src: "/logo.svg", height: 60, width: 120 })),
            React.createElement(layout_1.Box, { marginBottom: "20px" },
                React.createElement(layout_1.List, { space: 2 }, navMenu.map(function (menu) { return (React.createElement(layout_1.ListItem, { paddingX: "20px", fontSize: "16px", key: menu.name },
                    React.createElement(layout_1.LinkBox, null,
                        React.createElement(link_1["default"], { href: menu.route, passHref: true },
                            React.createElement(layout_1.LinkOverlay, null,
                                React.createElement(layout_1.ListIcon, { as: menu.icon, color: "white", marginRight: "20px" }),
                                menu.name))))); }))),
            React.createElement(layout_1.Box, null,
                React.createElement(layout_1.List, { spacing: 2 }, musicMenu.map(function (item) { return ({}
                    < layout_1.ListItem); }, padding = "20px" >
                    React.createElement(layout_1.LinkBox, null,
                        React.createElement(link_1["default"], null,
                            React.createElement(React.Fragment, null))))),
                "} ))}"))));
};
layout_1.Box >
;
;
;
exports["default"] = Sidebar;

"use strict";
exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 9945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Header(AppProps) {
    const renderImage = ()=>{
        if (AppProps.type === "artists") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673093181/Your_Top_Song_1_xmam4z.png",
                width: "400px",
                height: "400px"
            });
        } else if (AppProps.type === "tracks") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673093181/Your_Top_Genre_okndsi.png",
                width: "400px",
                height: "400px"
            });
        } else if (AppProps.type === "recentlyPlayed") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673093181/Your_Top_Artist_3_s0139u.png",
                width: "400px",
                height: "400px"
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
        role: "banner",
        className: "ui-section-header-main",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "ui-layout-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mainHeaderTopLine",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "arrowBox",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                className: "arrow down"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "ui-section-header__layout ui-layout-flex",
                            children: "PLAYING FROM YOUR LIBRARY"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "dotBox",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "dots",
                                children: "︙"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "threeLines",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673171846/output-onlinepngtools_vqtnph.png"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pictureAndDoodles",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "clouds",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673171605/pngwing.com_makokv.png"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "mainHeaderPictureTopTracks",
                            children: renderImage()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "scribbleLine",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673171604/PngItem_642765_vxjz01.png"
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 8005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets_FlexBetween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4955);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_5__);






const cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_5___default()({
    key: "ccss",
    prepend: true
});
function SideBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
        value: cache,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "App-navigation",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "ui-section-header__layout ui-layout-flex",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673004204/letter-l_pcq0m6.png",
                            height: "80px",
                            width: "80px",
                            loading: "lazy"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_FlexBetween__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    sx: {
                        height: "30vh",
                        flexDirection: "column",
                        justifyContent: "space-Between"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>router.push("/top-tracks"),
                                className: router.pathname == "/top-tracks" ? "App-navigation__link active" : "App-navigation__link",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                        className: "icon",
                                        src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/microphone_kobhxr.png"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "sideText",
                                        children: "Top Tracks"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>router.push("/top-artists"),
                                className: router.pathname == "/top-artists" ? "App-navigation__link active" : "App-navigation__link",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                        className: "icon",
                                        src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/clock_dlnmhg.png"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "sideText",
                                        children: "Top Artists"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>router.push("/recently_played"),
                                className: router.pathname == "/recently_played" ? "App-navigation__link active" : "App-navigation__link",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                        className: "icon",
                                        src: "https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/music_bgxg2f.png"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "sideText",
                                        children: "Recent"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TopBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_AllBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7145);
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9945);
/* harmony import */ var _widgets_TimeButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6818);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function TopBlock(AppProps) {
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("long_term");
    const [blocks, setBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getTop();
    }, [
        time
    ]);
    const renderBlocks = ()=>{
        if (AppProps.type === "recentlyPlayed") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "topBlocksRecentlyPlayed",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        type: AppProps.type
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "songListAndButtons",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_AllBlocks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            data: blocks,
                            type: AppProps.type
                        })
                    })
                ]
            });
        } else if (AppProps.type === "artists") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "topBlocksArtists",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        type: AppProps.type
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "songListAndButtons",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_TimeButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                select: time,
                                onSelect: setTime
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_AllBlocks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                data: blocks,
                                type: AppProps.type
                            })
                        ]
                    })
                ]
            });
        } else if (AppProps.type === "tracks") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "topBlocksTracks",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        type: AppProps.type
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "songListAndButtons",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_TimeButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                select: time,
                                onSelect: setTime
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_AllBlocks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                data: blocks,
                                type: AppProps.type
                            })
                        ]
                    })
                ]
            });
        }
    };
    async function getTop() {
        if (AppProps.type != "recentlyPlayed") {
            try {
                const response = await fetch(`https://api.spotify.com/v1/me/top/${AppProps.type}?limit=50&time_range=${time}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }).then((response)=>response.json()).then((data)=>setBlocks(data.items));
            } catch (error) {
                console.log(error);
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("\uD83E\uDD84 Sorry! Spotify Only Allows a limited number of authentications. If you are seeing this message, we have currently hit our limit", {
                    position: "bottom-right",
                    autoClose: 100000,
                    theme: "light"
                });
            }
        } else if (AppProps.type === "recentlyPlayed") {
            await fetch(`https://us-central1-listi-f7e6a.cloudfunctions.net/app/recently_played/?access_token=${localStorage.getItem("access_token")}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>res.json()).then((data)=>setBlocks(data.items));
        }
    //artist - image , Name,Link , Genres ,
    // Song - image, Name, Link , Artist
    //Recently Played - image, Name, Link, Artist, Time
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: renderBlocks()
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AllBlocks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: ./widgets/FlexStart.tsx


const FlexStart = (0,system_.styled)(material_.Box)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
});
/* harmony default export */ const widgets_FlexStart = (FlexStart);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./widgets/IndividualBlock.tsx




function IndividualBlock(AppProps) {
    const { number , image , genres , link , name , type , artists  } = AppProps;
    const router = (0,router_.useRouter)();
    function adjustToLocalTime() {
        var localDate = new Date(AppProps.timeStamp);
        var HourMinute = localDate.toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
        if (HourMinute[0] === "0") {
            HourMinute = HourMinute.slice(1);
        }
        //if date is not today, show day of week
        if (localDate.toDateString() !== new Date().toDateString()) {
            var DayOfWeek = localDate.toLocaleString([], {
                weekday: "short"
            });
            HourMinute = DayOfWeek + " " + HourMinute;
        }
        return HourMinute;
    }
    var time = adjustToLocalTime();
    function getTitleCase(str) {
        const titleCase = str.toLowerCase().split(" ").map((word)=>{
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
        return titleCase;
    }
    function applyTitleCase(arr) {
        let emptyArr = [];
        arr.map((item)=>{
            item.map((x)=>{
                emptyArr.push(getTitleCase(x));
            });
        });
        return emptyArr.join(" , ");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(widgets_FlexStart, {
        onClick: ()=>{
            router.push(link);
        },
        sx: {
            padding: "10px 20px",
            borderRadius: "1%",
            mb: "10px",
            "&:hover": {
                cursor: "pointer",
                filter: "brightness(110%)"
            }
        },
        className: `individualBlock${AppProps.type}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(widgets_FlexStart, {
                sx: {
                    ml: "30px"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                        sx: {
                            fontSize: "18px",
                            fontWeight: "bold",
                            mr: "10px",
                            color: "#50496d"
                        },
                        children: number
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "crop",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                            className: "listImage",
                            src: image
                        })
                    })
                ]
            }),
            type === "artists" && /*#__PURE__*/ (0,jsx_runtime_.jsx)(widgets_FlexStart, {
                className: "tracksBlock",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    className: "tracksNameArtists",
                    sx: {
                        ml: "15px"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                            sx: {
                                width: "100%",
                                fontSize: "18px"
                            },
                            children: name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                            children: applyTitleCase([
                                genres.slice(0, 3)
                            ])
                        })
                    ]
                })
            }),
            type === "tracks" && /*#__PURE__*/ (0,jsx_runtime_.jsx)(widgets_FlexStart, {
                className: "tracksBlock",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    className: "tracksNameArtists",
                    sx: {
                        ml: "15px"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                            sx: {
                                width: "100%",
                                fontSize: "18px"
                            },
                            children: name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                            children: artists
                        })
                    ]
                })
            }),
            type === "recentlyPlayed" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(widgets_FlexStart, {
                className: "recentlyPlayedBlock",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        className: "RPNameArtists",
                        sx: {
                            ml: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                                sx: {
                                    width: "100%",
                                    fontSize: "18px"
                                },
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                                sx: {
                                    fontWeight: "0"
                                },
                                children: artists
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((Box_default()), {
                        className: "RPTime",
                        children: time
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./widgets/FlexBetween.jsx
var FlexBetween = __webpack_require__(4955);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(9404);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(2268);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(1913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
;// CONCATENATED MODULE: ./widgets/FormDialog.tsx











const cache = cache_default()({
    key: "css",
    prepend: true
});
function FormDialog(AppProps) {
    const [open, setOpen] = external_react_.useState(false);
    const [currentField, updateCurrentField] = external_react_.useState("");
    const handleSubmit = async ()=>{
        handleClose();
        AppProps.setPlaylistTitle(currentField);
        updateCurrentField("");
    };
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleTextChange = (e)=>{
        updateCurrentField(e.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_.CacheProvider, {
        value: cache,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                    className: "scrollButton",
                    onClick: handleClickOpen,
                    children: "Create Playlist"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                    open: open,
                    onClose: handleClose,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((DialogTitle_default()), {
                            className: "dialogTitle",
                            children: "One More Thing!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((DialogContentText_default()), {
                                    className: "dialogContent",
                                    children: "What would you like to name your new playlist?"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((TextField_default()), {
                                    onChange: handleTextChange,
                                    autoFocus: true,
                                    margin: "dense",
                                    name: "name",
                                    fullWidth: true,
                                    variant: "standard",
                                    value: currentField
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((Button_default()), {
                                    className: "dialogButton",
                                    onClick: handleClose,
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((Button_default()), {
                                    className: "dialogButton",
                                    onClick: handleSubmit,
                                    children: "Submit"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./widgets/AlertDialog.tsx











const AlertDialog_cache = cache_default()({
    key: "ccss",
    prepend: true
});
function AlertDialog(props) {
    (0,external_react_.useEffect)(()=>{
        setOpen(true);
    }, [
        props.url
    ]);
    const [open, setOpen] = external_react_.useState(false);
    const router = (0,router_.useRouter)();
    const handleClose = ()=>{
        setOpen(false);
    };
    function openlink(url) {
        const win = window.open(url, "_blank");
        if (win != null) {
            win.focus();
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_.CacheProvider, {
        value: AlertDialog_cache,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((Dialog_default()), {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "popUp",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((DialogTitle_default()), {
                            id: "alert-dialog-title",
                            children: "Success!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                    className: "popUpImg",
                                    src: props.img,
                                    alt: "playlist",
                                    onClick: ()=>openlink(props.url)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((DialogContentText_default()), {
                                    id: "alert-dialog-description",
                                    children: "Your playlist has been created."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "popUpButtonBox",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((Button_default()), {
                                            className: "popUpButtons",
                                            onClick: handleClose,
                                            children: "Close"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((Button_default()), {
                                            className: "popUpButtons",
                                            onClick: ()=>openlink(props.url),
                                            children: "Let Me See!"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./widgets/CreatePlaylist.tsx








const CreatePlaylist_cache = cache_default()({
    key: "ccss",
    prepend: true
});
function CreatePlaylist(props) {
    const [playlistTitle, setPlaylistTitle] = (0,external_react_.useState)(null);
    const [popup, setPopup] = (0,external_react_.useState)(false);
    const [playlistURL, setPlaylistURL] = (0,external_react_.useState)("");
    const [playlistImage, setPlaylistImage] = (0,external_react_.useState)("");
    const [scrollTop, setScrollTop] = (0,external_react_.useState)(true);
    // Isolate Track URIs for Top Tracks
    const trackURI = props.data.map((block)=>block[1].uri);
    // create playlist when form gets submitted
    (0,external_react_.useEffect)(()=>{
        if (playlistTitle != null) {
            createAndAddTracks();
            setPlaylistTitle(null);
        }
    });
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", scrollWatcher);
        return ()=>{
            window.removeEventListener("scroll", scrollWatcher);
        };
    }, []);
    // create popup when url and image state is updated
    (0,external_react_.useEffect)(()=>{
        if (playlistURL != "" && playlistImage != "") {
            setPopup(true);
        }
    }, [
        playlistURL
    ]);
    // get Top 20 Artist URI
    function getURI() {
        const uri = props.data.map((artist)=>artist[1].uri);
        const uriSlice = uri.slice(0, 20);
        const uriId = uriSlice.map((uri)=>uri.slice(15));
        return uriId;
    }
    // get 5 tracks from each artist uri
    async function getTrackForEachArtist() {
        const artistURIs = getURI();
        const tracks = await Promise.all(artistURIs.map((artistURI)=>{
            const playListsongs = fetch(`https://api.spotify.com/v1/artists/${artistURI}/top-tracks?market=US`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            return playListsongs;
        }));
        const jsonTrack = await Promise.all(tracks.map((track)=>track.json()));
        const tracksURI = jsonTrack.map((track)=>track.tracks);
        const topTracks = tracksURI.map((track)=>track.slice(0, 5));
        const collectionOfURIs = topTracks.map((track)=>track.map((track)=>track.uri));
        const finalURIs = collectionOfURIs.flat();
        return finalURIs;
    }
    async function createAndAddTracks() {
        // create Playlist
        const id = localStorage.getItem("id");
        await fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            },
            body: JSON.stringify({
                name: `${playlistTitle}`,
                description: `Your top ${props.type !== `recentlyPlayed` ? props.type : "recent plays"} on Spotify!`
            })
        }).then((response)=>response.json()).then((data)=>{
            // if we are creating a playlist from top tracks
            if (props.type === "tracks") {
                addToPlaylist(data.id);
            // playlist from top artists
            } else if (props.type === "artists") {
                addToPlaylist(data.id);
            } else if (props.type === "recentlyPlayed") {
                addToPlaylist(data.id);
            }
        });
        // add tracks to playlist
        async function addToPlaylist(id) {
            // for top tracks
            if (props.type === "tracks") {
                await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    },
                    body: JSON.stringify({
                        uris: trackURI
                    })
                });
            } else if (props.type === "artists") {
                await getTrackForEachArtist().then((tracks)=>{
                    fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                        },
                        body: JSON.stringify({
                            uris: tracks
                        })
                    });
                });
            } else if (props.type === "recentlyPlayed") {
                const recentPlayedURI = props.data.map((block)=>block[1].track.uri);
                await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    },
                    body: JSON.stringify({
                        uris: recentPlayedURI
                    })
                });
            }
            setTimeout(()=>{
                createPopup(id);
            }, 1000);
        }
    }
    async function createPopup(playlistId) {
        await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        }).then((response)=>response.json()).then((data)=>{
            setPlaylistImage(data.images[1].url);
            setPlaylistURL(data.external_urls.spotify);
        });
    }
    function scrollWatcher() {
        if (window.pageYOffset > 0) {
            setScrollTop(false);
        } else if (window.pageYOffset === 0) {
            setScrollTop(true);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_.CacheProvider, {
        value: CreatePlaylist_cache,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBetween/* default */.Z, {
                    className: external_classnames_default()("action-buttons", {
                        "action-buttons--scrolled": !scrollTop
                    }),
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        ...props.sx
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBetween/* default */.Z, {
                            width: "100%",
                            sx: {
                                justifyContent: "center"
                            },
                            className: "action-buttons__info",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBetween/* default */.Z, {
                                    className: "scrollTitle",
                                    children: [
                                        "Create Your Top",
                                        " ",
                                        props.type === "tracks" && "Tracks" || props.type === "artists" && "Artists" || props.type === "recentlyPlayed" && "Recent Hits",
                                        " ",
                                        "Playlist!"
                                    ]
                                }),
                                props.type !== "recentlyPlayed" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBetween/* default */.Z, {
                                    children: [
                                        "This creates a playlist from your Top-50 ",
                                        props.type,
                                        " ",
                                        props.type == "artists" && `with a
          track from each artist.`
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(FlexBetween/* default */.Z, {
                                    children: "This creates a playlist from your 50 most recently played tracks!"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(FormDialog, {
                            type: props.type,
                            data: props.data,
                            setPlaylistTitle: setPlaylistTitle
                        }),
                        popup && /*#__PURE__*/ (0,jsx_runtime_.jsx)(AlertDialog, {
                            url: playlistURL,
                            img: playlistImage
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "extra_box"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./widgets/AllBlocks.tsx



function AllBlocks(AppProps) {
    const array = Object.entries(AppProps.data);
    if (AppProps.type === "artists") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                array.map((block)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(IndividualBlock, {
                        number: parseInt(block[0]) + 1,
                        image: block[1].images[0].url,
                        name: block[1].name,
                        link: block[1].external_urls.spotify,
                        genres: block[1].genres,
                        type: AppProps.type,
                        artists: undefined
                    })),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(CreatePlaylist, {
                    type: AppProps.type,
                    data: array
                })
            ]
        });
    // Tracks List
    } else if (AppProps.type === "tracks") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                array.map((block)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(IndividualBlock, {
                        number: parseInt(block[0]) + 1,
                        image: block[1].album.images[0].url,
                        name: block[1].name,
                        link: block[1].external_urls.spotify,
                        artists: block[1].artists[0].name,
                        type: AppProps.type,
                        genres: undefined
                    })),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(CreatePlaylist, {
                    type: AppProps.type,
                    data: array
                })
            ]
        });
    } else if (AppProps.type === "recentlyPlayed") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                array.map((block)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(IndividualBlock, {
                        image: block[1].track.album.images[0].url,
                        name: block[1].track.name,
                        link: block[1].track.external_urls.spotify,
                        artists: block[1].track.artists[0].name,
                        type: AppProps.type,
                        timeStamp: block[1].played_at
                    })),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(CreatePlaylist, {
                    type: AppProps.type,
                    data: array
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
}


/***/ }),

/***/ 4955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const FlexBetween = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    display: "flex",
    alignItems: "center"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexBetween);


/***/ }),

/***/ 6818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TimeButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function TimeButtons(AppProps) {
    const lengths = [
        "long_term",
        "medium_term",
        "short_term"
    ];
    const labels = {
        long_term: "All time",
        medium_term: "Last 6 months",
        short_term: "Last month"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "timeButtonSelector",
        children: lengths.map((length)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: ()=>AppProps.onSelect(length),
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("time-option", {
                    "time--active": length === AppProps.select
                }),
                children: labels[length]
            }))
    });
}


/***/ })

};
;
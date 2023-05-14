// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
//header lnb mouseover mouseleave event
// window.addEventListener('DOMContentLoaded', () => {
//     const mainLogo = document.querySelector('.logoimg');
//     const lnbA = document.querySelectorAll('.head_lnb li');
//     const head = document.querySelector('header');
//     const aTag = document.querySelectorAll('.head_lnb li a')
//     const gnbI = document.querySelectorAll('.head_gnb li a i')

//     head.addEventListener('mouseover', () => {

//         mainLogo.setAttribute('src', 'img/LOGO/01(1).png')
//         head.style.backgroundColor = '#fff'

//         for (let i = 0; i < aTag.length; i++) {
//             aTag[i].style.color = 'black'
//         }
//         for (let i = 0; i < lnbA.length; i++) {
//             lnbA[i].style.color = 'black'
//         }
//         gnbI.forEach((value) => {
//             value.style.color = 'black'
//         })

//     })

//     head.addEventListener('mouseleave', () => {

//         mainLogo.setAttribute('src', 'img/LOGO/01(3).png')
//         head.style.backgroundColor = ''

//         for (let i = 0; i < aTag.length; i++) {
//             aTag[i].style.color = '#fff'
//         }
//         gnbI.forEach((value) => {
//             value.style.color = '#fff'
//         })

//     })

// });

//마우스오버 이벤트고민좀 하자,,,

window.addEventListener('mouseover', function () {
  var mainLogo = document.querySelector('.logoimg');
  var lnbA = document.querySelectorAll('.head_lnb li');
  var head = document.querySelector('header');
  var aTag = document.querySelectorAll('.head_lnb li a');
  var gnbI = document.querySelectorAll('.head_gnb li a i');
  if (window.scrollY === 0) {
    // head.style.backgroundColor = '#fff'

    mainLogo.setAttribute('src', './img/LOGO/01(1).png');

    // for (let i = 0; i < aTag.length; i++) {
    //     aTag[i].style.color = 'black'
    // }
    // for (let i = 0; i < lnbA.length; i++) {
    //     lnbA[i].style.color = 'black'
    // }
    // gnbI.forEach((value) => {
    //     value.style.color = 'black'
    // })
  }
  // else if(window.scrollY >= 100){
  //     for (let i = 0; i < lnbA.length; i++) {
  //         gnbI[i].style.color = 'black'
  //     }

  //     mainLogo.setAttribute('src', 'img/LOGO/01(3).png')
  // }
});

window.addEventListener('scroll', function (e) {
  var mainLnb = document.querySelectorAll('.head_lnb ul li a');
  var mainGnb = document.querySelectorAll('.head_gnb ul li a');
  var mainLogo = document.querySelector('.head_logo .imgwrap img');
  if (window.scrollY > 100) {
    document.querySelector('header').style.backgroundColor = '#fff';
    mainLogo.setAttribute('src', 'img/LOGO/01(1).png');
    for (var i = 0; i < mainLnb.length; i++) {
      mainLnb[i].style.color = 'black';
    }
    for (var _i = 0; _i < mainGnb.length; _i++) {
      mainGnb[_i].style.color = 'black';
    }
  } else if (window.scrollY <= 100) {
    document.querySelector('header').style.backgroundColor = '';
    mainLogo.setAttribute('src', 'img/LOGO/01(3).png');
    for (var _i2 = 0; _i2 < mainLnb.length; _i2++) {
      mainLnb[_i2].style.color = '#fff';
    }
    for (var _i3 = 0; _i3 < mainGnb.length; _i3++) {
      mainGnb[_i3].style.color = '#fff';
    }
  }
});

// header wheel, add remove class event
window.addEventListener('wheel', function (e) {
  var headFix = document.querySelector('header');
  if (e.deltaY > 10) {
    headFix.classList.remove("head_up");
    headFix.classList.add("head_down");
  } else if (e.deltaY == 0) {
    headFix.classList.add("head_down");
  } else if (e.deltaY < -10) {
    headFix.classList.remove("head_down");
    headFix.classList.add("head_up");
  }
});

//header wheel, add remove class event
// window.addEventListener('wheel', (e) => {

//     const headFix = document.querySelector('header');

//     if (e.deltaY > 100 && scrollY > 100) { 
//         headFix.classList.remove("head_up");
//         headFix.classList.add("head_down");

//     } else if (e.deltaY == 0) { 
//         headFix.classList.add("head_down");

//     } else if (e.deltaY < -50) {
//         headFix.classList.remove("head_down");
//         headFix.classList.add("head_up");
//     }

// })

//popup close btn event
document.addEventListener('DOMContentLoaded', function () {
  var closeBtn = document.querySelector('.close_btn');
  var popupCount = document.querySelector('.countdown');
  closeBtn.addEventListener('click', function () {
    popupCount.style.display = 'none';
  });
});

//신제품 상품정보 event
document.addEventListener('DOMContentLoaded', function () {
  var newInfoBtn = document.querySelector('.new_info');
  var newInfoDesc = document.querySelector('.new_info_desc');
  var newInfoClose = document.querySelector('.new_box_close');
  newInfoBtn.addEventListener('click', function () {
    newInfoDesc.style.display = 'block';
  });
  newInfoClose.addEventListener('click', function () {
    newInfoDesc.style.display = 'none';
  });
});

//추천상품 circle click event
document.addEventListener('DOMContentLoaded', function () {
  var circle = document.querySelector('.rec_circle');
  var textBox = document.querySelector('.rec_text');
  var lineSpan = document.querySelector('.spanline2');
  var state = false;
  circle.addEventListener('click', function () {
    if (!state) {
      textBox.style.display = 'block';
      lineSpan.style.transform = 'rotate(0deg)';
      state = true;
    } else if (state) {
      textBox.style.display = 'none';
      lineSpan.style.transform = 'rotate(90deg)';
      state = false;
    }
  });
});

//gnb search box  click event
document.addEventListener('DOMContentLoaded', function () {
  var searchClose = document.querySelector('.search_close');
  var searchBox = document.querySelector('.search_box');
  searchClose.addEventListener('click', function () {
    searchBox.style.display = 'none';
  });
  var gnbSearch = document.querySelector('.gnb_search');
  gnbSearch.addEventListener('click', function () {
    searchBox.style.display = 'block';
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50363" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
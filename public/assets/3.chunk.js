webpackJsonp([3],{77:function(module,exports){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Posts\nvar LOAD_POSTS_REQUEST = exports.LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';\nvar LOAD_POSTS_SUCCESS = exports.LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';\nvar LOAD_POSTS_FAILURE = exports.LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';\n\n// Single Post\nvar LOAD_POST_REQUEST = exports.LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';\nvar LOAD_POST_SUCCESS = exports.LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';\nvar LOAD_POST_FAILURE = exports.LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';\n\n//////////////////\n// WEBPACK FOOTER\n// ./common/constants.js\n// module id = 77\n// module chunks = 3 4\n//# sourceURL=webpack:///./common/constants.js?")},116:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selectPosts = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = posts;\n\nvar _constants = __webpack_require__(77);\n\nvar types = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar initialState = {\n  data: [],\n  lastFetched: null,\n  isLoading: false,\n  error: null\n};\n\nfunction posts() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case types.LOAD_POSTS_REQUEST:\n      return _extends({}, state, {\n        isLoading: true,\n        error: null });\n    case types.LOAD_POSTS_SUCCESS:\n      return _extends({}, state, {\n        data: action.payload,\n        lastFetched: action.meta.lastFetched,\n        isLoading: false });\n    case types.LOAD_POSTS_FAILURE:\n      return _extends({}, state, {\n        error: action.payload });\n    default:\n      return state;\n  }\n}\n\n// Example of a co-located selector\nvar selectPosts = exports.selectPosts = function selectPosts(state) {\n  return state.posts;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./common/routes/PostList/reducer.js\n// module id = 116\n// module chunks = 3\n//# sourceURL=webpack:///./common/routes/PostList/reducer.js?")},180:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redial = __webpack_require__(170);\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(307);\n\nvar _reactRedux = __webpack_require__(105);\n\nvar _PostListItem = __webpack_require__(308);\n\nvar _PostListItem2 = _interopRequireDefault(_PostListItem);\n\nvar _aphrodite = __webpack_require__(35);\n\nvar _reactHelmet = __webpack_require__(87);\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nvar _reducer = __webpack_require__(116);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar redial = {\n  fetch: function fetch(_ref) {\n    var dispatch = _ref.dispatch;\n    return dispatch((0, _actions.loadPosts)());\n  }\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    posts: (0, _reducer.selectPosts)(state)\n  };\n};\n\nvar PostListPage = function PostListPage(_ref2) {\n  var posts = _ref2.posts;\n  return _react2.default.createElement(\n    'div',\n    { className: (0, _aphrodite.css)(styles.root) },\n    _react2.default.createElement(_reactHelmet2.default, { title: 'Posts' }),\n    posts.isLoading && _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h2',\n        { className: (0, _aphrodite.css)(styles.title) },\n        'Loading....'\n      )\n    ),\n    !posts.isLoading && posts.data.map(function (post, i) {\n      return _react2.default.createElement(_PostListItem2.default, { key: post.id, post: post });\n    })\n  );\n};\n\nPostListPage.PropTypes = {\n  posts: _react.PropTypes.array.isRequired\n};\n\nvar styles = _aphrodite.StyleSheet.create({\n  root: {\n    maxWidth: 500\n  },\n  title: {\n    fontSize: 28,\n    margin: '0 auto 1.5rem',\n    color: '#b7b7b7'\n  }\n});\n\nexports.default = (0, _redial.provideHooks)(redial)((0, _reactRedux.connect)(mapStateToProps)(PostListPage));\n\n//////////////////\n// WEBPACK FOOTER\n// ./common/routes/PostList/containers/PostList.js\n// module id = 180\n// module chunks = 3\n//# sourceURL=webpack:///./common/routes/PostList/containers/PostList.js?")},307:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadPosts = loadPosts;\n\nvar _constants = __webpack_require__(77);\n\nfunction loadPosts() {\n  return function (dispatch, getState, _ref) {\n    var axios = _ref.axios;\n    var _getState$sourceReque = getState().sourceRequest,\n        protocol = _getState$sourceReque.protocol,\n        host = _getState$sourceReque.host;\n\n    dispatch({ type: _constants.LOAD_POSTS_REQUEST });\n    return axios.get(protocol + '://' + host + '/api/v0/posts').then(function (res) {\n      dispatch({\n        type: _constants.LOAD_POSTS_SUCCESS,\n        payload: res.data,\n        meta: {\n          lastFetched: Date.now()\n        }\n      });\n    }).catch(function (error) {\n      console.error('Error in reducer that handles ' + _constants.LOAD_POSTS_SUCCESS + ': ', error);\n      dispatch({\n        type: _constants.LOAD_POSTS_FAILURE,\n        payload: error,\n        error: true\n      });\n    });\n  };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./common/routes/PostList/actions.js\n// module id = 307\n// module chunks = 3\n//# sourceURL=webpack:///./common/routes/PostList/actions.js?")},308:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(253);\n\nvar _aphrodite = __webpack_require__(35);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PostListItem = function PostListItem(_ref) {\n  var post = _ref.post;\n  return _react2.default.createElement(\n    'div',\n    { className: (0, _aphrodite.css)(styles.root) },\n    _react2.default.createElement(\n      'h3',\n      null,\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/post/' + post.slug, className: (0, _aphrodite.css)(styles.title) },\n        ' ',\n        post.title,\n        ' '\n      )\n    )\n  );\n};\n\nvar styles = _aphrodite.StyleSheet.create({\n  root: {\n    margin: '0 auto 1.5rem'\n  },\n  title: {\n    fontSize: 28,\n    textDecoration: 'none',\n    lineHeight: '1.2',\n    margin: '0 0 1.5rem',\n    color: '#000',\n    transition: '.3s opacity ease',\n    ':hover': {\n      opacity: 0.5\n    }\n  }\n});\n\nexports.default = PostListItem;\n\n//////////////////\n// WEBPACK FOOTER\n// ./common/routes/PostList/components/PostListItem.js\n// module id = 308\n// module chunks = 3\n//# sourceURL=webpack:///./common/routes/PostList/components/PostListItem.js?")}});
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ef-core/src/ef-core.js":
/*!*********************************************!*\
  !*** ./node_modules/ef-core/src/ef-core.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* unused harmony export version */
/* harmony import */ var _lib_renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/renderer.js */ "./node_modules/ef-core/src/lib/renderer.js");
/* harmony import */ var _lib_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/creator.js */ "./node_modules/ef-core/src/lib/creator.js");
/* harmony import */ var _mount_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mount-options.js */ "./node_modules/ef-core/src/mount-options.js");
/* harmony import */ var _lib_map_attrs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/map-attrs.js */ "./node_modules/ef-core/src/lib/map-attrs.js");
/* harmony import */ var _lib_render_queue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _lib_utils_debug_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/utils/debug.js */ "./node_modules/ef-core/src/lib/utils/debug.js");
/* harmony import */ var _lib_utils_type_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils/type-of.js */ "./node_modules/ef-core/src/lib/utils/type-of.js");
/* harmony import */ var _lib_utils_scoped_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/utils/scoped-component.js */ "./node_modules/ef-core/src/lib/utils/scoped-component.js");
/* harmony import */ var _lib_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/utils/dom-helper.js */ "./node_modules/ef-core/src/lib/utils/dom-helper.js");
/* harmony import */ var _lib_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/utils/namespaces.js */ "./node_modules/ef-core/src/lib/utils/namespaces.js");
// Import everything











const registerNS = (attrs, component) => {
	for (let i in attrs) {
		if (i.indexOf('xmlns:') === 0) {
			const [, prefix] = i.split(':')
			component.__local_namespaces[prefix] = attrs[i]
		}
	}
}

// Intialize components
const initComponent = (component, node) => {
	const nodeType = (0,_lib_utils_type_of_js__WEBPACK_IMPORTED_MODULE_6__["default"])(node)
	switch (nodeType) {
		case 'array': {
			const [info, ...childNodes] = node
			if ((0,_lib_utils_type_of_js__WEBPACK_IMPORTED_MODULE_6__["default"])(info) === 'object') {
				component.__used_tags[info.t] = true
				if (info.a) registerNS(info.a, component)
				for (let i of childNodes) initComponent(component, i)
			}
			break
		}
		case 'object': {
			if (node.t > 1) throw new TypeError(`[EF] Not a standard ef.js AST: Unknown mount point type '${node.t}'`)
			;(0,_lib_creator_js__WEBPACK_IMPORTED_MODULE_1__.applyMountPoint)(node.t, node.n, component)
			break
		}
		case 'string': {
			break
		}
		default: {
			throw new TypeError(`[EF] Not a standard ef.js AST: Unknown node type '${nodeType}'`)
		}
	}
}

/**
 * @typedef {import('./mount-options.js').EFMountOption} EFMountOption
 * @typedef {import('./mount-options.js').EFMountConfig} EFMountConfig
 * @typedef {import('./lib/renderer.js').EFAST} EFAST
 * @typedef {import('./lib/renderer.js').EFBaseClass} EFBaseClass
 * @typedef {import('./lib/renderer.js').EFEventHandlerArg} EFEventHandlerArg
 * @typedef {import('./lib/renderer.js').EFEventHandlerMethod} EFEventHandlerMethod
 * @typedef {import('./lib/renderer.js').EFSubscriberHandlerArg} EFSubscriberHandlerArg
 * @typedef {import('./lib/renderer.js').EFSubscriberHandlerMethod} EFSubscriberHandlerMethod
 * @typedef {import('./lib/renderer.js').EFTemplateScope} EFTemplateScope
 * @typedef {import('./lib/renderer.js').Fragment} Fragment
 * @typedef {import('./lib/renderer.js').EFNodeWrapper} EFNodeWrapper
 * @typedef {import('./lib/renderer.js').EFTextFragment} EFTextFragment
 * @typedef {import('./lib/utils/event-helper.js').EFEventOptions} EFEventOptions
 */

// eslint-disable-next-line valid-jsdoc
/**
 * Create a brand new component class for the new component
 * @param {EFAST} ast - AST for the component
 * @param {string=} name - Name of the component
 */
const create = (ast, name) => {

	/**
	 * The very basic component which users can use
	 * @class EFComponent
	 * @param {Object=} initState - Initial state for the component to create with
	 * @param {EFTemplateScope=} scope - Scope for the component to render template with
	 */
	const EFComponent = class extends _lib_renderer_js__WEBPACK_IMPORTED_MODULE_0__.EFBaseComponent {

		/**
		 * Create an EFComponent with initial state
		 * @param {Object=} initState - Initial state for the component to create with
		 * @param {EFTemplateScope=} scope - Scope for the component to render template with
		 */
		constructor(initState, scope) {
			;(0,_lib_render_queue_js__WEBPACK_IMPORTED_MODULE_4__.inform)()
			super(ast, scope)
			if (initState) this.$update(initState)
			;(0,_lib_render_queue_js__WEBPACK_IMPORTED_MODULE_4__.exec)()
		}
	}

	if (name) {
		Object.defineProperty(EFComponent, 'name', {value: name})
	}

	// Workaround for a bug of buble
	// https://github.com/bublejs/buble/issues/197
	Object.defineProperty(EFComponent.prototype, 'constructor', {enumerable: false})

	Object.defineProperty(EFComponent, '__local_namespaces', {enumerable: false, value: {}})
	Object.defineProperty(EFComponent, '__used_tags', {enumerable: false, value: {}})
	Object.defineProperty(EFComponent, '__component_ast', {enumerable: false, value: ast})

	initComponent(EFComponent, ast)
	return EFComponent
}

let coreVersion = '0.17.5'

if (true) {
	coreVersion = `${coreVersion}+debug`

	_lib_utils_debug_js__WEBPACK_IMPORTED_MODULE_5__["default"].info(`ef-core v${coreVersion} initialized!`)

	if (typeof globalThis !== 'undefined') {
		if (!globalThis.devtoolsFormatters) globalThis.devtoolsFormatters = []

		const shallowCloneObj = (obj, deletes) => {
			const cloned = Object.create(null)
			const descriptors = Object.getOwnPropertyDescriptors(obj)
			if (deletes) {
				for (let i of deletes) {
					delete descriptors[i]
				}
			}
			Object.defineProperties(cloned, descriptors)
			return cloned
		}

		const formatter = {
			header(obj, config) {
				if (config && config.__raw) return null
				if (obj instanceof _lib_renderer_js__WEBPACK_IMPORTED_MODULE_0__.EFBaseComponent) return ['div', {style: 'font-weight: bold; color: #5ccccc'}, `>${obj.constructor.name || '[Anonymous]'}`]
				return null
			},
			hasBody() {
				return true
			},
			body(obj) {
				const mountPoints = Object.create(null)
				for (let i in obj.$ctx.children) {
					mountPoints[i] = obj.$ctx.children[i].node
				}

				const elements = [
					['div', {style: 'color: #4bcb5b'}, '$data:           ', ['object', {object: Object.assign(Object.create(null), obj.$ctx.data)}]],
					['div', {style: 'color: #4bcb5b'}, '$refs:           ', ['object', {object: shallowCloneObj(obj.$ctx.refs)}]],
					['div', {style: 'color: #4bcb5b'}, '$methods:        ', ['object', {object: shallowCloneObj(obj.$ctx.methods)}]],
					['div', {style: 'color: #4bcb5b'}, '[[mountpoints]]: ', ['object', {object: mountPoints}]],
					['div', {style: 'color: #cc22bb'}, '[[props]]:       ', ['object', {object: shallowCloneObj(obj, ['$ctx'])}]],
					['div', {style: 'color: #4bcb5b88'}, '[[element]]:     ', ['object', {object: obj.$ctx.nodeInfo.element}]],
					['div', {style: 'color: #4bcb5b88'}, '[[parent]]:      ', ['object', {object: obj.$ctx.nodeInfo.parent}]],
					['div', {style: 'color: #4bcb5b88'}, '[[slot]]:        ', ['object', {object: obj.$ctx.nodeInfo.key}]]
				]
				return ['div', {}, ...elements]
			}
		}

		globalThis.devtoolsFormatters.push(formatter)
	}
}




/***/ }),

/***/ "./node_modules/ef-core/src/lib/binding.js":
/*!*************************************************!*\
  !*** ./node_modules/ef-core/src/lib/binding.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolver.js */ "./node_modules/ef-core/src/lib/resolver.js");
/* harmony import */ var _render_queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");
/* harmony import */ var _utils_isnan_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isnan.js */ "./node_modules/ef-core/src/lib/utils/isnan.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/debug.js */ "./node_modules/ef-core/src/lib/utils/debug.js");






const initDataNode = (ctx, {parentNode, dataNode, handlerNode, subscriberNode, _key}) => {
	const { state } = ctx

	const applyQueue = () => (0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.queue)(...handlerNode)
	let updateInProgress = false

	Object.defineProperty(parentNode, _key, {
		get() {
			return dataNode[_key]
		},
		set(value) {
			const oldValue = dataNode[_key]
			// Comparing NaN is like eating a cake and suddenly encounter a grain of sand
			if (updateInProgress || oldValue === value || ((0,_utils_isnan_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oldValue) && (0,_utils_isnan_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value))) return

			updateInProgress = true

			dataNode[_key] = value

			;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.inform)()

			;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.queue)(applyQueue)

			if (subscriberNode.length > 0) {
				try {
					for (const subscriber of subscriberNode) subscriber({state, value, oldValue})
				} catch (e) {
					_utils_debug_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('Error caught when executing subscribers:\n', e)
				}
			}

			(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.exec)()

			updateInProgress = false
		},
		enumerable: true
	})

	// Handle class data
	;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.queue)(applyQueue)
}

const initBinding = (ctx, {bind}) => {
	const _path = _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].copy(bind[0])
	const _key = _path.pop()

	const {data, handlers, subscribers, innerData} = ctx

	const {parentNode, handlerNode, subscriberNode, dataNode} = (0,_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolve)({
		_path,
		_key,
		data,
		handlers,
		subscribers,
		innerData
	})

	// Initlize data binding node if not initialized
	const keyStatus = Object.getOwnPropertyDescriptor(parentNode, _key)
	if (!keyStatus || !(keyStatus.get || keyStatus.set)) initDataNode(ctx, {parentNode, dataNode, handlerNode, subscriberNode, _key})
	// Update default value
	// bind[1] is the default value for this node
	// Only apply default value when class def doesn't exist
	if (bind.length > 1 && typeof dataNode[_key] === 'undefined') parentNode[_key] = bind[1]

	return {dataNode, parentNode, handlerNode, subscriberNode, _key}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBinding);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/creator.js":
/*!*************************************************!*\
  !*** ./node_modules/ef-core/src/lib/creator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyMountPoint: () => (/* binding */ applyMountPoint),
/* harmony export */   checkDestroyed: () => (/* binding */ checkDestroyed),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   nullComponent: () => (/* binding */ nullComponent)
/* harmony export */ });
/* harmony import */ var _element_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-creator.js */ "./node_modules/ef-core/src/lib/element-creator.js");
/* harmony import */ var _render_queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom-helper.js */ "./node_modules/ef-core/src/lib/utils/dom-helper.js");
/* harmony import */ var _utils_string_ops_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/string-ops.js */ "./node_modules/ef-core/src/lib/utils/string-ops.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/namespaces.js */ "./node_modules/ef-core/src/lib/utils/namespaces.js");
/* harmony import */ var _utils_noop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/noop.js */ "./node_modules/ef-core/src/lib/utils/noop.js");
/* harmony import */ var _utils_dom_arr_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/dom-arr-helper.js */ "./node_modules/ef-core/src/lib/utils/dom-arr-helper.js");
/* harmony import */ var _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");
/* harmony import */ var _utils_type_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/type-of.js */ "./node_modules/ef-core/src/lib/utils/type-of.js");
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./binding.js */ "./node_modules/ef-core/src/lib/binding.js");
/* harmony import */ var _mount_options_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mount-options.js */ "./node_modules/ef-core/src/mount-options.js");
/* harmony import */ var _utils_global_shared_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/global-shared.js */ "./node_modules/ef-core/src/lib/utils/global-shared.js");














const svgNS = (0,_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_4__.getNamespace)('svg')
const mathNS = (0,_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_4__.getNamespace)('math')
const htmlNS = (0,_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_4__.getNamespace)('html')

const nullComponent = Object.create(null)

const checkDestroyed = (state) => {
	if (!state.$ctx) throw new Error('[EF] This component has been destroyed!')
}

const bindTextNode = (ctx, node, apply) => {
	// Data binding text node
	const textNode = _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createTextNode('')
	const { dataNode, handlerNode, _key } = (0,_binding_js__WEBPACK_IMPORTED_MODULE_9__["default"])(ctx, {bind: node})
	const handler = () => {
		const value = dataNode[_key]
		if (typeof value === 'undefined') {
			textNode.textContent = ''
			return
		}
		textNode.textContent = value
	}
	handlerNode.push(handler)

	// Append element to the component
	apply(textNode)
}

const updateMountNode = (ctx, key, value) => {
	const {children} = ctx
	const child = children[key]
	const {anchor, node} = child
	if (node === value) return

	value = _utils_global_shared_js__WEBPACK_IMPORTED_MODULE_11__["default"].toEFComponent(value)

	;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.inform)()
	// Update component
	if (node) {
		if (value === nullComponent) value = null
		else node.$umount()
	}
	// Update stored value
	child.node = value
	if (value) value.$mount({target: anchor, parent: ctx.state, option: _mount_options_js__WEBPACK_IMPORTED_MODULE_10__["default"].AFTER, key})
	;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.exec)()
}

const updateMountList = (ctx, key, value) => {
	const {children} = ctx
	const {anchor, node} = children[key]
	if (_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_7__["default"].equals(node, value)) return
	;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.inform)()
	if (node.length) node.clear()
	if (value) {
		value = _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_7__["default"].copy(value)
		;(0,_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.useFragment)((fragment, recycleFragment) => {
			// Update components
			for (let item of value) _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.append(fragment, _utils_global_shared_js__WEBPACK_IMPORTED_MODULE_11__["default"].toEFComponent(item).$mount({parent: ctx.state, key}))
			// Update stored value
			_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_7__["default"].push(node, ...value)
			// Append to current component
			;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.queueDom)(() => {
				_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.after(anchor, fragment)
				recycleFragment()
			})
		})
	}
	(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.exec)()
}

const mountPointUpdaters = [
	updateMountNode,
	updateMountList
]

const applyMountPoint = (type, key, tpl) => {
	const updater = mountPointUpdaters[type]
	Object.defineProperty(tpl.prototype, key, {
		get() {
			if (true) checkDestroyed(this)
			return this.$ctx.children[key].node
		},
		set(value) {
			if (true) checkDestroyed(this)
			const ctx = this.$ctx
			updater(ctx, key, value)
		},
		enumerable: true
	})
}

const bindMountNode = (ctx, key, anchor) => {
	const { children } = ctx
	const info = {anchor}
	children[key] = info
	anchor[_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.EFMountPoint] = info
}

// eslint-disable-next-line max-params
const bindMountList = (ctx, key, anchor, aftAnchor) => {
	const { children } = ctx
	children[key] = {
		node: (0,_utils_dom_arr_helper_js__WEBPACK_IMPORTED_MODULE_6__["default"])([], {ctx, key, anchor, aftAnchor}),
		anchor,
		aftAnchor
	}
	anchor[_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.EFMountPoint] = children[key]
}

// Walk through the AST to perform proper actions
const resolveAST = (ctx, {apply, node, nodeType, namespace, create}) => {
	if (_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.isNodeInstance(node)) {
		apply(node)
		return
	}

	switch (nodeType) {
		// Static text node
		case 'string': {
			apply(_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createTextNode(node))
			break
		}
		// Child element or a dynamic text node
		case 'array': {
			// Recursive call for child element
			if ((0,_utils_type_of_js__WEBPACK_IMPORTED_MODULE_8__["default"])(node[0]) === 'object') apply(create(ctx, {node, namespace}))
			// Dynamic text node
			else bindTextNode(ctx, node, apply)
			break
		}
		// Mount points
		case 'object': {
			if (true) apply(_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createComment(`<MountPoint${node.t && ' type="list" ' || ' '}name="${node.n}">`))
			const anchor = _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createTextNode('')
			// Append anchor
			apply(anchor)
			// Single node mount point
			if (node.t === 0) bindMountNode(ctx, node.n, anchor)
			else {
				// Multi node mount point
				const aftAnchor = _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createTextNode('')
				apply(aftAnchor)
				bindMountList(ctx, node.n, anchor, aftAnchor)
			}
			if (true) apply(_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createComment('</MountPoint>'))
			break
		}
		default:
	}
}

// Create elements based on description from AST
/* eslint {"complexity": "off"} */
const create = (ctx, {node, namespace}) => {
	const [info, ...childNodes] = node
	const previousNamespace = namespace

	let tagName = info.t
	let isLocalPrefix = false

	const scoped = ctx.scope[tagName]

	const fragment = tagName === 0
	const custom = Object.isPrototypeOf.call(_utils_global_shared_js__WEBPACK_IMPORTED_MODULE_11__["default"].EFBaseComponent, scoped || tagName)

	// Check if element needs a namespace
	if (!fragment && !custom) {
		if (scoped) {
			if (typeof scoped === 'string') tagName = scoped
			else if (scoped.tag) {
				tagName = scoped.tag
				if (scoped.namespaceURI) namespace = scoped.namespaceURI
			}
		}
		if ((0,_utils_string_ops_js__WEBPACK_IMPORTED_MODULE_3__.hasColon)(tagName)) {
			const [prefix, unprefixedTagName] = (0,_utils_string_ops_js__WEBPACK_IMPORTED_MODULE_3__.splitByColon)(tagName)
			const localNamespaceDef = ctx.localNamespaces[prefix]
			if (localNamespaceDef) {
				namespace = localNamespaceDef
				isLocalPrefix = true
			} else {
				namespace = (0,_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_4__.getNamespace)(prefix)
			}
			tagName = unprefixedTagName
		} else if (info.a && info.a.xmlns && (0,_element_creator_js__WEBPACK_IMPORTED_MODULE_0__.typeValid)(info.a.xmlns)) {
			namespace = info.a.xmlns
		} else if (!namespace) {
			tagName = tagName.toLowerCase()
			switch (tagName) {
				case 'svg': {
					namespace = svgNS
					break
				}
				case 'math': {
					namespace = mathNS
					break
				}
				default:
			}
		}
	}

	if (namespace === htmlNS) namespace = ''

	// First create an element according to the description
	const [element, type] = (0,_element_creator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ctx, info, namespace, fragment, custom)

	let apply = _utils_noop_js__WEBPACK_IMPORTED_MODULE_5__["default"]

	switch (type) {
		case 'string':
		case 'object': {
			apply = (...args) => {
				_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.append(element, ...args)
			}
			break
		}

		case 'function': {
			const { children } = element.$ctx
			if (children.children) {
				const anchor = children.children.anchor
				if (anchor) {
					apply = (...args) => {
						_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.before(anchor, ...args)
					}
				}
			} else if (Array.isArray(element.children)) {
				apply = (...args) => {
					element.children.push(...args)
				}
			}
			break
		}

		case 'fragment': {
			apply = (...args) => {
				element.append(...args)
			}
			break
		}

		default:
	}

	if (fragment && "development" !== 'production') apply(_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createComment('<Fragment>'))

	// Leave SVG mode if tag is `foreignObject`
	if (namespace && namespace === svgNS && (0,_utils_string_ops_js__WEBPACK_IMPORTED_MODULE_3__.isSVGEscape)(tagName)) namespace = ''

	// restore previous namespace if namespace is defined locally
	if (isLocalPrefix) namespace = previousNamespace

	// Append child nodes
	for (let node of childNodes) {
		resolveAST(ctx, {apply, node, nodeType: (0,_utils_type_of_js__WEBPACK_IMPORTED_MODULE_8__["default"])(node), namespace, create})
	}
	if (fragment && "development" !== 'production') apply(_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_2__.DOM.document.createComment('</Fragment>'))

	return element
}




/***/ }),

/***/ "./node_modules/ef-core/src/lib/element-creator.js":
/*!*********************************************************!*\
  !*** ./node_modules/ef-core/src/lib/element-creator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   typeValid: () => (/* binding */ typeValid)
/* harmony export */ });
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding.js */ "./node_modules/ef-core/src/lib/binding.js");
/* harmony import */ var _render_queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _resolver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolver.js */ "./node_modules/ef-core/src/lib/resolver.js");
/* harmony import */ var _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");
/* harmony import */ var _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dom-helper.js */ "./node_modules/ef-core/src/lib/utils/dom-helper.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/debug.js */ "./node_modules/ef-core/src/lib/utils/debug.js");
/* harmony import */ var _utils_event_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/event-helper.js */ "./node_modules/ef-core/src/lib/utils/event-helper.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/namespaces.js */ "./node_modules/ef-core/src/lib/utils/namespaces.js");
/* harmony import */ var _utils_string_ops_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/string-ops.js */ "./node_modules/ef-core/src/lib/utils/string-ops.js");










const typeValid = obj => ['number', 'boolean', 'string'].indexOf(typeof obj) > -1

// eslint-disable-next-line max-params
const createByTag = (tagType, tagName, tagContent, attrs, namespace) => {
	switch (tagType) {
		case 'string': {
			if (tagName === tagContent && attrs && attrs.is && typeof attrs.is === 'string') {
				const { is } = attrs
				if (namespace) return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElementNS(namespace, tagContent, {is})
				return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElement(tagContent, {is})
			}

			// Namespaced
			if (namespace) return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElementNS(namespace, tagContent)
			// Then basic HTMLElements
			return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElement(tagContent)
		}
		case 'function': {
			// Then custom component or class based custom component
			return new tagContent()
		}
		default: {
			// Then overriden basic element
			if (tagContent.tag) tagName = tagContent.tag

			if (tagContent.is) {
				const { is } = tagContent
				if (namespace) return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElementNS(namespace, tagName, {is})
				return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElement(tagName, {is})
			}

			if (namespace) return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElementNS(namespace, tagName)
			return _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.createElement(tagName)
		}
	}
}

// eslint-disable-next-line max-params
const getElement = (tagType, tagName, tagContent, attrs, ref, refs, namespace) => {
	const element = createByTag(tagType, tagName, tagContent, attrs, namespace)
	if (ref) Object.defineProperty(refs, ref, {
		value: element,
		enumerable: true
	})
	return element
}

const getVal = (dataNode, key) => {
	const data = dataNode[key]
	if (typeof data === 'undefined') return ''
	return data
}

const regTmpl = (ctx, val, handler) => {
	if (_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(val)) {
		const [strs, ...exprs] = val

		if (!strs) {
			const {dataNode, handlerNode, _key} = (0,_binding_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ctx, {bind: exprs[0]})
			const _handler = () => handler(getVal(dataNode, _key))
			handlerNode.push(_handler)

			return _handler
		}

		const tmpl = new Array(strs.length + exprs.length)
		const evalList = []

		for (let i in strs) {
			tmpl[i * 2] = strs[i]
		}

		const _handler = () => {
			for (let i of evalList) i()
			return handler(''.concat(...tmpl))
		}

		evalList.push(...exprs.map((item, index) => {
			const {dataNode, handlerNode, _key} = (0,_binding_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ctx, {bind: item})
			handlerNode.push(_handler)

			index = index * 2 + 1

			return () => {
				tmpl[index] = getVal(dataNode, _key)
			}
		}))

		return _handler
	}
	return () => val
}

// eslint-disable-next-line max-params
const applyEventListener = (element, custom, handler, {l, s, i, p, h, a, c, t, u, e, o, k}) => {

	/*
	 *  l: listener                 : string
	 *  s: stopPropagation          : number/undefined
	 *  i: stopImmediatePropagation : number/undefined
	 *  p: preventDefault           : number/undefined
	 *  h: shiftKey                 : number/undefined
	 *  a: altKey                   : number/undefined
	 *  c: ctrlKey                  : number/undefined
	 *  t: metaKey                  : number/undefined
	 *  u: capture                  : number/undefined
	 *  e: passive                  : number/undefined
	 *  o: once                     : number/undefined
	 *  k: keyCodes                 : array<number>/undefined
	 */

	const checkEventProps = (event) => {
		if (!!h !== !!event.shiftKey ||
			!!a !== !!event.altKey ||
			!!c !== !!event.ctrlKey ||
			!!t !== !!event.metaKey ||
			(k && k.indexOf(event.which) === -1)) return false
		return true
	}

	const handleStopOptions = (event) => {
		if (s) event.stopPropagation()
		if (i) event.stopImmediatePropagation()
	}

	let eventOptions = {
		capture: !!u
	}

	let baseEventHandler = (event) => {
		handleStopOptions(event)
		if (p && !e) event.preventDefault()
		handler(event)
	}

	let eventHandler = (event) => {
		if (!checkEventProps(event)) return
		baseEventHandler(event)
	}

	if (e || o) {
		const makePassiveEventHandler = () => {
			baseEventHandler = (event) => {
				handleStopOptions(event)
				setTimeout(() => handler(event), 0)
			}
			eventHandler = (event) => {
				if (!checkEventProps(event)) return
				baseEventHandler(event)
			}
		}

		const makeOnceEventHandler = () => {
			const removeListener = custom && '$off' || 'removeEventListener'
			eventHandler = (event) => {
				if (!checkEventProps(event)) return
				element[removeListener](l, eventHandler, eventOptions)
				baseEventHandler(event)
			}
		}

		if (_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.passiveSupported || _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.onceSupported) {
			if (e === 0 && _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.passiveSupported) {
				eventOptions.passive = false
			} else if (e) {
				if (_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.passiveSupported) eventOptions.passive = true
				else makePassiveEventHandler()
			}

			if (o) {
				if (_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.onceSupported) eventOptions.once = true
				else makeOnceEventHandler()
			}

		} else {
			if (e) makePassiveEventHandler()
			if (o) makeOnceEventHandler()
		}
	}

	const addListener = custom && '$on' || 'addEventListener'
	element[addListener](l, eventHandler, eventOptions)
}

// eslint-disable-next-line max-params
const addValListener = (ctx, trigger, updateLock, element, lastNode, key, expr, custom) => {
	const addListener = custom && '$on' || 'addEventListener'
	const {parentNode, _key} = (0,_binding_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ctx, {bind: expr})

	const handler = () => {
		updateLock.locked = true
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.inform)()
		parentNode[_key] = lastNode[key]
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_1__.exec)()
		updateLock.locked = false
	}

	const eventOptions = {
		capture: true
	}

	if (trigger) {
		applyEventListener(element, custom, handler, trigger)
	} else if (key === 'value') {
		// Listen to input, keyup and change events in order to work in most browsers.
		element[addListener]('input', handler, eventOptions)
		element[addListener]('keyup', handler, eventOptions)
		element[addListener]('change', handler, eventOptions)
	} else {
		const dispatch = custom && '$dispatch' || 'dispatchEvent'
		element[addListener]('change', () => {
			// Trigger change to the element it-self
			element[dispatch]((0,_utils_event_helper_js__WEBPACK_IMPORTED_MODULE_6__["default"])('__ef_change_event__'), {bubbles: false, cancelable: false})
			if (element.tagName === 'INPUT' && element.type === 'radio' && element.name !== '') {
				// Trigger change to the the same named radios
				const radios = _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.DOM.document.querySelectorAll(`input[name=${element.name}][type=radio]`)
				if (radios) {
					const selected = _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(radios)
					_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_3__["default"].remove(selected, element)

					/* Event triggering could cause unwanted render triggers
					 * no better ways came up at the moment
					 */
					for (let i of selected) i.dispatchEvent((0,_utils_event_helper_js__WEBPACK_IMPORTED_MODULE_6__["default"])('__ef_change_event__'))
				}
			}
		}, eventOptions)
		// Use custom event to avoid loops and conflicts
		element[addListener]('__ef_change_event__', handler)
	}
}

const getAttrHandler = (ctx, {element, key, custom}) => {
	// Pass directly to custom component
	if (custom) return (val) => {
		element[key] = val
	}

	// Beautify class name
	if (key === 'class') return (val) => {
		val = `${val}`.replace(/\s+/g, ' ').trim()
		// Remove attribute when value is empty
		if (!val) return element.removeAttribute(key)
		element.setAttribute(key, val)
	}

	// Handle namespace
	if ((0,_utils_string_ops_js__WEBPACK_IMPORTED_MODULE_8__.hasColon)(key)) {
		const [prefix] = (0,_utils_string_ops_js__WEBPACK_IMPORTED_MODULE_8__.splitByColon)(key)
		const namespace = ctx.localNamespaces[prefix] || (0,_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_7__.getNamespace)(prefix)
		return (val) => {
			// Remove attribute when value is empty
			if (val === '') return element.removeAttributeNS(namespace, key)
			element.setAttributeNS(namespace, key, val)
		}
	}

	return (val) => {
		// Remove attribute when value is empty
		if (val === '') return element.removeAttribute(key)
		element.setAttribute(key, val)
	}
}

// eslint-disable-next-line max-params
const addAttr = (ctx, element, attr, key, custom) => {
	if (typeValid(attr)) {
		if (custom) {
			if (attr === '') {
				element[key] = true
			} else {
				element[key] = attr
			}

			return
		}
		// Do not set or update `is` again
		if (key === 'is') return
		// Handle namespaces
		if ((0,_utils_string_ops_js__WEBPACK_IMPORTED_MODULE_8__.hasColon)(key)) {
			const [prefix] = (0,_utils_string_ops_js__WEBPACK_IMPORTED_MODULE_8__.splitByColon)(key)
			if (prefix !== 'xmlns') {
				const ns = ctx.localNamespaces[prefix] || (0,_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_7__.getNamespace)(prefix)
				return element.setAttributeNS(ns, key, attr)
			}
		}
		return element.setAttribute(key, attr)
	}

	const handler = getAttrHandler(ctx, {element, key, custom})
	regTmpl(ctx, attr, handler)
}

// eslint-disable-next-line max-params
const addProp = (ctx, element, value, propPath, trigger, updateOnly, custom) => {
	const keyPath = _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(propPath)
	const lastKey = keyPath.pop()
	if (custom) keyPath.unshift('$data')
	const lastNode = (0,_resolver_js__WEBPACK_IMPORTED_MODULE_2__.resolvePath)(keyPath, element)
	if (typeValid(value)) lastNode[lastKey] = value
	else {
		const updateLock = {locked: false}
		let handler = null

		if (updateOnly) {
			handler = () => {
				updateLock.locked = false
			}
		} else {
			handler = (val) => {
				if (!updateLock.locked && lastNode[lastKey] !== val) {
					lastNode[lastKey] = val
				}
				updateLock.locked = false
			}
		}

		regTmpl(ctx, value, handler)
		if (
			trigger ||
			(propPath.length === 1 && (lastKey === 'value' || lastKey === 'checked')) &&
			!value[0]
		) {
			addValListener(ctx, trigger, updateLock, element, lastNode, lastKey, value[1], custom)
		}
	}
}

const rawHandler = val => val

// eslint-disable-next-line max-params
const addEvent = (ctx, element, trigger, custom) => {

	/*
	 *  m: method                   : string
	 *  v: value                    : string/array/undefined
	 */
	const {m, v} = trigger
	const _handler = regTmpl(ctx, v, rawHandler)

	const callEventHandler = (event) => {
		const value = _handler()
		if (ctx.methods[m]) ctx.methods[m]({e: event, event, value, state: ctx.state})
		else if (m) {
			if (true) _utils_debug_js__WEBPACK_IMPORTED_MODULE_5__["default"].warn(`Bubbling up event '${m}'...`)
			event.data = value
			ctx.state.$emit(m, event)
		}
	}

	applyEventListener(element, custom, callEventHandler, trigger)
}

// eslint-disable-next-line max-params
const createElement = (ctx, info, namespace, fragment, custom) => {
	if (fragment) return [new _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_4__.EFFragment(), 'fragment']

	/*
	 *  t: tag           : class | string | int, 0 means fragment
	 *  a: attr          : object
	 *  p: prop          : object
	 *  e: event trigger : array
	 *  r: reference     : string
	 */
	const {t, a, p, e, r} = info
	const tagName = t
	const tagContent = ctx.scope[t] || t
	const tagType = typeof tagContent
	const element = getElement(tagType, tagName, tagContent, a, r, ctx.refs, namespace)
	if (a) for (let key in a) addAttr(ctx, element, a[key], key, custom)
	if (p) for (let [propPath, value, trigger, updateOnly] of p) addProp(ctx, element, value, propPath, trigger, updateOnly, custom)
	if (e) for (let trigger of e) addEvent(ctx, element, trigger, custom)

	return [element, tagType]
}




/***/ }),

/***/ "./node_modules/ef-core/src/lib/map-attrs.js":
/*!***************************************************!*\
  !*** ./node_modules/ef-core/src/lib/map-attrs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getGetter = ({base, key}, {checkTrue, get, set}) => {
	if (get) {
		if (!set) throw new Error('[EF] Setter must be defined when getter exists')
		return get
	}

	if (checkTrue) return function() {
		return checkTrue(base(this)[key], this)
	}

	return function() {
		return base(this)[key]
	}
}

const getSetter = ({base, key}, {checkTrue, trueVal, falseVal, get, set}) => {
	if (set) {
		if (!get) throw new Error('[EF] Getter must be defined when setter exists')
		return set
	}

	if (checkTrue) return function(val) {
		const baseNode = base(this)
		const _trueVal = trueVal
		const _falseVal = falseVal

		if (typeof trueVal !== 'function') trueVal = () => _trueVal
		if (typeof falseVal !== 'function') falseVal = () => _falseVal

		if (val) baseNode[key] = trueVal(this)
		else baseNode[key] = falseVal(this)
	}

	return function(val) {
		base(this)[key] = val
	}
}

const defaultRoot = state => state.$data
const getBase = (root) => {
	if (!root) return defaultRoot
	if (typeof root === 'function') return root
	if (typeof root === 'string') root = root.split('.')
	return (base) => {
		for (let key of root) base = base[key]
		return base
	}
}

/**
 * @typedef {import('./renderer.js').EFBaseClass} EFBaseClass
 */

/**
 * Definition of an attribute mapping
 * @typedef {Object} AttrDef
 * @property {string=} key - key to be accessed on base, default to `attr`
 * @property {Function=} base - a function that returns the base of the key, default returns $data
 * @property {bool=} checkTrue - a function returns true or false based on input value
 * @property {*=} trueVal - value when true, only used when checkTrue is set
 * @property {*=} falseVal - value when false, only used when checkTrue is set
 * @property {Function=} get - getter, will ignore all other settings except set
 * @property {Function=} set - setter, will ignore all other settings except get
 */

/**
 * Data to attribute mapping helper
 * @template {EFBaseClass} T
 * @param {T} tpl - Component class to be mapped
 * @param {Object.<string,AttrDef>} attrMap - Attributes to be mapped
 * @returns {T} - Mapped component class
 */
const mapAttrs = (tpl, attrMap) => {
	for (let attr in attrMap) {
		const options = attrMap[attr]

		const base = getBase(options.base)
		const key = options.key || attr

		const basicProperty = {base, key}

		const get = getGetter(basicProperty, options)
		const set = getSetter(basicProperty, options)

		Object.defineProperty(tpl.prototype, attr, {
			get,
			set,
			enumerable: true,
			configurable: false
		})
	}

	return tpl
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapAttrs);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/render-queue.js":
/*!******************************************************!*\
  !*** ./node_modules/ef-core/src/lib/render-queue.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exec: () => (/* binding */ exec),
/* harmony export */   inform: () => (/* binding */ inform),
/* harmony export */   queue: () => (/* binding */ queue),
/* harmony export */   queueDom: () => (/* binding */ queueDom)
/* harmony export */ });
/* unused harmony exports onNextRender, bundle, isPaused */
/* harmony import */ var _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");


const userQueue = []
let count = 0

const modificationQueue = {
	first: null,
	last: null
}

const domQueue = {
	first: null,
	last: null
}

// const queue = handlers => modificationQueue.push(...handlers)
const onNextRender = handler => userQueue.push(handler)

const addQueue = (ctx, handler) => {
	if (handler === ctx.last) return

	if (handler.__next) handler.__next.__prev = handler.__prev
	if (handler.__prev) handler.__prev.__next = handler.__next

	if (ctx.first) {
		if (handler === ctx.first) ctx.first = handler.__next
	} else ctx.first = handler

	if (ctx.last) {
		ctx.last.__next = handler
		handler.__prev = ctx.last
	}

	ctx.last = handler
	ctx.first.__prev = null
	ctx.last.__next = null
}

const runQueue = (ctx) => {
	let currentFn = ctx.first
	if (!currentFn) return

	const queueArr = []
	while (currentFn) {
		const nextFn = currentFn.__next
		currentFn.__prev = null
		currentFn.__next = null
		queueArr.push(currentFn)
		currentFn = nextFn
	}

	ctx.first = null
	ctx.last = null

	for (let i of queueArr) i()
}

const queue = (...handlers) => {
	for (let i of handlers) addQueue(modificationQueue, i)
}

const queueDom = (handler) => {
	addQueue(domQueue, handler)
}

/**
 * @returns {boolean} - Is render paused
 */
const isPaused = () => count > 0

/**
 * Add 1 to render count down.
 * When countdown becomes 0, render will be triggered.
 * @returns {number} - Render count down
 */
const inform = () => {
	count += 1
	return count
}

/**
 * Minus 1 to render count down.
 * When countdown becomes 0, render will be triggered.
 * @param {boolean=} immediate - Render immediately, will force countdown become 0
 * @returns {number} - Render count down
 */
const exec = (immediate) => {
	if (!immediate && (count -= 1) > 0) return count

	count = 1

	while (modificationQueue.first) runQueue(modificationQueue)
	while (domQueue.first) runQueue(domQueue)

	count = 0

	// Execute user queue after DOM update
	if (userQueue.length) {
		const _userQueue = _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(userQueue)
		_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].empty(userQueue)
		setTimeout(() => {
			for (let i of _userQueue) i()
		}, 0)
	}

	return count
}

/**
 * Run callback in a safe way, without worrying about unhandled errors may break rendering.
 * @param {Function} cb - Callback function to be executed safly
 * @returns {(void|Error)} - Error that happens when executing callback
 */
const bundle = (cb) => {
	inform()
	try {
		// eslint-disable-next-line callback-return
		exec(cb(inform, exec))
	} catch (e) {
		exec()
		return e
	}
}




/***/ }),

/***/ "./node_modules/ef-core/src/lib/renderer.js":
/*!**************************************************!*\
  !*** ./node_modules/ef-core/src/lib/renderer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EFBaseComponent: () => (/* binding */ EFBaseComponent)
/* harmony export */ });
/* unused harmony exports EFNodeWrapper, EFTextFragment, Fragment, toEFComponent */
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./node_modules/ef-core/src/lib/creator.js");
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding.js */ "./node_modules/ef-core/src/lib/binding.js");
/* harmony import */ var _render_queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _resolver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolver.js */ "./node_modules/ef-core/src/lib/resolver.js");
/* harmony import */ var _map_attrs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-attrs.js */ "./node_modules/ef-core/src/lib/map-attrs.js");
/* harmony import */ var _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/dom-helper.js */ "./node_modules/ef-core/src/lib/utils/dom-helper.js");
/* harmony import */ var _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");
/* harmony import */ var _utils_polyfills_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/polyfills.js */ "./node_modules/ef-core/src/lib/utils/polyfills.js");
/* harmony import */ var _utils_fast_instance_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/fast-instance-of.js */ "./node_modules/ef-core/src/lib/utils/fast-instance-of.js");
/* harmony import */ var _utils_type_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/type-of.js */ "./node_modules/ef-core/src/lib/utils/type-of.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/debug.js */ "./node_modules/ef-core/src/lib/utils/debug.js");
/* harmony import */ var _utils_event_helper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/event-helper.js */ "./node_modules/ef-core/src/lib/utils/event-helper.js");
/* harmony import */ var _mount_options_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mount-options.js */ "./node_modules/ef-core/src/mount-options.js");
/* harmony import */ var _utils_global_shared_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/global-shared.js */ "./node_modules/ef-core/src/lib/utils/global-shared.js");
















const unsubscribe = (pathStr, fn, subscribers) => {
	const subscriberNode = (0,_resolver_js__WEBPACK_IMPORTED_MODULE_3__.resolveSubscriber)(pathStr, subscribers)
	_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_6__["default"].remove(subscriberNode, fn)
}

/**
 * @typedef {Array} EFAST
 * @typedef {Object.<string,EFBaseComponent>} EFTemplateScope
 */

/**
 * @typedef {Object} EFSubscriberHandlerArg
 * @property {EFBaseComponent} ctx - The component who calls the handler
 * @property {*} value - Value been subscribed
 */

/**
 * @event Event
 */

/**
 * @typedef {Object} EFEventHandlerArg
 * @property {EFBaseComponent} ctx - The component who calls the handler
 * @property {*} value - Value been passed to the event handler
 * @property {Event} event - Event object that has been triggered
 */

/**
 * @typedef {Function} EFSubscriberHandlerMethod
 * @param {EFSubscriberHandlerArg} arg
 * @returns {void}
 */

/**
 * @typedef {Function} EFEventHandlerMethod
 * @param {EFEventHandlerArg} arg
 * @returns {void}
 */

/**
 * The very basic ef component
 * @class EFBaseComponent
 * @param {EFAST} ast - ast for the component
 * @param {EFTemplateScope} scope - scope which contains custom components
 * @private {Object} $ctx - Inner component data, DO NOT TOUCH
 * @property {Object} $data - Data on component
 * @property {Object.<string,EFEventHandlerMethod>} $methods - Methods on component
 * @property {Object.<string,(EFBaseComponent|Node)>} $refs - References on component
 */
const EFBaseComponent = class {

	static initData() {
		return
	}
	static initMethods() {
		return
	}
	static initScope() {
		return
	}

	static __defaultScope() {
		return {}
	}

	static init(self, $data, watch) {
		const data = this.initData(self, $data, watch)
		const methods = this.initMethods(self, $data, watch)
		const scope = this.initScope(self, $data, watch)

		return { data, methods, scope }
	}

	/**
	 * Create an EFBaseComponent with ef AST
	 * @param {EFAST} ast - ast for the component
	 * @param {EFTemplateScope=} userScope - scope which contains custom components
	 */
	constructor(ast, userScope = {}) {
		// const newTarget = new.target
		const newTarget = this.constructor

		if ( true && newTarget === EFBaseComponent) {
			throw new TypeError('[EF] Illegal constructor. EFBaseComponent must not be used directly!')
		}

		const children = {}
		const refs = {}
		const data = {}
		const handlers = {}
		const subscribers = {}

		const isFragment = ast[0].t === 0

		let placeholder = null
		let eventBus = null
		let element = null

		if (false) {}
		else placeholder = _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.document.createComment(`<${this.constructor.name}/>`)


		if (_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.textNodeSupportsEvent) eventBus = placeholder
		else eventBus = document.createElement('i')

		const nodeInfo = {
			placeholder,
			eventBus,
			parent: null,
			key: null
		}

		const mount = () => {
			const parentNode = placeholder.parentNode
			if (mount.remove || !parentNode) {
				_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.remove(element)
				mount.remove = false
			} else if (parentNode) {
				_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.before(placeholder, element)
				_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.remove(placeholder)
			}
		}

		const ctx = {
			ast, mount, refs, data,
			handlers, subscribers, nodeInfo,
			children, state: this, isFragment,
			localNamespaces: newTarget.__local_namespaces,
			self: this, constructor: newTarget
		}

		Object.defineProperty(this, '$ctx', {
			value: ctx,
			enumerable: false,
			configurable: true
		})

		const watchers = []
		const watch = (path, handler) => {
			const subscriberInfo = [path, handler]
			watchers.push(subscriberInfo)
			return () => {
				if (element) this.$unsubscribe(path, handler)
				else _utils_array_helper_js__WEBPACK_IMPORTED_MODULE_6__["default"].remove(subscriberInfo)
			}
		}

		const {
			data: innerData,
			methods,
			scope,
			beforeMount,
			afterMount,
			beforeUmount,
			afterUmount,
			beforeDestroy,
			afterDestroy,
			onCreated
		} = newTarget.init(this, data, watch)

		;(0,_utils_polyfills_js__WEBPACK_IMPORTED_MODULE_7__.assign)(ctx, {
			innerData: innerData || {},
			methods: methods || {},
			scope: (0,_utils_polyfills_js__WEBPACK_IMPORTED_MODULE_7__.assign)(newTarget.__defaultScope(), scope, userScope),
			beforeMount,
			afterMount,
			beforeUmount,
			afterUmount,
			beforeDestroy,
			afterDestroy
		})

		element = (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.create)(ctx, {node: ast, namespace: ''})

		let firstElement = element

		while (!_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.isNodeInstance(firstElement)) {
			if ((0,_utils_fast_instance_of_js__WEBPACK_IMPORTED_MODULE_8__["default"])(firstElement, _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.EFFragment)) firstElement = firstElement.firstElement
			else firstElement = firstElement.$ctx.nodeInfo.element
		}

		nodeInfo.element = element
		nodeInfo.firstElement = firstElement

		for (let [path, handler] of watchers) {
			this.$subscribe(path, handler)
		}

		if (onCreated) onCreated()
	}

	get $data() {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		return this.$ctx.data
	}

	set $data(newData) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		;(0,_utils_polyfills_js__WEBPACK_IMPORTED_MODULE_7__.assign)(this.$ctx.data, newData)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
	}

	get $methods() {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		return this.$ctx.methods
	}


	set $methods(newMethods) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		this.$ctx.methods = newMethods
	}

	get $refs() {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		return this.$ctx.refs
	}

	/**
	 * @typedef {import('../mount-options.js').EFMountConfig} EFMountConfig
	 */

	/**
	 * Mount component to a specitic position
	 * @param {EFMountConfig} config - Mount contigurations
	 * @returns {number} - Render count down
	 */
	$mount({target, option, parent, key}) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		const { nodeInfo, mount, beforeMount, afterMount } = this.$ctx

		let ret = null

		if (typeof target === 'string') {
			target = document.querySelector(target)
			if (!target) throw new Error('Mount target not found!')
		}

		if (beforeMount) beforeMount()

		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		if (nodeInfo.parent) {
			this.$umount()
			if (true) _utils_debug_js__WEBPACK_IMPORTED_MODULE_10__["default"].warn('Component detached from previous mount point.')
		}

		if (!parent) parent = target
		if (!key) key = '__DIRECTMOUNT__'
		nodeInfo.parent = parent
		nodeInfo.key = key
		mount.remove = false
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.queueDom)(mount)

		const placeholder = nodeInfo.placeholder

		if (target) {
			switch (option) {
				case _mount_options_js__WEBPACK_IMPORTED_MODULE_12__["default"].BEFORE: {
					_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.before(target, placeholder)
					break
				}
				case _mount_options_js__WEBPACK_IMPORTED_MODULE_12__["default"].AFTER: {
					_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.after(target, placeholder)
					break
				}
				case _mount_options_js__WEBPACK_IMPORTED_MODULE_12__["default"].REPLACE: {
					_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.before(target, placeholder)
					_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.remove(target)
					break
				}
				case _mount_options_js__WEBPACK_IMPORTED_MODULE_12__["default"].APPEND:
				default: {
					_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.append(target, placeholder)
				}
			}
			ret = (0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		} else {
			(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
			ret = placeholder
		}

		if (afterMount) afterMount()

		return ret
	}

	/**
	 * @returns {number} - Render count down
	 */
	$umount() {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		const { nodeInfo, mount, beforeUmount, afterUmount } = this.$ctx
		const { parent, key } = nodeInfo
		nodeInfo.parent = null
		nodeInfo.key = null

		if (beforeUmount) beforeUmount()

		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		if (parent) {
			if (key !== '__DIRECTMOUNT__') {
				if (parent[key]) {
					if (_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_6__["default"].isArray(parent[key])) {
						// Remove self from parent list mount point
						_utils_array_helper_js__WEBPACK_IMPORTED_MODULE_6__["default"].remove(parent[key], this)
					} else parent[key] = _creator_js__WEBPACK_IMPORTED_MODULE_0__.nullComponent
				}
			// Else Remove elements from fragment parent
			} else if ((0,_utils_fast_instance_of_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parent, _utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.EFFragment)) parent.$ctx.nodeInfo.element.removeChild(nodeInfo.element)
		}

		mount.remove = true
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.queueDom)(mount)

		const ret = (0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()

		if (afterUmount) afterUmount()

		return ret
	}

	/**
	 * Subscribe a value's changing
	 * @param {string} pathStr - Path string to the subribed value based on `$data`, splitted by `.`
	 * @param {EFSubscriberHandlerMethod} subscriber - Subscription event handler to be added
	 * @returns {void}
	 */
	$subscribe(pathStr, subscriber) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		const ctx = this.$ctx
		const _path = pathStr.split('.')
		const { dataNode, subscriberNode, _key } = (0,_binding_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, {bind: [_path]})
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		// Execute the subscriber function immediately
		try {
			subscriber({state: this, value: dataNode[_key]})
			// Put the subscriber inside the subscriberNode
			subscriberNode.push(subscriber)
		} catch (e) {
			_utils_debug_js__WEBPACK_IMPORTED_MODULE_10__["default"].error('Error caught when registering subscriber:\n', e)
		}
		(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
	}

	/**
	 * Unsubscribe a value's changing
	 * @param {string} pathStr - Path string to the subribed value based on `$data`, splitted by `.`
	 * @param {EFSubscriberHandlerMethod} subscriber - Subscription event handler to be removed
	 * @returns {void}
	 */
	$unsubscribe(pathStr, subscriber) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		const { subscribers } = this.$ctx
		unsubscribe(pathStr, subscriber, subscribers)
	}

	/**
	 * Update the component's state with a new state
	 * @param {Object} newState - New state to be set on this component
	 * @returns {void}
	 */
	$update(newState) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		;(0,_utils_polyfills_js__WEBPACK_IMPORTED_MODULE_7__.legacyAssign)(this, newState)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
	}

	/**
	 * Call a defined method with value and extra arguments
	 * @param {string} methodName - The name of the method to be called
	 * @param {object=} scope - Scope for this method call
	 * @param {...*} args - Other arguments
	 * @returns {*} - Return value of the called method
	 */
	$call(methodName, scope = {}, ...args) {
		return this.$methods[methodName]((0,_utils_polyfills_js__WEBPACK_IMPORTED_MODULE_7__.assign)({}, scope, {state: this}), ...args)
	}

	/**
	 * Fire a custom event using an Event object on this component
	 * @param {Event} event - Event object to be dispatched on this component
	 * @returns {*} - Same as the return of Node.dispatchEvent
	 */
	$dispatch(event) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		return this.$ctx.nodeInfo.eventBus.dispatchEvent(event)
	}

	/**
	 * @typedef {import('./utils/event-helper.js').EFEventOptions} EFEventOptions
	 */

	/**
	 * Fire a custom event using event name on this component
	 * @param {string} eventName - Name of the custom event
	 * @param {EFEventOptions} options - Event Options
	 * @returns {*} - Same as the return of Node.dispatchEvent
	 */
	$emit(eventName, options) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		return this.$dispatch((0,_utils_event_helper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(eventName, options))
	}

	/**
	 * Add custom event listener on this component
	 * @param {string} eventName - Name of the event
	 * @param {function} handler - Handler for the event
	 * @param {object|boolean} options - Event listener options or useCapture
	 * @returns {function} - Event Handler disposal method
	 */
	$on(eventName, handler, options = {}) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		this.$ctx.nodeInfo.eventBus.addEventListener(eventName, handler, options)
		return () => this.$off(eventName, handler, options)
	}

	/**
	 * Remove custom event listener on this component
	 * @param {string} eventName - Name of the event
	 * @param {function} handler - Handler for the event
	 * @param {object|boolean} options - Event listener options or useCapture
	 * @returns {*} - Same as the return of Node.removeEventListener
	 */
	$off(eventName, handler, options) {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		return this.$ctx.nodeInfo.eventBus.removeEventListener(eventName, handler, options)
	}

	/**
	 * Destroy this component
	 * @returns {number} - Render count down
	 */
	$destroy() {
		if (true) (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.checkDestroyed)(this)
		const { children, beforeDestroy, afterDestroy } = this.$ctx

		if (beforeDestroy) beforeDestroy()

		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		this.$umount()
		for (let i in children) children[i].anchor[_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.EFMountPoint] = null
		// Detatch all mounted components
		for (let i in this) {
			if ((0,_utils_type_of_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this[i]) === 'array') this[i].clear()
			else this[i] = null
		}
		// Remove context
		delete this.$ctx
		// Render
		const ret = (0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()

		if (afterDestroy) afterDestroy()

		return ret
	}
}

/**
 * @typedef {typeof EFBaseComponent} EFBaseClass
 */

const fragmentAST = [{t: 0}]

/**
 * ef component node wrapper
 * Better using this than Fragments if wrapping only HTML elements.
 * @class EFNodeWrapper
 * @extends EFBaseComponent
 * @param {...Node} nodes - Nodes to be wrapped
 * @property {Array<Node>} - Nodes that are wrapped
 */
const EFNodeWrapper = class extends EFBaseComponent {

	/**
	 * Wrap given nodes into an ef component
	 * @param  {...Node} nodes - Nodes to be wrapped
	 */
	constructor(...nodes) {
		super(fragmentAST)

		// element.append(...nodes)
		const element = this.$ctx.nodeInfo.element
		// const childrenArr = element.$children

		// childrenArr.push(...nodes)
		element.append(...nodes)

		// if (process.env.NODE_ENV !== 'production') {
		// 	childrenArr.push(ARR.remove(childrenArr, childrenArr[1]))
		// }

		this.$ctx.elements = nodes
	}

	get $el() {
		return this.$ctx.elements
	}
}

/**
 * Component fragment wrapper
 * @class Fragment
 * @extends EFBaseComponent
 * @param {...*} children - Things to be wrapped into an ef component
 */
const Fragment = class extends EFBaseComponent {
	constructor(...children) {
		super([{t: 0}, ...children])
	}
}

const textFragmentAst = [{t: 0},[['t']]]

/**
 * ef component text wrapper
 * @class EFTextFragment
 * @extends EFBaseComponent
 * @param {string} text - String to be wrapped
 * @property {string} text - Text on the fragment component
 */
const EFTextFragment = class extends EFBaseComponent {

	/**
	 * Wrap given text into an ef component
	 * @param {string} text - String to be wrapped
	 */
	constructor(text) {
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		super(textFragmentAst)
		this.text = text
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
	}
}
;(0,_map_attrs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(EFTextFragment, {text: {key: 't'}})


/**
 * Transform almost anyting into ef component
 * @template {value} T
 * @param {T} value - Things to be transformed into ef component
 * @returns {(EFNodeWrapper|EFTextFragment|T)} - Wrapped component or value it self if not supports converting
 */
const toEFComponent = (value) => {
	if (value === null || typeof value === 'undefined' || value instanceof EFBaseComponent) return value

	if (value !== _creator_js__WEBPACK_IMPORTED_MODULE_0__.nullComponent) {
		if (_utils_dom_helper_js__WEBPACK_IMPORTED_MODULE_5__.DOM.isNodeInstance(value)) return new EFNodeWrapper(value)
		else if (typeof value === 'string') return new EFTextFragment(value)
		else return new EFTextFragment(JSON.stringify(value))
	}
}

_utils_global_shared_js__WEBPACK_IMPORTED_MODULE_13__["default"].EFBaseComponent = EFBaseComponent
_utils_global_shared_js__WEBPACK_IMPORTED_MODULE_13__["default"].EFNodeWrapper = EFNodeWrapper
_utils_global_shared_js__WEBPACK_IMPORTED_MODULE_13__["default"].toEFComponent = toEFComponent




/***/ }),

/***/ "./node_modules/ef-core/src/lib/resolver.js":
/*!**************************************************!*\
  !*** ./node_modules/ef-core/src/lib/resolver.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolve: () => (/* binding */ resolve),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   resolveSubscriber: () => (/* binding */ resolveSubscriber)
/* harmony export */ });
/* unused harmony export resolveReactivePath */
/* harmony import */ var _render_queue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _utils_polyfills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/polyfills.js */ "./node_modules/ef-core/src/lib/utils/polyfills.js");



const resolveAllPath = ({_path, handlers, subscribers, innerData}) => {
	for (let i of _path) {
		if (!handlers[i]) handlers[i] = {}
		if (!subscribers[i]) subscribers[i] = {}
		if (!innerData[i]) innerData[i] = {}
		handlers = handlers[i]
		subscribers = subscribers[i]
		innerData = innerData[i]
	}
	return {
		handlerNode: handlers,
		subscriberNode: subscribers,
		dataNode: innerData
	}
}

// Workaround for the third bug of buble:
// https://github.com/bublejs/buble/issues/106
const defineNode = (key, obj) => {
	const node = {}
	Object.defineProperty(obj, key, {
		get() {
			return node
		},
		set(data) {
			(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_0__.inform)()
			;(0,_utils_polyfills_js__WEBPACK_IMPORTED_MODULE_1__.assign)(node, data)
			;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_0__.exec)()
		},
		configurable: false,
		enumerable: true
	})
	return node
}

const reactivePathReducer = (obj, key) => obj[key] || defineNode(key, obj)

const resolveReactivePath = (_path, obj) => _path.reduce(reactivePathReducer, obj)

const resolvePath = (_path, obj) => {
	for (let i of _path) {
		if (!obj[i]) obj[i] = {}
		obj = obj[i]
	}
	return obj
}

const resolve = ({_path, _key, data, handlers, subscribers, innerData}) => {
	const parentNode = resolveReactivePath(_path, data)
	const {handlerNode, subscriberNode, dataNode} = resolveAllPath({_path, handlers, subscribers, innerData})
	// if (!handlerNode[_key]) handlerNode[_key] = []
	let _handlerNode = handlerNode[_key]
	let _subscriberNode = subscriberNode[_key]
	if (!_subscriberNode) {
		_handlerNode = handlerNode[_key] = []
		_subscriberNode = subscriberNode[_key] = []
	}
	if (!Object.prototype.hasOwnProperty.call(dataNode, _key)) dataNode[_key] = parentNode[_key]
	// return {parentNode, handlerNode: handlerNode[_key], subscriberNode: subscriberNode[_key], dataNode}
	return {parentNode, handlerNode: _handlerNode, subscriberNode: _subscriberNode, dataNode}
}

const resolveSubscriber = (_path, subscribers) => {
	const pathArr = _path.split('.')
	const key = pathArr.pop()
	for (let i of pathArr) {
		if (!subscribers[i]) subscribers[i] = {}
		subscribers = subscribers[i]
	}
	return subscribers[key]
}




/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/array-helper.js":
/*!************************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/array-helper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SavedArray = Array
const proto = SavedArray.prototype

const ARR = {
	copy(arr) {
		return proto.slice.call(arr, 0)
	},
	empty(arr) {
		arr.length = 0
		return arr
	},
	equals(left, right) {
		if (!SavedArray.isArray(right)) return false
		if (left === right) return true
		if (left.length !== right.length) return false
		for (let i = 0, l = left.length; i < l; i++) {
			if (left[i] !== right[i]) return false
		}
		return true
	},
	pop(arr) {
		return proto.pop.call(arr)
	},
	push(arr, ...items) {
		return proto.push.apply(arr, items)
	},
	remove(arr, item) {
		const index = proto.indexOf.call(arr, item)
		if (index > -1) {
			proto.splice.call(arr, index, 1)
			return item
		}
	},
	reverse(arr) {
		return proto.reverse.call(arr)
	},
	shift(arr) {
		return proto.shift.call(arr)
	},
	slice(arr, index, length) {
		return proto.slice.call(arr, index, length)
	},
	sort(arr, fn) {
		return proto.sort.call(arr, fn)
	},
	splice(arr, ...args) {
		return proto.splice.call(arr, ...args)
	},
	unshift(arr, ...items) {
		return proto.unshift.apply(arr, items)
	},
	isArray(arr) {
		return SavedArray.isArray(arr)
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ARR);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/debug.js":
/*!*****************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/debug.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.js */ "./node_modules/ef-core/src/lib/utils/noop.js");


const getDbg = () => {
	if (typeof console === 'undefined') {
		if (typeof print === 'undefined') {
			return {
				log: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
				info: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
				warn: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
				error: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"]
			}
		}

		const assemblePrintContent = (type, args) => `[EF][${type}] ${args.join(' ')}`

		return {
			log: (...args) => print(assemblePrintContent('LOG ', args)),
			info: (...args) => print(assemblePrintContent('INFO', args)),
			warn: (...args) => print(assemblePrintContent('WARN', args)),
			error: (...args) => print(assemblePrintContent('ERROR', args))
		}
	}

	// Wrap console functions for `[EF]` prefix
	const strTpl = '[EF] %s'
	return {
		log: console.log && console.log.bind(console, strTpl) || _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
		info: console.info && console.info.bind(console, strTpl) || _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
		warn: console.warn && console.warn.bind(console, strTpl) || _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
		error: console.error && console.error.bind(console, strTpl) || _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
}

const dbg = getDbg()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbg);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/dom-arr-helper.js":
/*!**************************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/dom-arr-helper.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-helper.js */ "./node_modules/ef-core/src/lib/utils/dom-helper.js");
/* harmony import */ var _array_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");
/* harmony import */ var _render_queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _global_shared_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-shared.js */ "./node_modules/ef-core/src/lib/utils/global-shared.js");





const DOMARR = {
	empty() {
		(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		for (let i of _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].copy(this)) i.$destroy()
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].empty(this)
	},
	clear() {
		(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		for (let i of _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].copy(this)) i.$umount()
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].empty(this)
	},
	pop() {
		if (this.length === 0) return
		const poped = _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].pop(this)
		poped.$umount()
		return poped
	},
	push({ctx, key, aftAnchor}, ...items) {
		if (!items.length) return
		items = items.map(_global_shared_js__WEBPACK_IMPORTED_MODULE_3__["default"].toEFComponent)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		if (items.length === 1) {
			const placeholder = items[0].$mount({parent: ctx.state, key})
			_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.before(aftAnchor, placeholder)
		} else {
			(0,_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.useFragment)((tempFragment, recycleFragment) => {
				_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.append(tempFragment, ...items.map(i => i.$mount({parent: ctx.state, key})))
				;(0,_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.useAnchor)((tempAnchor, recycleAnchor) => {
					_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.before(aftAnchor, tempAnchor)
					;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.queueDom)(() => {
						_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.after(tempAnchor, tempFragment)
						recycleAnchor()
						recycleFragment()
					})
				})
			})
		}
		const ret = _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(this, ...items)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		return ret
	},
	remove(item) {
		if (this.indexOf(item) === -1) return
		item.$umount()
		return item
	},
	reverse({ctx, key, anchor}) {
		if (this.length === 0) return this
		const tempArr = _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].copy(this)
		const elements = []
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.queueDom)(() => _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.after(anchor, ..._array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].reverse(elements)))
		for (let i of tempArr) {
			i.$umount()
			_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(elements, i.$mount({parent: ctx.state, key}))
		}
		_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(this, ..._array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].reverse(tempArr))
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		return this
	},
	shift() {
		if (this.length === 0) return
		const shifted = _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].shift(this)
		shifted.$umount()
		return shifted
	},
	sort({ctx, key, anchor}, fn) {
		if (this.length === 0) return this
		const sorted = _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].copy(_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].sort(this, fn))
		const elements = []
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.queueDom)(() => _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.after(anchor, ...elements))
		for (let i of sorted) {
			i.$umount()
			_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(elements, i.$mount({parent: ctx.state, key}))
		}
		_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(this, ...sorted)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		return this
	},
	splice({ctx, key, anchor}, ...args) {
		if (this.length === 0) return this
		const [idx, , ...inserts] = args
		if (args.length > 2) args.length = 2
		const spliced = _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].splice(this, ...args)
		let insertIdx = idx
		if (insertIdx < 0) insertIdx = this.length + idx
		if (insertIdx < 0) insertIdx = 0
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		for (let i of spliced) i.$umount()
		if (inserts.length) {
			if (inserts.length === 1) {
				const item = _global_shared_js__WEBPACK_IMPORTED_MODULE_3__["default"].toEFComponent(inserts[0])
				item.$mount({parent: ctx.state, key})
				const placeholder = item.$ctx.nodeInfo.placeholder
				if (this[insertIdx]) _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.before(this[insertIdx].$ctx.nodeInfo.firstElement, placeholder)
				else _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.after(anchor, placeholder)
				_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].splice(this, insertIdx, 0, item)
			} else {
				(0,_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.useAnchor)((tempAnchor, recycleAnchor) => {
					if (this[insertIdx]) _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.before(this[insertIdx].$ctx.nodeInfo.firstElement, tempAnchor)
					else _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.after(anchor, tempAnchor)
					;(0,_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.useFragment)((fragment, recycleFragment) => {
						const insertItems = inserts.map(i => _global_shared_js__WEBPACK_IMPORTED_MODULE_3__["default"].toEFComponent(i))
						_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.append(fragment, ...insertItems.map(i => i.$mount({parent: ctx.state, key})))
						_array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].splice(this, insertIdx, 0, ...insertItems)
						;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.queueDom)(() => {
							_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.before(tempAnchor, fragment)
							_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.remove(tempAnchor)
							recycleAnchor()
							recycleFragment()
						})
					})
				})
			}
		}
		(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		return spliced
	},
	unshift({ctx, key, anchor}, ...items) {
		if (this.length === 0) return this.push(...items).length
		items = items.map(_global_shared_js__WEBPACK_IMPORTED_MODULE_3__["default"].toEFComponent)
		const elements = []
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.inform)()
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.queueDom)(() => _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.after(anchor, ...elements))
		for (let i of items) _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(elements, i.$mount({parent: ctx.state, key}))
		const ret = _array_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].unshift(this, ...items)
		;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_2__.exec)()
		return ret
	}
}

const defineArr = (arr, info) => {
	Object.defineProperties(arr, {
		empty: {value: DOMARR.empty},
		clear: {value: DOMARR.clear},
		pop: {value: DOMARR.pop},
		push: {value: DOMARR.push.bind(arr, info)},
		remove: {value: DOMARR.remove},
		reverse: {value: DOMARR.reverse.bind(arr, info)},
		shift: {value: DOMARR.shift},
		sort: {value: DOMARR.sort.bind(arr, info)},
		splice: {value: DOMARR.splice.bind(arr, info)},
		unshift: {value: DOMARR.unshift.bind(arr, info)}
	})
	return arr
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineArr);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/dom-helper.js":
/*!**********************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/dom-helper.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* binding */ DOM),
/* harmony export */   EFFragment: () => (/* binding */ EFFragment),
/* harmony export */   EFMountPoint: () => (/* binding */ EFMountPoint),
/* harmony export */   useAnchor: () => (/* binding */ useAnchor),
/* harmony export */   useFragment: () => (/* binding */ useFragment)
/* harmony export */ });
/* unused harmony export setDOMImpl */
/* harmony import */ var _fast_instance_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fast-instance-of.js */ "./node_modules/ef-core/src/lib/utils/fast-instance-of.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop.js */ "./node_modules/ef-core/src/lib/utils/noop.js");
/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills.js */ "./node_modules/ef-core/src/lib/utils/polyfills.js");
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debug.js */ "./node_modules/ef-core/src/lib/utils/debug.js");
/* harmony import */ var _is_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-browser.js */ "./node_modules/ef-core/src/lib/utils/is-browser.js");
/* harmony import */ var _array_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");
/* harmony import */ var _render_queue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render-queue.js */ "./node_modules/ef-core/src/lib/render-queue.js");
/* harmony import */ var _mount_options_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mount-options.js */ "./node_modules/ef-core/src/mount-options.js");
/* harmony import */ var _global_shared_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global-shared.js */ "./node_modules/ef-core/src/lib/utils/global-shared.js");
// import ARR from './array-helper.js'











const EFMountPoint = '__ef_mount_point__'

const DOM = {}

const DocumentFragmentCache = []
const AnchorCache = []

const useFragment = (cb) => {
	const fragment = DocumentFragmentCache.pop() || DOM.document.createDocumentFragment()
	const recycle = () => {
		DocumentFragmentCache.push(fragment)
	}
	return cb(fragment, recycle)
}

const useAnchor = (cb) => {
	const anchor = AnchorCache.pop() || DOM.document.createTextNode('')
	const recycle = () => {
		AnchorCache.push(anchor)
	}
	return cb(anchor, recycle)
}

const EFFragment = class {
	constructor() {
		this.$children = []
		this.$safeZone = DOM.document.createDocumentFragment()
	}

	append(...args) {
		DOM.append(this.$safeZone, ...args)
		_array_helper_js__WEBPACK_IMPORTED_MODULE_5__["default"].push(this.$children, ...args)
	}

	appendTo(node) {
		DOM.append(node, ...this.$children)
	}

	addBefore(node) {
		DOM.before(node, ...this.$children)
	}

	removeChild(node) {
		DOM.remove(node)
		_array_helper_js__WEBPACK_IMPORTED_MODULE_5__["default"].remove(this.$children, node)
	}

	remove() {
		DOM.append(this.$safeZone, ...this.$children)
	}

	get firstElement() {
		return this.$children[0] || null
	}
}

const appendNode = (node, target) => {
	const {element, placeholder} = node.$ctx.nodeInfo
	DOM.append(target, element, placeholder)
}

const insertBeforeNode = (node, ref) => {
	const {element, placeholder} = node.$ctx.nodeInfo
	DOM.before(ref, element, placeholder)
}

const handleMountPoint = (element, target, ref) => {
	if (element.nodeType !== 3) return

	const mountPoint = element[EFMountPoint]
	if (!mountPoint) return

	const {node} = mountPoint
	if (!node) return

	;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.inform)()
	if (ref) {
		if (_array_helper_js__WEBPACK_IMPORTED_MODULE_5__["default"].isArray(node)) {
			for (let i of node) insertBeforeNode(i, ref)
		} else insertBeforeNode(node, ref)
	} else {
		// eslint-disable-next-line no-lonely-if
		if (_array_helper_js__WEBPACK_IMPORTED_MODULE_5__["default"].isArray(node)) {
			for (let i of node) appendNode(i, target)
		} else appendNode(node, target)
	}
	(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.exec)()
}

const appendToTarget = (target, nodes) => {
	;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.inform)()
	for (let i of nodes) {
		if (DOM.isNodeInstance(i)) {
			target.appendChild(i)
			handleMountPoint(i, target)
		} else if ((0,_fast_instance_of_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i, EFFragment)) {
			i.appendTo(target)
		} else if (i instanceof _global_shared_js__WEBPACK_IMPORTED_MODULE_8__["default"].EFBaseComponent) {
			i.$mount({target})
		}
	}
	(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.exec)()
}

const addBeforeTarget = (target, nodes) => {
	const parentNode = target.parentNode
	;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.inform)()
	for (let i of nodes) {
		if (DOM.isNodeInstance(i)) {
			parentNode.insertBefore(i, target)
			handleMountPoint(i, parentNode, target)
		} else if ((0,_fast_instance_of_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i, EFFragment)) {
			i.addBefore(target)
		} else if (i instanceof _global_shared_js__WEBPACK_IMPORTED_MODULE_8__["default"].EFBaseComponent) {
			i.$mount({target, option: _mount_options_js__WEBPACK_IMPORTED_MODULE_7__["default"].BEFORE})
		}
	}
	(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.exec)()
}

DOM.isNodeInstance = (node) => {
	if (DOM.isNode) return DOM.isNode(node)
	return !!(node && node.nodeType)
}

DOM.before = (anchorNode, ...nodes) => {
	const parentNode = anchorNode.parentNode
	const firstNode = nodes[0]
	if (
		nodes.length === 1 &&
		DOM.isNodeInstance(firstNode) &&
		// When the node is a text node, check if it's not a mount point anchor
		// eslint-disable-next-line multiline-ternary, no-ternary
		(firstNode.nodeType === 3 ? !firstNode[EFMountPoint] : true)
	) {
		parentNode.insertBefore(nodes[0], anchorNode)
	} else if (parentNode.nodeType === 11) {
		addBeforeTarget(anchorNode, nodes)
	} else {
		useFragment((tempFragment, recycleFragment) => {
			(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.inform)()
			appendToTarget(tempFragment, nodes)
			useAnchor((tempAnchor, recycleAnchor) => {
				parentNode.insertBefore(tempAnchor, anchorNode)
				;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.queueDom)(() => {
					parentNode.insertBefore(tempFragment, tempAnchor)
					parentNode.removeChild(tempAnchor)
					recycleAnchor()
					recycleFragment()
				})
			})
			;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.exec)()
		})
	}
}

DOM.after = (anchorNode, ...nodes) => {
	if (anchorNode.nextSibling) return DOM.before(anchorNode.nextSibling, ...nodes)
	return DOM.append(anchorNode.parentNode, ...nodes)
}

DOM.append = (parentNode, ...nodes) => {
	if (DOM.isNodeInstance(parentNode)) {
		if (nodes.length === 1 && DOM.isNodeInstance(nodes[0])) {
			parentNode.appendChild(nodes[0])
			handleMountPoint(nodes[0], parentNode)
		} else if (parentNode.nodeType === 11) {
			appendToTarget(parentNode, nodes)
		} else if (parentNode.nodeType === 1 || parentNode.nodeType === 9) {
			useFragment((tempFragment, recycleFragment) => {
				(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.inform)()
				appendToTarget(tempFragment, nodes)
				useAnchor((tempAnchor, recycleAnchor) => {
					parentNode.appendChild(tempAnchor)
					;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.queueDom)(() => {
						parentNode.insertBefore(tempFragment, tempAnchor)
						parentNode.removeChild(tempAnchor)
						recycleAnchor()
						recycleFragment()
					})
				})
				;(0,_render_queue_js__WEBPACK_IMPORTED_MODULE_6__.exec)()
			})
		}

		return
	}

	// Handle EFComponent
	if (parentNode instanceof _global_shared_js__WEBPACK_IMPORTED_MODULE_8__["default"].EFBaseComponent) {
		if (!(_array_helper_js__WEBPACK_IMPORTED_MODULE_5__["default"].isArray(parentNode.children))) {
			if (true) _debug_js__WEBPACK_IMPORTED_MODULE_3__["default"].warn(parentNode, 'has no `children` list mount point! Child nodes are all ignored!')
			return
		}

		parentNode.children.push(...nodes)

		return
	}

	// Handle fragment
	// if (isInstance(parentNode, EFFragment)) parentNode.append(...nodes)
	parentNode.append(...nodes)
}

DOM.remove = (node) => {
	if (DOM.isNodeInstance(node)) {
		if (node.parentNode) node.parentNode.removeChild(node)
	} else if (node instanceof _global_shared_js__WEBPACK_IMPORTED_MODULE_8__["default"].EFBaseComponent) node.$umount()
	else if ((0,_fast_instance_of_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node, EFFragment)) node.remove()
}

const setDOMImpl = (impl) => {
	;(0,_polyfills_js__WEBPACK_IMPORTED_MODULE_2__.assign)(DOM, impl)

	const dummyText = DOM.document.createTextNode('')

	DOM.textNodeSupportsEvent = !!dummyText.addEventListener
	DOM.passiveSupported = false
	DOM.onceSupported = false

	try {
		const options = Object.create({}, {
			passive: {
				get: () => {
					DOM.passiveSupported = true
					return DOM.passiveSupported
				}
			},
			once: {
				get: () => {
					DOM.onceSupported = true
					return DOM.onceSupported
				}
			}
		})
		DOM.document.addEventListener('__ef_event_option_test__', _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"], options)
		DOM.document.removeEventListener('__ef_event_option_test__', _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"], options)
	} catch (e) {

		/* do nothing */
	}
}

if (_is_browser_js__WEBPACK_IMPORTED_MODULE_4__["default"]) setDOMImpl({document, Node})




/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/event-helper.js":
/*!************************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/event-helper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-helper.js */ "./node_modules/ef-core/src/lib/utils/dom-helper.js");


/**
 * @typedef {{bubbles: boolean, cancelable: boolean, composed: boolean}} EFEventOptions
 */

/* Get new events that works in all target browsers
 * though a little bit old-fashioned
 */
const getEvent = (name, options = {}) => {
	const event = _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.document.createEvent && _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.DOM.document.createEvent('CustomEvent') || new Event(name, options)
	if (event.initEvent) event.initEvent(name, options.bubbles, options.cancelable, options)
	return event
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEvent);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/fast-instance-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/fast-instance-of.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isInstance = (er, ee) => er.constructor === ee

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isInstance);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/global-shared.js":
/*!*************************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/global-shared.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shared = {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shared);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/is-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/is-browser.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug.js */ "./node_modules/ef-core/src/lib/utils/debug.js");


const isBrowser = typeof document !== 'undefined' && typeof Node !== 'undefined'

if (true) {
	if (isBrowser) _debug_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('Running in browser mode.')
	else _debug_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('Running in non-browser mode, please be sure to set a DOM simulation using `setDOMImpl`. See https://github.com/TheNeuronProject/ef.js#server-side-rendering for detail.')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBrowser);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/isnan.js":
/*!*****************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/isnan.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-self-compare */
const isnan = obj => obj !== obj

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isnan);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/namespaces.js":
/*!**********************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/namespaces.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNamespace: () => (/* binding */ getNamespace)
/* harmony export */ });
/* unused harmony export declareNamespace */
const namespaces = {
	xml: 'http://www.w3.org/XML/1998/namespace',
	html: 'http://www.w3.org/1999/xhtml',
	svg: 'http://www.w3.org/2000/svg',
	math: 'http://www.w3.org/1998/Math/MathML',
	xlink: 'http://www.w3.org/1999/xlink'
}

/**
 * Get declared namespaceURI using it's prefix
 * @param {string} prefix - Perfix for the namespaceURI
 * @returns {string} NamespaceURI defined by the prefix
 */
const getNamespace = (prefix) => {
	if (namespaces[prefix]) return namespaces[prefix]

	throw new Error(`[EF] Namespace "${prefix}" has not been declared.`)
}

/**
 * Declare namespaceURI with a prefix
 * @param {string} prefix - Perfix for the namespaceURI
 * @param {string} namespaceURI - NamespaceURI associated with the prefix
 * @returns {void}
 */
const declareNamespace = (prefix, namespaceURI) => {
	if (namespaces[prefix]) {
		throw new Error(`[EF] Namespace "${prefix}" has already been declared as "${namespaces[prefix]}".`)
	}

	namespaces[prefix] = namespaceURI
}




/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/noop.js":
/*!****************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/noop.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line no-empty-function
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {});


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/polyfills.js":
/*!*********************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/polyfills.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   legacyAssign: () => (/* binding */ legacyAssign)
/* harmony export */ });
// Enough for ef's usage, so no need for a full polyfill
const legacyAssign = (ee, ...ers) => {
	for (let er of ers) {
		for (let i in er) {
			ee[i] = er[i]
		}
	}

	return ee
}

const assign = Object.assign || legacyAssign




/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/scoped-component.js":
/*!****************************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/scoped-component.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.js */ "./node_modules/ef-core/src/lib/utils/polyfills.js");


/**
 * @typedef {import('../renderer.js').EFBaseClass} EFBaseClass
 * @typedef {import('../renderer.js').EFTemplateScope} EFTemplateScope
 */

/**
 * Attach a default scope to the component class
 * @template {component} T
 * @param {EFBaseClass} component - Component class to be scoped
 * @param {EFTemplateScope} initScope - Scope to be bond on the component class
 * @returns {T} - Scoped component class
 */
const scoped = (component, initScope) => class Scoped extends component {
	static __defaultScope() {
		const prev = super.__defaultScope()
		return (0,_polyfills_js__WEBPACK_IMPORTED_MODULE_0__.assign)(prev, initScope)
	}
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (scoped);


/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/string-ops.js":
/*!**********************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/string-ops.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasColon: () => (/* binding */ hasColon),
/* harmony export */   isSVGEscape: () => (/* binding */ isSVGEscape),
/* harmony export */   splitByColon: () => (/* binding */ splitByColon)
/* harmony export */ });
/* unused harmony export createCache */
const createCache = (cb) => {
	const cache = {}
	return input => cache[input] || (cache[input] = cb(input))
}

const hasColon = createCache(str => str.indexOf(':') >= 0)

const splitByColon = createCache(str => str.split(':'))

const isSVGEscape = createCache(tagName => ['foreignobject', 'desc', 'title'].indexOf(tagName.toLowerCase()) > -1)




/***/ }),

/***/ "./node_modules/ef-core/src/lib/utils/type-of.js":
/*!*******************************************************!*\
  !*** ./node_modules/ef-core/src/lib/utils/type-of.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-helper.js */ "./node_modules/ef-core/src/lib/utils/array-helper.js");


const typeOf = (obj) => {
	if (_array_helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(obj)) return 'array'
	return typeof obj
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeOf);


/***/ }),

/***/ "./node_modules/ef-core/src/mount-options.js":
/*!***************************************************!*\
  !*** ./node_modules/ef-core/src/mount-options.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @typedef {string} EFMountOption
 * @typedef {{BEFORE: EFMountOption, AFTER: EFMountOption, APPEND: EFMountOption, REPLACE: EFMountOption}} EFMountConfig
 */

/**
 * @type {EFMountConfig}
 */
const mountOptions = {
	BEFORE: 'before',
	AFTER: 'after',
	APPEND: 'append',
	REPLACE: 'replace'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountOptions);


/***/ }),

/***/ "./src/textbox.eft":
/*!*************************!*\
  !*** ./src/textbox.eft ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Textbox)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Textbox extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'div',a:{class:'container'}},[{t:'div',a:{class:'textbox'}},[{t:'div',a:{class:'text'}},[{t:'h1'},'This is the title'],[{t:'br'}],'This is the text']]]) {
};


/***/ }),

/***/ "./src/textbox.css":
/*!*************************!*\
  !*** ./src/textbox.css ***!
  \*************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/textbox.js ***!
  \************************/
/* harmony import */ var _src_textbox_eft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/textbox.eft */ "./src/textbox.eft");
/* harmony import */ var _src_textbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/textbox.css */ "./src/textbox.css");



(new _src_textbox_eft__WEBPACK_IMPORTED_MODULE_0__["default"]()).$mount({target: document.body});
// for (let [key, value] of Object.entries(sidebarlist)) {
//   const sidebarsubtoggle = new Sidebarsubtoggle({
//     $data: {
//       itemName: key,
//       href: value.link.href,
//     },
//   });
//   let array = [];
//   value.item.forEach(function (element) {
//     array.push(
//       new Sidebaritem({
//         $data: {
//           itemName: element.itemName,
//           href: element.href,
//         },
//       })
//     );
//   });
//   sidebarsubtoggle["list"] = array;
//   sidebarsubtoggle.$mount({
//     target: document.querySelector(".sidebar-itembox> ul:first-of-type"),
//     option: {
//       append: true,
//     },
//   });
// }
})();

/******/ })()
;
//# sourceMappingURL=textbox.js.map
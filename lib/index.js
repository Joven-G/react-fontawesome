'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = {
  'sr-only': 'react-fontawesome__sr-only___3GC-E'
};

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A React component for the font-awesome icon library.
 *
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps (rather than smoothly)
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string (eg 'i' or 'em')
 * @module FontAwesome
 * @type {ReactClass}
 */
exports.default = _react2.default.createClass({

  displayName: 'FontAwesome',

  propTypes: {
    ariaLabel: _react2.default.PropTypes.string,
    border: _react2.default.PropTypes.bool,
    className: _react2.default.PropTypes.string,
    cssModule: _react2.default.PropTypes.object,
    fixedWidth: _react2.default.PropTypes.bool,
    flip: _react2.default.PropTypes.oneOf(['horizontal', 'vertical']),
    inverse: _react2.default.PropTypes.bool,
    name: _react2.default.PropTypes.string.isRequired,
    pulse: _react2.default.PropTypes.bool,
    rotate: _react2.default.PropTypes.oneOf([90, 180, 270]),
    size: _react2.default.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    spin: _react2.default.PropTypes.bool,
    stack: _react2.default.PropTypes.oneOf(['1x', '2x']),
    tag: _react2.default.PropTypes.string
  },

  render: function render() {
    var _props = this.props,
        border = _props.border,
        cssModule = _props.cssModule,
        className = _props.className,
        fixedWidth = _props.fixedWidth,
        flip = _props.flip,
        inverse = _props.inverse,
        name = _props.name,
        pulse = _props.pulse,
        rotate = _props.rotate,
        size = _props.size,
        spin = _props.spin,
        stack = _props.stack,
        _props$tag = _props.tag,
        tag = _props$tag === undefined ? 'span' : _props$tag,
        ariaLabel = _props.ariaLabel,
        props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

    var classNames = [];

    if (cssModule) {
      classNames.push(cssModule['fa']);
      classNames.push(cssModule['fa-' + name]);
      size && classNames.push(cssModule['fa-' + size]);
      spin && classNames.push(cssModule['fa-spin']);
      pulse && classNames.push(cssModule['fa-pulse']);
      border && classNames.push(cssModule['fa-border']);
      fixedWidth && classNames.push(cssModule['fa-fw']);
      inverse && classNames.push(cssModule['fa-inverse']);
      flip && classNames.push(cssModule['fa-flip-' + flip]);
      rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
      stack && classNames.push(cssModule['fa-stack-' + stack]);
    } else {
      classNames.push('fa');
      classNames.push('fa-' + name);
      size && classNames.push('fa-' + size);
      spin && classNames.push('fa-spin');
      pulse && classNames.push('fa-pulse');
      border && classNames.push('fa-border');
      fixedWidth && classNames.push('fa-fw');
      inverse && classNames.push('fa-inverse');
      flip && classNames.push('fa-flip-' + flip);
      rotate && classNames.push('fa-rotate-' + rotate);
      stack && classNames.push('fa-stack-' + stack);
    }

    // Add any custom class names at the end.
    className && classNames.push(className);
    return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { className: _reactFontawesome2.default['sr-only'] }, ariaLabel) : null);
  }
});
module.exports = exports['default'];
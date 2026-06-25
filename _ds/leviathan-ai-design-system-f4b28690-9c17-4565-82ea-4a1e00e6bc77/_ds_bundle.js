/* @ds-bundle: {"format":3,"namespace":"LeviathanAIDesignSystem_f4b286","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"2eff84568518","components/core/Badge.jsx":"7fb16b879b99","components/core/Button.jsx":"65de982bd539","components/core/Card.jsx":"a0eed9b93621","components/core/Checkbox.jsx":"b2cd7a490990","components/core/IconButton.jsx":"31a039a971e7","components/core/Input.jsx":"c0c8cb73419c","components/core/ProgressBar.jsx":"7305e3203c32","components/core/Select.jsx":"fe8f61ffbacd","components/core/Switch.jsx":"b5e5bb1a3ffd","components/core/Tabs.jsx":"510b40eae7fc","components/core/Tag.jsx":"922bd98abea9","ui_kits/website/Atmosphere.jsx":"d22f5e577211","ui_kits/website/DemoModal.jsx":"563a1d2c7cbd","ui_kits/website/Hero.jsx":"8c13fce987e4","ui_kits/website/PlatformSection.jsx":"69355f3ca841","ui_kits/website/SiteFooter.jsx":"53615478030b","ui_kits/website/SiteHeader.jsx":"ce9e59e88413","ui_kits/website/TechSection.jsx":"7aeec8420630"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LeviathanAIDesignSystem_f4b286 = window.LeviathanAIDesignSystem_f4b286 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — user/entity mark. Renders an image if `src`, else initials over
 * a chrome gradient. sizes sm|md|lg. `status` adds a presence dot.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  status,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 28,
    md: 36,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const statusColors = {
    online: 'var(--status-success)',
    away: 'var(--status-warning)',
    offline: 'var(--steel-500)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: d,
      height: d,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'transparent' : 'var(--grad-chrome)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: d * 0.36,
      letterSpacing: '0.02em'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: d * 0.28,
      height: d * 0.28,
      minWidth: 8,
      minHeight: 8,
      borderRadius: '50%',
      background: statusColors[status],
      border: '2px solid var(--bg-base)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status pill. tone: neutral | accent | success | warning |
 * danger | info. Optional `dot` for a leading status dot.
 */
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'rgba(129,195,224,0.10)',
      fg: 'var(--text-secondary)',
      bd: 'var(--border-default)'
    },
    accent: {
      bg: 'var(--accent-soft)',
      fg: 'var(--leviathan-300)',
      bd: 'rgba(44,107,179,0.45)'
    },
    success: {
      bg: 'rgba(63,185,138,0.14)',
      fg: '#6fdcb0',
      bd: 'rgba(63,185,138,0.4)'
    },
    warning: {
      bg: 'rgba(217,164,65,0.14)',
      fg: '#e6c074',
      bd: 'rgba(217,164,65,0.4)'
    },
    danger: {
      bg: 'rgba(224,86,79,0.14)',
      fg: '#f08a84',
      bd: 'rgba(224,86,79,0.4)'
    },
    info: {
      bg: 'rgba(79,184,232,0.14)',
      fg: 'var(--biolume-200)',
      bd: 'rgba(79,184,232,0.4)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 22,
      padding: '0 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg,
      boxShadow: `0 0 6px ${t.fg}`
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Leviathan Button — engineered, precise CTA.
 * Primary uses the deep ocean→leviathan-blue gradient with a
 * bioluminescent rim. Variants: primary | secondary | ghost | danger.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: '0 14px',
      fontSize: 13
    },
    md: {
      height: 40,
      padding: '0 20px',
      fontSize: 14
    },
    lg: {
      height: 48,
      padding: '0 28px',
      fontSize: 15
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    fontSize: s.fontSize,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    transition: 'all var(--dur-base) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    ...style
  };
  const variants = {
    primary: {
      background: 'var(--grad-cta)',
      color: 'var(--text-primary)',
      borderColor: 'rgba(129,195,224,0.35)',
      boxShadow: 'var(--rim-top), var(--shadow-sm)'
    },
    secondary: {
      background: 'rgba(129,195,224,0.06)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-default)',
      backdropFilter: 'blur(var(--blur-sm))'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      borderColor: 'transparent'
    },
    danger: {
      background: 'transparent',
      color: 'var(--status-danger)',
      borderColor: 'rgba(224,86,79,0.4)'
    }
  };
  const hoverFor = {
    primary: (e, on) => {
      e.currentTarget.style.boxShadow = on ? 'var(--rim-top), var(--glow-md), var(--shadow-md)' : 'var(--rim-top), var(--shadow-sm)';
    },
    secondary: (e, on) => {
      e.currentTarget.style.borderColor = on ? 'var(--border-strong)' : 'var(--border-default)';
      e.currentTarget.style.background = on ? 'rgba(129,195,224,0.12)' : 'rgba(129,195,224,0.06)';
    },
    ghost: (e, on) => {
      e.currentTarget.style.color = on ? 'var(--text-primary)' : 'var(--text-secondary)';
      e.currentTarget.style.background = on ? 'rgba(129,195,224,0.06)' : 'transparent';
    },
    danger: (e, on) => {
      e.currentTarget.style.background = on ? 'rgba(224,86,79,0.10)' : 'transparent';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseEnter: e => !disabled && hoverFor[variant]?.(e, true),
    onMouseLeave: e => !disabled && hoverFor[variant]?.(e, false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Leviathan Card — glass surface over the abyss. Optional bioluminescent
 * hover lift. variant: glass | solid | outline. Use `interactive` for
 * clickable cards (adds hover glow + lift).
 */
function Card({
  variant = 'glass',
  interactive = false,
  padding = 'md',
  glow = false,
  children,
  style = {},
  onClick,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    glass: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      backdropFilter: 'blur(var(--blur-md))',
      WebkitBackdropFilter: 'blur(var(--blur-md))'
    },
    solid: {
      background: 'var(--surface-card-solid)',
      border: '1px solid var(--border-subtle)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)'
    }
  };
  const base = {
    position: 'relative',
    borderRadius: 'var(--radius-md)',
    padding: pads[padding] ?? pads.md,
    boxShadow: glow ? 'var(--glow-sm), var(--shadow-md)' : 'var(--shadow-sm)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    cursor: interactive ? 'pointer' : 'default',
    overflow: 'hidden',
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--glow-md), var(--shadow-lg)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = glow ? 'var(--glow-sm), var(--shadow-md)' : 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — square check with bioluminescent fill when selected. */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "checkbox",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--grad-cta)' : 'rgba(2,6,12,0.5)',
      border: `1px solid ${checked ? 'rgba(129,195,224,0.5)' : 'var(--border-default)'}`,
      boxShadow: checked ? 'var(--glow-sm)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      flexShrink: 0
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "var(--chrome-100)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.3 2.3L9.5 3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/circular control holding a single icon (e.g. a
 * Lucide <i data-lucide="search" />). variant: ghost | solid | outline.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  label,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const variants = {
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--text-secondary)'
    },
    solid: {
      background: 'rgba(129,195,224,0.08)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-primary)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.color = 'var(--text-primary)';
      e.currentTarget.style.background = 'rgba(129,195,224,0.12)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      Object.assign(e.currentTarget.style, {
        color: variants[variant].color,
        background: variants[variant].background,
        borderColor: variant === 'ghost' ? 'transparent' : variants[variant].border.split(' ').pop()
      });
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon, and hint/error.
 * Focus draws a bioluminescent ring. Pass `iconLeft` for a Lucide icon.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  style = {},
  containerStyle = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const h = heights[size] || heights.md;
  const fieldId = id || `lev-input-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      letterSpacing: '0.02em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: h,
      padding: '0 12px',
      background: 'rgba(2,6,12,0.5)',
      border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus && !error ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'none',
      font: 'var(--text-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono)',
      fontSize: 12,
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — a "depth gauge". Fills with the leviathan gradient and a
 * bioluminescent leading edge. value 0-100. `label` + `showValue` optional.
 */
function ProgressBar({
  value = 0,
  label,
  showValue = false,
  size = 'md',
  tone = 'accent',
  style = {}
}) {
  const v = Math.max(0, Math.min(100, value));
  const heights = {
    sm: 4,
    md: 8,
    lg: 12
  };
  const h = heights[size] || heights.md;
  const fills = {
    accent: 'var(--grad-cta)',
    biolume: 'linear-gradient(90deg, #163a6e, #4fb8e8)',
    success: 'linear-gradient(90deg, #1e6e52, #3fb98a)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono)',
      fontSize: 12,
      color: 'var(--text-accent)'
    }
  }, Math.round(v), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: h,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(129,195,224,0.08)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: `${v}%`,
      background: fills[tone] || fills.accent,
      borderRadius: 'var(--radius-pill)',
      boxShadow: '0 0 10px var(--glow-soft)',
      transition: 'width var(--dur-slow) var(--ease-deep)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown. options: [{value,label}] or strings.
 * Focus draws a bioluminescent ring; chevron is built in.
 */
function Select({
  label,
  options = [],
  value,
  onChange,
  size = 'md',
  style = {},
  containerStyle = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const h = heights[size] || heights.md;
  const fieldId = id || `lev-select-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 36px 0 12px',
      background: 'rgba(2,6,12,0.5)',
      color: 'var(--text-primary)',
      font: 'var(--text-body)',
      fontSize: 14,
      border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring)' : 'none',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    style: {
      background: '#07182c'
    }
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "1.5",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 5.5L7 9l3.5-3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — toggle. Bioluminescent when on. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--grad-cta)' : 'rgba(129,195,224,0.10)',
      border: `1px solid ${checked ? 'rgba(129,195,224,0.4)' : 'var(--border-default)'}`,
      boxShadow: checked ? 'var(--glow-sm)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)',
      flexShrink: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: checked ? 'var(--chrome-100)' : 'var(--steel-300)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — underline navigation. Active tab gets a bioluminescent underline.
 * items: [{ id, label, icon? }]. Controlled via value/onChange.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: '0 0 12px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        position: 'relative',
        fontFamily: 'var(--font-display)',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '0.04em',
        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, it.icon, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: active ? 'var(--biolume-400)' : 'transparent',
        boxShadow: active ? '0 0 8px var(--biolume-400)' : 'none',
        borderRadius: 'var(--radius-pill)',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — removable/selectable chip. Softer than Badge, sentence-case.
 * Pass `onRemove` to show a dismiss ✕. `active` for selected state.
 */
function Tag({
  active = false,
  onRemove,
  iconLeft = null,
  children,
  style = {},
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 28,
      padding: '0 10px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: active ? 'var(--accent-soft)' : 'rgba(129,195,224,0.05)',
      border: `1px solid ${active ? 'rgba(44,107,179,0.5)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), iconLeft, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 0,
      marginLeft: 2,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l6 6M9 3l-6 6",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Atmosphere.jsx
try { (() => {
// Atmosphere — the signature deep-sea environment: descending god rays,
// drifting marine-snow particles, and a caustic gradient floor.
// Pure CSS/DOM; keyframes live in index.html.
function Atmosphere() {
  const rays = [{
    left: '12%',
    w: 90,
    rot: 8,
    o: 0.10,
    d: 0
  }, {
    left: '30%',
    w: 140,
    rot: 6,
    o: 0.14,
    d: 2
  }, {
    left: '48%',
    w: 70,
    rot: 4,
    o: 0.08,
    d: 4
  }, {
    left: '62%',
    w: 120,
    rot: 9,
    o: 0.12,
    d: 1
  }, {
    left: '80%',
    w: 80,
    rot: 7,
    o: 0.09,
    d: 3
  }];
  const particles = Array.from({
    length: 36
  }, (_, i) => ({
    left: i * 37 % 100,
    top: i * 53 % 100,
    s: 1 + i % 3,
    dur: 14 + i % 9 * 2,
    delay: -(i % 12),
    o: 0.12 + i % 4 * 0.07
  }));
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'fixed',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-depth)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '40%',
      background: 'radial-gradient(120% 100% at 50% 0%, rgba(129,195,224,0.12), transparent 60%)'
    }
  }), rays.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: '-10%',
      left: r.left,
      width: r.w,
      height: '130%',
      background: `linear-gradient(180deg, rgba(169,220,242,${r.o}) 0%, rgba(129,195,224,0) 70%)`,
      transform: `rotate(${r.rot}deg)`,
      transformOrigin: 'top center',
      filter: 'blur(8px)',
      animation: `lev-ray 9s ease-in-out ${r.d}s infinite alternate`
    }
  })), particles.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: `${p.left}%`,
      top: `${p.top}%`,
      width: p.s,
      height: p.s,
      borderRadius: '50%',
      background: 'var(--biolume-200)',
      opacity: p.o,
      boxShadow: '0 0 4px var(--biolume-300)',
      animation: `lev-drift ${p.dur}s linear ${p.delay}s infinite`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '30%',
      background: 'linear-gradient(0deg, #02060c 5%, transparent 100%)'
    }
  }));
}
window.Atmosphere = Atmosphere;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Atmosphere.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DemoModal.jsx
try { (() => {
// DemoModal — "Request a Private Demo" dialog. Glass panel over a dimmed abyss.
function DemoModal({
  open,
  onClose
}) {
  const {
    Button,
    Input,
    Select,
    Checkbox
  } = window.LeviathanAIDesignSystem_f4b286;
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(true);
  React.useEffect(() => {
    if (open) {
      setSent(false);
    }
  }, [open]);
  if (!open) return null;
  const Ic = n => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)',
      padding: 24,
      animation: 'lev-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(480px, 100%)',
      background: 'var(--surface-card-solid)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--glow-md), var(--shadow-xl)',
      padding: 32,
      position: 'relative',
      animation: 'lev-rise var(--dur-slow) var(--ease-deep)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l10 10M14 4L4 14",
    strokeLinecap: "round"
  }))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      margin: '0 auto 18px',
      borderRadius: '50%',
      background: 'var(--accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--glow-sm)',
      color: 'var(--biolume-300)'
    }
  }, Ic('check')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '0.03em',
      color: 'var(--text-primary)'
    }
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 24px',
      font: 'var(--text-body)',
      color: 'var(--text-secondary)'
    }
  }, "Our team will surface from the deep within one business day."), /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 8
    }
  }, "Private Demo"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '0.03em',
      color: 'var(--text-primary)'
    }
  }, "Request a Private Demo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 22px',
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "Tell us about your operation. We tailor every demo to your enterprise."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Marina Vance",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@firm.com",
    iconLeft: Ic('mail'),
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Product of interest",
    options: ['Leviathan Intake AI', 'Leviathan Litigation Engine', 'Leviathan Analytics', 'Leviathan Vendor Network']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: setAgree,
    label: "I agree to be contacted about Leviathan products."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    size: "lg"
  }, "Request Demo"))))));
}
window.DemoModal = DemoModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DemoModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero — full-bleed deep-sea hero: logo lockup, headline, primary CTA.
function Hero({
  onDemo
}) {
  const {
    Button
  } = window.LeviathanAIDesignSystem_f4b286;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/leviathan-logo-full.png",
    alt: "Leviathan AI Systems",
    style: {
      width: 'min(360px, 64vw)',
      height: 'auto',
      marginBottom: 36,
      filter: 'drop-shadow(0 10px 40px rgba(79,184,232,0.35))',
      animation: 'lev-float 7s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(28px, 4.4vw, 52px)',
      letterSpacing: '0.05em',
      lineHeight: 1.1,
      color: 'var(--text-primary)',
      textShadow: '0 2px 24px rgba(2,6,12,0.8)'
    }
  }, "Enterprise AI Infrastructure", /*#__PURE__*/React.createElement("br", null), "Built for Scale"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onDemo
  }, "Request a Private Demo")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PlatformSection.jsx
try { (() => {
// PlatformSection — "Leviathan Platform": four product tiles.
// Tiles are faithful crops of the source site (icon + title + subtitle baked in).
function PlatformSection() {
  const {
    Card
  } = window.LeviathanAIDesignSystem_f4b286;
  const items = [{
    img: 'intake',
    alt: 'Leviathan Intake AI — Automate legal intake & case evaluation'
  }, {
    img: 'litigation',
    alt: 'Leviathan Litigation Engine — AI-powered litigation intelligence'
  }, {
    img: 'analytics',
    alt: 'Leviathan Analytics — Advanced data & risk analytics'
  }, {
    img: 'vendor',
    alt: 'Leviathan Vendor Network — Optimize vendor management and compliance'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "platform",
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '40px 40px 80px',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Leviathan Platform",
    title: "AI Solutions for Complex Enterprise Operations"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginTop: 44
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.img,
    variant: "solid",
    padding: "none",
    interactive: true,
    style: {
      aspectRatio: '283 / 410'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/products/${it.img}.png`,
    alt: it.alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))));
}
function SectionHeading({
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(22px, 2.6vw, 34px)',
      letterSpacing: '0.04em',
      color: 'var(--text-primary)'
    }
  }, title));
}
window.PlatformSection = PlatformSection;
window.SectionHeading = SectionHeading;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PlatformSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// SiteFooter — closing band on the steel-blue ocean with the mark and a CTA strip.
function SiteFooter({
  onDemo
}) {
  const {
    Button
  } = window.LeviathanAIDesignSystem_f4b286;
  const cols = [{
    h: 'Platform',
    links: ['Intake AI', 'Litigation Engine', 'Analytics', 'Vendor Network']
  }, {
    h: 'Company',
    links: ['About', 'Security', 'Careers', 'Contact']
  }, {
    h: 'Resources',
    links: ['Documentation', 'Case Studies', 'Compliance', 'Status']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(180deg, #0a1e36 0%, #15315a 100%)',
      borderTop: '1px solid var(--border-default)',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '64px 40px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 28,
      letterSpacing: '0.04em',
      color: 'var(--text-primary)'
    }
  }, "Command the depth of your data."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      maxWidth: 460
    }
  }, "See how Leviathan turns enterprise complexity into precise, defensible intelligence.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onDemo
  }, "Request a Private Demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '40px 40px 48px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/leviathan-mark.png",
    alt: "Leviathan",
    style: {
      height: 40,
      width: 'auto',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: 240,
      lineHeight: 1.6
    }
  }, "Leviathan AI Systems \u2014 enterprise AI infrastructure built for scale.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#platform",
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: '20px 40px',
      maxWidth: 1320,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Leviathan AI Systems"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Security")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// SiteHeader — fixed black top bar: mark, primary nav, demo CTA, search + cart.
function SiteHeader({
  onDemo,
  onSearch
}) {
  const {
    Button,
    IconButton
  } = window.LeviathanAIDesignSystem_f4b286;
  const nav = ['Intake AI', 'Litigation AI', 'AI Analytics', 'Vendor Network'];
  const Ic = n => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      background: 'rgba(0,0,0,0.82)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/leviathan-mark.png",
    alt: "Leviathan",
    style: {
      height: 38,
      width: 'auto',
      filter: 'drop-shadow(0 0 10px rgba(79,184,232,0.4))'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#platform",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onDemo
  }, "Request a Demo"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Search",
    onClick: onSearch
  }, Ic('search')), /*#__PURE__*/React.createElement(IconButton, {
    label: "Cart"
  }, Ic('shopping-bag'))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TechSection.jsx
try { (() => {
// TechSection — "Technology Powered by the Deep": three capability tiles.
function TechSection() {
  const {
    Card
  } = window.LeviathanAIDesignSystem_f4b286;
  const items = [{
    img: 'infrastructure',
    alt: 'AI Infrastructure — Enterprise-level AI architecture built for scalability'
  }, {
    img: 'generative',
    alt: 'Generative Intelligence — Cutting-edge models that understand and generate complex legal work'
  }, {
    img: 'adaptive',
    alt: 'Adaptive Systems — Continuously learning AI tailored to evolving enterprise needs'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "technology",
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '40px 40px 96px',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Deep",
    title: "Technology Powered by the Deep"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 44
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.img,
    variant: "solid",
    padding: "none",
    interactive: true,
    style: {
      aspectRatio: '390 / 344'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/products/${it.img}.png`,
    alt: it.alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))));
}
window.TechSection = TechSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TechSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

})();

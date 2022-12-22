(()=>{"use strict";var A,n,t,r,e,o,a,i,c,d,s,m,l,B,p={390:(A,n,t)=>{t.d(n,{Z:()=>i});var r=t(537),e=t.n(r),o=t(645),a=t.n(o)()(e());a.push([A.id,'/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.mx-32 {\n  margin-left: 8rem;\n  margin-right: 8rem;\n}\r\n.ml-96 {\n  margin-left: 24rem;\n}\r\n.mr-20 {\n  margin-right: 5rem;\n}\r\n.ml-10 {\n  margin-left: 2.5rem;\n}\r\n.mt-28 {\n  margin-top: 7rem;\n}\r\n.mt-16 {\n  margin-top: 4rem;\n}\r\n.mr-52 {\n  margin-right: 13rem;\n}\r\n.mt-96 {\n  margin-top: 24rem;\n}\r\n.ml-8 {\n  margin-left: 2rem;\n}\r\n.ml-40 {\n  margin-left: 10rem;\n}\r\n.ml-56 {\n  margin-left: 14rem;\n}\r\n.mt-10 {\n  margin-top: 2.5rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mt-12 {\n  margin-top: 3rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.mb-28 {\n  margin-bottom: 7rem;\n}\r\n.mt-0 {\n  margin-top: 0px;\n}\r\n.flex {\n  display: flex;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-auto {\n  height: auto;\n}\r\n.h-32 {\n  height: 8rem;\n}\r\n.h-40 {\n  height: 10rem;\n}\r\n.h-14 {\n  height: 3.5rem;\n}\r\n.h-1\\/5 {\n  height: 20%;\n}\r\n.h-10 {\n  height: 2.5rem;\n}\r\n.w-20 {\n  width: 5rem;\n}\r\n.w-auto {\n  width: auto;\n}\r\n.w-32 {\n  width: 8rem;\n}\r\n.w-48 {\n  width: 12rem;\n}\r\n.w-1\\/5 {\n  width: 20%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-40 {\n  width: 10rem;\n}\r\n.translate-y-2 {\n  --tw-translate-y: 0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.skew-y-12 {\n  --tw-skew-y: 12deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.justify-end {\n  justify-content: flex-end;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-around {\n  justify-content: space-around;\n}\r\n.justify-evenly {\n  justify-content: space-evenly;\n}\r\n.gap-8 {\n  gap: 2rem;\n}\r\n.gap-6 {\n  gap: 1.5rem;\n}\r\n.gap-y-32 {\n  row-gap: 8rem;\n}\r\n.gap-x-32 {\n  -moz-column-gap: 8rem;\n       column-gap: 8rem;\n}\r\n.gap-y-48 {\n  row-gap: 12rem;\n}\r\n.gap-x-48 {\n  -moz-column-gap: 12rem;\n       column-gap: 12rem;\n}\r\n.gap-y-36 {\n  row-gap: 9rem;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-rose-900 {\n  --tw-border-opacity: 1;\n  border-color: rgba(136, 19, 55, var(--tw-border-opacity));\n}\r\n.border-blue-900 {\n  --tw-border-opacity: 1;\n  border-color: rgba(30, 58, 138, var(--tw-border-opacity));\n}\r\n.border-b-slate-400 {\n  --tw-border-opacity: 1;\n  border-bottom-color: rgba(148, 163, 184, var(--tw-border-opacity));\n}\r\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\r\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\r\n.bg-indigo-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(199, 210, 254, var(--tw-bg-opacity));\n}\r\n.bg-lime-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(190, 242, 100, var(--tw-bg-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\r\n.bg-orange-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 237, 213, var(--tw-bg-opacity));\n}\r\n.bg-red-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));\n}\r\n.bg-stone-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(214, 211, 209, var(--tw-bg-opacity));\n}\r\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\r\n.bg-cyan-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(165, 243, 252, var(--tw-bg-opacity));\n}\r\n.bg-blue-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(30, 58, 138, var(--tw-bg-opacity));\n}\r\n.bg-auto {\n  background-size: auto;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-20 {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\r\n.pt-16 {\n  padding-top: 4rem;\n}\r\n.pt-28 {\n  padding-top: 7rem;\n}\r\n.pb-16 {\n  padding-bottom: 4rem;\n}\r\n.pb-20 {\n  padding-bottom: 5rem;\n}\r\n.pr-16 {\n  padding-right: 4rem;\n}\r\n.pt-48 {\n  padding-top: 12rem;\n}\r\n.pb-56 {\n  padding-bottom: 14rem;\n}\r\n.pt-4 {\n  padding-top: 1rem;\n}\r\n.pl-20 {\n  padding-left: 5rem;\n}\r\n.pb-8 {\n  padding-bottom: 2rem;\n}\r\n.pt-10 {\n  padding-top: 2.5rem;\n}\r\n.pr-20 {\n  padding-right: 5rem;\n}\r\n.pl-8 {\n  padding-left: 2rem;\n}\r\n.pl-16 {\n  padding-left: 4rem;\n}\r\n.pt-36 {\n  padding-top: 9rem;\n}\r\n.pt-20 {\n  padding-top: 5rem;\n}\r\n.pt-8 {\n  padding-top: 2rem;\n}\r\n.pt-56 {\n  padding-top: 14rem;\n}\r\n.pt-32 {\n  padding-top: 8rem;\n}\r\n.pb-36 {\n  padding-bottom: 9rem;\n}\r\n.pt-80 {\n  padding-top: 20rem;\n}\r\n.pt-12 {\n  padding-top: 3rem;\n}\r\n.pl-4 {\n  padding-left: 1rem;\n}\r\n.pt-6 {\n  padding-top: 1.5rem;\n}\r\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\r\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\r\n.text-7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-normal {\n  font-weight: 400;\n}\r\n.italic {\n  font-style: italic;\n}\r\n.text-red-900 {\n  --tw-text-opacity: 1;\n  color: rgba(127, 29, 29, var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\r\n.text-green-700 {\n  --tw-text-opacity: 1;\n  color: rgba(21, 128, 61, var(--tw-text-opacity));\n}\r\n.text-lime-500 {\n  --tw-text-opacity: 1;\n  color: rgba(132, 204, 22, var(--tw-text-opacity));\n}\r\n.text-lime-600 {\n  --tw-text-opacity: 1;\n  color: rgba(101, 163, 13, var(--tw-text-opacity));\n}\r\n.text-indigo-900 {\n  --tw-text-opacity: 1;\n  color: rgba(49, 46, 129, var(--tw-text-opacity));\n}\r\n.text-indigo-700 {\n  --tw-text-opacity: 1;\n  color: rgba(67, 56, 202, var(--tw-text-opacity));\n}\r\n.text-red-200 {\n  --tw-text-opacity: 1;\n  color: rgba(254, 202, 202, var(--tw-text-opacity));\n}\r\n.text-red-300 {\n  --tw-text-opacity: 1;\n  color: rgba(252, 165, 165, var(--tw-text-opacity));\n}\r\n.text-orange-200 {\n  --tw-text-opacity: 1;\n  color: rgba(254, 215, 170, var(--tw-text-opacity));\n}\r\n.text-blue-200 {\n  --tw-text-opacity: 1;\n  color: rgba(191, 219, 254, var(--tw-text-opacity));\n}\r\n.text-blue-900 {\n  --tw-text-opacity: 1;\n  color: rgba(30, 58, 138, var(--tw-text-opacity));\n}\r\n.text-blue-400 {\n  --tw-text-opacity: 1;\n  color: rgba(96, 165, 250, var(--tw-text-opacity));\n}\r\n.text-violet-900 {\n  --tw-text-opacity: 1;\n  color: rgba(76, 29, 149, var(--tw-text-opacity));\n}\r\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-cyan-100\\/60 {\n  --tw-shadow-color: rgba(207, 250, 254, 0.6);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.delay-150 {\n  transition-delay: 150ms;\n}\r\n.duration-150 {\n  transition-duration: 150ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n:root {\r\n    --clippy: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);\r\n}\r\n\r\n\r\n.miPresentacion {\r\n    background-color: rgb(34, 25, 25);\r\n}\r\n\r\n\r\n.nombre::before:hover:before {\r\n    -webkit-clip-path: polygon(0 0, 99% 0, 99% 100%, 0 100%);\r\n            clip-path: polygon(0 0, 99% 0, 99% 100%, 0 100%);\r\n}\r\n\r\n.educacion {\r\n    background-color: #453c3b;\r\n    transition: background-color 3s linear;\r\n\r\n}\r\n\r\n.educacion:hover {\r\n    background-color: #2f344f;\r\n    transition: margin-right 2s linear;\r\n}\r\n\r\n.linea {\r\n    margin-top: 8rem;\r\n    height: 2px;\r\n    background-color: rgb(156, 159, 158);\r\n    border-color: rgb(68, 69, 69);\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n}\r\n\r\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:rotate-6:hover {\n  --tw-rotate: 6deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-x-75:hover {\n  --tw-scale-x: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:bg-red-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\r\n\r\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-red-900:hover {\n  --tw-text-opacity: 1;\n  color: rgba(127, 29, 29, var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:transform-none {\n    transform: none;\n  }\n}',"",{version:3,sources:["webpack://./src/css/style.css","<no source>"],names:[],mappings:"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",sourcesContent:["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n:root {\r\n    --clippy: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);\r\n}\r\n\r\n\r\n.miPresentacion {\r\n    background-color: rgb(34, 25, 25);\r\n}\r\n\r\n\r\n.nombre::before:hover:before {\r\n    clip-path: polygon(0 0, 99% 0, 99% 100%, 0 100%);\r\n}\r\n\r\n.educacion {\r\n    background-color: #453c3b;\r\n    transition: background-color 3s linear;\r\n\r\n}\r\n\r\n.educacion:hover {\r\n    background-color: #2f344f;\r\n    transition: margin-right 2s linear;\r\n}\r\n\r\n.linea {\r\n    margin-top: 8rem;\r\n    height: 2px;\r\n    background-color: rgb(156, 159, 158);\r\n    border-color: rgb(68, 69, 69);\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n}",null],sourceRoot:""}]);const i=a},645:A=>{A.exports=function(A){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=A(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(A,t,r,e,o){"string"==typeof A&&(A=[[null,A,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var d=0;d<A.length;d++){var s=[].concat(A[d]);r&&a[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),e&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=e):s[4]="".concat(e)),n.push(s))}},n}},537:A=>{A.exports=function(A){var n=A[1],t=A[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(e," */"),a=t.sources.map((function(A){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(A," */")}));return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}},379:A=>{var n=[];function t(A){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===A){t=r;break}return t}function r(A,r){for(var o={},a=[],i=0;i<A.length;i++){var c=A[i],d=r.base?c[0]+r.base:c[0],s=o[d]||0,m="".concat(d," ").concat(s);o[d]=s+1;var l=t(m),B={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(B);else{var p=e(B,r);r.byIndex=i,n.splice(i,0,{identifier:m,updater:p,references:1})}a.push(m)}return a}function e(A,n){var t=n.domAPI(n);return t.update(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap&&n.supports===A.supports&&n.layer===A.layer)return;t.update(A=n)}else t.remove()}}A.exports=function(A,e){var o=r(A=A||[],e=e||{});return function(A){A=A||[];for(var a=0;a<o.length;a++){var i=t(o[a]);n[i].references--}for(var c=r(A,e),d=0;d<o.length;d++){var s=t(o[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},569:A=>{var n={};A.exports=function(A,t){var r=function(A){if(void 0===n[A]){var t=document.querySelector(A);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}n[A]=t}return n[A]}(A);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:A=>{A.exports=function(A){var n=document.createElement("style");return A.setAttributes(n,A.attributes),A.insert(n,A.options),n}},565:(A,n,t)=>{A.exports=function(A){var n=t.nc;n&&A.setAttribute("nonce",n)}},795:A=>{A.exports=function(A){var n=A.insertStyleElement(A);return{update:function(t){!function(A,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var e=void 0!==t.layer;e&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,e&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,A,n.options)}(n,A,t)},remove:function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(n)}}}},589:A=>{A.exports=function(A,n){if(n.styleSheet)n.styleSheet.cssText=A;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(A))}}}},E={};function g(A){var n=E[A];if(void 0!==n)return n.exports;var t=E[A]={id:A,exports:{}};return p[A](t,t.exports,g),t.exports}g.n=A=>{var n=A&&A.__esModule?()=>A.default:()=>A;return g.d(n,{a:n}),n},g.d=(A,n)=>{for(var t in n)g.o(n,t)&&!g.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:n[t]})},g.o=(A,n)=>Object.prototype.hasOwnProperty.call(A,n),g.nc=void 0,A=g(379),n=g.n(A),t=g(795),r=g.n(t),e=g(569),o=g.n(e),a=g(565),i=g.n(a),c=g(216),d=g.n(c),s=g(589),m=g.n(s),l=g(390),(B={}).styleTagTransform=m(),B.setAttributes=i(),B.insert=o().bind(null,"head"),B.domAPI=r(),B.insertStyleElement=d(),n()(l.Z,B),l.Z&&l.Z.locals&&l.Z.locals,document.addEventListener("scroll",(()=>{console.log("me estoy moviendo"),console.dir("movimiento")}))})();
//# sourceMappingURL=app.77fd1b0070655a6dc27a.js.map
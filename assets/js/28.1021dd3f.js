(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{456:function(t,v,_){"use strict";_.r(v);var a=_(56),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"garbage-collection"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#garbage-collection"}},[t._v("#")]),t._v(" "),_("strong",[t._v("garbage collection")])]),t._v(" "),_("ul",[_("li",[t._v("手动回收")]),t._v(" "),_("li",[t._v("自动回收")])]),t._v(" "),_("ol",[_("li",[t._v("标记内存空间中的活动对象和非活动对象")]),t._v(" "),_("li",[t._v("删除非活动对象，释放内存空间")]),t._v(" "),_("li",[t._v("整理内存空间，避免产生内存碎片")])]),t._v(" "),_("h2",{attrs:{id:"标记清除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[t._v("#")]),t._v(" 标记清除")]),t._v(" "),_("ol",[_("li",[t._v("标记活动对象")]),t._v(" "),_("li",[t._v("清除未标记对象")])]),t._v(" "),_("ul",[_("li",[t._v("缺点：产生大量内存碎片")])]),t._v(" "),_("h2",{attrs:{id:"复制算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复制算法"}},[t._v("#")]),t._v(" 复制算法")]),t._v(" "),_("ol",[_("li",[t._v("内存空间分为from和to两部分")]),t._v(" "),_("li",[t._v("先在from空间进行内存分配，空间占满后，标记活动对象，并把活动对象复制到to")]),t._v(" "),_("li",[t._v("将from和to空间互换")])]),t._v(" "),_("ul",[_("li",[t._v("缺点：复制需要时间；内存空间减少一半")])]),t._v(" "),_("h2",{attrs:{id:"引用计数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引用计数"}},[t._v("#")]),t._v(" 引用计数")]),t._v(" "),_("ol",[_("li",[t._v("实时统计指向对象的引用数")]),t._v(" "),_("li",[t._v("当引用数为0时，回收对象")])]),t._v(" "),_("ul",[_("li",[t._v("缺点：循环引用")])]),t._v(" "),_("h2",{attrs:{id:"标记-压缩算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标记-压缩算法"}},[t._v("#")]),t._v(" 标记-压缩算法")]),t._v(" "),_("ol",[_("li",[t._v("标记活动对象")]),t._v(" "),_("li",[t._v("将所有活动对象移动到内存一端")]),t._v(" "),_("li",[t._v("清除边界外的内存")])]),t._v(" "),_("h2",{attrs:{id:"代际假说和分代收集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代际假说和分代收集"}},[t._v("#")]),t._v(" 代际假说和分代收集")]),t._v(" "),_("ol",[_("li",[t._v("大多数对象生命周期很短")]),t._v(" "),_("li",[t._v("一直存活的对象通常会存在很久，所以对象的生存期存在两极分化")])]),t._v(" "),_("p",[t._v("将对象进行分代，对不同的分代实施不同的垃圾回收算法")]),t._v(" "),_("h2",{attrs:{id:"js垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js垃圾回收"}},[t._v("#")]),t._v(" JS垃圾回收")]),t._v(" "),_("h3",{attrs:{id:"栈中垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈中垃圾回收"}},[t._v("#")]),t._v(" 栈中垃圾回收")]),t._v(" "),_("ul",[_("li",[t._v("ESP（extened stack pointer）：扩展栈指针，用于存放函数栈顶指针")]),t._v(" "),_("li",[t._v("js执行函数时，将其上下文压入栈中，ESP上移，函数执行技术，弹出，ESP下移")])]),t._v(" "),_("h3",{attrs:{id:"堆中垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#堆中垃圾回收"}},[t._v("#")]),t._v(" 堆中垃圾回收")]),t._v(" "),_("ul",[_("li",[t._v("堆空间分为新生代和老生代，对两个区域实施不同的垃圾回收策略")]),t._v(" "),_("li",[t._v("新生代空间存放生命周期短、小的对象，使用复制算法，新生代中经过两次垃圾回收后仍然存活的对象会晋升到老生代空间")]),t._v(" "),_("li",[t._v("老生代空间存放生命周期长、大的对象，使用标记 - 压缩算法")])])])}),[],!1,null,null,null);v.default=r.exports}}]);
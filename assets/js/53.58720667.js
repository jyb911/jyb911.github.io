(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{424:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"mupdf编译使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mupdf编译使用"}},[t._v("#")]),t._v(" mupdf编译使用")]),t._v(" "),s("p",[t._v("首先下载muPDF，找到mupdf-1.8-source.，platform文件夹为不同平台上的工程配置，进入win32目录，打开mupdf工程(vs2008及以上会提示转换,转换后自动产生.sln工程)")]),t._v(" "),s("p",[t._v("编译生成x64版本的静态库文件")]),t._v(" "),s("p",[t._v(".pro文件中添加静态库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("LIBS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" -L$"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/./ -llibmupdf -llibthirdparty\nINCLUDEPATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/include\nDEPENDPATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/include\n")])])]),s("h3",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("引入头文件时，出现")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mupdfwrapercore.obj:-1: error: LNK2019: 无法解析的外部符号 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"void __cdecl fz_push_try(struct fz_context_s *)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?fz_push_try@@YAXPEAUfz_context_s@@@Z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，该符号在函数 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public: void __cdecl MuPDFWraperCore::initContext(void)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?initContext@MuPDFWraperCore@@QEAAXXZ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 中被引用\n")])])]),s("p",[t._v("因为mupdf使用纯C代码，编译产生的lib具有浓厚的C色彩，作为lib导出的函数修饰符仅仅只有前缀_. 如fz_new_context函数的导出为_fz_new_context，而我们用c++代码加载时，修饰后找的函数却是?fz_push_try@@YAXPEAUfz_context_s@@@Z自然找不到.")]),t._v(" "),s("p",[t._v("解决方案")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('extern "C"\n{\n#include "mupdf/fitz.h"\n}\n')])])]),s("p",[t._v("还可能出现")]),t._v(" "),s("div",{staticClass:"language-apl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-apl"}},[s("code",[t._v("LIBCMT"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dosmap"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),t._v(" error LNK2005"),s("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),t._v(" __errno 已经在 MSVCRT"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MSVCR100"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("dll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 中定义\nLIBCMT"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tidtable"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),t._v(" error LNK2005"),s("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),t._v(" __encoded_null 已经在 MSVCRT"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MSVCR100"),s("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[t._v(".")]),t._v("dll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 中定义\n")])])]),s("p",[t._v("库冲突了mupdf的lib使用MT运行库,而QT和VS都默认使用MD运行库")]),t._v(" "),s("p",[t._v("解决方案")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(".pro文件中添加\nQMAKE_CXXFLAGS_RELEASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" -O2 -MT -GL\nQMAKE_CXXFLAGS_DEBUG "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" -Zi -MTd\n")])])]),s("h3",{attrs:{id:"运行库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行库"}},[t._v("#")]),t._v(" 运行库")]),t._v(" "),s("p",[t._v("Visual Studio C++中在属性 -> 配置属性 -> C/C++ -> 代码生成 -> 运行库显示")]),t._v(" "),s("p",[t._v("Qt Creator在F:\\Qt\\5.13.0\\msvc2015_64\\mkspecs\\winrt-x64-msvc2015\\qnake.conf查看在.pro文件中通过QMAKE_CXXFLAGS_RELEASE设置")]),t._v(" "),s("p",[t._v("CRT：C/C++ Runtime Library，用于操作系统的开发及运行，Windows API作为Windows的一部分，是在CRT的基础上开发的")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("库类型和相关编译器开关")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("基本 C 运行时库/标准 C++ 库")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("单线程 (/ML)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("LIBC、LIB/LIBCP")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("调试单线程 (/MLd)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("LIBCD、LIB/LIBCPD")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("多线程 (/MT)静态库")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("LIBCMT、LIB/LIBCPMT")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("调试多线程 (/MTd)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("LIBCMTD、LIB / LIBCPMTD")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("多线程 DLL (/MD)动态库")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("MSVCRT、LIB/MSVCPRT")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("调试多线程 /DLL ("),s("code",[t._v("MDd")]),t._v(")")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("MSVCRTD、LIB/MSVCPRTD")])])])]),t._v(" "),s("p",[t._v("MT：mutithread，多线程库，编译器会从运行时库里面选择多线程静态连接库来解释程序中的代码，即连接LIBCMT.lib库")]),t._v(" "),s("p",[t._v("MTd：mutithread+debug，多线程调试版，连接LIBMITD.lib库")]),t._v(" "),s("p",[t._v("MD：MT+DLL，多线程动态库，连接MSVCRT.lib库，这是个导入库，对应动态库为MSVCRT.dll")]),t._v(" "),s("p",[t._v("MDd： MT+DLL+debug，多线程动态调试库，连接MSVCRTD.lib库，对应动态库为MSVCRTD.dll")]),t._v(" "),s("h3",{attrs:{id:"标准库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准库"}},[t._v("#")]),t._v(" 标准库")]),t._v(" "),s("p",[t._v("Glibc是Linux中使用最广泛的C标准库")]),t._v(" "),s("p",[t._v("GNU/linux上对应的C++标准库为"),s("strong",[t._v("libstdc++")])]),t._v(" "),s("p",[t._v("Windows 标准C库ucrt.lib在ucrtbase.dll中，C++标准库(动态链接)msvcprt.lib位于msvcp.dll")]),t._v(" "),s("p",[t._v("MinGW 是GNU的一些开发工具，例如GCC、GNU 汇编、链接等程序在Windows上的移植")]),t._v(" "),s("p",[t._v("msvcrt.dll是MSVC4.2到6.0版本之间的标准C库")]),t._v(" "),s("ol",[s("li",[t._v("UCRT，标准C库，对应ucrtbase.dll；")]),t._v(" "),s("li",[t._v("vcruntime库，对应VCRUNTIME140D.DLL,VCRUNTIME140_1D.DLL;")]),t._v(" "),s("li",[t._v("STL，标准C++库，对应MSVCP140D.DLL")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{411:function(_,v,t){"use strict";t.r(v);var a=t(56),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"高级c-c-编译技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级c-c-编译技术"}},[_._v("#")]),_._v(" 高级C/C++编译技术")]),_._v(" "),t("h3",{attrs:{id:"虚拟内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存"}},[_._v("#")]),_._v(" 虚拟内存")]),_._v(" "),t("p",[_._v("运行时的物理内存会被划分成分段（页），每一页都可用来同步执行程序")]),_._v(" "),t("p",[_._v("正在运行的程序的完整内存布局会被保存在硬盘中，只有那些当前即将被执行的一部分代码和数据才会被加载到物理内存的页中")]),_._v(" "),t("h3",{attrs:{id:"进程内存划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程内存划分"}},[_._v("#")]),_._v(" 进程内存划分")]),_._v(" "),t("ul",[t("li",[_._v("代码节（.text节）：供cpu执行的机器指令")]),_._v(" "),t("li",[_._v("数据节：供cpu操作的数据，初始化数据.data，未初始化数据.bss，只读数据.rdata")]),_._v(" "),t("li",[_._v("堆：动态内存分配")]),_._v(" "),t("li",[_._v("栈：为各个函数提供独立存储空间")]),_._v(" "),t("li",[_._v("最上层部分属于内核区域，存放特定进程的环境变量")])]),_._v(" "),t("h3",{attrs:{id:"编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[_._v("#")]),_._v(" 编译")]),_._v(" "),t("p",[_._v("编译单元通常是指一个单独的源文件（通常是.cpp文件），它包含了所有被编译成目标代码的信息")]),_._v(" "),t("p",[_._v("编译器会将每个cpp文件单独编译成对应的汇编代码.s文件")]),_._v(" "),t("p",[_._v("头文件不被编译，但预处理器会在编译过程中递归包含，从而形成一个包含所有必要信息的单个源文件")]),_._v(" "),t("h4",{attrs:{id:"编译各个阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译各个阶段"}},[_._v("#")]),_._v(" 编译各个阶段")]),_._v(" "),t("ol",[t("li",[_._v("预处理 .i")]),_._v(" "),t("li",[_._v("词法分析：将源代码分割成不可分割的单词")]),_._v(" "),t("li",[_._v("语法分析：将单词连接成序列，根据语法规则判断顺序是否合理")]),_._v(" "),t("li",[_._v("语义分析：判断符合语法规则的语句是否具有实际意义")]),_._v(" "),t("li",[_._v("汇编：将标准语言集合转换成特定CPU指令集的语言集合，.s")]),_._v(" "),t("li",[_._v("代码优化")]),_._v(" "),t("li",[_._v("代码生成：生成目标文件（.o），每个目标文件对应一个编译单元，汇编指令在此阶段转换为机器指令")])]),_._v(" "),t("h4",{attrs:{id:"目标文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目标文件"}},[_._v("#")]),_._v(" 目标文件")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("符号和节是目标文件的基本组成部分，其中"),t("strong",[_._v("符号")]),_._v("表示的是程序的内存地址或数据内存")])]),_._v(" "),t("li",[t("p",[_._v("目标文件中独立的节都可能包含在最终的程序内存映射中，因此目标文件中每个节的起始地址都会被临时设置为0，链接阶段才会确定程序内存映射中每个独立节的实际地址范围")])])]),_._v(" "),t("h3",{attrs:{id:"链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[_._v("#")]),_._v(" 链接")]),_._v(" "),t("p",[_._v("链接是将独立的节组合成最终的程序内存映射节，同时解析所有引用")]),_._v(" "),t("p",[_._v("进程内存映射：从0地址开始存放的各种节")]),_._v(" "),t("h4",{attrs:{id:"重定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定位"}},[_._v("#")]),_._v(" 重定位")]),_._v(" "),t("p",[_._v("重定位将目标文件中的节拼接到程序内存映射节中，目标文件节中从0开始的地址范围转换成最终程序内存映射中更具体的地址范围")]),_._v(" "),t("h4",{attrs:{id:"解析引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析引用"}},[_._v("#")]),_._v(" 解析引用")]),_._v(" "),t("ol",[t("li",[_._v("未知实际程序内存地址的符号会被当成未解析引用")]),_._v(" "),t("li",[_._v("计算该引用的精确地址")]),_._v(" "),t("li",[_._v("将机器指令中的伪地址替换成程序内存映射的实际地址")])]),_._v(" "),t("h3",{attrs:{id:"可执行文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可执行文件"}},[_._v("#")]),_._v(" 可执行文件")]),_._v(" "),t("ul",[t("li",[_._v("可执行文件由启动例程、各种节、运行时堆、共享库的内存映射区域、用户栈、内核代码和数据、特定进行的数据结构组成")]),_._v(" "),t("li",[_._v("可执行文件结构布局遵循特定目标平台的可执行文件格式")]),_._v(" "),t("li",[_._v("可执行文件并"),t("strong",[_._v("不完全是")]),_._v("通过编译项目源代码文件生成，启动程序的一部分代码片段在链接阶段才添加到程序内存映射的起始处，即启动例程")])]),_._v(" "),t("h3",{attrs:{id:"装载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#装载"}},[_._v("#")]),_._v(" 装载")]),_._v(" "),t("ul",[t("li",[_._v("装载器会打开可执行文件读取节的相关信息并载入到进程内存映射结构中")]),_._v(" "),t("li",[_._v("装载器还会根据节的相同装载需求将链接器创建的"),t("strong",[_._v("节")]),_._v("组合成"),t("strong",[_._v("段")])])]),_._v(" "),t("h3",{attrs:{id:"静态库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态库"}},[_._v("#")]),_._v(" 静态库")]),_._v(" "),t("p",[_._v("静态库实际上是二进制目标文件集合，通过编译器编译源代码并将生成的目标文件打包生成后的归档文件")]),_._v(" "),t("h4",{attrs:{id:"静态库转换为动态库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态库转换为动态库"}},[_._v("#")]),_._v(" 静态库转换为动态库")]),_._v(" "),t("h4",{attrs:{id:"静态库在64位linux上的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态库在64位linux上的问题"}},[_._v("#")]),_._v(" 静态库在64位Linux上的问题")]),_._v(" "),t("ul",[t("li",[_._v("将静态库链接到可执行文件64位Linux和32位Linux相同")]),_._v(" "),t("li",[_._v("将静态库链接到共享库要求静态库使用-fPIC或-mcmodel-large编译器选项进行构建，因为使用32位寄存器的编译汇编器无法访问64位平台地址偏移范围")])]),_._v(" "),t("h3",{attrs:{id:"动态库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态库"}},[_._v("#")]),_._v(" 动态库")]),_._v(" "),t("ol",[t("li",[_._v("动态库装载时重定位（LTR），动态库通过操作系统动态链接模块提供，每个应用程序都需要加载一份自己的动态库副本。导致这种限制的原因是LTR为了实现向应用程序特定地址映射的功能，会修改动态库中的.text节的符号，这样导致其他应用程序载入动态库的地址范围不同，需要修改自身适用的动态库副本")]),_._v(" "),t("li",[_._v("共享库位置无关代码（PIC，Position Independent Code），通过修改动态库代码访问符号的方式，只需要提供一份加载到某一进程中内存映射的动态库副本，就能映射到任何应用程序进程中")]),_._v(" "),t("li",[_._v("链接器在构建时只会查找动态库库中的符号，并默认所有的符号都能够被正确解析，只有在加载时才会将动态库的段集成到可执行文件中")]),_._v(" "),t("li",[_._v("动态链接构建时与运行时之间应用程序二进制接口的不变性是动态链接成功的最基本要求")])]),_._v(" "),t("h4",{attrs:{id:"名称修饰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#名称修饰"}},[_._v("#")]),_._v(" 名称修饰")]),_._v(" "),t("ul",[t("li",[_._v("将函数名、函数的从属信息、函数的参数列表进行组合，最后生成符号名称")])]),_._v(" "),t("h5",{attrs:{id:"c风格函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c风格函数"}},[_._v("#")]),_._v(" C风格函数")]),_._v(" "),t("ul",[t("li",[_._v("C函数不需要名称修饰，但链接器会默认创建带修饰的名称")]),_._v(" "),t("li",[_._v('extern "C"关键字，链接器会创建不带修饰的符号名称')])]),_._v(" "),t("h4",{attrs:{id:"静态初始化顺序问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态初始化顺序问题"}},[_._v("#")]),_._v(" 静态初始化顺序问题")]),_._v(" "),t("ul",[t("li",[_._v("初始化对象依赖于另外一些需要在其之前初始化的对象")]),_._v(" "),t("li",[_._v("没有规则可以指定静态对象的初始化顺序")])]),_._v(" "),t("h5",{attrs:{id:"非局部静态对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非局部静态对象"}},[_._v("#")]),_._v(" 非局部静态对象")]),_._v(" "),t("ol",[t("li",[_._v("定义在全局或命名空间作用域中")]),_._v(" "),t("li",[_._v("定义为类中的静态变量")]),_._v(" "),t("li",[_._v("定义为文件作用域中的静态变量")])]),_._v(" "),t("h5",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[_._v("#")]),_._v(" 解决方案")]),_._v(" "),t("p",[_._v("将对象声明为函数内部的静态变量，调用该函数第一次遇到变量定义时初始化")]),_._v(" "),t("ol",[t("li",[_._v("在_init()函数中自定义实现，这是一个动态库加载时会被立即调用的标准函数")]),_._v(" "),t("li",[_._v("调用自定义函数访问特定对象")])]),_._v(" "),t("hr"),_._v(" "),t("h4",{attrs:{id:"导入库文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入库文件"}},[_._v("#")]),_._v(" 导入库文件")]),_._v(" "),t("ul",[t("li",[_._v("导入库文件（.lib）该文件只含有dll符号列表，并不包含链接器所需要的节")]),_._v(" "),t("li",[_._v("导出dll符号")])]),_._v(" "),t("h4",{attrs:{id:"导出文件-exp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出文件-exp"}},[_._v("#")]),_._v(" 导出文件（.exp）")]),_._v(" "),t("ul",[t("li",[_._v("在构建两个可执行文件并出现循环依赖问题时使用")])]),_._v(" "),t("h4",{attrs:{id:"控制动态库符号的可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制动态库符号的可见性"}},[_._v("#")]),_._v(" 控制动态库符号的可见性")]),_._v(" "),t("ul",[t("li",[_._v("默认情况下，windows dll链接器符号都是外部不可见的，Linux中所有动态库的链接器符号都是外部可见的。实际上，最终只有包含应用程序二进制接口的链接器符号是外部可见的，其余符号则是隐藏且外部不可见的")])]),_._v(" "),t("h5",{attrs:{id:"desclspec-dllexport-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#desclspec-dllexport-关键字"}},[_._v("#")]),_._v(" __desclspec(dllexport)关键字")]),_._v(" "),t("ul",[t("li",[_._v("导出头文件既可以动态链接库中使用，也可以在可执行程序中使用。在动态链接库中使用时，特定的宏被扩展成__desclspec(dllexport)关键字，在可执行程序中使用时，被扩展成 __desclspec(dllimport)")]),_._v(" "),t("li",[_._v("关键字修饰的函数的链接器符号被置为对外可见")])]),_._v(" "),t("h4",{attrs:{id:"动态链接模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态链接模式"}},[_._v("#")]),_._v(" 动态链接模式")]),_._v(" "),t("ul",[t("li",[_._v("不同的程序生命周期中都可以进行动态库的链接")])]),_._v(" "),t("ol",[t("li",[_._v("加载时动态链接，编译和链接应用程序时提供头文件 (.h) 和导入库文件 (.lib)")]),_._v(" "),t("li",[_._v("运行时动态链接，无需使用导入库文件，应用程序调用 "),t("code",[_._v("LoadLibrary")]),_._v(" 函数或 "),t("code",[_._v("LoadLibraryEx")]),_._v(" 函数以在运行时加载 DLL， 成功加载 DLL 后，可以使用 "),t("code",[_._v("GetProcAddress")]),_._v(" 函数获取要调用的导出的 DLL 函数的地址。")])]),_._v(" "),t("h4",{attrs:{id:"windows运行时动态库文件定位规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows运行时动态库文件定位规则"}},[_._v("#")]),_._v(" Windows运行时动态库文件定位规则")]),_._v(" "),t("ul",[t("li",[_._v("与应用程序二进制文件在同一目录下")]),_._v(" "),t("li",[_._v("系统动态链接库目录之一")])]),_._v(" "),t("h3",{attrs:{id:"静态库和动态库对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态库和动态库对比"}},[_._v("#")]),_._v(" 静态库和动态库对比")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th"),_._v(" "),t("th",[_._v("静态库")]),_._v(" "),t("th",[_._v("动态库")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("导入选择条件")]),_._v(" "),t("td",[_._v("不会把整个静态库内容链接进来，只会来链接目标文件中的必要符号")]),_._v(" "),t("td",[_._v("会将整个动态库链接进来，选择包含在符号表中实际需要的动态库符号")])]),_._v(" "),t("tr",[t("td",[_._v("构建过程")]),_._v(" "),t("td",[_._v("不完整，编译但不链接")]),_._v(" "),t("td",[_._v("完整，编译并链接")])]),_._v(" "),t("tr",[t("td",[_._v("使用场景")]),_._v(" "),t("td",[_._v("算法模块；不依赖于某个需要特定的载入动态库的操作系统资源")]),_._v(" "),t("td",[_._v("链接一个动态库需要多个动态库；单例模式")])]),_._v(" "),t("tr",[t("td",[_._v("链接规则")]),_._v(" "),t("td",[_._v("从传递给链接器的静态库列表的最后一个静态库开始依次链接，只链接包含客户二进制文件实际所需符号的目标文件")]),_._v(" "),t("td")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);
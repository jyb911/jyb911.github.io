(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{410:function(t,e,n){"use strict";n.r(e);var a=n(56),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"hplayer播放器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hplayer播放器"}},[t._v("#")]),t._v(" hplayer播放器")]),t._v(" "),n("p",[t._v("找bug的过程就像刑警抓凶手，首先大方向要正确，然后逐步缩小范围")]),t._v(" "),n("p",[t._v("视频文件中包括视频流、音频流、元数据（包括标题、出演者、导演信息、创建日期、地理位置等）、字母流、章节信息、编码器配置信息、标签等")]),t._v(" "),n("p",[t._v("转码过程：")]),t._v(" "),n("ol",[n("li",[t._v("打开视频文件")]),t._v(" "),n("li",[t._v("查找视频流")]),t._v(" "),n("li",[t._v("获得视频"),n("strong",[t._v("封装格式")])]),t._v(" "),n("li",[t._v("打开目标文件流")]),t._v(" "),n("li",[t._v("新建目标视频流")]),t._v(" "),n("li",[t._v("编码器参数设置")]),t._v(" "),n("li",[t._v("写入头部信息")]),t._v(" "),n("li",[t._v("逐帧读取视频码流数据并进行转码")]),t._v(" "),n("li",[t._v("写入尾巴帧")])]),t._v(" "),n("p",[t._v("封装协议：flv、rtp、ts、mp4、avi、rmvb、mkv")]),t._v(" "),n("p",[t._v("编码格式：h264、h265、mgpeg")]),t._v(" "),n("p",[t._v("AVPacket中存储的是经过编码的压缩数据")]),t._v(" "),n("p",[t._v("AVStream中存储有关流的信息（视频流或音频流）")]),t._v(" "),n("p",[t._v("AVFrame帧")]),t._v(" "),n("p",[t._v("pts时间戳")]),t._v(" "),n("p",[t._v("dts解压缩时间戳")]),t._v(" "),n("p",[t._v("stream_index当前包所有流的索引")]),t._v(" "),n("p",[t._v("duration当前包解码后的帧播放持续时间")]),t._v(" "),n("p",[t._v("time_base时间基本单位的分数表示")]),t._v(" "),n("p",[t._v("nb_streams媒体文件中包含流的数量")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//分配AVFormat上下文\nAVFormatContext* avformat_alloc_context();\n//打开输入文件\nint avformat_open_input(AVFormatContext **ps, const char *url, ff_const59 AVInputFormat *fmt, AVDictionary **options);\n//读取媒体文件的packet来获取流信息\nint avformat_find_stream_info(AVFormatContext *ic, AVDictionary **options);\n//获取音频流或视频流索引\nint av_find_best_stream(AVFormatContext *ic,\n                        enum AVMediaType type,\n                        int wanted_stream_nb,\n                        int related_stream,\n                        AVCodec **decoder_ret,\n                        int flags);\n//获取解码器\nAVCodec* avcodec_find_decoder(enum AVCodecID id);\n//分配codec上下文\nAVCodecContext *avcodec_alloc_context3(const AVCodec *codec);\n//基于编解码器参数fill编解码器上下文\nint avcodec_parameters_to_context(AVCodecContext *codec,\n                                  const AVCodecParameters *par);\n//将解码器和解码器上下文关联\nit avcodec_open2(AVCodecContext *avctx, const AVCodec *codec, AVDictionary **options);\n//返回一个流的下一帧，将存储在文件中的内容分成若干帧，每次调用时返回一帧\nint av_read_frame(AVFormatContext *s, AVPacket *pkt);\n//将原始压缩packet数据输入给一个解码器\nint avcodec_send_packet(AVCodecContext *avctx, const AVPacket *avpkt);\n//从解码器中获得已解码的frame\nint avcodec_receive_frame(AVCodecContext *avctx, AVFrame *frame);\n")])])]),n("p",[t._v("libswscale是一个主要用于处理图片像素数据的类库，可以完成图片像素格式的转换，图片的拉伸等")]),t._v(" "),n("p",[t._v("SDL（Simple DirectMedia Layer）是一个非常流行和强大的跨平台开发库，它主要被用来开发视频游戏和实时多媒体应用程序。它提供了一系列的功能来处理视频、音频、键盘、鼠标、操纵杆、图形硬件加速以及聚焦3D硬件的各种功能。在音视频开发方面，SDL提供了基础的API来进行音频播放和视频的渲染")])])}),[],!1,null,null,null);e.default=_.exports}}]);
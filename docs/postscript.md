# 后记

首先感谢 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 的作者开源此项目，我在没有开发出本模版前，一直使用的就是 vue-element-admin 。

但随着实际项目开发，也发现 vue-element-admin 无法适应我司或客户的业务需求，尝试过修改 vue-element-admin 源码去实现，例如权限部分，vue-element-admin 的实现过于简单，我就对 vue-element-admin 原有的权限实现做了修改。

但也不是所有需求都能通过修改 vue-element-admin 实现，就像头部导航的功能， vue-element-admin 原本并无规划，我也尝试过修改，也许是对 vue-element-admin 的源码理解不够透彻，修改起来比较吃力，出来的效果也不理想。

于是最终才有了这模版，如果你有使用过 vue-element-admin ，你会在 vue-automation-admin 里发现很多 vue-element-admin 的影子，毕竟后台系统也很难做出差异。

你可以粗暴的理解 vue-automation-admin 就是 vue-element-admin 的精简版，精简了大部分可有可无的功能，并解决了一些实际开发中的痛点，通过配置文件可快速对项目的布局和架构进行初始化，例如快速开启头部导航，开启权限功能，实现了一套代码应付各种需求场景。

如果你也觉得 vue-element-admin 有点重，不妨尝试用下 vue-automation-admin ，相信你会有惊喜的~
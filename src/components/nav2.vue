<template>
    <ul class="nav1-box">
      <li class="title"><span>搭建vue项目</span></li>
      <li>前提：node和npm已安装，分别查询版本：node-v和npm-v；</li>
      <li>全局安装：<span class="code">npm install -g vue-cli</span>；</li>
      <li>在某目录下安装模板：<span class="code">vue init [默认模板webpack] [项目名称]</span>；</li>
      <li>在该项目下运行：<span class="code">npm install</span>；</li>
      <li>在该项目下运行出现vue信息安装成功：<span class="code">npm run dev</span>；</li>
      <li>安装依赖插件：<span class="code">npm install [插件名] --save</span>；</li>
      <li class="title"><span>其他</span></li>
      <li>注：针对该项目</li>
      <li>安装echarts，其中echarts-liquidfill依赖echarts。</li>
      <br>
      <li>下载Excel功能：</li>
      <li><span class="code">npm install -S file-saver xlsx</span>；</li>
      <li><span class="code">npm install -D script-loader</span>；</li>
      <li>在项目中新建一个文件夹，例如vendor，在该文件下放置&nbsp;Blob.js&nbsp;和&nbsp;Export2Excel.js&nbsp;；</li>
      <li>在build文件下webpack.base.conf.js中resolve的alias加入<span class="code"> 'vendor': path.resolve(__dirname, '../src/vendor')</span>；</li>
      <li>如果webpack报解析找不到依赖Blob文件错误，在Export2Excel.js文件引入Blob.js路径是否正确。</li>
      <br>
      <li>引入Element-ui:</li>
      <li><span class="code">npm install element-ui -S</span></li>
      <li>在main.js文件：</li>
      <li><span class="code">import elementUi from 'element-ui';</span></li>
      <li><span class="code">import 'element-ui/lib/theme-chalk/index.css';</span></li>
      <li><span class="code">Vue.use(elementUi);</span></li>
      <br>
      <li>如果想更新某插件版本，例如：<span class="code">npm install element-ui@latest</span></li>
    </ul>
</template>

<script>
    export default {
      name: "nav2",
    }
</script>

<style lang="scss" scoped>
  .nav1-box{
    margin: 40px auto;
    width: 80%;
    li{
      list-style: disc inside;;
      line-height: 30px;
      &.title{
        list-style-type: none !important;
        color: #2ba3f9;
        span{
          font-size: 16px;
          font-weight: 600;
        }
      }
      .code{
        color: #159f06;
        font-family: Consolas;
      }
      .download{
        padding: 0 5px;
        color: #159f06;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
</style>

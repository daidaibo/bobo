<template>
  <div class="blog">
    <div class="container">
      <!-- <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-7 list-article">
          <div class="row">
            <div class="col-md-6"
              v-for="(item, idx) in $root.article.list"
            >
              <div class="inner">
                <div class="pt" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                <div class="sub-info">
                  <div class="fr">
                    <span class="text-info p">摘星fy</span>
                  </div>
                  <div class="ellipsis">
                    <span class="p">{{item.title}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="lmr">
        <div class="fl">
          <ul class="list-lang">
            <li
              v-for="(item, idx) in $root.skill.list"
              :key="idx"
            >
              <a href="javascript:" class="p def">
                <i class="glyphicon glyphicon-bookmark"></i>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="fr nowrap">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">刘宇波</h3>
            </div>
            <ul class="list-group">
              <li class="list-group-item"
                v-for="item in ['访问慕课网主页', '访问github主页', 'QQ群 12345678901']"
              >
                <a href="javascript:" class="def">
                  <i class="glyphicon glyphicon-user"></i>
                  <span>{{item}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="oh">
          <div class="article-list" style="margin: 0 20px;">
            <section v-for="n in 10">
              <h4 class="title ellipsis">
                <strong><a class="def" href="javascript:">苹果发布会的 Keynote 牛在哪里？</a></strong>
              </h4>
              <p class="desc line-2"><a class="def" href="javascript:">有个客户找我做PPT，着重强调要苹果发布会那样的风格，我心里还挺高兴，一般来说要这种风格的都是大公司，有钱！而且做好后放映在高清液晶屏幕上非常酷炫，台下几万人举着手机拍PPT也是相当有成就感。有个客户找我做PPT，着重强调要苹果发布会那样的风格，我心里还挺高兴，一般来说要这种风格的都是大公司，有钱！而且做好后放映在高清液晶屏幕上非常酷炫，台下几万人举着手机拍PPT也是相当有成就感。</a></p>
              <div class="rich">
                <div class="ib">
                  <span class="btn btn-sm btn-default">
                    <i class="glyphicon glyphicon-eye-open"></i>
                    <span>阅读(100)</span>
                  </span>
                </div>
                <div class="ib">
                  <span class="btn btn-sm btn-default">
                    <i class="glyphicon glyphicon-hand-up"></i>
                    <span>赞(100)</span>
                  </span>
                </div>
                <div class="ib">
                  <span class="btn btn-sm btn-default">
                    <i class="glyphicon glyphicon-hand-down"></i>
                    <span>踩(100)</span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  rootData() {
    return {
      skill: {
        list: [
          {"name": "Java"},
          {"name": "C"},
          {"name": "C++"},
          {"name": "Python"},
          {"name": "Visual Basic .NET"},
          {"name": "C#"},
          {"name": "JavaScript"},
          {"name": "PHP"},
          {"name": "SQL"},
          {"name": "Go"},
          {"name": "Objective-C"},
          {"name": "Swift"},
          {"name": "Delphi/Object Pascal"},
          {"name": "R"},
          {"name": "Assembly language"},
          {"name": "Ruby"},
          {"name": "MATLAB"},
          {"name": "Perl"},
          {"name": "PL/SQL"},
          {"name": "Visual Basic"},
        ]
      },
      article: {
        list: [{
          "title": "红黑树可视化",
          "desc": "感谢 <a href=\"http://www.imooc.com/t/108955\" target=\"_blank\">@liuyubobobo</a> 的支持",
          "img": "./static/img/tree-rb.png",
          "urlTarget": "http://codding.cn/rbTree/",
          "urlXhr": "http://codding.cn/rbTree/",
          "time": 1540883641836,
          "links": [{
            "name": "在线查看",
            "url": "http://codding.cn/rbTree/"
          }, {
            "name": "随机",
            "url": "http://codding.cn/rbTree/rand.html"
          }, {
            "name": "快速",
            "url": "http://codding.cn/rbTree/quick.html"
          }]
        }, {
          "title": "AVL树可视化",
          "desc": "感谢 <a href=\"http://www.imooc.com/t/108955\" target=\"_blank\">@liuyubobobo</a> 的支持",
          "img": "./static/img/tree-avl.png",
          "urlTarget": "http://codding.cn/avl/",
          "urlXhr": "http://codding.cn/avl/",
          "time": 1540883641836,
          "links": [{
            "name": "在线查看",
            "url": "http://codding.cn/avl/"
          }, {
            "name": "随机",
            "url": "http://codding.cn/avl/avl-random.html"
          }]
        }, {
          "title": "二分搜索树可视化",
          "desc": "感谢 <a href=\"http://www.imooc.com/t/108955\" target=\"_blank\">@liuyubobobo</a> 的支持 <br /> 借助中序遍历的有序性，进行排序",
          "img": "./static/img/tree-bst.png",
          "urlTarget": "http://codding.cn/binarySearch/",
          "urlXhr": "http://codding.cn/binarySearch/",
          "time": 1540883641836,
          "links": [{
            "name": "在线查看",
            "url": "http://codding.cn/binarySearch/"
          }, {
            "name": "排版原理",
            "url": "http://codding.cn/binarySearch/blogAnimate.html"
          }]
        }, {
          "title": "快速排序-双路",
          "desc": "感谢 <a href=\"http://www.imooc.com/t/108955\" target=\"_blank\">@liuyubobobo</a> 的支持",
          "img": "./static/img/quicksort-two-way.png",
          "urlTarget": "http://codding.cn/quickSort/",
          "urlXhr": "http://codding.cn/quickSort/",
          "time": 1540883641836,
          "links": [{
            "name": "在线查看",
            "url": "http://codding.cn/quickSort/"
          }]
        }, {
          "title": "最大堆-可视化",
          "desc": "感谢 <a href=\"http://www.imooc.com/t/108955\" target=\"_blank\">@liuyubobobo</a> 的支持",
          "img": "./static/img/tree-maxheap.png",
          "urlTarget": "http://codding.cn/maxHeap/",
          "urlXhr": "http://codding.cn/maxHeap/",
          "time": 1540883641836,
          "links": [{
            "name": "在线查看",
            "url": "http://codding.cn/maxHeap/"
          }]
        }, {
          "title": "tween运动",
          "desc": "非常赞的运动算法",
          "img": "./static/img/tween.png",
          "urlTarget": "http://codding.cn/tween/",
          "urlXhr": "http://codding.cn/tween/js/tween.js",
          "time": 1540883641836,
          "links": [{
            "name": "在线查看",
            "url": "http://codding.cn/tween/"
          }]
        }]
      }
    }
  },
  rootMethods: {

  },
  mounted() {
    const root = this.$root
    const r = root.router
    
    
  }
}
</script>

<style lang="scss" scoped>
.blog {
  .list-article {
    & > div {
      .inner {
        background: #fff; margin-bottom: 30px; box-shadow: 0 0 10px rgba(0,0,0,.2); border-radius: 4px; overflow: hidden;
        .pt {
          padding-top: 56%; background: #eee no-repeat center / cover; cursor: pointer;
        }
        .sub-info {
          border-top: 1px solid #ddd;
          padding: .8em;
        }
      }
    }
  }

  .list-lang {
    line-height: 1.8em;
    li {

    }
  }
}
</style>
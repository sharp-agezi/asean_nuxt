<template>
  <div class="m-box" :style="{height:boxHeight}">
    <div class="m-con auto" v-if="mainData">
      <div class="m1-box">
        <div class="m1-box-fl fl">
          <div class="m1-news-img">
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide v-for="(item,index) in swiperList" :key="index">
                <nuxt-link :to="'/content/'+item.infoId"  tag="a" target="_blank">
                  <img :src="item.path"><p class="line-one">{{item.title}}</p>
                </nuxt-link>
              </swiper-slide>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
          </div>
        </div>
        <div class="m1-box-fr fr">
          <div class="m1-fr-news-list clear">
            <div class='mt'>
              <h4>观察</h4>
              <hr></hr>
            </div>
            <ul>
              <li v-for="(item,index) in mainData[23]">
                <nuxt-link @mouseover.native="showRemark(index)" class="line-one" :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                <div class="remark" v-if="showIndex==index">
                  <p class="line-n" style="-webkit-box-orient: vertical;">{{item.summary}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="m-list clearfix">
        <div class="fl list-both-width-l">
          <Row class="english">
            <Col :span="11" v-for="(item,index) in mainData[43]" :key="index">
            <div class="en-title">
              <img v-lazy="picPath+item.infoimg" alt="" :key="item.infoId">
              <nuxt-link :to="'/content/'+item.infoId" style="-webkit-box-orient: vertical;" tag="a" target="_blank">{{item.title}}</nuxt-link>
            </div>
            </Col>
          </Row>
          <span class="blue-line"></span>
          <div class='mt'>
            <h4>焦点新闻</h4>
            <hr></hr>
          </div>
          <div class="content-item" v-for="item in focusNews">
            <img v-lazy="picPath+item.infoimg" alt="" :key="item.infoId">
            <div class="content-text">
              <nuxt-link :to="'/content/'+item.infoId" class="line-one" style="-webkit-box-orient: vertical;" tag="a" target="_blank">{{item.title}}</nuxt-link>
              <p style="-webkit-box-orient: vertical;">{{item.summary}}</p>
              <div class="source" v-if="item.columnname.includes('—')">
                <nuxt-link :to="'/lists/'+item.parentcolumnId" class="line-one" style="-webkit-box-orient: vertical;" tag="a" target="_blank">{{item.columnname.split('—')[0]}}</nuxt-link>
                <span>—</span>
                <nuxt-link :to="'/lists/'+item.columnId" class="line-one" style="-webkit-box-orient: vertical;" tag="a" target="_blank">{{item.columnname.split('—')[1]}}</nuxt-link>
                <span>/{{item.uptimeStr}}</span>
              </div>
              <div class="source" v-else>
                <nuxt-link v-if="item.columnname" :to="'/lists/'+item.columnId" class="line-one" style="-webkit-box-orient: vertical;" tag="a" target="_blank">{{item.columnname}}/</nuxt-link>
                <span>{{item.uptimeStr}}</span>
              </div>
            </div>
          </div>
          <div class="more-art">
            <Button shape="circle" @click="moreArt">更多文章</Button>
          </div>
        </div>
        <div class="fl list-both-width">
          <ul class="add-img">
            <li v-for="item in adObj">
              <a :href="item.adurl" target="view_frame" >
                <img v-lazy="picPath+item.adimg" :key="item.infoId"/>
              </a>
            </li>
          </ul>
          <div class="column-item">
            <div class="column-title mt">
              <span></span>
              <h4>视频</h4>
              <div>
                <nuxt-link to="/lists/3" tag="a" target="_blank">更多</nuxt-link>
              </div>
            </div>
            <div class="column-content">
              <div class="column-video">
                <nuxt-link class="iconfont icon-bofang" :to="'/content/'+mainData[3][0].infoId" tag="a" target="_blank">
                  <img v-lazy="picPath+mainData[3][0].infoimg" alt="">
                  <p class="line-one">{{mainData[3][0].title}}</p>
                </nuxt-link>
              </div>
              <!--<div class="video">-->
              <!--<Row >-->
              <!--<Col :span="11" v-for="(item,index) in mainData[3]" :key="index" v-if="index!=0">-->
              <!--<div class="content-li" >-->
              <!--<nuxt-link class="iconfont icon-bofang" :to="'/content/'+item.infoId" tag="a" target="_blank">-->
              <!--<img v-lazy="picPath+item.infoimg" alt="">-->
              <!--</nuxt-link>-->
              <!--<nuxt-link class="vid-til" style="-webkit-box-orient: vertical;" :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>-->
              <!--</div>-->

              <!--</Col>-->
              <!--</Row>-->
              <!--</div>-->
              <div class="video">
                <Row v-for="(item,index) in mainData[3]" :key="index" v-if="index!=0" class="video-list">
                  <Col :span="11" >
                  <div class="content-li" >
                    <nuxt-link class="iconfont icon-bofang" :to="'/content/'+item.infoId" tag="a" target="_blank">
                      <img v-lazy="picPath+item.infoimg" alt="" :key="item.infoId">
                    </nuxt-link>
                  </div>

                  </Col>
                  <Col :span="11">
                  <div class="content-li" >
                    <nuxt-link class="vid-til" style="-webkit-box-orient: vertical;" :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                  </div>

                  </Col>
                </Row>
              </div>
              <!-- <div>
                  <ul>
                      <li v-for="(item,index) in mainData[3]">
                          <div class="content-li" v-if="index!=0">
                              <nuxt-link class="iconfont icon-bofang" :to="'/content/'+item.infoId" tag="a" target="_blank">
                                  <img v-lazy="picPath+item.infoimg" alt="">
                              </nuxt-link>
                              <nuxt-link :to="'/lists/'+item.infoId" class="line-one" style="-webkit-box-orient: vertical;" tag="a" target="_blank">{{item.title}}</nuxt-link>
                          </div>
                      </li>
                  </ul>
              </div> -->
            </div>
          </div>
          <div class="column-item">
            <div class="column-title mt">
              <span></span>
              <h4 @mouseenter="changeLiftColData(2)" >生活</h4>
              <div>
                <nuxt-link @mouseenter.native="changeLiftColData(9)" to="/lists/9" tag="a" target="_blank">旅游</nuxt-link>
                <nuxt-link @mouseenter.native="changeLiftColData(11)" to="/lists/11" tag="a" target="_blank">美食</nuxt-link>
                <nuxt-link @mouseenter.native="changeLiftColData(12)" to="/lists/12" tag="a" target="_blank">健康</nuxt-link>
                <nuxt-link @mouseenter.native="changeLiftColData(13)" to="/lists/13" tag="a" target="_blank">流行风</nuxt-link>
              </div>
            </div>
            <div class="column-content">
              <Row class="life">
                <Col :span="11" v-for="(item,index) in lifeColumnData" :key="index">
                <img v-lazy="picPath+item.infoimg" alt="" :key="item.infoId">
                <nuxt-link style="-webkit-box-orient: vertical;" :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                </Col>
              </Row>
            </div>
          </div>
          <div class="column-item">
            <div class="column-title mt">
              <span></span>
              <h4>文化</h4>
              <div>
                <nuxt-link to="/lists/24" tag="a" target="_blank">玄学</nuxt-link>
                <nuxt-link to="/lists/8" tag="a" target="_blank">娱乐</nuxt-link>
                <nuxt-link to="/lists/10" tag="a" target="_blank">文艺</nuxt-link>
              </div>
            </div>
            <div class="column-content">
              <div class="cul-top">
                <img v-lazy="picPath+mainData[41][0].infoimg" alt="">
                <nuxt-link :to="'/content/'+mainData[41][0].infoId" tag="a" target="_blank">{{mainData[41][0].title}}</nuxt-link>
              </div>
              <div class="culture">
                <ul>
                  <li v-for="(item,index) in mainData[41]" v-if="index!=0" class="line-one">
                    <nuxt-link  :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column-item">
            <div class="column-title mt">
              <span></span>
              <h4>服务</h4>
            </div>
            <div class="column-content">
              <div class="service">
                <div class="service-list">
                  <img src="~/assets/img/20.png" alt="">
                  <ul>
                    <li class="line-one" v-for="item in mainData[20]">
                      <nuxt-link :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="service-list">
                  <img src="~/assets/img/21.png" alt="">
                  <ul>
                    <li class="line-one" v-for="item in mainData[21]">
                      <nuxt-link :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="service-list">
                  <img src="~/assets/img/19.png" alt="">
                  <ul>
                    <li class="line-one" v-for="item in mainData[19]">
                      <nuxt-link :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="service-list">
                  <img src="~/assets/img/17.png" alt="">
                  <ul>
                    <li class="line-one" v-for="item in mainData[17]">
                      <nuxt-link :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                    </li>
                  </ul>la
                </div>
                <div class="service-list">
                  <img src="~/assets/img/14.png" alt="">
                  <ul>
                    <li class="line-one" v-for="item in mainData[14]">
                      <nuxt-link :to="'/content/'+item.infoId" tag="a" target="_blank">{{item.title}}</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="column-item" style="margin-bottom:10px;">
            <div class="column-title mt">
              <span></span>
              <h4>词条</h4>
            </div>
            <div class="column-content">
              <div class="wiki-top">
                <p>中国-东盟自由贸易区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国-东盟信息港</p>
                <p>东南亚国家联盟&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国-东盟博览会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一带一路</p>
              </div>
              <div>
                <Row class="wiki">
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/kh.png" tag="a" target="_blank">柬埔寨</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/bn.png" tag="a" target="_blank">文莱</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/id.png" tag="a" target="_blank">印尼</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/sg.png" tag="a" target="_blank">新加坡</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/vn.png" tag="a" target="_blank">越南</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/mm.png" tag="a" target="_blank">缅甸</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">

                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/ph.png" tag="a" target="_blank">菲律宾</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/la.png" tag="a" target="_blank">老挝</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/th.png" tag="a" target="_blank">泰国</nuxt-link>
                  </li>
                  </Col>
                  <Col :span="8">
                  <li>
                    <nuxt-link to="/lists/5"><img src="~/assets/img/ten_icon/my.png" tag="a" target="_blank">马来西亚</nuxt-link>
                  </li>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div @click="returnTop" class="return-top"></div>
      <div class="f-friend">
        <Row>
          <Col :span="14">
          <div class="declaration">
            <p>版权声明</p>
            <p>本网站部分信息来源于互联网络，如有侵犯版权，请联系我们及时处理。凡注明“来源:东盟头条”的所有作品，均为东盟头条新闻社、东盟头条新闻网以及东盟头条APP合法拥有版权或有权使用的作品，欢迎媒体转载。</p>
          </div>

          </Col>
          <Col :span="10">
          <div class="declaration">
            <p>联系我们</p>
            <ul>
              <li>地址：柬埔寨王国金边市堆谷区606路38号</li>
              <li>电话：00855-023235388   传真：00855-023235389</li>
              <li>电子邮箱：aseantop@163.com</li>
            </ul>
          </div>

          </Col>
        </Row>
      </div>
    </div>
    <!--<Spin fix size="large" v-if="!mainData"></Spin>-->
  </div>
</template>
<script>
  import { mainAd, getMainData, listColumnInfo, listFocusInfo, listWordbar } from '~/api/homePage';
  export default {
    data() {
      return {
        picPath: 'http://pic-asean2.oss-cn-hongkong.aliyuncs.com/',
        suffix:'?x-oss-process=image/watermark,image_d2F0ZXJtYXJrL3dtMS5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8zMA==,g_se,x_10,y_10,t_70',
        swiperList: [],
        adObj: {},
        mainData: null,
        focusNews:null,
        showIndex:5,
        lifeColumnKey: 2,
        lifeColumnData: [],
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        },
//        boxHeight:document.documentElement.clientHeight-295+"px"//页面的默认高度
        boxHeight:500+'px'
      };
    },
    async asyncData(){
      let swiperListArray = [];
      let [adObj, mainData,focusNews,swiperList] = await Promise.all([
        mainAd(),
        listColumnInfo({reqdata:{columnIds:'2,3,43,23,41,14,17,19,20,21,9,11,12,13'}}),
        listFocusInfo({"page": "1","rows": "16", "reqdata": {"type": "focus"}}),
        listFocusInfo({"page": "1","rows": "16", "reqdata": {"type": "recommend"}})
      ])

      swiperList.list.map(item => {
        swiperListArray.push({
            path: 'http://pic-asean2.oss-cn-hongkong.aliyuncs.com/' + item.infoimg,
            infoId: item.infoId,
            title:item.title
          });
        });

      return {
        adObj:adObj.object,
        mainData:mainData.object,
        lifeColumnData:mainData.object[2],
        focusNews:focusNews.list,
        swiperList:swiperListArray
      }
    },

    mounted() {
//      mainAd().then(res => {
//        this.adObj = res.object;
//      });
//      listColumnInfo({reqdata:{columnIds:'2,3,43,23,41,14,17,19,20,21,9,11,12,13'}}).then(res=>{
//        this.mainData=res.object;
//        this.lifeColumnData=this.mainData[2]
//      });
      //焦点新闻
//      listFocusInfo({"page": "1",
//        "rows": "16",
//        "reqdata": {
//          "type": "focus"
//        }
//      }).then(res=>{this.focusNews=res.list;});

//      //轮播图数据
//      listFocusInfo({"page": "1",
//        "rows": "8",
//        "reqdata": {
//          "type": "recommend"
//        }
//      }).then(res=>{
//        if (this.swiperList.length < 1){
//          res.list.map(item => {
//            this.swiperList.push({
//              path: this.picPath + item.infoimg,
//              infoId: item.infoId,
//              title:item.title
//            });
//          });
//        }
//      });

      // listWordbar().then(res=>{
      //     console.log(res)
      // })
    },
    updated(){
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        // const swiperThumbs = this.$refs.swiperThumbs.swiper
        // swiperTop.controller.control = swiperThumbs
        // swiperThumbs.controller.control = swiperTop
      })
    },
    methods: {
      returnTop() {
        window.scrollTo(0, 0);
      },
      showRemark(index){
        this.showIndex=index;
      },
      moreArt(){
        this.$router.push({name:'lists',params:{id:'focus'}});
      },

      changeLiftColData(columnId){
        this.lifeColumnData=this.mainData[columnId]
      }
    }
  };
</script>
<style lang="scss" scoped>
  .swiper-container {
    background-color: #000;
    // opacity: 0.8;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>


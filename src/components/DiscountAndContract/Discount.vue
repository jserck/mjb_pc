<template>
        <div class="discount">
                <div class="discount-left discount-same">
                        <div class="discount-title">
                                <span @click="hankClick(1)" :style="{color:active == 1?'#0080FF':'#000'}">住宅</span>
                                <span class="margins" @click="hankClick(2)" :style="{color:active == 2?'#0080FF':'#000'}">商铺</span>
                                <span @click="hankClick(3)" :style="{color:active == 3?'#0080FF':'#000'}">车位</span>
                        </div>
                        <div class="discount-kuang">
                                <p class="discount-p1">开发商报价</p>
                                <p class="discount-p2">{{price}}</p>
                        </div>
                        <div class="discount-cont">
                                <p class="discount-p3">鹰眼建房价格</p>
                                <p class="discount-p4">{{benefit}}</p>
                                <p class="discount-p4">{{yybenefit}}</p>
                        </div>
                </div>
                <div class="discount-right discount-same">
                        <div class="calculator">
                                <p class="calculator-title">房贷计算器</p>
                                <el-form ref="form" :model="form">
                                        <div class="calculator-item">
                                                <span class="span1">房价总额</span>
                                                <el-form-item class="f-item">
                                                        <input class="c-input" v-model="form.allpay" placeholder="请输入待计算的总房价" @keyup="hankChange" @focus="keyShow1 = true;keyShow2 = false;keyShow3 = false;keyShow4 = false;"/>
                                                        <span class="span2">万</span>
                                                </el-form-item>
                                                <div class="keyboard" v-if="keyShow1" @touchstart= "mousedown()" @touchend="mouseup($event)">
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("1","1")'>1</span>
                                                                <span @click='_handleKeyPress("2","1")'>2</span>
                                                                <span @click='_handleKeyPress("3","1")'>3</span>
                                                                <span @click='_handleKeyPress("C","1")'>AC</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("4","1")'>4</span>
                                                                <span @click='_handleKeyPress("5","1")'>5</span>
                                                                <span @click='_handleKeyPress("6","1")'>6</span>
                                                                <span @click='_handleKeyPress("D","1")'>
                                                                        <img src="../../assets/img/common/delete.png" alt="">
                                                                </span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("7","1")'>7</span>
                                                                <span @click='_handleKeyPress("8","1")'>8</span>
                                                                <span @click='_handleKeyPress("9","1")'>9</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span class="key-thoro" @click='_handleKeyPress("0","1")'>0</span>
                                                                <span class="key-submit" @click="_handleKeyPress('G')">确认</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="calculator-item">
                                                <span class="span1">贷款期限</span>
                                                <el-form-item class="f-item" style="border-bottom:0px;">
                                                        <el-select class="f-select" v-model="form.times">
                                                                <el-option label="1年（12期）"  :value="12">1年（12期）</el-option >
                                                                <el-option label="2年（24期）"  :value="24">2年（24期）</el-option >
                                                                <el-option label="3年（36期）"  :value="36">3年（36期）</el-option >
                                                                <el-option label="4年（48期）"  :value="48">4年（48期）</el-option >
                                                                <el-option  label="5年（60期）" :value="60">5年（60期）</el-option >
                                                                <el-option  label="6年（72期）" :value="72">6年（72期）</el-option >
                                                                <el-option  label="7年（84期）" :value="84">7年（84期）</el-option >
                                                                <el-option  label="8年（96期）" :value="96">8年（96期）</el-option >
                                                                <el-option  label="9年（108期）" :value="108">9年（108期）</el-option >
                                                                <el-option  label="10年（120期）" :value="120">10年（120期）</el-option >
                                                                <el-option  label="11年（132期）" :value="132" v-if="active != 2">11年（132期）</el-option >
                                                                <el-option  label="12年（144期）" :value="144" v-if="active != 2">12年（144期）</el-option >
                                                                <el-option  label="13年（156期）" :value="156" v-if="active != 2">13年（156期）</el-option >
                                                                <el-option  label="14年（168期）" :value="168" v-if="active != 2">14年（168期）</el-option >
                                                                <el-option  label="15年（180期）" :value="180" v-if="active != 2">15年（180期）</el-option >
                                                                <el-option  label="16年（192期）" :value="192" v-if="active != 2">16年（192期）</el-option >
                                                                <el-option  label="17年（204期）" :value="204" v-if="active != 2">17年（204期）</el-option >
                                                                <el-option  label="18年（216期）" :value="216" v-if="active != 2">18年（216期）</el-option >
                                                                <el-option  label="19年（228期）" :value="228" v-if="active != 2">19年（228期）</el-option >
                                                                <el-option  label="20年（240期）" :value="240" v-if="active != 2">20年（240期）</el-option >
                                                                <el-option  label="21年（252期）" :value="252" v-if="active != 2">21年（252期）</el-option >
                                                                <el-option  label="22年（264期）" :value="264" v-if="active != 2">22年（264期）</el-option >
                                                                <el-option  label="23年（276期）" :value="276" v-if="active != 2">23年（276期）</el-option >
                                                                <el-option  label="24年（288期）" :value="288" v-if="active != 2">24年（288期）</el-option >
                                                                <el-option  label="25年（300期）" :value="300" v-if="active != 2">25年（300期）</el-option >
                                                                <el-option  label="26年（312期）" :value="312" v-if="active != 2">26年（312期）</el-option >
                                                                <el-option  label="27年（324期）" :value="324" v-if="active != 2">27年（324期）</el-option >
                                                                <el-option  label="28年（336期）" :value="336" v-if="active != 2">28年（336期）</el-option >
                                                                <el-option  label="29年（348期）" :value="348" v-if="active != 2">29年（348期）</el-option >
                                                                <el-option  label="30年（360期）" :value="360" v-if="active != 2">30年（360期）</el-option >
                                                        </el-select>
                                                </el-form-item>
                                        </div>
                                        <div class="calculator-item">
                                                <span class="span1">贷款类型</span>
                                                <el-form-item class="f-item" style="border-bottom:0px;">
                                                        <el-select class="f-select" v-model="form.rate">
                                                                <el-option label="商业贷款"  :value="0.049">商业贷款</el-option >
                                                                <el-option label="公积金贷款"  :value="0.0325" v-if="active != 2">公积金贷款</el-option >
                                                                <el-option label="组合贷款"  :value="1" v-if="active != 2">组合贷款</el-option >
                                                        </el-select>
                                                </el-form-item>
                                        </div>
                                        <div class="calculator-item" v-if="form.rate ==1">
                                                <span class="span1">公积金贷款金额</span>
                                                <el-form-item class="f-item">
                                                        <input class="c-input" v-model="form.accurate" @blur="changeNum" @focus="keyShow2 = true;keyShow1 = false;keyShow3 = false;keyShow4 = false;"/>
                                                        <span class="span2">万</span>
                                                </el-form-item>
                                                <div class="keyboard" v-if="keyShow2" @touchstart= "mousedown()" @touchend="mouseup($event)">
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("1","2")'>1</span>
                                                                <span @click='_handleKeyPress("2","2")'>2</span>
                                                                <span @click='_handleKeyPress("3","2")'>3</span>
                                                                <span @click='_handleKeyPress("C","2")'>AC</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("4","2")'>4</span>
                                                                <span @click='_handleKeyPress("5","2")'>5</span>
                                                                <span @click='_handleKeyPress("6","2")'>6</span>
                                                                <span @click='_handleKeyPress("D","2")'>
                                                                        <img src="../../assets/img/common/delete.png" alt="">
                                                                </span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("7","2")'>7</span>
                                                                <span @click='_handleKeyPress("8","2")'>8</span>
                                                                <span @click='_handleKeyPress("9","2")'>9</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span class="key-thoro" @click='_handleKeyPress("0","2")'>0</span>
                                                                <span class="key-submit" @click="_handleKeyPress('G')">确认</span>
                                                        </div>
                                                </div>
                                        </div>
                                         <div class="calculator-item"  v-if="form.rate ==1">
                                                <span class="span1">商业贷款金额</span>
                                                <el-form-item class="f-item">
                                                        <input class="c-input" v-model="form.bnsrate" @focus="keyShow3 = true;keyShow2 = false;keyShow1 = false;keyShow4 = false;"/>
                                                        <span class="span2">万</span>
                                                </el-form-item>
                                                <div class="keyboard" v-if="keyShow3"  @touchstart= "mousedown()" @touchend="mouseup($event)">
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("1","3")'>1</span>
                                                                <span @click='_handleKeyPress("2","3")'>2</span>
                                                                <span @click='_handleKeyPress("3","3")'>3</span>
                                                                <span @click='_handleKeyPress("C","3")'>AC</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("4","3")'>4</span>
                                                                <span @click='_handleKeyPress("5","3")'>5</span>
                                                                <span @click='_handleKeyPress("6","3")'>6</span>
                                                                <span @click='_handleKeyPress("D","3")'>
                                                                        <img src="../../assets/img/common/delete.png" alt="">
                                                                </span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("7","3")'>7</span>
                                                                <span @click='_handleKeyPress("8","3")'>8</span>
                                                                <span @click='_handleKeyPress("9","3")'>9</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span class="key-thoro" @click='_handleKeyPress("0","3")'>0</span>
                                                                <span class="key-submit" @click="_handleKeyPress('G')">确认</span>
                                                        </div>
                                                </div>
                                        </div>
                                         <div class="calculator-item"  v-if="form.rate == 0.049 || form.rate == 0.0325">
                                                <span class="span1">贷款金额</span>
                                                <el-form-item class="f-item" style="border-bottom: none;">
                                                        <el-select class="f-select" style="width:46%" v-model="form.daipay" @change="getDq">
                                                                <el-option label="1成"  :value="0.1">1成</el-option >
                                                                <el-option label="2成"  :value="0.2">2成</el-option >
                                                                <el-option label="3成"  :value="0.3">3成</el-option >
                                                                <el-option label="4成"  :value="0.4">4成</el-option >
                                                                <el-option label="5成"  :value="0.5">5成</el-option >
                                                                <el-option label="6成"  :value="0.6">6成</el-option >
                                                                <el-option label="7成"  :value="0.7">7成</el-option >
                                                                <el-option label="8成"  :value="0.8">8成</el-option >
                                                                <el-option label="9成"  :value="0.9">9成</el-option >
                                                        </el-select>
                                                        <div class="dkje">
                                                                <input class="c-input" v-model="form.loandk" @focus="keyShow4 = true;keyShow2 = false;keyShow3 = false;keyShow1 = false;"/>
                                                                <span class="span2">万</span>
                                                        </div>
                                                </el-form-item>
                                                <div class="keyboard" v-if="keyShow4"  @touchstart= "mousedown()" @touchend="mouseup($event)">
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("1","4")'>1</span>
                                                                <span @click='_handleKeyPress("2","4")'>2</span>
                                                                <span @click='_handleKeyPress("3","4")'>3</span>
                                                                <span @click='_handleKeyPress("C","4")'>AC</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("4","4")'>4</span>
                                                                <span @click='_handleKeyPress("5","4")'>5</span>
                                                                <span @click='_handleKeyPress("6","4")'>6</span>
                                                                <span @click='_handleKeyPress("D","4")'>
                                                                        <img src="../../assets/img/common/delete.png" alt="">
                                                                </span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span @click='_handleKeyPress("7","4")'>7</span>
                                                                <span @click='_handleKeyPress("8","4")'>8</span>
                                                                <span @click='_handleKeyPress("9","4")'>9</span>
                                                        </div>
                                                        <div class="key-item">
                                                                <span class="key-thoro" @click='_handleKeyPress("0","4")'>0</span>
                                                                <span class="key-submit" @click="_handleKeyPress('G')">确认</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="calculator-item"  v-if="form.rate == 0.049 || form.rate ==1">
                                                <span class="span1">商贷利率</span>
                                                <el-form-item class="f-item" style="border-bottom:0px;">
                                                        <el-select class="f-select" v-model="form.brate">
                                                                <el-option label="最新基准利率85折（4.165%）"  value="0.04165">最新基准利率85折（4.165%）</el-option >
                                                                <el-option label="最新基准利率9折（4.41%）"  value="0.0441">最新基准利率9折（4.41%）</el-option >
                                                                <el-option label="最新基准利率95折（4.655%）"  value="0.04655">最新基准利率95折（4.655%）</el-option >
                                                                <el-option label="最新基准利率（4.9%）"  value="0.049">最新基准利率（4.9%）</el-option >
                                                                <el-option label="最新基准利率1.1倍（5.39%）"  value="0.0539">最新基准利率1.1倍（5.39%）</el-option >
                                                                <el-option label="最新基准利率1.2倍（5.88%）"  value="0.0588">最新基准利率1.2倍（5.88%）</el-option >
                                                                <el-option label="最新基准利率1.3倍（6.37%）"  value="0.0637">最新基准利率1.3倍（6.37%）</el-option >
                                                        </el-select>
                                                </el-form-item>
                                        </div>
                                         <div class="calculator-item" v-if="form.rate == 0.0325 || form.rate ==1">
                                                <span class="span1">公积金贷款率</span>
                                                <el-form-item class="f-item" style="border-bottom:0px;">
                                                        <el-select class="f-select" v-model="form.arate">
                                                                <el-option label="最新基准利率85折（2.7625%）"  value="0.027625">最新基准利率85折（2.7625%）</el-option >
                                                                <el-option label="最新基准利率9折（2.925%）"  value="0.02925">最新基准利率9折（2.925%）</el-option >
                                                                <el-option label="最新基准利率95折（3.0875%）"  value="0.030875">最新基准利率95折（3.0875%）</el-option >
                                                                <el-option label="最新基准利率（3.25%）"  value="0.0325">最新基准利率（3.25%）</el-option >
                                                                <el-option label="最新基准利率1.1倍（3.575%）"  value="0.03575">最新基准利率1.1倍（3.575%）</el-option >
                                                                <el-option label="最新基准利率1.2倍（3.9%）"  value="0.039">最新基准利率1.2倍（3.9%）</el-option >
                                                                <el-option label="最新基准利率1.3倍（4.225%）"  value="0.04225">最新基准利率1.3倍（4.225%）</el-option >
                                                        </el-select>
                                                </el-form-item>
                                        </div>
                                        <p class="infos" v-if="info">{{info}}</p>
                                         <div class="calculator-item">
                                                 
                                                 <el-button type="primary" class="start-btn" @click="startSubmit">开始计算</el-button>
                                        </div>
                                        <div class="calculator-item calculator-item-two">
                                                <span class="two-span" @click="modeClick(0)" :style="{color:calcType == 0?'#000':'#8B949E'}">等额本息</span>
                                                <span @click="modeClick('2')" :style="{color:calcType == 2?'#000':'#8B949E'}">等额本金</span>
                                        </div>
                                        <div class="calculator-item calculator-item-three">
                                                <div class="calculator-item-after">
                                                        <div class="after-item after-left">
                                                                <span class="span1">首付</span>
                                                                <span class="after-span" style="color: #F84C47;">{{firstPayTo}}万元</span>
                                                        </div>
                                                        <div class="after-item after-right">
                                                                <span class="span1">月供</span>
                                                                <span class="after-span" style="color: #F84C47;">{{perBack}}元</span>
                                                        </div>
                                                </div>
                                                <div class="calculator-item-after" v-if="calcType == 2">
                                                        <div class="after-item after-left">
                                                                
                                                        </div>
                                                        <div class="after-item after-right">
                                                                <span class="" v-if="r.tag ">首月后每月递减 {{dreduce}} 元</span>
                                                                <span class="" v-else>首月后每月递减 {{reduce}} 元</span>
                                                        </div>
                                                </div>
                                                <div class="calculator-item-after">
                                                        <div class="after-item after-left">
                                                                <span class="span1">还款月数</span>
                                                                <span class="after-span">{{form.times}}个月</span>
                                                        </div>
                                                        <div class="after-item after-right">
                                                                <span class="span1">还款总额</span>
                                                                <span class="after-span">{{loanTo}}万元</span>
                                                        </div>
                                                </div>
                                                <div class="calculator-item-after">
                                                        <div class="after-item after-left">
                                                                <span class="span1">总利息</span>
                                                                <span class="after-span">{{allBackTo}}万元</span>
                                                        </div>
                                                        <div class="after-item after-right">
                                                                <span class="span1">本息总计</span>
                                                                <span class="after-span">{{loanTo + allBackTo}}万元</span>
                                                        </div>
                                                </div>
                                        </div>
                                </el-form>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                components:{
                        
                },
                name:"Discount",
                data(){
                        return{
                                active:"",
                                price:"17500元/㎡",
                                benefit:"1，开发商基础优惠：按揭优惠3%，全款优惠6%；",
                                yybenefit:"2，鹰眼额外补贴：通过鹰眼鉴房订房总房款直接减15000元；",
                                lableWidth:"184px",
                                form:{
                                        allpay:"",
                                        times:120,
                                        rate:0.049,
                                        accurate:"",
                                        bnsrate:"",
                                        arate:'0.0325',
                                        brate:'0.049',
                                        daipay:0.7,
                                        loandk:0
                                },
                                allPayTo: 0,
                                firstPayTo:0,
                                loanTo: 0,
                                perBack:  0,
                                allBackTo: 0,
                                reduce: 0,
                                dreduce: 0,
                                r :{
                                        average: 0,
                                        accurate: 0,
                                        bnsrate: 0,
                                        area: 0,
                                        percent: 0,
                                        loan: 0,
                                        times: 0,
                                        allpay: 0,
                                        rate: 0,
                                        brate: 0,
                                        arate: 0,
                                        calcType: 0,
                                        tag: 0,
                                        shoupay: 0,
                                        daipay: 0,
                                        type: 1
                                },
                                calcType:0,
                                info:"",
                                money:"",
                                money1:"",
                                money2:"",
                                money3:"",
                                money4:"",
                                keyShow1:false,
                                keyShow2:false,
                                keyShow3:false,
                                keyShow4:false,
                        }
                },
                created(){
                        this.active = this.$route.query.active;
                },
                methods:{
                        hankClick(type){
                                this.active = type;
                                this.form.times = 120;
                                this.form.rate = 0.049;
                                this.form.brate = 0.049;
                                if(type == 1){
                                        this.price="17500元/㎡";
                                        this.benefit="1，开发商基础优惠：按揭优惠3%，全款优惠6%；";
                                        this.yybenefit="2，鹰眼额外补贴：通过鹰眼鉴房订房总房款直接减15000元；";
                                }else if(type == 2){
                                        this.price="27500元/㎡";
                                        this.benefit="1，开发商基础优惠：按揭优惠3%，全款优惠6%；";
                                        this.yybenefit="2，鹰眼额外优惠：通过鹰眼鉴房总款直减5000元；";
                                }else if(type == 3){
                                        this.price="160000元/个";
                                        this.benefit="1，开发商基础优惠：按揭优惠3%，全款优惠6%；";
                                        this.yybenefit="2，鹰眼额外优惠：通过鹰眼鉴房总款直减5000元；";
                                }
                        },
                        startSubmit(){
                                if(!this.form.allpay){
                                                this.info = "请输入待计算的房价！"
                                                return;
                                        }else {
                                                this.info = ""
                                        }
                                if(this.form.rate == 1){
                                        if(parseInt(this.form.accurate) + parseInt(this.form.bnsrate) > parseInt(this.form.allpay)){
                                                this.info = "贷款金额不能大于房价总额！"
                                                return;
                                        }else {
                                                this.info = "";
                                        }
                                }
                                for(let i in this.form){
                                        for(let j in this.r){
                                                if(i == j){
                                                        this.r[j] = this.form[i];
                                                }
                                        }
                                };
                                if(this.r.rate  == 1){
                                        this.r.rate = undefined;
                                        this.r.tag = 1;
                                }
                                if(!this.form.loandk){
                                        this.form.loandk = this.r.allpay * this.form.daipay;
                                }
                                this.r.allpay = parseInt(this.form.allpay);
                                this.r.daipay = parseInt(this.form.loandk);
                                if(this.form.accurate >120){
                                        this.r.accurate = 120;
                                }else{
                                         this.r.accurate = parseInt(this.form.accurate) ;
                                }
                                this.r.bnsrate = parseInt(this.form.bnsrate);
                                // this.r.daipay = parseInt(this.form.daipay);
                                if(this.form.rate == 1){
                                        this.r.type = 3;
                                }else if(this.form.rate == 0.049){
                                        this.r.type = 1;
                                }else if(this.form.rate == 0.0325){
                                        this.r.type = 2;
                                }
                                console.log(this.r);
                                this.f(this.r)
                        },
                        hankChange(){
                                this.form.loandk = this.form.allpay * this.form.daipay;
                                this.info = "";
                        },
                        changeNum(){
                                this.info = "";
                                this.form.accurate = parseInt(this.form.accurate) >120?120:this.form.accurate
                        },
                        getDq(){
                                this.form.loandk = this.form.allpay *this.form.daipay;
                                this.r.daipay = this.form.loandk;
                        },
                        modeClick(type){
                                this.calcType = type;
                                this.r.calcType = type;
                                this.f(this.r)
                        },
                        _confirmEvent(res){
                                console.log(res)
                        },
                        f(t){
                                let that  = this;
                                var e = function(t) {
                                        var e = 1e4 * that.form.allpay
                                        , n = 1e4 * t.daipay
                                        , i = e / 1e4
                                        , a = Math.round(e - n) / 1e4;
                                        1 === t.type ? t.rate = t.brate : 2 === t.type ? t.rate = t.arate : (a = t.allpay - t.accurate - t.bnsrate,
                                        t.daipay = t.accurate + t.bnsrate);
                                        var o, r = 1e4 * t.daipay, s = r / 1e4;
                                        if ("0" == t.calcType) {
                                                if (0 == t.tag)
                                                var l = Math.round(r * t.rate / 12 * Math.pow(1 + parseFloat(t.rate / 12), t.times) / (Math.pow(1 + parseFloat(t.rate / 12), t.times) - 1));
                                                else {
                                                var c = 1e4 * that.form.accurate
                                                , u = 1e4 * that.form.bnsrate;
                                                l = Math.round(c * t.arate / 12 * Math.pow(1 + parseFloat(t.arate / 12), t.times) / (Math.pow(1 + parseFloat(t.arate / 12), t.times) - 1)) + Math.round(u * t.brate / 12 * Math.pow(1 + parseFloat(t.brate / 12), t.times) / (Math.pow(1 + parseFloat(t.brate / 12), t.times) - 1))
                                                }
                                                var d = l * t.times - r
                                        } else if (0 == t.tag) {
                                                d = 0;
                                                for (var h = l = Math.round(parseFloat(r / t.times) + parseFloat(r * t.rate / 12)), p = 0; p < t.times; p++)
                                                p < 2 && (o = l - h),
                                                d = parseFloat(d) + parseFloat(h),
                                                h = Math.round(parseFloat(r / t.times) + parseFloat((r - d) * t.rate / 12));
                                                d -= r
                                        } else {
                                                c = 1e4 * t.accurate,
                                                u = 1e4 * t.bnsrate;
                                                var f = Math.round(parseFloat(c / t.times) + parseFloat(c * t.arate / 12))
                                                , m = Math.round(parseFloat(u / t.times) + parseFloat(u * t.brate / 12))
                                                , g = (l = parseFloat(f) + parseFloat(m),
                                                0)
                                                , v = 0
                                                , b = 0
                                                , y = 0;
                                                for (p = 0; p < t.times; p++)
                                                g = parseFloat(g) + parseFloat(f),
                                                f = Math.round(parseFloat(c / t.times) + parseFloat((c - g) * t.arate / 12)),
                                                p < 2 && (b = f - b);
                                                for (p = 0; p < t.times; p++)
                                                v = parseFloat(v) + parseFloat(m),
                                                m = Math.round(parseFloat(u / t.times) + parseFloat((u - v) * t.brate / 12)),
                                                p < 2 && (y = m - y);
                                                d = parseFloat(g) + parseFloat(v) - r
                                        }
                                        // return {
                                                // allPayTo: i || 0,
                                                // firstPayTo: a || 0,
                                                // loanTo: s || 0,
                                                // perBack: l || 0,
                                                // allBackTo: Math.round(d / 1e4) || 0,
                                                // reduce: o || 0,
                                                // dreduce: -b - y || 0

                                                that.allPayTo=i || 0;
                                                that.firstPayTo=a || 0;
                                                that.loanTo=s || 0;
                                                that.perBack= l || 0;
                                                that.allBackTo= Math.round(d / 1e4) || 0;
                                                that.reduce=o || 0;
                                                that.dreduce= -b - y || 0;
                                        // }
                                }(t)
                        },
                        _handleKeyPress(es,type) {
                                console.log(type);
                                let num = es;
                                 if(type == 1){
                                       this.money1 =  this.form.allpay;
                                }else if(type == 2){
                                         this.money2 = this.form.accurate;
                                }else if(type == 3){
                                       this.money3 =  this.form.bnsrate;
                                }else if(type == 4){
                                        this.money4 = this.form.loandk;
                                }
				//不同按键处理逻辑
				// -1 代表无效按键，直接返回
				if (num == -1) return false;
				switch (String(num)) {
					//删除键
					case 'D':
						this._handleDeleteKey(type);
						break;
					//清空键
					case 'C':
						this._handleClearKey(type);
						break;
					//确认键
					case 'S':
						this._handleConfirmKey(type);
                                                break;
                                        case 'G':
						this.keyShow1 = false;
						this.keyShow2 = false;
						this.keyShow3 = false;
						this.keyShow4 = false;
						break;
					default:
						this._handleNumberKey(num,type);
						break;
				}
                        },
                        //处理删除键
			_handleDeleteKey(type) {
				// let S = this.money;
                                //如果没有输入，直接返回
                                if(type == 1){
                                       if (!this.money1.length) return false;
                                       this.money1 = this.money1.substring(0, this.money1.length - 1);
                                }else if(type == 2){
                                        if (!this.money2.length) return false;
                                        this.money2 = this.money2.substring(0, this.money2.length - 1);
                                }else if(type == 3){
                                        if (!this.money3.length) return false;
                                         this.money3 = this.money3.substring(0, this.money3.length - 1);
                                }else if(type == 4){
                                        if (!this.money4.length) return false;
                                        this.money4 = this.money4.substring(0, this.money4.length - 1);
                                }
				//否则删除最后一个
                                 if(type == 1){
                                        this.form.allpay = this.money1;
                                }else if(type == 2){
                                        this.form.accurate = this.money2;
                                }else if(type == 3){
                                        this.form.bnsrate = this.money3;
                                }else if(type == 4){
                                        this.form.loandk = this.money4;
                                }
			},
			//处理清空键
			_handleClearKey(type) {
                                this.money = '';
                                if(type == 1){
                                        this.form.allpay = "";
                                        this.money1 = "";
                                }else if(type == 2){
                                        this.form.accurate = "";
                                        this.money2 = "";
                                }else if(type == 3){
                                        this.form.bnsrate = "";
                                        this.money3 = "";
                                }else if(type == 4){
                                        this.form.loandk = "";
                                        this.money4 = "";
                                }
			},
			//处理数字
			_handleNumberKey(num,type) {
                                if(type == 1){
                                        if (this.money1.length && Number(this.money1.charAt(0)) === 0) return;
                                        this.money1 = this.money1 + num;
                                }else if(type == 2){
                                        if (this.money2.length && Number(this.money2.charAt(0)) === 0) return;
                                        this.money2 = this.money2 + num;
                                }else if(type == 3){
                                        if (this.money3.length && Number(this.money3.charAt(0)) === 0) return;
                                        this.money3 = this.money3 + num;
                                }else if(type == 4){
                                        if (this.money4.length && Number(this.money4.charAt(0)) === 0) return;
                                        this.money4 = this.money4 + num;
                                }

                                if(type == 1){
                                        this.form.allpay = this.money1;
                                }else if(type == 2){
                                        this.form.accurate = this.money2;
                                }else if(type == 3){
                                        this.form.bnsrate = this.money3;
                                }else if(type == 4){
                                        this.form.loandk = this.money4;
                                }
			},
                        mousedown (event) {
                                        var e=window.event;
                                        var obj=e.srcElement;
                                        obj.style. opacity='0.5' ;
                        },
                        mouseup(e){
                                var e=window.event;
                                var obj=e.srcElement;
                                obj.style. opacity='1' ;
                        }
                }
        }
</script>

<style scoped>
.discount{
        width:calc(100% - 420px);
        height: 100%;
        padding: 120px 210px;
}
.discount-same{
        width: calc(50% - 4px);
        height: 100%;
        float: left;
}
.discount-title{
        font-family: 'PingFangSC-Semibold';
        font-size: 0px;
        color: #212832;
        font-weight: 600;
}
.discount-title span{
        font-size: 30px;
        cursor: pointer;
}
.margins{
        margin:0px 100px;
}
.discount-kuang{
        width: 76%;
        height: 152px;
        padding: 35px;
        background: #FFFFFF;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.22);
        margin-top: 60px;
        font-weight: 600;
        border-radius: 4px;
}
.discount-p1{
        font-size: 30px;
        color: #000;
}
.discount-p2{
        font-size: 75px;
        color: #F84C47;
        margin-top: 17px;
}
.discount-cont{
        width: 100%;
        height: 480px;
        border-right: 2px solid #E2E5ED;
        margin-top: 50px;
        /* overflow-y: scroll; */
}
.discount-p3{
        font-weight: 600;
        color:#000;
        font-size: 20px;
        margin-bottom: 30px;
}
.discount-p4{
        color:#000;
        font-size: 16px;
        margin-bottom: 15px;
}
.calculator{
        width: calc(100% - 112px);
        padding-left: 112px;
        height: 100%;
}
.calculator-title{
        width: 100%;
        font-family: 'PingFangSC-Semibold';
        font-size: 20px;
        color: #000000;
        font-weight: 600;
        margin-bottom: 29px;
}
.calculator-item{
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
        position: relative;
}
.f-item{
        display: inline-block;
        width: calc(100% - 146px);
        height: calc(100% - 1px);
        border-bottom: 1px solid #979797;
        margin-left: 23px;
        vertical-align: text-bottom;
}
.c-input{
        width: calc(100% - 50px);
        padding-left: 20px;
        color: #000000;
        /* font-weight: 600; */
}
.span1{
        width: 118px;
        vertical-align: top;
}
.span2{
        font-weight:400;
        vertical-align: top;
}
.el-form-item{
        margin-bottom: 0px;
}
.f-select{
        /* display: block; */
        width: 100%;
        height: 40px;
        /* border:1px solid #979797; */
}
.start-btn{
        width:100%;
        height: 44px;
       background: #0080FF;
       margin-top: 10px;
}
.calculator-item-two{
        margin-top: 50px;
        border-bottom: 1px solid #979797;
        color: #8B949E;
}
.calculator-item-two span{
        cursor: pointer;
}
.two-span{
        margin-right:45px;
}
.el-select>.el-input{
        height: 100%;
}
.calculator-item-three{
        font-family: 'PingFangSC-Semibold';
        font-size: 16px;
        font-weight: 400;
}
.calculator-item-after{
        height: 40px;
        line-height: 40px;
            overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.after-item{
        width: 50%;
        height: 100%;
}
.after-left .span1{
        color: #4D535D;
}
.after-left{
        float: left;
}
.after-right{
        float: right;
}
.after-span{
        margin-left: 17px;
         color: #212832;
}
.dkje{
        display:inline-block;height:40px;width:45%;border-bottom: 1px solid #979797;margin-left:7%;vertical-align: bottom;
}
.discount-cont::-webkit-scrollbar-thumb {
        background: #E2E5ED;
        width: 10px;
        border-radius: 10px;
}
.discount-cont::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 10px;
        width: 2px!important;
}
.discount-cont::-webkit-scrollbar{
        display: block;
        /* width: 2px; */
}
.infos{
        font-size: 14px;
        color: #F84C47;
        text-align: right;
        line-height: 40px;
}
.keyboard{
        width:676px;
        height: 666px;
        background: #E7E7E7;
        position: absolute;
        left:200px;
        bottom: 0px;
}


.keyboard {
        width: 326px;
        height: 332px;
        background: #E7E7E7;
        position: absolute;
        border-radius: 2px;
        left: 143px;
        top: 56px;
        z-index: 99;
        padding: 20px 25px;
        font-size: 0px;
}
.key-item{
        height: 73px;
        margin: 10px 0px;
}
.keyboard span{
        display: inline-block;
        width: 75.5px;
        height: 73px;
        background: #FFFFFF;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.15);
        margin: 0px 3px;
        text-align: center;
        line-height:73px;
        font-size: 20px;
        color: #4D535D;
        font-family: 'PingFangSC-Medium';
        vertical-align: bottom;
}
.keyboard span img{
        width: 37px;
        margin-top: 19px;
}
.key-thoro{
        width: 237px!important;
        height: 73px!important;
}
.key-submit{
        height: 155px!important;
        width: 73px!important;
        line-height: 155px!important;
        position: absolute;
        right:26px;
        bottom:21px;
}
    @media screen and (min-width: 2120px) {
            .discount{
                    width: calc(100% - 840px);
                        padding: 240px 420px;
                }
                .discount-title span{
                        font-size: 60px;
                }
                .discount-same{
                        width: calc(50% - 4px);
                }
                .margins{
                        margin:0px 200px;
                }
                .discount-kuang{
                        width: 1160px;
                        height: 304px;
                        padding: 70px;
                        box-shadow: 0 2px 25px 0 rgba(0,0,0,0.22);
                        margin-top: 120px;
                        border-radius: 8px;
                }
                .discount-p1{
                        font-size: 60px;
                }
                .discount-p2{
                        font-size: 150px;
                        margin-top: 34px;
                }
                .discount-cont{
                        width: 100%;
                        height: 960px;
                        border-right: 4px solid #E2E5ED;
                        margin-top: 100px;
                }
                .discount-p3{
                        font-weight: 600;
                        color:#000;
                        font-size: 40px;
                        margin-bottom: 60px;
                }
                .discount-p4{
                        color:#000;
                        font-size: 32px;
                        margin-bottom: 30px;
                }
                 .calculator{
                        width: calc(100% - 224px);
                         padding-left:224px;
                }
                .calculator-title{
                        font-size: 40px;
                        margin-bottom: 58px;
                }
                .calculator-item{
                        height: 80px;
                        line-height: 80px;
                        font-size: 32px;
                        margin-bottom: 40px;
                }
                .f-item{
                            width: calc(100% - 396px);
                        margin-left: 148px;
                }
                .span1{
                        width: 236px;
                        vertical-align: top;
                }
                .span2{
                       font-size: 32px;
                       line-height: 80px;
                }
                .c-input{
                        width: calc(100% - 100px);
                        padding-left: 40px;
                        font-size: 32px;
                        vertical-align: middle;
                        line-height: 80px;
                }
                .start-btn{
                        height: 88px;
                        margin-top: 20px;
                        font-size: 32px;
                        width: 800px;
                        margin-left: 391px;
                }
                .calculator-item-two{
                        margin-top: 100px;
                }
                .two-span{
                        margin-right:100px;
                }
                .f-select{
                        height: 80px;
                        font-size: 32px;

                }
                .el-input{
                        font-size: 32px!important;
                        height: 80px;
                }
                .calculator-item-three{
                        font-size: 32px;
                }
                .calculator-item-after{
                        height: 80px;
                        line-height: 80px;
                }
                .after-span{
                        margin-left: 35px;
                }
                .after-item{
                        width:36%;;
                }
                .dkje{
                        height: 80px;
                }
                .infos{
                        font-size: 28px;
                        line-height: 70px;
                }
                .keyboard {
                        width: 646px;
                        height: 635px;
                        background: #E7E7E7;
                        position: absolute;
                        border-radius: 2px;
                        left: 392px;
                        top: 112px;
                        z-index: 99;
                        padding: 20px 25px;
                        font-size: 0px;
                }
                .key-item{
                        height: 146px;
                        margin: 10px 0px;
                }
                .keyboard span{
                        display: inline-block;
                        width: 151px;
                        height: 146px;
                        background: #FFFFFF;
                        box-shadow: 0 2px 11px 0 rgba(0,0,0,0.15);
                        margin: 0px 5px;
                        text-align: center;
                        line-height: 146px;
                        font-size: 40px;
                        color: #4D535D;
                        font-family: 'PingFangSC-Medium';
                        vertical-align: bottom;
                }
                .keyboard span img{
                        width: 75px;
                        margin-top: 38px;
                }
                .key-thoro{
                        width: 475px!important;
                        height: 146px!important;
                }
                .key-submit{
                        height: 304px!important;
                        width: 147px!important;
                        line-height: 304px!important;
                        position: absolute;
                        right:29px;
                        bottom:30px;
                }
    }
    @media screen and (max-width: 1660px) {
            .discount-p2{
                font-size: 50px;
                margin-top: 34px;
        }
       
    }
</style>
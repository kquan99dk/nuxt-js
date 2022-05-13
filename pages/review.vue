<template>
  <div class="bg-light d-flex justify-content-center">
    <div class="review">
      <div class="title-page">
        <p class="m-0">
          You are resquested to review
        </p>
      </div>
      <div class="info-review position-relative">
        <img src="@/assets/images/banner-review.png" alt="">
        <img class="portraitt position-absolute" src="@/assets/images/model-review.png" alt="">
        <img class="icon-wave position-absolute" src="@/assets/icons/wave.svg" alt="">
        <div class="content position-absolute">
          <div class="form">
            <div class="title d-flex align-items-end">
              <img src="@/assets/icons/user-ol.svg" alt="">
              <span>Profile Infomation</span>
            </div>
            <div class="info">
              <div class="box d-flex justify-content-between">
                <div>
                  <p class="title mb-1">
                    Full name
                  </p>
                  <p class="value">
                    BÙI THỊ THANH TÂM
                  </p>
                </div>
                <div>
                  <p class="title mb-1">
                    Date of birth
                  </p>
                  <p class="value">
                    07/04/2000
                  </p>
                </div>
                <div>
                  <p class="title mb-1">
                    Position
                  </p>
                  <p class="value">
                    Business Analyst
                  </p>
                </div>
              </div>
            </div>
            <div class="express">
              <p class="title mb-1">
                Express the opinion to reviewer
              </p>
              <p>I am preparing for scholarship to UK next year<br>Your review will contribute so much to my scholarship dream</p>
            </div>
          </div>
          <hr>
          <div>
            <label class="form-label">General review</label>
            <textarea class="form-control" rows="4" style="resize: none" placeholder="Enter your option" />
          </div>
        </div>
      </div>
      <div class="evaluation-metrics">
        <div class="title">
          <p class="mb-1">
            Evaluation Metrics
          </p>
          <span>These criteria are accessed within the range of 1 to 5</span>
        </div>
        <div class="form">
          <div class="select w-100 d-flex">
            <div class="title-select w-50 d-flex justify-content-center align-items-center">
              <p>Access criteria</p>
            </div>
            <div class="title-option w-50 d-flex flex-column justify-content-center align-items-center">
              <p class="title text-center">
                Assessment Scale
              </p>
              <div class="options w-100 d-flex justify-content-between">
                <div class="box d-flex flex-column align-items-center justify-content-center">
                  <p class="index">
                    1
                  </p>
                  <p>Poor</p>
                </div>
                <div class="box d-flex flex-column align-items-center justify-content-center">
                  <p class="index">
                    2
                  </p>
                  <p>Deficient</p>
                </div>
                <div class="box d-flex flex-column align-items-center justify-content-center">
                  <p class="index">
                    3
                  </p>
                  <p>Satisfactory</p>
                </div>
                <div class="box d-flex flex-column align-items-center justify-content-center">
                  <p class="index">
                    4
                  </p>
                  <p>Good</p>
                </div>
                <div class="box d-flex flex-column align-items-center justify-content-center">
                  <p class="index">
                    5
                  </p>
                  <p>Excellent</p>
                </div>
              </div>
            </div>
          </div>
          <div class="option">
            <div class="box d-flex">
              <p class="w-50 border">
                Work to full potential
              </p>
              <div class="check-boxs w-50 d-flex justify-content-between">
                <div v-for="(status, i ) in options1" :key="i" class="check-box d-flex justify-content-center align-items-center border" @click="status.status = !status.status">
                  <div class="inputCheck d-flex justify-content-center align-items-center rounded-circle" :class="status.status ? 'checked' : 'uncheck'">
                    <div class="rounded-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div class="box d-flex">
              <p class="w-50 border">
                Commnunication
              </p>
              <div class="check-boxs w-50 d-flex justify-content-between">
                <div v-for="(status, i ) in options2" :key="i" class="check-box d-flex justify-content-center align-items-center border" @click="status.status = !status.status">
                  <div class="inputCheck d-flex justify-content-center align-items-center rounded-circle" :class="status.status ? 'checked' : 'uncheck'">
                    <div class="rounded-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div class="box d-flex">
              <p class="w-50 border">
                Work consistency
              </p>
              <div class="check-boxs w-50 d-flex justify-content-between">
                <div v-for="(status, i ) in options3" :key="i" class="check-box d-flex justify-content-center align-items-center border" @click="status.status = !status.status">
                  <div class="inputCheck d-flex justify-content-center align-items-center rounded-circle" :class="status.status ? 'checked' : 'uncheck'">
                    <div class="rounded-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div class="box d-flex">
              <p class="w-50 border">
                Productivity
              </p>
              <div class="check-boxs w-50 d-flex justify-content-between">
                <div v-for="(status, i ) in options4" :key="i" class="check-box d-flex justify-content-center align-items-center border" @click="status.status = !status.status">
                  <div class="inputCheck d-flex justify-content-center align-items-center rounded-circle" :class="status.status ? 'checked' : 'uncheck'">
                    <div class="rounded-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div class="box d-flex">
              <p class="w-50 border">
                Independent work
              </p>
              <div class="check-boxs w-50 d-flex justify-content-between">
                <div v-for="(status, i ) in options5" :key="i" class="check-box d-flex justify-content-center align-items-center border" @click="status.status = !status.status">
                  <div class="inputCheck d-flex justify-content-center align-items-center rounded-circle" :class="status.status ? 'checked' : 'uncheck'">
                    <div class="rounded-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-send">
        Send review
      </button>
    </div>
  </div>
</template>
<script>
export default ({
  data () {
    return {
      options1: [
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false }
      ],
      options2: [
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false }
      ],
      options3: [
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false }
      ],
      options4: [
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false }
      ],
      options5: [
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false }
      ]
    }
  },
  methods: {
  }
})
</script>
<style lang="scss">
    .review{
        width: 1196px;
        padding-top: 32px;
        padding-bottom: 200px;
        p{
            margin: 0;
        }
        .title-page{
            margin-bottom: 36px;
            p{
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 32px;
            }
        }
        .info-review{
            .portraitt{
                top: 0;
                left: 0;
            }
            .icon-wave{
                left: 1079px;
                bottom: 365px;
            }
            .content{
                color: #FFFFFF;
                top: 36px;
                left: 420px;
                width: 738px;
                .form{
                    width: 561px;
                    .title{
                        span{
                            color: #FFFFFF;
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 20px;
                        }
                    }
                    .info{
                        margin-top: 32px;
                        .title{
                            color: #DCDCE4;
                        }
                        .value{
                            font-weight: 500;
                        }
                    }
                    .express{
                        margin-top: 32px;
                        .title{
                            color: #DCDCE4;
                        }
                    }
                }
                hr{
                    margin: 32px 0;
                }
            }

        }
        .evaluation-metrics{
            margin-top: 48px;
            .title{
                p{
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 28px;
                    color: #212134;
                }
                span{
                    font-size: 16px;
                    line-height: 24px;
                    color: #666687;
                }
            }
            .form{
                margin-top: 24px;
                .select{
                        height: 176px;
                        background: #F0F0FF;
                    .title-select{
                        p{
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 28px;
                            color: #423FFF;
                        }
                    }
                    .title-option{
                        .title{
                            padding-top: 10px;
                            padding-bottom: 20px;
                            margin-bottom: 24px;
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 28px;
                            color: #423FFF;
                            width: 486px;
                            border-bottom: 1px dashed #C0C0CF;
                        }
                        .options{
                            .box{
                                width: 20%;
                                .index{
                                    color: #423FFF;
                                    font-weight: 700;
                                    font-size: 16px;
                                    line-height: 24px;
                                }
                            }
                        }
                    }
                }
                .option{
                    .box{
                        p{
                            font-weight: 500;
                            padding: 33px 36px;
                        }
                        .check-boxs{
                            .check-box{
                                cursor: pointer;
                                width: 20%;
                                height: 92px;
                                &:hover{
                                    background-color: #e9ecef;
                                }
                                .inputCheck{
                                    width: 24px;
                                    height: 24px;
                                }
                                .uncheck{
                                    background: #f0f0f0;
                                    border: 1px solid #DCDCE4;
                                }
                                .checked{
                                    border: 1px solid #423FFF;
                                    div{
                                        width: 14.4px;
                                        height: 14.4px;
                                        background: #423FFF;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .btn-send{
            padding: 12px 40.5px;
            background: #423FFF;
            color: #FFFFFF;
            font-weight: 500;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 36px;
        }
    }
</style>

<template>
  <div class="bg-light">
    <div class="resquest-review container">
      <div class="title-page d-flex align-items-center">
        <NuxtLink to="/list-share">
          <img src="@/assets/icons/arrow-left.svg">
        </NuxtLink>
        <p class="m-0 fw-bold">
          Resquest for review
        </p>
      </div>
      <div class="form1 d-flex justify-content-center py-5">
        <div class="box-form">
          <div class="mb-4">
            <label class="form-label">Position</label>
            <input type="text" class="form-control size-input" placeholder="Enter your position">
          </div>
          <div class="mb-4">
            <label class="form-label">Position of reviewer</label>
            <div>
              <select class="form-select w-100 border-0 bg-white" style="height: 48px;">
                <option selected>
                  Status
                </option>
                <option value="1">
                  One
                </option>
                <option value="2">
                  Two
                </option>
                <option value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label">His/Her name</label>
            <input type="text" class="form-control size-input" placeholder="Enter their name">
          </div>
          <div class="mb-4">
            <label class="form-label">Specific email</label>
            <input type="text" class="form-control size-input" placeholder="Enter email">
          </div>
          <div class="mb-2">
            <label class="form-label">Express to your reviewer</label>
            <textarea class="form-control" rows="6" style="resize: none" placeholder="Enter your option" />
          </div>
          <div class="attach-file d-flex align-items-center">
            <img src="@/assets/icons/gim.svg" class="mr-2" alt="">
            <p class="m-0 border-bottom border-dark">
              Attach File
            </p>
          </div>
        </div>
      </div>
      <div class="title-node mb-4">
        <p class="mb-1 title">
          This template will be sent to your requested reviewer
        </p>
        <p class="m-0">
          These criteria are accessed within the range of 1 to 5
        </p>
      </div>
      <div class="form2 mb-3">
        <div>
          <p class="label-form rounded-top m-0">
            Access criteria
          </p>
          <div class="options d-flex justify-content-between align-items-center position-relative">
            <p class="m-0">
              Work to full potential
            </p>
            <button class="btn p-2">
              Default
            </button>
            <div class="position-absolute border-bottom" />
          </div>
          <div class="options d-flex justify-content-between align-items-center position-relative">
            <p class="m-0">
              Commnunication
            </p>
            <button class="btn p-2">
              Default
            </button>
            <div class="position-absolute border-bottom" />
          </div>
          <div class="options d-flex justify-content-between align-items-center position-relative">
            <p class="m-0">
              Work consistency
            </p>
            <button class="btn p-2">
              Default
            </button>
            <div class="position-absolute border-bottom" />
          </div>
          <div class="options d-flex justify-content-between align-items-center position-relative">
            <p class="m-0">
              Productivity
            </p>
            <button class="btn p-2">
              Default
            </button>
            <div class="position-absolute border-bottom" />
          </div>
          <div class="options d-flex justify-content-between align-items-center position-relative">
            <p class="m-0">
              Independent work
            </p>
            <button class="btn p-2">
              Default
            </button>
            <div class="position-absolute border-bottom" />
          </div>
          <div v-for="(item, i) in criteria" :key="i" class="criteria-add d-flex">
            <input v-model="item.value" type="text" class="form-control mr-3 border border-dark" placeholder="Type here to add more criteria">
            <img src="@/assets/icons/btn-minus-black.svg" alt="" @click="removeCriteria(i)">
          </div>
        </div>
      </div>
      <div class="add-criteria d-flex justify-content-end align-items-center">
        <p class="mb-0 mr-2">
          Add criteria
        </p>
        <img class="ml-1" src="@/assets/icons/btn-plus.svg" alt="" @click="addCriteria()">
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-sendRes">
          Send resquest
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default ({
  data () {
    return {
      status: true,
      criteria: [],
      option: [
        {
          value: 1,
          label: 'option1'
        },
        {
          value: 2,
          label: 'option2'
        },
        {
          value: 3,
          label: 'option3'
        }
      ]
    }
  },
  methods: {
    addCriteria () {
      this.criteria.push({
        value: ''
      })
    },
    removeCriteria (i) {
      this.criteria.splice(i, 1)
    },
    selected (i) {
      this.showSelect = this.options[i].label
    }
  }
})
</script>

<style lang="scss">
.resquest-review{
    padding-top: 32px;
    padding-bottom: 200px;
    .title-page{
        margin-bottom: 36px;
        img{
            cursor: pointer;
            margin-right: 12px;
        }
        p{
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
        }
    }
    .form1{
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-bottom: 36px;
        .box-form{
            width: 584px;
            .attach-file{
                p{
                    cursor: pointer;
                }
            }
            label{
              color: #666687;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
            }
            input{
              height: 48px;
            }
        }
    }
    .title-node{
        .title{
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            color: #212134;
        }
    }
    .form2{
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        .label-form{
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            color: #423FFF;
            padding: 32px 36px 32px 36px;
            background: #F0F0FF;
        }
        .options{
            padding: 38px 36px 38px 36px;
            p{
                font-weight: 500;
            }
            button{
                color: #423FFF;
                border-radius: 8px;
                background: #F0F0FF;
            }
            div{
                bottom: 0;
                left: 36px;
                height: 1px;
                background-color: #C0C0CF;
                width: calc(100% - 72px);
            }
        }
        .criteria-add{
            padding: 26px 36px 26px 36px;
            img{
                cursor: pointer;
            }
            input{
              height: 48px;
            }
        }
    }
    .add-criteria{
        margin-bottom: 36px;
        p{
            color: #212134;
        }
        img{
            cursor: pointer;
        }
    }
    .btn-sendRes{
        padding: 12px 32.5px 12px 32.5px;
        background: #423FFF;
        border-radius: 8px;
        color: #FFFFFF;
    }
}
</style>

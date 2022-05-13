<template>
  <div class="items-review d-flex">
    <div class="form-info border-right w-50">
      <p class="title-form">
        <span>Information Review</span>
      </p>
      <div class="content-items">
        <div class="d-flex justify-content-between">
          <div class="box-items">
            <div>
              <p class="text-label mb-1">
                Reviewer
              </p>
              <p class="text-value m-0">
                {{ data.infomation.reviewer }}
              </p>
            </div>
            <div class="box-below">
              <p class="text-label mb-1">
                My position
              </p>
              <p class="text-value m-0">
                {{ data.infomation.myPosition }}
              </p>
            </div>
          </div>
          <div class="box-items">
            <div>
              <p class="text-label mb-1">
                Position
              </p>
              <p class="text-value m-0">
                {{ data.infomation.position }}
              </p>
            </div>
            <div class="box-below">
              <p class="text-label mb-1">
                Requested
              </p>
              <p class="text-value m-0">
                {{ data.infomation.requested }}
              </p>
            </div>
          </div>
          <div class="box-items">
            <div>
              <p class="text-label mb-1">
                Email
              </p>
              <p class="text-value m-0">
                {{ data.infomation.email }}
              </p>
            </div>
            <div class="box-below">
              <p class="text-label mb-1">
                Status
              </p>
              <p class="text-value m-0" :style=" data.infomation.status ? 'color:#10B981;' : 'color:#F59E0B;'">
                {{ data.infomation.status ? 'Responded' : 'No respond' }}
              </p>
            </div>
          </div>
        </div>
        <div class="coppy-link d-flex">
          <div class="input-group">
            <input v-if="data.infomation.status" type="text" class="form-control border-0 mr-2" placeholder="Link..." disabled>
          </div>
          <button v-if="data.infomation.status" class="btn btn-form-info btn-coppy">
            Coppy
          </button>
          <button v-if="!data.infomation.status" class="btn btn-form-info btn-resend border">
            Resend
          </button>
        </div>
      </div>
    </div>
    <div class="form-result w-50">
      <div class="title-form d-flex justify-content-between align-items-center">
        <span>Result</span>
        <div v-if="btnResult" class="btn-menu-result">
          <img class="icon-btn" src="@/assets/icons/btn-group.svg">
          <div />
          <img class="triangle" src="@/assets/icons/triangle.svg">
          <ul>
            <li @click="dialog = true">
              Add to list share
            </li>
            <li class="text-danger">
              Delete
            </li>
          </ul>
        </div>
        <img v-else class="icon-btn" src="@/assets/icons/btn-minus.svg">
      </div>
      <div class="content-items d-flex">
        <div class="mr-5">
          <div>
            <p class="text-label mb-1">
              Work to full potential
            </p>
            <p class="text-value m-0">
              {{ data.result.workToFullPotential }}
            </p>
          </div>
          <div class="box-below">
            <p class="text-label mb-1">
              Commnunication
            </p>
            <p class="text-value m-0">
              {{ data.result.commnunication }}
            </p>
          </div>
          <div class="box-below">
            <p class="text-label mb-1">
              Independent work
            </p>
            <p class="text-value m-0">
              {{ data.result.independentWork }}
            </p>
          </div>
        </div>
        <div class="ml-3">
          <div>
            <p class="text-label mb-1">
              Work consistency
            </p>
            <p class="text-value m-0">
              {{ data.result.workConsistency }}
            </p>
          </div>
          <div class="box-below">
            <p class="text-label mb-1">
              Productivity
            </p>
            <p class="text-value m-0">
              {{ data.result.Productivity }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Dialog v-model="dialog" :cancel="false" :title="titleDialog" :submit="false" @submit="submit">
      <template #header>
        <img class="mr-2" src="@/assets/icons/link.svg">
      </template>
      <template #body>
        <div class="coppy-link-slot d-flex">
          <div class="input-group">
            <input type="text" class="form-control border-0 mr-2" placeholder="Link..." disabled>
          </div>
          <button class="btn btn-form-info btn-coppy">
            Coppy
          </button>
        </div>
        <div class="go-list-slot d-flex align-items-center mt-3">
          <span class="mr-2">Go to list share</span>
          <img src="@/assets/icons/arrow-right.svg">
        </div>
      </template>
    </Dialog>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    btnResult: {
      type: Boolean,
      default: true
    },
    iconHeaderDialog: {
      type: String,
      default: ''
    },
    titleDialog: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
<style lang="scss" scoped>
.items-review + .items-review {
  margin-top: 24px;
}
.items-review{
  background: #FFFFFF;
  border: 1px solid #DCDCE4;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  .title-form{
    background-color:#F0F0FF;
    span{
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
    }
  }
  .content-items{
    padding: 32px 30px 40px 36px;
    .text-label{
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    .text-value{
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    .box-below{
      margin-top: 32px;
    }
  }
  .form-info{
    .title-form{
      padding: 24px 36px 24px 36px;
      border-radius: 8px 0 0 0;
    }
  }
  .form-result{
    .title-form{
      border-radius: 0 8px 0 0;
      padding: 20px 36px 20px 36px;
    }
    .icon-btn{
      width: 36px;
      height: 36px;
      cursor: pointer;
    }
    .btn-menu-result{
      cursor: pointer;
      position: relative;
      div{
          position: absolute;
          width: 100%;
          height: 40px;
          right: 0;
          top: 20px;
        }
      .triangle{
        display: none;
        position: absolute;
        right: 6px;
        top: 43px;
      }
      &:hover ul{
        display: block;
      }
      &:hover .triangle{
        display: block;
      }
      ul{
        z-index: 1000;
        width: 187px;
        display: none;
        list-style: none;
        position: absolute;
        top: 50px;
        right: 0;
        margin: 0;
        padding: 16px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        li{
          padding: 5px;
          border-radius: 5px;
          cursor: pointer;
          &:hover{
          background-color: rgba(201, 201, 201, 0.767);
          }
        }
        li + li {
          margin-top:16px;
        }
      }
    }
  }
  .coppy-link {
    margin-top: 36px;
    .form-control{
      height: 44px;
      background-color: #F6F6F9;
    }
    .btn-form-info{
      padding: 10px 56px 10px 56px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
    .btn-coppy{
      background-color: #E1FAED;
      color: #059669;
    }
  }
  .coppy-link-slot {
    .form-control{
      height: 44px;
      background-color: #F6F6F9;
    }
    .btn-form-info{
      padding: 10px 56px 10px 56px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
    .btn-coppy{
      background-color: #E1FAED;
      color: #059669;
    }
  }
  .go-list-slot{
    span{
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>

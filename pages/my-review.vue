<template>
  <div class="bg-light">
    <div class="my-review container">
      <div class="title-page">
        <p class="m-0">
          My review result
        </p>
      </div>
      <div class="tool-box d-flex justify-content-between">
        <div class="box-input d-flex">
          <div class="input-group search">
            <span class="input-group-text bg-white border-0">
              <img src="@/assets/icons/search.svg">
            </span>
            <input
              type="text"
              class="form-control border-0"
              placeholder="Search..."
            >
          </div>
          <q-select placeholder="test">
            <q-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </q-select>
        </div>
        <div class="box-button d-flex">
          <button class="btn btn-ListShare">
            <NuxtLink to="/list-share">
              List share
            </NuxtLink>
          </button>
          <button class="btn btn-add">
            <img src="@/assets/icons/plus.svg" alt="">Add Review
          </button>
        </div>
      </div>
      <div class="mt-4">
        <template v-for="(items, i) in data">
          <items-review :key="i" :data="items" title-dialog="Get Link" @submit="submit" />
        </template>
      </div>
      <div class="bot-page d-flex justify-content-center">
        <ul class="d-flex p-0">
          <li
            class="
              d-flex
              justify-content-center
              align-items-center
              rounded-start
              active
            "
          >
            <img
              src="@/assets/icons/arrow-right.svg"
              alt=""
              style="transform: rotate(180deg)"
            >
          </li>
          <li class="d-flex justify-content-center align-items-center active">
            1
          </li>
          <li class="d-flex justify-content-center align-items-center">
            2
          </li>
          <li class="d-flex justify-content-center align-items-center">
            ...
          </li>
          <li class="d-flex justify-content-center align-items-center">
            5
          </li>
          <li class="d-flex justify-content-center align-items-center">
            6
          </li>
          <li
            class="d-flex justify-content-center align-items-center rounded-end"
          >
            <img src="@/assets/icons/arrow-right.svg" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import QOption from '../components/q-option.vue'
import qSelect from '../components/q-select.vue'
export default {
  components: { qSelect, QOption },
  data () {
    return {
      data: [
        {
          infomation: {
            reviewer: 'Nguyen Van 789',
            position: 'CEO',
            email: 'xxx@gmail.com',
            myPosition: 'Business Analyst',
            requested: '20/01/2021',
            status: true
          },
          result: {
            workToFullPotential: '4/5',
            workConsistency: '5/5',
            commnunication: '3/5',
            Productivity: '3/5',
            independentWork: '3/5'
          }
        },
        {
          infomation: {
            reviewer: 'Nguyen Van JQK',
            position: 'CEO',
            email: 'xxx@gmail.com',
            myPosition: 'Business Analyst',
            requested: '20/01/2021',
            status: false
          },
          result: {
            workToFullPotential: '4/5',
            workConsistency: '5/5',
            commnunication: '3/5',
            Productivity: '3/5',
            independentWork: '3/5'
          }
        }
      ],
      options: [
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
    goListShare () {
    },
    selected (i) {
      this.showSelect = this.options[i].label
    },
    submit () {
      // eslint-disable-next-line no-console
      console.log('submit')
    }
  }
}
</script>
<style lang="scss">
.my-review {
  padding-top: 32px;
  padding-bottom: 200px;
  p{
    margin: 0;
  }
  .title-page {
    margin-bottom: 36px;
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
  }
  .tool-box {
    height: 48px;
    .box-input {
      border-radius: 8px;
      .search {
        width: 278px;
        margin-right: 12px;
        span {
          padding-left: 14px;
          padding-right: 10px;
          img {
            width: 15.67px;
            height: 16.46px;
          }
        }
        input {
          padding: 12px 8px 12px 0;
          box-shadow: none;
          height: 48px;
        }
      }
      .form-select{
        border: none;
        background-color: white;
        outline: none;
        width: 200px;
        padding-left: 12px;
        border-radius: 8px;
      }
    }
    .box-button {
      .btn-ListShare {
        border: 1px solid #c0c0cf;
        padding-left: 50.5px;
        padding-right: 50.5px;
        margin-right: 12px;
      }
      .btn-add {
        background-color: #423fff;
        padding-left: 29.5px;
        padding-right: 26.5px;
        color: #ffffff;
        img {
          height: 17.5px;
          width: 17.5px;
          margin-right: 11.5px;
        }
      }
    }
  }
  .bot-page {
    margin-top: 36px;
    ul {
      li {
        list-style: none;
        width: 44px;
        height: 44px;
        border: 0.5px solid #c0c0cf;
        font-weight: 500;
        cursor: pointer;
      }
      .active {
        color: #423fff;
      }
    }
  }
}
</style>

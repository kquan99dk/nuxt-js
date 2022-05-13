<template>
  <div class="bg-light">
    <div class="list-review container">
      <div class="title-page">
        <p class="m-0 d-flex align-items-center">
          <NuxtLink to="my-review">
            <img to="/my-review" class="mr-3" src="@/assets/icons/arrow-left.svg">
          </NuxtLink>

          List share
        </p>
      </div>

      <div class="mt-4">
        <template v-for="(items, i) in data">
          <items-review :key="i" :data="items" :btn-result="false" />
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
export default {
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
    goListShare () {
      this.$router.push({
        name: 'MyReview'
      })
    },
    selected (i) {
      this.showSelect = this.options[i].label
    }
  }
}
</script>
<style lang="scss">
.list-review {
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

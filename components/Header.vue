<template>
  <div class="header shadow-sm">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="logo d-flex" href="#">
          <img src="@/assets/images/logo-meta.png">
        </a>
        <div class="collapse navbar-collapse d-flex justify-content-between">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Request for review</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
          </ul>
          <div class="user d-flex align-items-center">
            <div class="avatar rounded-circle bg-secondary" />
            <div class="menu">
              <button
                class="btn btn-white btn-outline-light border-0 p-0"
                type="button"
              >
                <img src="@/assets/icons/arrow-drop.svg" alt="">
              </button>
              <div />
              <ul>
                <li class="px-2">
                  Action
                </li>
                <li class="px-2">
                  Another action
                </li>
                <li class="px-2">
                  Something else here
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderPage'
}
</script>
<style lang="scss" scoped>
.header {
  .navbar {
    padding: 12.5px 0 12.5px 0;
  }
  .logo {
    margin-right: 46px;
  }
  ul {
    li {
      padding: 0 22px 0 22px;
      a {
        color: #666687 !important;
        font-weight: 500;
      }
      .active {
        color: blue !important;
        font-weight: 600;
      }
    }
  }
  .user{
    position: relative;
    .avatar {
      height: 47px;
      width: 47px;
      margin-right: 11.26px;
    }
    button{
      padding: 5px;
    }
    .menu{
      div{
        position: absolute;
        width: 35px;
        height: 30px;
        right: 0;
      }
      &:hover ul{
        display: block;
      }
      ul{
        z-index: 1000;
        display: none;
        width: 230px;
        list-style: none;
        position: absolute;
        top: 60px;
        right: 0;
        margin: 0;
        padding: 16px;
        border-radius: 5px;
        background-color: rgb(242, 242, 242);
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
}
</style>

<template>
  <div>

    <!-- content -->
    <div class="container">
      <div class="women_main">
        <!-- start sidebar -->
        <div class="col-md-3">
          <div class="w_sidebar">
            <div class="w_nav1">
              <h4>All</h4>
              <ul>
                <li v-for="group in groups" :key="group">
                  <a href="#" v-on:click="groupClick(group,$event)">{{group}}</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <!-- start content -->
        <div class="col-md-9 w_content">

          <!-- grids_of_4 -->

          <div class="grids_of_4" v-for="(datas,index) in dataList" :key="index">
            <div class="grid1_of_4" v-for="product in datas" :key="product.code">
              <div class="content_box">
                <a href="details.html">
                  <div class="view view-fifth">
                    <img :src="product.imgUrl" class="img-responsive" alt="" />
                    <div class="mask">
                      <div class="info">Quick View</div>
                    </div>
                  </div>
                </a>
                <h4>
                  <a href="details.html"> {{product.name}}</a>
                </h4>
                <p>{{product.desc}}</p>
                Rs. {{product.price}}
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- end grids_of_4 -->

          <nav aria-label="Page navigation" style="text-align:right">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="clearfix"></div>

        <!-- end content -->
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      productList: null,
      columns: 4,
      groups: null
    }
  },
  computed: {
    dataList () {
      var len = this.productList.length
      var datalist = []
      let i = 0
      for (; i < len; i += this.columns) {
        datalist.push(this.productList.slice(i, i + this.columns))
      }
      return datalist
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.productList = [
        {
          code: 'w1',
          name: 'DUIS AUTEMCC',
          imgUrl: '/static/w1.jpg',
          price: '499',
          desc: 'this is a desc text.'
        },
        {
          code: 'w2',
          name: 'DUIS AUTEMUU',
          imgUrl: '/static/w2.jpg',
          price: '500',
          desc: 'this is a desc text.'
        },
        {
          code: 'w3',
          name: 'DUIS AUTEMXX',
          imgUrl: '/static/w3.jpg',
          price: '600',
          desc: 'this is a desc text.'
        },
        {
          code: 'w4',
          name: 'DUIS AUTEMFF',
          imgUrl: '/static/w4.jpg',
          price: '700',
          desc: 'this is a desc text.'
        },
        {
          code: 'w5',
          name: 'DUIS AUTEMFF',
          imgUrl: '/static/w4.jpg',
          price: '700',
          desc: 'this is a desc text.'
        },
        {
          code: 'w6',
          name: 'DUIS AUTEMFF',
          imgUrl: '/static/w4.jpg',
          price: '700',
          desc: 'this is a desc text.'
        },
        {
          code: 'w7',
          name: 'DUIS AUTEMFF',
          imgUrl: '/static/w4.jpg',
          price: '700',
          desc: 'this is a desc text.'
        },
        {
          code: 'w8',
          name: 'DUIS AUTEMFF',
          imgUrl: '/static/w4.jpg',
          price: '700',
          desc: 'this is a desc text.'
        },
        {
          code: 'w9',
          name: 'DUIS AUTEMFF',
          imgUrl: '/static/w4.jpg',
          price: '700',
          desc: 'this is a desc text.'
        },
        {
          code: 'w10',
          name: 'DUIS AUTEMFF',
          imgUrl: '/static/w4.jpg',
          price: '700',
          desc: 'this is a desc text.'
        }
      ]
      this.groups = ['WOMEN', 'NEW ARRIVALS']
    },
    groupClick: function (group, event) {
      event.stopPropagation()
      alert(group)
    }
  }
}
</script>

<style scoped>

</style>

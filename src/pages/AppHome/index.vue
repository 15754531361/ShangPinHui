<template>
  <div>
    <type-nav />
    <banner-news />
    <goods-recommend />
    <goods-rank />
    <goods-interested />
    <goods-floor />
    <goods-floor />
    <goods-brand />
  </div>
</template>

<script>
import BannerNews from '@/pages/AppHome/BannerNews'
import GoodsRecommend from '@/pages/AppHome/GoodsRecommend'
import GoodsRank from '@/pages/AppHome/GoodsRank'
import GoodsInterested from '@/pages/AppHome/GoodsInterested'
import GoodsFloor from '@/pages/AppHome/GoodsFloor'
import GoodsBrand from '@/pages/AppHome/GoodsBrand'

export default {
  name: 'app-home',
  components: {
    BannerNews,
    GoodsRecommend,
    GoodsRank,
    GoodsInterested,
    GoodsFloor,
    GoodsBrand,
  },
}
</script>

<style>
</style>
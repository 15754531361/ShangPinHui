<template>
  <div>
    <type-nav />
    <banner-news />
    <goods-recommend />
    <goods-rank />
    <goods-interested />
    <goods-kind />
    <goods-kind />
    <goods-brand />
  </div>
</template>

<script>
import BannerNews from '@/pages/AppHome/BannerNews'
import GoodsRecommend from '@/pages/AppHome/GoodsRecommend'
import GoodsBrand from '@/pages/AppHome/GoodsBrand'
import GoodsInterested from '@/pages/AppHome/GoodsInterested'
import GoodsKind from '@/pages/AppHome/GoodsKind'
import GoodsRank from '@/pages/AppHome/GoodsRank'

export default {
  name: 'app-home',
  components: {
    BannerNews,
    GoodsRecommend,
    GoodsRank,
    GoodsInterested,
    GoodsKind,
    GoodsBrand,
  },
}
</script>

<style>
</style>
<template>
  <div class="m-10">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Cards title="Menkaji" description="Membaca arti Al-Qur'an lebih mudah dengan pembagian topik bacaan dan tafsirnya." button-text="Mulai Menkaji" button-link="tadarus" />
    </div>
  </div>
</template>

<script>
import Cards from '@/components/Cards'
import surahList from '@/components/surah.js'
import topicList from '@/components/topic.js'

export default {
  components: {
    Cards
  },
  head () {
    return {
      title: "Selamat Datang di Al Qur'an Digital"
    }
  },
  data () {
    return {
      surah_list: surahList('all'),
      topic_list: topicList('all')
    }
  },
  mounted () {
    if (localStorage.language && localStorage.edition && localStorage.base_url) {
      this.language = localStorage.language
    } else {
      localStorage.language = 'id'
      localStorage.edition = 'id.indonesian'
      localStorage.base_url = 'https://api.alquran.cloud/v1'
    }
  }
}
</script>

<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'News',

    metaInfo: { title: 'News' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'news/list',
        'news/movies',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'news',
      },
    },
  }
</script>

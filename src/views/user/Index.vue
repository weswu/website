<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'User',

    metaInfo: { title: 'Personal' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'user',
      },
    },
  }
</script>

<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Music',

    metaInfo: { title: 'Music' },

    extends: View,

    mixins: [
      LoadSections([
        'music'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'music',
      },
    },
  }
</script>
